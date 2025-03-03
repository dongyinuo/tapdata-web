<template>
  <div class="flex flex-column h-100">
    <div v-if="$route.name === 'order'" class="bg-white rounded-lg mb-4">
      <div class="flex align-items-center px-4">
        <span class="fs-5 py-4 font-color-dark">{{ $t($route.meta.title) }}</span>
      </div>
      <ElDivider class="mt-0 mb-3"></ElDivider>
      <el-tabs class="header-tabs flex flex-column overflow-hidden flex-1" v-model="activeName">
        <el-tab-pane
          class="order-flex overflow-hidden h-100"
          :label="$t('dfs_order_list_wodedingyue')"
          name="first"
        ></el-tab-pane>
        <el-tab-pane
          class="order-flex flex-column overflow-hidden h-100"
          :label="$t('dfs_instance_selectlist_shouquanma')"
          name="second"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <section
      class="operation-logs-wrapper g-panel-container flex-fill rounded-lg"
      :class="[isEn ? 'is-en' : '']"
      v-if="$route.name === 'order'"
    >
      <div v-if="activeName !== 'second'" class="main" v-loading="loadingSubscribe">
        <div class="list-operation">
          <div class="list-operation-left flex justify-content-between">
            <ul class="flex align-items-center">
              <li
                v-for="(item, index) in filterArray"
                :key="index"
                :class="['filter-li mr-4 px-4 cursor-pointer', { active: activedFilter === item.value }]"
                @click="changeActivedFilter(item)"
              >
                {{ item.label }}
              </li>
              <li class="px-4 py-1">
                <ElButton plain class="btn-refresh" @click="remoteMethod">
                  <VIcon>refresh</VIcon>
                </ElButton>
              </li>
            </ul>
            <ElButton type="primary" @click="handleCreateAgent" :disabled="$disabledReadonlyUserBtn()">
              <span>{{ $t('dfs_order_list_xinzengdingyue') }}</span>
            </ElButton>
          </div>
        </div>

        <ul v-if="subscribeList.length" class="overflow-auto flex-fill mt-4">
          <li
            class="list-li flex rounded-lg p-4"
            :class="[item.productType === 'MongoDB' ? 'warning' : 'primary', { 'mt-4': itemIndex !== 0 }]"
            v-for="(item, itemIndex) in subscribeList"
            :key="item.id"
          >
            <template v-for="(row, rIndex) in item.subscribeItems">
              <div class="flex w-60">
                <div class="w-50">
                  <div class="mb-2">
                    <span class="li-item__label font-color-sslight">{{ $t('public_type') }}:</span>
                    <span class="li-item__value font-color-dark">{{ row.productType }}</span>
                  </div>
                  <div class="mb-2">
                    <span class="li-item__label font-color-sslight">{{ $t('dfs_instance_instance_guige') }}:</span>
                    <span class="li-item__value font-color-dark">{{ row.specLabel }}</span>
                  </div>
                  <div>
                    <span class="li-item__label font-color-sslight"
                      >{{ item.productType === 'MongoDB' ? 'Storage Id' : 'Agent Id' }}:</span
                    >
                    <span v-if="item.productType === 'MongoDB'">{{ row.resourceId }}</span>
                    <ElLink
                      v-else
                      type="primary"
                      class="li-item__value text-decoration-underline"
                      @click="goInstance(row)"
                      >{{ row.resourceId }}</ElLink
                    >
                  </div>
                </div>
                <div class="w-50">
                  <div class="mb-2">
                    <span class="li-item__label font-color-sslight">{{ $t('dfs_user_center_jine') }}:</span>
                    <span class="li-item__value font-color-dark">{{ formatterPrice(item.currency, row.amount) }}</span>
                  </div>
                  <div class="mb-2">
                    <span class="li-item__label font-color-sslight"
                      >{{ $t('dfs_instance_instance_dingyuefangshi') }}:</span
                    >
                    <span class="li-item__value" :class="[item.isFree ? 'color-success' : 'font-color-dark']">{{
                      row.subscriptionMethodLabel
                    }}</span>
                  </div>
                  <div>
                    <span class="li-item__label font-color-sslight"
                      >{{ $t('dfs_instance_selectlist_dingyuezhouqi') }}:</span
                    >
                    <span class="li-item__value font-color-dark">{{
                      formatterTime(item.startAt, 'YYYY-MM-DD') + '~' + formatterTime(item.endAt, 'YYYY-MM-DD')
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-content-between w-40">
                <div>
                  <div class="mb-2">
                    <span class="li-item__label font-color-sslight">{{ $t('public_status') }}:</span>
                    <span class="inline-block li-item__value font-color-dark">
                      <StatusTag type="tag" :status="item.status" default-status="Stopped" target="order"></StatusTag>
                    </span>
                  </div>
                  <div class="mb-2">
                    <span class="li-item__label font-color-sslight"
                      >{{ $t('dfs_agent_download_subscriptionmodeldialog_tuoguanfangshi') }}:</span
                    >
                    <span class="li-item__value font-color-dark">{{ agentTypeMap[row.agentType || 'local'] }}</span>
                  </div>
                  <div>
                    <span class="li-item__label font-color-sslight">{{ $t('dfs_order_list_bianhao') }}:</span>
                    <span class="li-item__value font-color-dark">{{ item.id }}</span>
                  </div>
                </div>
                <div v-if="item.paymentMethod === 'GCPMarketplace'" class="li-operation flex">
                  <ElButton @click="goMarketplace" type="primary" plain>
                    <VIcon>open-in-new</VIcon>
                    Google Cloud Marketplace</ElButton
                  >
                </div>
                <div v-else class="li-operation flex">
                  <ElButton v-if="['incomplete'].includes(item.status)" type="text" @click="handlePay(item)">{{
                    $t('public_button_pay')
                  }}</ElButton>
                  <ElButton v-if="['active'].includes(item.status)" type="text" @click="goOpenChange(item)">{{
                    $t('dfs_change_record')
                  }}</ElButton>
                  <ElButton
                    v-if="
                      !(
                        !['active'].includes(item.status) ||
                        item.totalAmount === 0 ||
                        item.subscribeType === 'recurring'
                      )
                    "
                    type="primary"
                    plain
                    @click="openRenew(item)"
                    >{{ $t('public_button_renew') }}</ElButton
                  >
                  <ElButton
                    v-if="
                      !disableUnsubscribe(row) &&
                      ['active'].includes(item.status) &&
                      row.productType === 'Engine' &&
                      !(!row.amount && row.agentType === 'Cloud')
                    "
                    type="primary"
                    plain
                    @click="openChangeSubscribe(item)"
                    >{{ $t('dfs_order_change') }}</ElButton
                  >
                  <ElButton
                    v-if="!disableUnsubscribe(row) && ['active'].includes(item.status)"
                    type="danger"
                    plain
                    size="mini"
                    @click="openUnsubscribe(item, row.productType)"
                    >{{ $t('public_button_unsubscribe') }}</ElButton
                  >
                </div>
              </div>
            </template>
          </li>
        </ul>
        <div v-else class="flex-fill pt-12">
          <VEmpty large class="flex"></VEmpty>
        </div>
      </div>
      <section v-if="activeName === 'second'" class="flex flex-column overflow-hidden flex-1">
        <div class="mt-2 flex justify-content-end">
          <el-button class="mr-2" @click="goReceipt">{{ $t('dfs_user_center_kaifapiao') }}</el-button>
          <!--            <el-button type="primary" @click="goLicense">{{-->
          <!--              $t('dfs_aliyun_market_checklicnese_jihuoshouquanma')-->
          <!--            }}</el-button>-->
        </div>
        <VTable
          :columns="codeColumns"
          :remoteMethod="codeRemoteMethod"
          :page-options="{
            layout: 'total, ->, prev, pager, next, sizes, jumper'
          }"
          ref="tableCode"
          class="mt-4"
        >
          <template #agentType="{ row }">
            <span>{{ agentTypeMap[row.agentType || 'local'] }}</span>
          </template>
          <template #bindAgent="{ row }">
            <ElLink v-if="row.agentId" type="primary" @click="handleAgent(row)">{{
              $t('dfs_instance_selectlist_yibangding') + ' ' + $t('public_agent') + ' : ' + row.agentId
            }}</ElLink>
            <span v-else>{{ $t('user_Center_weiBangDing') }}</span>
          </template>
          <template #operation="{ row }">
            <ElButton type="text" @click="handleRenewal(row)">{{ $t('public_button_renewal') }}</ElButton>
          </template>
        </VTable>
      </section>

      <!--转账{{$t('public_button_pay')}}-->
      <transferDialog :visible.sync="showTransferDialogVisible" :price="pricePay"></transferDialog>
      <!--退订-->
      <Unsubscribe ref="UnsubscribeDetailDialog" @closeVisible="remoteMethod"></Unsubscribe>
      <!--续订-->
      <Renew ref="RenewDetailDialog" @closeVisible="remoteMethod"></Renew>
      <!--变更-->
      <Change ref="ChangeSubscribeDetailDialog" @closeVisible="remoteMethod"></Change>
    </section>
    <RouterView v-else></RouterView>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import i18n from '@/i18n'
import { FilterBar, VEmpty, VTable } from '@tap/component'
import { CURRENCY_SYMBOL_MAP } from '@tap/business'
import { openUrl } from '@tap/shared'
import Change from '@tap/business/src/views/order/Change'
import { getPaymentMethod, getSpec } from '@tap/business/src/shared/util'
import { AGENT_TYPE_MAP } from '@tap/business/src/shared/const'

import transferDialog from '../agent-download/transferDialog'
import StatusTag from '../../components/StatusTag.vue'
import Unsubscribe from '../../components/Unsubscribe.vue'
import Renew from '../../components/Renew.vue'

export default {
  components: { VEmpty, Unsubscribe, StatusTag, FilterBar, VTable, transferDialog, Renew, Change },
  inject: ['buried'],
  data() {
    return {
      activeName: 'first',
      loading: true,
      loadingCancelSubmit: false,
      loadingSubscribe: false,
      showUnsubscribeDetailVisible: false, //退订详情
      unsubscribeHelpDocumentation: '', //退订跳转地址
      currentRow: '',
      refundAmount: '',
      showTransferDialogVisible: false,
      pricePay: '',
      agentTypeMap: AGENT_TYPE_MAP,
      searchParams: {
        agentDeploy: '',
        productType: '',
        status: ''
      },
      search: '',
      filterItems: [],
      activedFilter: 'active',
      filterArray: [],
      //授权码
      codeColumns: [
        {
          label: i18n.t('dfs_instance_selectlist_shouquanma'),
          prop: 'licenseCode',
          width: 320
        },
        {
          label: i18n.t('dfs_user_center_jihuoshijian2'),
          prop: 'activateTimeLabel'
        },
        {
          label: i18n.t('dfs_agent_download_subscriptionmodeldialog_tuoguanfangshi'),
          prop: 'agentType',
          slotName: 'agentType'
        },
        {
          label: i18n.t('dfs_user_center_guoqishijian2'),
          prop: 'expiredTimeLabel'
        },
        {
          label: i18n.t('dfs_instance_selectlist_bangdingshilizhuang'),
          prop: 'bindAgent',
          slotName: 'bindAgent'
        },
        {
          label: i18n.t('public_operation'),
          prop: 'extendArray',
          slotName: 'operation',
          width: 100
        }
      ],
      columns: [
        {
          label: i18n.t('dfs_order_list_dingyueleixing'),
          prop: 'productType'
        },
        {
          label: i18n.t('dfs_instance_instance_guige'),
          prop: 'specLabel',
          width: 180
        },
        {
          label: i18n.t('dfs_instance_instance_dingyuefangshi'),
          slotName: 'subscriptionMethodLabel',
          width: 180
        },
        {
          label: i18n.t('dfs_instance_createagent_cunchukongjian'),
          prop: 'storageSize'
        },
        {
          label: i18n.t('dfs_user_center_jine'),
          prop: 'price',
          slotName: 'price'
        },
        {
          label: i18n.t('dfs_agent_download_subscriptionmodeldialog_tuoguanfangshi'),
          prop: 'agentType',
          slotName: 'agentType'
        },
        {
          label: i18n.t('task_monitor_status'),
          slotName: 'statusLabel'
        },
        {
          label: i18n.t('public_operation'),
          prop: 'extendArray',
          slotName: 'operation'
        }
      ],
      //订阅列表
      subscribeList: [],
      page: {
        current: 1,
        size: 100
      },
      loadingRenewSubmit: false,
      currentPrice: 0,
      isEn: i18n.locale === 'en'
    }
  },
  computed: {
    table() {
      return this.$refs.table
    }
  },
  created() {
    this.getFilterItems()
    if (!this.$store.getters.isDomesticStation) {
      this.refundAmount = 'https://docs.tapdata.io/billing/refund'
    } else {
      this.refundAmount = 'https://docs.tapdata.net/billing/refund'
    }
    this.remoteMethod()
  },
  watch: {
    $route(route) {
      if (route.name === 'order') {
        let query = route.query
        this.searchParams = Object.assign(this.searchParams, query)
        this.page.current = 1
        this.remoteMethod()
      }
    }
  },
  methods: {
    getFilterItems() {
      this.filterItems = [
        {
          label: i18n.t('dfs_order_list_dingyuezhuangtai'),
          key: 'status',
          type: 'select-inner',
          items: [
            {
              label: this.$t('public_select_option_all'),
              value: ''
            },
            {
              label: this.$t('packages_business_shared_const_weizhifu'),
              value: 'incomplete'
            },
            {
              label: this.$t('packages_business_shared_const_yizhifu'),
              value: 'active'
            },
            {
              label: this.$t('packages_business_shared_const_zhifushibai'),
              value: 'payFail'
            },
            {
              label: this.$t('packages_business_shared_const_yituikuan'),
              value: 'refund'
            },
            {
              label: this.$t('packages_business_payment_timeout'),
              value: 'past_due'
            },
            {
              label: this.$t('packages_business_shared_const_tuikuanzhong'),
              value: 'refunding'
            },
            {
              label: this.$t('packages_business_shared_const_shixiao'),
              value: 'incomplete_expired'
            },
            {
              label: this.$t('packages_business_shared_const_yiquxiao'),
              value: 'canceled'
            }
          ],
          selectedWidth: '200px'
        },
        {
          label: i18n.t('dfs_agent_download_subscriptionmodeldialog_tuoguanfangshi'),
          key: 'agentType',
          type: 'select-inner',
          items: [
            {
              label: this.$t('public_select_option_all'),
              value: ''
            },
            {
              label: this.$t('dfs_instance_utils_quantuoguan'),
              value: 'Cloud'
            },
            {
              label: this.$t('dfs_instance_utils_bantuoguan'),
              value: 'Local'
            }
          ]
        },
        {
          label: i18n.t('dfs_order_list_dingyueleixing'),
          key: 'productType',
          type: 'select-inner',
          items: [
            {
              label: this.$t('public_select_option_all'),
              value: ''
            },
            {
              label: 'Engine',
              value: 'Engine'
            },
            {
              label: 'MongoDB',
              value: 'MongoDB'
            }
          ]
        }
      ]
      this.filterArray = [
        {
          label: this.$t('public_select_option_all'),
          value: ''
        },
        {
          label: this.$t('packages_business_shared_const_yizhifu'),
          value: 'active'
        },
        {
          label: this.$t('packages_business_shared_const_weizhifu'),
          value: 'incomplete'
        },
        {
          label: this.$t('packages_business_shared_const_zhifushibai'),
          value: 'payFail'
        },
        {
          label: this.$t('packages_business_shared_const_shixiao'),
          value: 'incomplete_expired'
        }
      ]
    },
    //我的订阅
    remoteMethod() {
      let { current, size } = this.page
      let { agentType, status, productType } = this.searchParams
      let where = {
        status: {
          $ne: 'invalid' //过滤 invild
        }
      }
      agentType && (where['subscribeItems.agentType'] = agentType)
      productType && (where['subscribeItems.productType'] = productType)
      this.activedFilter && (where.status = this.activedFilter)
      let filter = {
        limit: size,
        skip: size * (current - 1),
        sort: ['createAt desc'],
        where: where
      }
      this.loadingSubscribe = true

      return this.$axios.get(`api/tcm/subscribe?filter=${encodeURIComponent(JSON.stringify(filter))}`).then(data => {
        this.loadingSubscribe = false
        let items = data.items || []
        this.page.total = data.total
        this.subscribeList = items.map(item => {
          if (item.totalAmount !== 0) {
            item.isFree = item.subscribeType === 'FreeTier'
            item.subscriptionMethodLabel =
              getPaymentMethod(
                { periodUnit: item.periodUnit, type: item.subscribeType },
                item.paymentMethod || 'Stripe'
              ) || '-'
          } else {
            item.isFree = true
            item.subscriptionMethodLabel = i18n.t('dfs_instance_instance_mianfei')
          }

          if (item.subscribeItems?.length) {
            item.productType = item.subscribeItems[0].productType
            item.subscribeItems = item.subscribeItems.map(it => {
              it.specLabel = getSpec(it.spec) || '-'
              it.storageSize = it.spec?.storageSize ? `${it.spec.storageSize} ${it.spec.storageUnit || 'GB'}` : '-'
              it.subscriptionMethodLabel =
                it.amount === 0 ? i18n.t('dfs_instance_instance_mianfei') : item.subscriptionMethodLabel
              it.status = it.resource?.status || ''
              return it
            })
          }
          return item
        })
      })
    },
    formatterTime(time, template = 'YYYY-MM-DD') {
      return time ? dayjs(time).format(template) : '-'
    },
    formatterPrice(currency, price) {
      if (price === 0) {
        return 0
      }
      return (
        CURRENCY_SYMBOL_MAP[currency] +
        (price / 100).toLocaleString('zh', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      )
    },
    //是否可退订
    disableUnsubscribe(row) {
      if (row.productType === 'Engine') {
        if (row.agentType === 'Cloud') {
          return !['Running', 'Approving', 'Stopped', 'Error'].includes(row.resource?.status)
        } else {
          return !['Running', 'Creating', 'Stopped', 'Error'].includes(row.resource?.status)
        }
      } else {
        if (row?.resource?.scope === 'Private') {
          return !['Activated'].includes(row.resource?.status)
        } else {
          return !['Assigned'].includes(row.resource?.status)
        }
      }
    },
    //退订详情
    openUnsubscribe(row, type) {
      this.$refs?.UnsubscribeDetailDialog.getUnsubscribePrice(row, type)
    },
    //变更
    openChangeSubscribe(row) {
      this.$refs?.ChangeSubscribeDetailDialog.openChange(row)
    },
    //查看变更记录
    goOpenChange(item) {
      this.$router.push({
        name: 'changeList',
        query: {
          id: item.id
        }
      })
    },
    //续订
    openRenew(row) {
      this.$refs?.RenewDetailDialog.openRenew(row)
    },
    formatPrice(currency, price) {
      if (price === 0) return 0
      return (
        CURRENCY_SYMBOL_MAP[currency] +
        (price / 100).toLocaleString('zh', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      )
    },
    //支付
    handlePay(row = {}) {
      this.buried('payAgentStripe')
      this.$router.push({
        name: 'pay',
        params: {
          id: row.id
        }
      })
      /*if (row.paymentType === 'offline') {
        this.showTransferDialogVisible = true
        this.pricePay = row.formatPrice
      } else {
        openUrl(row.payUrl)
        this.$confirm(
          i18n.t('dfs_user_center_ninjiangzhifur', { val1: row.content }),
          i18n.t('dfs_user_center_zhifufuwu'),
          {
            type: 'warning',
            confirmButtonText: i18n.t('dfs_instance_create_zhifuwancheng')
          }
        ).then(() => {
          this.$refs.table?.fetch()
        })
      }*/
    },
    handleCreateAgent() {
      this.$router.push({
        name: 'createAgent'
      })
      this.buried('newAgentStripeDialog')
    },
    handleAgent(row = {}) {
      this.$router.push({
        name: 'Instance',
        query: {
          keyword: row.agentId
        }
      })
    },
    codeRemoteMethod() {
      return this.$axios.get('api/tcm/aliyun/market/license/list').then(data => {
        const items = data.items || []
        return {
          total: data.total,
          data:
            items.map(t => {
              let activateTime = new Date(t.activateTime.replace('Z', '+08:00')).toLocaleString()
              let expiredTime = new Date(t.expiredTime.replace('Z', '+08:00')).toLocaleString()
              t.activateTimeLabel = t.activateTime ? dayjs(activateTime).format('YYYY-MM-DD HH:mm:ss') : '-'
              t.expiredTimeLabel = t.expiredTime ? dayjs(expiredTime).format('YYYY-MM-DD HH:mm:ss') : '-'
              t.bindAgent = t.agentId
                ? i18n.t('dfs_instance_selectlist_yibangding') + t.agentId
                : i18n.t('user_Center_weiBangDing')
              return t
            }) || []
        }
      })
    },
    goLicense() {
      this.$router.push({
        name: 'aliyunMarketLicense'
      })
    },
    goReceipt() {
      const href = 'https://market.console.aliyun.com/receipt/index.htm'
      openUrl(href)
    },
    handleRenewal() {
      this.buried('goRenewalAliyunCode')
      const href = 'https://market.console.aliyun.com/imageconsole/index.htm'
      openUrl(href)
    },
    //变更记录
    getChangeList() {
      this.$axios.get(`api/tcm/subscribe/{subscribeId}/change`).then(data => {})
    },
    changeActivedFilter(item) {
      this.activedFilter = item.value
      this.searchParams.status = this.activedFilter
      this.remoteMethod()
    },
    goInstance(row = {}) {
      this.$router.push({
        name: 'Instance',
        query: {
          keyword: row.resourceId
        }
      })
    },
    goMarketplace() {
      window.open(
        'https://console.cloud.google.com/marketplace/product/tapdata-public-415506/tapdata-realtime-pipeline'
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.order-flex {
  display: flex;
}
.operation-logs-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  .pointer {
    cursor: pointer;
  }
  .btn-refresh {
    padding: 0;
    height: 32px;
    line-height: 32px;
    width: 32px;
    font-size: 16px;
  }
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .operation-logs-table {
    flex: 1;
    overflow: auto;
    border-bottom: none;
  }
}
.sub-li {
  border: 1px solid #ebeef5;
  //border-bottom: none;
}
.color-subscribe {
  color: map-get($color, warning);
}
.sub-li-header {
  padding: 10px;
  border-bottom: 1px solid #ebeef5;
  background: #f7f8fa;
}
.subscribe-header-action {
  .el-divider:last-child {
    display: none;
  }
}
::v-deep {
  .el-dropdown-menu__item.dropdown-item--disabled {
    color: map-get($color, disable);
    cursor: default;
    &:hover {
      background: unset;
      color: map-get($color, disable);
    }
  }
  .el-tabs__content {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .header-tabs .el-tabs__header {
    margin-bottom: 0;
  }
  .li-operation {
    .el-button {
      padding: 2px 12px;
      min-width: unset;
      height: 24px;
      font-size: 12px;
      &.el-button--text {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
  .list-li {
    .status-tag {
      padding: 2px 8px;
      font-size: 12px;
      line-height: 24px;
    }
  }
}

.list-li {
  border: 1px solid map-get($bgColor, hover);
  &.primary {
    border-left: 8px solid map-get($color, primary);
  }
  &.warning {
    border-left: 8px solid map-get($color, warning);
  }
}

.li-item__label {
  display: inline-block;
  width: 72px;
  line-height: 24px;
}

.li-item__value {
  margin-left: 8px;
  display: inline-block;
  line-height: 24px;
}

.is-en {
  .li-item__label {
    width: 142px;
  }
}

.filter-li {
  line-height: 32px;
  height: 32px;
  &.active,
  &:hover {
    background-color: #e8f3ff;
    color: map-get($color, primary);
  }
}

.btn-refresh {
  padding: 0;
  height: 32px;
  width: 32px;
  min-width: 32px;
  font-size: 16px;
}
</style>
