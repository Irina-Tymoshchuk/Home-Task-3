$(function () {
  $(window).scroll(function () {
    $("#learn.item-title").each(function () {
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInUp");
      }
    });
  });
})();
