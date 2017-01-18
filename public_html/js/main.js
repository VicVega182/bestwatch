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
    if (device.mobile()) {
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
        $('.catalog-list').slick({
            dots: false,
            arrows: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        });
        $('.footer-menu ul li').not('.title').hide();
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
            text.css('padding', (each.innerHeight() - text.innerHeight()) / 2 + 'px 0px');
        }
    });
    $('.banner-slider__banner').height($this.width() * 4 / 7 + 'px').css('padding', ($('.banner-slider__banner').innerHeight() - $('.banner-slider__banner .inside').outerHeight()) / 2 + 'px 0px');
}).on('click', '.content-toggle-right a', function () {
    $('.content-right').show();
}).on('click', document, function (e) {
    $this = $(this);
    if ($this.width() < '1680') {
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
    if (device.mobile()) {
        $this.toggleClass("open");
        li.not('.title').toggle().animateCss('fadeIn');
        e.preventDefault();
    }
}).on('focus', '.header-search__inside input', function() {
    var $this = $(this);
    var div = $this.closest('.header-search__inside');
    div.addClass('focus');
}).on('focusout', '.header-search__inside input', function() {
    var $this = $(this);
    var div = $this.closest('.header-search__inside');
    div.removeClass('focus');
});
$(window).resize(function () {
    $('.banner-slider__slider').css('max-width', $('.banner-slider').width() * (parseFloat($('.banner-slider__slider').css('flex-basis')) / 100) + 'px');
});
