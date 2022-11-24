import i18n from '@tap/i18n'
import Vue from 'vue'
import { debounce } from 'lodash'
import { Path } from '@formily/path'
import { observable } from '@formily/reactive'
import { setValidateLanguage } from '@formily/core'

import { isObject, uuid, mergeLocales, lowerSnake } from '@tap/shared'
import { taskApi, customNodeApi } from '@tap/api'
import { getCurrentLanguage } from '@tap/i18n/src/shared/util'

import { AddDagCommand } from './command'
import { CustomProcessor } from './nodes/extends/CustomProcessor'

const find = (obj, nameParts, conditions) => {
  if (!nameParts.length) return obj

  let value = obj[nameParts.shift()]
  let condition = conditions.shift()

  if (Array.isArray(value) && condition) {
    value = findByCod(value, condition)
  }
  return find(value, nameParts, conditions)
}

const findByCod = (arr, cond) => {
  return arr.find(item => {
    if (isObject(item)) {
      let flag = true
      for (let k of Object.keys(cond)) {
        if (!(k in item) || item[k] !== cond[k]) {
          flag = false
          break
        }
      }
      return flag
    }
  })
}

const getState = () => ({
  stateIsDirty: false, // 状态是否被污染，标识数据改变
  stateIsReadonly: false, // 状态是否被污染，标识数据改变
  allResourceIns: [],
  nodeTypes: [], // 所有节点类型
  nodeErrorState: {}, // 节点错误状态
  processorNodeTypes: [],
  nodeViewOffsetPosition: [0, 0],
  spaceKeyPressed: false,
  shiftKeyPressed: false,
  paperMoveInProgress: false,
  ctorTypes: {}, // 所有节点构造类型
  activeNodeId: null, // 当前激活的节点ID
  activeConnection: null, // 当前激活的连接
  activeActions: [], // 激活的动作
  selectedNodes: [], // 选中的节点
  selectedConnections: [], // 选中的线
  activeType: null,
  formSchema: null,
  taskId: null,
  transformStatus: '', //推演状态 loading, error, finished
  transformLoading: false,
  dag: {
    nodes: [], // 节点数据
    edges: [] // 连线数据
  },

  NodeMap: {},

  dagPromise: null,
  editVersion: null,

  canBeConnectedNodeIds: [],
  LOCALES_STORE: observable.ref({}),
  nodeInputsWatcher: null,
  nodeOutputsWatcher: null,
  showConsole: false,
  pdkPropertiesMap: {},
  taskSaving: false
})

// 初始化 state
const state = getState()

// getters
const getters = {
  stateIsDirty: state => {
    return state.stateIsDirty
  },

  stateIsReadonly: state => {
    return state.stateIsReadonly
  },

  transformLoading: state => {
    return state.transformLoading
  },

  // 判断action是否被标记
  isActionActive: state => action => {
    return state.activeActions.includes(action)
  },

  // 获取所有节点类型
  allNodeTypes: state => {
    return [...state.nodeTypes, ...state.processorNodeTypes]
  },

  processorNodeTypes: state => {
    return state.processorNodeTypes
  },

  nodeType: state => node => {
    const nodeType = node.type
    let foundType
    const allNodeTypes = [...state.nodeTypes, ...state.processorNodeTypes]
    /*if (nodeType === 'database') {
      const dbType = node.databaseType
      foundType = allNodeTypes.find(typeData => typeData.type === nodeType && typeData.attr.databaseType === dbType)
    } else*/ if (nodeType === 'custom_processor') {
      foundType = state.processorNodeTypes.find(typeData => typeData.attr?.customNodeId === node.customNodeId)
    } else {
      foundType = allNodeTypes.find(typeData => typeData.type === nodeType)
    }

    if (foundType === undefined) return null

    return foundType
  },

  // 节点资源实例
  getResourceIns: state => node => {
    return state.allResourceIns.find(ins => ins.selector(node))
  },

  dag: state => state.dag,

  // 获取画布所有节点
  allNodes: state => state.dag.nodes,

  // 所有连线
  allEdges: state => state.dag.edges,

  // 根据id获取节点
  nodeById: state => id => {
    const foundNode = state.dag.nodes.find(node => node.id === id)

    if (foundNode === undefined) {
      return null
    }
    return foundNode
  },

  // 获取激活的节点
  activeNode: (state, getters) => {
    return state.activeNodeId ? getters.nodeById(state.activeNodeId) : null
  },

  // 获取激活的线
  activeConnection: state => {
    return state.activeConnection
  },

  // 判断节点是否激活
  isNodeActive: state => nodeId => {
    return state.activeNodeId === nodeId
  },

  // 判断节点是否选中
  isNodeSelected: state => nodeId => {
    return !!state.selectedNodes.find(n => n.id === nodeId)
  },

  // 获取选中的节点
  getSelectedNodes: state => {
    return state.selectedNodes
  },

  isMultiSelect: state => {
    return state.selectedNodes.length > 1
  },

  // 获取节点构造类
  getCtor: state => type => state.ctorTypes[type],

  getNodeViewOffsetPosition: state => {
    return state.nodeViewOffsetPosition
  },

  isPaperMoveInProgress: state => {
    return state.paperMoveInProgress
  },

  activeType: state => {
    return state.activeType
  },

  formSchema: state => state.formSchema,

  hasNodeError: state => id => state.nodeErrorState[id],

  language: () => {
    return getCurrentLanguage()
  },

  getMessage: (state, getters) => (token, locales) => {
    const lang = getters.language
    const locale = locales ? locales[lang] : state.LOCALES_STORE.value[lang]
    if (!locale) {
      for (let key in state.LOCALES_STORE.value) {
        const message = Path.getIn(state.LOCALES_STORE.value[key], lowerSnake(token))
        if (message) return message
      }
      return
    }
    // return Path.getIn(locale, lowerSnake(token))
    return Path.getIn(locale, token)
  }
}

