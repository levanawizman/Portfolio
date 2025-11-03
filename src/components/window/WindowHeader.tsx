import { Icon } from '../ui/Icon';

interface WindowHeaderProps {
  title: string;
  onClose: () => void;
}

export function WindowHeader({ title, onClose }: WindowHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
      <div className="flex items-center gap-2">
        <Icon name="drag" className="text-slate-500 cursor-move" />
        <h3 className="font-semibold text-slate-200">{title}</h3>
      </div>
      <button
        onClick={onClose}
        className="
          w-8 h-8 flex items-center justify-center
          hover:bg-red-500/20 rounded-lg
          text-slate-400 hover:text-red-400
          transition-colors
        "
      >
        <Icon name="close" />
      </button>
    </div>
  );
}

