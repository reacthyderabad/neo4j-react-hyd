# Find Your Connections

A live Neo4j-powered networking experience for developer events. Attendees add their current stack and learning interests, then explore the room as an interactive community graph.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

The frontend uses demo data when the API or Neo4j credentials are unavailable.

## Neo4j setup

1. Create a Neo4j AuraDB instance.
2. Copy `.env.example` to `.env.local` and add the Aura credentials.
3. Run the statements in `scripts/setup-neo4j.cypher` once in Neo4j Browser.
4. Add the same environment variables to the Vercel project.

Required variables are `NEO4J_URI`, `NEO4J_USERNAME`, `NEO4J_PASSWORD`, and `ADMIN_PASSWORD`.

## Routes

- `/` — landing experience
- `/register` — categorized attendee registration
- `/graph` — live graph and parameter search
- `/challenge` — networking missions
- `/admin` — password-protected event controls

## Deployment

Deploy the repository to Vercel. `vercel.json` preserves client-side routes while leaving `/api/*` mapped to Vercel Functions.
