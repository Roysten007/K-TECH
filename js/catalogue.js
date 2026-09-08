/**
 * K-TECH — Moteur du Catalogue Produits
 * Gère l'affichage dynamique, les filtres par catégorie, prix, marque, recherche et tri
 */

let currentFilters = {
  category: 'all',
  brand: 'all',
  maxPrice: 1500000,
  searchQuery: '',
  sortBy: 'popularity'
};

function renderProductCard(product, index = 0) {
  const waUrl = CONFIG.generateProductOrderUrl(product, window.selectedDeliveryCity);
  
  let badgeHtml = '';
  if (product.badge) {
    let badgeClass = 'badge-best-seller';
    if (product.badgeType === 'new') badgeClass = 'badge-new';
    if (product.badgeType === 'promo') badgeClass = 'badge-promo';
    badgeHtml = `<span class="absolute top-3 left-3 px-3 py-1 text-xs rounded-full uppercase tracking-wider ${badgeClass} shadow-md z-10">${product.badge}</span>`;
  }

  const oldPriceHtml = product.oldPrice 
    ? `<span class="text-xs text-slate-400 line-through mr-2">${formatPrice(product.oldPrice)} FCFA</span>`
    : '';

  return `
    <div class="product-card group flex flex-col justify-between overflow-hidden bg-white p-4 reveal-on-scroll delay-${(index % 4) * 100}" data-id="${product.id}">
      <div>
        <!-- Conteneur Image avec zoom & badges -->
        <div class="relative img-zoom-container bg-slate-50 w-full h-52 flex items-center justify-center p-2 mb-4 cursor-pointer" onclick="openProductModal('${product.id}')">
          ${badgeHtml}
          <span class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-[11px] font-semibold text-slate-700 rounded-md shadow-sm z-10 flex items-center gap-1">
            <svg class="w-3 h-3 text-amber-500 fill-amber-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ${product.rating}
          </span>
          <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover rounded-lg" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'">
          
          <!-- Bouton aperçu rapide au hover -->
          <div class="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button class="bg-white/95 text-slate-900 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all flex items-center gap-1.5">
            <button class="bg-white/95 text-slate-900 min-h-[44px] px-4 py-2 rounded-full text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all flex items-center gap-1.5" aria-label="Aperçu rapide du produit ${product.name}">
              <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              Aperçu rapide
            </button>
          </div>
        </div>

        <!-- Détails Produit -->
        <div class="mb-3">
          <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span class="uppercase tracking-wider font-semibold text-blue-600">${product.categoryLabel}</span>
            <span class="font-medium">${product.brand}</span>
          </div>
          <h3 class="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-700 transition-colors line-clamp-2 cursor-pointer" onclick="openProductModal('${product.id}')">
            ${product.name}
          </h3>
        </div>

        <!-- Badge Livraison & Stock -->
        <div class="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md mb-3 w-fit">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span class="font-medium">${product.deliveryBadge}</span>
        </div>
      </div>

      <div>
        <!-- Prix en FCFA -->
        <div class="mb-3.5 pt-2 border-t border-slate-100 flex items-baseline justify-between">
          <div>
            ${oldPriceHtml}
            <div class="text-xl font-black text-slate-900 font-heading">
              ${formatPrice(product.price)} <span class="text-xs font-bold text-blue-600">FCFA</span>
            </div>
          </div>
        </div>

        <!-- CTA Action : Commander sur WhatsApp -->
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-primary w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-slate-900 shadow-md group">
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-cta-primary w-full min-h-[44px] py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-slate-900 shadow-md group">
          <svg class="btn-icon-wa w-4 h-4 text-emerald-800" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Commander sur WhatsApp</span>
        </a>
      </div>
    </div>
  `;
}

