<template>
  <div class="table-page-container">
    <div class="table-page-header" v-if="title">
      <slot name="header">
        <div class="page-header-title">
          {{ title }}
          <span v-if="desc" class="page-header-desc" v-html="desc"></span>
        </div>
      </slot>
    </div>

    <div class="table-page-main">
      <div class="table-page-main-box">
        <Classification
          v-if="classify && !hideClassify"
          :visible="classificationVisible"
          ref="classification"
          :comTitle="classify.comTitle"
          :authority="classify.authority"
          :viewPage="classify.viewPage"
          :types="classify.types"
          :title="classify.title"
          :kai-title="classify.title"
          :dragState="dragState"
          @nodeChecked="nodeChecked"
          @update:visible="classificationVisible = $event"
          @drop-in-tag="fetch()"
        ></Classification>
        <div class="table-page-body">
          <div class="table-page-nav">
            <slot name="nav"></slot>
          </div>
          <div class="table-page-topbar py-3" :class="{ 'pl-3': classificationVisible }">
            <div class="table-page-search-bar flex align-center">
              <IconButton
                v-if="classify && !hideClassify && !classificationVisible"
                class="mx-2 rotate-180"
                @click="handleToggleClassify"
                >expand-list</IconButton
              >
              <slot name="search"></slot>
            </div>
            <div class="table-page-operation-bar">
              <slot name="operation"></slot>
            </div>
          </div>
          <ProTable
            ref="table"
            v-loading="loading"
            class="table-page-table"
            :row-class-name="classificationVisible ? 'grabbable' : ''"
            height="100%"
            :element-loading-text="$t('packages_business_dataFlow_dataLoading')"
            :row-key="rowKey"
            :span-method="spanMethod"
            :data="list"
            :default-sort="defaultSort"
            :draggable="draggable || classificationVisible"
            @selection-change="handleSelectionChange"
            @sort-change="$emit('sort-change', $event)"
            @row-dragstart="handleDragStart"
            @row-dragend="handleDragEnd"
            @select="onSelectRow"
            v-on="$listeners"
          >
            <slot></slot>
            <div slot="empty" class="empty">
              <VIcon size="140">no-data-color</VIcon>
              <slot name="noDataText"></slot>
            </div>
          </ProTable>
          <div class="table-footer">
            <slot name="tableFooter"></slot>
          </div>
          <div class="pagination-wrapper flex align-center gap-3 pl-3 pt-3">
            <transition name="el-fade-in-linear">
              <div v-if="multipleSelection.length" class="flex align-center gap-3">
                <ElCheckbox :value="true" @change="clearSelection"></ElCheckbox>
                <span class="fw-sub text-nowrap"
                  >{{ $t('packages_business_selected_rows', { val: multipleSelection.length }) }}
                </span>
                <slot name="multipleSelectionActions"></slot>
              </div>
            </transition>

            <el-pagination
              background
              class="table-page-pagination ml-auto mt-0"
              layout="->,total, sizes,  prev, pager, next, jumper"
              :current-page.sync="page.current"
              :page-sizes="[10, 20, 50, 100]"
              :page-size.sync="page.size"
              :total="page.total"
              @size-change="fetch(1)"
              @current-change="handleCurrent"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <SelectClassify
      v-if="classify"
      ref="classify"
      :types="classify.types"
      @operationsClassify="$emit('classify-submit', $event)"
    ></SelectClassify>
  </div>
</template>

<script>
import { delayTrigger, on, off } from '@tap/shared'
import { VIcon, Classification, ProTable, IconButton } from '@tap/component'
import { makeDragNodeImage } from '../shared'

import SelectClassify from './SelectClassify'

