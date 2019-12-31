$(document).ready(function() {
  responsiveClass();
  /* - - - #OpenMenu - - - */
  // $(".hl-menubtn").click(function() {
  //   if ($(".menu").hasClass("ismobile")) {
  //     /* - #OpenMenu - */
  //     if ($(".menu").hasClass("expanded")) {
  //       $(".menu").removeClass("expanded");
  //       $(".m-btn").fadeOut("fast");
  //       $(".m-btn p")
  //         .stop(true)
  //         .animate(
  //           {
  //             opacity: "0"
  //           },
  //           200
  //         );
  //       $(".menu")
  //         .stop(true)
  //         .delay(200)
  //         .animate(
  //           {
  //             width: "60px",
  //             left: "-60px"
  //           },
  //           200
  //         );
  //       $(".m-btn img")
  //         .stop(true)
  //         .animate(
  //           {
  //             marginLeft: "20px"
  //           },
  //           200
  //         );
  //     } else {
  //       $(".menu").addClass("expanded");
  //       $(".m-btn").fadeIn("fast");
  //       $(".menu")
  //         .stop(true)
  //         .animate(
  //           {
  //             width: "130px",
  //             left: "0px"
  //           },
  //           200
  //         );
  //       $(".m-btn img")
  //         .stop(true)
  //         .animate(
  //           {
  //             marginLeft: "15px"
  //           },
  //           200
  //         );
  //       $(".m-btn p")
  //         .delay(200)
  //         .animate(
  //           {
  //             opacity: "1"
  //           },
  //           700
  //         );
  //     }
  //   } else {
  //     if ($(".menu").hasClass("expanded")) {
  //       $(".menu").removeClass("expanded");
  //       $(".m-btn p")
  //         .stop(true)
  //         .animate(
  //           {
  //             opacity: "0"
  //           },
  //           200
  //         );
  //       $(".menu")
  //         .stop(true)
  //         .delay(200)
  //         .animate(
  //           {
  //             width: "60px"
  //           },
  //           200
  //         );
  //       $(".m-btn img")
  //         .stop(true)
  //         .animate(
  //           {
  //             marginLeft: "20px"
  //           },
  //           200
  //         );
  //     } else {
  //       $(".menu").addClass("expanded");
  //       $(".m-btn").fadeIn("fast");
  //       $(".menu")
  //         .stop(true)
  //         .animate(
  //           {
  //             width: "130px",
  //             left: "0px"
  //           },
  //           200
  //         );
  //       $(".m-btn img")
  //         .stop(true)
  //         .animate(
  //           {
  //             marginLeft: "15px"
  //           },
  //           200
  //         );
  //       $(".m-btn p")
  //         .delay(200)
  //         .animate(
  //           {
  //             opacity: "1"
  //           },
  //           700
  //         );
  //     }
  //   }
  // });

  /* jQuery #FS-03 */
  $(".filters-toggle").click(function() {
    toggleFilters();
  });
  function toggleFilters() {
    if ($(".filters-box").hasClass("open")) {
      /* Quitar filtros y poner quicksearch */
      $(".filters-box").removeClass("open");
      $(".filters-box")
        .stop(true)
        .fadeOut("fast");
      $(".filters-btn-open")
        .stop(true)
        .delay(200)
        .fadeIn("fast");
      $(".filters-controls")
        .stop(true)
        .fadeOut("fast");
    } else {
      /* Poner filtros y quitar quicksearch */
      $(".filters-box").addClass("open");
      $(".filters-controls")
        .stop(true)
        .delay(200)
        .fadeIn("fast");
      $(".filters-box")
        .stop(true)
        .fadeIn("fast");
      $(".filters-btn-open")
        .stop(true)
        .fadeOut("fast");
    }
  }

  /* #SwitchEntitySelector */
  $(".es-option").click(function() {
    if ($(this).hasClass("es-active") == false) {
      $(this)
        .siblings()
        .removeClass("es-active");
      $(this).addClass("es-active");
      if ($(this).hasClass("candidates-btn")) {
        $(".entity-selector-rect").animate({ left: "0" }, 200);
        $(".candidates-btn").addClass("es-active");
        $(".candidates-btn")
          .siblings()
          .removeClass("es-active");
        $(".fbx-candidates")
          .delay(200)
          .fadeIn("fast");
        $(".fbx-joborders").fadeOut("fast");
        $(".fbx-companies").fadeOut("fast");
      } else if ($(this).hasClass("joborders-btn")) {
        $(".entity-selector-rect").animate({ left: "160" }, 200);
        $(".joborders-btn")
          .siblings()
          .removeClass("es-active");
        $(".joborders-btn").addClass("es-active");
        $(".fbx-candidates").fadeOut("fast");
        $(".fbx-joborders")
          .delay(200)
          .fadeIn("fast");
        $(".fbx-companies").fadeOut("fast");
      } else if ($(this).hasClass("companies-btn")) {
        $(".entity-selector-rect").animate({ left: "320" }, 200);
        $(".companies-btn")
          .siblings()
          .removeClass("es-active");
        $(".companies-btn").addClass("es-active");
        $(".fbx-candidates").fadeOut("fast");
        $(".fbx-joborders").fadeOut("fast");
        $(".fbx-companies")
          .delay(200)
          .fadeIn("fast");
      }
    }
  });
  /* #ListEntitySelector */
  $(".esl-btn").click(function() {
    if ($(".esl-list").hasClass("opened")) {
      $(".esl-list").removeClass("opened");
      $(".esl-list").slideUp("fast");
      $(".w-arrow").css(
        {
          transform: "rotate(45deg)",
          top: "10px"
        },
        200
      );
    } else {
      $(".esl-list").addClass("opened");
      $(".esl-list").slideDown("fast");
      $(".w-arrow").css(
        {
          transform: "rotate(-135deg)",
          top: "15px"
        },
        200
      );
    }
  });
  /* jQuery #ES-07 */
  $(".entity-select-compact").click(function() {
    if ($(".entity-select-list").hasClass("open")) {
      $(".entity-select-list").removeClass("open");
      $(".entity-select-list")
        .stop(true)
        .animate({ height: "0" }, 500);
      $(".entity-select-compact .arrow").css({
        transform: "rotate(45deg)",
        top: "10px"
      });
    } else {
      $(".entity-select-list").addClass("open");
      $(".entity-select-list")
        .stop(true)
        .animate({ height: "120" }, 500);
      $(".entity-select-compact .arrow").css({
        transform: "rotate(225deg)",
        top: "14px"
      });
    }
  });
  
  /* jQuery #FILE-FS-08 */
  $(".file-button").click(function() {
    $(".modal-box").addClass("open");
    $(".modal-box").fadeIn("fast");
    $(".modal-viewfile").fadeIn("fast");
  });

  $(".mf-btns-close, .mn-btns-close, .mn-btns-cancel").click(function() {
    $(".modal-box").removeClass("open");
    $(".modal-box").fadeOut("fast");
    $(".modal-viewfile").fadeOut("fast");
    $(".mn-textarea").attr("disabled", "true");
  });

  $(".note-button-view").click(function() {
    $(".modal-box").addClass("open");
    $(".modal-box").fadeIn("fast");
    $(".modal-viewnote").fadeIn("fast");
    $(".mn-btns-viewmode").fadeIn("fast");
    $(".mn-btns-editmode").hide();
    $(".mn-textarea").attr("disabled", "true");
    $(".mn-name-input").fadeOut("fast");
  });

  $(".note-button-edit").click(function() {
    $(".modal-box").addClass("open");
    $(".modal-box").fadeIn("fast");
    $(".modal-viewnote").fadeIn("fast");
    $(".mn-btns-editmode").fadeIn("fast");
    $(".mn-btns-viewmode").hide();
    $(".mn-text-editor").fadeIn("fast");
    $(".mn-textarea").removeAttr("disabled");
  });

  $(".new-note-button").click(function() {
    $(".modal-box").addClass("open");
    $(".modal-box").fadeIn("fast");
    $(".modal-viewnote").fadeIn("fast");
    $(".mn-btns-editmode").fadeIn("fast");
    $(".mn-btns-viewmode").hide();
    $(".mn-text-editor").fadeIn("fast");
    $(".mn-name").fadeOut("fast");
    $(".mn-name-input").fadeIn("fast");
    $(".mn-textarea").removeAttr("disabled");
  });

  $(".mn-btns-edit").click(function() {
    $(".mn-btns-editmode").fadeIn("fast");
    $(".mn-text-editor").fadeIn("fast");
    $(".mn-btns-viewmode").hide();
    $(".modal-viewnote").addClass("editmode");
    $(".mn-textarea").removeAttr("disabled");
  });

  $(".mn-btns-cancel").click(function() {
    if ($(".modal-viewnote").hasClass("editmode")) {
      $(".mn-btns-viewmode").fadeIn("fast");
      $(".mn-btns-editmode").hide();
      $(".mn-text-editor").fadeOut("fast");
      $(".modal-viewnote").removeClass("editmode");
      $(".mn-name-input").fadeOut("fast");
      $(".mn-name").fadeIn("fast");
      $(".mn-textarea").attr("disabled", "true");
    } else {
      $(".modal-box").removeClass("open");
      $(".modal-box").fadeOut("fast");
      $(".modal-viewfile").fadeOut("fast");
      $(".modal-viewnote").fadeOut("fast");
      $(".mn-text-editor").fadeOut("fast");
      $(".mn-name-input").fadeOut("fast");
      $(".mn-name").fadeIn("fast");
      $(".mn-textarea").attr("disabled", "true");
    }
  });

  $(".mf-btns-close, .mn-btns-close").click(function() {
    $(".modal-box").removeClass("open");
    $(".modal-box").fadeOut("fast");
    $(".modal-viewfile").fadeOut("fast");
    $(".modal-viewnote").fadeOut("fast");
  });

  $(".mf-btns-fullscreen").click(function() {
    if ($(".modal-viewfile").hasClass("fullscreen")) {
      $(".modal-viewfile").removeClass("fullscreen");
      $(".modal-viewfile").animate(
        {
          width: "60%",
          height: "80%",
          top: "10%"
        },
        500
      );
      $(".mf-btns-fullscreen").css("background-image", 'url("assets/SVG/fullscreen-file.svg")');
    } else {
      $(".modal-viewfile").addClass("fullscreen");
      $(".modal-viewfile").animate(
        {
          width: "100%",
          height: "100%",
          top: "0"
        },
        500
      );
      $(".mf-btns-fullscreen").css("background-image", "url('assets/SVG/quitfullscreen-file.svg')");
    }
  });
  /* Mobile Filters */
  $(".filters-btn-open").click(function(){
    if($(window).width() <= 1080){
      if($(".filters-box-sr").hasClass("opened")){
        $(".filters-box-sr").removeClass("opened")
        $(".filters-box-sr").fadeOut("fast");
        $(".mobile-overlay").fadeOut("fast");
      } else {
        $(".filters-box-sr").addClass("opened")
        $(".filters-box-sr").fadeIn("fast");
        $(".mobile-overlay").fadeIn("fast");
      }
    }
  });

  $(".close-filters-mobile").click(function(){
    $(".filters-box-sr").removeClass("opened")
    $(".filters-box-sr").fadeOut("fast");
    $(".mobile-overlay").fadeOut("fast");
  });
});
/* jQuery #ES-07 */
$(".esl-btn").click(function() {
  if ($(".esl-list").hasClass("open")) {
    $(".esl-list").removeClass("open");
    $(".esl-list")
      .stop(true)
      .animate({ height: "0" }, 500);
    $(".entity-select-compact .arrow").css({
      transform: "rotate(45deg)",
      top: "10px"
    });
  } else {
    $(".esl-list").addClass("open");
    $(".esl-list")
      .stop(true)
      .animate({ height: "120" }, 500);
    $(".entity-select-compact .arrow").css({
      transform: "rotate(225deg)",
      top: "14px"
    });
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

  if ($(".menu").hasClass("ismobile")) {
    $(".menu").removeClass("expanded");
    $(".m-btn").fadeOut("fast");
    $(".m-btn p")
      .stop(true)
      .animate(
        {
          opacity: "0"
        },
        200
      );
    $(".menu")
      .stop(true)
      .delay(200)
      .animate(
        {
          width: "60px",
          left: "-60px"
        },
        200
      );
    $(".m-btn img")
      .stop(true)
      .animate(
        {
          marginLeft: "20px"
        },
        200
      );
  } else {
    $(".menu").removeClass("expanded");
    $(".m-btn").fadeIn("fast");
    $(".m-btn p")
      .stop(true)
      .animate(
        {
          opacity: "0"
        },
        200
      );
    $(".menu")
      .stop(true)
      .delay(200)
      .animate(
        {
          width: "60px",
          left: "0px"
        },
        200
      );
    $(".m-btn img")
      .stop(true)
      .animate(
        {
          marginLeft: "20px"
        },
        200
      );
  }
}
