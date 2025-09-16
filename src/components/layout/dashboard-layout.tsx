import { JSX, createSignal } from 'solid-js'
import { A, useLocation, useNavigate } from '@solidjs/router'
import { useAuth } from '../../contexts/auth-context'

interface DashboardLayoutProps {
  children: JSX.Element
}

export function DashboardLayout(props: DashboardLayoutProps) {
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = createSignal(true)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const menuItems = [
    { name: 'Overview', href: '/dashboard', icon: '📊' },
    { name: 'Traffic', href: '/dashboard/traffic', icon: '🚦' },
    { name: 'Clients', href: '/dashboard/clients', icon: '👥' },
    { name: 'Usage', href: '/dashboard/usage', icon: '📈' },
    { name: 'Performance', href: '/dashboard/performance', icon: '⚡' },
    { name: 'Rate Limiting', href: '/dashboard/rate-limiting', icon: '🚨' },
    { name: 'Security', href: '/dashboard/security', icon: '🔐' },
    { name: 'Errors', href: '/dashboard/errors', icon: '❌' },
    { name: 'Billing', href: '/dashboard/billing', icon: '💰' },
    { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' }
  ]

  return (
    <div class="min-h-screen bg-background">
      <nav class="border-b">
        <div class="px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen())}
                class="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
              >
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 class="ml-4 text-xl font-semibold">API Gateway Dashboard</h1>
            </div>
            <div class="flex items-center space-x-4">
              <span class="text-sm text-muted-foreground">Welcome, {user()?.username}</span>
              <button
                onClick={handleLogout}
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div class="flex">
        {isSidebarOpen() && (
          <div class="w-64 border-r bg-muted/10 h-[calc(100vh-4rem)]">
            <nav class="mt-5 px-2">
              {menuItems.map((item) => (
                <A
                  href={item.href}
                  class={`group flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1 transition-colors ${
                    location.pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <span class="mr-3">{item.icon}</span>
                  {item.name}
                </A>
              ))}
            </nav>
          </div>
        )}

        <main class="flex-1 p-6">
          {props.children}
        </main>
      </div>
    </div>
  )
}