function renderCatalogue() {
  const container = document.getElementById('catalogue-grid');
  const countBadge = document.getElementById('products-count');
  if (!container) return;

  // Filtrage
  let filtered = PRODUCTS_DATA.filter(product => {
    // Catégorie
    if (currentFilters.category !== 'all' && product.category !== currentFilters.category) {
      return false;
    }
    // Marque
    if (currentFilters.brand !== 'all' && product.brand !== currentFilters.brand) {
      return false;
    }
    // Prix Max
    if (product.price > currentFilters.maxPrice) {
      return false;
    }
    // Recherche textuelle
    if (currentFilters.searchQuery) {
      const q = currentFilters.searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchBrand = product.brand.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchBrand) return false;
    }
    return true;
  });

  // Tri
  if (currentFilters.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentFilters.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentFilters.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    // Default popularity / featured first
    filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
  }

  // Mise à jour compteur
  if (countBadge) {
    countBadge.textContent = `${filtered.length} produit${filtered.length > 1 ? 's' : ''}`;
  }

  // Affichage vide ou grille
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 p-8">
        <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h4 class="text-lg font-bold text-slate-800 mb-1">Aucun produit ne correspond à vos critères</h4>
        <p class="text-sm text-slate-500 mb-6 max-w-md mx-auto">Essayez d'élargir votre recherche, d'augmenter le budget max ou de réinitialiser vos filtres.</p>
        <button onclick="resetFilters()" class="btn-tech-blue px-6 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
          Réinitialiser tous les filtres
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((p, i) => renderProductCard(p, i)).join('');
  
  // Ré-attacher l'observer pour les animations
  if (window.initScrollReveal) {
    window.initScrollReveal();
  }
}

// Rendu des meilleures ventes pour la section Hero / Best-Sellers
function renderFeaturedProducts() {
  const container = document.getElementById('featured-products-grid');
  if (!container) return;

  const featured = PRODUCTS_DATA.filter(p => p.isFeatured).slice(0, 8);
  container.innerHTML = featured.map((p, i) => renderProductCard(p, i)).join('');
}

// Réinitialisation des filtres
function resetFilters() {
  currentFilters = {
    category: 'all',
    brand: 'all',
    maxPrice: 1500000,
    searchQuery: '',
    sortBy: 'popularity'
  };

  const searchInput = document.getElementById('catalogue-search');
  if (searchInput) searchInput.value = '';

  const priceSlider = document.getElementById('price-slider');
  const priceDisplay = document.getElementById('price-slider-display');
  if (priceSlider) priceSlider.value = 1500000;
  if (priceDisplay) priceDisplay.textContent = '1 500 000 FCFA';

  const brandSelect = document.getElementById('filter-brand');
  if (brandSelect) brandSelect.value = 'all';

  const sortSelect = document.getElementById('sort-products');
  if (sortSelect) sortSelect.value = 'popularity';

  // Réinitialiser les boutons de catégories
  document.querySelectorAll('.cat-pill-btn').forEach(btn => {
    if (btn.dataset.category === 'all') {
      btn.className = 'cat-pill-btn active px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-blue-600 text-white shadow-sm transition-all';
    } else {
      btn.className = 'cat-pill-btn px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all';
    }
  });

  renderCatalogue();
}

// Configuration des écouteurs de filtres
function initCatalogueListeners() {
  // Filtres par catégorie
  const catBtns = document.querySelectorAll('.cat-pill-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      catBtns.forEach(b => {
        b.className = 'cat-pill-btn px-4 py-2 rounded-full text-xs md:text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all';
      });
      this.className = 'cat-pill-btn active px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-blue-600 text-white shadow-sm transition-all';
      currentFilters.category = this.dataset.category;
      renderCatalogue();
    });
  });

  // Recherche par mot-clé
  const searchInput = document.getElementById('catalogue-search');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      currentFilters.searchQuery = this.value.trim();
      renderCatalogue();
    });
  }

  // Slider de prix
  const priceSlider = document.getElementById('price-slider');
  const priceDisplay = document.getElementById('price-slider-display');
  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener('input', function() {
      const val = parseInt(this.value, 10);
      currentFilters.maxPrice = val;
      priceDisplay.textContent = `${formatPrice(val)} FCFA`;
      renderCatalogue();
    });
  }

  // Marque
  const brandSelect = document.getElementById('filter-brand');
  if (brandSelect) {
    // Populate brands
    const brands = Array.from(new Set(PRODUCTS_DATA.map(p => p.brand))).sort();
    brands.forEach(b => {
      const opt = document.createElement('option');
      opt.value = b;
      opt.textContent = b;
      brandSelect.appendChild(opt);
    });

    brandSelect.addEventListener('change', function() {
      currentFilters.brand = this.value;
      renderCatalogue();
    });
  }

  // Tri
  const sortSelect = document.getElementById('sort-products');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      currentFilters.sortBy = this.value;
      renderCatalogue();
    });
  }
}

// Déclenchement au chargement
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  initCatalogueListeners();
  renderCatalogue();
});

// Exposition globale
window.renderCatalogue = renderCatalogue;
window.renderFeaturedProducts = renderFeaturedProducts;
window.resetFilters = resetFilters;
