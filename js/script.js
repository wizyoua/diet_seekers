//Adds class/color to navbar when scrolled past a certain point on webpage
$(function () {
    var header = $(".navbar");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
            header.removeClass("scrolled_out");
        } else {
            header.addClass("scrolled_out");
            header.removeClass("scrolled");
        }
    });

});

//Allows href id's to smoothly scroll to destination
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});
