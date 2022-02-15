$(document).ready(function (){
    $('#lang').on('click',function(){
        $('.lang_list').toggleClass('flex');
        $(this).find('span').toggleClass('rotate');
        $('#mobile_lang').find('span').toggleClass('rotate');
    })

    $('#mobile_lang').on('click',function(){
        $('.lang_list').toggleClass('flex');
        $(this).find('span').toggleClass('rotate');
        $('#lang').find('span').toggleClass('rotate');

    });

    $('.lang_list_item').on('click',function(){
         var t = $(this).html();
        $('#lang p').html(t);
        $('#mobile_lang p').html(t);
        $('.lang_list').toggleClass('flex');
        $('#lang').find('span').toggleClass('rotate');
        $('#mobile_lang').find('span').toggleClass('rotate');
    });

    $('.mobile_crypto_buy').on('click',function(e){
        $(e.target).siblings('#down_arrow').toggleClass('my_rotate');
    });
});



$('.mobile_menu_btn').on('click',function(){

    $('.mobile_menu').addClass('my_show');

    setTimeout ( function(){
        $('.mobile_menu').css({'transform':'translateX(0%)'});
        $('body').css({'overflow':'hidden'});
    },100 )

});


$('*').on('click',function(e){
    if(!$(e.target).is('.mobile_menu_inner') && !$(e.target).is('.mobile_menu_inner *') &&  !$(e.target).is('.mobile_menu_btn') &&
    !$(e.target).is('.mobile_menu_btn *')){
        $('.mobile_menu').css({'transform':'translateX(-100%'});
        $('body').css({'overflow':'auto'});

        setTimeout( function(){
            $('.mobile_menu').removeClass('my_show');
        },400)
    }
})

