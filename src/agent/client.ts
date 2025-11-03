import { serializeState } from './serialize';
import type { WindowState, ProjectCard } from '../state/store';

const API_BASE = (import.meta as any)?.env?.VITE_API_URL || '/api';

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

  const res = await fetch(`${API_BASE}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, state }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Erreur serveur (${res.status}): ${text}`);
  }

  return res.json();
}

