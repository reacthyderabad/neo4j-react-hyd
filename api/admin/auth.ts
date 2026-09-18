import type { ApiRequest, ApiResponse } from '../_lib/neo4j.js'

function safeEqual(left: string, right: string) {
  if (left.length !== right.length || right.length === 0) return false
  let difference = 0
  for (let index = 0; index < left.length; index += 1) difference |= left.charCodeAt(index) ^ right.charCodeAt(index)
  return difference === 0
}

export default function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const supplied = String((req.body as { password?: string })?.password ?? ''), expected = process.env.ADMIN_PASSWORD ?? ''
  const valid = safeEqual(supplied, expected)
  return valid ? res.status(200).json({ ok: true }) : res.status(401).json({ error: 'Incorrect password' })
}
