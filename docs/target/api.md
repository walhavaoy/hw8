# API Contracts

## Endpoints

### GET /

Serves the Hello World HTML page.

**Response**

- Status: `200 OK`
- Content-Type: `text/html`
- Body: HTML document with:
  - A Hello World heading (`<h1>`)
  - Clean, minimal CSS styling
  - Valid HTML5 structure

### GET /health

Health check endpoint for container orchestration probes.

**Response**

- Status: `200 OK`
- Content-Type: `application/json`
- Body:

```json
{
  "status": "ok"
}
```

## Error Handling

- Unmatched routes return Express default 404 response
- No custom error middleware required for this minimal application
