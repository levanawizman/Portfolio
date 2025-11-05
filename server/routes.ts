import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { chat } from './openrouter';
import { chatRequestSchema } from './schema';
import { levanaData } from './data';
import { buildSystemPrompt } from './prompts/system';

const app = new Hono();

app.use('/*', cors());

app.post('/api/chat', async (c) => {
  try {
    const body = await c.req.json();
    const { message, state } = chatRequestSchema.parse(body);

    const systemPrompt = buildSystemPrompt(levanaData, state);

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message },
    ];

    const result = await chat(messages);

    return c.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Chat error:', error);
    return c.json({ error: message }, 500);
  }
});

export default app;

