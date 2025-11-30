# Smart Leftover Logistics — Starter Fullstack Scaffold

This archive is a starter scaffold (MVP) for the Smart Leftover Logistics project.
It includes:
- `apps/services/api` — Node.js + TypeScript + Express (minimal)
- `services/worker` — BullMQ worker stub (minimal)
- `apps/web-frontend` — React + Vite minimal app
- `prisma/schema.prisma` — Prisma schema for Postgres
- `infra/docker-compose.yml` — Docker compose for local dev (Postgres + Redis + api + worker)

How to use (local dev, minimal):
1. Install dependencies manually in each folder (see their package.json).
2. Populate `.env` files (DATABASE_URL, REDIS_URL).
3. Start Postgres and Redis (docker-compose up -d).
4. Run the api and frontend in dev mode.

This scaffold is intentionally minimal to keep the zip small, but structured so you can expand it.
