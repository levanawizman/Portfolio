import type { ProjectCard } from '../state/store';

export const initialProjects: Omit<ProjectCard, 'id'>[] = [
  // Stack gauche (dernière = au-dessus)
  {
    title: 'Portfolio Interactif',
    description: 'Portfolio immersif avec navigation spatiale',
    tags: ['React', 'WebGL'],
    x: 60,
    y: 560,
    rotation: -10,
    image: '/projects/portfolio.jpg',
  },
  {
    title: 'Design System',
    description: 'Composants réutilisables, accessibles, documentés',
    tags: ['TypeScript', 'Storybook'],
    x: 90,
    y: 600,
    rotation: -4,
    image: '/projects/design-system.jpg',
  },

  // Stack droite (dernière = au-dessus)
  {
    title: 'App Mobile',
    description: 'Application de productivité cross-platform',
    tags: ['React Native', 'Firebase'],
    x: 1120,
    y: 560,
    rotation: 4,
    image: '/projects/mobile-app.jpg',
  },
  {
    title: 'E-commerce',
    description: 'Plateforme moderne et performante',
    tags: ['Next.js', 'Stripe'],
    x: 1150,
    y: 600,
    rotation: 10,
    image: '/projects/ecommerce.jpg',
  },
];

