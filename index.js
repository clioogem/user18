
// -------- FOR SLIDESHOW -------

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  if (slideIndex > 1) {
    slides[slideIndex - 1].style.animation = "fade 1.5s ease-in-out";


    setTimeout(() => {
      slides[slideIndex - 1].style.animation = "none";
    }, 1500);
  }
}


showSlides();

let intervalId = setInterval(showSlides, 3000); 


// ------- FOR FADE IN EFFECT WELCOME MESSAGE ---------

 window.addEventListener('load', function() {
    var welcomeElements = document.querySelectorAll('.welcome h1, .welcometext p');

    for (var i = 0; i < welcomeElements.length; i++) {
      setTimeout(function(element) {
        element.style.animationDelay = '0.5s';
        element.style.animationFillMode = 'forwards';
        element.style.animationPlayState = 'running';
      }, 500 * i, welcomeElements[i]);
    }
 });

// ------------FOR USER COUNT ------------------

let valueDisplays = document.querySelectorAll(".counter");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


// ---------FOR FEATURES ---------

