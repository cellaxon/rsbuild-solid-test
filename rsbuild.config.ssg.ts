import { defineConfig } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginSolid } from '@rsbuild/plugin-solid'
import fs from 'fs'
import path from 'path'

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

export default defineConfig({
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginSolid(),
  ],
  html: {
    template: './public/index.html',
  },
  output: {
    distPath: {
      root: 'dist-ssg',
    },
  },
  tools: {
    rspack: {
      plugins: [
        {
          name: 'static-site-generator',
          apply(compiler) {
            compiler.hooks.emit.tapAsync('StaticSiteGenerator', (compilation, callback) => {
              const htmlAsset = compilation.assets['index.html']
              if (!htmlAsset) {
                callback()
                return
              }

              const htmlContent = htmlAsset.source()

              routes.forEach(route => {
                const routePath = route === '/' ? '/index' : route
                const dirPath = path.join('dist-ssg', routePath)
                const filePath = path.join(dirPath, 'index.html')

                // Create directory structure
                const dir = path.dirname(filePath)
                if (!fs.existsSync(dir)) {
                  fs.mkdirSync(dir, { recursive: true })
                }

                // Write HTML file for each route
                compilation.assets[`${routePath}/index.html`] = {
                  source: () => htmlContent,
                  size: () => htmlContent.length
                }
              })

              callback()
            })
          }
        }
      ]
    }
  }
})