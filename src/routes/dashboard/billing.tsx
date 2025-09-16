import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function BillingPage() {
  return (
    <DashboardLayout>
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Billing & Usage</h2>
          <p class="mt-1 text-sm text-gray-600">Manage your billing and view usage costs</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent class="p-6">
              <p class="text-sm font-medium text-gray-600">Current Bill</p>
              <p class="text-2xl font-bold text-gray-900">$847.32</p>
              <p class="mt-2 text-sm text-gray-600">Due Dec 1, 2024</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="p-6">
              <p class="text-sm font-medium text-gray-600">Monthly Average</p>
              <p class="text-2xl font-bold text-gray-900">$756.89</p>
              <p class="mt-2 text-sm text-green-600">-5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent class="p-6">
              <p class="text-sm font-medium text-gray-600">Plan</p>
              <p class="text-2xl font-bold text-gray-900">Business</p>
              <p class="mt-2 text-sm text-gray-600">$500/mo + usage</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Usage Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-sm">Base Plan</span>
                <span class="text-sm font-medium">$500.00</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm">API Calls (750K @ $0.0002)</span>
                <span class="text-sm font-medium">$150.00</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm">Bandwidth (45GB @ $0.08/GB)</span>
                <span class="text-sm font-medium">$36.00</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm">Additional Features</span>
                <span class="text-sm font-medium">$161.32</span>
              </div>
              <div class="border-t pt-3 flex justify-between items-center">
                <span class="font-medium">Total</span>
                <span class="font-medium">$847.32</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}