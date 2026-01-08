
let index = 0;
function moveSlide(step) {
  const slides = document.querySelector('.slides');
  const total = slides.children.length;
  index = (index + step + total) % total;
  slides.style.transform = `translateX(-${index * 100}%)`;
}
