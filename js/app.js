/**
 * K-TECH — Script Principal (app.js)
 * Initialise les animations au scroll, compteurs numériques, accordéons FAQ,
 * menu mobile, carrousel d'avis déroulant et micro-interactions sur les boutons
 */

// 1. Initialisation de l'Intersection Observer pour les animations au scroll
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.reveal-visible)');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('reveal-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}
window.initScrollReveal = initScrollReveal;

// 2. Compteurs animés (Stats)
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const duration = 1800; // ms
        const isDecimal = target % 1 !== 0;
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';

        let start = 0;
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            el.textContent = `${prefix}${isDecimal ? target.toFixed(1) : Math.round(target)}${suffix}`;
            clearInterval(timer);
          } else {
            el.textContent = `${prefix}${isDecimal ? start.toFixed(1) : Math.round(start)}${suffix}`;
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// 3. Accordéon FAQ fluide
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Fermer les autres accordéons
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });
      // Toggle l'élément courant
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

// 4. Menu Mobile
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const closeBtn = document.getElementById('mobile-menu-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileDrawer) return;

  function toggleMenu() {
    const isHidden = mobileDrawer.classList.contains('hidden');
    if (isHidden) {
      mobileDrawer.classList.remove('hidden');
      mobileDrawer.classList.add('flex');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.add('hidden');
      mobileDrawer.classList.remove('flex');
      document.body.style.overflow = 'auto';
    }
  }

  menuBtn.addEventListener('click', toggleMenu);
  if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
      mobileDrawer.classList.remove('flex');
      document.body.style.overflow = 'auto';
    });
  });
}

// 5. Header Sticky Shadow
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      header.classList.remove('bg-white');
    } else {
      header.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      header.classList.add('bg-white');
    }
  });
}

// 6. Navigation par Catégorie depuis la Section 3
function filterFromCategoryCard(category) {
  const catalogueSection = document.getElementById('catalogue');
  if (catalogueSection) {
    catalogueSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Trouver le bouton pill correspondant
  const targetPill = document.querySelector(`.cat-pill-btn[data-category="${category}"]`);
  if (targetPill) {
    targetPill.click();
  }
}
window.filterFromCategoryCard = filterFromCategoryCard;

// 7. DÉROULEMENT CONTINU DES AVIS CLIENTS (MARQUEE TOUCH CONTROL)
function initTestimonialsMarquee() {
  const container = document.querySelector('.reviews-marquee-container');
  if (!container) return;

  const groups = container.querySelectorAll('.reviews-marquee-group');
  if (!groups.length) return;

  // Pause tactile au toucher sur mobile / reprise fluide au relâchement
  container.addEventListener('touchstart', () => {
    groups.forEach(g => g.style.animationPlayState = 'paused');
  }, { passive: true });

  container.addEventListener('touchend', () => {
    groups.forEach(g => g.style.animationPlayState = 'running');
  }, { passive: true });
}

// 8. Configuration des boutons WhatsApp généraux
function setupGeneralWhatsAppButtons() {
  const headerWaBtn = document.getElementById('header-wa-btn');
  if (headerWaBtn) {
    headerWaBtn.href = CONFIG.generateGeneralInquiryUrl("Commander un produit");
  }

  const heroWaBtn = document.getElementById('hero-wa-btn');
  if (heroWaBtn) {
    heroWaBtn.href = CONFIG.generateGeneralInquiryUrl("Catalogue et livraison 24h");
  }

  const floatingWaBtn = document.getElementById('floating-wa-link');
  if (floatingWaBtn) {
    floatingWaBtn.href = CONFIG.generateGeneralInquiryUrl("Discussion instantanée");
  }

  const directPhoneLinks = document.querySelectorAll('.store-phone-link');
  directPhoneLinks.forEach(link => {
    link.href = `tel:+${CONFIG.whatsappNumber}`;
    link.textContent = CONFIG.displayPhone;
  });
}

// 9. Micro-interactions sur les boutons (Effet ripple / retour tactile)
function initButtonMicroInteractions() {
  const buttons = document.querySelectorAll('.btn-cta-primary, .btn-tech-blue, .btn-whatsapp-action');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const circle = document.createElement('span');
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;

      const rect = this.getBoundingClientRect();
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.style.position = 'absolute';
      circle.style.borderRadius = '50%';
      circle.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
      circle.style.transform = 'scale(0)';
      circle.style.animation = 'rippleEffect 0.6s linear';
      circle.style.pointerEvents = 'none';

      this.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 600);
    });
  });

  // Injecter la keyframe ripple si pas présente
  if (!document.getElementById('ripple-keyframes')) {
    const style = document.createElement('style');
    style.id = 'ripple-keyframes';
    style.innerHTML = `
      @keyframes rippleEffect {
        to {
          transform: scale(3.5);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialisation globale
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initAnimatedCounters();
  initFAQ();
  initMobileMenu();
  initHeaderScroll();
  initTestimonialsMarquee();
  setupGeneralWhatsAppButtons();
  initButtonMicroInteractions();
});
