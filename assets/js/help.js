$('.frequently_buttons_list .frequently_buttons_item').on('click', function () {
    $('.frequently_buttons_list   li').removeClass('my_active');
    $(this).addClass('my_active');
});

$('.collapse_open_btn').on('click', function (e) {
    $(e.target).find('.arow_element').toggleClass('my_rotate');
    $(e.target).find('.collapse_number').toggleClass('text_blue');
});

$('.open_dropdown_btn').on('click', function (e) {
    $(this).siblings('.my_dropdown_list').toggleClass('my_show');
    $(this).find('.open_dropdown_btn_btn').toggleClass('my_rotate');
});

$('.my_dropdown_list li').on('click', function (e) {
    let text = $(e.target).html();
    $(e.target).parents('.my_dropdown').find('.open_dropdown_btn_txt').html(text);
    $(e.target).parents('.my_dropdown_list').toggleClass('my_show');
    $(e.target).parents('.my_dropdown').find('.open_dropdown_btn_btn').toggleClass('my_rotate');
});

