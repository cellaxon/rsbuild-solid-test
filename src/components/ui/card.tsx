import { JSX, splitProps } from 'solid-js'

interface CardProps {
  class?: string
  children: JSX.Element
}

export function Card(props: CardProps) {
  const [local, others] = splitProps(props, ['class', 'children'])

  return (
    <div
      class={`rounded-xl border bg-card text-card-foreground shadow ${local.class || ''}`}
      {...others}
    >
      {local.children}
    </div>
  )
}

export function CardHeader(props: CardProps) {
  const [local, others] = splitProps(props, ['class', 'children'])

  return (
    <div
      class={`flex flex-col space-y-1.5 p-6 ${local.class || ''}`}
      {...others}
    >
      {local.children}
    </div>
  )
}

export function CardTitle(props: CardProps) {
  const [local, others] = splitProps(props, ['class', 'children'])

  return (
    <h3
      class={`font-semibold leading-none tracking-tight ${local.class || ''}`}
      {...others}
    >
      {local.children}
    </h3>
  )
}

export function CardDescription(props: CardProps) {
  const [local, others] = splitProps(props, ['class', 'children'])

  return (
    <p
      class={`text-sm text-muted-foreground ${local.class || ''}`}
      {...others}
    >
      {local.children}
    </p>
  )
}

export function CardContent(props: CardProps) {
  const [local, others] = splitProps(props, ['class', 'children'])

  return (
    <div
      class={`p-6 pt-0 ${local.class || ''}`}
      {...others}
    >
      {local.children}
    </div>
  )
}