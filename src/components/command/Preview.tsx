import { Icon } from '../ui/Icon';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface PreviewProps {
  messages: Message[];
  expanded: boolean;
  onToggle: () => void;
}

export function Preview({ messages, expanded, onToggle }: PreviewProps) {
  const lastAssistant = [...messages].reverse().find((m) => m.role === 'assistant');
  const full = lastAssistant?.content || '';
  const preview = full.length > 160 ? full.slice(-160) : full;

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-slate-400">Aperçu</span>
        <button
          onClick={onToggle}
          className="text-slate-400 hover:text-slate-200 transition-colors"
          aria-label={expanded ? 'Masquer' : 'Afficher'}
        >
          <Icon name={expanded ? 'eye-off' : 'eye'} />
        </button>
      </div>
      {!expanded ? (
        <div className="text-xs text-slate-300/90 max-h-10 overflow-hidden relative">
          <div className="line-clamp-2 pr-6">{preview || '👋 Bonjour ! Comment puis-je vous aider ?'}</div>
        </div>
      ) : (
        <div className="text-xs text-slate-300/90 max-h-24 overflow-auto rounded-lg bg-slate-800/40 border border-white/10 p-2">
          {full || '👋 Bonjour ! Comment puis-je vous aider ?'}
        </div>
      )}
    </div>
  );
}
