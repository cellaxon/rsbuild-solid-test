import { createContext, useContext, createSignal, JSX } from 'solid-js'

interface User {
  username: string
  role: string
}

interface AuthContextType {
  user: () => User | null
  login: (username: string, password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType>()

export function AuthProvider(props: { children: JSX.Element }) {
  const storedUser = localStorage.getItem('user')
  const [user, setUser] = createSignal<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  )

  const login = (username: string, password: string): boolean => {
    if (username === 'abcd' && password === '1234') {
      const newUser: User = { username, role: 'admin' }
      setUser(newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}