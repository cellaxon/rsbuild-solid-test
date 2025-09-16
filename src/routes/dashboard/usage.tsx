import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function UsagePage() {
  return (
    <DashboardLayout>
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">API Usage</h2>
          <p class="mt-1 text-sm text-gray-600">Track your API usage and quotas</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm font-medium">API Calls</span>
                    <span class="text-sm text-gray-600">750K / 1M</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full" style="width: 75%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm font-medium">Bandwidth</span>
                    <span class="text-sm text-gray-600">45GB / 100GB</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-green-600 h-2 rounded-full" style="width: 45%"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage by Endpoint</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-sm">/api/users</span>
                  <span class="text-sm font-medium">234K calls</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm">/api/products</span>
                  <span class="text-sm font-medium">189K calls</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm">/api/orders</span>
                  <span class="text-sm font-medium">156K calls</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm">/api/analytics</span>
                  <span class="text-sm font-medium">98K calls</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}