$( document ).ready(function() {
    
    /*----------------*/
    /* Loading Screen */
    /*----------------*/
    
    setTimeout(function(){
        $("#loading_screen").addClass("fadeOut");
    }, 500);
    
    setTimeout(function(){
        $("#loading_screen").hide();
    }, 1000);
    
    /*---------------*/
    /* resize window */
    /*---------------*/
    
    var window_width = $(window).width();
    var responsive_nav_triggered = false;
    
    function resize_window(){
        
        if ($(window).width() < 992) {
            $('nav #nav_wrap').show();
            if( !responsive_nav_triggered ) $('nav ul').hide();
            $('nav ul li').css('display', 'block');
            
            responsive_nav_triggered = true;
        }
        else{
            $('nav #nav_wrap').hide();
            $('nav ul').show();
            $('nav ul li').css('display', 'inline-block');
            
            responsive_nav_triggered = false;
        }
        
        window_width = $(window).width();
    }
    
    resize_window();
    
    $(window).on('resize', function(){
        resize_window();
    });
    
    /*-------------------*/
    /* responsive navbar */
    /*-------------------*/
    
    $('nav #nav_wrap').on("click", function() {
        var list = $('nav ul'); 
        
        if ( list.css('display') == 'none' ) list.slideDown();
        else list.slideUp();
     });
    
    /*-----------------------------------*/
    /* function scroll to id HTML Object */
    /*-----------------------------------*/
    function scrollTo(id) {
        var speed = 1000; //Animation duration in ms
        $('html, body').animate( { scrollTop: $(id).offset().top }, speed );
        return false;
    }
    
    //scrollTo class scroll to data-scrollTo attribute's content
    $('.scrollTo').on("click", function() {
        scrollTo($(this).attr("data-scrollTo"));
        
        if($(this).is("nav ul li") && responsive_nav_triggered) $('nav ul').slideUp();
    });
    
    
    /*------------------------*/
    /* Bottom arrow animation */
    /*------------------------*/
    
    function bottomArrowAnimation(){
        
        $('#go_down_arrow div').removeClass("slideOutUp");
        $('#go_down_arrow div').addClass("slideInDown");
        
        setTimeout(function() {
            $('#go_down_arrow div').removeClass("slideInDown");
            $('#go_down_arrow div').addClass("slideOutUp");
        }, 1000);
    }
    
    bottomArrowAnimation();
    setInterval( bottomArrowAnimation, 2000);
    
    /*-------*/
    /* Close */
    /*-------*/
    $('.close').on("click", function() {
         $(this).parent().remove();
     });
    
    /*-----------*/
    /* Reveal JS */
    /*-----------*/
    
    window.sr = ScrollReveal();
    
    $(".reveal").each(function() {
        
        sr.reveal($(this), {
            origin: $(this).attr("data-RevealOrigin"),
            distance: "5vw",
            easing: 'ease-in-out',
            duration: 800,
            scale: 1,
            delay: $(this).attr("data-RevealDelay")
        });
        
    });
    
    /*------------------*/
    /* Projects details */
    /*------------------*/
    $('.card .text_container button').on("click", function() {
        $("body").addClass("showing_modal");
        $('.card_desc[data-CardDescNumber="'+$(this).closest('.card').attr('data-CardNumber')+'"]').fadeIn("fast");
     });
    
    $('.card_desc_close').on("click", function() {
        $("body").removeClass("showing_modal");
        $(this).closest('.card_desc').fadeOut("fast");
    });
    
});
