import { serializeState } from './serialize';
import type { WindowState, ProjectCard } from '../state/store';

const API_URL = 'http://localhost:3001';

export interface ToolCall {
  id: string;
  type: 'function';
  function: {
    name: string;
    arguments: string;
  };
}

export interface ChatResponse {
  choices: Array<{
    message: {
      content?: string;
      tool_calls?: ToolCall[];
    };
  }>;
}

export async function sendMessage(
  message: string,
  windows: WindowState[],
  cards: ProjectCard[]
): Promise<ChatResponse> {
  const state = serializeState(windows, cards);

  const response = await fetch(`${API_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, state }),
  });

  if (!response.ok) {
    throw new Error('Erreur serveur');
  }

  return response.json();
}

