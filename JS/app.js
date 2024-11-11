$(document).ready(function(){
    $('.reviews-slider').slick({
       arrows: false,
       dots: true,
       appendDots: '.review-dots ',
       dotsClass: 'dots',
    });
});


document.querySelector('.hamberger').addEventListener('click', function() {
    document.querySelector('.mobile-nav').classList.toggle('active');
});
