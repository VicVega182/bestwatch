$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(document).ready(function () {
    $('.banner-slider__slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-right"></i></button>'
    });
    $('.header-nav > nav > ul').find('> li').on({
        mouseenter: function () {
            $(this).addClass('hovered');
            $('.header-nav > nav > ul').find('> li:not(.hovered)').addClass('blockout');
        },
        mouseleave: function () {
            $('.header-nav > nav > ul').find('> li').removeClass('blockout')
            $(this).removeClass('hovered');
        }
    });
    if($(window).height() < '900') {
        $('.drawer-footer').hide();
    }
    if ($(document).width() < '768') {
        $('.news-block').slick({
            dots: false,
            arrows: false,
            autoplay: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true
        });
        $('.catalog-list.main').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        });
        $('.footer-menu ul li').not('.title').hide();
        $('.footer-social__right a').css({
            'height': $('.footer-social__right a').width() - 1 + 'px',
            'line-height': $('.footer-social__right a').width() + 3 + 'px'
        });
        $('.subscribe-form button').html('<i class="icon-plane"></i>');
    } else {
        $('.news-block__item').matchHeight({
            row: true
        });
    }
    $('.catalog-banner, .catalog-item').matchHeight({
        row: true
    });
    $('.reccomend-right, .reccomend-left').matchHeight({
        row: true
    });
    $('.drawer').drawer({
        class: {
            nav: 'drawer-nav',
            toggle: 'drawer-toggle',
            overlay: 'drawer-overlay',
            open: 'drawer-open',
            close: 'drawer-close',
            dropdown: 'drawer-dropdown'
        },
        iscroll: {
            mouseWheel: true,
            preventDefault: false
        },
        showOverlay: true
    });
    $('.content-right .inside').css('max-width', $('.content-right').width() + 'px');
    $('.content-toggle-right .inside').css('max-width', $('.content-toggle-right').width() + 'px');
    $('.news-block__all').css('margin', ($('.news-block__item').outerHeight() - $('.news-block__all').outerHeight()) / 2 + 'px auto');
    $('.advantage-item').each(function () {
        var $this = $(this);
        $this.css('padding', ($this.outerHeight() - $this.find('.inside').outerHeight()) / 2 + 'px 20px');
    });
    $('[data-countdown]').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            var totalHours = event.offset.totalDays * 24 + event.offset.hours;
            totalSec = event.offset.totalDays * 86400 + event.offset.hours * 3600 + event.offset.minutes * 60 + +event.offset.seconds;
            $(this).html(event.strftime(totalHours + ' : %M : %S'));
        });
        $this.closest('.banner-timer').find('.pie').pietimer({
            timerSeconds: totalSec,
            color: '#f81029',
            fill: false,
            showPercentage: false,
            callback: function () {}
        });
    });
}).on('init', '.banner-slider__slider', function (slick) {
    var $this = $(this);
    var dots = $this.find('.slick-dots');
    var slide = $this.find('.slick-slide');
    $this.css('max-width', $('.banner-slider').width() * (parseFloat($this.css('flex-basis')) / 100) + 'px');
    dots.css('margin-left', '-' + dots.width() / 2 + 'px');
    $this.css('height', $this.width() * 4 / 7 + 'px');
    slide.each(function () {
        var each = new $(this);
        var text = each.find('.banner-slider__slider__text');
        if (!device.mobile()) {
            setTimeout(function () {
                text.css('padding', ((each.height() - text.innerHeight()) / 2 + 'px 0px'));
            }, 100);
        }
    });
    setTimeout(function () {
        $('.banner-slider__banner').height($this.width() * 4 / 7 + 'px').css('padding', ($('.banner-slider__banner').innerHeight() - $('.banner-slider__banner .inside').outerHeight()) / 2 + 'px 0px');
    }, 100);
}).on('click', '.content-toggle-right a', function () {
    $('.content-right').show();
}).on('click', document, function (e) {
    $this = $(this);
    if ($this.width() < '1660') {
        var $right = $('.content-right');
        var $toggle = $('.content-toggle-right');
        if (!$right.is(e.target) // если клик был не по нашему блоку
                && $right.has(e.target).length === 0 && !$toggle.is(e.target) && $toggle.has(e.target).length === 0) { // и не по его дочерним элементам и то что не открыт
            $right.hide(); // скрываем его
        }
    }
}).on('click', '.footer-menu .title', function (e) {
    var $this = $(this);
    var ul = $this.closest('ul');
    var li = ul.find('li');
    if ($(document).width() < '768') {
        $this.toggleClass("open");
        li.not('.title').toggle().animateCss('fadeIn');
        e.preventDefault();
    }
}).on('focus', '.header-search__inside input', function () {
    var $this = $(this);
    var div = $this.closest('.header-search__inside');
    div.addClass('focus');
}).on('focusout', '.header-search__inside input', function () {
    var $this = $(this);
    var div = $this.closest('.header-search__inside');
    div.removeClass('focus');
}).on('click', '.menu-mobile__open', function (e) {
    $('.mobile-menu').addClass('is-open');
}).on('click', '.menu-mobile__hide', function (e) {
    $('.mobile-menu').removeClass('is-open');
}).on('click', '.mobile-catalog__open', function (e) {
    $('.mobile-catalog').addClass('is-open');
}).on('click', '.menu-catalog__hide', function (e) {
    $('.mobile-catalog').removeClass('is-open');
}).on('click', '.mobile-brand__open', function (e) {
    $('.mobile-brand').addClass('is-open');
}).on('click', '.menu-brand__hide', function (e) {
    $('.mobile-brand').removeClass('is-open');
}).on('click', '.catalog__nav.catalog-first a', function () {
    var $this = $(this);
    var opened = $this.closest('li').find('.catalog-second');
    opened.addClass('is-open');
}).on('click', '.catalog__nav.catalog-first a', function () {
    var $this = $(this);
    var opened = $('.' + $this.data('nav'));
    $('.close-catalog').removeClass('hidden');
    opened.addClass('is-open');
}).on('click', '.close-catalog', function () {
    var $this = $(this);
    var container = $this.closest('.mobile-menu__container');
    container.find('.catalog-second').removeClass('is-open');
    $this.addClass('hidden');
}).on('click', '.header-search__inside button', function () {
    if ($(document).width() >= 768 && $(document).width() <= 1023 && $('.header-search__inside').hasClass('focus')) {
        $('.header-search__inside form').submit();
    } else {
        $('.header-search__inside').addClass('focus');
        $('.header-search__inside input').focus();
        return false;
    }
});
$(window).resize(function () {
    $('.banner-slider__slider').css('max-width', $('.banner-slider').width() * (parseFloat($('.banner-slider__slider').css('flex-basis')) / 100) + 'px');
    $('.content-right .inside').css('max-width', $('.content-right').width() + 'px');
    if ($(document).width() < '768') {
        $('.news-block').slick({
            dots: false,
            arrows: false,
            autoplay: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true
        });
        $('.catalog-list.main').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        });
        $('.footer-menu ul li').not('.title').hide();
        $('.banner-slider__slider').css('max-width', $('.banner-slider').width() * (parseFloat($this.css('flex-basis')) / 100) + 'px');
        $('.footer-social__right a').css({
            'height': $('.footer-social__right a').width() - 1 + 'px',
            'line-height': $('.footer-social__right a').width() + 3 + 'px'
        });
    } else {
        $('.news-block').slick('unslick');
        $('.catalog-list').slick('unslick');
    }
});

