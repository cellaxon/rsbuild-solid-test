import { createEffect, onMount } from 'solid-js'

interface BarChartProps {
  data: Array<{ name: string; value: number }>
  height?: number
}

export function BarChart(props: BarChartProps) {
  let canvasRef: HTMLCanvasElement | undefined

  onMount(() => {
    if (!canvasRef) return

    const ctx = canvasRef.getContext('2d')
    if (!ctx) return

    const { width, height } = canvasRef
    const data = props.data
    const maxValue = Math.max(...data.map(d => d.value))
    const barWidth = width / data.length * 0.8
    const gap = width / data.length * 0.2

    ctx.clearRect(0, 0, width, height)

    data.forEach((item, index) => {
      const barHeight = (item.value / maxValue) * (height - 40)
      const x = index * (barWidth + gap) + gap / 2
      const y = height - barHeight - 20

      ctx.fillStyle = '#3B82F6'
      ctx.fillRect(x, y, barWidth, barHeight)

      ctx.fillStyle = '#666'
      ctx.font = '12px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(item.name, x + barWidth / 2, height - 5)
      ctx.fillText(item.value.toString(), x + barWidth / 2, y - 5)
    })
  })

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={props.height || 200}
      class="w-full"
    />
  )
}