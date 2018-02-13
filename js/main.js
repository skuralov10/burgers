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
        // e.preventDefault();
        $('.team-accordeon__trigger').css({
            'color' : "yellow"
        });
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

});