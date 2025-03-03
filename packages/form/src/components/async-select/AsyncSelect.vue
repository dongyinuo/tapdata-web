<template>
  <div
    class="el-select"
    :class="[selectSize ? 'el-select--' + selectSize : '']"
    @click.stop="toggleMenu"
    v-clickoutside="handleClose"
  >
    <div
      class="el-select__tags"
      v-if="multiple"
      ref="tags"
      :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }"
    >
      <span v-if="collapseTags && selected.length">
        <el-tag
          :closable="!selectDisabled"
          :size="collapseTagSize"
          :hit="selected[0].hitState"
          type="info"
          @close="deleteTag($event, selected[0])"
          disable-transitions
        >
          <span class="el-select__tags-text">{{ selected[0].currentLabel }}</span>
        </el-tag>
        <el-tag v-if="selected.length > 1" :closable="false" :size="collapseTagSize" type="info" disable-transitions>
          <span class="el-select__tags-text">+ {{ selected.length - 1 }}</span>
        </el-tag>
      </span>
      <transition-group @after-leave="resetInputHeight" v-if="!collapseTags">
        <el-tag
          v-for="item in selected"
          :key="getValueKey(item)"
          :closable="!selectDisabled"
          :size="collapseTagSize"
          :hit="item.hitState"
          type="info"
          @close="deleteTag($event, item)"
          disable-transitions
        >
          <span class="el-select__tags-text">{{ item.currentLabel }}</span>
        </el-tag>
      </transition-group>

      <input
        type="text"
        class="el-select__input"
        :class="[selectSize ? `is-${selectSize}` : '']"
        :disabled="selectDisabled"
        :autocomplete="autoComplete || autocomplete"
        @focus="handleFocus"
        @blur="softFocus = false"
        @keyup="managePlaceholder"
        @keydown="resetInputState"
        @keydown.down.prevent="navigateOptions('next')"
        @keydown.up.prevent="navigateOptions('prev')"
        @keydown.enter.prevent="selectOption"
        @keydown.esc.stop.prevent="visible = false"
        @keydown.delete="deletePrevTag"
        @keydown.tab="visible = false"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        v-model="query"
        @input="debouncedQueryChange"
        v-if="filterable"
        :style="{ 'flex-grow': '1', width: inputLength / (inputWidth - 32) + '%', 'max-width': inputWidth - 42 + 'px' }"
        ref="input"
      />
    </div>
    <ElInput
      ref="reference"
      v-model="selectedLabel"
      :id="id"
      type="text"
      :name="name"
      :placeholder="currentPlaceholder"
      :autocomplete="autoComplete || autocomplete"
      :size="selectSize"
      :disabled="selectDisabled"
      :readonly="readonly"
      :validate-event="false"
      :class="{ 'is-focus': visible }"
      :tabindex="multiple && filterable ? '-1' : null"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.native="debouncedOnInputChange"
      @keydown.native.down.stop.prevent="navigateOptions('next')"
      @keydown.native.up.stop.prevent="navigateOptions('prev')"
      @keydown.native.enter.prevent="selectOption"
      @keydown.native.esc.stop.prevent="visible = false"
      @keydown.native.tab="visible = false"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
      @mouseenter.native="inputHovering = true"
      @mouseleave.native="inputHovering = false"
    >
      <template slot="prefix" v-if="$scopedSlots.prefix">
        <slot v-if="!visible" name="prefix" />
      </template>
      <template slot="suffix">
        <span class="inline-flex align-center">
          <slot v-if="!visible" name="suffix"></slot>
          <span v-if="showLoading" class="el-select__loading">
            <svg
              viewBox="0 0 1024 1024"
              focusable="false"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
              ></path>
            </svg>
          </span>
          <template v-else>
            <i v-show="!showClose" :class="['el-select__caret', 'el-input__icon', 'el-icon-' + iconClass]"></i>
            <i
              v-if="showClose"
              class="el-select__caret el-input__icon el-icon-circle-close"
              @click="handleClearClick"
            ></i>
          </template>
        </span>
      </template>
    </ElInput>
    <transition name="el-zoom-in-top" @before-enter="handleMenuEnter" @after-leave="doDestroy">
      <ElSelectMenu ref="popper" :append-to-body="popperAppendToBody" v-show="visible && emptyText !== false">
        <ElScrollbar
          tag="div"
          wrap-class="el-select-dropdown__wrap"
          view-class="el-select-dropdown__list"
          ref="scrollbar"
          :class="{ 'is-empty': !allowCreate && query && filteredOptionsCount === 0 }"
          v-show="options.length > 0 && !showLoading"
        >
          <div v-infinite-scroll="loadMore" :infinite-scroll-disabled="scrollDisabled">
            <slot name="prepend-item"></slot>
            <ElOption :value="query" created v-if="showNewOption">
              <slot name="created-option" :value="query"></slot>
            </ElOption>

            <template v-if="itemType === 'string'">
              <ElOption v-for="item in items" :key="item" :value="item" />
            </template>
            <template v-else>
              <ElOption
                v-for="(item, i) in items"
                :key="item[itemValue]"
                :label="item[itemLabel]"
                :value="item[itemValue]"
                :index="i"
              />
            </template>
            <div v-if="loadingMore" class="el-select-dropdown__empty">
              <span class="el-select-dropdown__loading-icon mr-2">
                <svg
                  viewBox="0 0 1024 1024"
                  focusable="false"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
                  ></path>
                </svg>
              </span>
              <span>{{ loadingTxt }}</span>
            </div>
          </div>
        </ElScrollbar>
        <div v-if="showLoading" class="el-select-dropdown__empty">
          <span class="el-select-dropdown__loading-icon mr-2">
            <svg
              viewBox="0 0 1024 1024"
              focusable="false"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
              ></path>
            </svg>
          </span>
          <span>{{ loadingTxt }}</span>
        </div>
        <template v-else-if="emptyText && (!allowCreate || (allowCreate && options.length === 0))">
          <slot name="empty" v-if="$slots.empty"></slot>
          <p class="el-select-dropdown__empty" v-else>
            {{ emptyText }}
          </p>
        </template>
      </ElSelectMenu>
    </transition>
  </div>
