/*FUNCAO QUE CONTROLE O EFEITO DO MENU SUPERIOR*/
jQuery(window).on("load", function() {

    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 500) {
            jQuery(".navbar-box").addClass("ativar");
            jQuery(".menu-top").addClass("fade");
            jQuery(".navbar-brand ").addClass("logo-small");
            jQuery(".navbar").addClass("solid");

        } else if (scroll <= 20) {
            jQuery(".navbar-box").removeClass("ativar");
            jQuery(".menu-top").removeClass("fade");
            jQuery(".navbar-brand ").removeClass("logo-small");
            jQuery(".navbar").removeClass("solid");
        }
    });
});

window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
    //indicador de scroll da pagina
    /*jQuery(window).on("load", function() {
        window.onscroll = function() {
            myFunction()
        };

        function myFunction() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";
        }
    });*/



//var transitionEnd = 'webkitTransitionEnd otransitionendo TransitionEnd msTransitionEnd transitionend';

jQuery(window).on("load", function() {

    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 900) {
            //jQuery(".whats-icon").addClass("aparece");
            $('.whats-icon')
                .addClass('aparece')
                //.one(transitionEnd, doSomethingAfterIt);
        } else if (scroll <= 20) {
            //jQuery(".whats-icon").removeClass("aparece");
            $('.whats-icon')
                .removeClass('aparece')
                //.one(transitionEnd, doSomethingAfterIt);
        }
    });
});




jQuery('.scroller').click(function() {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            jQuery('html, body').animate({
                scrollTop: target.offset().top - 90
            }, 1000);
            return false;
        }
    }

});


$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#camera').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})



var a = 0;
$(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.number').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }

            });
        });
        a = 1;
    }

});

$(document).ready(function() {

    // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1400);

});