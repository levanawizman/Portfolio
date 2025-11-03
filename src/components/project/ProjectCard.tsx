import { motion } from 'framer-motion';
import { Surface } from '../ui/Surface';
import type { ProjectCard as ProjectCardType } from '../../state/store';

interface ProjectCardProps {
  card: ProjectCardType;
  onDrag: (x: number, y: number) => void;
}

export function ProjectCard({ card, onDrag }: ProjectCardProps) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      onDrag={(_, info) => {
        onDrag(card.x + info.offset.x, card.y + info.offset.y);
      }}
      style={{
        position: 'absolute',
        left: card.x,
        top: card.y,
        width: 280,
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Surface className="p-4 cursor-move">
        {card.image && (
          <div className="aspect-video rounded-lg overflow-hidden mb-3 bg-slate-800">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h3 className="font-bold text-slate-100 mb-2">{card.title}</h3>
        <p className="text-sm text-slate-400 mb-3">{card.description}</p>
        <div className="flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-lg bg-violet-500/20 text-violet-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </Surface>
    </motion.div>
  );
}

