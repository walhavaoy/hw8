# Component Taxonomy and Priority Matrix

## Components

| ID | Component | Priority | Phase | Dependencies | Status |
|----|-----------|----------|-------|--------------|--------|
| C-01 | Project scaffolding (package.json, tsconfig.json) | P0 | Phase 1 | None | Pending |
| C-02 | Express server entry point (src/index.ts) | P0 | Phase 2 | C-01 | Pending |
| C-03 | GET / route (Hello World HTML page) | P0 | Phase 2 | C-02 | Pending |
| C-04 | GET /health route (health check) | P0 | Phase 2 | C-02 | Pending |
| C-05 | Dockerfile (multi-stage build) | P1 | Phase 3 | C-01, C-02 | Pending |
| C-06 | .dockerignore | P1 | Phase 3 | None | Pending |

## Phase Summary

### Phase 1 — Project Scaffolding (P0)
- Initialize package.json with TypeScript and Express dependencies
- Configure tsconfig.json
- Set up build and start scripts
- **Milestone**: Project compiles and runs empty Express server on port 8080

### Phase 2 — Core Application (P0)
- Create Express server entry point in TypeScript
- Implement GET / route with styled Hello World HTML
- Implement GET /health endpoint returning `{ "status": "ok" }`
- Configure port 8080 listener
- **Milestone**: GET / returns styled page; GET /health returns 200

### Phase 3 — Containerization (P1)
- Write multi-stage Dockerfile
- Add .dockerignore
- Test container build
- **Milestone**: Docker container starts and serves Hello World on port 8080

## Requirement Coverage

| Requirement | Component(s) |
|-------------|-------------|
| REQ-01-01 | C-03 |
| REQ-01-02 | C-04 |
| REQ-02-01 | C-02 |
| REQ-02-02 | C-03 |
| REQ-02-03 | C-05 |
| REQ-02-04 | C-01, C-02 |
| REQ-02-05 | C-01 |
| REQ-02-06 | C-05 |
