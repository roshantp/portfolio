// Homepage Comment Slider
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("client-box");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  let y = slides[slideIndex-1]
  y.style.display = "flex";  
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



// Homepage Tablet Plant Gallery New Feature
tabletPlantSlides(slideIndex);

function tabletPlantSlides(n) {
  let i;
  let slides = document.getElementsByClassName("tablet-plants");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  let y = slides[slideIndex-1]
  y.style.display = "flex";  
}

function plusTabletPlantSlides(n) {
  tabletPlantSlides(slideIndex += n);
}

function currentSlide(n) {
  tabletPlantSlides(slideIndex = n);
}



// Homepage Tablet Plant Gallery Best Seller
tabletPlantSlides2(slideIndex);

function tabletPlantSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("tablet-plants-2");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  let y = slides[slideIndex-1]
  y.style.display = "flex";  
}

function plusTabletPlantSlides2(n) {
  tabletPlantSlides2(slideIndex += n);
}

function currentSlide(n) {
  tabletPlantSlides2(slideIndex = n);
}



// Homepage Mobile Plant Gallery New Feature
mobilePlantSlides(slideIndex);

function mobilePlantSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mobile-plant-card");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  let y = slides[slideIndex-1]
  y.style.display = "flex";  
}

function plusMobilePlantSlides(n) {
  mobilePlantSlides(slideIndex += n);
}

function currentSlide(n) {
  mobilePlantSlides(slideIndex = n);
}


// Homepage Mobile Plant Gallery Best Seller
mobilePlantSlides2(slideIndex);

function mobilePlantSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mobile-plant-card-2");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  let y = slides[slideIndex-1]
  y.style.display = "flex";  
}

function plusMobilePlantSlides2(n) {
  mobilePlantSlides2(slideIndex += n);
}

function currentSlide(n) {
  mobilePlantSlides2(slideIndex = n);
}