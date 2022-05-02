"use strict";

$(document).ready(function () {
    //loading setting a timeout
    setTimeout(function () {
        $("#loader").fadeOut("slow");
    }, 5000);

});

//check for browser os
    var isMobile = false;
    var isiPhoneiPad = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        isiPhoneiPad = true;
    }

    function SetMegamenuPosition() {
        if ($(window).width() > 991) {
            setTimeout(function () {
                var totalHeight = $('nav.navbar').outerHeight();
                $('.mega-menu').css({top: totalHeight});
                if ($('.navbar-brand-top').length === 0)
                    $('.dropdown.simple-dropdown > .dropdown-menu').css({top: totalHeight});
            }, 200);
        } else {
            $('.mega-menu').css('top', '');
            $('.dropdown.simple-dropdown > .dropdown-menu').css('top', '');
        }
    }

    $(window).on("scroll", init_scroll_navigate);

    function init_scroll_navigate() {

        /* ===================================
         sticky nav Start
         ====================================== */
        var headerHeight = $('nav').outerHeight();
        if (!$('header').hasClass('no-sticky')) {
            if ($(document).scrollTop() >= headerHeight) {
                $('header').addClass('sticky');

            } else if ($(document).scrollTop() <= headerHeight) {
                $('header').removeClass('sticky');
            }
        }

        /* ===================================
         header appear on scroll up
         ====================================== */

        //scroll nav colors
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 70) { // Set position from top to add class
                $('.sticky').addClass("header-appear");
                $('.dropdown.on').removeClass('on').removeClass('open').find('.dropdown-menu').fadeOut(100);
                $('.logo-appear').addClass("display_none");
                $('.index-only-side-nav .navbar  .navbar-brand').addClass("display_none");
            }
            else {
                $('header').removeClass("header-appear");
                $('.logo-appear').removeClass("display_none");
                $('.index-only-side-nav .navbar  .navbar-brand').removeClass("display_none");
            }
        });
    }

    /*==============================================================*/
//Search - START CODE
    /*==============================================================*/
    function ScrollStop() {
        return false;
    }

    function ScrollStart() {
        return true;
    }

    function validationSearchForm() {
        var error = true;
        $('#search-header input[type=text]').each(function (index) {
            if (index === 0) {
                if ($(this).val() === null || $(this).val() === "") {
                    $("#search-header").find("input:eq(" + index + ")").css({
                        "border": "none",
                        "border-bottom": "2px solid red"
                    });
                    error = false;
                } else {
                    $("#search-header").find("input:eq(" + index + ")").css({
                        "border": "none",
                        "border-bottom": "2px solid #000"
                    });
                }
            }
        });
        return error;
    }

    /*==============================================================
     Search - END CODE
     ==============================================================*/


    /* ===================================
     Scroll Top
     ====================================== */

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });
//Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    /*==============================================================
    smooth scroll
    ==============================================================*/


//scroll sections
    $(".scroll").on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 700);
    });

    /*==============================================================
     counter
     ==============================================================*/

    $(function ($) {
        animatecounters();
    });

    function animatecounters() {
        $('.timer').each(count);

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    }

    /*==============================================================*/
//magnificPopup Start
    /*==============================================================*/
    $('.header-search-form').magnificPopup({
        mainClass: 'mfp-fade',
        closeOnBgClick: true,
        preloader: false,
        // for white backgriund
        fixedContentPos: false,
        closeBtnInside: false,
        callbacks: {
            open: function () {
                setTimeout(function () {
                    $('.search-input').focus();
                }, 500);
                $('#search-header').parent().addClass('search-popup');
                if (!isMobile) {
                    $('body').addClass('overflow-hidden');
                    //$('body').addClass('position-fixed');
                    $('body').addClass('width-100');
                    document.onmousewheel = ScrollStop;
                } else {
                    $('body, html').on('touchmove', function (e) {
                        e.preventDefault();
                    });
                }
            },
            close: function () {
                if (!isMobile) {
                    $('body').removeClass('overflow-hidden');
                    //$('body').removeClass('position-fixed');
                    $('body').removeClass('width-100');
                    $('#search-header input[type=text]').each(function (index) {
                        if (index == 0) {
                            $(this).val('');
                            $("#search-header").find("input:eq(" + index + ")").css({
                                "border": "none",
                                "border-bottom": "2px solid rgba(255,255,255,0.5)"
                            });
                        }
                    });
                    document.onmousewheel = ScrollStart;
                } else {
                    $('body, html').unbind('touchmove');
                }
            }
        }
    });

    /* ===================================
     Log In Form
     ====================================== */

    $(function ($) {
        var modal = document.getElementById('id01');
    });


    /* ===================================
     owl Carousel xbox
         ====================================== */

    var owl4 = $('.owl-xbox');
    owl4.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 1,

            },
            1000: {
                items: 1,
            }
        }
    });

    var owl4 = $('.owl-team');
    owl4.owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 5,
            }
        }
    });

    var owl4 = $('.owl-blog');
    owl4.owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 4,
            }
        }
    });

        var owl4 = $('.owl-testimonial');
        owl4.owlCarousel({
            loop: true,
            dots: true,
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,

                },
                600: {
                    items: 1,

                },
                1000: {
                    items: 1,
                }
            }
        });

    /* ===================================
     owl end
         ====================================== */

    /*-- Revolution Slider ----*/


    if ($("#rev_slider_1078_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1078_1");
    } else {
        $("#rev_slider_1078_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style: "zeus",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 600,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0
                    }
                }
                ,
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    hide_under: 300,
                    style: "hermes",
                    hide_onleave: false,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 8,
                    tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            viewPort: {
                enable: true,
                outof: "pause",
                visible_area: "80%",
                presize: false
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [600, 600, 500, 400],
            lazyType: "none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 2000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55]
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }


    var revapi2,
        tpj = jQuery;
    tpj(document).ready(function () {
        if (tpj("#rev_slider_2_2").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_2_1");
        } else {
            revapi2 = tpj("#rev_slider_2_2").show().revolution({
                sliderType: "standard",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    onHoverStop: "off"
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [600, 600, 500, 400],
                lazyType: "none",
                shadow: 0,
                spinner: "spinner0",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false
                }
            });
        }
    });
    /*ready*/

    var revapi347,
        tpj = jQuery;

    tpj(document).ready(function () {
        if (tpj("#rev_slider_347_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_347_1");
        } else {
            revapi347 = tpj("#rev_slider_347_1").show().revolution({
                sliderType: "hero",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 9000,
                responsiveLevels: [1240, 1240, 778, 480],
                visibilityLevels: [1240, 1240, 778, 480],
                gridwidth: [1240, 1240, 778, 480],
                gridheight: [868, 868, 960, 720],
                lazyType: "none",
                parallax: {
                    type: "scroll",
                    origo: "slidercenter",
                    speed: 1000,
                    speedbg: 0,
                    speedls: 2000,
                    levels: [8, 16, 24, 32, -8, -16, -24, -32, 36, 2, 4, 6, 50, -30, -20, 55],
                },
                shadow: 0,
                spinner: "spinner1",
                autoHeight: "off",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    disableFocusListener: false,
                }
            });
        }
        try {
            initSocialSharing("347")
        } catch (e) {
        }
    });

    /*-- Side Nav ----*/

