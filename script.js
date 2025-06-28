// 🌙 Dark mode toggle (Desktop)
const toggle = document.getElementById('darkToggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// 🌙 Dark mode toggle (Mobile)
const mobileToggle = document.getElementById('mobileDarkToggle');
mobileToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggle.textContent = mobileToggle.textContent = isDark ? '☀️' : '🌙';
});

// 🍔 Hamburger toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

// 🧠 Feature Tabs + Auto Scroll
const tabs = document.querySelectorAll('.feature-tab');
const panels = document.querySelectorAll('.feature-panel');
let currentFeature = 0;

// Manual click support
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    currentFeature = index; // allow auto scroll to continue from clicked one
    showFeature(index);
  });
});

function showFeature(index) {
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });
  panels.forEach((panel, i) => {
    panel.classList.toggle('active', i === index);
  });
}

// Auto scroll every 4 seconds
setInterval(() => {
  currentFeature = (currentFeature + 1) % tabs.length;
  showFeature(currentFeature);
}, 2000);


// 🚀 Scroll Reveal Animations
ScrollReveal().reveal('.feature-list', {
  origin: 'left',
  distance: '40px',
  duration: 800,
  delay: 200,
  easing: 'ease-out',
  opacity: 0,
  reset: true
});

ScrollReveal().reveal('.feature-display', {
  origin: 'right',
  distance: '40px',
  duration: 800,
  delay: 400,
  easing: 'ease-out',
  opacity: 0,
  reset: true
});

ScrollReveal().reveal('.timeline-step', {
  origin: 'bottom',
  distance: '40px',
  duration: 1000,
  delay: 200,
  interval: 200,
  easing: 'ease',
  opacity: 0,
  reset: true
});

// Billing toggle switch
const billingToggle = document.getElementById('billingToggle');
const priceEls = document.querySelectorAll('.price');

billingToggle.addEventListener('change', () => {
  priceEls.forEach(price => {
    const monthly = price.getAttribute('data-monthly');
    const yearly = price.getAttribute('data-yearly');
    price.textContent = billingToggle.checked ? yearly : monthly;
  });
});

ScrollReveal().reveal('.pricing-card', {
  interval: 200,
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  easing: 'ease',
  opacity: 0,
  reset: true
});


ScrollReveal().reveal('.testimonial-card', {
  interval: 200,
  origin: 'bottom',
  distance: '30px',
  duration: 800,
  easing: 'ease',
  opacity: 0,
  reset: true
});

ScrollReveal().reveal('.integration-card', {
  interval: 150,
  origin: 'bottom',
  distance: '30px',
  duration: 700,
  easing: 'ease',
  opacity: 0,
    reset: true
});




ScrollReveal().reveal('.cta-box', {
  origin: 'bottom',
  distance: '40px',
  duration: 1000,
  delay: 200,
  opacity: 0,
  easing: 'ease-out',
  reset: true
});



// Count-up animation on scroll
const counters = document.querySelectorAll('.count');
let statsAnimated = false;

function animateCounts() {
  if (statsAnimated) return;
  const section = document.getElementById('impact');
  const top = section.getBoundingClientRect().top;
  if (top < window.innerHeight - 100) {
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      const increment = target / 100;
      let count = 0;

      const update = () => {
        count += increment;
        if (count < target) {
          counter.textContent = Math.ceil(count).toLocaleString();
          requestAnimationFrame(update);
        } else {
          counter.textContent = target.toLocaleString();
        }
      };
      update();
    });
    statsAnimated = true;
  }
}

window.addEventListener('scroll', animateCounts);

ScrollReveal().reveal('.comparison-table', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  delay: 200,
  opacity: 0,
  easing: 'ease-out',
  reset: true
});
