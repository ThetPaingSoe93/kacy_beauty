/*accordion*/
$('.accordion').on('click', function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
});

/*smooth scroll*/
$("a").bind("focus",function(){if(this.blur)this.blur();});
$("a.target_blank").attr("target","_blank");
    $('a').click(function() {
    var myHref= $(this).attr("href");
    var myPos = $(myHref).offset().top;
    $("html,body").animate({scrollTop : myPos - 138}, 1000, 'easeOutExpo');
});

/*modaal*/
$('.inline').modaal({
	content_source: '#inline',
    overlay_opacity: 0.5
});

/*account & register*/
$('.registerBtn').on('click', function() {
    $(this).parents('.loginForm').css('display', 'none');
    $('.registerForm').css('display', 'block')
});
$('.loginBtn').on('click', function() {
    $(this).parents('.registerForm').css('display', 'none');
    $('.loginForm').css('display', 'block')
});

/*edit btn in account information*/
$('.editBtn').on('click', function() {
    $('.formArea.show').removeClass('show');
    $('.row').removeClass('hide');
    $(this).parents('.row').addClass('hide');
    $(this).parents('.row').next().addClass('show');
});

/*heroslider*/
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



