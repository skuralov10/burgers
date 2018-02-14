$(document).ready(function(){

    //burgers
    var slider = $('.burgers__list').bxSlider({
        speed : 1000,
        pager : false,
        controls : false
    });        

    $('.burgers__arrow-left').on('click', function(e){
        e.preventDefault();
        slider.goToPrevSlide();
    });
    
    $('.burgers__arrow-right').on('click', function(e){
        e.preventDefault();    
        slider.goToNextSlide();   
    });


    //team
    $(function(){
        $(".team-accordeon").accordion({
            collapsible: true,
        });
    });

    $('.team-accordeon__trigger').on('click', function(e){
        $('.team-accordeon__trigger').css({
            'color' : "#f9b43b"
        });

        // $('.team-accordeon__trigger').css({
        //     'transform' : 'rotate(180deg)'        
        // });
    });


    //menu
    $('.menu-accordeon__item_meat').on('click', function(e){
        e.preventDefault();
        $('.menu-accordeon__item_meat').toggleClass('menu-accordeon__item_active');
    });

    $('.menu-accordeon__item_vegan').on('click', function(e){
        e.preventDefault();
        $('.menu-accordeon__item_vegan').toggleClass('menu-accordeon__item_active');
    });

    $('.menu-accordeon__item_dieta').on('click', function(e){
        e.preventDefault();
        $('.menu-accordeon__item_dieta').toggleClass('menu-accordeon__item_active');
    });


    //maps 
    ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("maps", {
            center: [46.48, 30.73],
            zoom: 14,
            controls: []
        });

        myMap.behaviors.disable('scrollZoom');


        var coords = [
            [46.48, 30.73], [46.48, 30.75], [46.47, 30.72]
        ],
            myCollection = new ymaps.GeoObjectCollection({}, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: '../img/icons/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-26, -52]
            });
        
        for (var i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i]));
        }
        
        myMap.geoObjects.add(myCollection);
    }
});


// $('.menu-accordeon__item').on('click', function(e){
//     e.preventDefault();
//     $('.menu-accordeon__item').toggleClass('active')
//         .siblings().removeClass('active');
// });


// $(document).ready(function() {
// 	$('.main-content').fullpage();
// });



//one page scroll

const sections = $('.section');
const dislpay = $('.main-content');
let isScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const setActiveMenuItem = itemEq => {
    $('.nav-bar__item').eq(itemEq).addClass('active')
    .siblings().removeClass('active');
}

const performTransition = sectionEq => {
    const position = `${sectionEq * -100}%`;

    if (isScroll) return

    isScroll = true;

    sections.eq(sectionEq).addClass('active')
    .siblings().removeClass('active');
    
    dislpay.css({
        'transform' : `translate(0, ${position})`,
        "-webkit-transform" : `translate(0, ${position})`
    })

    setTimeout(() => {
        isScroll = false;

        setActiveMenuItem(sectionEq);

    }, 1300); //время анимации  
}

const scrollToSection = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === 'up' && prevSection.length) {
        performTransition(prevSection.index())
    }

    if (direction === 'down' && nextSection.length) {
        performTransition(nextSection.index())
    }
}


$(document).on({
    wheel: e => {
        const deltaY = e.originalEvent.deltaY;
        const direction = deltaY > 0 ? "down" : "up";

        scrollToSection(direction);
    },

    // //листаем вниз
    // if (deltaY > 0) {
    //     scrollToSection('down');
    //     // performTransition(3);
    // }

    // //листаем вверх
    // if (deltaY < 0) {
    //     scrollToSection('up');
    // }

    keydown: e => {
        switch (e.keyCode){
            case 40:
                scrollToSection('down');
                break;
            case 38:
                scrollToSection('up');
                break;
        }
    },

    touchmove: e => e.preventDefault()
});

//nav
$('[data-scrool-to]').on('click', e =>{
    e.preventDefault();

    const target = parseInt($(e.currentTarget).attr('data-scrool-to'));

    performTransition(target);
})


//touch swipe
if (isMobile) {
    $(document).swipe( {
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            //плагин возвращает фактическое значение, а нам нужно на оборот
            const scrollDirection = direction === 'down' ? 'up' : 'down';
            scrollToSection(scrollDirection);
        }
    });
}