//import $ from '../node_modules/jquery/dist/jquery.js';
var $ = require('../../node_modules/jquery/dist/jquery.js');
$(document).ready(function () {
    (function () {
        $('.newton__menu').on('mouseover', function () {
            $(this).addClass('open');
        });

        $('.newton__menu').on('mouseout', function () {
            $(this).removeClass('open');
        });

        $('#action-block,.discount-menu-block,.newton__menu-submenu').on('mouseover', function () {
            $('.newton__menu').addClass('submenu');
        });

        $('#action-block,.discount-menu-block,.newton__menu-submenu').on('mouseout', function () {
            $('.newton__menu').removeClass('submenu');
        });
    })();

});