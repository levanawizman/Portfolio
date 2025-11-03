import { useStore } from './store';

export const useWindows = () => useStore((s) => s.windows);
export const useCards = () => useStore((s) => s.cards);

export const useWindowById = (id: string) =>
  useStore((s) => s.windows.find((w) => w.id === id));

export const useCardById = (id: string) =>
  useStore((s) => s.cards.find((c) => c.id === id));

export const useSortedWindows = () =>
  useStore((s) => s.windows);

