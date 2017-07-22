function initSlider(tabSelector) {
    $(tabSelector).slick({
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


    $(".tabs__label").click(function() {
        $(window).trigger("resize");

    });

    // initSlider(".js-slider_1");


    // $('.js-slider_2').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     responsive: [
    //         {
    //             breakpoint: 550,
    //             settings: {
    //                 slidesToShow: 1
    //             }
    //         },
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //         }
    //     ]
    // });

    $('.js-popup-form').magnificPopup({
        type: "inline",
        midClick: true
    });

    // begin | маска формы с телефоном
    $(function () {
        $('[name="phone"]').mask("+7 (999) 999-99-99", {
            placeholder: "_"
        });
    });
    // end

    $(".tabs input").on("change", function () {
        var tab = $(this).data("tab");
        var $slider = $(".tabs_cont [data-tab='" + tab + "'] .js-slider");

        setTimeout(function () {
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
            } else {
                $slider.slick("setPosition", 1);
            }
        }, 200);
    }).first().trigger("change");
});