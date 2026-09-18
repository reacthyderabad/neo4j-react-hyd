import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

function localApi(): Plugin {
  return {
    name: 'local-vercel-api',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use(async (request, nodeResponse, next) => {
        const path = request.url?.split('?')[0]
        const modules: Record<string, string> = { '/api/graph': '/api/graph.ts', '/api/register': '/api/register.ts', '/api/admin/auth': '/api/admin/auth.ts' }
        const modulePath = path ? modules[path] : undefined
        if (!modulePath) return next()
        try {
          const chunks: Buffer[] = []
          for await (const chunk of request) chunks.push(Buffer.from(chunk))
          const rawBody = Buffer.concat(chunks).toString('utf8')
          const apiRequest = Object.assign(request, { body: rawBody ? JSON.parse(rawBody) : undefined })
          const apiResponse = {
            status(code: number) { nodeResponse.statusCode = code; return apiResponse },
            setHeader(name: string, value: string) { nodeResponse.setHeader(name, value) },
            json(body: unknown) { nodeResponse.setHeader('Content-Type', 'application/json'); nodeResponse.end(JSON.stringify(body)) },
          }
          const route = await server.ssrLoadModule(modulePath)
          await route.default(apiRequest, apiResponse)
        } catch (error) {
          server.config.logger.error(error instanceof Error ? error.stack ?? error.message : String(error))
          if (!nodeResponse.headersSent) nodeResponse.statusCode = 500
          nodeResponse.end(JSON.stringify({ error: 'Local API failed' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
  return { plugins: [react(), localApi()] }
})
