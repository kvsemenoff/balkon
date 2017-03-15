$(function(){

var owl = $(".slider-db");

owl.owlCarousel({
        center:true,
        loop:true,//Зацикливаем слайдер
        nav:true, //Навигация включена
        autoplay:false,//автозапуск
        smartSpeed:1000,//Время движения
        margin:0,    
        navText:['<span class="db-left"></span>','<span class="db-right"></span>'],
        responsive:{
          0:{
            items:1
        },
        768:{
            items:1
        },       
        992:{
            items:3
        },
        1248:{
            items:3
        }
    }

});

});//END READY