/**
 * K-TECH — Gestionnaire du Formulaire de Contact
 * Valide les champs et redirige instantanément vers la messagerie WhatsApp pré-remplie
 */

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const city = document.getElementById('contact-city').value.trim();
    const product = document.getElementById('contact-product').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name) {
      alert('Veuillez renseigner votre nom.');
      return;
    }

    if (!phone) {
      alert('Veuillez renseigner votre numéro de téléphone ou WhatsApp.');
      return;
    }

    const waUrl = CONFIG.generateContactFormUrl({
      name,
      phone,
      city,
      product,
      message
    });

    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);

