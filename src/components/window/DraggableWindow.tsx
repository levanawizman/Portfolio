import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Surface } from '../ui/Surface';
import { WindowHeader } from './WindowHeader';
import { WindowContent } from './WindowContent';
import type { WindowState } from '../../state/store';

interface DraggableWindowProps {
  window: WindowState;
  onClose: () => void;
  onDrag: (x: number, y: number) => void;
  onFocus: () => void;
  children: React.ReactNode;
}

export function DraggableWindow({
  window,
  onClose,
  onDrag,
  onFocus,
  children,
}: DraggableWindowProps) {
  const dragRef = useRef({ startX: 0, startY: 0 });

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      onDragStart={(_, info) => {
        dragRef.current = { startX: window.x, startY: window.y };
        onFocus();
      }}
      onDrag={(_, info) => {
        onDrag(
          dragRef.current.startX + info.offset.x,
          dragRef.current.startY + info.offset.y
        );
      }}
      style={{
        position: 'absolute',
        left: window.x,
        top: window.y,
        width: window.w,
        height: window.h,
        zIndex: window.zIndex,
      }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseDown={onFocus}
    >
      <Surface className="h-full flex flex-col">
        <WindowHeader title={window.title} onClose={onClose} />
        <WindowContent>{children}</WindowContent>
      </Surface>
    </motion.div>
  );
}

