import { useState } from 'react';
import { Surface } from '../ui/Surface';
import { Icon } from '../ui/Icon';
import { Conversation } from './Conversation';
import { sendMessage } from '../../agent/client';
import { useStore } from '../../state/store';
import { useWindows, useCards } from '../../state/selectors';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function CommandBar() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '👋 Bonjour ! Comment puis-je vous aider ?',
    },
  ]);
  const [loading, setLoading] = useState(false);

  const windows = useWindows();
  const cards = useCards();
  const { addWindow, updateWindow, closeWindow } = useStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const response = await sendMessage(userMsg, windows, cards);
      const choice = response.choices[0];

      if (choice.message.tool_calls) {
        for (const call of choice.message.tool_calls) {
          const args = JSON.parse(call.function.arguments);
          executeTool(call.function.name, args);
        }
      }

      if (choice.message.content) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: choice.message.content || '' },
        ]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Erreur de connexion.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const executeTool = (name: string, args: any) => {
    if (name === 'open_window') {
      addWindow(args);
    } else if (name === 'update_window') {
      updateWindow(args.id, args);
    } else if (name === 'close_window') {
      closeWindow(args.id);
    } else if (name === 'answer_user') {
      setMessages((prev) => [...prev, { role: 'assistant', content: args.text }]);
    }
  };

  return (
    <Surface className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[600px] p-4">
      <Conversation messages={messages} />
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Demandez-moi quelque chose..."
          disabled={loading}
          className="
            flex-1 px-4 py-3 rounded-xl
            bg-slate-800 border border-white/10
            text-slate-200 placeholder:text-slate-500
            focus:outline-none focus:ring-2 focus:ring-violet-500
          "
        />
        <button
          type="submit"
          disabled={loading}
          className="
            px-6 py-3 rounded-xl
            bg-violet-600 hover:bg-violet-500
            text-white font-medium
            disabled:opacity-50
            transition-colors
          "
        >
          <Icon name="send" />
        </button>
      </form>
    </Surface>
  );
}

