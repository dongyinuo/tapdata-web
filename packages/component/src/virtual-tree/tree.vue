<template>
  <div
    class="el-tree virtual-tree"
    :class="{
      'el-tree--highlight-current': highlightCurrent,
      'is-dragging': !!dragState.draggingNode,
      'is-drop-not-allow': !dragState.allowDrop,
      'is-drop-inner': dragState.dropType === 'inner'
    }"
    role="tree"
  >
    <virtual-list
      v-if="height"
      :class="wrapperClassName"
      :style="{ 'max-height': height, 'overflow-y': 'auto' }"
      :keeps="keeps"
      :data-key="getNodeKey"
      :data-sources="visibleList"
      :data-component="itemComponent"
      :extra-props="{
        renderAfterExpand,
        showCheckbox,
        renderContent,
        onNodeExpand: handleNodeExpand
      }"
      @scroll.native="handleScroll"
    />
    <el-tree-node
      v-else
      v-for="child in root.childNodes"
      :node="child"
      :props="props"
      :render-after-expand="renderAfterExpand"
      :show-checkbox="showCheckbox"
      :key="getNodeKey(child)"
      :render-content="renderContent"
      @node-expand="handleNodeExpand"
    ></el-tree-node>
    <div class="el-tree__empty-block" v-if="isEmpty">
      <span class="el-tree__empty-text">{{ emptyText }}</span>
    </div>
    <div v-show="dragState.showDropIndicator" class="el-tree__drop-indicator" ref="dropIndicator"></div>
  </div>
</template>

<script>
import { Tree } from 'element-ui'
import VirtualList from 'vue-virtual-scroll-list'
import ElTreeNode from 'element-ui/packages/tree/src/tree-node.vue'
import ElVirtualNode from './tree-virtual-node.vue'
export default {
  name: 'ElTree',
  components: {
    VirtualList,
    ElTreeNode
  },
  extends: Tree,
  data() {
    return {
      itemComponent: ElVirtualNode
    }
  },
  props: {
    height: {
      type: [String, Number],
      default: 0
    },
    extraLine: {
      type: Number,
      default: 8
    },
    wrapperClassName: [String, Array],
    keeps: {
      type: Number
    }
  },
  computed: {
    visibleList() {
      return this.flattenTree(this.root.childNodes)
    }
  },
  methods: {
    flattenTree(datas) {
      return datas.reduce((conn, data) => {
        if (data.visible) {
          conn.push(data)
        }
        if (data.expanded && data.childNodes.length) {
          conn.push(...this.flattenTree(data.childNodes))
        }
        return conn
      }, [])
    },

    handleScroll() {
      this.$emit('handle-scroll')
    }
  }
}
</script>

<style lang="scss">
.virtual-tree {
  .el-tree-node__loading-icon {
    margin-right: 0;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
  }
  .el-tree-node__content {
    position: relative;
  }
}
</style>
