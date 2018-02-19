$(function(){
    /*alert("Hi!");*/

    $('.btn-window').on('click', function () {
        $('body').addClass('window-opened');
    });

    $('#backdrop').on('click', function () {
        $('body').removeClass('window-opened');
    });

});