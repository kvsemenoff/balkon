$(function(){

var owl = $(".slider-db");

owl.owlCarousel({

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
        1000:{
            items:1
        },
        1248:{
            items:1
        }
    }

});

});//END READY