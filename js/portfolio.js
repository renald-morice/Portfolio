$( document ).ready(function() {
    
    
    /*------------------------*/
    /* Bottom arrow animation */
    /*------------------------*/
    $('.bottom_arrow').hide();
    
    
    setTimeout( function() {
        
        setInterval( function() {
            $('.bottom_arrow').removeClass("animated fadeIn fadeout");
            setTimeout(function() {
                $('.bottom_arrow').addClass("animated slideInDown");
                $('.bottom_arrow').show();
            }, 50);
            setTimeout(function() {
                $('.bottom_arrow').removeClass("animated slideInDown");
            }, 1000);
            setTimeout(function() {
                $('.bottom_arrow').addClass("animated fadeOut");
            }, 1050);
            setTimeout(function() {
                $('.bottom_arrow').hide();
            }, 2000);
        }, 3000);
           
    }, 90000);
    /*------------------------*/
    
    
    var typed = new Typed('#typed_intro_desc', {
        strings: [
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] *Pssst*",
            "[ <span class=\"orange_text_color\">Visiteur</span> ] Qui est-ce ?!" ,
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Bien le bonjour visiteur !",
            "[ <span class=\"orange_text_color\">Visiteur</span> ] Ah Rénald ! Salut à toi !" ,
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] J'imagine que si tu es présent ici c'est que t'aimerais en savoir plus sur moi ?",
            "[ <span class=\"orange_text_color\">Visiteur</span> ] Oui avec plaisir ! Qui est-tu en quelques lignes ?" ,
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Je suis un étudiant de 22 ans en double diplomation entre un établissement français et québecois.",
            "[ <span class=\"orange_text_color\">Visiteur</span> ] Comment ça ? Tu poursuis deux formations ?!" ,
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] En effet, je suis étudiant à l'ISEN Brest (France) qui est une école d'ingénieurs spécialisée dans le numérique et l'électronique.",
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] L'ISEN Brest est partenaire avec l'UQAC (Université du Québec à Chicoutimi) et propose à ses étudiants de partir à Chicoutimi pour réaliser un double diplôme à l'internationnal.",
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Pour ma dernière année d'études, j'ai donc décidé de participer à cette aventure !",
            "[ <span class=\"orange_text_color\">Visiteur</span> ] Un petit nouveau français au Québec *rigole* ! Et tu comptes faire quoi maintenant ?" ,
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Je recherche un <b>un stage de fin d'études</b> au Québec dans le domaine vaste de l'informatique.",
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Alors si tu peux m'aider, je te serai très reconnaissant. Je te paierai même une bière !",
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Mais avant ça, il faut que mon profil t'intéresse !",
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Tu devrais trouver toutes les informations que tu cherches ici ! Si je t'intéresse, n'hésite pas à me contacter !",
            "[ <span class=\"blue_text_color\">Rénald Morice</span> ] Je te souhaite une bonne lecture ;)"],
        // typing speed
        typeSpeed: 20,
        // backspacing speed
        backSpeed: 5,
        // time before backspacing
        backDelay: 2500,
        // loop
        loop: false
  });

});
