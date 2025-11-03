import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type WindowKind = 'markdown' | 'gallery' | 'html';

export interface WindowState {
  id: string;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  kind: WindowKind;
  payload: Record<string, any>;
  zIndex: number;
}

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  x: number;
  y: number;
  image?: string;
}

interface PortfolioState {
  windows: WindowState[];
  cards: ProjectCard[];
  maxZ: number;
  
  addWindow: (win: Omit<WindowState, 'id' | 'zIndex'>) => string;
  updateWindow: (id: string, updates: Partial<WindowState>) => void;
  closeWindow: (id: string) => void;
  bringToFront: (id: string) => void;
  
  updateCard: (id: string, updates: Partial<ProjectCard>) => void;
}

export const useStore = create<PortfolioState>()(
  persist(
    (set, get) => ({
      windows: [],
      cards: [],
      maxZ: 1000,

      addWindow: (win) => {
        const id = `win-${Date.now()}`;
        const maxZ = get().maxZ + 1;
        set((state) => ({
          windows: [...state.windows, { ...win, id, zIndex: maxZ }],
          maxZ,
        }));
        return id;
      },

      updateWindow: (id, updates) => {
        set((state) => ({
          windows: state.windows.map((w) =>
            w.id === id ? { ...w, ...updates } : w
          ),
        }));
      },

      closeWindow: (id) => {
        set((state) => ({
          windows: state.windows.filter((w) => w.id !== id),
        }));
      },

      bringToFront: (id) => {
        const maxZ = get().maxZ + 1;
        set((state) => ({
          windows: state.windows.map((w) =>
            w.id === id ? { ...w, zIndex: maxZ } : w
          ),
          maxZ,
        }));
      },

      updateCard: (id, updates) => {
        set((state) => ({
          cards: state.cards.map((c) =>
            c.id === id ? { ...c, ...updates } : c
          ),
        }));
      },
    }),
    {
      name: 'portfolio-state',
      partialize: (state) => ({ cards: state.cards }),
    }
  )
);

