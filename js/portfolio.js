$( document ).ready(function() {
    
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

    intro_script_next_msg(1);
    
    /*-----------------*/
    /* ToTheTop button */
    /*-----------------*/
    setInterval( function(){
        
        if($(document).scrollTop() >= $(window).height() * 0.75 ){
            $('#to_the_top').removeClass("fadeOut");
            $('#to_the_top').addClass("fadeIn");
            $('#to_the_top').show();
        }
        else{
            $('#to_the_top').removeClass("fadeIn");
            $('#to_the_top').addClass("fadeOut");
        }
    }, 100);

});
