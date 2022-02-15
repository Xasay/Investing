function scrollFunction(leftScroll, rightScroll, scrollBlock) {
    var maxScroll = $(scrollBlock).get(0).scrollWidth - $(scrollBlock).get(0).clientWidth;

    var artim = 140;
    var counter = artim;
    /*overflow olub olmadigini yoxlayan sertler*/
    if (maxScroll > 0) {
        $(rightScroll).css({ 'display': 'flex' })
    }
    else {

        $(rightScroll).css({ 'display': 'none' })
    }

    /*right a click eliyende scroll eliyen funksiya*/
    $(rightScroll).on('click', function () {
        event.preventDefault();
        $(scrollBlock).animate({
            scrollLeft: $(scrollBlock).offset().left = counter
        }, 400);

        counter += artim;
        if ($(scrollBlock).scrollLeft() >= maxScroll - artim) {
            $(rightScroll).prop('disabled', true);
        }
        $(leftScroll).prop('disabled', false);

    });

    /*left button a click eliyende ise dusecek funksiya */
    $(leftScroll).on('click', function () {
        event.preventDefault();
        $(scrollBlock).animate({
            scrollLeft: $(scrollBlock).offset().left = 0
        }, 400);

        counter = artim;
        $(rightScroll).prop('disabled', false);
        $(leftScroll).prop('disabled', true);
    });


    /*right button ucun funksiya*/
    function forRight() {
        if ($(scrollBlock).scrollLeft() >= maxScroll) {
            $(rightScroll).prop('disabled', true);
        }
        else
            $(rightScroll).prop('disabled', false);

    }

    /*left ucun funksiya*/
    function forLeft() {
        if ($(scrollBlock).scrollLeft() > 0) {
            $(leftScroll).prop('disabled', false);
        }
        else {
            $(leftScroll).prop('disabled', true);
            counter = artim;
        }

    }

    /*swipe _images scroll olan zaman ise dusur*/

    $(scrollBlock).scroll(() => {
        forRight();
        forLeft();
    })

}


scrollFunction('.scroll_left', '.scroll_right', '.swiper_items_container');
