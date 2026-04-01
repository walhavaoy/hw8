# Tech Stack

## Runtime

| Component | Version | Purpose |
|-----------|---------|---------|
| Node.js | 20 LTS | JavaScript runtime |
| TypeScript | ~5.x | Type-safe development language |

## Framework & Libraries

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.x | HTTP server framework |
| @types/express | ^4.x | TypeScript type definitions for Express |
| pino | ^8.x | Structured JSON logging |
| @types/node | ^20.x | TypeScript type definitions for Node.js |

## Build Toolchain

| Tool | Purpose |
|------|---------|
| tsc | TypeScript compiler |
| npm | Package manager and script runner |

## Container

| Component | Image | Purpose |
|-----------|-------|---------|
| Build stage | node:20-alpine | Compile TypeScript to JavaScript |
| Runtime stage | node:20-alpine | Run production application |

## Project Structure

```
/
  src/
    index.ts          # Express server entry point
  package.json        # Dependencies and scripts
  tsconfig.json       # TypeScript configuration
  Dockerfile          # Multi-stage container build
  .dockerignore       # Docker build exclusions
```
