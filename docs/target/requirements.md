# Requirements

## Functional Requirements

| ID | Priority | Description |
|----|----------|-------------|
| REQ-01-01 | must | GET / returns an HTML page with a Hello World heading |
| REQ-01-02 | must | GET /health returns a health check response (JSON `{ "status": "ok" }` with HTTP 200) |

## Non-Functional Requirements

| ID | Priority | Description |
|----|----------|-------------|
| REQ-02-01 | must | App listens on port 8080 |
| REQ-02-02 | must | Clean, minimal UI design using vanilla HTML/CSS/JS |
| REQ-02-03 | must | Dockerfile included for containerized deployment |
| REQ-02-04 | must | TypeScript backend with Express framework |
| REQ-02-05 | must | App runs standalone without external dependencies |
| REQ-02-06 | should | App will run behind ingress/reverse proxy (TLS termination handled externally) |

## Assumptions

- No database or persistent storage is needed
- No authentication or authorization is required (public access)
- The /health endpoint returns `{ "status": "ok" }` with HTTP 200
- The app will be deployed behind an ingress/reverse proxy that handles TLS termination
- No CI/CD pipeline setup is in scope — only the application and Dockerfile
- Node.js 20 LTS will be used as the base image

## Risks

- Minimal risk given the simplicity of the application
- Port 8080 conflicts if other services are running on the same port in the target environment
