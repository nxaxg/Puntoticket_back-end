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
    $("#eliminar-modal").hide();
    
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
        $(this).children('span').toggleClass('fa-check');
    });
    
    $(".add-ticket").click(function (e) {
        $(".hidden-ticket:hidden").slice(0, 1).fadeIn(500);
        if ($(".hidden-ticket:hidden").length === 0) {
            e.preventDefault();
        }
    });
        
    $(".eliminar").click(function(){
        //título evento a eliminar
        var message = $(this).parent().siblings().find('.info-title').html();
        document.getElementById('evento-eliminar').innerHTML = "<strong>" + message + "</strong>?";
        //ventana modal eliminar
       $("#eliminar-modal").fadeIn(200);
       $(".container").css('opacity','0.2');
        var variable = $(this).parent().parent();
        $(".modal-si").click(function(){
           $("#eliminar-modal").fadeOut(100);
            $(".container").css('opacity','1');
            variable.fadeOut(500);
        });
        $(".modal-close").click(function(){
           $("#eliminar-modal").fadeOut(100);
            $(".container").css('opacity','1');
        });
    });
    
    //titulo a editar
    $(".editar-click").click(function(){
        var titulo = $(this).parent().siblings().find('.info-title').html();
        document.location.href = 'eventos-editar.html';
        document.getElementById('titulo-editar').innerHTML = titulo;
    });
    
    //pagina-edit
    $(".pagina-edit-sel").click(function(){
        $(this).toggleClass('pagina-edit-selected');
    });
    
    $(".publicado-btn").click(function(){
            $(this).toggleClass('ok-destacado');
            $(this).toggleClass('publicado-btn');
            $(this).children(".listado-icon").toggleClass('fa-upload');
            $(this).children(".listado-icon").toggleClass('fa-thumbs-up');
            $(this).children('.publicado-txt').html("Publicado");
    });
    
    //CERRAR-BTN
    $("#cerrar-btn").click(function () {
        //rotate up burguer-btn
        $("#burguer-btn").removeClass("burguer-menu-action");
        //hide burguer-menu
        $(".burguer-menu").slideUp(500);
    });
});