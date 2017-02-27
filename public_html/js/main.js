$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
$.fn.exists = function () {
    return $(this).length;
};

$(document).ready(function () {
    if ($('.banner-slider__slider').exists()) {
        $('.banner-slider__slider').slick({
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-right"></i></button>'
        });
    }
    $('.header-nav > nav > ul').find('> li').on({
        mouseenter: function () {
            $(this).addClass('hovered');
            $('.header-nav > nav > ul').find('> li:not(.hovered)').addClass('blockout');
        },
        mouseleave: function () {
            $('.header-nav > nav > ul').find('> li').removeClass('blockout');
            $(this).removeClass('hovered');
        }
    });
    if ($(window).height() < '900') {
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
    if ($('.brand-description').exists()) {
        $('.brand-description__container, .brand-description .right').matchHeight({
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
    if ($(".content-right .inside").exists()) {
        $('.content-right .inside').css('max-width', $('.content-right').width() + 'px');
        if ($(document).width() > 1920) {
            $('.content-right .inside .nav-tabs').css('max-width', $('.content-right').width() + 'px');
        }
    }
    if ($(".content-toggle-right .inside").exists()) {
        $('.content-toggle-right .inside').css('max-width', $('.content-toggle-right').width() + 'px');
    }
    if ($(".news-block__all").exists()) {
        $('.news-block__all').css('margin', ($('.news-block__item').outerHeight() - $('.news-block__all').outerHeight()) / 2 + 'px auto');
    }
    if ($('.advantage-item').exists()) {
        $('.advantage-item').each(function () {
            var $this = $(this);
            $this.css('padding', ($this.outerHeight() - $this.find('.inside').outerHeight()) / 2 + 'px 20px');
        });
    }
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
    if ($('.card-slider').exists()) {
        if ($(document).width() >= 1024) {
            $('.card-slider').css('max-width', $('.card-body').width() * 0.35 - 50 + 'px');
        } else if ($(document).width() < 1024 && $(document).width() >= 768) {
            $('.card-slider').css('max-width', $('.card-body').width() * 0.4 + 'px');
        } else if ($(document).width() < 768) {
            $('.card-slider').css('max-width', $('.card-body').width() + 'px');
        }
    }
    if ($('.shop-page__gallery').exists()) {
        $('.shop-page__gallery').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true
        });
    }
    if ($('.text-page__gallery').exists()) {
        $('.text-page__gallery').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true
        });
    }
    if ($('.brand-slider').exists()) {
        $('.brand-slider').css('max-width', $('.catalog-page__list').width() + 'px');
        $('.brand-slider__start').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            centerMode: false,
            variableWidth: true,
            nextArrow: '.slick-next-banner',
            prevArrow: '.slick-prev-banner'
        });
    }
    if ($('.card-slider__nav').exists()) {
        $('.card-slider__for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.card-slider__nav',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: true,
                        prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-dd"></i></button>',
                        nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-dd"></i></button>'
                    }
                }
            ]
        });
        $('.card-slider__nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.card-slider__for',
            dots: false,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-dd"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-dd"></i></button>',
            centerMode: false,
            focusOnSelect: true,
            vertical: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        vertical: false
                    }
                }
            ]
        });
    }
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
}).on('init', '.brand-slider__start', function (slick) {
    var $this = $(this);
    var slide = $this.find('.slick-slide');
    slide.css('max-width', $('.brand-slider').width() * (parseFloat(slide.css('flex-basis')) / 100) + 'px');
    slide.matchHeight({
        row: true
    });
}).on('click', '.mobile-menu__header .right-open', function (e) {
    var $this = $(this);
    $('.mobile-menu').removeClass('is-open');
    $('body').css('overflow', 'hidden');
    $('.content-right').show();
    if ($this.hasClass('like')) {
        $('.content-right a.like').tab('show');
    } else if ($this.hasClass('eye')) {
        $('.content-right a.visited').tab('show');
    }
    e.preventDefault();
}).on('click', '.content-toggle-right a', function () {
    $('.content-right').show();
    $('body').append('<a href="#" class="content-right-shadow"></a>');
}).on('click', '.content-right-shadow', function (e) {
    $this = $(this);
    $('.content-right').hide();
    $this.remove();
    e.preventDefault();
//    if ($this.width() < '1660') {
//        var $right = $('.content-right');
//        var $toggle = $('.content-toggle-right');
//        var $mobile = $('.mobile-menu__header');
//        if (!$right.is(e.target) // если клик был не по нашему блоку
//                && $right.has(e.target).length === 0
//                && !$toggle.is(e.target)
//                && $toggle.has(e.target).length === 0
//                && !$mobile.is(e.target)
//                && $mobile.has(e.target).length === 0) { // и не по его дочерним элементам и то что не открыт
//            $right.hide(); // скрываем его
//        }
//    }
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
    e.preventDefault();
}).on('click', '.menu-mobile__hide', function (e) {
    $('.mobile-menu').removeClass('is-open');
    e.preventDefault();
}).on('click', '.mobile-catalog__open', function (e) {
    $('.mobile-catalog').addClass('is-open');
    e.preventDefault();
}).on('click', '.menu-catalog__hide', function (e) {
    $('.mobile-catalog').removeClass('is-open');
    e.preventDefault();
}).on('click', '.mobile-brand__open', function (e) {
    $('.mobile-brand').addClass('is-open');
    e.preventDefault();
}).on('click', '.menu-brand__hide', function (e) {
    $('.mobile-brand').removeClass('is-open');
    e.preventDefault();
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
}).on('shown.bs.modal', '#cityChange', function () {
    var $this = $(this);
    if (device.mobile()) {
        $this.find('.nav-tabs').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true
        });
    }
}).on('hide.bs.modal', '#cityChange', function () {
    var $this = $(this);
    if (device.mobile()) {
        $this.find('.nav-tabs').slick('unslick');
    }
}).on('shown.bs.modal', '#login', function () {
    var $this = $(this);
    $this.find('.login-slider').css('height', $this.find('.modal-content').height() + 'px').slick({
        arrows: false,
        dots: true,
        autoplay: true
    });
    setTimeout(function () {
        $this.find('.slick-slide').each(function () {
            var slide = $(this);
            var text = slide.find('.inside');
            text.css('padding', ((slide.height() - text.innerHeight()) / 2 + 'px 0px'));
        });
    }, 100);
    $('.modal').not($this).modal('hide');
}).on('hide.bs.modal', '#login', function () {
    var $this = $(this);
    $this.find('.login-left').addClass('hide-mb');
    if ($(document).width() < '768') {
        $this.find('.login-banner').show();
    }
}).on('shown.bs.modal', '#registration', function () {
    var $this = $(this);
    $this.find('.login-slider').css('height', $this.find('.modal-content').height() + 'px').slick({
        arrows: false,
        dots: true,
        autoplay: true
    });
    setTimeout(function () {
        $this.find('.slick-slide').each(function () {
            var slide = $(this);
            var text = slide.find('.inside');
            text.css('padding', ((slide.height() - text.innerHeight()) / 2 + 'px 0px'));
        });
    }, 100);
    $('.modal').not($this).modal('hide');
}).on('hide.bs.modal', '#registration', function () {
    var $this = $(this);
    $this.find('.login-left').addClass('hide-mb');
    if ($(document).width() < '768') {
        $this.find('.login-banner').show();
    }
}).on('click', '.login-banner', function () {
    var $this = $(this);
    var closest = $this.closest('.modal-body').find('.login-left');
    closest.removeClass('hide-mb');
    $this.hide();
}).on('click', '.close-login-slider', function () {
    var $this = $(this);
    var closest = $this.closest('.login-left');
    closest.addClass('hide-mb');
}).on('click', '.sortChange a', function (e) {
    var $this = $(this);
    var parent = $this.closest('.sortChange');
    var btn = parent.find('button');
    btn.find('span').text($this.text());
    e.preventDefault();
}).on('click', '.filter-open', function (e) {
    var $this = $(this).find('i');
    $('.catalog-page__filter').toggleClass('is-open');
    $this.toggleClass('icon-close');
    $('.catalog-page__list__shadow').toggle();
    e.preventDefault();
}).on('click', '.cart-js__minus', function () {
    var $this = $(this);
    var $input = $this.parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
}).on('click', '.cart-js__plus', function () {
    var $this = $(this);
    var $input = $this.parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
}).on('change', '.cart-js__input', function () {
    var $this = $(this);
    var parent = $this.closest('.cart-catalog__item');
    parent.find('.cart-item__price__quote').removeClass('hidden');
    parent.find('.cart-js__count').text($this.val());
    parent.find('.cart-js__total').text($this.val() * parent.find('.cart-js__price').text());
    var i = 0;
    $('.cart-catalog__item').each(function () {
        var price = $(this).find('.cart-js__total');
        i = i + parseInt(price.text());
    });
    $('.cart-delivery__total__summ span').text(i);
    $('.cart-delivery__total__all span').text(i + parseInt($('.cart-delivery__total__delivery span').text()));
}).on('click', '.cart-catalog__item__remove', function () {
    var $this = $(this);
    $this.closest('.cart-catalog__item').remove();
}).on('shown.bs.tab', '.cart-body__right .nav-tabs a', function (e) {
    var $this = $(this);
    if ($this.hasClass('free')) {
        $('.cart-delivery__total__delivery span').text('0');
        $('.cart-delivery__total__all span').text($('.cart-delivery__total__summ span').text());
    }
}).on('click', '.cartDeliveryDD .dropdown-menu li', function (e) {
    var $this = $(this);
    var dropdown = $this.closest('.dropdown');
    var delivery = $('.cart-delivery__total__delivery span');
    var summ = $('.cart-delivery__total__summ span');
    var all = $('.cart-delivery__total__all span');
    dropdown.find('.button-paste').html($this.html());
    delivery.text($this.data('price'));
    all.text(parseInt(summ.text()) + $this.data('price'));
    e.preventDefault;
}).on('click', '.card-share', function (e) {
    $('.card-header__social').show();
    e.preventDefault();
}).on('click', '.card-header__social__close', function (e) {
    $('.card-header__social').hide();
    e.preventDefault();
}).on('click', '.open-mobile-search', function (e) {
    $('.header-first__search__mobile').toggle();
    e.preventDefault();
}).on('click', '.close-mobile-search', function (e) {
    $('.header-first__search__mobile').toggle();
    e.preventDefault();
});
$(window).resize(function () {
    $('.banner-slider__slider').css('max-width', $('.banner-slider').width() * (parseFloat($('.banner-slider__slider').css('flex-basis')) / 100) + 'px');
    $('.content-right .inside').css('max-width', $('.content-right').width() + 'px');
    if ($(document).width() > 1920) {
        $('.content-right .inside .nav-tabs').css('max-width', $('.content-right').width() + 'px');
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
        $('.banner-slider__slider').css('max-width', $('.banner-slider').width() * (parseFloat($this.css('flex-basis')) / 100) + 'px');
        $('.footer-social__right a').css({
            'height': $('.footer-social__right a').width() - 1 + 'px',
            'line-height': $('.footer-social__right a').width() + 3 + 'px'
        });
    } else {
        $('.news-block').slick('unslick');
        $('.catalog-list').slick('unslick');
    }
    if ($('.card-slider').exists()) {
        $('.card-slider').css('max-width', $('.card-body').width() * 0.35 - 35 + 'px');
    }
});


