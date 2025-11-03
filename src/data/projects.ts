import type { ProjectCard } from '../state/store';

export const initialProjects: Omit<ProjectCard, 'id'>[] = [
  {
    title: 'Portfolio Interactif',
    description: 'Un portfolio 3D immersif avec navigation spatiale',
    tags: ['React', 'Three.js', 'WebGL'],
    x: 40,
    y: 120,
    image: '/projects/portfolio.jpg',
  },
  {
    title: 'Design System',
    description: 'Système de composants réutilisables et accessibles',
    tags: ['React', 'Storybook', 'TypeScript'],
    x: 60,
    y: 140,
    image: '/projects/design-system.jpg',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Interface de visualisation de données en temps réel',
    tags: ['Next.js', 'D3.js', 'API'],
    x: 80,
    y: 160,
    image: '/projects/dashboard.jpg',
  },
  {
    title: 'App Mobile',
    description: 'Application de productivité cross-platform',
    tags: ['React Native', 'Firebase', 'Redux'],
    x: 1120,
    y: 120,
    image: '/projects/mobile-app.jpg',
  },
  {
    title: 'E-commerce',
    description: 'Plateforme de vente en ligne moderne et performante',
    tags: ['Next.js', 'Stripe', 'Prisma'],
    x: 1140,
    y: 140,
    image: '/projects/ecommerce.jpg',
  },
  {
    title: 'Art Génératif',
    description: 'Expériences visuelles générées par algorithme',
    tags: ['P5.js', 'Canvas', 'Creative'],
    x: 1160,
    y: 160,
    image: '/projects/generative.jpg',
  },
];

