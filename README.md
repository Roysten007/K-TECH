# ⚡ K-TECH — Boutique Tech & Catalogue WhatsApp

Bienvenue sur le projet **K-TECH**, un site web e-commerce complet à très haute conversion, conçu pour vendre des smartphones, ordinateurs portables, casques audio et accessoires tech avec **commande directe en 1 clic sur WhatsApp** et **règlement sécurisé à la livraison** (zéro paiement en ligne requis).

---

## 🎨 Identité Visuelle & UX (Règle 60-30-10)

- **60% Blanc & Respiration** : Fond clair, lisibilité maximale, esthétique premium et aérée.
- **30% Bleu Tech (`#0057D9`)** : En-têtes, cartes, boutons secondaires, badges de confiance.
- **10% Jaune CTA (`#FFC700`)** : Boutons d'action principaux à haute conversion, puces d'urgence et accents.
- **Typographie moderne** : *Space Grotesk* pour des titres percutants et *Inter* pour un confort de lecture optimal.
- **Micro-interactions & animations** :
  - Révélations progressives au scroll (`IntersectionObserver`)
  - Effets de survol sur les cartes produits (zoom image doux + halo bleu subtil)
  - Boutons d'action jaunes avec élévation et lueur
  - Compteurs chiffrés animés (+500 clients, 4.8/5, etc.)
  - Boutons d'action WhatsApp directs haute conversion

---

## 📁 Architecture du Projet

```
K-tech/
│
├── index.html                   # Page d'accueil complète avec les 11 sections sémantiques
├── server.js                    # Serveur HTTP Node.js ultra-léger (0 dépendance)
├── package.json                 # Configuration, scripts de build et démarrage
├── vercel.json                  # Configuration de déploiement Vercel
├── .gitignore                   # Fichiers ignorés par Git
│
├── assets/                      # Visuels premium (bannière Hero tech, mockups 3D)
├── css/
│   └── style.css                # Styles CSS sur-mesure, variables 60-30-10, animations
│
└── js/
    ├── config.js                # Coordonnées, n° WhatsApp, barème de livraison des villes
    ├── products-data.js         # Base de données de 16 produits réels avec caractéristiques et prix FCFA
    ├── delivery-calculator.js   # Moteur de calcul interactif des frais & délais de livraison
    ├── catalogue.js             # Recherche instantanée, filtres (catégories, budget, marques) et tri
    ├── modal.js                 # Modal détaillée avec galerie, fiche technique et CTA WhatsApp
    ├── contact.js               # Formulaire avec redirection automatique vers WhatsApp
    └── app.js                   # Compteurs animés, menu mobile, accordéon FAQ, toast de commande
```

---

## 🚀 Démarrage Rapide

### Option 1 : Avec Node.js (Recommandé)
Dans le terminal du dossier du projet, exécutez :
```bash
npm start
```
Puis ouvrez votre navigateur sur : **[http://localhost:3000](http://localhost:3000)**

### Option 2 : Sans installation
Vous pouvez ouvrir directement le fichier `index.html` dans n'importe quel navigateur (Chrome, Firefox, Safari, Edge).

---

## ⚙️ Personnalisation Simple

### 1. Changer le Numéro WhatsApp
Ouvrez le fichier [`js/config.js`](js/config.js) et modifiez la ligne suivante avec votre numéro béninois ou international (sans `+` ni espaces) :
```javascript
whatsappNumber: "22990000000",
displayPhone: "+229 90 00 00 00",
```

### 2. Ajouter ou Modifier des Produits
Ouvrez [`js/products-data.js`](js/products-data.js). Chaque produit contient :
- `name` : Nom du produit
- `category` : `phones`, `laptops`, `audio`, ou `accessories`
- `price` : Prix en FCFA (ex: `780000`)
- `oldPrice` : Prix barré pour faire ressortir la promotion
- `badge` : "Best-seller", "Nouveau", "Promo -10%", etc.
- `images` : Liens des photos
- `specs` : Fiche technique clé-valeur
- `highlights` : Points forts en puces

### 3. Ajuster les Villes & Frais de Livraison
Dans [`js/config.js`](js/config.js), le tableau `deliveryCities` contient la liste des villes (Bohicon, Cotonou, Calavi, Parakou, etc.) avec leurs délais et leurs tarifs (0 FCFA = gratuit).

---

## 🌐 Déploiement

Ce site est 100% statique et ultra-rapide. Il peut être déployé en 1 clic gratuitement sur :
- **Vercel** : `vercel deploy`
- **Netlify** : Glisser-déposer le dossier sur netlify.com
- **GitHub Pages** : Activer GitHub Pages sur le dépôt
- **Hébergement classique cPanel** : Téléverser tous les fichiers dans `public_html`.

