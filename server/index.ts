import { serve } from '@hono/node-server';
import app from './routes';
import { env } from './env';

const port = env.PORT;

console.log(`🚀 Serveur démarré sur http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