export default {
  components: {
    Classification,
    SelectClassify,
    VIcon,
    ProTable,
    IconButton
  },
  props: {
    title: String,
    desc: String,
    defaultPageSize: {
      type: Number,
      default: 20
    },
    hideClassify: {
      // 是否隐藏左侧栏
      type: Boolean,
      default: false
    },
    classify: {
      type: Object
    },
    remoteMethod: Function,
    rowKey: [String, Function],
    spanMethod: [Function],
    defaultSort: Object,
    draggable: Boolean
  },
  data() {
    return {
      loading: false,
      page: {
        current: 1,
        size: this.defaultPageSize,
        total: 0
      },
      list: [],
      multipleSelection: [],
      tags: [],
      classificationVisible: false,
      dragState: {
        isDragging: false,
        draggingObjects: [],
        dropNode: null,
        allowDrop: true
      },
      draggingNodeImage: null,
      shiftKeyPressed: false
    }
  },
  mounted() {
    this.fetch(1)
    this.handleKeyDown = ev => {
      this.shiftKeyPressed = ev.shiftKey
    }
    this.handleKeyUp = ev => {
      setTimeout(() => {
        this.shiftKeyPressed = false
      }, 0)
    }
    on(document, 'keydown', this.handleKeyDown)
    on(document, 'keyup', this.handleKeyUp)
  },
  beforeDestroy() {
    off(document, 'keydown', this.handleKeyDown)
    off(document, 'keyup', this.handleKeyUp)
  },
  methods: {
    fetch(pageNum, debounce = 0, hideLoading, callback) {
      let timer = null
      if (pageNum === 1) {
        this.multipleSelection = []
        this.$emit('selection-change', [])
        this.$refs?.table?.clearSelection()
        this.lastSelectIndex = undefined
      }
      this.page.current = pageNum || this.page.current
      this.$nextTick(() => {
        delayTrigger(() => {
          if (!hideLoading) {
            this.loading = true
          }
          this.remoteMethod &&
            this.remoteMethod({
              page: this.page,
              tags: this.tags,
              data: this.list
            })
              .then(({ data, total }) => {
                this.page.total = total
                this.list = data || []

                // 缓存每页条数
                let pageData = {}
                pageData[this.$route.name] = this.page.size

                if (total > 0 && (!data || !data.length)) {
                  clearTimeout(timer)
                  timer = setTimeout(() => {
                    this.fetch(this.page.current - 1)
                  }, 2000)
                }
              })
              .finally(() => {
                this.loading = false
                this.$nextTick(() => {
                  this.$refs.table?.doLayout()
                })
                callback?.(this.getData())
              })
        }, debounce)
      })
    },
    handleCurrent(val) {
      this.multipleSelection = []
      this.$emit('selection-change', [])
      this.$refs?.table?.clearSelection()
      this.fetch(val) //主要为了换页 清空选中数据
    },
    nodeChecked(tags) {
      this.tags = tags
      this.fetch(1)
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      this.$emit('selection-change', val)
    },
    showClassify(tagList) {
      this.$refs.classify.show(tagList)
    },
    getData() {
      return this.list
    },
    clearSelection() {
      this.$refs?.table?.clearSelection()
    },
    handleToggleClassify() {
      this.$refs.classification.toggle()
    },
    handleDragStart(row, column, ev) {
      if (!row.id || !row.name) return false

      this.dragState.isDragging = true
      let selection = this.multipleSelection

      if (selection.find(it => it.id === row.id)) {
        this.dragState.draggingObjects = selection
      } else {
        this.dragState.draggingObjects = [row]
      }

      this.draggingNodeImage = makeDragNodeImage(
        ev.currentTarget.querySelector('.tree-item-icon'),
        row.name,
        this.dragState.draggingObjects.length
      )
      ev.dataTransfer.setDragImage(this.draggingNodeImage, 0, 0)
    },
    handleDragEnd() {
      this.dragState.isDragging = false
      this.dragState.draggingObjects = []
      this.dragState.dropNode = null
      document.body.removeChild(this.draggingNodeImage)
      this.draggingNodeImage = null
    },
    onSelectRow(selection, current) {
      try {
        const selected = selection.some(row => row.id === current.id)

        if (this.shiftKeyPressed && this.multipleSelection.length && this.lastSelectIndex !== undefined) {
          let lastIndex = this.lastSelectIndex
          let currentIndex = this.list.findIndex(row => row.id === current.id)

          if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
            const tmp = currentIndex < lastIndex ? -1 : 1

            // 先触发selection-change
            setTimeout(() => {
              while (lastIndex !== currentIndex) {
                this.$refs.table.toggleRowSelection(this.list[lastIndex], selected)
                lastIndex += tmp
              }
            }, 0)
          }
        }

        this.lastSelectIndex = selected ? this.list.findIndex(row => row.id === current.id) : undefined
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss">
.table-page-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: map-get($bgColor, white);
  min-width: 720px;
  flex: 1;
  width: 100%;

  .table-page-header {
    padding: 20px;
    background: #eff1f4;
    overflow: hidden;
    // border-bottom: 1px solid #dedee4;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;

    .page-header-title {
      font-size: 16px;
      color: map-get($fontColor, dark);
      font-weight: 600;

      &.link {
        color: rgb(72, 182, 226);
        cursor: pointer;
      }
    }

    .page-header-desc {
      margin-top: 10px;
      font-size: 12px;
      color: map-get($fontColor, slight);
    }
  }

  .table-page-main {
    display: flex;
    flex: 1;
    // padding: 0 20px 20px 20px;
    overflow: hidden;
    .table-page-main-box {
      display: flex;
      flex: 1;
      width: 100%;
      border-radius: 4px;
      background-color: map-get($bgColor, white);
    }
  }

  .table-page-left {
    border-right: 1px solid #ebeef5;
    // margin-right: 10px;
  }

  .table-page-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    // background-color: map-get($bgColor, white);
    border-radius: 4px;
    .el-table--border {
      border: none;
    }
    .table-page-topbar {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      //flex-wrap: wrap-reverse;

      .table-page-operation-bar {
        text-align: right;
      }
    }

    .table-page-table {
      flex: 1;
      border-bottom: none;
      border-radius: 3px;
      font-size: 14px;
      background-color: map-get($bgColor, white);
      overflow: hidden;
      // .el-table__fixed-right {
      //   height: 100% !important; //设置高优先，以覆盖内联样式
      // }
      .el-table::before {
        height: 1px;
      }
      .el-table__fixed-body-wrapper {
        background-color: map-get($bgColor, white);
      }
      .el-table__fixed {
        height: auto !important; //设置高优先，以覆盖内联样式
      }
    }

    .el-table--border td,
    .el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
      border-right: 0;
    }

    .el-table--border td {
      .cell {
        color: map-get($fontColor, light);
      }
    }

    .table-footer {
      line-height: 38px;
    }

    .table-page-pagination {
      margin-top: 5px;
    }
  }
}

.pagination-wrapper {
  min-height: 46px;
  .el-button + .el-button {
    margin-left: 0;
  }
}
</style>
