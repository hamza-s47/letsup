$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 10,
        loop: true,
        nav: true,
        navText: [$('.am-next'),$('.am-prev')],

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 7
            }
        }
    });
});

// $(".owl-carousel").owlCarousel({
//     navText: [$('.am-next'),$('.am-prev')]
 
// });