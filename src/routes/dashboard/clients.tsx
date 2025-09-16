import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function ClientsPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 class="text-2xl font-bold mb-6">API Clients</h1>
        <Card>
          <CardHeader>
            <CardTitle>Client Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-gray-600">Client management interface will be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}