</template>

<script>
import { merge, escapeRegExp, uniqBy, debounce } from 'lodash'
import { Select } from 'element-ui'
import { getValueByPath } from 'element-ui/lib/utils/util'
import scrollIntoView from 'element-ui/lib/utils/scroll-into-view'
import { CancelToken } from '@tap/api'
import { valueEquals } from 'element-ui/src/utils/util'

export default {
  name: 'AsyncSelect',

  extends: Select,

  props: {
    method: {
      type: Function,
      required: true
    },
    createValidate: Function, // 当allowCreate打开时，验证创建项
    onSetSelected: Function, // 主要是在schema场景下做交互使用
    params: Object,
    itemType: {
      type: String,
      default: 'object'
    },
    itemLabel: {
      type: String,
      default: 'label'
    },
    itemValue: {
      type: String,
      default: 'value'
    },
    itemQuery: String,
    filterable: {
      type: Boolean,
      default: true
    },
    defaultFirstOption: {
      type: Boolean,
      default: true
    },
    filterMethod: {
      type: Function,
      default: () => {}
    },
    remote: {
      type: Boolean,
      default: true
    },
    lazy: {
      type: Boolean,
      default: false
    },
    currentLabel: [String, Array],
    debounceWait: {
      type: Number,
      default: 200
    },
    inputQueryWait: {
      type: Number,
      default: 100
    },
    pageSize: {
      type: Number,
      default: 20
    }
  },

  data() {
    return {
      pagination: {
        page: 1
      },

      total: 0,
      items: [],
      loadingMore: false,
      lastQuery: null,
      loadingData: false,
      loadingOption: false
    }
  },

  computed: {
    iconClass() {
      return this.visible ? 'arrow-up is-reverse' : 'arrow-up'
    },

    showNewOption() {
      let hasExistingOption = this.options
        .filter(option => !option.created)
        .some(option => option.currentLabel === this.query)
      // this.query !== this.value 排除输入值===选项值，而选项值不在列表里面（因为分页的原因未加载到）
      return this.filterable && this.allowCreate && this.query !== '' && !hasExistingOption && this.query !== this.value
    },

    showLoading() {
      return this.loading || this.loadingOption || this.loadingData
    },

    emptyText() {
      if (this.showLoading) {
        return this.loadingTxt
      } else {
        if (this.remote && this.query === '' && this.items.length === 0) return false
        if (this.filterable && this.query && this.items.length > 0 && this.filteredOptionsCount === 0) {
          return this.noMatchText || this.$t('packages_form_el_select_noMatch')
        }
        if (this.total === 0) {
          return this.noDataText || this.$t('public_data_no_data1')
        }
      }
      return null
    },

    loadingTxt() {
      return this.loadingText || this.$t('packages_form_el_select_loading')
    },

    noMore() {
      return this.pagination.page >= Math.ceil(this.total / this.pageSize)
    },

    scrollDisabled() {
      return this.loading || this.noMore || this.loadingMore
    },

    debounce() {
      return this.inputQueryWait
    }
  },

  watch: {
    params(val, old) {
      if (JSON.stringify(val) !== JSON.stringify(old)) {
        this.lastQuery = null
        this.query = ''
        this.debounceLoadData()
      }
    },

    visible(v) {
      if (this.lazy && !this.items.length && v) {
        this.loadData()
      }
    }
  },

  async created() {
    if (!this.lazy) await this.loadData()

    this.debounceLoadData = debounce(() => {
      this.loadData()
    }, this.debounceWait)
  },

  methods: {
    onInputChange() {
      if (this.filterable && this.query !== this.selectedLabel) {
        this.query = this.selectedLabel.trim()
        this.handleQueryChange(this.query)
      }
    },

    async loadOption(value) {
      const { itemValue, itemLabel } = this
      let filter = merge({}, this.params, {
        where: { [itemValue]: value },
        size: 1
      })
      const { items } = await this.method(filter)
      const [item] = items
      if (item) {
        return {
          ...item,
          value,
          currentLabel: item[itemLabel]
        }
      }
    },

    async getOption(value, notNew) {
      let option, optionData
      const isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]'
      const isNull = Object.prototype.toString.call(value).toLowerCase() === '[object null]'
      const isUndefined = Object.prototype.toString.call(value).toLowerCase() === '[object undefined]'

      for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
        const cachedOption = this.cachedOptions[i]
        const isEqual = isObject
          ? getValueByPath(cachedOption.value, this.valueKey) === getValueByPath(value, this.valueKey)
          : cachedOption.value === value
        if (isEqual) {
          option = cachedOption
          optionData = this.items[i]
          break
        }
      }
      optionData && this.onLoadOption?.(optionData)
      if (option || notNew) return option
      const label = !isObject && !isNull && !isUndefined ? String(value) : ''
      let newOption = {
        value: value,
        currentLabel: label
      }
      if (this.itemType === 'object' && this.total > 0 && !!value && !this.lazy) {
        this.loadingOption = true
        newOption = (await this.loadOption(value)) || newOption
        this.loadingOption = false
      }

      if (this.multiple) {
        newOption.hitState = false
      }
      return newOption
    },

    async setSelected() {
      if (!this.multiple) {
        let option = await this.getOption(this.value)

        if (this.onSetSelected && ~this.hoverIndex) {
          if (!option.$el) {
            this.onSetSelected(option)
          } else {
            const index = this.options.indexOf(option)
            ~index && this.onSetSelected(this.items[index])
          }
        }
        if (option.created) {
          this.createdLabel = option.currentLabel
          this.createdSelected = true
        } else {
          this.createdSelected = false
        }
        this.selectedLabel = option.currentLabel
        this.selected = option
        if (this.filterable) this.query = this.selectedLabel

        if (option.currentLabel === option.value && this.itemType === 'object' && this.currentLabel) {
          this.selectedLabel = this.currentLabel
        }
        return
      }
      let result = []
      if (Array.isArray(this.value)) {
        for (let i = 0; i < this.value.length; i++) {
          const value = this.value[i]
          if (this.currentLabel?.length) {
            result.push({
              value,
              currentLabel: this.currentLabel[i] || ''
            })
          } else {
            result.push(await this.getOption(value))
          }
        }
      }
      this.selected = result
      this.$nextTick(() => {
        this.resetInputHeight()
      })
    },

    getFilter() {
      const filter = merge({}, this.params, this.pagination, {
        size: this.pageSize
      })
      const query = this.query.trim()

      if (query) {
        merge(filter, {
          where: { [this.itemQuery || this.itemLabel]: { like: escapeRegExp(query), options: 'i' } }
        })
        // const cond = { like: query, options: 'i' }
        // filter.where ? (filter.where[this.itemLabel] = cond) : (filter.where = { [this.itemLabel]: cond })
      }

      return filter
    },

    async loadData(isMore) {
      this.cancelSource?.cancel()
      this.cancelSource = CancelToken.source()
      if (isMore) {
        this.pagination.page++
        this.loadingMore = true
      } else {
        this.loadingData = true
        this.pagination.page = 1
        this.total = 0
      }

      try {
        const { items, total } = await this.method(this.getFilter(), {
          cancelToken: this.cancelSource.token
        })
        this.total = total
        if (isMore) {
          this.items.push(...items)
          this.loadingMore = false
        } else {
          this.$refs.scrollbar && (this.$refs.scrollbar.wrap.scrollTop = 0)
          this.items = items
          this.loadingData = false
          this.$nextTick(() => {
            if (this.$refs.scrollbar) {
              this.$refs.scrollbar.wrap.scrollTop = 0
              this.$refs.scrollbar.handleScroll()
            }
          })
        }
      } catch (e) {
        this.loadingMore = false
        console.log('AsyncSelect.loadDat', e) // eslint-disable-line
      }
    },

    async loadMore() {
      await this.loadData(true)
    },

    handleQueryChange: debounce(async function (val) {
      if (this.previousQuery === val || this.isOnComposition) return
      if (
        this.previousQuery === null &&
        (typeof this.filterMethod === 'function' || typeof this.remoteMethod === 'function')
      ) {
        this.previousQuery = val
        this.query = ''
        if (this.lastQuery) {
          await this.loadData()
          this.lastQuery = null
        }
        return
      }
      this.previousQuery = val
      this.$nextTick(() => {
        if (this.visible) this.broadcast('ElSelectDropdown', 'updatePopper')
      })
      this.hoverIndex = -1
      if (this.multiple && this.filterable) {
        this.$nextTick(() => {
          const length = this.$refs.input.value.length * 15 + 20
          this.inputLength = this.collapseTags ? Math.min(50, length) : length
          this.managePlaceholder()
          this.resetInputHeight()
        })
      }
      this.loadData()
      this.lastQuery = val
      this.broadcast('ElOptionGroup', 'queryChange')
      if (this.defaultFirstOption && (this.filterable || this.remote) && (this.total || this.filteredOptionsCount)) {
        this.checkDefaultFirstOption()
      }
    }, 200),

    async scrollToOption(option) {
      let target = Array.isArray(option) && option[0] ? option[0].$el : option.$el
      if (!target && !Array.isArray(option)) {
        const option = await this.getOption(this.value, true)
        if (option?.$el) {
          target = option.$el
          this.selected = option
        }
      }
      if (this.$refs.popper && target) {
        const menu = this.$refs.popper.$el.querySelector('.el-select-dropdown__wrap')
        scrollIntoView(menu, target)
      }
      this.$refs.scrollbar && this.$refs.scrollbar.handleScroll()
    },

    handleOptionSelect(option, byClick) {
      this.$emit('option-select', option, byClick)
      if (this.multiple) {
        const value = (this.value || []).slice()
        const optionIndex = this.getValueIndex(value, option.value)
        if (optionIndex > -1) {
          value.splice(optionIndex, 1)
        } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
          value.push(option.value)
        }
        this.$emit('input', value)
        this.emitChange(value, option)
        if (option.created) {
          this.query = ''
          this.handleQueryChange('')
          this.inputLength = 20
        }
        if (this.filterable) this.$refs.input.focus()
      } else {
        const value = option.value
        if (option.created) {
          // 因为调整了setSelected为异步
          setTimeout(() => {
            this.visible = false
          }, 0)
          this.$emit('create', value)
          if (this.createValidate && !this.createValidate(value)) return
        }
        this.$emit('input', option.value)
        this.emitChange(option.value, option)
        !option.created && (this.visible = false)
        /*if (option.created) {
          // 因为调整了setSelected为异步
          setTimeout(() => {
            this.visible = false
          }, 0)
          this.$emit('create', option.value)
        } else {
          this.visible = false
        }*/
      }
      this.isSilentBlur = byClick
      this.setSoftFocus()
      if (this.visible) return
      this.$nextTick(() => {
        this.scrollToOption(option)
      })
    },

    emitChange(val, option) {
      if (!valueEquals(this.value, val)) {
        this.$emit('change', val, this.items.find(t => t.value === val) || {})
        if (this.multiple) {
          const uniqArr = uniqBy([...this.selected, ...this.cachedOptions, ...this.options], 'value') || []
          const changeLabels = uniqArr.filter(t => val.includes(t.value)).map(t => t.currentLabel || t.label)
          this.$emit('change-label', changeLabels)
        } else {
          this.$emit('change-label', option.currentLabel)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.el-select__loading {
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -6px;
  width: 25px;
  vertical-align: -0.125rem;
  line-height: 1;
  text-align: center;
  animation: rotating 1s infinite linear;

  svg {
    vertical-align: top;
  }
}
.el-select-dropdown__empty {
  font-size: 12px;
}
.el-select-dropdown__loading-icon {
  width: 25px;
  vertical-align: -0.125rem;
  line-height: 1;
  text-align: center;
  svg {
    vertical-align: top;
    animation: rotating 1s infinite linear;
  }
}
</style>
