$( document ).ready(function() {
    
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

    /*-------------------------------*/
    /* Intro "Messenger like" script */
    /*-------------------------------*/
    
    function intro_script_next_msg(msg_nb){
        
        var animation = "";
        var element = $("#intro_desc #read_chat div.row:nth-child("+ msg_nb +")");
        var waitingTime = element.attr("data-waitingTime");
        
        if(element.hasClass("visitor")){
            
            var typed = new Typed('#input_chat #fakeInput #fakeInputSpan', {
                strings: [
                    element.find("div.msg_chat").text()
                ],
                // typing speed
                typeSpeed: 20,
                // backspacing speed
                backSpeed: 0,
                //don't show dynamic cursor (set in HTML)
                showCursor: false,
                // loop
                loop: false,
                //When it's finished
                onComplete: function(self) {
                    
                    setTimeout(function() {
                        
                        animation = "slideInRight";
                        $("#input_chat #fakeInput #fakeInputSpan").html("");
                        intro_script_display_next_msg(element, animation, msg_nb);
                    }, 1000);
                }
            });
            
        }
        else if(element.hasClass("me")){
            
            animation = "slideInLeft";
            intro_script_display_next_msg(element, animation, msg_nb)
        }
       
    }
    
    
    var needToScroll = true;
    
    
    function intro_script_display_next_msg(element, animation, msg_nb){
        
        element.show().addClass(animation);
        
        if( needToScroll )  $("#intro_desc #read_chat").scrollTop($("#intro_desc #read_chat")[0].scrollHeight);

        var waitingTime = element.attr("data-waitingTime");
        
        if(waitingTime != -1) {
            setTimeout(function() {
                intro_script_next_msg(msg_nb+1);
            }, waitingTime * 1000);
        }
    }
    
    $("#intro_desc #read_chat").on('scroll', function() {
        
        if( Math.abs($("#intro_desc #read_chat").scrollTop() + $("#intro_desc #read_chat").innerHeight() - $("#intro_desc #read_chat")[0].scrollHeight) <= 100 )
            needToScroll = true;
        else needToScroll = false;
    })

    setTimeout(function(){
        intro_script_next_msg(1);
    }, 1700);
    
    
    /*-------*/
    /* Close */
    /*-------*/
    $('.close').on("click", function() {
         $(this).parent().remove();
     });
    
    /*-------------*/
    /* Build alert */
    /*-------------*/
    setInterval( function(){
        $('#build_msg').show().addClass("fadeInDown");
    }, 600);
    
    
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
    
});
