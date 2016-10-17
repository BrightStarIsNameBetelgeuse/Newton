function Addresses() {
    this.addr1 = $('#address1');
    this.addr2 = $('#address2');
    var addr1Click = true;
    var addr2Click = false;
    var that = this;
    this.centerlat = 55.17872412595775;
    this.centerLng = 61.29276521742152;

    var addr1 = {
        lat: 55.1925709,
        lng: 61.2842103
    };

    var addr2 = {
        lat: 55.16947795784424,
        lng: 61.282204270845675
    };


    // Sets the map on all markers in the array.
    function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }

// Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
        setMapOnAll(null);
    }

// Shows any markers currently in the array.
    function showMarkers() {
        setMapOnAll(map);
    }

// Deletes all markers in the array by removing references to them.
    function deleteMarkers() {
        clearMarkers();
        markers = [];
    }

    this.init = function () {
        $(that.addr1).on('click mouseover', function () {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                $(that.addr2).removeClass('active');
                addr1Click = true;
                addr2Click = false;

                map.setCenter({
                    lat: addr1.lat,
                    lng: addr1.lng
                });
                map.setZoom(13);
                var latLng = new google.maps.LatLng(addr1.lat, addr1.lng); //Makes a latlng
                map.panTo(latLng);
                map.setZoom(16);
                deleteMarkers()
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(addr1.lat, addr1.lng),
                    icon: 'img/maps/ico_geo_act.png',
                    map: map
                });

                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(addr2.lat, addr2.lng),
                    icon: 'img/maps/ico_geo_inact.png',
                    map: map
                });
            }
        });

        $(that.addr2).on('click mouseover', function () {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                $(that.addr1).removeClass('active');
                addr2Click = true;
                addr1Click = false;
                map.setCenter({
                    lat: addr2.lat,
                    lng: addr2.lng
                });
                map.setZoom(13);
                var latLng = new google.maps.LatLng(addr2.lat, addr2.lng); //Makes a latlng
                map.panTo(latLng);
                deleteMarkers()
                map.setZoom(16);
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(addr2.lat, addr2.lng),
                    icon: 'img/maps/ico_geo_act.png',
                    map: map
                });
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(addr1.lat, addr1.lng),
                    icon: 'img/maps/ico_geo_inact.png',
                    map: map
                });
            }
        });

        $(that.addr2).on('click', function () {
            //myMap.setZoom(15);

        });
    }
}

/*init icons*/
function initIcons() {

    var canvas_bez, canvas_kach, canvas_plan, canvas_stand, canvas_zas,
        stage_bez, stage_kach, stage_plan, stage_stand, stage_zas,
        exportRoot_bez, exportRoot_kach, exportRoot_plan, exportRoot_stand, exportRoot_zas;

    var canvas_size = $(window).width() * 0.156;
    if (canvas_size > 300) canvas_size = 300;

    var isBez = false, isKach = false, isPlan = false, isStand = false, isZas = false;

    this.init = function () {
        canvas_bez = document.getElementById("canvas_bez");
        $(canvas_bez).width(canvas_size);
        $(canvas_bez).height(canvas_size);
        canvas_kach = document.getElementById("canvas_kach");
        $(canvas_kach).width(canvas_size);
        $(canvas_kach).height(canvas_size);
        canvas_plan = document.getElementById("canvas_plan");
        $(canvas_plan).width(canvas_size);
        $(canvas_plan).height(canvas_size);
        canvas_stand = document.getElementById("canvas_stand");
        $(canvas_stand).width(canvas_size);
        $(canvas_stand).height(canvas_size);
        canvas_zas = document.getElementById("canvas_zas");
        $(canvas_zas).width(canvas_size);
        $(canvas_zas).height(canvas_size);

        exportRoot_bez = new lib.ico_bezopasnost();
        exportRoot_kach = new lib.ico_kachestvo();
        exportRoot_plan = new lib.ico_planerovki();
        exportRoot_zas = new lib.ico_zactroishik();
        exportRoot_stand = new lib.ico_standart();

        stage_bez = new createjs.Stage(canvas_bez);
        stage_bez.addChild(exportRoot_bez);

        stage_kach = new createjs.Stage(canvas_kach);
        stage_kach.addChild(exportRoot_kach);

        stage_plan = new createjs.Stage(canvas_plan);
        stage_plan.addChild(exportRoot_plan);

        stage_stand = new createjs.Stage(canvas_stand);
        stage_stand.addChild(exportRoot_stand);

        stage_zas = new createjs.Stage(canvas_zas);
        stage_zas.addChild(exportRoot_zas);
    };

    var tick1 = 0, tick2 = 0, tick3 = 0, tick4 = 0, tick5 = 0;

    this.handleTick1 = function () {
        if (tick1 < 35) {
            tick1++;
            stage_bez.update();
        }
        else createjs.Ticker.paused = true;
    };
    this.handleTick2 = function () {
        if (tick2 < 35) {
            tick2++;
            stage_kach.update();
        }
    };
    this.handleTick3 = function () {
        if (tick3 < 35) {
            tick3++;
            stage_plan.update();
        }
    };

    this.handleTick4 = function () {
        if (tick4 < 35) {
            tick4++;
            stage_stand.update();
        }
    };
    this.handleTick5 = function () {
        if (tick5 < 35) {
            tick5++;
            stage_zas.update();
        }
    };

    this.start_bez = function () {
        if (!isBez)
            tick1 = 0;
        createjs.Ticker.addEventListener("tick", this.handleTick1);
        isBez = true;
    };

    this.start_kach = function () {
        if (!isKach)
            tick2 = 0;
        createjs.Ticker.addEventListener("tick", this.handleTick2);
        isKach = true;
    };

    this.start_plan = function () {
        if (!isPlan)
            tick3 = 0;
        createjs.Ticker.addEventListener("tick", this.handleTick3);
        isPlan = true;
    };

    this.start_stand = function () {
        if (!isStand)
            tick4 = 0;
        createjs.Ticker.addEventListener("tick", this.handleTick4);
        isStand = true;
    };

    this.start_zas = function () {
        if (!isZas)
            tick5 = 0;
        createjs.Ticker.addEventListener("tick", this.handleTick5);
        isZas = true;
    };

    this.repaint_bez = function(){
        tick1 = 0;
        this.start_bez();
    };
    this.repaint_kach = function(){
        tick2 = 0;
    };
    this.repaint_plan = function(){
        tick3 = 0;
    };
    this.repaint_stand = function(){
        tick4 = 0;
    };
    this.repaint_zas = function(){
        tick5 = 0;
    };
}

