interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className = '' }: IconProps) {
  const icons: Record<string, string> = {
    close: '✕',
    send: '→',
    drag: '⋮⋮',
    minimize: '−',
  };

  return (
    <span className={`inline-block ${className}`}>
      {icons[name] || '?'}
    </span>
  );
}

