import { type ReactNode } from 'react';

interface WindowContentProps {
  children: ReactNode;
}

export function WindowContent({ children }: WindowContentProps) {
  return (
    <div className="p-4 overflow-auto max-h-[calc(100%-4rem)]">
      {children}
    </div>
  );
}

