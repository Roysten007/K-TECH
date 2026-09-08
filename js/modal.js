/**
 * K-TECH — Modal Détaillée Produit
 * Affiche la fiche technique complète, galerie, garantie, avis et CTA WhatsApp en 1 clic
 */

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modalBackdrop = document.getElementById('product-modal-backdrop');
  const modalContent = document.getElementById('product-modal-content');
  if (!modalBackdrop || !modalContent) return;

  // Calculer l'économie si promo
  const savings = product.oldPrice ? product.oldPrice - product.price : 0;
  const savingsHtml = savings > 0 
    ? `<span class="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full ml-2">Économisez ${formatPrice(savings)} FCFA</span>`
    : '';

  // Spécifications techniques sous forme de tableau propre
  const specsRows = Object.entries(product.specs || {}).map(([key, val]) => `
    <tr class="border-b border-slate-100 text-xs">
      <td class="py-2 pr-4 font-semibold text-slate-500 w-1/3">${key}</td>
      <td class="py-2 font-medium text-slate-900">${val}</td>
    </tr>
  `).join('');

  // Points forts
  const highlightsList = (product.highlights || []).map(h => `
    <li class="flex items-start gap-2 text-xs text-slate-700">
      <svg class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
      <span>${h}</span>
    </li>
  `).join('');

  // Vignettes de la galerie
  const thumbnailsHtml = product.images.map((img, idx) => `
    <button onclick="changeModalMainImage('${img}', this)" class="modal-thumb w-14 h-14 rounded-lg border-2 ${idx === 0 ? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200'} overflow-hidden transition-all shrink-0">
      <img src="${img}" alt="Thumbnail ${idx + 1}" class="w-full h-full object-cover">
    <button onclick="changeModalMainImage('${img}', this)" class="modal-thumb w-14 h-14 min-w-[44px] min-h-[44px] rounded-lg border-2 ${idx === 0 ? 'border-blue-600 ring-2 ring-blue-100' : 'border-slate-200'} overflow-hidden transition-all shrink-0">
      <img src="${img}" alt="Thumbnail ${idx + 1}" class="w-full h-full object-cover" loading="lazy">
    </button>
  `).join('');

  // Produits similaires
  const similarProducts = PRODUCTS_DATA
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const similarHtml = similarProducts.map(sp => `
    <div class="flex items-center gap-3 p-2 bg-slate-50 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors" onclick="openProductModal('${sp.id}')">
      <img src="${sp.images[0]}" class="w-12 h-12 object-cover rounded-lg border border-slate-200" alt="${sp.name}">
    <div class="flex items-center gap-3 p-2.5 min-h-[44px] bg-slate-50 rounded-xl hover:bg-blue-50 cursor-pointer transition-colors" onclick="openProductModal('${sp.id}')">
      <img src="${sp.images[0]}" class="w-12 h-12 object-cover rounded-lg border border-slate-200" alt="${sp.name}" loading="lazy">
      <div class="flex-1 min-w-0">
        <h5 class="text-xs font-bold text-slate-900 truncate">${sp.name}</h5>
        <span class="text-xs font-extrabold text-blue-700">${formatPrice(sp.price)} FCFA</span>
      </div>
      <span class="text-[11px] text-blue-600 font-bold bg-white px-2 py-1 rounded-md shadow-xs shrink-0">Voir</span>
      <span class="text-[11px] text-blue-600 font-bold bg-white px-2.5 py-1.5 rounded-md shadow-xs shrink-0">Voir</span>
    </div>
  `).join('');

  // Lien WhatsApp avec ville sélectionnée
  const waUrl = CONFIG.generateProductOrderUrl(product, window.selectedDeliveryCity);

  modalContent.innerHTML = `
    <!-- Bouton Fermer -->
    <button onclick="closeProductModal()" class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-sm">
    <button onclick="closeProductModal()" class="absolute top-4 right-4 z-20 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-sm" aria-label="Fermer la fiche produit">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 md:p-8 max-h-[88vh] overflow-y-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 md:p-8 max-h-[88vh] overflow-y-auto">
      <!-- Colonne Gauche : Galerie Photos -->
      <div class="lg:col-span-6 flex flex-col gap-4">
        <div class="relative bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-slate-100 h-72 md:h-96">
          ${product.badge ? `<span class="absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider badge-best-seller shadow-md">${product.badge}</span>` : ''}
          <img id="modal-main-img" src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-contain rounded-xl max-h-80 transition-all duration-300">
        </div>
        
        <!-- Vignettes -->
        <div class="flex gap-2.5 overflow-x-auto pb-1">
          ${thumbnailsHtml}
        </div>

        <!-- Réassurance sous l'image -->
        <div class="grid grid-cols-2 gap-3 mt-2">
          <div class="p-3 bg-blue-50/60 rounded-xl border border-blue-100 flex items-center gap-2.5 text-xs text-blue-900 font-medium">
            <svg class="w-5 h-5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            <span>${product.warranty}</span>
          </div>
          <div class="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-center gap-2.5 text-xs text-emerald-900 font-medium">
            <svg class="w-5 h-5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            <span>Paiement à la réception</span>
          </div>
        </div>
      </div>

      <!-- Colonne Droite : Infos, Prix, Specs, CTA WhatsApp -->
      <div class="lg:col-span-6 flex flex-col justify-between">
        <div>
          <!-- En-tête -->
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs uppercase font-bold text-blue-600 tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">${product.categoryLabel}</span>
            <span class="text-xs font-semibold text-slate-500">• ${product.brand}</span>
            <div class="flex items-center gap-1 ml-auto text-xs font-bold text-amber-500">
              <svg class="w-4 h-4 fill-amber-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span>${product.rating}</span>
              <span class="text-slate-400 font-normal">(${product.reviewsCount} avis)</span>
            </div>
          </div>

          <h2 class="text-xl md:text-2xl font-black text-slate-900 font-heading mb-3 leading-tight">
            ${product.name}
          </h2>

          <!-- Bloc Prix & Disponibilité -->
          <div class="p-4 bg-slate-50 rounded-xl mb-4 border border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-2xl md:text-3xl font-black text-slate-900 font-heading">${formatPrice(product.price)}</span>
                <span class="text-sm font-bold text-blue-600">FCFA</span>
                ${savingsHtml}
              </div>
              ${product.oldPrice ? `<div class="text-xs text-slate-400 line-through">Prix standard : ${formatPrice(product.oldPrice)} FCFA</div>` : ''}
            </div>

            <div class="text-right">
              <span class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ${product.availability}
              </span>
              <div class="text-[11px] text-slate-500 mt-1">Livrable en ${window.selectedDeliveryCity ? window.selectedDeliveryCity : '24h à 48h'}</div>
            </div>
          </div>

          <!-- Description & Points Forts -->
          <p class="text-xs md:text-sm text-slate-600 mb-4 leading-relaxed">
            ${product.description}
          </p>

          <div class="mb-4">
            <h4 class="text-xs uppercase font-bold text-slate-800 tracking-wider mb-2">Points Clés</h4>
            <ul class="space-y-1.5">
              ${highlightsList}
            </ul>
          </div>

          <!-- Fiche Technique / Specs -->
          <div class="mb-6">
            <h4 class="text-xs uppercase font-bold text-slate-800 tracking-wider mb-2">Caractéristiques Techniques</h4>
            <div class="bg-white border border-slate-100 rounded-xl p-3 shadow-2xs">
              <table class="w-full">
                <tbody>
                  ${specsRows}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Action Finale : Gros CTA WhatsApp -->
        <div class="pt-4 border-t border-slate-200">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-primary w-full py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 text-base font-bold text-slate-900 shadow-lg group">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-primary w-full min-h-[48px] py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 text-base font-bold text-slate-900 shadow-lg group">
            <svg class="btn-icon-wa w-5 h-5 text-emerald-800" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Commander en 1 clic sur WhatsApp</span>
            <svg class="btn-icon-arrow w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <p class="text-center text-[11px] text-slate-500 mt-2">
            💬 Un conseiller tech vous répondra immédiatement pour confirmer votre adresse.
          </p>
        </div>

        <!-- Produits suggérés en bas -->
        ${similarProducts.length > 0 ? `
          <div class="mt-6 pt-4 border-t border-slate-100">
            <h4 class="text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">Produits similaires qui pourraient vous plaire</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
              ${similarHtml}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;

  modalBackdrop.classList.remove('hidden');
  modalBackdrop.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function changeModalMainImage(imgUrl, thumbEl) {
  const mainImg = document.getElementById('modal-main-img');
  if (mainImg) {
    mainImg.src = imgUrl;
  }
  document.querySelectorAll('.modal-thumb').forEach(t => {
    t.className = 'modal-thumb w-14 h-14 rounded-lg border-2 border-slate-200 overflow-hidden transition-all shrink-0';
  });
  if (thumbEl) {
    thumbEl.className = 'modal-thumb w-14 h-14 rounded-lg border-2 border-blue-600 ring-2 ring-blue-100 overflow-hidden transition-all shrink-0';
  }
}

function closeProductModal() {
  const modalBackdrop = document.getElementById('product-modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.add('hidden');
    modalBackdrop.classList.remove('flex');
  }
  document.body.style.overflow = 'auto';
}

// Écouteur touche Échap et clic extérieur
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProductModal();
});

// Exposition globale
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.changeModalMainImage = changeModalMainImage;
