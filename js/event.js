let scrollAwal = window.pageYOffset

window.onscroll = function () {
    const navbar = document.querySelector('#navbar')
    let scrollAkhir = window.pageYOffset

    if (scrollAwal > scrollAkhir) {
        navbar.classList.remove('hide-navbar');
      } else {
        navbar.classList.add('hide-navbar');
      }
    
      scrollAwal = scrollAkhir
}
//  Slider

// Get carousel element
var carousel = document.querySelector('.carousel');

// Get carousel items
var carouselItems = carousel.querySelectorAll('.carousel-item');

// Get carousel controls
var carouselControlPrev = carousel.querySelector('.carousel-control-prev');
var carouselControlNext = carousel.querySelector('.carousel-control-next');

// Set initial active item
var activeItemIndex = 0;
carouselItems[activeItemIndex].classList.add('active');

// Initialize the interval variable
var interval;

// Add event listener to prev control
carouselControlPrev.addEventListener('click', function(e) {
  e.preventDefault();
  // Clear the previous interval
  clearInterval(interval);
  carouselItems[activeItemIndex].classList.remove('active');
  activeItemIndex--;
  if (activeItemIndex < 0) {
    activeItemIndex = carouselItems.length - 1;
  }
  carouselItems[activeItemIndex].classList.add('active');
  // Start the interval again
  interval = setInterval(showNextSlide, 8000);
});

// Add event listener to next control
carouselControlNext.addEventListener('click', function(e) {
  e.preventDefault();
  // Clear the previous interval
  clearInterval(interval);
  carouselItems[activeItemIndex].classList.remove('active');
  activeItemIndex++;
  if (activeItemIndex >= carouselItems.length) {
    activeItemIndex = 0;
  }
  carouselItems[activeItemIndex].classList.add('active');
  // Start the interval again
  interval = setInterval(showNextSlide, 8000);
});

// Function to show next slide
function showNextSlide() {
  carouselItems[activeItemIndex].classList.remove('active');
  activeItemIndex++;
  if (activeItemIndex >= carouselItems.length) {
    activeItemIndex = 0;
  }
  carouselItems[activeItemIndex].classList.add('active');
}

// Start the interval for automatic slideshow
interval = setInterval(showNextSlide, 8000);


const gambar = document.getElementsByTagName('img')[0];
gambar.addEventListener('click', function() {
    alert('Anda menekan gambar!');
});
