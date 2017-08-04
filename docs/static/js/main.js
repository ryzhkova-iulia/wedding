
$(function () {
    ymaps.ready(function() {
        var myMap = new ymaps.Map("map", {
                center: [55.820121, 37.593291],
                zoom: 15,
                zIndex: -100
            }, {
                searchControlProvider: 'yandex#search'
            }),
            myPlacemark = new ymaps.Placemark([55.820121, 37.593291], {
                // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                iconCaption: ''
                // balloonContentFooter: "Подвал",
            }, {
                // preset : 'islands#redDotIconWithCaption'

                iconLayout: 'default#image',
                iconImageHref: 'static/img/general/balloon.png',
                iconImageSize: [50, 50],
                iconImageOffset: [-50, -60],
                hideIconOnBalloonOpen: false,
                zIndex: 800
            });

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('drag');
        // myMap.behaviors.disable('scrollZoom');
        myMap.controls
            .remove('trafficControl')
            .remove('searchControl')
            .remove('typeSelector')
            .remove('geolocationControl')
            .remove('fullscreenControl')
            .remove('rulerControl');
    });




    $('.js-popup-form').magnificPopup({
        type: "inline",
        midClick: true,
        callbacks: {
            open: function () {
                var $slider = this.container.find(".js-form-slider");
                if (!$slider.hasClass("slick-initialized")) {
                    $slider.slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        responsive: [
                            {
                                breakpoint: 550,
                                settings: {
                                    slidesToShow: 1
                                }
                            },
                            {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 2
                                }
                            }
                        ]
                    });
                }
            }
        }
    });



    $('[name="phone"]').mask("+7 (999) 999-99-99", {
        placeholder: "_"
    });

    $(".js-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });


    $(".gallery-group__tab-item").on("click", function () {
        $(".gallery-group__tab-item").removeClass("active");

        var $target = $(this);
        var $slider = $target.addClass("active").parents(".gallery-group").find(".js-slider");

        $slider.slick("slickUnfilter");

        if ($target.data("filter") != "all") {
            $slider.slick("slickFilter", "[data-group='" + $target.data("filter") + "']");
        }
    }).first().trigger("click");


    // $('.js-works a').magnificPopup({
    //     type: 'image',
    //     closeOnContentClick: true,
    //     mainClass: 'mfp-img-mobile',
    //     image: {
    //         verticalFit: true
    //     }
    // });


    $('.js-popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'

        }
    });



});