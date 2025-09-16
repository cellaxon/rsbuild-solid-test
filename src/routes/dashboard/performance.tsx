import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function PerformancePage() {
  return (
    <DashboardLayout>
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Performance Metrics</h2>
          <p class="mt-1 text-sm text-gray-600">Monitor API performance and latency</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent class="p-6">
              <p class="text-sm font-medium text-gray-600">P50 Latency</p>
              <p class="text-2xl font-bold text-gray-900">45ms</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="p-6">
              <p class="text-sm font-medium text-gray-600">P95 Latency</p>
              <p class="text-2xl font-bold text-gray-900">142ms</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="p-6">
              <p class="text-sm font-medium text-gray-600">P99 Latency</p>
              <p class="text-2xl font-bold text-gray-900">389ms</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Performance by Endpoint</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="border-b pb-2">
                <div class="flex justify-between items-center">
                  <span class="text-sm font-medium">/api/users</span>
                  <span class="text-sm text-green-600">32ms avg</span>
                </div>
              </div>
              <div class="border-b pb-2">
                <div class="flex justify-between items-center">
                  <span class="text-sm font-medium">/api/products</span>
                  <span class="text-sm text-green-600">41ms avg</span>
                </div>
              </div>
              <div class="border-b pb-2">
                <div class="flex justify-between items-center">
                  <span class="text-sm font-medium">/api/search</span>
                  <span class="text-sm text-yellow-600">156ms avg</span>
                </div>
              </div>
              <div class="pb-2">
                <div class="flex justify-between items-center">
                  <span class="text-sm font-medium">/api/analytics</span>
                  <span class="text-sm text-red-600">423ms avg</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}