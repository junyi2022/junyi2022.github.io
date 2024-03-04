// const imageWidth = 500;
// const delay = 3000;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
// const imageContainer = document.querySelector('.projectFlow');
// const images = document.querySelectorAll('.projectDrawing');
// let currentImg = 1;
// let timeout;

// function updateImg() {
//   if (currentImg > images.length) {
//     currentImg = 1;
//   } else if (currentImg < 1) {
//     currentImg = images.length;
//   }

//   imageContainer.computedStyleMap.transform = `translateX(-${(currentImg -1) * imageWidth})`;

//   timeout = setTimeout(() => {
//     currentImg++;
//     updateImg();
//   }, delay);
// }


let currentSlide = 0;
const slides = document.querySelectorAll('.projectDrawing');

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  const offset = -currentSlide * 100;
  for (const slide of slides) {
    slide.style.transform = `translateX(${offset}%)`;
  }
}

prev.addEventListener('click', () => {
  changeSlide(-1);
});

next.addEventListener('click', () => {
  changeSlide(1);
});

