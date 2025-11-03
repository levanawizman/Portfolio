# Démarrage rapide

## 1. Installation

```bash
npm install
```

## 2. Configuration

Créez un fichier `.env` à la racine :

```env
OPENROUTER_API_KEY=sk-or-v1-votre-clé-ici
SITE_URL=http://localhost:5173
SITE_NAME=Portfolio Levana
PORT=3001
```

**Obtenir une clé OpenRouter :**
1. Aller sur https://openrouter.ai
2. Se créer un compte
3. Aller dans Settings > API Keys
4. Créer une nouvelle clé

## 3. Lancement

```bash
npm run dev:all
```

Cela lance :
- Client Vite sur http://localhost:5173
- Serveur Hono sur http://localhost:3001

## 4. Utilisation

1. **Déplacer les cartes projets** : Cliquez et glissez-les sur le canvas
2. **Discuter avec l'agent** : Utilisez la barre en bas de l'écran

### Exemples de requêtes

```
C'est qui Levana ?
```
```
Montre-moi des photos de Levana
```
```
Parle-moi de ses compétences
```
```
Quels sont ses projets ?
```

## 5. Ajouter des images

### Photos de Levana
Placez vos images dans `public/levana/` :
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`

### Images de projets
Placez vos images dans `public/projects/` :
- `portfolio.jpg`
- `design-system.jpg`
- `dashboard.jpg`
- `mobile-app.jpg`
- `ecommerce.jpg`
- `generative.jpg`

Sans ces images, des placeholders gris s'afficheront.

## 6. Build de production

```bash
# Client
npm run build

# Serveur
npm run build:server
```

Les fichiers de build seront dans :
- `dist/` pour le client
- `dist/server/` pour le serveur

## Troubleshooting

### Le serveur ne démarre pas
- Vérifiez que le port 3001 est libre
- Vérifiez que `.env` existe et contient `OPENROUTER_API_KEY`

### L'agent ne répond pas
- Vérifiez la console du navigateur (F12)
- Vérifiez que le serveur tourne sur http://localhost:3001
- Vérifiez votre clé OpenRouter

### Les cartes ne s'affichent pas
- Ouvrez les DevTools et regardez la console
- Vérifiez que Zustand est bien installé

### Erreur CORS
- Le serveur Hono a déjà CORS activé
- Vérifiez que vous accédez bien à http://localhost:5173

## Structure du code

- `src/` : Code client (React + TypeScript)
- `server/` : Code serveur (Hono + OpenRouter)
- `public/` : Assets statiques
- Tous les fichiers font < 100 lignes (sauf `data/`)

## Scripts disponibles

```bash
npm run dev              # Client uniquement
npm run dev:server       # Serveur uniquement
npm run dev:all          # Client + Serveur
npm run build            # Build client
npm run build:server     # Build serveur
npm run lint             # Linting ESLint
npm run preview          # Preview du build
```

## Support

Pour plus de détails, voir :
- `README.md` : Documentation complète
- `TESTING.md` : Guide de test
- `portfolio.plan.md` : Plan d'architecture

