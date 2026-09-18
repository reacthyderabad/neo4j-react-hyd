import neo4j, { type Driver } from 'neo4j-driver'
let driver: Driver | undefined
export function getDriver() {
  const { NEO4J_URI: uri, NEO4J_USERNAME: username, NEO4J_PASSWORD: password } = process.env
  if (!uri || !username || !password) throw new Error('Neo4j environment variables are not configured')
  driver ??= neo4j.driver(uri, neo4j.auth.basic(username, password), { maxConnectionPoolSize: 20, connectionAcquisitionTimeout: 5000 })
  return driver
}
export const allowedExperience = new Set(['Student', '0–2 years', '3–5 years', '6–10 years', '10+ years'])
export const allowedIndustries = new Set(['FinTech', 'Healthcare', 'E-commerce', 'Education', 'SaaS', 'Government', 'Consulting', 'Manufacturing', 'Media', 'Telecommunications', 'Other'])
export type ApiRequest = { method?: string; body?: unknown; headers: Record<string, string | string[] | undefined> }
export type ApiResponse = { status: (code: number) => ApiResponse; json: (body: unknown) => void; setHeader: (name: string, value: string) => void }