// Push Menus

    if ($("body").hasClass("index-only-side-nav")) {
        var $menuLeft = $(".pushmenu-left");
        var $menuRight = $(".pushmenu-right");
        var $toggleleft = $(".menu_bars.left");
        var $toggleright = $(".menu_bars.right");
        $toggleright.on("click", function () {
            $('.menu_bars').toggleClass("active");
            $menuRight.toggleClass("pushmenu-open");
            $("body").toggleClass("pushmenu-push-toLeft");
            $(".navbar").toggleClass("navbar-right_open");
            return false;
        });

        $('.push_nav li a').on('click', function () {
            $toggleright.toggleClass("active");
            $menuRight.toggleClass("pushmenu-open");
            $("body").toggleClass("pushmenu-push-toLeft");
            $(".navbar").toggleClass("navbar-right_open");
            return true;
        });
    }

    /*-- Toggle Nav ----*/
    $('.navbar .collapse li a').on('click', function () {
        $('.navbar .collapse').removeClass('in');
        $('.navbar a.dropdown-toggle').addClass('collapsed');
    });

    /* Initializing Particles Plugin */

    if ($(window).width() > 767) {

        if ($("body").hasClass("particles_special_id")) {
            window.onload = function () {
                Particles.init({
                    selector: '#particles_bg',
                    color: '#ffffff',
                    connectParticles: true,
                    sizeVariations: 7,
                    maxParticles: 140,
                });
                console.log('callback - particles.js config loaded');
            };
        }
    }

    /*-- cube Portfolio ----*/

    (function ($, window, document, undefined) {
        // init cubeportfolio
        $('#js-grid-mosaic-flat').cubeportfolio({
            filters: '#js-filters-mosaic-flat',
            layoutMode: 'mosaic',
            sortByDimension: true,
            mediaQueries: [{
                width: 1500,
                cols: 6,
            }, {
                width: 1100,
                cols: 4,
            }, {
                width: 800,
                cols: 3,
            }, {
                width: 480,
                cols: 2,
                options: {
                    caption: '',
                    gapHorizontal: 15,
                    gapVertical: 15,
                }
            }],
            defaultFilter: '*',
            animationType: 'fadeOutTop',
            gapHorizontal: 0,
            gapVertical: 0,
            gridAdjustment: 'responsive',
            caption: 'fadeIn',
            displayType: 'fadeIn',
            displayTypeSpeed: 100,

            // lightbox
            lightboxDelegate: '.cbp-lightbox',
            lightboxGallery: true,
            lightboxTitleSrc: 'data-title',
            lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

            plugins: {
                loadMore: {
                    element: '#js-loadMore-mosaic-flat',
                    action: 'click',
                    loadItems: 3,
                }
            },
        });
    })(jQuery, window, document);


    /*-- push menu ----*/

    if ($("body").hasClass("blue-push-menu")) {
        jQuery(document).ready(function ($) {
            $('.toggle-menu').jPushMenu();
        });
    }

if ($("body").hasClass("typeit-version")) {
/*-- wow intialize--*/
if ($(window).width() > 767) {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    new WOW().init();
}

/*Personal resume page*/
$("#my_designation").typeIt({
    speed: 40,
    autoStart: false,
    loop: true,
})
    .tiType("Financial Advisor")
    .tiSettings({
        speed: 700
    })
    .tiPause(1000)
    .tiSettings({
        speed: 50
    })
    .tiDelete()
    .tiType("Charted Accountent");
    }


//1650956400000 = 12:30 PM 26 Aor 2022
(function(){
    if(+ new Date > 1650956400000 ){ 
        $(".hidden_div").addClass("visible_div changed").removeClass('hidden_div')
        $(".visible_div").not(".changed").addClass('hidden_div').removeClass("visible_div")
    }
})()
