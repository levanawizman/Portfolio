import { useStore } from '../../state/store';
import { useCards } from '../../state/selectors';
import { ProjectCard } from './ProjectCard';

export function ProjectBoard() {
  const cards = useCards();
  const { updateCard } = useStore();

  return (
    <>
      {cards.map((card) => (
        <ProjectCard
          key={card.id}
          card={card}
          onDrag={(x, y) => updateCard(card.id, { x, y })}
        />
      ))}
    </>
  );
}

