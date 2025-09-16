import { createSignal } from 'solid-js'
import { useNavigate } from '@solidjs/router'
import { useAuth } from '../contexts/auth-context'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export default function LoginPage() {
  const [username, setUsername] = createSignal('')
  const [password, setPassword] = createSignal('')
  const [error, setError] = createSignal('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    const success = login(username(), password())
    if (success) {
      navigate('/dashboard')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div class="min-h-screen flex items-center justify-center">
      <Card class="w-full max-w-md">
        <CardHeader>
          <CardTitle class="text-2xl">API Gateway Dashboard</CardTitle>
          <CardDescription>
            Enter your credentials to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} class="space-y-4">
            <div class="space-y-2">
              <Label for="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username()}
                onInput={(e) => setUsername(e.currentTarget.value)}
                required
              />
            </div>
            <div class="space-y-2">
              <Label for="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password()}
                onInput={(e) => setPassword(e.currentTarget.value)}
                required
              />
            </div>
            {error() && (
              <p class="text-sm text-red-500">{error()}</p>
            )}
            <Button type="submit" class="w-full">
              Sign In
            </Button>
            <p class="text-xs text-gray-500 text-center">
              Hint: Use username "abcd" and password "1234"
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}