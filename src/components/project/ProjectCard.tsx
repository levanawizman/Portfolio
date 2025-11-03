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
      whileHover={{
        scale: 1.05,
        rotateZ: -2,
        y: -8,
        boxShadow: '0 20px 60px rgba(124, 58, 237, 0.3)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className="cursor-move group"
    >
      <Surface className="p-4 cursor-pointer transition-all h-full hover:border-violet-500/50">
        {card.image && (
          <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-slate-700 to-slate-900 relative group/img">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover opacity-90 group-hover/img:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
          </div>
        )}
        <h3 className="font-bold text-slate-100 mb-2 text-base group-hover:text-violet-300 transition-colors">
          {card.title}
        </h3>
        <p className="text-xs text-slate-400 mb-3 line-clamp-2 group-hover:text-slate-300 transition-colors">
          {card.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-lg bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-violet-300 border border-violet-500/30 group-hover:border-violet-400/60 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </Surface>
    </motion.div>
  );
}

