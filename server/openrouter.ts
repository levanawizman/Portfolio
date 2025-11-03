import { env } from './env';

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'anthropic/claude-3.5-haiku';

export const tools = [
  {
    type: 'function',
    function: {
      name: 'open_window',
      description: 'Ouvre une nouvelle fenetre avec du contenu (markdown, galerie, HTML)',
      parameters: {
        type: 'object',
        properties: {
          title: { type: 'string', description: 'Titre de la fenetre' },
          x: { type: 'number', description: 'Position X (pixels)' },
          y: { type: 'number', description: 'Position Y (pixels)' },
          w: { type: 'number', description: 'Largeur (pixels)' },
          h: { type: 'number', description: 'Hauteur (pixels)' },
          kind: { type: 'string', enum: ['markdown', 'gallery', 'html'] },
          payload: { type: 'object', description: 'Donnees selon le kind' },
        },
        required: ['title', 'x', 'y', 'w', 'h', 'kind', 'payload'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'update_window',
      description: 'Met a jour une fenetre existante',
      parameters: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          x: { type: 'number' },
          y: { type: 'number' },
          w: { type: 'number' },
          h: { type: 'number' },
          payload: { type: 'object' },
        },
        required: ['id'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'close_window',
      description: 'Ferme une fenetre',
      parameters: {
        type: 'object',
        properties: { id: { type: 'string' } },
        required: ['id'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'answer_user',
      description: 'Repond a utilisateur avec du texte',
      parameters: {
        type: 'object',
        properties: { text: { type: 'string' } },
        required: ['text'],
      },
    },
  },
];

export async function chat(messages: Array<{role: string; content: string}>) {
  const response = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': env.SITE_URL,
      'X-Title': env.SITE_NAME,
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      tools,
      tool_choice: 'auto',
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenRouter error: ${response.statusText}`);
  }

  return response.json();
}

