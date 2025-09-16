import { onMount } from 'solid-js'

interface LineChartProps {
  data: Array<{ name: string; value: number }>
  height?: number
}

export function LineChart(props: LineChartProps) {
  let canvasRef: HTMLCanvasElement | undefined

  onMount(() => {
    if (!canvasRef) return

    const ctx = canvasRef.getContext('2d')
    if (!ctx) return

    const { width, height } = canvasRef
    const data = props.data
    const maxValue = Math.max(...data.map(d => d.value))
    const padding = 40

    ctx.clearRect(0, 0, width, height)

    // Draw axes
    ctx.strokeStyle = '#E5E7EB'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw line
    ctx.strokeStyle = '#3B82F6'
    ctx.lineWidth = 2
    ctx.beginPath()

    data.forEach((item, index) => {
      const x = padding + (index / (data.length - 1)) * (width - padding * 2)
      const y = height - padding - ((item.value / maxValue) * (height - padding * 2))

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }

      // Draw point
      ctx.fillStyle = '#3B82F6'
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()
    })

    ctx.stroke()

    // Draw labels
    ctx.fillStyle = '#666'
    ctx.font = '12px sans-serif'
    ctx.textAlign = 'center'

    data.forEach((item, index) => {
      const x = padding + (index / (data.length - 1)) * (width - padding * 2)
      ctx.fillText(item.name, x, height - padding + 20)
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