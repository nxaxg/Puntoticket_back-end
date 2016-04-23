$(document).ready(function () {
    //
    //JAVASCRIPT
    
    "use strict";

    //BURGUER-MENU
    $(".burguer-menu").hide();
    $(".eventos-menu").hide();
    $(".paginas-menu").hide();
    
    
    $("#burguer-btn").click(function () {
        //rotate up burger-btn
        $("#burguer-btn").toggleClass("burguer-menu-action");
        //show burguer-menu
        $(".burguer-menu").slideToggle(500);
    });
    
    $("#eventos-btn").click(function () {
        //rotate up burger-btn
        $(".paginas-menu").slideUp();
        $("#eventos-option").toggleClass('aside-selected');
        
        $("#eventos-icon").toggleClass("eventos-menu-action");
        $("#paginas-icon").removeClass("paginas-menu-action");
        $("#paginas-option").removeClass("aside-selected");
        //show burguer-menu
        $(".eventos-menu").slideToggle(300);
    });
    
    $("#paginas-btn").click(function () {
        //rotate up burger-btn
        $(".eventos-menu").slideUp();
        $("#paginas-option").toggleClass('aside-selected');
        
        $("#paginas-icon").toggleClass("paginas-menu-action");
        $("#eventos-icon").removeClass("eventos-menu-action");
        $("#eventos-option").removeClass("aside-selected");
        //show burguer-menu
        $(".paginas-menu").slideToggle(300);
    });

    //CERRAR-BTN
    $("#cerrar-btn").click(function () {
        //rotate up burguer-btn
        $("#burguer-btn").removeClass("burguer-menu-action");
        //hide burguer-menu
        $(".burguer-menu").slideUp(500);
    });
});