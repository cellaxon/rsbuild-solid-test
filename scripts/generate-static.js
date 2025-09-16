import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const routes = [
  '/',
  '/login',
  '/dashboard',
  '/dashboard/traffic',
  '/dashboard/clients',
  '/dashboard/usage',
  '/dashboard/performance',
  '/dashboard/rate-limiting',
  '/dashboard/security',
  '/dashboard/errors',
  '/dashboard/billing',
  '/dashboard/settings'
]

const distPath = path.join(__dirname, '..', 'dist-ssg')
const indexHtmlPath = path.join(distPath, 'index.html')

// Check if index.html exists
if (!fs.existsSync(indexHtmlPath)) {
  console.error('Build the project first with: npm run build:ssg')
  process.exit(1)
}

const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8')

// Generate index.html for each route
routes.forEach(route => {
  if (route === '/') return // Skip root, already has index.html

  const routePath = path.join(distPath, route)

  // Create directory if it doesn't exist
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true })
  }

  // Write index.html
  fs.writeFileSync(path.join(routePath, 'index.html'), indexHtmlContent)
  console.log(`Generated: ${route}/index.html`)
})

console.log('Static site generation complete!')