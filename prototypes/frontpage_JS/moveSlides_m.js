
function autoslide_m() {
  plusSlides_m(1);
  setTimeout(autoslide_m, 6000);
}

let slideIndex = 1;
showSlides_m(slideIndex);

function plusSlides_m(n) {
  showSlides_m(slideIndex += n);
}

function currentSlide_m(n) {
  showSlides_m(slideIndex = n);
}

function showSlides_m(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides_m");
  let dots = document.getElementsByClassName("dot_m");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_m", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active_m";
}
