<template>
  <ElContainer class="layout-container" direction="vertical">
    <ElHeader v-if="!IS_IFRAME" class="layout-header" height="60px">
      <a class="logo" href="/" :style="logoStyle">
        <img :src="logoUrl" />
      </a>
      <div class="button-bar">
        <span class="expire-msg" v-if="licenseExpireVisible">{{
          $t('app_license_expire_warning', [licenseExpire])
        }}</span>
        <ElButton v-if="creatAuthority" type="primary" size="mini" @click="command('newDataFlow')">
          {{ $t('dataFlow_createNew') }}
        </ElButton>
        <NotificationPopover v-if="$getSettingByKey('SHOW_NOTIFICATION')" class="ml-4"></NotificationPopover>
        <ElDropdown v-if="showHelp" class="btn" placement="bottom" @command="command" command="help" :show-timeout="0">
          <div class="flex align-center icon-btn p-2 ml-2">
            <VIcon size="18">wenda</VIcon>
          </div>
          <ElDropdownMenu slot="dropdown" class="no-triangle">
            <ElDropdownItem command="help">{{ $t('app_document') }}</ElDropdownItem>
          </ElDropdownMenu>
        </ElDropdown>
        <ElDropdown
          v-if="$getSettingByKey('SHOW_SETTING_BUTTON') && settingVisibility"
          class="btn"
          placement="bottom"
          @command="command"
          :show-timeout="0"
        >
          <div class="flex align-center icon-btn p-2 ml-2">
            <VIcon size="18">shezhi</VIcon>
          </div>
          <!-- <VIcon class="icon-btn" size="16">shezhi</VIcon> -->
          <ElDropdownMenu slot="dropdown" class="no-triangle">
            <ElDropdownItem command="settings" v-if="settingCode && email === 'admin@admin.com'">{{
              $t('page_title_setting')
            }}</ElDropdownItem>
            <ElDropdownItem command="setting" v-readonlybtn="'home_notice_settings'">{{
              $t('notify_setting')
            }}</ElDropdownItem>
          </ElDropdownMenu>
        </ElDropdown>
        <ElDropdown
          v-if="$getSettingByKey('SHOW_LANGUAGE')"
          class="btn"
          placement="bottom"
          @command="changeLanguage"
          :show-timeout="0"
        >
          <div class="flex align-center icon-btn p-2 ml-2">
            <VIcon size="18">language_icon</VIcon>
          </div>
          <ElDropdownMenu slot="dropdown" class="no-triangle">
            <ElDropdownItem v-for="(value, key) in languages" :key="key" :command="key">
              <span v-if="lang === key" class="color-primary">{{ value }}</span>
              <span v-else>{{ value }}</span>
            </ElDropdownItem>
          </ElDropdownMenu>
        </ElDropdown>
        <ElDivider direction="vertical" class="divider mx-6"></ElDivider>
        <ElDropdown class="menu-user btn" placement="bottom" @command="command" :show-timeout="0">
          <div class="flex align-center icon-btn p-2">
            <span class="user-initials mr-2">{{ initials }}</span>
            <span>{{ userName }}<i class="el-icon-arrow-down ml-2"></i></span>
          </div>
          <ElDropdownMenu slot="dropdown" class="no-triangle">
            <ElDropdownItem command="account">{{ $t('app_account') }}</ElDropdownItem>
            <ElDropdownItem command="version">{{ $t('app_version') }}</ElDropdownItem>
            <ElDropdownItem command="license">{{ $t('page_title_license') }}</ElDropdownItem>
            <ElDropdownItem v-if="$getSettingByKey('SHOW_HOME_BUTTON')" command="home">
              {{ $t('app_home') }}
            </ElDropdownItem>
            <ElDropdownItem command="signOut">{{ $t('app_signOut') }}</ElDropdownItem>
          </ElDropdownMenu>
        </ElDropdown>
      </div>
    </ElHeader>
    <ElContainer style="width: 100%; flex: 1; overflow: hidden">
      <ElAside v-if="!isNotAside && !IS_IFRAME" class="layout-aside" width="auto">
        <ElMenu
          unique-opened
          class="menu"
          :default-active="activeMenu"
          :collapse="isCollapse"
          :collapse-transition="false"
          @select="menuHandler"
        >
          <template v-for="menu in menus">
            <ElSubmenu v-if="menu.children && !menu.hidden" :key="menu.label" :index="menu.name">
              <template slot="title">
                <VIcon size="16" class="menu-icon">{{ menu.icon }}</VIcon>
                <span slot="title" class="ml-4 title">{{ menu.label }}</span>
              </template>
              <template v-for="cMenu in menu.children">
                <ElMenuItem
                  v-if="!cMenu.hidden"
                  :key="cMenu.label"
                  :index="cMenu.name"
                  :class="{
                    'is-locked': lockedFeature[cMenu.name]
                  }"
                >
                  <div class="submenu-item">{{ cMenu.label }}</div>

                  <VIcon v-if="lockedFeature[cMenu.name]" class="ml-2" size="24">lock-circle</VIcon>
                </ElMenuItem>
              </template>
            </ElSubmenu>
            <ElMenuItem v-else-if="!menu.hidden" :key="menu.label" :index="menu.name">
              <VIcon size="16" class="menu-icon">{{ menu.icon }}</VIcon>
              <span slot="title" class="ml-4 title">{{ menu.label }}</span>
            </ElMenuItem>
          </template>
        </ElMenu>
        <div class="menu-footer" @click="isCollapse = !isCollapse">
          <i class="el-icon-d-arrow-left btn-collapse" :class="{ 'is-collapse': isCollapse }"></i>
        </div>
      </ElAside>
      <ElMain class="layout-main">
        <div class="layout-main-body">
          <PageHeader
            v-if="!['dashboard', 'clusterManagement', 'apiMonitor'].includes($route.name)"
            class="border-bottom"
          ></PageHeader>
          <div
            class="flex-fill overflow-auto"
            :class="[
              {
                'px-5': ![
                  'dashboard',
                  'clusterManagement',
                  'apiMonitor',
                  'migrateList',
                  'dataflowList',
                  'connectionsList',
                  'connectionCreate',
                  'users',
                  'customNodeList',
                  'dataConsole',
                  'dataVerificationList',
                  'dataVerificationCreate',
                  'dataVerificationEdit',
                  'dataVerifyDetails',
                  'dataVerifyHistory',
                  'VerifyDiffDetails',
                  'dataVerifyResult',
                  'sharedMiningList',
                  'externalStorage'
                ].includes($route.name)
              },
              {
                'pb-5': ![
                  'dashboard',
                  'clusterManagement',
                  'apiMonitor',
                  'migrateList',
                  'dataflowList',
                  'connectionsList',
                  'connectionCreate',
                  'users',
                  'customNodeList',
                  'dataConsole',
                  'dataVerificationList',
                  'dataVerificationCreate',
                  'dataVerificationEdit',
                  'dataVerifyDetails',
                  'dataVerifyHistory',
                  'VerifyDiffDetails',
                  'dataVerifyResult',
                  'sharedMiningList',
                  'externalStorage'
                ].includes($route.name)
              }
            ]"
          >
            <RouterView />
          </div>
        </div>
      </ElMain>
    </ElContainer>
    <CustomerService v-model="isShowCustomerService"></CustomerService>
    <newDataFlow :dialogVisible.sync="dialogVisible"></newDataFlow>
  </ElContainer>
