$(document).ready(function () {
    //
    //JAVASCRIPT
    
    "use strict";
    
    //BURGUER-MENU
    $(".burguer-menu").hide();
    $(".eventos-menu").hide();
    $(".paginas-menu").hide();
    $(".hidden-list").hide();
    $(".hidden-ticket").hide();
    $("#upload").hide();
    askEvento();
    askPagina();
    
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
        askPagina();
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
        askEvento();
    });
    
    function askEvento(){
        if(window.location.pathname == "/eventos-lista.html" ||
           window.location.pathname == "/eventos-nuevo.html" ||
           window.location.pathname == "/eventos-editar.html"){
            $("#eventos-option").addClass('page-selected');
        }
    }
    
    function askPagina(){
        if(window.location.pathname == "/paginas-lista.html" ||
           window.location.pathname == "/paginas-nuevo.html" ||
           window.location.pathname == "/paginas-editar.html"){
            $("#paginas-option").addClass('page-selected');
        }
    }
    
    //destacar
    //
    $(".destacado-btn").click(function(){
            $(this).toggleClass('ok-destacado');
            $(this).toggleClass('destacado-btn');
            $(this).children(".listado-icon").toggleClass('fa-heart-o');
            $(this).children(".listado-icon").toggleClass('fa-heart');
            $(this).children('.destacado-txt').html("Destacado");
        });
    
    $(".ok-destacado").click(function(){
            $(this).children('.destacado-txt').html("Añadir a destacado");
        });
    
    
    //filtro-evento
    $(".filtro-btn").click(function () {
        $(".filtro-lista div").removeClass("filtro-sel");
        $(this).addClass("filtro-sel");
    });
    
    //ver mas btn
    $(".ver-mas-btn").click(function (e) {
        $(".hidden-list:hidden").slice(0, 4).fadeIn(500);
        if ($(".hidden-list:hidden").length === 0) {
            $(".ver-mas-btn").html("No hay más eventos");
            $(".ver-mas-btn").addClass("pressed-btn");
            e.preventDefault();
        }
    });
    
    $("#incluir-destacados").click(function(){
       $(this).toggleClass('incluir-destacados-ok');
       $(this).toggleClass('incluir-destacados-no');
       $(this).children('span').toggleClass('fa-question');
       $(this).children('span').toggleClass('fa-heart');
    });
    
    $(".img-input").click(function(){
        $("#upload").trigger('click');
        $(this).toggleClass('img-input-upload');
        $(this).children('span').removeClass('fa-upload');
    });
    
    $(".add-ticket").click(function (e) {
        $(".hidden-ticket:hidden").slice(0, 1).fadeIn(500);
        if ($(".hidden-ticket:hidden").length === 0) {
            e.preventDefault();
        }
    });
    
    //CERRAR-BTN
    $("#cerrar-btn").click(function () {
        //rotate up burguer-btn
        $("#burguer-btn").removeClass("burguer-menu-action");
        //hide burguer-menu
        $(".burguer-menu").slideUp(500);
    });
});