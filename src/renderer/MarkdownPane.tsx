import ReactMarkdown from 'react-markdown';

interface MarkdownPaneProps {
  payload: Record<string, any>;
}

export function MarkdownPane({ payload }: MarkdownPaneProps) {
  const content = payload.content || '';

  return (
    <div className="prose prose-invert prose-sm max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

