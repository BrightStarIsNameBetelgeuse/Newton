var $ = require('../../node_modules/jquery/dist/jquery.js');
$(document).ready(function () {
    (function () {
        $('.newton__menu').on('mouseover', function () {
            $(this).addClass('open');
        });

        $('.newton__menu,.newton__menu-submenu').on('mouseout', function () {
            $(this).removeClass('open');
        });

        $('#action-block,.discount-menu-block,.newton__menu-submenu').on('mouseover', function () {
            $('.newton__menu').addClass('open');
            $('.newton__menu').addClass('submenu');
            $('.newton__menu-submenu').addClass('open');
            $('.submenu-cover').addClass('open');
        });

        $('#action-block,.discount-menu-block').on('mouseout', function () {
            $('.newton__menu').removeClass('submenu');
            $('.newton__menu-submenu').removeClass('open');
            $('.submenu-cover').removeClass('open');
        });
        $('.newton__menu-submenu').on('mouseout', function () {
            $('.newton__menu-submenu').removeClass('open');
            $('.newton__menu').removeClass('submenu');
            $('.newton__menu').removeClass('open');
            $('.submenu-cover').removeClass('open');
        });
    })();

});