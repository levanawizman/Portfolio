# Portfolio Levana

Portfolio interactif 2D avec agent IA (Claude 3.5 Haiku via OpenRouter).

## Fonctionnalités

- 🎨 Canvas 2D avec cartes projets déplaçables
- 🤖 Agent conversationnel qui pilote des fenêtres de contenu
- 🪟 Système de fenêtres draggable avec z-index dynamique
- ✨ Animations fluides (Framer Motion)
- 🎯 Design moderne avec Tailwind v4
- 🔒 Sandbox sécurisé pour HTML généré par l'IA

## Structure

```
src/
├── agent/          # Client LLM et sérialisation d'état
├── components/     # Composants React (UI, fenêtres, projets, commande)
├── data/           # Données fictives (bio, projets)
├── hooks/          # Hooks React personnalisés
├── lib/            # Utilitaires (CSP, IDs)
├── renderer/       # Renderers de contenu (Markdown, Gallery, HTML)
├── state/          # Store Zustand et sélecteurs
└── styles/         # Thème et styles globaux

server/
├── env.ts          # Configuration env
├── openrouter.ts   # Client OpenRouter + tools
├── schema.ts       # Schémas Zod
├── routes.ts       # Routes Hono
└── index.ts        # Serveur
```

## Installation

```bash
npm install
```

## Configuration

1. Créer un fichier `.env` (voir `.env.example`)
2. Ajouter votre clé OpenRouter : `OPENROUTER_API_KEY=sk-...`

## Lancement

```bash
# Client + Serveur en parallèle
npm run dev:all

# Ou séparément :
npm run dev           # Client (Vite)
npm run dev:server    # Serveur (Hono)
```

Le client démarre sur `http://localhost:5173`  
Le serveur démarre sur `http://localhost:3001`

## Utilisation

1. Les cartes projets sont déplaçables à la souris
2. La barre de commande en bas permet d'interagir avec l'agent
3. Exemples de requêtes :
   - "C'est qui Levana ?"
   - "Montre-moi des photos de Levana"
   - "Parle-moi de ses projets"

L'agent peut ouvrir/fermer des fenêtres de contenu (markdown, galerie, HTML).

## Contraintes de développement

- Aucun fichier > 100 lignes (sauf `data/`)
- Code modulaire et typé (TypeScript)
- Design affirmé (couleurs, ombres, animations)

## Technologies

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Zustand
- Hono
- OpenRouter (Claude 3.5 Haiku)

## License

MIT

