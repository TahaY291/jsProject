$(document).ready(function() {
    var currentSlide = 0;
    var slides = $('.slide');

    function showSlide() {
        slides.fadeOut(500);
        slides.eq(currentSlide).fadeIn(500);
    }

    $('.next').click(function() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide();
    });

    $('.prev').click(function() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide();
    });

    showSlide();
});