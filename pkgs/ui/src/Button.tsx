import { cva, VariantProps } from 'class-variance-authority'

import { JSX } from 'solid-js'
type ButtonProps = VariantProps<typeof button>
type propType = JSX.HTMLAttributes<HTMLButtonElement> & ButtonProps
type Component = (props: propType & { ref?: HTMLButtonElement }) => JSX.Element

const button = cva([
  'cursor-pointer text-neutral-500 rounded-md outline-none items-center transition-colors',
  'hover:bg-neutral-200',
], {
  variants: {
    size: {
      icon: ['p-1'],
      sm: ['text-sm', 'py-1', 'px-2'],
      md: ['text-base', 'py-2', 'px-4'],
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export const Button: Component = (props) => {
  const { size } = props
  return (
    <button
      class={button({ size })}
    >
      {props
        .children}
    </button>
  )
}
