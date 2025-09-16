import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function RateLimitingPage() {
  return (
    <DashboardLayout>
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Rate Limiting</h2>
          <p class="mt-1 text-sm text-gray-600">Configure and monitor rate limits</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Rate Limit Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="border rounded-lg p-4">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="font-medium">Global Rate Limit</p>
                    <p class="text-sm text-gray-600 mt-1">1000 requests per minute</p>
                  </div>
                  <span class="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Active</span>
                </div>
                <p class="text-sm text-gray-600 mt-2">Currently: 456 req/min</p>
              </div>
              <div class="border rounded-lg p-4">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="font-medium">Per-Client Rate Limit</p>
                    <p class="text-sm text-gray-600 mt-1">100 requests per minute per client</p>
                  </div>
                  <span class="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Active</span>
                </div>
                <p class="text-sm text-gray-600 mt-2">Highest: 67 req/min (client_prod_001)</p>
              </div>
              <div class="border rounded-lg p-4">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="font-medium">Burst Protection</p>
                    <p class="text-sm text-gray-600 mt-1">50 requests per second max burst</p>
                  </div>
                  <span class="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Active</span>
                </div>
                <p class="text-sm text-gray-600 mt-2">No bursts detected today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}