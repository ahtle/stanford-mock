$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 900) {
        $('.site-navigation').addClass('white-bg');
        $('.site-navigation').removeClass('site-navigation');
        $('#primary-menu li a ').addClass('black-font');
        $('main').removeClass('fixed');
        $('body>header').css('margin-bottom', '0');
    }

    if (scroll < 899) {
        $('.white-bg').addClass('site-navigation');
        $('.white-bg').removeClass('white-bg');
        $('#primary-menu li a ').removeClass('black-font');
        $('main').addClass('fixed');
        $('body>header').css('margin-bottom', '900px');
    }

});


$('#splash--scroller a').click(function() {
    window.scrollTo(0, 901);
});