$(document).ready(function () {
    /*init red slider*/
    var slider_height = $('.red-slider').height(),
        adv_height = $('.newton__item.advantages').height(),
        height_screen = $(window).height(),
        slider_start_pos = $('.red-slider').offset().top,
        delta_slider_pos = Math.abs(slider_start_pos - height_screen);
    console.log(delta_slider_pos);

    var inIcons = new initIcons();

    window.onload = function () {
        inIcons.init();
        AOS.init();
    };

    var support = {animations: Modernizr.cssanimations},
        container = document.getElementById('ip-container'),
        header = container.querySelector('.ip-header'),
        loader = new PathLoader(document.getElementById('ip-loader-circle')),
        animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        },
    // animation end event name
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')];

    function init() {
        var onEndInitialAnimation = function () {
            if (support.animations) {
                this.removeEventListener(animEndEventName, onEndInitialAnimation);
            }

            startLoading();
        };

        // disable scrolling
        window.addEventListener('scroll', noscroll);

        // initial animation
        classie.add(container, 'loading');

        if (support.animations) {
            container.addEventListener(animEndEventName, onEndInitialAnimation);
        }
        else {
            onEndInitialAnimation();
        }
    }

    function startLoading() {
        // simulate loading something..
        var simulationFn = function (instance) {
            var progress = 0,
                interval = setInterval(function () {
                    progress = Math.min(progress + Math.random() * 0.1, 1);

                    instance.setProgress(progress);

                    // reached the end
                    if (progress === 1) {
                        classie.remove(container, 'loading');
                        classie.add(container, 'loaded');
                        clearInterval(interval);

                        var onEndHeaderAnimation = function (ev) {
                            if (support.animations) {
                                if (ev.target !== header) return;
                                this.removeEventListener(animEndEventName, onEndHeaderAnimation);
                            }

                            classie.add(document.body, 'layout-switch');
                            window.removeEventListener('scroll', noscroll);
                        };

                        if (support.animations) {
                            header.addEventListener(animEndEventName, onEndHeaderAnimation);
                        }
                        else {
                            onEndHeaderAnimation();
                        }
                    }
                }, 80);
        };

        loader.setProgressFn(simulationFn);
    }

    function noscroll() {
        window.scrollTo(0, 0);
    }

    init();

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

    var adr = new Addresses();
    adr.init();

    $(window).scroll(function () {

        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var delta_scroll = scrolled * 0.4 - $(window).width() * 0.126;
        //*scrolled*=0.25;
        $('.newton__header-image').css('transform', 'translateY(' + delta_scroll + 'px)');

        if (( scrolled >= slider_start_pos ) && ( $('.red-slider').offset().top <= slider_start_pos + adv_height - slider_height )) {
            if (scrolled >= slider_start_pos + adv_height - 170) {
                delta_slider = 0;
            }
            else {
                var delta_slider = (scrolled - slider_start_pos) * 0.8;
                if (delta_slider > adv_height - slider_height) {
                    delta_slider = adv_height - slider_height;
                }
            }

            $('.red-slider').css('transform', 'translateY(' + delta_slider + 'px)');
        }

        if (scrolled > $('#canvas_bez').offset().top - $(window).height() / 2) {
            inIcons.start_bez();
        }
        if (scrolled > $('#canvas_kach').offset().top - $(window).height() / 2) {
            inIcons.start_kach();
        }
        if (scrolled > $('#canvas_plan').offset().top - $(window).height() / 2) {
            inIcons.start_plan();
        }
        if (scrolled > $('#canvas_stand').offset().top - $(window).height() / 2) {
            inIcons.start_stand();
        }
        if (scrolled > $('#canvas_zas').offset().top - $(window).height() / 2) {
            inIcons.start_zas();
        }
    });

    $('.gallery-item:nth-child(1)').on('mouseover', function(){
        $('.gallery').addClass('hover1');
    });
    $('.gallery-item:nth-child(1)').on('mouseout', function(){
        $('.gallery').removeClass('hover1');
    });
    $('.gallery-item:nth-child(2)').on('mouseover', function(){
        $('.gallery').addClass('hover2');
    });
    $('.gallery-item:nth-child(2)').on('mouseout', function(){
        $('.gallery').removeClass('hover2');
    });
    $('.gallery-item:nth-child(4)').on('mouseover', function(){
        $('.gallery').addClass('hover3');
    });
    $('.gallery-item:nth-child(4)').on('mouseout', function(){
        $('.gallery').removeClass('hover3');
    });
    $('.gallery-item:nth-child(5)').on('mouseover', function(){
        $('.gallery').addClass('hover4');
    });
    $('.gallery-item:nth-child(5)').on('mouseout', function(){
        $('.gallery').removeClass('hover4');
    });

});