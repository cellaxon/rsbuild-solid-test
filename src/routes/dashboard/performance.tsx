import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function PerformancePage() {
  return (
    <DashboardLayout>
      <div>
        <h1 class="text-2xl font-bold mb-6">Performance Metrics</h1>
        <Card>
          <CardHeader>
            <CardTitle>Response Time Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600">Performance metrics will be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}