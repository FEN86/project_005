$(function () {
    // Hamburger
    $(".hamburger__toggle").on("click", function () {
        $(".menu").toggleClass("menu_origin");
        $(".header").toggleClass("header_color");
    });

    // Tabs
    $('.offers .tab').on('click', function () {
        var $tabContent = $('#' + $(this).attr('data-id'));
        var $slider = $tabContent.find('.slick-slider');

        $('.offers').find('.tab-item').removeClass('active-tab').hide();
        $('.offers .offers__tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $tabContent.addClass('active-tab').fadeIn();

        if ($slider.length > 0) {
            $slider[0].slick.refresh();
        }

        return false;
    });

    // Custom Select
    (function () {
        var mql = window.matchMedia("(max-width: 992px)");

        if (!mql.matches) {
            initSelect();
        }

        mql.addListener(screenTest);

        function screenTest(e) {
            e.matches ? destroySelect() : initSelect();
        }

        function initSelect() {
            jcf.replaceAll();
        }

        function destroySelect() {
            jcf.destroyAll();
        }
    })();

    var scroll2 = new scrollbot("#advantages__content-scroll", 8).setStyle({
        "background-color": "#e1e0e0",
        "height": "8px",
        "width": "8px",
        "background- color": "#fbd341",
        "border - radius": "50%"
    }, {
        "border-radius": 0,
        "background-color": "#e1e0e0"
    });

    // media query event handler
    if (matchMedia) {
        const mq = window.matchMedia("(min-width: 992px)");
        mq.addListener(WidthChange);
        WidthChange(mq);

        // media query change
        function WidthChange(mq) {
            if (mq.matches) {
                $('#menuMobile .menu__list').trigger('destroy')
            } else {
                // window width is less than 500px
                // Accordion
                $('#menuMobile .menu__list').slideAccordion({
                    opener: 'a.opener',
                    slider: '.menu__drop',
                    animSpeed: 300
                });
            }

        }
    }
});

/*
 * jQuery Accordion plugin
 */
; (function ($) {
    $.fn.slideAccordion = function (opt) {
        // default options
        var options = $.extend({
            addClassBeforeAnimation: false,
            activeClass: 'active',
            opener: '.opener',
            slider: '.slide',
            animSpeed: 300,
            collapsible: true,
            event: 'click'
        }, opt);

        return this.each(function () {
            // options
            var accordion = $(this);
            var items = accordion.find(':has(' + options.slider + ')');

            items.each(function () {
                var item = $(this);
                var opener = item.find(options.opener);
                var slider = item.find(options.slider);

                opener.on(options.event, function (e) {
                    if (!slider.is(':animated')) {
                        if (item.hasClass(options.activeClass)) {
                            if (options.collapsible) {
                                slider.slideUp(options.animSpeed, function () {
                                    hideSlide(slider);
                                    item.removeClass(options.activeClass);
                                });
                            }
                        } else {
                            // show active
                            var levelItems = item.siblings('.' + options.activeClass);
                            var sliderElements = levelItems.find(options.slider);
                            item.addClass(options.activeClass);
                            showSlide(slider).hide().slideDown(options.animSpeed);

                            // collapse others
                            sliderElements.slideUp(options.animSpeed, function () {
                                levelItems.removeClass(options.activeClass);
                                hideSlide(sliderElements);
                            });
                        }
                    }
                    e.preventDefault();
                });
                if (item.hasClass(options.activeClass)) showSlide(slider); else hideSlide(slider);
            });

            accordion.on('destroy', function () {
                items.each(function () {
                    var item = $(this);
                    var opener = item.find(options.opener);
                    var slider = item.find(options.slider);

                    opener.off(options.event);
                    item.removeClass(options.activeClass);
                    slider.prop('style', '');
                })
                accordion.off('destroy');
            })
        });
    };

    // accordion slide visibility
    var showSlide = function (slide) {
        return slide.css({ position: '', top: '', left: '', width: '' });
    };
    var hideSlide = function (slide) {
        return slide.show().css({ position: 'absolute', top: -9999, left: -9999, width: slide.width() });
    };
}(jQuery));