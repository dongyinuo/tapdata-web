import { observer } from '@formily/reactive-vue'
import { useTree, useWorkbench } from '../../hooks'
import { Viewport } from '../containers'
import { defineComponent, ref } from 'vue-demi'

export const ViewPanel = observer(
  defineComponent({
    props: {
      type: String,
      scrollable: { type: Boolean, default: true },
      dragTipsDirection: { type: String }
    },
    setup: (props, { slots }) => {
      const workbenchRef = useWorkbench()
      const treeRef = useTree()
      // useEffect(() => {
      //   if (workbench.type === props.type) {
      //     requestIdle(() => {
      //       requestAnimationFrame(() => {
      //         setVisible(true)
      //       })
      //     })
      //   } else {
      //     setVisible(false)
      //   }
      // }, [workbench.type])

      return () => {
        const workbench = workbenchRef.value
        const tree = treeRef.value
        if (workbench.type !== props.type) return null
        const render = () => {
          console.log('slots.default', tree)
          return slots.default({
            tree,
            onChange: payload => {
              console.log('ViewPanel.onChange', payload)
              tree.from(payload)
              // tree.takeSnapshot()
            }
          })
        }
        if (workbench.type === 'DESIGNABLE')
          return <Viewport dragTipsDirection={props.dragTipsDirection}>{render()}</Viewport>

        return (
          <div
            style={{
              overflow: props.scrollable ? 'overlay' : 'hidden',
              height: '100%',
              cursor: 'auto',
              userSelect: 'text'
            }}
          >
            {render()}
          </div>
        )
      }
    }
  })
)
