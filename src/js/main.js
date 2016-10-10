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
        $(that.addr1).on('click mouseover', function(){
            if(!$(this).hasClass('active')) {
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

        $(that.addr2).on('click mouseover', function(){
            if(!$(this).hasClass('active')) {
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

        $(that.addr2).on('click', function(){
            //myMap.setZoom(15);

        });
    }
}

$(document).ready(function () {
    AOS.init();
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
});