// actions
const actions = {
  patchTask: debounce(async function ({ state, commit }) {
    commit('toggleTaskSaving', true)
    const data = await taskApi.patch({
      id: state.taskId,
      editVersion: state.editVersion,
      dag: state.dag
    })
    commit('setEditVersion', data.editVersion)
    commit('toggleTaskSaving', false)
  }, 50),

  async updateDag({ state, commit, dispatch }) {
    console.log('updateDag') // eslint-disable-line
    if (!state.taskId || state.stateIsReadonly) return
    commit('toggleTaskSaving', true)
    dispatch('patchTask')
  },

  async addNodeAsync({ dispatch, commit }, nodeData) {
    commit('addNode', nodeData)
    await dispatch('updateDag')
  },

  async loadCustomNode({ commit }) {
    const { items } = await customNodeApi.get()
    const insArr = []

    commit(
      'addProcessorNode',
      items.map(item => {
        const node = {
          name: item.name,
          type: 'custom_processor',
          customNodeId: item.id
        }

        const ins = new CustomProcessor({
          customNodeId: item.id,
          formSchema: item.formSchema
        })

        insArr.push(ins)

        // 设置属性__Ctor不可枚举
        Object.defineProperty(node, '__Ctor', {
          value: ins,
          enumerable: false
        })

        return node
      })
    )
    commit('addResourceIns', insArr)
  }
}

