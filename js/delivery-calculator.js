/**
 * K-TECH — Calculateur Interactif de Frais & Délais de Livraison
 * Permet au visiteur de vérifier instantanément sa ville et synchronise le choix avec WhatsApp
 */

window.selectedDeliveryCity = null;

function initDeliveryCalculator() {
  const cityInput = document.getElementById('delivery-city-input');
  const citySelect = document.getElementById('delivery-city-select');
  const resultCard = document.getElementById('delivery-result-card');
  const resultCityName = document.getElementById('delivery-result-city');
  const resultFee = document.getElementById('delivery-result-fee');
  const resultDelay = document.getElementById('delivery-result-delay');
  const resultNote = document.getElementById('delivery-result-note');
  const orderWithCityBtn = document.getElementById('delivery-action-btn');
  const suggestionsList = document.getElementById('delivery-suggestions');

  if (!cityInput && !citySelect) return;

  // Remplir le sélecteur avec les villes disponibles
  if (citySelect) {
    citySelect.innerHTML = '<option value="">-- Choisis ou sélectionne ta ville --</option>';
    CONFIG.deliveryCities.forEach(city => {
      const option = document.createElement('option');
      option.value = city.name;
      option.textContent = `${city.name} (${city.fee === 0 ? 'Gratuit' : formatPrice(city.fee) + ' FCFA'})`;
      citySelect.appendChild(option);
    });

    citySelect.addEventListener('change', function(e) {
      if (this.value) {
        if (cityInput) cityInput.value = this.value;
        displayDeliveryInfo(this.value);
      }
    });
  }

  // Écoute de la saisie utilisateur dans l'input
  if (cityInput) {
    cityInput.addEventListener('input', function(e) {
      const query = this.value.trim().toLowerCase();
      if (!query) {
        if (suggestionsList) suggestionsList.classList.add('hidden');
        return;
      }

      // Filtrer les suggestions
      const matches = CONFIG.deliveryCities.filter(c => 
        c.name.toLowerCase().includes(query)
      );

      if (suggestionsList && matches.length > 0) {
        suggestionsList.innerHTML = '';
        matches.slice(0, 5).forEach(match => {
          const li = document.createElement('li');
          li.className = 'px-4 py-2.5 hover:bg-blue-50 cursor-pointer text-sm font-medium flex justify-between items-center transition-colors';
          li.innerHTML = `
            <span>${match.name}</span>
            <span class="text-xs ${match.fee === 0 ? 'text-green-600 font-bold' : 'text-slate-500'}">
              ${match.fee === 0 ? 'Gratuit' : formatPrice(match.fee) + ' FCFA'}
            </span>
          `;
          li.addEventListener('click', () => {
            cityInput.value = match.name;
            if (citySelect) citySelect.value = match.name;
            suggestionsList.classList.add('hidden');
            displayDeliveryInfo(match.name);
          });
          suggestionsList.appendChild(li);
        });
        suggestionsList.classList.remove('hidden');
      } else if (suggestionsList) {
        suggestionsList.classList.add('hidden');
      }

      // Si correspondance exacte trouvée
      const exactMatch = CONFIG.deliveryCities.find(c => c.name.toLowerCase() === query);
      if (exactMatch) {
        displayDeliveryInfo(exactMatch.name);
      }
    });

    // Fermer les suggestions si on clique à l'extérieur
    document.addEventListener('click', function(e) {
      if (suggestionsList && !cityInput.contains(e.target) && !suggestionsList.contains(e.target)) {
        suggestionsList.classList.add('hidden');
      }
    });
  }

  // Affichage du résultat
  function displayDeliveryInfo(cityName) {
    const city = CONFIG.deliveryCities.find(c => c.name.toLowerCase() === cityName.toLowerCase()) 
                 || CONFIG.deliveryCities.find(c => c.name.includes("Autre"))
                 || { name: cityName, fee: 2000, delay: "48h à 72h", note: "Expédition sécurisée partout au Bénin" };

    window.selectedDeliveryCity = city.name;

    if (resultCityName) resultCityName.textContent = city.name;
    if (resultFee) {
      if (city.fee === 0) {
        resultFee.innerHTML = '<span class="text-emerald-600 font-bold">Gratuit (0 FCFA)</span>';
      } else {
        resultFee.innerHTML = `<span class="text-blue-700 font-bold">${formatPrice(city.fee)} FCFA</span>`;
      }
    }
    if (resultDelay) resultDelay.textContent = city.delay;
    if (resultNote) resultNote.textContent = city.note;

    if (resultCard) {
      resultCard.classList.remove('hidden');
      resultCard.classList.add('flex');
    }

    if (orderWithCityBtn) {
      orderWithCityBtn.href = CONFIG.generateWhatsAppUrl(
        `👋 Bonjour K-Tech !\n\nJ'habite à *${city.name}* (délai estimé : ${city.delay}). Je souhaite commander un produit chez vous avec paiement à la réception. Pouvez-vous me guider ?`
      );
    }

    // Mettre à jour l'indicateur dans la navbar ou le formulaire de contact si présent
    const contactCityInput = document.getElementById('contact-city');
    if (contactCityInput && !contactCityInput.value) {
      contactCityInput.value = city.name;
    }

    // Réactualiser les liens WhatsApp du catalogue avec la ville sélectionnée
    if (typeof renderCatalogue === 'function') {
      renderCatalogue();
    }
    if (typeof renderFeaturedProducts === 'function') {
      renderFeaturedProducts();
    }
  }

  // Par défaut, afficher Cotonou comme exemple dynamique
  displayDeliveryInfo("Cotonou");
}

document.addEventListener('DOMContentLoaded', initDeliveryCalculator);
