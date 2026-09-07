/**
 * K-TECH — Configuration Globale de la Boutique
 * Centralise les coordonnées, le barème des livraisons et les générateurs de liens WhatsApp
 */

const CONFIG = {
  storeName: "K-Tech Bénin",
  storeTagline: "Le meilleur de la tech, livré chez vous en 24h",
  
  // Numéro WhatsApp officiel (format international sans le + ni espaces)
  whatsappNumber: "22994171838",
  displayPhone: "+229 94 17 18 38",
  displayEmail: "contact@ktech-benin.com",
  
  // Boutique physique
  storeAddress: "Haie Vive / Boulevard de la Marina, Cotonou, Bénin",
  storeHours: {
    weekdays: "08h30 - 20h00 (Lundi au Samedi)",
    sunday: "14h00 - 19h00 (Dimanche)"
  },
  
  // Devise
  currency: "FCFA",
  
  // Barème officiel des livraisons (statique pour calcul instantané en JS)
  deliveryCities: [
    { name: "Cotonou", fee: 0, delay: "24h chrono", note: "Livraison express gratuite en mains propres" },
    { name: "Abomey-Calavi", fee: 1000, delay: "24h", note: "Livraison express directe" },
    { name: "Porto-Novo", fee: 1500, delay: "24h à 48h", note: "Livraison sécurisée" },
    { name: "Ouidah", fee: 1500, delay: "24h à 48h", note: "Livraison express" },
    { name: "Bohicon", fee: 1500, delay: "48h", note: "Expédition sécurisée avec suivi" },
    { name: "Abomey", fee: 2000, delay: "48h", note: "Expédition sécurisée avec suivi" },
    { name: "Parakou", fee: 2500, delay: "48h à 72h", note: "Expédition sécurisée par relais VIP" },
    { name: "Lokossa", fee: 2000, delay: "48h", note: "Envoi soigné avec suivi" },
    { name: "Natitingou", fee: 3000, delay: "72h", note: "Colis suivi avec scellé de sécurité" },
    { name: "Kandi", fee: 3500, delay: "72h", note: "Expédition sécurisée" },
    { name: "Autre ville du Bénin", fee: 2500, delay: "48h à 72h", note: "Livraison partout au Bénin" }
  ],
  
  // Méthodes pour générer les URLs WhatsApp pré-remplies
  generateWhatsAppUrl: function(message) {
    const encoded = encodeURIComponent(message.trim());
    return `https://wa.me/${this.whatsappNumber}?text=${encoded}`;
  },
  
  generateProductOrderUrl: function(product, city = null) {
    let msg = `👋 Bonjour K-Tech !\n\nJe souhaite commander :\n📌 *${product.name}*\n💰 Prix : *${formatPrice(product.price)} ${this.currency}*`;
    if (city) {
      msg += `\n📍 Ville de livraison : *${city}*`;
    }
    msg += `\n\nEst-il disponible immédiatement pour une livraison avec paiement à la réception ? Merci !`;
    return this.generateWhatsAppUrl(msg);
  },
  
  generateGeneralInquiryUrl: function(subject = "Renseignement") {
    const msg = `👋 Bonjour K-Tech !\n\nJ'ai une question concernant le catalogue tech (${subject}). Pouvez-vous m'aider s'il vous plaît ?`;
    return this.generateWhatsAppUrl(msg);
  },
  
  generateContactFormUrl: function(formData) {
    let msg = `👋 Bonjour K-Tech ! Nouvelle demande depuis le site web :\n\n`;
    msg += `👤 *Nom :* ${formData.name || 'Client'}\n`;
    msg += `📞 *Téléphone :* ${formData.phone || 'Non précisé'}\n`;
    if (formData.city) {
      msg += `📍 *Ville :* ${formData.city}\n`;
    }
    if (formData.product) {
      msg += `📦 *Produit d'intérêt :* ${formData.product}\n`;
    }
    if (formData.message) {
      msg += `💬 *Message :* ${formData.message}\n`;
    }
    msg += `\nMerci de me recontacter pour finaliser.`;
    return this.generateWhatsAppUrl(msg);
  }
};

// Formateur de prix francophone (ex: 780 000)
function formatPrice(amount) {
  return new Intl.NumberFormat('fr-FR').format(amount);
}

