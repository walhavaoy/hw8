# Hello World Web Application

## Overview

Minimal Hello World web application using Node.js/Express with TypeScript. Serves a styled HTML page on GET / and a health check endpoint on GET /health. Runs on port 8080 and is containerized with Docker.

## Tech Stack

- **Runtime**: Node.js 20 LTS
- **Language**: TypeScript ~5.x
- **Framework**: Express ^4.x
- **Logging**: pino ^8.x (never use console.log)
- **Container**: Multi-stage Docker build with node:20-alpine

## Directory Structure

```
/
  src/
    index.ts          # Express server entry point with routes
  docs/
    target/           # Target specifications and requirements
    implemented/      # Implementation coverage tracking
  package.json        # Dependencies and scripts
  tsconfig.json       # TypeScript configuration
  Dockerfile          # Multi-stage container build
  .dockerignore       # Docker build exclusions
```

## Build / Run / Test

```bash
npm install           # Install dependencies
npm run build         # Compile TypeScript (tsc)
npm start             # Run compiled app (node dist/index.js)
npm run dev           # Run in development mode (ts-node)
```

## Code Conventions

- Use TypeScript strictly — no `any`, define interfaces for data shapes
- Use `pino` for structured logging (never console.log)
- Handle errors explicitly — log with `logger.error({ err }, message)`
- Prefix unused function parameters with underscore (e.g., `_req`, `_res`)
- Keep the application minimal — no speculative abstractions
- Validate external input at system boundaries
- Use CSS custom properties for colors in any frontend code

## Key Design Decisions

- Single-file server (`src/index.ts`) — complexity doesn't warrant splitting
- Inline HTML/CSS in route handler — no template engine needed for one page
- No database or external dependencies — fully standalone
- Health endpoint returns `{ "status": "ok" }` for K8s probe compatibility
- Port 8080 (non-privileged) for container compatibility
- Multi-stage Dockerfile to minimize image size

## Requirements Reference

See `docs/target/requirements.md` for the full requirements matrix (REQ-01-01 through REQ-02-06).
