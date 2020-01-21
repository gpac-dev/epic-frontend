$(document).ready(function() {
  responsiveClass();

  $(".hl-menubtn").click(function() {
    console.log('clicks');
    if ($(".menu").hasClass("ismobile")) {
      if ($(".menu").hasClass("opened")) {
        $(".menu").removeClass("opened");
        $(".menu").animate(
          {
            left: "-130px"
          },
          200
        );
      } else {
        $(".menu").addClass("opened");
        $(".menu").animate(
          {
            left: "0px"
          },
          200
        );
      }
    } else {
    }
  });

  $(window).resize(function() {
    responsiveClass();
  });

  /* Responsive Class */
  function responsiveClass() {
    if ($(window).width() <= 735) {
      $(".menu").addClass("ismobile");
    } else {
      $(".menu").removeClass("ismobile");
    }
    /* Responsive Class - MENU */
    if ($(".menu").hasClass("ismobile")) {
      $(".menu").removeClass("expanded");
      $(".main-cont .header .h-left").removeClass("grid-2fr-3fr");
      $(".hl-menubtn").css({
        position: "relative",
        left: "0px"
      });
      $(".menu")
        .stop(true)
        .animate(
          {
            left: "-130px"
          },
          200
        );
    } else {
      $(".menu").addClass("expanded");
      $(".main-cont .header .h-left").addClass("grid-2fr-3fr");
      $(".hl-menubtn").css({
        position: "absolute",
        left: "-100px"
      });
      $(".menu")
        .stop(true)
        .animate(
          {
            left: "0px"
          },
          200
        );
    }
  }
});
