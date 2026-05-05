document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  const navToggle = document.querySelector('.nav-toggle');
  const themeToggle = document.querySelector('.theme-toggle');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    revealElements.forEach((el) => {
      if (el.getBoundingClientRect().top < triggerBottom) {
        el.classList.add('active');
      }
    });
  };

  navToggle?.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();
});
