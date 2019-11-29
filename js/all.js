(function($) {
    "use strict"; // Start of use strict


    /* ---------------------------------------------
     Scripts initialization
     --------------------------------------------- */

    $(window).load(function() {

        // Page loader

        /*$("body").imagesLoaded(function(){
            $(".page-loader div").fadeOut();
            $(".page-loader").delay(200).fadeOut("slow");
        });*/

        $(window).trigger("scroll");
        $(window).trigger("resize");

        // Hash menu forwarding
        if ((window.location.hash) && ($(window.location.hash).length)) {
            var hash_offset = $(window.location.hash).offset().top;
            $("html, body").animate({
                scrollTop: hash_offset
            });
        }

    });

    $(document).ready(function() {

        $(window).trigger("resize");
        init_fullscreen_menu();
        init_side_panel();
        init_parallax();
    });

    $(window).resize(function() {

        init_side_panel_resize()
        js_height_init();
        split_height_init();

    });


    /* --------------------------------------------
     Platform detect
     --------------------------------------------- */
    var mobileTest;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        mobileTest = true;
        $("html").addClass("mobile");
    } else {
        mobileTest = false;
        $("html").addClass("no-mobile");
    }

    var mozillaTest;
    if (/mozilla/.test(navigator.userAgent)) {
        mozillaTest = true;
    } else {
        mozillaTest = false;
    }
    var safariTest;
    if (/safari/.test(navigator.userAgent)) {
        safariTest = true;
    } else {
        safariTest = false;
    }

    // Detect touch devices    
    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }


    /* ---------------------------------------------
     Sections helpers
     --------------------------------------------- */

    // Sections backgrounds

    var pageSection = $(".home-section, .page-section, .small-section, .split-section");
    pageSection.each(function(indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // Function for block height 100%
    function height_line(height_object, height_donor) {
        height_object.height(height_donor.height());
        height_object.css({
            "line-height": height_donor.height() + "px"
        });
    }

    // Function equal height
    ! function(a) {
        a.fn.equalHeights = function() {
            var b = 0,
                c = a(this);
            return c.each(function() {
                var c = a(this).innerHeight();
                c > b && (b = c)
            }), c.css("height", b)
        }, a("[data-equal]").each(function() {
            var b = a(this),
                c = b.data("equal");
            b.find(c).equalHeights()
        })
    }(jQuery);


    // Progress bars
    var progressBar = $(".progress-bar");
    progressBar.each(function(indx) {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });



    /* ---------------------------------------------
     Nav panel classic
     --------------------------------------------- */

    var mobile_nav = $(".mobile-nav");
    var desktop_nav = $(".desktop-nav");





    /* ---------------------------------------------
     Scroll navigation
     --------------------------------------------- */




    /* ---------------------------------------------
     Lightboxes
     --------------------------------------------- */





    /* -------------------------------------------
     Parallax
     --------------------------------------------- */

    function init_parallax() {

        // Parallax        
        if (($(window).width() >= 1024) && (mobileTest == false)) {
            $(".parallax-1").parallax("50%", 0.1);
            $(".parallax-2").parallax("50%", 0.2);
            $(".parallax-3").parallax("50%", 0.3);
            $(".parallax-4").parallax("50%", 0.4);
            $(".parallax-5").parallax("50%", 0.5);
            $(".parallax-6").parallax("50%", 0.6);
            $(".parallax-7").parallax("50%", 0.7);
            $(".parallax-8").parallax("50%", 0.5);
            $(".parallax-9").parallax("50%", 0.5);
            $(".parallax-10").parallax("50%", 0.5);
            $(".parallax-11").parallax("50%", 0.05);
        }

    }




})(jQuery); // End of use strict





/* ---------------------------------------------
     Fullscreen menu
   --------------------------------------------- */

var fm_menu_wrap = $("#fullscreen-menu");
var fm_menu_button = $(".fm-button");

