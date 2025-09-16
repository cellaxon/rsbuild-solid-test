import { JSX, splitProps } from 'solid-js'

interface LabelProps extends JSX.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label(props: LabelProps) {
  const [local, others] = splitProps(props, ['class', 'children'])

  return (
    <label
      class={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${local.class || ''}`}
      {...others}
    >
      {local.children}
    </label>
  )
}