import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function UsagePage() {
  return (
    <DashboardLayout>
      <div>
        <h1 class="text-2xl font-bold mb-6">Usage Analytics</h1>
        <Card>
          <CardHeader>
            <CardTitle>API Usage Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600">Usage analytics will be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}