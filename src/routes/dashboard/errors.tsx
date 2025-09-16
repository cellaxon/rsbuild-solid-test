import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function ErrorsPage() {
  return (
    <DashboardLayout>
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Error Tracking</h2>
          <p class="mt-1 text-sm text-gray-600">Monitor and analyze API errors</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader class="pb-2">
              <p class="text-sm font-medium text-gray-600">Total Errors (24h)</p>
            </CardHeader>
            <CardContent>
              <p class="text-2xl font-bold text-gray-900">127</p>
              <p class="mt-2 text-sm text-red-600">+23 from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader class="pb-2">
              <p class="text-sm font-medium text-gray-600">Error Rate</p>
            </CardHeader>
            <CardContent>
              <p class="text-2xl font-bold text-gray-900">0.3%</p>
              <p class="mt-2 text-sm text-green-600">Within threshold</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader class="pb-2">
              <p class="text-sm font-medium text-gray-600">Most Common</p>
            </CardHeader>
            <CardContent>
              <p class="text-2xl font-bold text-gray-900">404</p>
              <p class="mt-2 text-sm text-gray-600">45 occurrences</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Errors</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="border-b pb-3">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="font-medium text-red-600">500 Internal Server Error</p>
                    <p class="text-sm text-gray-600">/api/orders/process</p>
                  </div>
                  <span class="text-sm text-gray-500">5 min ago</span>
                </div>
                <p class="text-sm text-gray-600 mt-1">Database connection timeout</p>
              </div>
              <div class="border-b pb-3">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="font-medium text-yellow-600">404 Not Found</p>
                    <p class="text-sm text-gray-600">/api/products/xyz123</p>
                  </div>
                  <span class="text-sm text-gray-500">12 min ago</span>
                </div>
                <p class="text-sm text-gray-600 mt-1">Product ID not found</p>
              </div>
              <div class="pb-3">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="font-medium text-yellow-600">429 Too Many Requests</p>
                    <p class="text-sm text-gray-600">/api/search</p>
                  </div>
                  <span class="text-sm text-gray-500">25 min ago</span>
                </div>
                <p class="text-sm text-gray-600 mt-1">Rate limit exceeded for client_test_001</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}