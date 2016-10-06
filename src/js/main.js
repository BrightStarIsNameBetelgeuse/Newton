$(document).ready(function(){
    $('.newton__menu').on('mouseover', function(){
        $(this).addClass('open');
    });

    $('.newton__menu').on('mouseout', function(){
        $(this).removeClass('open');
    });
});