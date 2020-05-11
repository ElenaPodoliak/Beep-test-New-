$(function () {

    $(".j-order-item__slider--inner").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: ".j-order-item__slider--nav"
    });

    $(".j-order-item__slider--nav").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dotsClass: ".j-order-item__slider--nav",
      asNavFor: ".j-order-item__slider--inner",
      dots: false,
      arrows: false,
      variableWidth: true,
      focusOnSelect: true
    });

    $('.j-order-item__tabs .j-tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.j-order-item__tabs').find('.j-order-item__tab-item').removeClass('active-tab').hide();
        $('.j-order-item__tabs .j-order-item__tab-items').find('j-tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
      });

      // $('#svg-star').on("click", function() {
      //   if( $('#path').css('fill') == "none"){
      //     $('#path').css({ fill: "rgb(255, 0, 0)" });
      //   }else{
      //     $('#path').css({ fill: "#ffffff" });
      //   }    
      // });

  });

  

  // $(".header__select").select2();

  // // START TABS

  // $(".tabs-stage .tab").hide();
  // $(".tabs-stage .tab:first-child").show();
  // $(".tabs-nav li:first").addClass("tab-active");

  // // Change tab class and display content
  // $(".tabs-nav a").on("click", function (event) {
  //   event.preventDefault();
  //   let parent = $(this).parents(".tabs-container");
  //   $(".tabs-nav li", parent).removeClass("tab-active");
  //   $(".tabs-nav li a").removeClass("tabs-nav__item--active");
  //   $(this).parent().addClass("tab-active");
  //   $(this).addClass("tabs-nav__item--active");
  //   $(".tabs-stage .tab").hide();
  //   document.querySelector(".video-size").innerHTML =
  //     '<iframe class="video-size__frame" src="https://www.youtube.com/embed/BBB2odClahA?list=PLwJhhWUZudKpojSEiPmUVXEw-rYtXHHNP" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  //   $($(this).attr("href")).animate(
  //     {
  //       opacity: "toggle",
  //     },
  //     {
  //       duration: 1200,
  //       specialEasing: {
  //         opacity: "linear",
  //       },
  //     }
  //   );
  // });
  // // END TABS

  // // START SLIDER
  // var galleryThumbs = new Swiper(".gallery-thumbs", {
  //   spaceBetween: 10,
  //   slidesPerView: 4,
  //   freeMode: true,
  //   watchSlidesVisibility: true,
  //   watchSlidesProgress: true,
  // });
  // var galleryTop = new Swiper(".gallery-top", {
  //   spaceBetween: 10,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   thumbs: {
  //     swiper: galleryThumbs,
  //   },
  // });
  // // END SLIDER

  // // POPUP
  // $('[data-fancybox="images"]').fancybox({
  //   autoFocus: true,
  // });
  // // POPUP END

  // AOS.init({
  //   once: true,
  //   easing: 'ease'
  // });
// });
