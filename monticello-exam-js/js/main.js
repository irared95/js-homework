$(document).ready(function() {
    //animation scroll arrow icon
    const linksWithScroll = document.querySelectorAll('.scroll--js');

    linksWithScroll.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault()

            const blockID = element.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    });

    //hero slider
    $('.hero__slider--js').slick({
        arrows: false,
        dots: true,
        vertical: true,
        dotsClass: 'dots dots--vertical hero__dots'
    });

    // news slider
    $('.news__slider--js').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        arrows: true,
        dots: true,
        dotsClass: 'dots news__dots',
        prevArrow: '<button type="button" class="arrow-prev arrow"></button>',
        nextArrow: '<button type="button" class="arrow-next arrow"></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //header burger
    // $(".js-burger").on("click", function() {
    //     if ($(".js-header").hasClass("active")) {
    //         $(".js-header").removeClass("active");
    //     } else {
    //         $(".js-header").addClass("active");
    //     }
    // })
});