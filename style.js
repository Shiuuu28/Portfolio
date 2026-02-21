// simple typing animation for the home section
const words = ['Developer', 'UI/UX Designer', 'Frontend'];
let txt = '';
let wordIndex = 0;
let letterIndex = 0;
const typingElement = document.querySelector('.typing span');

function type() {
    if (letterIndex < words[wordIndex].length) {
        txt += words[wordIndex][letterIndex];
        typingElement.textContent = txt;
        letterIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 2000);
    }
}
function erase() {
    if (letterIndex > 0) {
        txt = txt.slice(0, -1);
        typingElement.textContent = txt;
        letterIndex--;
        setTimeout(erase, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    if (typingElement) {
        type();
    }
});