import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

export default function SecurityPage() {
  return (
    <DashboardLayout>
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Security</h2>
          <p class="mt-1 text-sm text-gray-600">Monitor security events and configure protection</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm">SSL/TLS</span>
                  <span class="text-sm font-medium text-green-600">✓ Enabled</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm">API Key Authentication</span>
                  <span class="text-sm font-medium text-green-600">✓ Active</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm">OAuth 2.0</span>
                  <span class="text-sm font-medium text-green-600">✓ Configured</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm">IP Whitelisting</span>
                  <span class="text-sm font-medium text-yellow-600">⚠ Optional</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Security Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-3">
                <div class="text-sm">
                  <p class="font-medium">Failed authentication attempt</p>
                  <p class="text-gray-600">IP: 192.168.1.100 - 10 minutes ago</p>
                </div>
                <div class="text-sm">
                  <p class="font-medium">Rate limit exceeded</p>
                  <p class="text-gray-600">Client: test_client - 2 hours ago</p>
                </div>
                <div class="text-sm">
                  <p class="font-medium">New API key generated</p>
                  <p class="text-gray-600">User: admin - 1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}