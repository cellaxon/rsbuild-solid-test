import { onMount } from 'solid-js'
import { useNavigate } from '@solidjs/router'

export default function HomePage() {
  const navigate = useNavigate()

  onMount(() => {
    const user = localStorage.getItem('user')
    if (user) {
      navigate('/dashboard')
    } else {
      navigate('/login')
    }
  })

  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">API Gateway Dashboard</h1>
        <p class="text-lg text-gray-600">Redirecting...</p>
      </div>
    </div>
  )
}