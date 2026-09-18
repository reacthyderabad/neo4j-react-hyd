import { timingSafeEqual } from 'node:crypto'
import type { ApiRequest, ApiResponse } from '../_lib/neo4j.js'
export default function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const supplied = String((req.body as { password?: string })?.password ?? ''), expected = process.env.ADMIN_PASSWORD ?? ''
  const valid = supplied.length === expected.length && expected.length > 0 && timingSafeEqual(Buffer.from(supplied), Buffer.from(expected))
  return valid ? res.status(200).json({ ok: true }) : res.status(401).json({ error: 'Incorrect password' })
}
