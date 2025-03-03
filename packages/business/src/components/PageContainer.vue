<template>
  <div class="flex flex-column h-100 overflow-hidden">
    <div :class="headerClass">
      <ElBreadcrumb class="breadcrumb" v-if="breadcrumbData.length > 1" separator-class="el-icon-arrow-right">
        <ElBreadcrumbItem v-for="item in breadcrumbData" :key="item.name" :to="item.to">
          {{ item.name }}
        </ElBreadcrumbItem>
      </ElBreadcrumb>
      <div class="flex align-items-center px-4 bg-white" v-else>
        <span class="fs-5 py-4 font-color-dark mr-3">{{ $t($route.meta.title) }}</span>
        <slot name="left-actions"></slot>
        <ElDivider v-if="$route.meta.desc" class="mx-4" direction="vertical"></ElDivider>
        <Desciption class="flex align-items-center fs-7 font-color-sslight" :desc="$t($route.meta.desc)"></Desciption>
        <div class="flex-1"></div>
        <slot name="actions"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {
    Desciption: {
      props: {
        desc: [String, Function]
      },
      render(h) {
        if (this.desc) {
          if (Object.prototype.toString.call(this.desc) === '[object Function]') {
            return h('span', { class: 'flex align-items-center' }, [this.desc(h, this.$t.bind(this))])
          } else {
            return h('span', this.desc)
          }
        }
        return null
      }
    }
  },
  data() {
    return {
      isDaas: process.env.VUE_APP_PLATFORM === 'DAAS',
      breadcrumbData: [],
      isHidden: false
    }
  },
  computed: {
    headerClass() {
      return this.isDaas ? 'border-bottom' : 'bg-white rounded-lg mb-4'
    }
  },
  watch: {
    '$route.name'() {
      this.getBreadcrumb(this.$route)
    }
  },
  created() {
    this.getBreadcrumb(this.$route)
  },
  methods: {
    getBreadcrumb(route) {
      let matched = route.matched.slice(1)
      let data = []
      let isHidden = false
      if (matched.length) {
        matched.forEach(route => {
          isHidden = route.meta?.hideTitle
          if (/^\/.*\/$/.test(route.path)) {
            data.pop()
          }
          let to = {
            name:
              route.name === this.$route.name
                ? null
                : ['settingCenter', 'notification'].includes(route.name)
                ? 'layout'
                : route.name
          }
          if (route.meta?.doNotJump) {
            to = null
          }
          data.push({
            name: this.$t(route.meta?.title),
            to
          })
        })
      }
      this.isHidden = !!isHidden
      this.breadcrumbData = data
    }
  }
}
</script>
<style lang="scss" scoped>
.breadcrumb {
  height: 50px;
  line-height: 50px;
  margin-left: 24px;
  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: map-get($fontColor, normal) !important;
  }
}
</style>
