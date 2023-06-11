$(function () {
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
  if (window.matchMedia("(max-width: 1000px)").matches) {
      var headerHight = 170; //ヘッダの高さ
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
        $("html, body").animate({scrollTop:position}, 550, "swing");
            return false;
      });
  } else {
      var headerHight = 200; //ヘッダの高さ
    $('a[href^=#]').click(function(){
        var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
        $("html, body").animate({scrollTop:position}, 550, "swing");
            return false;
      });
  };  
});