import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { BarChart } from '../../components/charts/bar-chart'
import { LineChart } from '../../components/charts/line-chart'
import { PieChart } from '../../components/charts/pie-chart'

export default function DashboardOverview() {
  const requestsData = [
    { name: 'Mon', value: 1200 },
    { name: 'Tue', value: 1900 },
    { name: 'Wed', value: 1500 },
    { name: 'Thu', value: 2200 },
    { name: 'Fri', value: 2800 },
    { name: 'Sat', value: 1800 },
    { name: 'Sun', value: 1400 }
  ]

  const statusData = [
    { name: '2xx', value: 8500, color: '#10B981' },
    { name: '3xx', value: 1200, color: '#3B82F6' },
    { name: '4xx', value: 250, color: '#F59E0B' },
    { name: '5xx', value: 50, color: '#EF4444' }
  ]

  const performanceData = [
    { name: '00:00', value: 45 },
    { name: '04:00', value: 52 },
    { name: '08:00', value: 78 },
    { name: '12:00', value: 95 },
    { name: '16:00', value: 88 },
    { name: '20:00', value: 65 }
  ]

  return (
    <DashboardLayout>
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold">Dashboard Overview</h2>
          <p class="mt-1 text-sm text-muted-foreground">Monitor your API Gateway performance and usage</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent class="p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600">Total Requests</p>
                  <p class="text-2xl font-bold text-gray-900">12,345</p>
                </div>
                <span class="text-3xl">📊</span>
              </div>
              <p class="mt-2 text-sm text-green-600">+12.5% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600">Active Clients</p>
                  <p class="text-2xl font-bold text-gray-900">89</p>
                </div>
                <span class="text-3xl">👥</span>
              </div>
              <p class="mt-2 text-sm text-green-600">+3 new this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600">Avg Response Time</p>
                  <p class="text-2xl font-bold text-gray-900">142ms</p>
                </div>
                <span class="text-3xl">⚡</span>
              </div>
              <p class="mt-2 text-sm text-yellow-600">-8ms from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent class="p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-gray-600">Error Rate</p>
                  <p class="text-2xl font-bold text-gray-900">0.3%</p>
                </div>
                <span class="text-3xl">❌</span>
              </div>
              <p class="mt-2 text-sm text-green-600">Within normal range</p>
            </CardContent>
          </Card>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Requests by Day</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart data={requestsData} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart data={statusData} />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Response Time Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart data={performanceData} />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}