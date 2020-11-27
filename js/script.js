$(document).ready(function(){

    $("#navbar-container").hide();
    $("#navbar-mobile-container").hide();
    $("#portfolio-container").hide();
    $("#about-container").hide();

    $("#navbar-mobile-toggle").hide();
    $("#navbar-mobile-items-wrapper").hide();

    
    $(window).resize(function(){
        if (window.matchMedia("(min-width: 992px)").matches) {
            if ($("#navbar-mobile-container").css('display') != 'none') {
                $("#navbar-container").show();
                $("#navbar-mobile-container").hide();
            }
        }
        else {
            if ($("#navbar-container").css('display') != 'none') {
                $("#navbar-mobile-container").show();
                $("#navbar-container").hide();
            }
        }
    });
    

    function initialBar() {
        if (window.matchMedia("(min-width: 992px)").matches) {
            $("#navbar-container").fadeIn();
        }
        else {
            $("#navbar-mobile-container").fadeIn();
        }
    }
    
    

    $(".card").hover(function(){
        $(this).addClass("shadow-lg").css('cursor', 'pointer');
    }, function(){
        $(this).removeClass("shadow-lg");
    });

    $("#portfolio-card").click(function(){
        $("#navbar-container .portfolio-link").hide();
        $("#portfolio-mobile").hide();
        $("#about-mobile").show();
        $("#navbar-container .about-link").show();
        $(this).removeClass("fadeInLeft");
        $("#about-card").removeClass("fadeInDown");
        $("#resume-card").removeClass("fadeInRight");
        aboutTransitionOut();
        $(this).addClass("fadeOutLeft");
        $("#about-card").addClass("fadeOutDown");
        $("#resume-card").addClass("fadeOutRight");
        
        $("#home-container").delay(1000).hide(function(){
            initialBar();
            $("#portfolio-container").fadeIn();
        });
    });

    $("#about-card").click(function(){
        $("#navbar-container .about-link").hide();
        $("#about-mobile").hide();
        $("#portfolio-mobile").show();
        $("#navbar-container .portfolio-link").show();
        $("#portfolio-card").removeClass("fadeInLeft");
        $("#resume-card").removeClass("fadeInRight");
        aboutTransitionOut();
        $("#portfolio-card").addClass("fadeOutLeft");
        $("#resume-card").addClass("fadeOutRight");
        
        
        $("#home-container").delay(1000).hide(function(){
            initialBar();
            $("#about-container").fadeIn();
        });
    });

    $("#resume-card").click(function(){
        window.open("https://drive.google.com/file/d/1U3sMYHfYWYGTJP2o2dbgb7qzcrA11zp2/view?usp=sharing");
    });
    

    

    if($("#navbar-container").css('diplay') != 'none') {
        $(".home-link").click(function(){
            $("#portfolio-card").removeClass("fadeOutLeft");
            $("#resume-card").removeClass("fadeOutRight");
            $("#portfolio-card").addClass("fadeInLeft");
            aboutTransitionIn();
            $("#resume-card").addClass("fadeInRight");
            $("#navbar-container").fadeOut();
            $("#navbar-container").delay(500).hide();
            $("#home-container").delay(500).show();

            if ($("#portfolio-container").css('display') != 'none') {
                $("#portfolio-container").fadeOut();
                $("#portfolio-container").delay(500).hide();
            }

            if ($("#about-container").css('display') != 'none') {
                $("#about-container").fadeOut();
                $("#about-container").delay(500).hide();
            }
        });

        $(".about-link").click(function(){
            $("#portfolio-container").fadeOut();
            $("#about-mobile").hide();
            $("#portfolio-mobile").show();
            $(".about-link").fadeOut();
            $(".about-link").delay(500).hide(function(){
                $("#navbar-container .portfolio-link").fadeIn();
                $("#portfolio-container").delay(500).hide();
                $("#about-container").fadeIn();
            });
            
        });

        $(".portfolio-link").click(function(){
            $("#about-container").fadeOut();
            $("#portfolio-mobile").hide();
            $("#about-mobile").show();
            $(".portfolio-link").fadeOut();
            $("#about-container").delay(500).hide();
            $(".portfolio-link").delay(500).hide(function(){
                $("#navbar-container .about-link").fadeIn();
                $("#portfolio-container").fadeIn();
            });
            
        });
    }

    if ($("#navbar-mobile-container").css('diplay') != 'none') {
        $("#navbar-button").click(function(){
            $("#navbar-mobile-toggle").show();
            if ($("#portfolio-container").css('display') != 'none') {
                $("#portfolio-mobile").hide();
            }
            if ($("#about-container").css('display') != 'none') {
                $("#about-mobile").hide();
            }
            $("#navbar-mobile-items-wrapper").delay(500).show();

        });

        $("#close-icon-wrapper .close").click(function(){
            $("#navbar-mobile-toggle").hide();
        });

        $("#navbar-mobile-toggle").click(function(){
            $("#navbar-mobile-toggle").hide();
        });

        $("#home-mobile").click(function(){
            $("#navbar-mobile-toggle").hide();
            $("#portfolio-card").removeClass("fadeOutLeft");
            $("#resume-card").removeClass("fadeOutRight");
            $("#portfolio-card").addClass("fadeInLeft");
            $("#resume-card").addClass("fadeInRight");
            aboutTransitionIn();
            $("#navbar-container").fadeOut();
            $("#navbar-container").delay(500).hide();
            $("#navbar-mobile-container").delay(500).hide();
            $("#home-container").delay(500).show();

            if ($("#portfolio-container").css('display') != 'none') {
                $("#portfolio-container").fadeOut();
                $("#portfolio-container").delay(500).hide();
            }

            if ($("#about-container").css('display') != 'none') {
                $("#about-container").fadeOut();
                $("#about-container").delay(500).hide();
            }
        });

        $("#about-mobile").click(function(){
            $("#navbar-mobile-toggle").hide();
            $("#about-mobile").hide();
            $("#portfolio-mobile").show();
            $("#portfolio-container").fadeOut();
            $(".about-link").fadeOut();
            $(".about-link").delay(500).hide(function(){
                $("#navbar-container .portfolio-link").fadeIn();
                $("#portfolio-container").delay(500).hide();
                $("#about-container").fadeIn();
            });
            
        });

        $("#portfolio-mobile").click(function(){
            $("#navbar-mobile-toggle").hide();
            $("#portfolio-mobile").hide();
            $("#about-mobile").show();
            $("#about-container").fadeOut();
            $(".portfolio-link").fadeOut();
            $("#about-container").delay(500).hide();
            $(".portfolio-link").delay(500).hide(function(){
                $("#navbar-container .about-link").fadeIn();
                $("#portfolio-container").fadeIn();
            });
            
        });

        $("#resume-mobile").click(function(){
            window.open("https://drive.google.com/file/d/1U3sMYHfYWYGTJP2o2dbgb7qzcrA11zp2/view?usp=sharing");
        });
    }
    

    function aboutTransitionIn() {
        $("#about-card").removeClass("fadeOutRight");
        $("#about-card").removeClass("fadeOutDown");
        if (window.matchMedia("(min-width: 1200px)").matches) {
            $("#about-card").addClass("fadeInDown");
        }
        else {
            $("#about-card").addClass("fadeInRight");
        }
    }

    function aboutTransitionOut() {
        $("#about-card").removeClass("fadeInDown");
        $("#about-card").removeClass("fadeInRight");
        if (window.matchMedia("(min-width: 1200px)").matches) {
            $("#about-card").addClass("fadeOutDown");
        }
        else {
            $("#about-card").addClass("fadeOutRight");
        }
    }

});
