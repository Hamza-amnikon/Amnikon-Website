/* ============================================================
   AMNIKON — Global JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────────
     1. NAVBAR — Scroll shrink + hamburger + dropdowns
  ────────────────────────────────────────────── */
  const navbar     = document.querySelector('.navbar');
  const hamburger  = document.querySelector('.nav-hamburger');
  const navMenu    = document.querySelector('.nav-menu');
  const navActions = document.querySelector('.nav-actions');

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMenu?.classList.toggle('mobile-open');
      navActions?.classList.toggle('mobile-open');
    });

    // Mobile dropdown toggle
    document.querySelectorAll('.nav-menu li.has-dropdown > a').forEach(link => {
      link.addEventListener('click', e => {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          link.closest('li').classList.toggle('open');
        }
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!e.target.closest('.navbar')) {
        hamburger.classList.remove('open');
        navMenu?.classList.remove('mobile-open');
        navActions?.classList.remove('mobile-open');
      }
    });
  }

  /* ──────────────────────────────────────────────
     2. ACTIVE NAV LINK — highlight current page
  ────────────────────────────────────────────── */
  const currentPath = window.location.pathname.replace(/\\/g, '/');
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href && currentPath.includes(href.replace('../', '').replace('.html', ''))) {
      link.classList.add('active');
    }
  });

  /* ──────────────────────────────────────────────
     3. SCROLL REVEAL — Intersection Observer
  ────────────────────────────────────────────── */
  const revealSelectors = '.reveal, .reveal-left, .reveal-right, .reveal-stagger';
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(revealSelectors).forEach(el => observer.observe(el));

  /* ──────────────────────────────────────────────
     4. COUNTER ANIMATION
  ────────────────────────────────────────────── */
  function animateCounter(el) {
    const target   = parseFloat(el.dataset.target) || 0;
    const suffix   = el.dataset.suffix || '';
    const decimal  = el.dataset.decimal === 'true';
    const duration = 2000;
    const steps    = 60;
    const increment = target / steps;
    let current    = 0;
    let step       = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, target);
      el.textContent = (decimal ? current.toFixed(1) : Math.floor(current)) + suffix;
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

  /* ──────────────────────────────────────────────
     5. VIDEO MODAL
  ────────────────────────────────────────────── */
  const openVideoBtn  = document.getElementById('openVideo');
  const videoModal    = document.getElementById('videoModal');
  const modalVideo    = document.getElementById('modalVideo');
  const closeModal    = document.querySelector('.modal-close');

  function openModal() {
    if (!videoModal) return;
    videoModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (modalVideo) modalVideo.play();
  }

  function closeModalFn() {
    if (!videoModal) return;
    videoModal.classList.remove('open');
    document.body.style.overflow = '';
    if (modalVideo) { modalVideo.pause(); modalVideo.currentTime = 0; }
  }

  openVideoBtn?.addEventListener('click', e => { e.preventDefault(); openModal(); });
  closeModal?.addEventListener('click', closeModalFn);
  videoModal?.addEventListener('click', e => { if (e.target === videoModal) closeModalFn(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalFn(); });

  /* ──────────────────────────────────────────────
     6. CHATBOT
  ────────────────────────────────────────────── */
  const chatToggle  = document.getElementById('chatbot-toggle');
  const chatWindow  = document.getElementById('chatbot-window');
  const chatInput   = document.getElementById('chatbot-input');
  const chatSend    = document.getElementById('chatbot-send');
  const chatMsgs    = document.getElementById('chatbot-messages');

  function addMessage(text, type = 'bot') {
    if (!chatMsgs) return;
    const msg = document.createElement('div');
    msg.className = `chat-msg ${type}`;
    msg.textContent = text;
    chatMsgs.appendChild(msg);
    chatMsgs.scrollTop = chatMsgs.scrollHeight;
  }

  const botReplies = [
    "Thanks for reaching out! Our team will get back to you shortly.",
    "Great question! You can contact us at sales@amnikon.com for more details.",
    "I'd be happy to help. Could you tell me more about what you're looking for?",
    "We specialize in Managed IT, Cybersecurity, and Cloud Solutions. Which interests you?",
    "You can schedule a free consultation at your convenience — just click 'Meeting' above!"
  ];

  let replyIndex = 0;

  function sendMessage() {
    const text = chatInput?.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    chatInput.value = '';
    setTimeout(() => {
      addMessage(botReplies[replyIndex % botReplies.length]);
      replyIndex++;
    }, 800);
  }

  chatToggle?.addEventListener('click', () => {
    chatToggle.classList.toggle('open');
    chatWindow?.classList.toggle('open');
  });

  chatSend?.addEventListener('click', sendMessage);
  chatInput?.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });

  /* ──────────────────────────────────────────────
     7. CORE VALUES TABS (About page)
  ────────────────────────────────────────────── */
  const valueItems = document.querySelectorAll('.value-item');
  const valuePanels = document.querySelectorAll('.value-panel');

  if (valueItems.length) {
    valueItems.forEach(item => {
      item.addEventListener('click', () => {
        const target = item.dataset.value;
        valueItems.forEach(i => i.classList.remove('active'));
        valuePanels.forEach(p => p.classList.remove('active'));
        item.classList.add('active');
        document.getElementById('panel-' + target)?.classList.add('active');
      });
    });
  }

  /* ──────────────────────────────────────────────
     8. LOGO SLIDER — pause on hover
  ────────────────────────────────────────────── */
  const logoTrack = document.querySelector('.logo-track');
  if (logoTrack) {
    logoTrack.addEventListener('mouseenter', () => logoTrack.style.animationPlayState = 'paused');
    logoTrack.addEventListener('mouseleave', () => logoTrack.style.animationPlayState = 'running');
  }

});
