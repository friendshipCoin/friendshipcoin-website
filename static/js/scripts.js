(function($) {
    "use strict";

    /*
    |--------------------------------------------------------------------------
    | Template Name: Friendship Coin
    | Author: IrsFoundation
    | Developer: Rashadul islam
    | Version: 1.0.0
    |--------------------------------------------------------------------------
    |--------------------------------------------------------------------------
    | TABLE OF CONTENTS:
    |--------------------------------------------------------------------------
    |
    | 1. Scripts initialization
    | 2. Preloader
    | 3. Stickey Header
    | 4. Pie Chart Activation
    | 5. Owl Carousel
    | 6. Slick Slider
    | 7. wrap select element in select-group
    | 8. pricing nav Active
    | 9. pricing nav Active
    | 10. ScrollUp
    | 11. Magnific Popup
    | 13. Slicknav
    | 14. Ajax Contact Form
    |
    */


    /*--------------------------------------------------------------
        1. Scripts initialization
    --------------------------------------------------------------*/

    $(window).on('load', function() {
        $(window).trigger("scroll");
        wrapSelect();
        preloaderSetup();
        pieChartsSetup();

    });

    $(document).on('ready', function() {
        owlCarouselSetup();
        slickSliderSetup();
        pricingMenuActive();
        ajaxMailChimp();
        scrollUpSetup();
        magnificPopupSetup();
        slickNavMobileMenu();
        preloaderClose();
    });

    $(window).on('scroll', function() {
        stickyHeader();
    });

    /*--------------------------------------------------------------
        2. Preloader
    --------------------------------------------------------------*/

    var preloader = $('#preloader');
    function preloaderSetup() {
        preloader.fadeOut('slow', function() { $(this).remove(); });
    }
    function preloaderClose() {
        preloader.children('.hide-loader').on('click', function(e) {
            preloader.fadeOut();
            return false;
        });
    }

    /*--------------------------------------------------------------
        3. Stickey Header
    --------------------------------------------------------------*/

    function stickyHeader() {
        var scroll = $(window).scrollTop(),
            mainHeader = $('.hb-style-one'),
            mainHeaderHeight = mainHeader.innerHeight() + 30;

        // console.log(mainHeaderHeight);
        if (scroll > mainHeaderHeight) {
            mainHeader.addClass("sticky-header");
        } else {
            mainHeader.removeClass("sticky-header");
        }
    }

    /*--------------------------------------------------------------
        4. Pie Chart Activation
    --------------------------------------------------------------*/

    function pieChartsSetup() {
        var options = {
            exportEnabled: false,
            animationEnabled: true,
            title: {
                text: "Accounting"
            },
            legend: {
                horizontalAlign: "right",
                verticalAlign: "center"
            },
            data: [{
                type: "pie",
                showInLegend: false,
                toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
                indexLabel: "{name}",
                legendText: "{name} (#percent%)",
                indexLabelPlacement: "inside",
                dataPoints: [
                    { y: 6566.4, name: "USD" },
                    { y: 2599.2, name: "EUR" },
                    { y: 1231.2, name: "ETH" },
                    { y: 1368, name: "GBP" },
                    { y: 684, name: "AUD" },
                    { y: 1231.2, name: "CAD" }
                ]
            }]
        };
        if ($('#chartContainer').length) {
            $("#chartContainer").CanvasJSChart(options);
        }
    }

    /*--------------------------------------------------------------
        5. Owl Carousel
    --------------------------------------------------------------*/

    function owlCarouselSetup() {

        /* Owl Carousel For client carousel */
        $('.client-carousel').owlCarousel({
            margin: 0,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },
                450: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });

        /* Owl Carousel For slider three Carousel */
        $('.slider-three').owlCarousel({
            margin: 0,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            items: 1
        });

        /* Owl Carousel For blog thumbnail slider */
        $('.blog-thumb-slider').owlCarousel({
            margin: 0,
            loop: true,
            autoplay: true,
            autoplayTimeout: 7000,
            nav: false,
            dots: true,
            items: 1
        });
    }

    /*--------------------------------------------------------------
        6. Slick Slider
    --------------------------------------------------------------*/

    function slickSliderSetup() {

        /* Owl Carousel For slider active two */
        $('.slider-two-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            // fade: true,
            arrows: false,
            draggable: false,
            swipeToSlide: true,
            vertical: true,
            verticalSwiping: true
        });
        $('.s2-content-active').slick({
            draggable: false,
            fade: true,
            asNavFor: '.slider-two-active'
        });

        /* Owl Carousel For testimonial slider */
        $('.tst-thumb-area').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            draggable: false,
            asNavFor: '.tst-content'
        });
        $('.tst-content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false,
            draggable: false,
            dots: true,
            asNavFor: '.tst-thumb-area'
        });
    }

    /*--------------------------------------------------------------
        7. wrap select element in select-group
    --------------------------------------------------------------*/

    function wrapSelect() {
        jQuery('.wrap-select-group, .cryptonatorwidget select').each(function() {
            var $select = jQuery(this);
            if ($select.hasClass('select2-hidden-accessible')) {
                return;
            }
            $select.wrap('<div class="form-group select-group"></div>').after('<i class="fa fa-angle-down theme_button color1 no_bg_button" aria-hidden="true"></i>');
            if ($select.hasClass('wrap-select-group')) {
                $select.addClass('empty choice');
            }
            // $select.wrap('<div class="form-group select-group"></div>').after('<i class="fa fa-angle-down theme_button color1 no_bg_button" aria-hidden="true"></i>');
        });
    }

    /*--------------------------------------------------------------
        8. pricing nav Active
    --------------------------------------------------------------*/
    function pricingMenuActive() {
        $('.prc-nav-tab ul').on('click', 'li', function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    }

    /*--------------------------------------------------------------
        9. pricing nav Active
    --------------------------------------------------------------*/
    function ajaxMailChimp() {
        $('#mc-form').ajaxChimp({
            url: 'http://www.wpocean.us13.list-manage.com/subscribe/post?u=e9d729be03847d1a66b143bd2&amp;id=21ac2a3302', //Set Your Mailchamp URL
            callback: function(resp) {
                if (resp.result === 'success') {
                    $('.sform .input-area').fadeOut();
                }
            }
        });
    }

    /*--------------------------------------------------------------
        10. ScrollUp
    --------------------------------------------------------------*/
    function scrollUpSetup() {
        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 500,
            animation: 'fade'
        });
    }

    /*--------------------------------------------------------------
        11. Magnific Popup
    --------------------------------------------------------------*/
    function magnificPopupSetup() {
        $('.expand-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $('.expand-video').magnificPopup({
            type: 'iframe',
            gallery: {
                enabled: true
            }
        });
    }

    /*--------------------------------------------------------------
        13. Slicknav
    --------------------------------------------------------------*/

    function slickNavMobileMenu() {
        $('#nav_mobile_menu >ul').slicknav({
            appendTo: ".mobile_menu"
        });
    }

    /*--------------------------------------------------------------
        14. Ajax Contact Form
    --------------------------------------------------------------*/

    $('.screen-reader-response').hide();
    $('.wpcf7 #default_contact_form #c_submit').on('click', function() {
        var c_name = $('#c_name').val();
        var c_email = $('#c_email').val();
        var c_phone = $('#c_phone').val();
        var c_address = $('#c_address').val();
        var c_subject = $('#c_subject').val();
        var c_msg = $('#c_msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(c_email)) {
            alert('Please enter valid email');
            return false;
        }

        c_name = $.trim(c_name);
        c_email = $.trim(c_email);
        c_phone = $.trim(c_phone);
        c_address = $.trim(c_address);
        c_subject = $.trim(c_subject);
        c_msg = $.trim(c_msg);

        if (c_name != '' && c_email != '' && c_phone != '' && c_address != '' && c_subject != '' && c_msg != '') {
            var values = "&c_name=" + c_name + "&c_email=" + c_email + " &c_phone=" + c_phone + " &c_address=" + c_address + " &c_subject=" + c_subject + " &c_msg=" + c_msg;
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: values,
                success: function() {
                    $('#c_name').val('');
                    $('#c_email').val('');
                    $('#c_phone').val('');
                    $('#c_address').val('');
                    $('#c_subject').val('');
                    $('#c_msg').val('');

                    $('.screen-reader-response').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function() {
                        $('.screen-reader-response').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.screen-reader-response').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        }
        return false;
    });


})(jQuery);