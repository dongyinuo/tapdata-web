import { createBehavior, createResource } from '../../core'
import { createForm } from '@formily/core'
import { observer } from '@formily/reactive-vue'
import { Form as BaseForm } from '@daas/form'
import { usePrefix } from '../../hooks'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { defineComponent, computed } from 'vue-demi'
import './styles.scss'

export const Form = observer(
  defineComponent({
    setup: (props, { attrs }) => {
      const prefix = usePrefix('designable-form')
      const form = computed(() =>
        createForm({
          designable: true
        })
      )
      return () => (
        <BaseForm {...props} style={{ ...attrs.style }} class={prefix} form={form}>
          {props.children}
        </BaseForm>
      )
    }
  })
)

Form.Behavior = createBehavior({
  name: 'Form',
  selector: node => node.componentName === 'Form',
  designerProps(node) {
    return {
      draggable: !node.isRoot,
      cloneable: !node.isRoot,
      deletable: !node.isRoot,
      droppable: true,
      propsSchema: AllSchemas.Form,
      // propsSchema: {
      //   type: 'object',
      //   properties: {
      //     ...AllSchemas.FormLayout.properties,
      //     style: AllSchemas.CSSStyle
      //   }
      // },
      defaultProps: {
        labelCol: 6,
        wrapperCol: 12
      }
    }
  },
  designerLocales: AllLocales.Form
})

Form.Resource = createResource({
  title: { 'zh-CN': '表单', 'en-US': 'Form' },
  icon: 'FormLayoutSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'object',
        'x-component': 'Form'
      }
    }
  ]
})
