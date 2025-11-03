# Guide de test du portfolio

## Préparation

1. **Configurer la clé API OpenRouter**
   ```bash
   # Éditer .env et ajouter :
   OPENROUTER_API_KEY=sk-or-v1-xxxxx
   ```

2. **Lancer le projet**
   ```bash
   npm run dev:all
   ```
   
   Ou séparément :
   ```bash
   # Terminal 1 - Client
   npm run dev
   
   # Terminal 2 - Serveur
   npm run dev:server
   ```

3. **Ouvrir le navigateur**
   - Client : http://localhost:5173
   - Serveur : http://localhost:3001

## Scénarios de test

### 1. Interface de base
- [ ] Les cartes projets s'affichent sur le canvas
- [ ] On peut déplacer les cartes à la souris (drag & drop)
- [ ] La barre de commande est visible en bas
- [ ] Le message de bienvenue s'affiche

### 2. Déplacement des cartes
- [ ] Cliquer et déplacer une carte projet
- [ ] La carte suit la souris
- [ ] La position est persistée (recharger la page)
- [ ] Hover sur une carte : effet d'élévation

### 3. Interaction avec l'agent

#### Test 1 : Demande d'information
```
C'est qui Levana ?
```
**Attendu :** Réponse textuelle dans la conversation

#### Test 2 : Demande de photos
```
Montre-moi des photos de Levana
```
**Attendu :** Une fenêtre s'ouvre avec une galerie

#### Test 3 : Informations projets
```
Parle-moi de ses projets
```
**Attendu :** Réponse avec liste des projets

#### Test 4 : Contenu markdown
```
Fais-moi un résumé en markdown
```
**Attendu :** Fenêtre markdown avec contenu formaté

### 4. Gestion des fenêtres
- [ ] Ouvrir une fenêtre (via agent)
- [ ] Déplacer une fenêtre (drag par le header)
- [ ] Cliquer sur une fenêtre la met au premier plan (z-index)
- [ ] Fermer une fenêtre (bouton X)
- [ ] Ouvrir plusieurs fenêtres simultanément

### 5. Performance
- [ ] Animations fluides (60fps)
- [ ] Pas de lag lors du drag
- [ ] Transitions douces (fenêtres qui s'ouvrent/ferment)
- [ ] Scroll fluide dans les fenêtres

### 6. Responsive (optionnel)
- [ ] Redimensionner la fenêtre du navigateur
- [ ] Les éléments restent accessibles
- [ ] Touch sur mobile/tablette

### 7. Accessibilité
- [ ] Focus visible au clavier
- [ ] Tab navigation fonctionnelle
- [ ] Entrée pour soumettre dans la barre de commande

## Bugs connus à vérifier

- [ ] Message d'erreur si clé API manquante
- [ ] Gestion erreur réseau
- [ ] Fenêtres qui sortent de l'écran
- [ ] Collision entre fenêtres
- [ ] Historique conversation qui déborde

## Notes

- Les photos de Levana nécessitent des fichiers dans `public/levana/`
- Les images de projets nécessitent des fichiers dans `public/projects/`
- Sans images : placeholders gris s'affichent

## Commandes utiles

```bash
# Build de production
npm run build
npm run build:server

# Linting
npm run lint

# Preview build
npm run preview
```

