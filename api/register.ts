import { randomUUID } from 'node:crypto'
import { allowedExperience, allowedIndustries, getDriver, type ApiRequest, type ApiResponse } from './_lib/neo4j.js'
type Registration = { name?: string; email?: string; experience?: string; industry?: string; primary?: string; uses?: string[]; interests?: string[] }
export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const data = req.body as Registration, name = data.name?.trim(), email = data.email?.trim().toLowerCase(), uses = [...new Set(data.uses ?? [])], interests = [...new Set(data.interests ?? [])]
  if (!name || name.length > 80 || !email || !/^\S+@\S+\.\S+$/.test(email) || !data.experience || !allowedExperience.has(data.experience) || !data.industry || !allowedIndustries.has(data.industry) || !data.primary || !uses.includes(data.primary) || uses.length < 1 || uses.length > 5 || interests.length < 1 || interests.length > 5) return res.status(400).json({ error: 'Invalid registration details' })
  const session = getDriver().session()
  try {
    const result = await session.executeWrite(tx => tx.run(`MERGE (p:Person {email: $email}) ON CREATE SET p.id = $id, p.registeredAt = datetime() SET p.name = $name, p.experience = $experience, p.primaryTechnology = $primary, p.updatedAt = datetime() WITH p OPTIONAL MATCH (p)-[old:USES|INTERESTED_IN|WORKS_IN]->() DELETE old WITH DISTINCT p MERGE (industry:Industry {name: $industry}) MERGE (p)-[:WORKS_IN]->(industry) WITH p UNWIND $uses AS techName MERGE (tech:Technology {name: techName}) MERGE (p)-[:USES {primary: techName = $primary}]->(tech) WITH DISTINCT p UNWIND $interests AS interestName MERGE (interest:Technology {name: interestName}) MERGE (p)-[:INTERESTED_IN]->(interest) RETURN p.id AS id, p.name AS name`, { id: randomUUID(), name, email, experience: data.experience, industry: data.industry, primary: data.primary, uses, interests }))
    return res.status(200).json(result.records[0]?.toObject())
  } catch (error) { console.error('Registration failed', error); return res.status(500).json({ error: 'Could not save registration' }) } finally { await session.close() }
}
