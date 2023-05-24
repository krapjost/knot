import clsx from 'clsx'
import { Accessor, JSX } from 'solid-js'

type propType = JSX.HTMLAttributes<HTMLDivElement> & {
  isSidebarOpen: Accessor<boolean>
}
type Component = (props: propType & { ref?: HTMLDivElement }) => JSX.Element

const BaseLayout: Component = (props) => {
  return (
    <div
      class={clsx(
        'grid grid-cols-with-sidebar h-full transition-[grid]',
        { 'grid-cols-without-sidebar': !props.isSidebarOpen() },
      )}
    >
      {props.children}
    </div>
  )
}

export { BaseLayout }
