interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ConversationProps {
  messages: Message[];
}

export function Conversation({ messages }: ConversationProps) {
  if (messages.length === 0) return null;

  return (
    <div className="mb-3 space-y-2 max-h-32 overflow-y-auto">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`
            px-3 py-2 rounded-lg text-sm
            ${
              msg.role === 'user'
                ? 'bg-violet-500/20 text-violet-200 ml-8'
                : 'bg-slate-700/50 text-slate-200 mr-8'
            }
          `}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
}

