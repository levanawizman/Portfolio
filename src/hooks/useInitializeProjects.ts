import { useEffect } from 'react';
import { useStore } from '../state/store';
import { initialProjects } from '../data/projects';
import { generateId } from '../lib/ids';

export function useInitializeProjects() {
  const cards = useStore((s) => s.cards);

  useEffect(() => {
    if (cards.length === 0) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cardWidth = 280;

      const leftX1 = 30;
      const leftX2 = 60;
      const rightX2 = w - cardWidth - 30;
      const rightX1 = w - cardWidth - 60;

      const baseY1 = h - 220;
      const baseY2 = baseY1 + 36;

      const positioned = initialProjects.map((p, idx) => {
        let x = p.x;
        let y = p.y;
        if (idx === 0) { x = leftX1; y = baseY1; }
        if (idx === 1) { x = leftX2; y = baseY2; }
        if (idx === 2) { x = rightX1; y = baseY1; }
        if (idx === 3) { x = rightX2; y = baseY2; }
        return { ...p, x, y };
      });

      const projectsWithIds = positioned.map((p) => ({
        ...p,
        id: generateId('project'),
      }));

      useStore.setState({ cards: projectsWithIds });
    }
  }, [cards.length]);
}

