import express, { Request, Response } from 'express';
import pino from 'pino';

const logger = pino({ name: 'hw8' });

const app = express();
app.set('trust proxy', true);
const PORT = 8080;

app.get('/', (_req: Request, res: Response) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
  <style>
    :root {
      --color-text: #1a1a2e;
      --color-bg: #f5f5f5;
      --font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: var(--font-stack);
      color: var(--color-text);
      background-color: var(--color-bg);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    main { text-align: center; }
    h1 { font-size: 3rem; font-weight: 600; }
  </style>
</head>
<body>
  <main>
    <h1>Hello World</h1>
  </main>
</body>
</html>`);
});

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  logger.info({ port: PORT }, 'Server started');
});
