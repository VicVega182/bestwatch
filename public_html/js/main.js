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
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true
        });
    } else {
        $('.news-block__item').matchHeight({
            row: true
        });
    }
    $('.catalog-banner, .catalog-item').matchHeight({
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
});
$(window).resize(function () {
    $('.banner-slider__slider').css('max-width', $('.banner-slider').width() * (parseFloat($('.banner-slider__slider').css('flex-basis')) / 100) + 'px');
});
