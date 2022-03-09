import { useDragon, usePrefix } from '../../../hooks'
import { ClosestPosition } from '../../../core'
import { observer } from '@formily/reactive-vue'
import { defineComponent } from 'vue-demi'

// 插入导航线

export const Insertion = observer(
  defineComponent({
    setup() {
      const viewportDragon = useDragon()
      const prefix = usePrefix('aux-insertion')
      const createInsertionStyle = () => {
        const closestDirection = viewportDragon.closestDirection
        const closestRect = viewportDragon.closestOffsetRect
        const isInlineLayout = viewportDragon.getClosestLayout() === 'horizontal'
        const baseStyle = {
          position: 'absolute',
          transform: 'perspective(1px) translate3d(0,0,0)',
          top: 0,
          left: 0
        }
        if (!closestRect) return baseStyle
        if (closestDirection === ClosestPosition.Before || closestDirection === ClosestPosition.ForbidBefore) {
          baseStyle.width = 2
          baseStyle.height = closestRect.height
          baseStyle.transform = `perspective(1px) translate3d(${closestRect.x}px,${closestRect.y}px,0)`
        } else if (closestDirection === ClosestPosition.After || closestDirection === ClosestPosition.ForbidAfter) {
          baseStyle.width = 2
          baseStyle.height = closestRect.height
          baseStyle.transform = `perspective(1px) translate3d(${closestRect.x + closestRect.width - 2}px,${
            closestRect.y
          }px,0)`
        } else if (
          closestDirection === ClosestPosition.InnerAfter ||
          closestDirection === ClosestPosition.Under ||
          closestDirection === ClosestPosition.ForbidInnerAfter ||
          closestDirection === ClosestPosition.ForbidUnder
        ) {
          if (isInlineLayout) {
            baseStyle.width = 2
            baseStyle.height = closestRect.height
            baseStyle.transform = `perspective(1px) translate3d(${closestRect.x + closestRect.width - 2}px,${
              closestRect.y
            }px,0)`
          } else {
            baseStyle.width = closestRect.width
            baseStyle.height = 2
            baseStyle.transform = `perspective(1px) translate3d(${closestRect.x}px,${
              closestRect.y + closestRect.height - 2
            }px,0)`
          }
        } else if (
          closestDirection === ClosestPosition.InnerBefore ||
          closestDirection === ClosestPosition.Upper ||
          closestDirection === ClosestPosition.ForbidInnerBefore ||
          closestDirection === ClosestPosition.ForbidUpper
        ) {
          if (isInlineLayout) {
            baseStyle.width = 2
            baseStyle.height = closestRect.height
            baseStyle.transform = `perspective(1px) translate3d(${closestRect.x}px,${closestRect.y}px,0)`
          } else {
            baseStyle.width = closestRect.width
            baseStyle.height = 2
            baseStyle.transform = `perspective(1px) translate3d(${closestRect.x}px,${closestRect.y}px,0)`
          }
        }
        if (closestDirection.includes('FORBID')) {
          baseStyle.backgroundColor = 'red'
        }

        baseStyle.width += 'px'
        baseStyle.height += 'px'
        return baseStyle
      }

      return () => <div class={prefix} style={createInsertionStyle()}></div>
    }
  })
)
