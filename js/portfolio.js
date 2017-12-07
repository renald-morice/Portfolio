$( document ).ready(function() {
    
    /*-----------------------------------*/
    /* function scroll to id HTML Object */
    /*-----------------------------------*/
    function scrollTo(id) {
        var speed = 750; //Animation duration in ms
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
        
        $('.bottom_arrow').removeClass("slideOutUp");
        $('.bottom_arrow').addClass("slideInDown");
        
        setTimeout(function() {
            $('.bottom_arrow').removeClass("slideInDown");
            $('.bottom_arrow').addClass("slideOutUp");
        }, 1000);
    }
    
    //Starting with 1 sec of delay
    setTimeout(function() {
        $(".bottom_arrow").show();
        bottomArrowAnimation();
        setInterval( bottomArrowAnimation, 2000);
    }, 1000);
    
    /*----------------------*/
    /* Intro typed scripted */
    /*----------------------*/
    var typed = new Typed('#typed_intro_desc', {
        strings: [
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] *Pssst*",
            "[ <span class=\"orange_text_color\">Visiteur</span> ] Qui est-ce ?!" ,
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Bien le bonjour visiteur !",
            "[ <span class=\"orange_text_color\">Visiteur</span> ] Ah Rénald ! Salut à toi !" ,
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] J'imagine que si tu es présent ici c'est que t'aimerais en savoir plus sur moi ?",
            "[ <span class=\"orange_text_color\">Visiteur</span> ] Oui avec plaisir ! Qui es-tu en quelques lignes ?" ,
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Je suis un étudiant de 22 ans en double diplomation entre un établissement français et québecois.",
            "[ <span class=\"orange_text_color\">Visiteur</span> ] Comment ça ? Tu poursuis deux formations ?!" ,
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] En effet, je suis étudiant à l'ISEN Brest (France) qui est une école d'ingénieurs spécialisée dans le numérique et l'électronique.",
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] L'ISEN Brest est partenaire avec l'UQAC (Université du Québec à Chicoutimi) et propose à ses étudiants de partir à Chicoutimi pour réaliser un double diplôme à l'international.",
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Pour ma dernière année d'études, j'ai donc décidé de participer à cette aventure !",
            "[ <span class=\"orange_text_color\">Visiteur</span> ] Un petit nouveau français au Québec *rigole* ! Et tu comptes faire quoi maintenant ?" ,
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Je recherche un <b>un stage de fin d'études</b> au Québec dans le domaine vaste de l'informatique.",
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Alors si tu peux m'aider, je te serai très reconnaissant. Je te paierai même une bière !",
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Mais avant ça, il faut que mon profil t'intéresse !",
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Tu devrais trouver toutes les informations que tu cherches ici ! Si je t'intéresse, n'hésite pas à me contacter !",
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Je te souhaite une bonne lecture ;)"
        ],
        // typing speed
        typeSpeed: 20,
        // backspacing speed
        backSpeed: 5,
        // time before backspacing
        backDelay: 2500,
        // loop
        loop: false
    });
    
    /*-----------------*/
    /* ToTheTop button */
    /*-----------------*/
    setInterval( function(){
        
        if($("#section1").offset().top <= $(window).height() * 0.75 ){
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
