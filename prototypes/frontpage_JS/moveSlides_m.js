
function autoslide_m() {
  plusSlides_m(1);
  setTimeout(autoslide_m, 6000);
}

let slideIndex_m = 1;
showSlides_m(slideIndex_m);

function plusSlides_m(n) {
  showSlides_m(slideIndex_m += n);
}

function currentSlide_m(n) {
  showSlides_m(slideIndex_m = n);
}

function showSlides_m(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides_m");
  let dots = document.getElementsByClassName("dot_m");
  if (n > slides.length) {slideIndex_m = 1}    
  if (n < 1) {slideIndex_m = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_m", "");
  }
  slides[slideIndex_m-1].style.display = "block";  
  dots[slideIndex_m-1].className += " active_m";
}
