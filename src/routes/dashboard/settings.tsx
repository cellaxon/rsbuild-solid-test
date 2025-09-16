import { DashboardLayout } from '../../components/layout/dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Settings</h2>
          <p class="mt-1 text-sm text-gray-600">Manage your API Gateway configuration</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form class="space-y-4">
              <div>
                <Label for="api-name">API Gateway Name</Label>
                <Input id="api-name" type="text" value="Production API Gateway" />
              </div>
              <div>
                <Label for="base-url">Base URL</Label>
                <Input id="base-url" type="text" value="https://api.example.com" />
              </div>
              <div>
                <Label for="timeout">Default Timeout (ms)</Label>
                <Input id="timeout" type="number" value="30000" />
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <div>
                  <p class="font-medium">Production Key</p>
                  <p class="text-sm text-gray-600">pk_live_...xyz789</p>
                </div>
                <Button variant="outline" size="sm">Regenerate</Button>
              </div>
              <div class="flex justify-between items-center">
                <div>
                  <p class="font-medium">Test Key</p>
                  <p class="text-sm text-gray-600">pk_test_...abc123</p>
                </div>
                <Button variant="outline" size="sm">Regenerate</Button>
              </div>
              <Button>Create New API Key</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}