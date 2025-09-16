# Solid.js + Rsbuild Migration

This project has been successfully migrated from React (tanstack-start-test) to Solid.js with Rsbuild.

## Features

- ✅ Solid.js framework instead of React
- ✅ Rsbuild bundler with static site generation
- ✅ @solidjs/router for client-side routing
- ✅ Tailwind CSS for styling
- ✅ Authentication system with protected routes
- ✅ Dashboard with multiple pages
- ✅ Static HTML generation for each route

## Project Structure

```
src/
├── components/
│   ├── ui/           # UI components (Button, Card, Input, etc.)
│   ├── layout/       # Layout components (DashboardLayout)
│   └── charts/       # Chart components (Bar, Line, Pie)
├── contexts/
│   └── auth-context.tsx  # Authentication context
├── routes/
│   ├── index.tsx         # Home page
│   ├── login.tsx         # Login page
│   └── dashboard/        # Dashboard pages
│       ├── index.tsx     # Dashboard overview
│       ├── traffic.tsx
│       ├── clients.tsx
│       ├── usage.tsx
│       ├── performance.tsx
│       ├── rate-limiting.tsx
│       ├── security.tsx
│       ├── errors.tsx
│       ├── billing.tsx
│       └── settings.tsx
└── App.tsx              # Main app with routing

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:ssg` - Build with static HTML generation for each route
- `npm run preview:ssg` - Preview the static site

## Static Site Generation

The project generates static HTML files for each route:

```
dist-ssg/
├── index.html
├── login/
│   └── index.html
├── dashboard/
│   ├── index.html
│   ├── traffic/index.html
│   ├── clients/index.html
│   ├── usage/index.html
│   ├── performance/index.html
│   ├── rate-limiting/index.html
│   ├── security/index.html
│   ├── errors/index.html
│   ├── billing/index.html
│   └── settings/index.html
└── static/
    ├── js/
    └── css/
```

## Authentication

- Default credentials: username: "abcd", password: "1234"
- Protected routes automatically redirect to login when not authenticated

## Key Differences from React Version

1. **Components**: Use Solid.js signals (`createSignal`) instead of React hooks (`useState`)
2. **Effects**: Use `onMount` and `createEffect` instead of `useEffect`
3. **Props**: Use `splitProps` for prop handling in components
4. **Routing**: Use `@solidjs/router` instead of `@tanstack/react-router`
5. **Conditional Rendering**: Use `Show` component or conditional expressions
6. **Lists**: Use `For` component instead of `.map()`

## Building and Deployment

For production deployment with static HTML files:

```bash
npm run build:ssg
```

This will create optimized static files in the `dist-ssg` directory with separate HTML files for each route, perfect for hosting on static file servers.