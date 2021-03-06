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
    if ($.cookie('citygate') == null) {
        $('.citygate').addClass('show-citygate');
    }
    if ($(document).height() > $('body').height()) {
        $('body, html, .content').css('height', '100%');
    }
    if (device.mobile() || device.tablet()) {
        $('.catalog-item, .checkout-block, .news-item').addClass('nohover');
    }
    if (device.desktop()) {
        $('.reccomend-item').addClass('hovered');
        if ($('.checkout-right').exists()) {
            $('.checkout-right').addClass('sticky');
        }
    }
    $(function () {
        var projects = [
            {
                label: "Casio Gshock"
            },
            {
                label: "Basio Gshock"
            },
            {
                label: "Vasio Gshock"
            },
            {
                label: "Dasio Gshock"
            },
            {
                label: "Gasio Gshock"
            }
        ];
        $("#search-auto").autocomplete({
            minLength: 0,
            source: projects,
            open: function (event, ui) {
                $('.ui-autocomplete').css({
                    'top': $('.ui-autocomplete').position().top - 45 + 'px',
                    'width': $('.header-search__inside').width() + 8 + 'px'
                });
                $('.header-search__inside').removeClass('focus');
            },
            focus: function (event, ui) {
                $("#search-auto").val(ui.item.label);
                return false;
            },
            select: function (event, ui) {
                $("#search-auto").val(ui.item.label);
                $('.header-search__inside form').submit();
                return false;
            },
            close: function (event, ui) {
                $('.header-search__inside').addClass('focus');
            }
        });
        $("#search-auto-mob").autocomplete({
            minLength: 0,
            source: projects,
            focus: function (event, ui) {
                $("#search-auto-mob").val(ui.item.label);
                return false;
            },
            select: function (event, ui) {
                $("#search-auto-mob").val(ui.item.label);
                $('.header-search__mob__form').submit();
                return false;
            }
        });
    });
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
            $('body').append('<span class="menu-shadow"></span>');
            $('.menu-shadow').css('top', $('.wrapper').position().top + 'px');
        },
        mouseleave: function () {
            $('.header-nav > nav > ul').find('> li').removeClass('blockout');
            $(this).removeClass('hovered');
            $('.menu-shadow').remove();
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
}).on('click', '.citygate a', function (e) {
    $('.citygate').remove();
    $.cookie('citygate', 'hide');
    e.preventDefault();
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
    var $this = new $(this);
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
    var $this = new $(this);
    $this.find('.login-left').addClass('hide-mb');
    if ($(document).width() < '768') {
        $this.find('.login-banner').show();
    }
}).on('shown.bs.modal', '#registration', function () {
    var $this = new $(this);
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
    var $this = new $(this);
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
    btn.find('span').html($this.html());
    if ($this.hasClass('desc')) {
        btn.addClass('desc');
    } else {
        btn.removeClass('desc');
    }
    e.preventDefault();
}).on('click', '.filter-open', function (e) {
    var $opens = $(this);
    var $this = $(this).find('i');
    $('.catalog-page__filter').toggleClass('is-open');
    $this.toggleClass('icon-close');
    $opens.toggleClass('opened');
    $('.catalog-page__list__shadow').toggle();
    e.preventDefault();
}).on('click', '.cart-js__minus', function (e) {
    var $this = $(this);
    var $input = $this.parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
}).on('click', '.cart-js__plus', function (e) {
    var $this = $(this);
    var $input = $this.parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
}).on('change', '.cart-js__input', function () {
    var $this = $(this);
    var parent = $this.closest('.cart-catalog__item');
    if ($this.val() > 1) {
        parent.find('.cart-item__price__quote').removeClass('hidden');
    } else {
        parent.find('.cart-item__price__quote').addClass('hidden');
    }
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
}).on('click', '.cartPickup .dropdown-menu li', function (e) {
    var $this = $(this);
    var dropdown = $this.closest('.dropdown');
    dropdown.find('.button-paste').html($this.html());
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
}).on('show.bs.collapse', '#collapseCheckout', function () {
    $('.checkout-cart__showall').text('Скрыть');
}).on('hide.bs.collapse', '#collapseCheckout', function () {
    $('.checkout-cart__showall').text('Показать все');
}).on('click', '.text-page__gallery .slick-slide, .shop-page__gallery .slick-slide', function () {
    var $this = $(this);
    $this.closest('.slick-slider').slick('slickNext');
}).on('click', '.card-sale.full', function (e) {
    var $this = $(this);
    $('.card-oldprice').removeClass('hidden');
    $('.card-oldprice span').text($('.card-price span').text());
    $('.card-price span').text(parseInt(parseInt($('.card-oldprice span').text()) - (parseInt($('.card-oldprice span').text()) * ($this.data('sale') / 100))));
    $this.text('-' + $this.data('sale') + '%').removeClass('full');
    e.preventDefault();
});
$(window).resize(function () {
    $('.banner-slider__slider').css('max-width', $('.banner-slider').width() * (parseFloat($('.banner-slider__slider').css('flex-basis')) / 100) + 'px');
    $('.content-toggle-right .inside').css('max-width', $('.content-toggle-right').width() + 'px');
    $('.slick-slider').slick('refresh');
    $('.content-right .inside').css('max-width', $('.content-right').width() + 'px');
    if ($(document).width() > 1920) {
        $('.content-right .inside .nav-tabs').css('max-width', $('.content-right').width() + 'px');
    }
    if ($(document).width() < '768' && device.mobile()) {
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
window.addEventListener("orientationchange", function () {
    location.reload();
    $('.slick-slider').slick('refresh');
}, false);
$(function () {
    $(".content-right-shadow").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'right') {
                $('.content-right').hide();
                $('.content-right-shadow').remove();
            }
        }
    });
});

