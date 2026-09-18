import { getDriver, type ApiRequest, type ApiResponse } from './_lib/neo4j.js'
export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  const session = getDriver().session({ defaultAccessMode: 'READ' })
  try {
    const result = await session.executeRead(tx => tx.run(`MATCH (p:Person) OPTIONAL MATCH (p)-[:USES]->(used:Technology) OPTIONAL MATCH (p)-[:INTERESTED_IN]->(interest:Technology) OPTIONAL MATCH (p)-[:WORKS_IN]->(industry:Industry) RETURN p.id AS id, p.name AS name, p.experience AS experience, p.primaryTechnology AS primary, p.registeredAt AS registeredAt, industry.name AS industry, collect(DISTINCT used.name) AS uses, collect(DISTINCT interest.name) AS interests ORDER BY registeredAt DESC LIMIT 250`))
    res.setHeader('Cache-Control', 's-maxage=3, stale-while-revalidate=5')
    return res.status(200).json({ people: result.records.map(record => record.toObject()) })
  } catch (error) { console.error('Graph fetch failed', error); return res.status(500).json({ error: 'Could not load graph' }) } finally { await session.close() }
}
