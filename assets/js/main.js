/* Leonardo Ferretti — Portfolio (prototipo)
   Header, menu mobile, sezione attiva, comparsa allo scroll, lightbox. */
(() => {
  'use strict';

  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Anno nel footer ---------- */
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Header al scroll ---------- */
  const header = document.querySelector('[data-header]');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const toggleLabel = toggle.querySelector('.visually-hidden');

  const setNav = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggleLabel.textContent = open ? 'Chiudi il menu' : 'Apri il menu';
    nav.classList.toggle('is-open', open);
    root.classList.toggle('nav-open', open);
  };

  toggle.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setNav(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 900px)').addEventListener('change', (e) => { if (e.matches) setNav(false); });

  /* ---------- Sezione attiva nel menu ---------- */
  const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
  const linkById = new Map(navLinks.map((a) => [a.getAttribute('href').slice(1), a]));

  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.removeAttribute('aria-current'));
        const link = linkById.get(entry.target.id);
        if (link) link.setAttribute('aria-current', 'location');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    linkById.forEach((_, id) => {
      const section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }

  /* ---------- Comparsa allo scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion.matches) {
    reveals.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach((el) => io.observe(el));
  }

  /* ---------- Foto profilo ----------
     Finché manca assets/images/profilo.jpg si vede il ritaglio dalla slide;
     appena il file viene aggiunto alla cartella, lo sostituisce da solo. */
  const profile = document.querySelector('[data-profile]');
  if (profile) {
    const probe = new Image();
    probe.onload = () => {
      const img = profile.querySelector('img');
      profile.classList.remove('crop');
      profile.removeAttribute('style');
      profile.classList.add('is-original');
      img.removeAttribute('width');
      img.removeAttribute('height');
      img.src = probe.src;
    };
    probe.src = 'assets/images/profilo.jpg';
  }

  /* ---------- Lightbox ---------- */
  const dialog = document.querySelector('[data-lightbox]');
  if (!dialog || typeof dialog.showModal !== 'function') return; // senza <dialog> i link aprono l'immagine

  const lbImg = dialog.querySelector('[data-lb-img]');
  const lbCaption = dialog.querySelector('[data-lb-caption]');
  const lbCount = dialog.querySelector('[data-lb-count]');
  const btnPrev = dialog.querySelector('[data-lb-prev]');
  const btnNext = dialog.querySelector('[data-lb-next]');
  const btnClose = dialog.querySelector('[data-lb-close]');

  let items = [];
  let index = 0;
  let opener = null;

  const show = (i) => {
    index = (i + items.length) % items.length;
    const link = items[index];
    const thumb = link.querySelector('img');
    lbImg.classList.add('is-loading');
    lbImg.onload = () => lbImg.classList.remove('is-loading');
    lbImg.src = link.getAttribute('href');
    lbImg.alt = thumb ? thumb.alt : '';
    lbCaption.textContent = link.dataset.caption || '';
    lbCount.textContent = items.length > 1 ? `${index + 1} / ${items.length}` : '';
    btnPrev.hidden = btnNext.hidden = items.length < 2;
  };

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a.media[data-gallery]');
    if (!link || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    items = [...document.querySelectorAll(`a.media[data-gallery="${link.dataset.gallery}"]`)];
    opener = link;
    show(items.indexOf(link));
    dialog.showModal();
    root.classList.add('lb-open');
    btnClose.focus();
  });

  btnPrev.addEventListener('click', () => show(index - 1));
  btnNext.addEventListener('click', () => show(index + 1));
  btnClose.addEventListener('click', () => dialog.close());

  dialog.addEventListener('keydown', (e) => {
    if (items.length < 2) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
  });

  // Clic fuori dall'immagine chiude
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog || e.target.classList.contains('lightbox__inner') || e.target.classList.contains('lightbox__figure')) {
      dialog.close();
    }
  });

  // Swipe su touch
  let touchX = null;
  dialog.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  dialog.addEventListener('touchend', (e) => {
    if (touchX === null || items.length < 2) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  dialog.addEventListener('close', () => {
    root.classList.remove('lb-open');
    lbImg.removeAttribute('src');
    if (opener) opener.focus();
  });
})();
