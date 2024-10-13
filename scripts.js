$(document).ready(function(){
    $('.feature-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1.1 // 1.2 items on mobile
            },
            600: {
                items: 2 // 2 items on tablets
            },
            1000: {
                items: 3 // 3 items on larger screens
            }
        }
    });
});

$(document).ready(function(){
    $('.gallery-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false, // Remove dots
        responsive: {
            0: {
                items: 1 // 1 item on mobile
            },
            600: {
                items: 2 // 2 items on tablets
            },
            1000: {
                items: 1 // 1 item on larger screens
            }
        }
    });
});
