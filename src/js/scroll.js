function nav() {
    $('.main-nav a').on('click', function(e) {
        e.preventDefault();
        const href = $(this).attr('href')
        const $target = $(href);

        $('html, body').animate({
            scrollTop : $target.offset().top
        }, 1000);

    });

    const $header = $('.main-header');
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 100) {
            $header.addClass('scroll');
        } else {
            $header.removeClass('scroll');
        }
    })
}

export { nav }