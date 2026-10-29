// Footer year
(function () {
  var el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();

// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  if (!toggle || !mobileNav) return;

  function closeNav() {
    toggle.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    mobileNav.setAttribute('inert', '');
    mobileNav.classList.remove('open');
  }

  function openNav() {
    toggle.setAttribute('aria-expanded', 'true');
    mobileNav.setAttribute('aria-hidden', 'false');
    mobileNav.removeAttribute('inert');
    mobileNav.classList.add('open');
  }

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Close on nav link click
  mobileNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeNav);
  });
})();

// Scroll reveal animations
(function () {
  var reveals = document.querySelectorAll('[data-reveal]');
  if (!reveals.length) return;

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    reveals.forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1,
    }
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });
})();

