import { JSX, createSignal } from 'solid-js'
import { A, useLocation, useNavigate } from '@solidjs/router'
import { useAuth } from '../../contexts/auth-context'
import { Button } from '../ui/button'
import {
  BarChart3,
  Activity,
  TrendingUp,
  Clock,
  Shield,
  Settings,
  LogOut,
  Menu,
  Home,
  AlertCircle,
  Users,
  DollarSign
} from 'lucide-solid'

interface DashboardLayoutProps {
  children: JSX.Element
}

export function DashboardLayout(props: DashboardLayoutProps) {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = createSignal(true)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const menuItems = [
    {
      title: 'Dashboard',
      Icon: Home,
      href: '/dashboard',
      description: 'Overview of API Gateway metrics'
    },
    {
      title: 'API Traffic',
      Icon: BarChart3,
      href: '/dashboard/traffic',
      description: 'Real-time API traffic analysis'
    },
    {
      title: 'Performance',
      Icon: Activity,
      href: '/dashboard/performance',
      description: 'Response time and latency metrics'
    },
    {
      title: 'Usage Analytics',
      Icon: TrendingUp,
      href: '/dashboard/usage',
      description: 'API usage patterns and trends'
    },
    {
      title: 'Error Rates',
      Icon: AlertCircle,
      href: '/dashboard/errors',
      description: 'Error tracking and monitoring'
    },
    {
      title: 'Rate Limiting',
      Icon: Clock,
      href: '/dashboard/rate-limiting',
      description: 'Rate limit status and configurations'
    },
    {
      title: 'Security',
      Icon: Shield,
      href: '/dashboard/security',
      description: 'Security events and threat detection'
    },
    {
      title: 'Clients',
      Icon: Users,
      href: '/dashboard/clients',
      description: 'API client management'
    },
    {
      title: 'Billing',
      Icon: DollarSign,
      href: '/dashboard/billing',
      description: 'Usage costs and billing information'
    },
    {
      title: 'Settings',
      Icon: Settings,
      href: '/dashboard/settings',
      description: 'Dashboard configuration'
    }
  ]

  return (
    <div class="min-h-screen bg-gray-50">
      {/* Header */}
      <header class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div class="flex items-center justify-between h-16 px-4">
          <div class="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen())}
              class="lg:hidden"
            >
              <Menu class="h-5 w-5" />
            </Button>
            <h1 class="text-xl font-bold">API Gateway Dashboard</h1>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm text-gray-600">Welcome, {user()?.username}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              class="flex items-center gap-2"
            >
              <LogOut class="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        class={`fixed left-0 top-16 bottom-0 z-40 w-64 bg-white border-r border-gray-200 transition-transform duration-200 ${
          sidebarOpen() ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <nav class="p-4 space-y-1 overflow-y-auto h-full">
          {menuItems.map((item) => {
            const isActive = () => location.pathname === item.href
            return (
              <A
                href={item.href}
                class={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive()
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.Icon class="h-4 w-4" />
                <div class="flex-1">
                  <div>{item.title}</div>
                  {isActive() && (
                    <div class="text-xs text-gray-500 mt-0.5">
                      {item.description}
                    </div>
                  )}
                </div>
              </A>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main class={`pt-16 transition-all duration-200 ${
        sidebarOpen() ? "lg:ml-64" : ""
      }`}>
        <div class="p-6">
          {props.children}
        </div>
      </main>
    </div>
  )
}