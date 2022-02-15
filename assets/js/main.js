$(document).ready(function () {
    $('.show_password').on('click', function () {
        $(this).siblings('input').attr('type', 'text');
        $(this).css({ 'display': 'none' });
        $(this).siblings('.hide_password').css({ 'display': 'block' });
    })

    $('.hide_password').on('click', function () {
        $(this).siblings('input').attr('type', 'password');
        $(this).css({ 'display': 'none' });
        $(this).siblings('.show_password').css({ 'display': 'block' });
    })

    


    $('.section_heading_list li').on('click', function () {
        var end = $(this).parent('.section_heading_list').find('li').length;

        for (i = 1; i <= end; i++) {
            if ($(`.section_heading_list li:nth-child(${i}) a `).hasClass('my_active')) {
                console.log(i);
                $(`.section_heading_list li:nth-child(${i}) a `).removeClass('my_active');
            }
        }

        $(this).find('a').addClass('my_active');

    })


    $('#checkBox').on('change',function(){
        if($(this).prop('checked')==true){
            $('.signup_button').prop('disabled',false);
        }
        else {
            $('.signup_button').prop('disabled',true);
        }
    });




})