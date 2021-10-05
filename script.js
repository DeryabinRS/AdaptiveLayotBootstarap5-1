window.addEventListener("DOMContentLoaded", () => {

    AOS.init();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoWidth:true,
        nav: false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })

})


