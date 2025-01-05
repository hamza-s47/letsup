$(document).ready(function () {
    var owl = $('.owl-search');
    owl.owlCarousel({
        margin: 10,
        loop: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768:{
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

    $('.am-prev-search').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    // Custom "Next" button
    $('.am-next-search').click(function() {
        owl.trigger('next.owl.carousel');
    });
});

$(document).ready(function () {
    var owl = $('.owl-consult');
    owl.owlCarousel({
        loop: true,
        // items: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.am-prev-consult').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('.am-next-consult').click(function() {
        owl.trigger('next.owl.carousel');
    });
});

$(document).ready(function () {
    var owl = $('.owl-consult2');
    owl.owlCarousel({
        margin: 10,
        loop: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});

$(document).ready(function () {
    var owl3 = $('.owl-patients');
    
    owl3.owlCarousel({
        margin: 10,
        loop: true,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    
    $('.am-prev-patients').click(function() {
        owl3.trigger('prev.owl.carousel');
        
    });

    
    $('.am-next-patients').click(function() {
        owl3.trigger('next.owl.carousel');
    });
});
