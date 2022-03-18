import { FormItem } from '@daas/form'
import { useField, FragmentComponent } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { observable } from '@formily/reactive'
import { usePrefix } from '../../../hooks'
import { IconWidget } from '../../widgets'
import './styles.scss'
import { defineComponent } from 'vue-demi'
import { composeExport } from '@daas/form'

const ExpandedMap = new Map()

const FoldItemComponent = observer(
  defineComponent({
    props: ['label'],
    setup: (props, { attrs, slots }) => {
      const prefix = usePrefix('fold-item')
      const fieldRef = useField()
      const expand = observable.ref(ExpandedMap.get(fieldRef.value.address.toString()))
      // const expand = useMemo(() => observable.ref(ExpandedMap.get(field.address.toString())), [])
      /*const slots = useRef({ base: null, extra: null })
    React.Children.forEach(children, node => {
      if (React.isValidElement(node)) {
        if (node?.['type']?.['displayName'] === 'FoldItem.Base') {
          slots.current.base = node['props'].children
        }
        if (node?.['type']?.['displayName'] === 'FoldItem.Extra') {
          slots.current.extra = node['props'].children
        }
      }
    })*/

      return () => {
        const field = fieldRef.value
        return (
          <div class={prefix}>
            <div
              class={prefix + '-base'}
              onClick={() => {
                expand.value = !expand.value
                ExpandedMap.set(field.address.toString(), expand.value)
              }}
            >
              <FormItem.BaseItem
                attrs={attrs}
                label={
                  <span
                    class={[
                      prefix + '-title',
                      {
                        expand: expand.value
                      }
                    ]}
                  >
                    {slots.extra && <IconWidget infer="Expand" size={10} />}
                    {props.label}
                  </span>
                }
              >
                <div
                  style={{ width: '100%' }}
                  onClick={e => {
                    e.stopPropagation()
                  }}
                >
                  {slots.base?.()}
                </div>
              </FormItem.BaseItem>
            </div>
            {expand.value && slots.extra && <div class={prefix + '-extra'}>{slots.extra?.()}</div>}
          </div>
        )
      }
    }
  })
)

export const FoldItem = composeExport(FoldItemComponent, {
  Base: composeExport(() => <FragmentComponent></FragmentComponent>, {
    displayName: 'FoldItem.Base'
  }),
  Extra: composeExport(() => <FragmentComponent></FragmentComponent>, {
    displayName: 'FoldItem.Extra'
  })
})
