import { useEffect } from 'react';
import { useStore } from '../state/store';
import { initialProjects } from '../data/projects';
import { generateId } from '../lib/ids';

export function useInitializeProjects() {
  const cards = useStore((s) => s.cards);

  useEffect(() => {
    if (cards.length === 0) {
      const projectsWithIds = initialProjects.map((p) => ({
        ...p,
        id: generateId('project'),
      }));

      useStore.setState({ cards: projectsWithIds });
    }
  }, [cards.length]);
}

