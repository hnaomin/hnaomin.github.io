$(window).scroll(function() {
  var scrollBottom =
      $(document).height() - $(window).height() - $(window).scrollTop(),
      currentPos = parseInt($('footer').css('bottom'));

  if(currentPos === -200 || currentPos === 0)
    if (scrollBottom < 250){
      $('footer').stop().animate({bottom: 0});
    } else {
      $('footer').stop().animate({bottom: -200});
    }
});