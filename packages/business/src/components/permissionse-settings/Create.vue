<template>
  <ElDialog
    :title="title"
    :visible="visible"
    :append-to-body="true"
    width="800px"
    top="10vh"
    custom-class="connection-dialog ldp-conection-dialog flex flex-column"
    :close-on-click-modal="false"
    @close="handleClose"
  >
    <ElForm ref="form" label-position="left" label-width="150px" :model="form" class="my-n6">
      <ElFormItem
        size="mini"
        :label="$t('packages_business_permissionse_settings_create_xuanzeshouquanjiao')"
        prop="roleId"
      >
        <ElSelect v-model="form.roleId" size="mini" @change="getData">
          <ElOption v-for="item in roleList" :label="item.label" :value="item.value" :key="item.value"></ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem
        size="mini"
        :label="$t('packages_business_permissionse_settings_create_shezhiquanxian')"
        prop="checked"
      >
        <ElCheckboxGroup v-model="form.checked" size="mini" class="inline-flex ml-4" @change="handleChange">
          <ElCheckbox
            v-for="item in items"
            :label="item.value"
            :key="item.value"
            :disabled="item.value === 'View' && form.checked.length > 1"
            >{{ item.label }}</ElCheckbox
          >
        </ElCheckboxGroup>
      </ElFormItem>
    </ElForm>

    <span class="dialog-footer" slot="footer">
      <ElButton @click="handleClose" size="mini">{{ $t('public_button_cancel') }}</ElButton>
      <ElButton :disabled="!form.roleId" size="mini" type="primary" :loading="saveLoading" @click="handleSave">{{
        $t('public_button_save')
      }}</ElButton>
    </span>
  </ElDialog>
</template>

<script>
import i18n from '@tap/i18n'
import { usersApi, dataPermissionApi } from '@tap/api'

export default {
  name: 'Create',

  props: {
    title: {
      type: String,
      default: () => {
        return i18n.t('packages_business_permissionse_settings_create_quanxianshezhi')
      }
    }
  },

  data() {
    return {
      visible: false,
      type: 'Connections',
      form: {
        checked: [],
        roleId: ''
      },
      roleList: [],
      dataList: [],
      saveLoading: false
    }
  },

  computed: {
    items() {
      const MAP = {
        Task: [
          {
            label: i18n.t('public_button_check'),
            value: 'View'
          },
          {
            label: i18n.t('public_button_edit'),
            value: 'Edit'
          },
          {
            label: i18n.t('public_button_delete'),
            value: 'Delete'
          },
          {
            label: i18n.t('public_button_reset'),
            value: 'Reset'
          },
          {
            label: i18n.t('public_button_start'),
            value: 'Start'
          },
          {
            label: i18n.t('public_button_stop'),
            value: 'Stop'
          }
        ]
      }

      let result = MAP[this.type] || [
        {
          label: i18n.t('public_button_check'),
          value: 'View'
        },
        {
          label: i18n.t('public_button_edit'),
          value: 'Edit'
        },
        {
          label: i18n.t('public_button_delete'),
          value: 'Delete'
        }
      ]

      result[0].disabled = this.form.checked.length > 1

      return result
    }
  },

  created() {
    this.getRoleList()
  },

  methods: {
    init() {
      this.form.roleId = ''
      this.form.checked = []
    },

    getData(val) {
      let params = {
        typeId: val,
        dataType: this.type,
        dataIds: this.dataList.map(t => t.id).join()
      }
      dataPermissionApi.roleActions(params).then(data => {
        this.form.checked = data
      })
    },

    getRoleList() {
      let filter = {
        order: 'name',
        limit: 500
      }
      usersApi
        .role({
          filter: JSON.stringify(filter)
        })
        .then(data => {
          this.roleList =
            data.items?.map(t => {
              return {
                label: t.name,
                value: t.id
              }
            }) || []
          return {
            total: data?.total || 0,
            data: data?.items || []
          }
        })
    },

    handleClose() {
      this.visible = false
    },

    open(data = [], type = 'Connections') {
      this.init()
      this.type = type
      this.dataList = data
      this.visible = true
    },

    close() {
      this.visible = false
    },

    handleSave() {
      let params = {
        type: 'Role',
        typeIds: [this.form.roleId],
        dataType: this.type,
        dataIds: this.dataList.map(t => t.id),
        actions: this.form.checked
      }

      this.saveLoading = true
      dataPermissionApi
        .dataAuth(params)
        .then((data = []) => {
          if (!data?.length) {
            this.$message.success(this.$t('public_message_save_ok'))
          } else {
            this.$message.warning({
              dangerouslyUseHTMLString: true,
              message:
                i18n.t('packages_business_permissionse_settings_create_wufaduiyixiashujujinxingshouquan') +
                ':<br/>' +
                this.dataList.map(t => t.name).join('<br/>')
            })
            // this.$message.warning('以下数据无权限修改，将跳过保存:' + ' ' + this.dataList.map(t => t.name).join(',\n<br/>'))
          }
          this.close()
        })
        .finally(() => {
          this.saveLoading = false
        })
    },

    handleChange(val) {
      let { checked } = this.form
      if (!checked.includes('View') && checked.length) {
        checked.unshift('View')
      }
    }
  }
}
</script>

<style scoped></style>
