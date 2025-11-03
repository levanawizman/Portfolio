import type { WindowState, ProjectCard } from '../state/store';

export function serializeState(windows: WindowState[], cards: ProjectCard[]) {
  return {
    windows: windows.map((w) => ({
      id: w.id,
      title: w.title,
      x: w.x,
      y: w.y,
      w: w.w,
      h: w.h,
      kind: w.kind,
    })),
    projects: cards.map((c) => ({
      id: c.id,
      title: c.title,
      tags: c.tags,
    })),
  };
}

