/**
 * K-TECH — Base de données des Produits
 * 16 produits technologiques réels, vérifiés, avec caractéristiques précises et prix en FCFA
 */

const PRODUCTS_DATA = [
  // ----------------------------------------------------
  // TÉLÉPHONES
  // ----------------------------------------------------
  {
    id: "phone-iphone-15-pro-max",
    name: "Apple iPhone 15 Pro Max (256 Go)",
    category: "phones",
    categoryLabel: "Téléphones",
    brand: "Apple",
    price: 780000,
    oldPrice: 840000,
    badge: "Best-seller",
    badgeType: "best-seller",
    availability: "En stock à Cotonou",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 38,
    warranty: "Garantie Apple 1 an certifiée",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1695048065058-29cf9a3c7c2b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Le sommet de la technologie Apple avec châssis en titane aéronautique ultra-léger, puce surpuissante A17 Pro (idéale pour le gaming console) et téléobjectif 5x exclusif.",
    highlights: [
      "Design titane ultra résistant et léger",
      "Puce A17 Pro gravée en 3nm",
      "Bouton Action personnalisable & connecteur USB-C haute vitesse"
    ],
    specs: {
      "Écran": "6.7\" Super Retina XDR OLED ProMotion 120Hz",
      "Processeur": "Apple A17 Pro (6 cœurs)",
      "Stockage": "256 Go NVMe",
      "RAM": "8 Go",
      "Appareil photo": "Triple capteur 48 MP + 12 MP Ultra grand-angle + 12 MP Téléobjectif 5x",
      "Batterie": "Jusqu'à 29h de lecture vidéo",
      "Connectivité": "5G, Wi-Fi 6E, Bluetooth 5.3, USB-C 3.0"
    }
  },
  {
    id: "phone-samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra (512 Go)",
    category: "phones",
    categoryLabel: "Téléphones",
    brand: "Samsung",
    price: 745000,
    oldPrice: 795000,
    badge: "Nouveau",
    badgeType: "new",
    availability: "En stock",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 29,
    warranty: "Garantie constructeur 12 mois",
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80"
    ],
    description: "L'intelligence artificielle Galaxy AI intégrée pour traduire en direct, retoucher vos photos comme un pro et rechercher n'importe quel objet avec 'Circle to Search'. S-Pen inclus.",
    highlights: [
      "Capteur photo révolutionnaire 200 MP avec zoom optique 5x",
      "Écran Dynamic AMOLED 2X 2600 nits anti-reflet Gorilla Armor",
      "Stylet S-Pen intégré et autonomie record de 2 jours"
    ],
    specs: {
      "Écran": "6.8\" Dynamic AMOLED 2X QHD+ 120Hz adaptatif",
      "Processeur": "Snapdragon 8 Gen 3 for Galaxy",
      "Stockage": "512 Go UFS 4.0",
      "RAM": "12 Go",
      "Appareil photo": "200 MP + 50 MP (zoom 5x) + 10 MP (zoom 3x) + 12 MP",
      "Batterie": "5000 mAh avec charge rapide 45W",
      "Résistance": "Certifié IP68 étanche à l'eau et poussière"
    }
  },
  {
    id: "phone-google-pixel-8-pro",
    name: "Google Pixel 8 Pro (128 Go)",
    category: "phones",
    categoryLabel: "Téléphones",
    brand: "Google",
    price: 460000,
    oldPrice: 510000,
    badge: "Promo -10%",
    badgeType: "promo",
    availability: "Stock limité",
    deliveryBadge: "Livrable en 24h",
    isFeatured: true,
    rating: 4.8,
    reviewsCount: 22,
    warranty: "Garantie 12 mois",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Le maître incontesté de la photographie sur smartphone. Puce Google Tensor G3 dopée à l'IA et suivi logiciel garanti pendant 7 ans.",
    highlights: [
      "Traitement photo assisté par IA de niveau studio",
      "Écran Super Actua ultra lumineux (2400 nits)",
      "Capteur de température corporelle et d'objets intégré"
    ],
    specs: {
      "Écran": "6.7\" LTPO OLED QHD+ 1-120Hz",
      "Processeur": "Google Tensor G3 avec coprocesseur Titan M2",
      "Stockage": "128 Go UFS 3.1",
      "RAM": "12 Go LPDDR5X",
      "Photo": "50 MP grand angle + 48 MP téléobjectif 5x + 48 MP ultra grand angle",
      "Batterie": "5050 mAh charge rapide 30W"
    }
  },
  {
    id: "phone-xiaomi-redmi-note-13-pro-plus",
    name: "Xiaomi Redmi Note 13 Pro+ 5G (256 Go)",
    category: "phones",
    categoryLabel: "Téléphones",
    brand: "Xiaomi",
    price: 235000,
    oldPrice: 260000,
    badge: "Top Budget",
    badgeType: "promo",
    availability: "En stock",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 45,
    warranty: "Garantie 12 mois",
    images: [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Le meilleur rapport qualité-prix du marché : capteur 200 MP avec stabilisation optique OIS, charge ultra-rapide 120W (0 à 100% en 19 minutes) et certification IP68.",
    highlights: [
      "Charge supersonique 120W HyperCharge incluse",
      "Écran AMOLED incurvé 1.5K 120Hz CrystalRes",
      "Appareil photo 200 MP ultra précis"
    ],
    specs: {
      "Écran": "6.67\" AMOLED Incurvé 1.5K 120Hz",
      "Processeur": "MediaTek Dimensity 7200-Ultra (4nm)",
      "Stockage": "256 Go",
      "RAM": "8 Go (+8 Go virtuel)",
      "Photo": "200 MP OIS + 8 MP + 2 MP",
      "Batterie": "5000 mAh avec chargeur 120W inclus"
    }
  },

  // ----------------------------------------------------
  // ORDINATEURS
  // ----------------------------------------------------
  {
    id: "laptop-macbook-air-m3",
    name: "Apple MacBook Air 13.6\" Puce M3 (16 Go / 512 Go)",
    category: "laptops",
    categoryLabel: "Ordinateurs",
    brand: "Apple",
    price: 890000,
    oldPrice: 950000,
    badge: "Best-seller",
    badgeType: "best-seller",
    availability: "En stock à Cotonou",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 31,
    warranty: "Garantie Apple 12 mois",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Finesse extrême, silence absolu sans ventilateur et puissance démesurée grâce à la puce M3. Idéal pour professionnels, créateurs de contenu et étudiants exigeants.",
    highlights: [
      "Jusqu'à 18 heures d'autonomie sans brancher le chargeur",
      "Écran Liquid Retina éclatant avec 500 nits de luminosité",
      "Prise en charge de deux écrans externes"
    ],
    specs: {
      "Écran": "13.6\" Liquid Retina LED (2560 x 1664)",
      "Processeur": "Apple M3 (CPU 8 cœurs, GPU 10 cœurs)",
      "RAM": "16 Go Mémoire Unifiée",
      "Stockage": "512 Go SSD ultra-rapide",
      "Poids": "1.24 kg seulement",
      "Connectique": "MagSafe 3, 2x Thunderbolt / USB 4, Prise casque 3.5mm"
    }
  },
  {
    id: "laptop-dell-xps-15",
    name: "Dell XPS 15 9530 OLED (i7 13th, 32 Go, RTX 4060)",
    category: "laptops",
    categoryLabel: "Ordinateurs",
    brand: "Dell",
    price: 1150000,
    oldPrice: 1250000,
    badge: "Performance Pro",
    badgeType: "best-seller",
    availability: "En stock",
    deliveryBadge: "Livrable en 24h",
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 16,
    warranty: "Garantie 12 mois ProSupport",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
    ],
    description: "La station de travail portable ultime : écran OLED tactile 3.5K aux couleurs parfaites, châssis en aluminium usiné CNC et fibre de carbone avec carte graphique NVIDIA RTX 4060.",
    highlights: [
      "Écran InfinityEdge OLED 3.5K tactile 100% DCI-P3",
      "NVIDIA GeForce RTX 4060 8 Go GDDR6",
      "Clavier rétroéclairé haute précision et son immersif Waves Nx 3D"
    ],
    specs: {
      "Écran": "15.6\" OLED 3.5K (3456 x 2160) tactile 400 nits",
      "Processeur": "Intel Core i7-13700H (14 cœurs jusqu'à 5.0 GHz)",
      "RAM": "32 Go DDR5 4800 MHz",
      "Stockage": "1 To SSD NVMe PCIe Gen4",
      "Carte Graphique": "NVIDIA GeForce RTX 4060 8 Go",
      "Châssis": "Aluminium usiné et repose-mains en fibre de carbone"
    }
  },
  {
    id: "laptop-hp-victus-16",
    name: "HP Victus 16 Gaming (Ryzen 7 7840HS, RTX 4050, 16 Go)",
    category: "laptops",
    categoryLabel: "Ordinateurs",
    brand: "HP",
    price: 620000,
    oldPrice: 680000,
    badge: "Promo Gamer",
    badgeType: "promo",
    availability: "En stock",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 19,
    warranty: "Garantie 12 mois",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Le PC portable idéal pour les gamers et créateurs 3D au Bénin. Refroidissement OMEN Tempest Cooling amélioré et écran fluide 144Hz.",
    highlights: [
      "Écran 16.1\" IPS Full HD 144Hz anti-reflets",
      "Processeur AMD Ryzen 7 ultra puissant en multi-tâches",
      "Système audio Bang & Olufsen"
    ],
    specs: {
      "Écran": "16.1\" FHD (1920 x 1080) 144Hz IPS",
      "Processeur": "AMD Ryzen 7 7840HS (8 cœurs, 16 threads)",
      "RAM": "16 Go DDR5 5600 MHz",
      "Stockage": "512 Go SSD PCIe Gen4 NVMe",
      "GPU": "NVIDIA GeForce RTX 4050 6 Go GDDR6"
    }
  },
  {
    id: "laptop-lenovo-thinkpad-e14",
    name: "Lenovo ThinkPad E14 Gen 5 (Intel Core i5, 16 Go / 512 Go)",
    category: "laptops",
    categoryLabel: "Ordinateurs",
    brand: "Lenovo",
    price: 430000,
    oldPrice: 470000,
    badge: "Indestructible",
    badgeType: "new",
    availability: "En stock",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 24,
    warranty: "Garantie 12 mois",
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    description: "La robustesse légendaire ThinkPad testée selon les normes militaires MIL-STD-810H. Clavier ergonomique inégalé et sécurité renforcée avec lecteur d'empreintes digitales.",
    highlights: [
      "Robustesse militaire certifiée",
      "Clavier légendaire ThinkPad avec TrackPoint",
      "Autonomie solide avec charge rapide 65W USB-C"
    ],
    specs: {
      "Écran": "14\" WUXGA (1920 x 1200) IPS anti-éblouissement",
      "Processeur": "Intel Core i5-1335U (10 cœurs jusqu'à 4.6 GHz)",
      "RAM": "16 Go DDR4",
      "Stockage": "512 Go SSD NVMe",
      "Sécurité": "Puce dTPM 2.0, lecteur d'empreinte, cache webcam ThinkShutter"
    }
  },

  // ----------------------------------------------------
  // CASQUES & AUDIO
  // ----------------------------------------------------
  {
    id: "audio-sony-wh-1000xm5",
    name: "Sony WH-1000XM5 Casque Sans Fil Réduction de Bruit",
    category: "audio",
    categoryLabel: "Casques Audio",
    brand: "Sony",
    price: 210000,
    oldPrice: 235000,
    badge: "Best-seller",
    badgeType: "best-seller",
    availability: "En stock à Cotonou",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 52,
    warranty: "Garantie 1 an",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "La référence absolue mondiale en matière d'annulation active de bruit. Deux processeurs et 8 microphones coupent instantanément les bruits extérieurs.",
    highlights: [
      "Meilleure réduction de bruit active du marché",
      "30 heures d'autonomie avec charge express (3 min = 3h d'écoute)",
      "Qualité d'appel cristalline avec 4 micros beamforming"
    ],
    specs: {
      "Type": "Casque supra-aural sans fil fermé",
      "Réduction de bruit": "Double processeur V1 & QN1 avec 8 micros",
      "Autonomie": "30h (ANC activé) / 40h (sans ANC)",
      "Codecs audio": "LDAC, AAC, SBC (certifié Hi-Res Audio)",
      "Poids": "250 g, coussinets en cuir synthétique souple"
    }
  },
  {
    id: "audio-airpods-pro-2",
    name: "Apple AirPods Pro 2 avec Boîtier MagSafe (USB-C)",
    category: "audio",
    categoryLabel: "Casques Audio",
    brand: "Apple",
    price: 165000,
    oldPrice: 185000,
    badge: "Promo -10%",
    badgeType: "promo",
    availability: "En stock",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: true,
    rating: 4.9,
    reviewsCount: 47,
    warranty: "Garantie Apple 1 an",
    images: [
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Équipés de la puce Apple H2, les AirPods Pro 2 offrent une réduction de bruit 2x plus efficace, l'Audio Spatial personnalisé avec suivi dynamique de la tête et port USB-C.",
    highlights: [
      "Réduction active du bruit 2x plus performante",
      "Mode Transparence adaptative intelligente",
      "Boîtier résistant à la poussière et l'eau IP54 avec haut-parleur de localisation"
    ],
    specs: {
      "Puce": "Apple H2 dans les écouteurs, U1 dans le boîtier",
      "Autonomie": "Jusqu'à 6h d'écoute (30h au total avec le boîtier)",
      "Charge": "USB-C, MagSafe, chargeurs Apple Watch et Qi",
      "Audio": "Audio Spatial personnalisé, égalisation adaptative"
    }
  },
  {
    id: "audio-jbl-tune-770nc",
    name: "JBL Tune 770NC Casque Bluetooth Pure Bass",
    category: "audio",
    categoryLabel: "Casques Audio",
    brand: "JBL",
    price: 65000,
    oldPrice: 75000,
    badge: "Top Rapport Q/P",
    badgeType: "promo",
    availability: "En stock",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: false,
    rating: 4.7,
    reviewsCount: 33,
    warranty: "Garantie 12 mois",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Le son légendaire JBL Pure Bass sans aucun fil. Réduction adaptative du bruit, connexion multipoint et autonomie colossale jusqu'à 70 heures.",
    highlights: [
      "Son puissant signature JBL Pure Bass",
      "70h d'autonomie record sans ANC (44h avec ANC)",
      "Léger, pliable et confortable pour un usage quotidien"
    ],
    specs: {
      "Transducteurs": "40 mm dynamiques",
      "Connectivité": "Bluetooth 5.3 multi-points (2 appareils simultanés)",
      "Charge": "USB-C (5 min de charge = 3h de batterie)"
    }
  },
  {
    id: "audio-marshall-major-iv",
    name: "Marshall Major IV Casque Bluetooth Iconique",
    category: "audio",
    categoryLabel: "Casques Audio",
    brand: "Marshall",
    price: 85000,
    oldPrice: 99000,
    badge: "Style Rétro",
    badgeType: "new",
    availability: "En stock",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 26,
    warranty: "Garantie 12 mois",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Plus de 55 ans de savoir-faire sonore Marshall condensés dans un casque pliable indémodable avec plus de 80 heures d'autonomie sans fil.",
    highlights: [
      "Plus de 80h d'autonomie sans fil",
      "Recharge sans fil par induction ou câble USB-C",
      "Bouton de contrôle multidirectionnel en laiton doré"
    ],
    specs: {
      "Transducteurs": "40 mm personnalisés",
      "Autonomie": "80+ heures",
      "Charge": "Sans fil (Qi) + filaire USB-C"
    }
  },

  // ----------------------------------------------------
  // ACCESSOIRES TECH
  // ----------------------------------------------------
  {
    id: "acc-anker-charger-65w-gan",
    name: "Chargeur Rapide Anker 735 GaNPrime 65W (3 Ports)",
    category: "accessories",
    categoryLabel: "Accessoires",
    brand: "Anker",
    price: 22000,
    oldPrice: 28000,
    badge: "Indispensable",
    badgeType: "promo",
    availability: "En stock à Cotonou",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 68,
    warranty: "Garantie 18 mois constructeur",
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Rechargez votre MacBook, votre téléphone et vos écouteurs simultanément avec un seul bloc compact. Technologie GaNPrime thermique ultra-sécurisée.",
    highlights: [
      "Puissance totale 65W : charge PC portables, tablettes et téléphones",
      "53% plus petit que le chargeur standard 67W MacBook",
      "2 ports USB-C + 1 port USB-A avec distribution intelligente de puissance"
    ],
    specs: {
      "Puissance": "65W Max Power Delivery 3.0",
      "Ports": "2x USB-C + 1x USB-A",
      "Sécurité": "ActiveShield 2.0 (surveillance thermique 3 millions de fois/jour)"
    }
  },
  {
    id: "acc-anker-powerbank-24000mah",
    name: "Batterie Externe Anker 737 Power Bank 24 000 mAh (140W)",
    category: "accessories",
    categoryLabel: "Accessoires",
    brand: "Anker",
    price: 48000,
    oldPrice: 58000,
    badge: "Best-seller",
    badgeType: "best-seller",
    availability: "En stock à Cotonou",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: true,
    rating: 5.0,
    reviewsCount: 41,
    warranty: "Garantie 12 mois",
    images: [
      "https://images.unsplash.com/photo-1609592424368-80e9a7e6b825?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80"
    ],
    description: "La batterie de secours la plus puissante au monde : 140W bidirectionnelle avec écran digital couleur intelligent affichant la puissance en temps réel et le temps restant.",
    highlights: [
      "Puissance monumentale de 140W capable d'alimenter un MacBook Pro 16\"",
      "Écran couleur informatif en direct (watts entrants/sortants, santé batterie)",
      "Capacité 24 000 mAh : recharge un smartphone 5 fois ou un laptop 1.3 fois"
    ],
    specs: {
      "Capacité": "24 000 mAh (86.4 Wh)",
      "Puissance max": "140W en entrée et en sortie",
      "Écran": "Écran numérique couleur TFT"
    }
  },
  {
    id: "acc-logitech-mx-master-3s",
    name: "Souris Ergonomique Logitech MX Master 3S Sans Fil",
    category: "accessories",
    categoryLabel: "Accessoires",
    brand: "Logitech",
    price: 65000,
    oldPrice: 75000,
    badge: "Top Vente",
    badgeType: "popular",
    availability: "En stock",
    deliveryBadge: "Livrable en 24h",
    isFeatured: false,
    rating: 4.9,
    reviewsCount: 26,
    warranty: "Garantie constructeur 1 an",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80"
    ],
    description: "La souris de précision ultime pour créateurs et professionnels avec clic silencieux, capteur 8K DPI sur verre et molette électromagnétique MagSpeed.",
    highlights: [
      "Défilement électromagnétique MagSpeed jusqu'à 1 000 lignes par seconde",
      "Clics silencieux réduisant le bruit de 90%",
      "Capteur optique 8000 DPI fonctionnant même sur les surfaces en verre"
    ],
    specs: {
      "Capteur": "Darkfield haute précision 8000 DPI",
      "Connectivité": "Bluetooth Low Energy + Récepteur Logi Bolt",
      "Autonomie": "Jusqu'à 70 jours sur une charge complète"
    }
  },
  {
    id: "acc-ugreen-hub-usbc-8in1",
    name: "Hub USB-C 8-en-1 Ugreen avec Port HDMI 4K & Ethernet 1Gbps",
    category: "accessories",
    categoryLabel: "Accessoires",
    brand: "Ugreen",
    price: 28000,
    oldPrice: 34000,
    badge: "Top Utile",
    badgeType: "promo",
    availability: "En stock",
    deliveryBadge: "Disponible immédiatement",
    isFeatured: false,
    rating: 4.8,
    reviewsCount: 39,
    warranty: "Garantie 12 mois",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Transformez un seul port USB-C de votre MacBook ou PC en 8 connexions essentielles pour votre bureau ou télétravail.",
    highlights: [
      "Sortie vidéo HDMI 4K @ 60Hz ultra fluide",
      "Port Ethernet RJ45 Gigabit pour une connexion internet filaire ultra stable",
      "Recharge Power Delivery 100W sans ralentir vos transferts"
    ],
    specs: {
      "Ports": "1x HDMI 4K@60Hz, 1x RJ45 Gigabit, 3x USB 3.0 (5Gbps), 1x SD, 1x microSD, 1x USB-C PD 100W",
      "Matériaux": "Châssis aluminium dissipateur de chaleur"
    }
  }
];