// mutations
const mutations = {
  /**
   * 设置数据脏状态
   * @param state
   * @param dirty
   */
  setStateDirty(state, dirty) {
    state.stateIsDirty = dirty
  },

  setStateReadonly(state, readonly) {
    state.stateIsReadonly = readonly
  },

  /**
   * 标记action
   * @param state
   * @param action
   */
  addActiveAction(state, action) {
    if (!state.activeActions.includes(action)) {
      state.activeActions.push(action)
    }
  },

  /**
   * 删除action标记
   * @param state
   * @param action
   */
  removeActiveAction(state, action) {
    const actionIndex = state.activeActions.indexOf(action)
    if (~actionIndex) {
      state.activeActions.splice(actionIndex, 1)
    }
  },

  setPaperMoveInProgress(state, value) {
    state.paperMoveInProgress = value
  },

  setPaperSpaceKeyPressed(state, value) {
    state.spaceKeyPressed = value
  },

  toggleShiftKeyPressed(state, flag = !state.shiftKeyPressed) {
    state.shiftKeyPressed = flag
  },

  addResourceIns(state, allResourceIns) {
    state.allResourceIns.push(...allResourceIns)
  },

  // 设置激活节点
  setActiveNode(state, nodeId) {
    if (!nodeId || state.activeNodeId !== nodeId) {
      // eslint-disable-next-line no-console
      console.log(i18n.t('packages_dag_src_store_qingkongjiedianshu'))
      state.nodeInputsWatcher?.()
      state.nodeOutputsWatcher?.()
    }

    state.activeNodeId = nodeId
    state.activeType = nodeId ? 'node' : null
  },

  // 设置激活连接
  setActiveConnection(state, connection) {
    Vue.set(state, 'activeConnection', connection)
    state.activeType = connection ? 'connection' : null
  },

  // 激活类型，用作判断
  setActiveType(state, type) {
    state.activeType = type
  },

  // 添加节点
  addNode(state, nodeData) {
    if (state.NodeMap[nodeData.id]) return
    if (!nodeData.$inputs) nodeData.$inputs = []
    if (!nodeData.$outputs) nodeData.$outputs = []
    state.dag.nodes.push(nodeData)
    Vue.set(state.NodeMap, nodeData.id, nodeData)
  },

  addNodes(state, nodes) {
    nodes.forEach(node => {
      if (!node.$inputs) node.$inputs = []
      if (!node.$outputs) node.$outputs = []
      state.dag.nodes.push(node)
      Vue.set(state.NodeMap, node.id, node)
    })
  },

  // 更新节点属性
  updateNodeProperties(state, updateInformation) {
    console.log('updateInformation', updateInformation) // eslint-disable-line
    const node = state.dag.nodes.find(node => node.id === updateInformation.id)

    const updateObjVal = (target, obj) => {
      Object.entries(obj).forEach(([key, value]) => {
        if (isObject(value) && target[key]) {
          updateObjVal(target[key], value)
        } else {
          Vue.set(target, key, value)
        }
      })
    }

    if (node) {
      updateObjVal(node, updateInformation.properties)
      /*Object.entries(updateInformation.properties).forEach(([key, value]) => {
        if (isObject(value)) {
        } else {
          Vue.set(node, key, value)
        }
      })*/
      /*for (const key of Object.keys(updateInformation.properties)) {
        Vue.set(node, key, updateInformation.properties[key])
      }*/
    }
  },

  // 选择节点
  addSelectedNode(state, node) {
    state.selectedNodes.push(node)
  },

  // 将节点从选中移除
  removeNodeFromSelection(state, node) {
    const { selectedNodes } = state
    const index = selectedNodes.findIndex(n => n.id === node.id)
    ~index && selectedNodes.splice(index, 1)
  },

  // 重置选择的节点
  resetSelectedNodes(state) {
    state.selectedNodes = []
  },

  selectConnection(state, connection) {
    state.selectedConnections.push(connection)
  },

  deselectConnection(state, connection) {
    const { selectedConnections } = state
    const index = selectedConnections.findIndex((target, source) => {
      return connection.target === target && connection.source === source
    })
    ~index && selectedConnections.splice(index, 1)
  },

  deselectAllConnections(state) {
    state.selectedConnections = []
  },

  // 针对数组，修改某个项的值
  setNodeValueByConditions(state, updateInformation) {
    const node = state.dag.nodes.find(node => node.id === updateInformation.id)
    const nameParts = updateInformation.key.split('.')
    const key = nameParts[nameParts.length - 1]
    const { conditions } = updateInformation

    if (node === undefined || node === null) {
      throw new Error(i18n.t('packages_dag_src_store_weizhaodaojiedian'))
    }

    let target = find(node, nameParts, conditions)

    state.stateIsDirty = true
    target && Vue.set(target, key, updateInformation.value)
  },

  // 通过Path[k1.k2]更新节点
  setNodeValueByPath(state, updateInformation) {
    const node = state.dag.nodes.find(node => node.id === updateInformation.id)
    const nameParts = updateInformation.path.split('.')
    const key = nameParts.pop()
    const { conditions = [] } = updateInformation

    if (node === undefined || node === null) {
      throw new Error(i18n.t('packages_dag_src_store_weizhaodaojiedian'))
    }

    let target = find(node, nameParts, conditions)

    state.stateIsDirty = true
    target && Vue.set(target, key, updateInformation.value)
  },

  // 更新节点value
  setNodeValue(state, updateInformation) {
    const node = state.dag.nodes.find(node => node.id === updateInformation.id)

    if (node === undefined || node === null) {
      throw new Error(i18n.t('packages_dag_src_store_weizhaodaojiedian'))
    }

    state.stateIsDirty = true
    Vue.set(node, updateInformation.key, updateInformation.value)
  },

  // 添加连接，设置input、output
  addConnection(state, connection) {
    const { source, target } = connection
    const index = state.dag.edges.findIndex(item => item.source === source && item.target === target)
    const sourceNode = state.NodeMap[source]
    const targetNode = state.NodeMap[target]
    const { $outputs = [] } = sourceNode
    const { $inputs = [] } = targetNode

    if (!~index) state.dag.edges.push(connection)

    if (!$outputs.includes(target)) {
      $outputs.push(target)
      Vue.set(sourceNode, '$outputs', $outputs)
    }

    if (!$inputs.includes(source)) {
      $inputs.push(source)
      Vue.set(targetNode, '$inputs', $inputs)
    }
  },

  // 删除连接，清空input中的sourceId、output中的targetId
  removeConnection(state, connection) {
    const { source, target } = connection
    const index = state.dag.edges.findIndex(item => item.source === source && item.target === target)

    if (~index) state.dag.edges.splice(index, 1)

    const sourceNode = state.NodeMap[source]
    const targetNode = state.NodeMap[target]

    const { $outputs = [] } = sourceNode
    const { $inputs = [] } = targetNode

    const ti = $outputs.indexOf(target)
    const si = $inputs.indexOf(source)

    if (~ti) $outputs.splice(ti, 1)
    if (~si) $inputs.splice(si, 1)

    // Vue.set(sourceNode, '$outputs', $outputs)
    // Vue.set(targetNode, '$inputs', $inputs)
  },

  // 移除节点
  removeNode(state, node) {
    const { nodes, edges } = state.dag
    const nodeId = node.id
    const index = nodes.findIndex(n => n.id === nodeId)

    if (!~index) return

    if (state.activeNodeId === nodes[index].id && state.activeType === 'node') {
      state.activeType = null
      state.activeNodeId = null
    }

    nodes.splice(index, 1)
    Vue.delete(state.NodeMap, nodeId)

    state.dag.edges = edges.filter(({ source, target }) => nodeId !== source && nodeId !== target)

    if (node.$outputs?.length) {
      node.$outputs.forEach(id => {
        const { $inputs = [] } = state.NodeMap[id]
        const i = $inputs.indexOf(nodeId)
        if (~i) $inputs.splice(i, 1)
      })
    }

    if (node.$inputs?.length) {
      node.$inputs.forEach(id => {
        const { $outputs = [] } = state.NodeMap[id]
        const i = $outputs.indexOf(nodeId)
        if (~i) $outputs.splice(i, 1)
      })
    }

    state.stateIsDirty = true
  },

  /**
   * 批量删除节点
   * @param state
   * @param nodeIds
   */
  batchRemoveNode(state, nodeIds) {
    nodeIds.forEach(nodeId => {
      const node = state.NodeMap[nodeId]

      Vue.delete(state.NodeMap, nodeId)

      if (node.$outputs?.length) {
        node.$outputs.forEach(id => {
          const outputNode = state.NodeMap[id]
          if (outputNode) {
            const { $inputs = [] } = outputNode
            const i = $inputs.indexOf(nodeId)
            if (~i) $inputs.splice(i, 1)
          }
        })
      }

      if (node.$inputs?.length) {
        node.$inputs.forEach(id => {
          const inputNode = state.NodeMap[id]
          if (inputNode) {
            const { $outputs = [] } = inputNode
            const i = $outputs.indexOf(nodeId)
            if (~i) $outputs.splice(i, 1)
          }
        })
      }
    })

    // 如果是删除当前激活的节点
    if (nodeIds.includes(state.activeNodeId) && state.activeType === 'node') {
      state.activeType = null
      state.activeNodeId = null
    }

    state.dag.nodes = state.dag.nodes.filter(node => !nodeIds.includes(node.id))

    state.dag.edges = state.dag.edges.filter(
      ({ source, target }) => !nodeIds.includes(source) && !nodeIds.includes(target)
    )

    state.stateIsDirty = true
  },

  // 移除所有节点
  removeAllNodes(state, data) {
    if (data?.setStateDirty === true) {
      state.stateIsDirty = true
    }
    state.dag.nodes.splice(0, state.dag.nodes.length)
    state.NodeMap = {}
  },

  setFormSchema(state, schema) {
    Vue.set(state, 'formSchema', schema)
    console.log('state', state) // eslint-disable-line
  },

  /**
   * 标记节点错误状态
   * @param state
   * @param id
   */
  setNodeError(state, id) {
    Vue.set(state.nodeErrorState, id, true)
  },

  setNodeErrorMsg(state, { id, msg }) {
    Vue.set(state.nodeErrorState, id, msg)
  },

  /**
   * 清除节点错误状态
   * @param state
   * @param id
   */
  clearNodeError(state, id) {
    Vue.delete(state.nodeErrorState, id)
  },

  /**
   * 重置任务
   * @param state
   */
  reset(state) {
    state.taskId = null
    state.dag.nodes = []
    state.dag.edges = []
  },

  setEdges(state, edges) {
    state.dag.edges = edges
  },

  addEdges(state, edges) {
    state.dag.edges.push(...edges)
  },

  /**
   * 设置任务ID
   * @param state
   * @param id
   */
  setTaskId(state, id) {
    state.taskId = id
  },

  /**
   * 设置推演状态
   * @param state
   * @param status
   */
  setTransformStatus(state, status) {
    state.transformStatus = status
  },

  setTransformLoading(state, loading) {
    state.transformLoading = loading
  },

  setDagPromise(state, promise) {
    state.dagPromise = promise
  },

  setEditVersion(state, editVersion) {
    state.editVersion = editVersion
  },

  /**
   * 复制节点，如果节点直接有连线，也会一并复制
   * @param state
   */
  copyNodes: state => {
    const nodes = state.selectedNodes
    const edges = state.dag.edges
    let copyEdges = []

    if (nodes.length) {
      const nodeMap = nodes.reduce((map, node) => ((map[node.id] = true), map), {})
      copyEdges = edges.filter(item => nodeMap[item.source] && nodeMap[item.target])
    }

    localStorage['DAG_CLIPBOARD'] = JSON.stringify({
      nodes,
      edges: copyEdges
    })
  },

  /**
   * 粘贴节点
   * @param state
   * @param command
   */
  pasteNodes: async (state, command) => {
    const DAG_CLIPBOARD = localStorage['DAG_CLIPBOARD']
    if (DAG_CLIPBOARD) {
      const dag = JSON.parse(DAG_CLIPBOARD)
      const { nodes, edges } = dag

      if (!nodes.length) return

      // const allNodeTypes = [...state.nodeTypes, ...state.processorNodeTypes]
      // const nodeTypesMap = allNodeTypes.reduce((res, item) => ((res[item.type] = item), res), {})
      const sourceMap = {},
        targetMap = {}

      edges.forEach(item => {
        let _source = sourceMap[item.source]
        let _target = targetMap[item.target]

        if (!_source) {
          sourceMap[item.source] = [item]
        } else {
          _source.push(item)
        }

        if (!_target) {
          targetMap[item.target] = [item]
        } else {
          _target.push(item)
        }
      })

      nodes.forEach(node => {
        const oldId = node.id
        node.id = uuid() // 生成新的ID
        node.attrs.position[0] += 20
        node.attrs.position[1] += 20

        node.$inputs = []
        node.$outputs = []

        // 替换连线里绑定的ID
        if (sourceMap[oldId]) {
          sourceMap[oldId].forEach(item => (item.source = node.id))
        }
        // 替换连线里绑定的ID
        if (targetMap[oldId]) {
          targetMap[oldId].forEach(item => (item.target = node.id))
        }

        const ins = state.allResourceIns.find(ins => ins.selector(node))
        Object.defineProperty(node, '__Ctor', {
          value: ins,
          enumerable: false
        })
      })

      if (edges.length) {
        const outputsMap = {}
        const inputsMap = {}

        edges.forEach(({ source, target }) => {
          let _source = outputsMap[source]
          let _target = inputsMap[target]

          if (!_source) {
            outputsMap[source] = [target]
          } else {
            _source.push(target)
          }

          if (!_target) {
            inputsMap[target] = [source]
          } else {
            _target.push(source)
          }
        })

        nodes.forEach(node => {
          node.$inputs = inputsMap[node.id] || []
          node.$outputs = outputsMap[node.id] || []
        })
      }

      // 执行添加dag命令，可以撤销/重做
      await command.exec(new AddDagCommand(dag))

      // 选中粘贴的节点
      const jsPlumbIns = command.state.instance
      jsPlumbIns.clearDragSelection()
      nodes.forEach(node => jsPlumbIns.addToDragSelection(`node-${node.id}`))
      state.selectedNodes = nodes

      // 存储
      localStorage['DAG_CLIPBOARD'] = JSON.stringify(dag)
    }
  },

  addProcessorNode(state, nodes) {
    state.processorNodeTypes.push(...nodes)
  },

  resetState(state) {
    Object.assign(state, getState())
  },

  setCanBeConnectedNodeIds(state, ids) {
    state.canBeConnectedNodeIds = ids
  },

  registerLocales: (state, packages) => {
    packages.forEach(locales => {
      mergeLocales(state.LOCALES_STORE.value, locales)
    })
  },

  setValidateLanguage() {
    setValidateLanguage(getCurrentLanguage())
  },

  setNodeInputsWatcher(state, watcher) {
    state.nodeInputsWatcher = watcher
  },

  setNodeOutputsWatcher(state, watcher) {
    state.nodeOutputsWatcher = watcher
  },

  toggleConsole(state, flag = !state.showConsole) {
    state.showConsole = flag
  },

  setPdkPropertiesMap(state, map) {
    Vue.set(state, 'pdkPropertiesMap', map)
  },

  toggleTaskSaving(state, flag = !state.taskSaving) {
    state.taskSaving = flag
  }
}

export default {
  // 加上命名空间
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
