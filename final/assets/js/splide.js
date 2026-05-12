document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#spiral-carousel', {
        type: 'fade',
        rewind: true,
        arrows: false,
        pagination: false,
        autoHeight: true,
        speed: 600,
    }).mount();

    const navButtons = document.querySelectorAll('.world-select');

    // Set first button as active
    navButtons[0].classList.add('is-active');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            splide.go(parseInt(index));
            
            // UI Update: Active state
            navButtons.forEach(btn => btn.classList.remove('is-active'));
            this.classList.add('is-active');
        });
    });
});