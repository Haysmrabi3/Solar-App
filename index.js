const leftArrow  = document.getElementById("scroll-arrow-left");
const rightArrow = document.getElementById("scroll-arrow-right");
const slides = [
  document.getElementById("p-1"),
  document.getElementById("p-2"),
  document.getElementById("p-3")
];
const dotsContainer = document.getElementById('dotsContainer');
let currentIndex = 0;

slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.className = 'dot';
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

function updateDots() {
  Array.from(dotsContainer.children).forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === i);
  });
}

function goToSlide(i) {
  currentIndex = (i + slides.length) % slides.length; 
  showSlide(currentIndex);
  updateDots();
}

rightArrow.onclick = () => goToSlide(currentIndex + 1);
leftArrow.onclick  = () => goToSlide(currentIndex - 1);

goToSlide(0);