</template>

<style lang="scss">
.btn-del-fav-menu {
  display: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  [class^='el-icon-'] {
    margin: 0;
    color: map-get($color, danger) !important;
  }
}
.el-menu--inline .el-menu-item:hover .btn-del-fav-menu {
  display: block;
}
.layout-container {
  height: 100%;
  background: rgba(250, 250, 250, 1);
  .layout-header {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #212a3b;
    min-width: 1000px;
    .logo {
      margin-left: 23px;
      display: block;
      width: 140px;
      img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
    .button-bar {
      margin-right: 23px;
      display: flex;
      align-items: center;
      .icon-btn {
        color: rgba(255, 255, 255, 0.85);
        cursor: pointer;
        i {
          display: inline-block;
          line-height: 28px;
          text-align: center;
          height: 28px;
          width: 28px;
        }
        &:hover {
          background-color: rgba(239, 241, 244, 0.23);
          border-radius: 6px;
          // color: map-get($color, primary);
        }
      }
      .divider {
        height: 2em;
      }
      .user-initials {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: #ffa158;
        border-radius: 50%;
        line-height: 28px;
        text-align: center;
        font-size: 14px;
        color: map-get($fontColor, white);
      }
      .menu-user {
        color: rgba(255, 255, 255, 0.85);
        // &:hover {
        //   color: map-get($color, primary);
        // }
      }
    }
  }
  .layout-aside {
    position: relative;
    display: flex;
    height: 100%;
    overflow: hidden;
    border: 1px solid #e1e3e9;
    .el-menu--popup .submenu-item .btn-del {
      display: none;
    }
    .menu {
      width: 220px;
      //flex: 1;
      padding-bottom: 48px;
      background: map-get($bgColor, disable);

      overflow-y: auto;
      user-select: none;
      border-right: none;
      .menu-icon {
        font-size: 12px;
      }
      .el-menu-item .el-tooltip {
        outline: none;
      }

      &.el-menu--collapse {
        width: 64px;
        & > .el-menu-item span,
        & > .el-submenu > .el-submenu__title span {
          visibility: visible;
          overflow: initial;
        }
        .el-submenu__title {
          span.title {
            display: none;
          }
        }
      }
      .el-menu-item,
      .el-submenu__title {
        display: flex;
        align-items: center;
        height: 50px;
        line-height: 50px;
        // color: map-get($fontColor, normal);
        background: #f7f8fa;
        .submenu-item {
          // color: map-get($fontColor, light);
          padding-left: 12px;
        }
        &.is-active,
        &:hover {
          // color: map-get($color, primary) !important;
          background: rgba(44, 101, 255, 0.05);
        }
      }
      .submenu-item {
        font-weight: 400;
      }
      .is-active .el-submenu__title {
        font-weight: 500;
        background: map-get($bgColor, disable);
      }
      .el-menu {
        background-color: initial;
        .el-menu-item {
          &.is-active {
            background-color: rgba(44, 101, 255, 0.05);
            .submenu-item {
              font-weight: 500;
              // color: map-get($color, primary) !important;
            }
          }
        }
      }
    }
    .menu-footer {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 48px;
      line-height: 48px;
      border: 1px solid map-get($borderColor, light);
      box-sizing: border-box;
      text-align: right;
      overflow: hidden;
      background: map-get($bgColor, white);
      cursor: pointer;
      &:hover {
        background: map-get($bgColor, main);
      }
      .btn-collapse {
        padding: 10px;
        color: map-get($fontColor, light);
        transition: all 0.4s;
        &.is-collapse {
          padding: 10px 24px;
          transform: rotate(-180deg);
        }
      }
    }
  }
  .item-badge {
    .el-badge__content {
      height: 16px;
      line-height: 16px;
      border: 0;
    }
  }
  .layout-main {
    position: relative;
    height: 100%;
    padding: 0;
    background: map-get($color, white);
    box-sizing: border-box;
    overflow-y: hidden;
    overflow-x: auto;
  }
  .layout-main-body {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #eff1f4;

    > div {
      background: #fff;
    }

    .page-header:has(.breadcrumb) {
      border-bottom: 0 !important;

      & + div {
        background: transparent;
      }
    }

    .breadcrumb {
      background: #eff1f4;
    }
  }
  .expire-msg {
    margin-right: 25px;
    font-size: $fontBaseTitle;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    line-height: 17px;
  }
}
</style>

<script>
import dayjs from 'dayjs'

import Cookie from '@tap/shared/src/cookie'
import Time from '@tap/shared/src/time'
import { VIcon } from '@tap/component'
import { langMenu, getCurrentLanguage, setCurrentLanguage } from '@tap/i18n/src/shared/util'
import { usersApi, timeStampApi, licensesApi, taskApi, logcollectorApi } from '@tap/api'
import { PageHeader } from '@tap/business'

import CustomerService from '@/components/CustomerService'
import newDataFlow from '@/components/newDataFlow'
import NotificationPopover from './notification/NotificationPopover'
import { signOut } from '../utils/util'

const isCommunity = process.env.VUE_APP_MODE === 'community'

let menuSetting = [
  { name: 'dashboard', icon: 'gongzuotai', alias: 'page_title_dashboard' },
  {
    name: 'dataConsole',
    icon: 'process-platform',
    code: 'v2_data-console',
    hidden: isCommunity
  },
  { name: 'connectionsList', icon: 'agent', code: 'v2_datasource_menu', parent: 'connections' },
  {
    name: 'dataPipeline',
    label: 'page_title_data_pipeline',
    icon: 'huowuchuanshu',
    code: 'v2_data_pipeline',
    children: [
      { name: 'migrateList', code: 'v2_data_replication', parent: 'migrate' },
      { name: 'dataflowList', code: 'v2_data_flow', parent: 'dataflow' },
      { name: 'dataVerificationList', code: 'v2_data_check', parent: 'dataVerification' }
    ]
  },
  {
    name: 'advancedFeatures',
    label: 'page_title_advanced_features',
    icon: 'huowuchuanshu',
    code: 'v2_advanced_features',
    children: [
      { name: 'sharedCacheList', code: 'v2_shared_cache', parent: 'sharedCache' }, // PDK暂时不支持共享缓存，暂时屏蔽
      { name: 'functionList', code: 'v2_function_management', parent: 'function' },
      { name: 'customNodeList', code: 'v2_custom_node', parent: 'customNode' },
      { name: 'sharedMiningList', code: 'v2_log_collector', parent: 'sharedMining' },
      { name: 'HeartbeatTableList', code: '', parent: 'heartbeatTable' }
    ]
  },
  {
    name: 'discovery',
    label: 'page_title_data_discovery',
    icon: 'dataDiscovery_navbar',
    code: 'v2_data_discovery',
    hidden: true, // 放开了数据面板，隐藏数据发现
    children: [
      { name: 'catalogueList', code: 'v2_data_catalogue', parent: 'catalogue' }
      // { name: 'objectList', code: 'v2_data_object', parent: 'object' },
    ]
  },
  {
    name: 'dataService',
    label: 'page_title_data_service',
    icon: 'apiServer_navbar',
    code: 'v2_data-server',
    hidden: isCommunity,
    children: [
      { name: 'apiApplication', code: 'v2_api-application', parent: 'apiApplication' },
      { name: 'dataServer', code: 'v2_data-server-list', parent: 'dataServer' },
      { name: 'dataServerAuditList', code: 'v2_data_server_audit', parent: 'dataServerAudit' },
      { name: 'apiMonitor', code: 'v2_api_monitor', parent: 'apiMonitor' },
      { name: 'apiClient', code: 'v2_api-client', parent: 'apiClient' },
      { name: 'apiServer', code: 'v2_api-servers', parent: 'apiServer' }
    ]
  },
  {
    name: 'system',
    label: 'page_title_system',
    icon: 'system_navbar',
    code: 'v2_system-management',
    children: [
      { name: 'roleList', code: 'v2_role_management', parent: 'roleList' },
      { name: 'users', code: 'v2_user_management_menu', parent: 'users' },
      { name: 'clusterManagement', code: 'v2_cluster-management_menu', hidden: isCommunity },
      { name: 'externalStorage', code: 'v2_external-storage_menu' }
    ]
  }
]
export default {
  inject: ['lockedFeature', 'openLocked'],
  components: { CustomerService, newDataFlow, NotificationPopover, PageHeader, VIcon },
  data() {
    return {
      IS_IFRAME: sessionStorage.getItem('IS_IFRAME') === 'true',

      logoUrl: window._TAPDATA_OPTIONS_.logoUrl,
      languages: langMenu,
      lang: getCurrentLanguage(),
      settingVisibility:
        this.$has('home_notice_settings') || (this.$has('system_settings') && this.$has('system_settings_menu')),
      settingCode: this.$has('system_settings') && this.$has('system_settings_menu'),
      creatAuthority:
        (this.$has('SYNC_job_creation') && this.$has('Data_SYNC_menu')) ||
        (this.$has('datasource_creation') && this.$has('datasource_menu')),
      menus: [],
      userName: '',
      email: '',
      dialogVisible: false,
      isShowCustomerService: false,
      licenseExpire: '',
      licenseExpireVisible: false,
      licenseExpireDate: '',
      breadcrumbData: [],
      isCollapse: false,
      isNotAside: this.$route?.meta?.isNotAside || false,
      activeMenu: '',
      showHelp: !process.env.VUE_APP_HIDE_QA_AND_HELP && this.$getSettingByKey('SHOW_QA_AND_HELP')
    }
  },
  computed: {
    initials() {
      return this.userName.substring(0, 1)
    },

    logoStyle() {
      const width = window._TAPDATA_OPTIONS_.logoWidth
      const height = window._TAPDATA_OPTIONS_.logoHeight
      return {
        width: width && (!isNaN(width) ? `${width}px` : width),
        height: height && (!isNaN(height) ? `${height}px` : height)
      }
    }
  },
  watch: {
    $route(data) {
      this.isNotAside = data?.meta?.isNotAside || false
      this.getActiveMenu()
    }
  },
  async created() {
    this.getMenus()
    this.getActiveMenu()

    this.userName = Cookie.get('username') || Cookie.get('email')?.split('@')?.[0] || ''
    this.email = Cookie.get('email')

    window.iframeRouterChange = route => {
      this.$router.push(route)
    }
    let self = this
    window.stateChange = (key, data) => {
      self.$store.commit(key, data)
    }

    window.getFormLocal = data => {
      return self.$store.state[data]
    }

    if (process.env.VUE_APP_MODE !== 'community' && window.getSettingByKey('SHOW_LICENSE')) {
      this.getLicense()
    }
  },
  destroyed() {
    this.$root.$off('updateMenu')
  },
  methods: {
    getActiveMenu() {
      let route = this.$route
      let activeMap = {}
      const getMap = menus => {
        menus.forEach(item => {
          if (item?.children?.length) {
            getMap(item?.children)
          } else {
            // parent 是用来匹配菜单是否激活的，比如函数管理的详情页，也属于函数管理，菜单也应该处于激活状态
            // 之所以使用parent是因为管理的列表页面使用的也是子路由的，比如连接管理使用的是connectionList，而不是connection
            activeMap[item.parent || item.name] = item.name
          }
        })
      }
      getMap(menuSetting)
      let matched = route.matched || []
      let activeRoute = matched.find(r => activeMap[r.name])
      this.activeMenu = activeMap[activeRoute?.name] || ''
    },
    getMenus(hideMenuMap = {}) {
      let permissions = sessionStorage.getItem('tapdata_permissions')

      permissions = permissions ? JSON.parse(permissions) : []
      let routerMap = {}
      let routes = this.$router.options.routes.find(r => r.name === 'layout').children
      let getRoutesMap = routes => {
        routes.forEach(r => {
          routerMap[r.name] = r
          if (r.children) {
            getRoutesMap(r.children)
          }
        })
      }
      getRoutesMap(routes)

      let formatMenu = items => {
        return items.map(item => {
          let route = routerMap[item.name]
          let menu = item
          let label = menu.alias ? menu.alias : menu.label
          if (route) {
            menu.to = { name: route.name }
            menu.label = this.$t(label || route.meta.title)
            menu.code = route.meta.code
          } else {
            menu.label = this.$t(label)
          }

          menu.hidden =
            menu.hidden || hideMenuMap[menu.name] || (menu.code && !permissions.some(p => p.code === menu.code))
          if (!menu.hidden && menu.children) {
            menu.children = formatMenu(menu.children)
            if (menu.children.every(m => m.hidden)) {
              menu.hidden = true
            }
          }

          return menu
        })
      }
      let menus = JSON.parse(JSON.stringify(menuSetting))
      this.menus = formatMenu(menus)
    },
    command(command) {
      switch (command) {
        case 'account':
          this.$router.push({
            name: 'settingCenter'
          })
          break
        case 'setting':
          this.$router.push({
            name: 'notificationSetting'
          })
          break
        case 'newDataFlow':
          this.dialogVisible = true
          break
        case 'help':
          window.open('https://docs.tapdata.net/')
          break
        case 'question':
          this.isShowCustomerService = !this.isShowCustomerService
          break
        case 'version':
          if (window.getSettingByKey('SHOW_DK_VERSION')) {
            this.$message.info({
              dangerouslyUseHTMLString: true,
              message: 'DK_VERSION_1</br>DK_VERSION_2'
            })
          } else {
            this.$message.info(window._TAPDATA_OPTIONS_.version)
          }
          break
        case 'license':
          this.$router.push({
            name: 'License'
          })
          break
        case 'home':
          window.open(window._TAPDATA_OPTIONS_.homeUrl, '_blank')
          break
        case 'signOut':
          this.$confirm(this.$t('app_signOutMsg'), this.$t('app_signOut'), {
            type: 'warning'
          }).then(resFlag => {
            if (!resFlag) {
              return
            }
            this.signOut()
          })
          break
        case 'settings':
          this.$router.push({
            name: 'settings'
          })
          break
        default:
          break
      }
    },
    signOut() {
      usersApi.logout().then(() => {
        signOut()
      })
    },
    menuHandler(name) {
      if (this.lockedFeature[name]) {
        this.openLocked()
        return
      }

      if (this.$route.name === name) {
        return
      }
      this.$router.push({
        name
      })
    },
    changeLanguage(lang) {
      setCurrentLanguage(lang, this.$i18n)
      this.lang = lang
      location.reload()
    },

    async getLicense() {
      let stime = ''
      await timeStampApi.get().then(data => {
        stime = data || Time.now()
      })
      licensesApi.expires({}).then(data => {
        let expires_on = data?.expires_on || ''
        if (Cookie.get('isAdmin') == 1) {
          let endTime = expires_on - stime
          endTime = parseInt(endTime / 1000 / 60 / 60 / 24) //相差天数
          let showDay = window.getSettingByKey('licenseNoticeDays') || 0
          this.licenseExpireVisible = Number(showDay) > endTime
          this.licenseExpire = endTime
        }
        this.licenseExpireDate = dayjs(expires_on).format('YYYY-MM-DD HH:mm:ss')
      })
    }
  }
}
</script>
