$(document).ready(function () {

    // Initialize owl-search carousel
    var owlSearch = $('.owl-search');
    owlSearch.owlCarousel({
        margin: 10,
        loop: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            768: { items: 4 },
            1000: { items: 6 }
        }
    });

    $('.am-prev-search').click(function() {
        owlSearch.trigger('prev.owl.carousel');
    });

    $('.am-next-search').click(function() {
        owlSearch.trigger('next.owl.carousel');
    });

    // Initialize owl-consult carousel
    var owlConsult = $('.owl-consult');
    owlConsult.owlCarousel({
        loop: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });

    $('.am-prev-consult').click(function() {
        owlConsult.trigger('prev.owl.carousel');
    });

    $('.am-next-consult').click(function() {
        owlConsult.trigger('next.owl.carousel');
    });

    // Initialize owl-consult2 carousel
    var owlConsult2 = $('.owl-consult2');
    owlConsult2.owlCarousel({
        margin: 10,
        loop: false,
        responsive: {
            0: { items: 2 },
            768: { items: 3 },
            1000: { items: 6 }
        }
    });

    // Initialize owl-patients carousel
    var owlPatients = $('.owl-patients');
    owlPatients.owlCarousel({
        margin: 10,
        loop: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });

    $('.am-prev-patients').click(function() {
        owlPatients.trigger('prev.owl.carousel');
    });

    $('.am-next-patients').click(function() {
        owlPatients.trigger('next.owl.carousel');
    });

    // Initialize owl-plan carousel
    var owlPlan = $('.owl-plan');
    owlPlan.owlCarousel({
        margin: 15,
        loop: true,
        responsive: {
            0: { items: 1, stagePadding: 40 },
            768: { items: 1, stagePadding: 50 },
            1000: { items: 3, loop: false, margin: 30 }
        }
    });

});
