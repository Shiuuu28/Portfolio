const navLinks = document.querySelectorAll('.site-nav a');
const sections = document.querySelectorAll('main section');
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.querySelector('.contact-form');
const toast = document.getElementById('toast');

function handleScrollSpy() {
  let currentSection = 'home';

  sections.forEach(section => {
    const top = section.offsetTop - 140;
    if (window.scrollY >= top) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
  });
}

function scrollToSection(event) {
  const target = event.currentTarget.getAttribute('href');
  if (!target.startsWith('#')) return;

  event.preventDefault();
  const section = document.querySelector(target);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function updateProjectFilters(filter) {
  projectCards.forEach(card => {
    if (filter === 'all' || card.dataset.category === filter) {
      card.style.display = 'grid';
    } else {
      card.style.display = 'none';
    }
  });
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 3200);
}

function handleContactSubmit(event) {
  event.preventDefault();
  showToast('Thanks for reaching out! I will follow up soon.');
  contactForm.reset();
}

function initTypingEffect() {
  const typingElement = document.querySelector('.typing span');
  const roles = ['Frontend UI/UX Designer', 'Shopify Specialist', 'WordPress Expert', 'Performance-focused Developer'];
  let index = 0;
  let char = 0;
  let deleting = false;

  function type() {
    const currentText = roles[index];
    const displayed = currentText.slice(0, char);
    if (typingElement) typingElement.textContent = displayed;

    if (!deleting && char < currentText.length) {
      char += 1;
      setTimeout(type, 90);
    } else if (!deleting && char === currentText.length) {
      deleting = true;
      setTimeout(type, 1700);
    } else if (deleting && char > 0) {
      char -= 1;
      setTimeout(type, 40);
    } else {
      deleting = false;
      index = (index + 1) % roles.length;
      setTimeout(type, 500);
    }
  }

  if (typingElement) {
    type();
  }
}

window.addEventListener('scroll', handleScrollSpy);

window.addEventListener('DOMContentLoaded', () => {
  navLinks.forEach(link => link.addEventListener('click', scrollToSection));
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      updateProjectFilters(button.dataset.filter);
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }

  initTypingEffect();
  handleScrollSpy();
});

