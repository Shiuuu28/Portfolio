// highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// typing animation for the "I'm a ..." text
const typingElement = document.querySelector('.typing span');
const typingText = 'Frontend UI/UX Designer';
let typingIndex = 0;

function typeWriter() {
  if (typingIndex < typingText.length) {
    typingElement.textContent += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // clear in case of reload
  if (typingElement) {
    typingElement.textContent = '';
    typeWriter();
  }
});