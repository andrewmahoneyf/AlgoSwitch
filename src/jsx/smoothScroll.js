import $ from 'jquery';

// Smooth Scrolling for nav links
$(function () {
    $('a[href*="#"]:not([href="#"])').on('click touchstart', function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });
});