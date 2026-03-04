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

// enhanced typing animation for the "I'm a ..." text with cursor
const typingElement = document.querySelector('.typing span');
const typingText = 'Frontend UI/UX Designer';
let typingIndex = 0;
let isDeleting = false;

function typeWriter() {
  if (!isDeleting && typingIndex < typingText.length) {
    typingElement.textContent += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeWriter, 80);
  } else if (isDeleting && typingIndex > 0) {
    typingElement.textContent = typingText.substring(0, typingIndex - 1);
    typingIndex--;
    setTimeout(typeWriter, 40);
  } else if (!isDeleting && typingIndex === typingText.length) {
    // Pause before deleting
    setTimeout(() => {
      isDeleting = true;
      typeWriter();
    }, 2000);
  } else if (isDeleting && typingIndex === 0) {
    isDeleting = false;
    setTimeout(typeWriter, 500);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // clear in case of reload
  if (typingElement) {
    typingElement.textContent = '';
    typeWriter();
  }

  // header and nav animation
  const header = document.querySelector('header');
  if (header) {
    header.classList.add('fade-in');
  }

  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach((link, idx) => {
    link.style.opacity = 0;
    setTimeout(() => {
      link.classList.add('fade-in');
    }, 150 * idx);
  });

  // smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

