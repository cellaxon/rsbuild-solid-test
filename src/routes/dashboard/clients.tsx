import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function ClientsPage() {
  return (
    <DashboardLayout>
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">API Clients</h2>
          <p class="mt-1 text-sm text-gray-600">Manage and monitor your API clients</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="border-b pb-4">
                <div class="flex justify-between items-center">
                  <div>
                    <p class="font-medium">Production API Client</p>
                    <p class="text-sm text-gray-600">client_id: prod_api_001</p>
                  </div>
                  <span class="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Active</span>
                </div>
                <p class="text-sm text-gray-600 mt-2">Last request: 2 minutes ago</p>
              </div>
              <div class="border-b pb-4">
                <div class="flex justify-between items-center">
                  <div>
                    <p class="font-medium">Mobile App Client</p>
                    <p class="text-sm text-gray-600">client_id: mobile_app_001</p>
                  </div>
                  <span class="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Active</span>
                </div>
                <p class="text-sm text-gray-600 mt-2">Last request: 5 minutes ago</p>
              </div>
              <div class="pb-4">
                <div class="flex justify-between items-center">
                  <div>
                    <p class="font-medium">Test Environment</p>
                    <p class="text-sm text-gray-600">client_id: test_env_001</p>
                  </div>
                  <span class="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">Idle</span>
                </div>
                <p class="text-sm text-gray-600 mt-2">Last request: 2 hours ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}