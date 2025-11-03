import { type ReactNode } from 'react';

interface SurfaceProps {
  children: ReactNode;
  className?: string;
}

export function Surface({ children, className = '' }: SurfaceProps) {
  return (
    <div
      className={`
        bg-slate-900/80 backdrop-blur-xl
        border border-white/10 rounded-2xl
        shadow-2xl shadow-black/40
        ${className}
      `}
    >
      {children}
    </div>
  );
}

