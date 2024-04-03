// console.log("Starting Execution")
// $('.owl-slide').owlCarousel({
//     center: false,
//     items: 2,
//     loop: true,
//     stagePadding: 0,
//     margin: 30,
//     autoplay: true,
//     nav: true,
//     navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
//     responsive: {
//         100: {
//             nav:true,
//             items:1
//         },
//         300: {
//             nav: true,
//             items: 1
//         },
//         500: {
//             nav: true,
//             items: 1
//         },
//         600: {
//             nav: true,
//             items: 1
//         },
//         1000: {
//             stagePadding: 0,
//             nav: true,
//             items: 1
//         },
//         1200: {
//             stagePadding: 0,
//             nav: true,
//             items: 1
//         }
//     }
// });

// var THEMEMASCOT = {};
// THEMEMASCOT.isRTL = {
//    check: function() {
//        if ($("html").attr("dir") ==="rtl") {
//            return true;
//        } else {
//            return false;
//        }
//    }
// };
// var $owl_carousel_3col = $('.owl-carousel-3col');
// if ($owl_carousel_3col.length > 0) {
//    if (!$owl_carousel_3col.hasClass("owl-carousel")) {
//        $owl_carousel_3col.addClass("owl-carousel owl-theme");
//    }
//    $owl_carousel_3col.each(function() {
//        // console.log($(this).data("owl-dots"));
//        var data_dots = ($(this).data("dots") === undefined) ? false : $(this).data("dots");
//        // console.log(data_dots);
//        var data_nav = ($(this).data("nav") === undefined) ? false : $(this).data("nav");
//        var data_duration = ($(this).data("duration") === undefined) ? 4000 : $(this).data("duration");
//        $(this).owlCarousel({
//            rtl: THEMEMASCOT.isRTL.check(),
//            autoplay: true,
//            autoplayTimeout: data_duration,
//            loop: true,
//            items: 3,
//            margin: 15,
//            dots: data_dots,
//            nav: data_nav,
//            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
//            responsive: {
//                0: {
//                    items: 1,
//                    center: false
//                },
//                480: {
//                    items: 1,
//                    center: false
//                },
//                600: {
//                    items: 1,
//                    center: false
//                },
//                750: {
//                    items: 2,
//                    center: false
//                },
//                960: {
//                    items: 2
//                },
//                1170: {
//                    items: 3
//                },
//                1300: {
//                    items: 3
//                }
//            }
//        });
//    });
// }

// console.log("Ending Execution")