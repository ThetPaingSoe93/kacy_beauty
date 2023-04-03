/*accordion*/
$(".accordion").on("click", function () {
	$(this).next().slideToggle();
	$(this).toggleClass("active");
});

/*smooth scroll*/
$("a").bind("focus", function () {
	if (this.blur) this.blur();
});
$("a.target_blank").attr("target", "_blank");
$("a")
	.not(".modaal, .tab-control")
	.click(function () {
		var myHref = $(this).attr("href");
		var myPos = $(myHref).offset().top;
		$("html,body").animate({ scrollTop: myPos - 138 }, 1000, "easeOutExpo");
	});

/*modaal*/
$(".inline").modaal({
	content_source: "#inline",
	overlay_opacity: 0.5,
});

/*account & register*/
$(".registerBtn").on("click", function () {
	$(this).parents(".loginForm").css("display", "none");
	$(".registerForm").css("display", "block");
});
$(".loginBtn").on("click", function () {
	$(this).parents(".registerForm").css("display", "none");
	$(".loginForm").css("display", "block");
});

/* edit btn */
$(".editBtn").on("click", function () {
	$(".formArea.show").removeClass("show");
	$(".row").removeClass("hide");
	$(this).parents(".row").addClass("hide");
	$(this).parents(".row").next().addClass("show");
});

/* add btn */
$(".addBtn").on("click", function () {
	$(".formArea.show").removeClass("show");
	$(this).next().addClass("show");
});

$('.accountBtn').on('click', function() {
    $('.accountNav').slideToggle();
});

/*move cursor on focus */
$(".ctAccountSetting .field").on("input", function () {
	var value = $(this).val().length;
	if ($(this).val().length > 0) {
		$(this).next().addClass("move");
	} else {
		$(this).next().removeClass("move");
	}
});

/*heroslider*/
$(".heroSlider").slick({
	centerMode: true,
	centerPadding: "60px",
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	variableWidth: true,
	dots: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
});


/*slider*/
const options = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    autoplay: false
  };
  
  // my slick slider as constant object
  const mySlider = $('.slider').on('init', function(slick) {
  
    // constant var
    const slider = this;
      
    // slight delay so init completes render
    setTimeout(function() {
  
      // dot buttons
      let dots = $('.slick-dots > LI > BUTTON', slider);
  
      // each dot button function
      $.each(dots, function(i,e) {
  
        // slide id
        let slide_id = $(this).attr('aria-controls');
        
        // custom dot image
        let dot_img = $('#'+slide_id).data('dot-img');
        
        $(this).html('<img src="' + dot_img + '" alt="" />');
  
      });
  
    }, 100);
  
  
  }).slick(options);



$(".favourite").click(function () {
	$(this).toggleClass("active");
});

$(".product").on("mouseover", function () {
	console.log("alert");
	$(this).children().children(".quickView").addClass("active");
});

$(".product").on("mouseout", function () {
	$(this).children().children(".quickView").removeClass("active");
});


//details
$(document).ready(function () {
  var productColors = [
      {
          color1: "1.1 - fair, neutral color1",
          color2: "1.2 - fair, neutral color2",
          color3: "1.3 - fair, neutral color3",
          color4: "1.4 - fair, neutral color4",
          color5: "1.5 - fair, neutral color5",
          color6: "1.6 - fair, neutral color6",
          color7: "1.7 - fair, neutral color7",
          color8: "1.8 - fair, neutral color8",
          color9: "1.9 - fair, neutral color9",
          color10: "2.0 - fair, neutral color10",
      },
      {
          color1: "2.1 - fair, neutral color11",
          color2: "2.2 - fair, neutral color12",
          color3: "2.3 - fair, neutral color13",
          color4: "2.4 - fair, neutral color14",
          color5: "2.5 - fair, neutral color15",
          color6: "2.6 - fair, neutral color16",
          color7: "2.7 - fair, neutral color17",
          color8: "2.8 - fair, neutral color18",
          color9: "2.9 - fair, neutral color19",
          color10: "3.0 - fair, neutral color20",
      },
      {
          color1: "3.1 - fair, neutral color21",
          color2: "3.2 - fair, neutral color23",
          color3: "3.3 - fair, neutral color23",
          color4: "3.4 - fair, neutral color24",
          color5: "3.5 - fair, neutral color25",
          color6: "3.6 - fair, neutral color26",
          color7: "3.7 - fair, neutral color27",
          color8: "3.8 - fair, neutral color28",
          color9: "3.9 - fair, neutral color29",
          color10: "3.0 - fair, neutral color30",
      }
  ];
  var imgList = [
      {
          color1: "images/product_1.jpg",
          color2: "images/product_2.jpg",
          color3: "images/product_3.jpg",
          color4: "images/product_4.jpg",
          color5: "images/product_5.jpg",
          color6: "images/product_6.jpg",
          color7: "images/product_7.png",
          color8: "images/product_8.png",
          color9: "images/product_9.png",
          color10: "images/product_10.png",
      },
      {
          color1: "images/product_11.png",
          color2: "images/product_12.png",
          color3: "images/product_13.png",
          color4: "images/product_14.png",
          color5: "images/product_15.png",
          color6: "images/product_16.png",
          color7: "images/product_17.png",
          color8: "images/product_18.png",
          color9: "images/product_19.jpg",
          color10: "images/product_20.png",
      },
      {
          color1: "images/product_21.png",
          color2: "images/product_22.jpg",
          color3: "images/product_23.png",
          color4: "images/product_24.png",
          color5: "images/product_25.png",
          color6: "images/product_26.png",
          color7: "images/product_27.png",
          color8: "images/product_28.png",
          color9: "images/product_29.png",
          color10: "images/product_30.jpg",
      }
  ];
  var productSize = {
      size1: "1.01 oz / 30 mL",
      size2: "1.01 oz / 100 mL",
  };
  
  $('.colorList li').on('click', function() {
      $('.colorList li').removeClass("active");
      $(this).addClass("active");
      var slideImg = $('.slider').children().length;
      var color = $(this).attr("id");
      var size = $(this).parent().attr("id");
      if($(".full-size-image").parent().hasClass("slick-active")) {
          var slideId = $('.slick-active .full-size-image').attr("id");
          var slideImg = slideId.replace("img", "") - 1;
          $(".full-size-image#" + slideId).css("background-image", "url(" + imgList[slideImg][color] + ")");  
          $('.slick-dots .slick-active button').html('<img src="' + imgList[slideImg][color] + '" alt="" />');
          $("#color-box").fadeIn("slow").text(productColors[slideImg][color]);
      }    
      else {
          var slideId = $('.full-size-image').attr("id");
          var slideImg = slideId.replace("img", "") - 1;
          $(".full-size-image#" + slideId).css("background-image", "url(" + imgList[slideImg][color] + ")");  
          $("#color-box").fadeIn("slow").text(productColors[slideImg][color]);      
      }
      $("#size-box").text(productSize[size]).fadeIn("slow");
  });
});


//tab
$('.tab-list').each(function(){
    var $this = $(this);
    var $tab = $this.find('li.active');
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));
  
    $this.on('click', '.tab-control', function(e) {
      e.preventDefault();
      var $link = $(this),
          id = this.hash;
  
      if (id && !$link.is('.active')) {
        $panel.removeClass('active');
        $tab.removeClass('active');
  
        $panel = $(id).addClass('active');
        $tab = $link.parent().addClass('active');
      }
    });
  });