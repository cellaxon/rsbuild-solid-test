import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { LineChart } from '../../components/charts/line-chart'

export default function TrafficPage() {
  const trafficData = [
    { name: '00:00', value: 120 },
    { name: '04:00', value: 80 },
    { name: '08:00', value: 350 },
    { name: '12:00', value: 480 },
    { name: '16:00', value: 420 },
    { name: '20:00', value: 280 }
  ]

  return (
    <DashboardLayout>
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Traffic Analytics</h2>
          <p class="mt-1 text-sm text-gray-600">Monitor your API traffic patterns and trends</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent class="p-6">
              <p class="text-sm font-medium text-gray-600">Peak Traffic</p>
              <p class="text-2xl font-bold text-gray-900">480 req/min</p>
              <p class="mt-2 text-sm text-gray-600">at 12:00 PM</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="p-6">
              <p class="text-sm font-medium text-gray-600">Total Today</p>
              <p class="text-2xl font-bold text-gray-900">125,430</p>
              <p class="mt-2 text-sm text-green-600">+15% vs yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="p-6">
              <p class="text-sm font-medium text-gray-600">Average Load</p>
              <p class="text-2xl font-bold text-gray-900">265 req/min</p>
              <p class="mt-2 text-sm text-gray-600">Last 24 hours</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Traffic Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart data={trafficData} height={300} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}