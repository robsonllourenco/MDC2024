$(document).ready(function(){
    $(window).scroll(function(){
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, // Intervalo entre as transições (2 segundos)
        autoplaySpeed: 2000,   // Velocidade da transição automática (2 segundos)
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            200:{
                items: 1,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });      
});