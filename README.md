# Halp!

Rudimentary Stack Overflow clone

## How to run

Within the root directory...

1. Install dependencies for frontend, run `cd packages/frontend && npm install`
1. Install dependencies for backend, run `cd packages/backend && npm install`
2. Start services, run `docker-compose up --remove-orphans`
3. Create db, run `docker-compose run backend yarn workspace backend db:create`
