function Addresses() {
    this.addr1 = $('#address1');
    this.addr2 = $('#address2');
    var addr1Click = true;
    var addr2Click = false;
    var that = this;

    this.init = function () {
        $(that.addr1).on('click mouseover', function(){
            $(this).addClass('active');
            $(that.addr2).removeClass('active');
            addr1Click = true;
            addr2Click = false;
            myMap.panTo([55.16920006333557,61.28235516918946], {flying: 1});
        });

        $(that.addr2).on('click mouseover', function(){
            $(this).addClass('active');
            $(that.addr1).removeClass('active');
            addr2Click = true;
            addr1Click = false;
            myMap.panTo([55.19253014229876,61.28338513745119],{flying: 1});
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