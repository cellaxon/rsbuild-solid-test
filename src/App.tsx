import { lazy, JSX } from 'solid-js'
import { Router, Route, Navigate } from '@solidjs/router'
import { AuthProvider } from './contexts/auth-context'

const HomePage = lazy(() => import('./routes/index'))
const LoginPage = lazy(() => import('./routes/login'))
const DashboardOverview = lazy(() => import('./routes/dashboard/index'))
const TrafficPage = lazy(() => import('./routes/dashboard/traffic'))
const ClientsPage = lazy(() => import('./routes/dashboard/clients'))
const UsagePage = lazy(() => import('./routes/dashboard/usage'))
const PerformancePage = lazy(() => import('./routes/dashboard/performance'))
const RateLimitingPage = lazy(() => import('./routes/dashboard/rate-limiting'))
const SecurityPage = lazy(() => import('./routes/dashboard/security'))
const ErrorsPage = lazy(() => import('./routes/dashboard/errors'))
const BillingPage = lazy(() => import('./routes/dashboard/billing'))
const SettingsPage = lazy(() => import('./routes/dashboard/settings'))

function ProtectedRoute(props: { component: any }) {
  const user = localStorage.getItem('user')
  if (!user) {
    return <Navigate href="/login" />
  }
  return <props.component />
}

function AppRoutes() {
  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={() => <ProtectedRoute component={DashboardOverview} />} />
      <Route path="/dashboard/traffic" component={() => <ProtectedRoute component={TrafficPage} />} />
      <Route path="/dashboard/clients" component={() => <ProtectedRoute component={ClientsPage} />} />
      <Route path="/dashboard/usage" component={() => <ProtectedRoute component={UsagePage} />} />
      <Route path="/dashboard/performance" component={() => <ProtectedRoute component={PerformancePage} />} />
      <Route path="/dashboard/rate-limiting" component={() => <ProtectedRoute component={RateLimitingPage} />} />
      <Route path="/dashboard/security" component={() => <ProtectedRoute component={SecurityPage} />} />
      <Route path="/dashboard/errors" component={() => <ProtectedRoute component={ErrorsPage} />} />
      <Route path="/dashboard/billing" component={() => <ProtectedRoute component={BillingPage} />} />
      <Route path="/dashboard/settings" component={() => <ProtectedRoute component={SettingsPage} />} />
    </>
  )
}

function AppWithProvider(props: { children: JSX.Element }) {
  return (
    <AuthProvider>
      {props.children}
    </AuthProvider>
  )
}

export default function App() {
  return (
    <Router root={AppWithProvider}>
      <AppRoutes />
    </Router>
  )
}
