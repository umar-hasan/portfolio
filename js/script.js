$(document).ready(function(){

    $("#navbar-container").hide();
    $("#portfolio-container").hide();
    $("#about-container").hide();

    $(".card").hover(function(){
        $(this).addClass("shadow-lg").css('cursor', 'pointer');
    }, function(){
        $(this).removeClass("shadow-lg");
    });

    $("#portfolio-card").click(function(){
        $("#navbar-container .portfolio-link").hide();
        $("#navbar-container .about-link").show();
        $(this).removeClass("fadeInLeft");
        $("#about-card").removeClass("fadeInDown");
        $("#resume-card").removeClass("fadeInRight");
        $(this).addClass("fadeOutLeft");
        $("#about-card").addClass("fadeOutDown");
        $("#resume-card").addClass("fadeOutRight");
        
        $("#home-container").delay(1000).hide(function(){
            $("#navbar-container").fadeIn();
            $("#portfolio-container").fadeIn();
        });
    });

    $("#about-card").click(function(){
        $("#navbar-container .about-link").hide();
        $("#navbar-container .portfolio-link").show();
        $(this).removeClass("fadeInDown");
        $("#portfolio-card").removeClass("fadeInLeft");
        $("#resume-card").removeClass("fadeInRight");
        $(this).addClass("fadeOutDown");
        $("#portfolio-card").addClass("fadeOutLeft");
        $("#resume-card").addClass("fadeOutRight");
        
        
        $("#home-container").delay(1000).hide(function(){
            $("#navbar-container").fadeIn();
            $("#about-container").fadeIn();
        });
    });

    $("#resume-card").click(function(){
        window.open("https://drive.google.com/open?id=1YCWJgloRuL7wrw86dW4bGjPrUMweFcPM");
    });
    

    

    if($("#navbar-container").css('diplay') != 'none') {
        $(".home-link").click(function(){
            $("#portfolio-card").removeClass("fadeOutLeft");
            $("#about-card").removeClass("fadeOutDown");
            $("#resume-card").removeClass("fadeOutRight");
            $("#portfolio-card").addClass("fadeInLeft");
            $("#about-card").addClass("fadeInDown");
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
            $(".about-link").fadeOut();
            $(".about-link").delay(500).hide(function(){
                $("#navbar-container .portfolio-link").fadeIn();
                $("#portfolio-container").delay(500).hide();
                $("#about-container").fadeIn();
            });
            
        });

        $(".portfolio-link").click(function(){
            $("#about-container").fadeOut();
            $(".portfolio-link").fadeOut();
            
            $("#about-container").delay(500).hide();
            $(".portfolio-link").delay(500).hide(function(){
                $("#navbar-container .about-link").fadeIn();
                $("#portfolio-container").fadeIn();
            });
            
        });
    }


    

});