import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { BarChart } from '../../components/charts/bar-chart'
import { LineChart } from '../../components/charts/line-chart'
import { PieChart } from '../../components/charts/pie-chart'
import { Activity, Users, Clock, AlertCircle } from 'lucide-solid'

export default function DashboardOverview() {
  // Generate sample data for line charts
  const generateTimeSeriesData = () => {
    const data = []
    const now = new Date()
    for (let i = 24; i >= 0; i--) {
      data.push({
        date: new Date(now.getTime() - i * 60 * 60 * 1000),
        value: Math.floor(Math.random() * 500) + 100
      })
    }
    return data
  }

  const barChartData = [
    { label: 'GET', value: 4500 },
    { label: 'POST', value: 2300 },
    { label: 'PUT', value: 1200 },
    { label: 'DELETE', value: 800 },
    { label: 'PATCH', value: 400 }
  ]

  const pieChartData = [
    { label: 'Success', value: 8500 },
    { label: '4xx Errors', value: 1200 },
    { label: '5xx Errors', value: 300 }
  ]

  const stats = [
    {
      title: 'Total Requests',
      value: '1.2M',
      change: '+12.3%',
      Icon: Activity,
      color: 'text-blue-600'
    },
    {
      title: 'Active Clients',
      value: '342',
      change: '+5.2%',
      Icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Avg Response Time',
      value: '124ms',
      change: '-8.1%',
      Icon: Clock,
      color: 'text-purple-600'
    },
    {
      title: 'Error Rate',
      value: '0.8%',
      change: '-2.3%',
      Icon: AlertCircle,
      color: 'text-red-600'
    }
  ]

  return (
    <DashboardLayout>
      <div>
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p class="text-gray-600 mt-2">Monitor your API Gateway performance and usage metrics</p>
        </div>

        {/* Stats Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card>
              <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle class="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.Icon class={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div class="text-2xl font-bold">{stat.value}</div>
                <p class="text-xs text-gray-600 mt-1">
                  <span class={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {stat.change}
                  </span>
                  {' from last period'}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Grid */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Request Volume (24 Hours)</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                data={generateTimeSeriesData()}
                width={500}
                height={300}
                color="#3b82f6"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Methods Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={barChartData}
                width={500}
                height={300}
                color="#10b981"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart
                data={pieChartData}
                width={500}
                height={350}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Time Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                data={generateTimeSeriesData().map(d => ({ ...d, value: Math.random() * 200 + 50 }))}
                width={500}
                height={300}
                color="#8b5cf6"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}