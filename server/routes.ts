import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { chat } from './openrouter';
import { chatRequestSchema } from './schema';
import { levanaData } from '../src/data/levana';

const app = new Hono();

app.use('/*', cors());

app.post('/api/chat', async (c) => {
  try {
    const body = await c.req.json();
    const { message, state } = chatRequestSchema.parse(body);

    const systemPrompt = `Tu es l'assistant du portfolio de Levana, une développeuse créative.

**Informations sur Levana :**
- Nom : ${levanaData.name}
- Titre : ${levanaData.title}
- Bio : ${levanaData.bio}
- Compétences : ${levanaData.skills.join(', ')}
- Centres d'intérêt : ${levanaData.interests.join(', ')}
- Photos disponibles : ${levanaData.photos.join(', ')}

**Règles strictes :**
- Réponds en français, ton chaleureux et concis.
- Tu peux ouvrir/mettre à jour/fermer des fenêtres via les tools.
- NE touche JAMAIS aux cartes projets (l'utilisateur les manipule lui-même).
- Pour des photos : \`open_window\` avec \`kind: 'gallery'\` et \`payload: {assets: [...]}\`.
- Pour du texte/markdown : \`kind: 'markdown'\` et \`payload: {content: '...'}\`.
- Fournis toujours \`answer_user\` pour répondre à l'utilisateur.

**État actuel :**
Fenêtres : ${JSON.stringify(state.windows)}
Projets : ${JSON.stringify(state.projects.map((p: any) => ({ title: p.title, tags: p.tags })))}`;

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message },
    ];

    const result = await chat(messages);

    return c.json(result);
  } catch (error: any) {
    console.error('Chat error:', error);
    return c.json({ error: error.message }, 500);
  }
});

export default app;

