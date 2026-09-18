export type Category = { id: string; name: string; technologies: string[] }

export const technologyCategories: Category[] = [
  { id: 'frontend', name: 'Frontend', technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native', 'Redux Toolkit', 'Tailwind CSS', 'Material UI', 'Vite'] },
  { id: 'backend', name: 'Backend', technologies: ['Node.js', 'Express.js', 'NestJS', 'Java', 'Spring Boot', 'Python', 'Django', 'FastAPI', 'Go', 'C#', '.NET', 'PHP', 'Laravel', 'Ruby on Rails', 'Rust', 'REST APIs'] },
  { id: 'data', name: 'Databases & data', technologies: ['Neo4j', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'SQLite', 'Oracle Database', 'Microsoft SQL Server', 'Apache Kafka', 'Apache Spark'] },
  { id: 'graph', name: 'Graph technologies', technologies: ['Cypher', 'APOC', 'Neo4j Graph Data Science', 'Graph Algorithms', 'Knowledge Graphs', 'GraphRAG', 'NetworkX', 'GraphQL', 'RDF', 'SPARQL', 'OWL', 'Linked Data', 'Gephi'] },
  { id: 'ai', name: 'AI & machine learning', technologies: ['Generative AI', 'Large Language Models', 'AI Agents', 'Retrieval-Augmented Generation', 'Natural Language Processing', 'Computer Vision', 'Machine Learning', 'Deep Learning', 'Data Science', 'MLOps', 'OpenAI API', 'Hugging Face', 'LangChain', 'LlamaIndex', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'MLflow', 'Vector Embeddings', 'Prompt Engineering'] },
  { id: 'cloud', name: 'Cloud & DevOps', technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'Linux', 'Nginx', 'Serverless', 'Vercel'] },
]

export const allTechnologies = technologyCategories.flatMap((category) => category.technologies)
export const industries = ['FinTech', 'Healthcare', 'E-commerce', 'Education', 'SaaS', 'Government', 'Consulting', 'Manufacturing', 'Media', 'Telecommunications', 'Other']
export const experienceBands = ['Student', '0–2 years', '3–5 years', '6–10 years', '10+ years']

export type Person = { id: string; name: string; email?: string; experience: string; industry: string; primary: string; uses: string[]; interests: string[] }

export const demoPeople: Person[] = [
  { id: 'p1', name: 'Aarav Mehta', experience: '10+ years', industry: 'FinTech', primary: 'React', uses: ['React', 'TypeScript', 'Node.js', 'AWS'], interests: ['GraphRAG', 'Neo4j Graph Data Science'] },
  { id: 'p2', name: 'Maya Rao', experience: '6–10 years', industry: 'Healthcare', primary: 'Python', uses: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'], interests: ['Neo4j', 'Knowledge Graphs'] },
  { id: 'p3', name: 'Kabir Shah', experience: '3–5 years', industry: 'SaaS', primary: 'Neo4j', uses: ['Neo4j', 'Cypher', 'Java', 'Spring Boot'], interests: ['GraphRAG', 'Generative AI'] },
  { id: 'p4', name: 'Diya Iyer', experience: '0–2 years', industry: 'Education', primary: 'React', uses: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'], interests: ['TypeScript', 'Neo4j'] },
  { id: 'p5', name: 'Vihaan Reddy', experience: '10+ years', industry: 'Consulting', primary: 'Java', uses: ['Java', 'Spring Boot', 'Neo4j', 'Kubernetes'], interests: ['AI Agents', 'Graph Algorithms'] },
  { id: 'p6', name: 'Anaya Singh', experience: '3–5 years', industry: 'E-commerce', primary: 'Node.js', uses: ['Node.js', 'TypeScript', 'React', 'MongoDB'], interests: ['Cypher', 'Knowledge Graphs'] },
  { id: 'p7', name: 'Arjun Nair', experience: '6–10 years', industry: 'Media', primary: 'Python', uses: ['Python', 'PyTorch', 'Pandas', 'AWS'], interests: ['GraphRAG', 'Neo4j'] },
  { id: 'p8', name: 'Saanvi Gupta', experience: '3–5 years', industry: 'FinTech', primary: 'React', uses: ['React', 'Next.js', 'TypeScript', 'PostgreSQL'], interests: ['Generative AI', 'LangChain'] },
]
