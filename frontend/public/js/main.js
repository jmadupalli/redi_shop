/* =================================
------------------------------------
	Divisima | eCommerce Template
	Version: 1.0
 ------------------------------------
 ====================================*/

"use strict";

(function ($) {
  // /*------------------
  // 	Navigation
  // --------------------*/
  // $(function () {
  //   setTimeout(
  //     () =>
  //       $(".main-menu").slicknav({
  //         prependTo: ".main-navbar .container",
  //         closedSymbol: '<i class="flaticon-right-arrow"></i>',
  //         openedSymbol: '<i class="flaticon-down-arrow"></i>',
  //       }),
  //     100
  //   );
  // });

  /*------------------
		Category menu
	--------------------*/
  $(".category-menu > li").hover(function (e) {
    $(this).addClass("active");
    e.preventDefault();
  });
  $(".category-menu").mouseleave(function (e) {
    $(".category-menu li").removeClass("active");
    e.preventDefault();
  });

  /*------------------
		Background Set
	--------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
		Accordions
	--------------------*/
  $(".panel-link").on("click", function (e) {
    $(".panel-link").removeClass("active");
    var $this = $(this);
    if (!$this.hasClass("active")) {
      $this.addClass("active");
    }
    e.preventDefault();
  });
})(jQuery);
