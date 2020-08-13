$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },

            1000:{
                items:2
            }
        }
    });
    $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href');            
            var top = $(id).offset().top;
            $("html, body").animate({scrollTop: top}, 1500);
    });
    $(".hire-btn").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href');            
            var top = $(id).offset().top;
            $("html, body").animate({scrollTop: top}, 1500);
    });
    // popup
    $('.portimg').on("click touch", function(){
        $('.popup-fade').fadeIn();

        var imgItem = $(this).data("src");
        console.log(imgItem);
        var imgHeight = $(this).height() + 40;
        var imgWidth = $(this).width() + 40;
        var modalImg = $('.modal-pic');

        modalImg.attr("src", imgItem );

        if( $(window).width() > 970){
            $('.popup').css({"height" : imgHeight, "width" : imgWidth});

        }

    });

    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });
    //menu
    $('#nav-toggle').on('click', function(){
        $('#nav-toggle').toggleClass('active');
        $('.header').toggleClass('active-menu');

    })
});