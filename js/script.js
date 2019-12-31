$(document).ready(function(){
    $("#navbar-container").hide();
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
        
        $("#home-container").delay(500).hide(function(){
            $("#navbar-container").fadeIn();
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
        
        $("#home-container").delay(500).hide(function(){
            $("#navbar-container").fadeIn();
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
        });

        $(".about-link").click(function(){
            $(".about-link").fadeOut();
            $(".about-link").delay(500).hide(function(){
                $("#navbar-container .portfolio-link").fadeIn();
            });
        });

        $(".portfolio-link").click(function(){
            $(".portfolio-link").fadeOut();
            $(".portfolio-link").delay(500).hide(function(){
                $("#navbar-container .about-link").fadeIn();
            });
        });
    }



});