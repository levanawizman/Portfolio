import { AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';
import { useStore } from '../../state/store';
import { useSortedWindows } from '../../state/selectors';
import { DraggableWindow } from './DraggableWindow';
import { MarkdownPane } from '../../renderer/MarkdownPane';
import { GalleryPane } from '../../renderer/GalleryPane';
import { HtmlSandbox } from '../../renderer/HtmlSandbox';

export function WindowManager() {
  const windows = useSortedWindows();
  const { updateWindow, closeWindow, bringToFront } = useStore();
  const sorted = useMemo(
    () => [...windows].sort((a, b) => a.zIndex - b.zIndex),
    [windows]
  );

  return (
    <AnimatePresence>
      {sorted.map((win) => (
        <DraggableWindow
          key={win.id}
          window={win}
          onClose={() => closeWindow(win.id)}
          onDrag={(x, y) => updateWindow(win.id, { x, y })}
          onFocus={() => bringToFront(win.id)}
        >
          {win.kind === 'markdown' && <MarkdownPane payload={win.payload} />}
          {win.kind === 'gallery' && <GalleryPane payload={win.payload} />}
          {win.kind === 'html' && <HtmlSandbox payload={win.payload} />}
        </DraggableWindow>
      ))}
    </AnimatePresence>
  );
}

