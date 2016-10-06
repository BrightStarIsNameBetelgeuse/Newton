$(document).ready(function(){
    $('.newton__menu').on('mouseover', function(){
        $(this).addClass('open');
    });

    /*$('.newton__menu').on('mouseout', function(){
        $(this).removeClass('open');
    });*/

    $('#action-block,.discount-menu-block').on('mouseover', function(){
        $('.discount-menu-block').addClass('hover');
    });

    $('#action-block,.discount-menu-block').on('mouseout', function(){
        $('.discount-menu-block').removeClass('hover');
    });
});