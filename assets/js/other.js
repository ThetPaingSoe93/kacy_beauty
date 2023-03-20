$('.heroSlider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    dots: true,
});

$(".favourite").click(function() {  
    $(this).toggleClass('active');  
});

$(".product").on('mouseover',function() {
    console.log('alert');
    $(this).children().children('.quickView').addClass('active');
});

$(".product").on('mouseout',function() {  
    $(this).children().children('.quickView').removeClass('active');
});  