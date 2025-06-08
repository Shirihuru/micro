let slideIndex = 1;
let autoSlideInterval = null;
showSlides(slideIndex);
setBodyBg(slideIndex);
startAutoSlide();

function plusSlides(n) {
  showSlides(slideIndex += n);
  setBodyBg(slideIndex);
  restartAutoSlide();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  setBodyBg(slideIndex);
  restartAutoSlide();
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].classList.add("active");
  if (dots[slideIndex-1]) dots[slideIndex-1].className += " active";
}

function setBodyBg(n) {
  const body = document.body;
  body.classList.remove('bg-main', 'bg-second', 'bg-third');
  if (n === 1) body.classList.add('bg-main');
  else if (n === 2) body.classList.add('bg-second');
  else if (n === 3) body.classList.add('bg-third');
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    plusSlides(1);
  }, 4000); // Change slide every 4 seconds
}

function restartAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}
