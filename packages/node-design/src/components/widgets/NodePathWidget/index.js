import { Breadcrumb, BreadcrumbItem } from 'element-ui'
import { useCurrentNode, useSelection, usePrefix, useHover } from '../../../hooks'
import { IconWidget } from '../IconWidget'
import { NodeTitleWidget } from '../NodeTitleWidget'
import { observer } from '@formily/reactive-vue'
import './styles.scss'
import { defineComponent } from 'vue-demi'

export const NodePathWidget = observer(
  defineComponent({
    props: {
      workspaceId: String
    },
    setup: props => {
      const selectedRef = useCurrentNode(props.workspaceId)
      const selection = useSelection(props.workspaceId)
      const hoverRef = useHover(props.workspaceId)
      const prefix = usePrefix('node-path')

      const maxItems = props.maxItems ?? 3

      return () => {
        const selected = selectedRef.value
        if (!selected) return null

        const nodes = selected
          .getParents()
          .slice(0, maxItems - 1)
          .reverse()
          .concat(selected)

        return (
          <Breadcrumb class={prefix}>
            {nodes.map((node, key) => {
              return (
                <BreadcrumbItem key={key}>
                  {key === 0 && <IconWidget infer="Position" style={{ marginRight: 3 }} />}
                  <a
                    href=""
                    onMouseenter={() => {
                      hoverRef.value.setHover(node)
                    }}
                    onClick={e => {
                      e.stopPropagation()
                      e.preventDefault()
                      selection.select(node)
                    }}
                  >
                    <NodeTitleWidget node={node} />
                  </a>
                </BreadcrumbItem>
              )
            })}
          </Breadcrumb>
        )
      }
    }
  })
)
