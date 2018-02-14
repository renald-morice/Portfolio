function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}


$( document ).ready(function() {
    
    /*--------------------*/
    /* Language Selection */
    /*--------------------*/
    
    var selectedLanguage = "";
    
    function translation(language){
        
        if(language != selectedLanguage){

            selectedLanguage = language;

            $.getJSON('translate.json', function(fileContent) {
                $('[data-TradID]').each(function() {
                    $(this).html(fileContent.traductions[$(this).attr('data-TradID')][selectedLanguage]);
                });
            });
        }
    }
    
    //On language change
    $('.lang').click(function() {
        setCookie("lang", $(this).attr('data-lang'), 365);
        translation($(this).attr('data-lang'));
    });
    
    //Init language
    if(getCookie("lang") == "en" ) translation(getCookie("lang"));
    else selectedLanguage = "fr";
    

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
        
        //Resize youtube video
        $('.yt_video iframe').each(function(){
            $(this).parent().css("height", $(this).width()*0.5625);
        });
        
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
    $(document).on('click','.scrollTo', function() {
        scrollTo($(this).attr("data-scrollTo"));
        
        if($(this).is("nav ul li") && responsive_nav_triggered) $('nav ul').slideUp();
    });

    /*-----------*/
    /* Reveal JS */
    /*-----------*/
    
    window.sr = ScrollReveal();
    
    setTimeout(function(){
        
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
        
    }, 500);
    
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