function init_fullscreen_menu() {

    fm_menu_button.click(function() {

        if ($(this).hasClass("animation-process")) {
            return false;
        } else {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").css("z-index", "2001").addClass("animation-process");;

                fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function() {
                    fm_menu_wrap.fadeOut(function() {
                        fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
                        fm_menu_button.css("z-index", "1030").removeClass("animation-process");

                    });
                });

                if ($(".owl-carousel").lenth) {
                    $(".owl-carousel").data("owlCarousel").play();
                }

            } else {
                if ($(".owl-carousel").lenth) {
                    $(".owl-carousel").data("owlCarousel").stop();
                }
                $(this).addClass("active").css("z-index", "2001").addClass("animation-process");

                fm_menu_wrap.fadeIn(function() {
                    fm_menu_wrap.find(".fm-wrapper-sub").addClass("js-active");
                    fm_menu_button.removeClass("animation-process");
                });
            }

            return false;
        }

    });

    $(document).keydown(function(e) {

        if (fm_menu_button.hasClass("animation-process")) {
            return false;
        } else {
            if (e.keyCode == 27 && fm_menu_button.hasClass("active")) {

                fm_menu_button.removeClass("active").css("z-index", "2001").addClass("animation-process");;

                fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function() {
                    fm_menu_wrap.fadeOut(function() {
                        fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
                        fm_menu_button.css("z-index", "1030").removeClass("animation-process");

                    });
                });

                if ($(".owl-carousel").lenth) {
                    $(".owl-carousel").data("owlCarousel").play();
                }

                return false;

            }
        }

    });

    fm_menu_button.click(function() {

        if ($(this).hasClass("animation-process")) {
            return false;
        } else {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").css("z-index", "2001").addClass("animation-process");;

                fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function() {
                    fm_menu_wrap.fadeOut(function() {
                        fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
                        fm_menu_button.css("z-index", "1030").removeClass("animation-process");

                    });
                });

                if ($(".owl-carousel").lenth) {
                    $(".owl-carousel").data("owlCarousel").play();
                }

            } else {
                if ($(".owl-carousel").lenth) {
                    $(".owl-carousel").data("owlCarousel").stop();
                }
                $(this).addClass("active").css("z-index", "2001").addClass("animation-process");

                fm_menu_wrap.fadeIn(function() {
                    fm_menu_wrap.find(".fm-wrapper-sub").addClass("js-active");
                    fm_menu_button.removeClass("animation-process");
                });
            }

            return false;
        }

    });

    $("#fullscreen-menu").find("a:not(.fm-has-sub)").click(function() {

        if (fm_menu_button.hasClass("animation-process")) {
            return false;
        } else {
            fm_menu_button.removeClass("active").css("z-index", "2001").addClass("animation-process");

            fm_menu_wrap.find(".fm-wrapper-sub").fadeOut("fast", function() {
                fm_menu_wrap.fadeOut(function() {
                    fm_menu_wrap.find(".fm-wrapper-sub").removeClass("js-active").show();
                    fm_menu_button.css("z-index", "1030").removeClass("animation-process");

                });
            });

            if ($(".owl-carousel").lenth) {
                $(".owl-carousel").data("owlCarousel").play();
            }
        }
    });

    // Sub menu

    var fmHasSub = $(".fm-has-sub");
    var fmThisLi;

    fmHasSub.click(function() {

        fmThisLi = $(this).parent("li:first");
        if (fmThisLi.hasClass("js-opened")) {
            fmThisLi.find(".fm-sub:first").slideUp(function() {
                fmThisLi.removeClass("js-opened");
                fmThisLi.find(".fm-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
            });
        } else {
            $(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
            fmThisLi.addClass("js-opened");
            fmThisLi.find(".fm-sub:first").slideDown();
        }

        return false;

    });

}


/* ---------------------------------------------
     Side panel
   --------------------------------------------- */

var side_panel = $(".side-panel");
var sp_button = $(".sp-button");
var sp_close_button = $(".sp-close-button");
var sp_overlay = $(".sp-overlay");

function sp_panel_close() {
    side_panel.animate({
        opacity: 0,
        left: -270
    }, 500, "easeOutExpo");
    sp_overlay.fadeOut();


    if ($(".owl-carousel").lenth) {
        $(".owl-carousel").data("owlCarousel").play();
    }
}

function init_side_panel() {
    (function($) {
        "use strict";

        sp_button.click(function() {

            side_panel.animate({
                opacity: 1,
                left: 0
            }, 500, "easeOutExpo");

            setTimeout(function() {
                sp_overlay.fadeIn();
            }, 100);

            if ($(".owl-carousel").lenth) {
                $(".owl-carousel").data("owlCarousel").stop();
            }

            return false;

        });

        sp_close_button.click(function() {
            sp_panel_close();
            return false;
        });
        sp_overlay.click(function() {
            sp_panel_close();
            return false;
        });

        $("#side-panel-menu").find("a:not(.sp-has-sub)").click(function() {
            if (!($(window).width() >= 1199)) {
                sp_panel_close();
            }
        });


        // Sub menu

        var spHasSub = $(".sp-has-sub");
        var spThisLi;

        spHasSub.click(function() {

            spThisLi = $(this).parent("li:first");
            if (spThisLi.hasClass("js-opened")) {
                spThisLi.find(".sp-sub:first").slideUp(function() {
                    spThisLi.removeClass("js-opened");
                    spThisLi.find(".sp-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
                });
            } else {
                $(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
                spThisLi.addClass("js-opened");
                spThisLi.find(".sp-sub:first").slideDown();
            }

            return false;

        });

    })(jQuery);
}

function init_side_panel_resize() {
    (function($) {
        "use strict";

        if ($(window).width() >= 1199) {
            side_panel.css({
                opacity: 1,
                left: 0
            });
            $(".side-panel-is-left").css("margin-left", "270px");
            sp_button.css("display", "none");
            sp_close_button.css("display", "none");
        } else {
            if (sp_close_button.is(":hidden")) {
                side_panel.css({
                    opacity: 0,
                    left: -270
                });
                $(".side-panel-is-left").css("margin-left", "0");
                sp_button.css("display", "block");
                sp_close_button.css("display", "block");
            }
        }

    })(jQuery);
}

/* ---------------------------------------------
 Portfolio section
 --------------------------------------------- */







/* ---------------------------------------------
 Height 100%
 --------------------------------------------- */
function js_height_init() {
    (function($) {
        $(".js-height-full").height($(window).height());
        $(".js-height-parent").each(function() {
            $(this).height($(this).parent().first().height());
        });
    })(jQuery);
}








/* ---------------------------------------------
 WOW animations
 --------------------------------------------- */




/* ---------------------------------------------
 Masonry
 --------------------------------------------- */




/* ---------------------------------------------
 Split section
 --------------------------------------------- */

function split_height_init() {
    (function($) {

        $(".ssh-table, .split-section-content").css("height", "auto");

        if ($(window).width() > 992) {
            $(".split-section").each(function() {
                var split_section_height = $(this).find(".split-section-content").innerHeight();
                $(this).find(".ssh-table").height(split_section_height);
            });
        }

    })(jQuery);
}


/* ---------------------------------------------
 Polyfill for :focus-visible     
 --------------------------------------------- */

/**
 * https://github.com/WICG/focus-visible
 */
function init() {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;

    var inputTypesWhitelist = {
        text: true,
        search: true,
        url: true,
        tel: true,
        email: true,
        password: true,
        number: true,
        date: true,
        month: true,
        week: true,
        time: true,
        datetime: true,
        'datetime-local': true
    };

    /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */
    function isValidFocusTarget(el) {
        if (
            el &&
            el !== document &&
            el.nodeName !== 'HTML' &&
            el.nodeName !== 'BODY' &&
            'classList' in el &&
            'contains' in el.classList
        ) {
            return true;
        }
        return false;
    }

    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */
    function focusTriggersKeyboardModality(el) {
        var type = el.type;
        var tagName = el.tagName;

        if (tagName == 'INPUT' && inputTypesWhitelist[type] && !el.readOnly) {
            return true;
        }

        if (tagName == 'TEXTAREA' && !el.readOnly) {
            return true;
        }

        if (el.isContentEditable) {
            return true;
        }

        return false;
    }

    /**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */
    function addFocusVisibleClass(el) {
        if (el.classList.contains('focus-visible')) {
            return;
        }
        el.classList.add('focus-visible');
        el.setAttribute('data-focus-visible-added', '');
    }

    /**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */
    function removeFocusVisibleClass(el) {
        if (!el.hasAttribute('data-focus-visible-added')) {
            return;
        }
        el.classList.remove('focus-visible');
        el.removeAttribute('data-focus-visible-added');
    }

    /**
     * Treat `keydown` as a signal that the user is in keyboard modality.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {Event} e
     */
    function onKeyDown(e) {
        if (isValidFocusTarget(document.activeElement)) {
            addFocusVisibleClass(document.activeElement);
        }

        hadKeyboardEvent = true;
    }

    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */
    function onPointerDown(e) {
        hadKeyboardEvent = false;
    }

    /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */
    function onFocus(e) {
        // Prevent IE from focusing the document or HTML element.
        if (!isValidFocusTarget(e.target)) {
            return;
        }

        if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
            addFocusVisibleClass(e.target);
        }
    }

    /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */
    function onBlur(e) {
        if (!isValidFocusTarget(e.target)) {
            return;
        }

        if (
            e.target.classList.contains('focus-visible') ||
            e.target.hasAttribute('data-focus-visible-added')
        ) {
            // To detect a tab/window switch, we look for a blur event followed
            // rapidly by a visibility change.
            // If we don't see a visibility change within 100ms, it's probably a
            // regular focus change.
            hadFocusVisibleRecently = true;
            window.clearTimeout(hadFocusVisibleRecentlyTimeout);
            hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                hadFocusVisibleRecently = false;
                window.clearTimeout(hadFocusVisibleRecentlyTimeout);
            }, 100);
            removeFocusVisibleClass(e.target);
        }
    }

    /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */
    function onVisibilityChange(e) {
        if (document.visibilityState == 'hidden') {
            // If the tab becomes active again, the browser will handle calling focus
            // on the element (Safari actually calls it twice).
            // If this tab change caused a blur on an element with focus-visible,
            // re-apply the class when the user switches back to the tab.
            if (hadFocusVisibleRecently) {
                hadKeyboardEvent = true;
            }
            addInitialPointerMoveListeners();
        }
    }

    /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */
    function addInitialPointerMoveListeners() {
        document.addEventListener('mousemove', onInitialPointerMove);
        document.addEventListener('mousedown', onInitialPointerMove);
        document.addEventListener('mouseup', onInitialPointerMove);
        document.addEventListener('pointermove', onInitialPointerMove);
        document.addEventListener('pointerdown', onInitialPointerMove);
        document.addEventListener('pointerup', onInitialPointerMove);
        document.addEventListener('touchmove', onInitialPointerMove);
        document.addEventListener('touchstart', onInitialPointerMove);
        document.addEventListener('touchend', onInitialPointerMove);
    }

    function removeInitialPointerMoveListeners() {
        document.removeEventListener('mousemove', onInitialPointerMove);
        document.removeEventListener('mousedown', onInitialPointerMove);
        document.removeEventListener('mouseup', onInitialPointerMove);
        document.removeEventListener('pointermove', onInitialPointerMove);
        document.removeEventListener('pointerdown', onInitialPointerMove);
        document.removeEventListener('pointerup', onInitialPointerMove);
        document.removeEventListener('touchmove', onInitialPointerMove);
        document.removeEventListener('touchstart', onInitialPointerMove);
        document.removeEventListener('touchend', onInitialPointerMove);
    }

    /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */
    function onInitialPointerMove(e) {
        // Work around a Safari quirk that fires a mousemove on <html> whenever the
        // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
        if (e.target.nodeName.toLowerCase() === 'html') {
            return;
        }

        hadKeyboardEvent = false;
        removeInitialPointerMoveListeners();
    }

    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('focus', onFocus, true);
    document.addEventListener('blur', onBlur, true);
    document.addEventListener('visibilitychange', onVisibilityChange, true);
    addInitialPointerMoveListeners();

    document.body.classList.add('js-focus-visible');
}

/**
 * Subscription when the DOM is ready
 * @param {Function} callback
 */
function onDOMReady(callback) {
    var loaded;

    /**
     * Callback wrapper for check loaded state
     */
    function load() {
        if (!loaded) {
            loaded = true;

            callback();
        }
    }

    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
        callback();
    } else {
        loaded = false;
        document.addEventListener('DOMContentLoaded', load, false);
        window.addEventListener('load', load, false);
    }
}

if (typeof document !== 'undefined') {
    onDOMReady(init);
}