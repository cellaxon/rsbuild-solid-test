import { onMount } from 'solid-js'

interface PieChartProps {
  data: Array<{ name: string; value: number; color: string }>
  height?: number
}

export function PieChart(props: PieChartProps) {
  let canvasRef: HTMLCanvasElement | undefined

  onMount(() => {
    if (!canvasRef) return

    const ctx = canvasRef.getContext('2d')
    if (!ctx) return

    const { width, height } = canvasRef
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 2 - 20
    const data = props.data

    const total = data.reduce((sum, item) => sum + item.value, 0)
    let currentAngle = -Math.PI / 2

    ctx.clearRect(0, 0, width, height)

    data.forEach((item) => {
      const sliceAngle = (item.value / total) * Math.PI * 2

      // Draw slice
      ctx.fillStyle = item.color
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle)
      ctx.closePath()
      ctx.fill()

      // Draw label
      const labelAngle = currentAngle + sliceAngle / 2
      const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7)
      const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7)

      ctx.fillStyle = 'white'
      ctx.font = 'bold 12px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(`${Math.round((item.value / total) * 100)}%`, labelX, labelY)

      currentAngle += sliceAngle
    })

    // Draw legend
    let legendY = 20
    data.forEach((item) => {
      ctx.fillStyle = item.color
      ctx.fillRect(width - 100, legendY, 10, 10)
      ctx.fillStyle = '#666'
      ctx.font = '12px sans-serif'
      ctx.textAlign = 'left'
      ctx.fillText(item.name, width - 85, legendY + 8)
      legendY += 20
    })
  })

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={props.height || 250}
      class="w-full"
    />
  )
}