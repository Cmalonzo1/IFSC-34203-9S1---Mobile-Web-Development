document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    type   : 'loop',   // Allows infinite scrolling
    perPage: 1,        // Only show one slide
    autoplay: true,    // Optional: make it slide automatically
    interval: 3000,    // 3 seconds between slides
  });
  splide.mount();
});