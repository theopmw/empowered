$(document).ready(function () {
  $('#dropdown').click(function () {
    $('.nav__options').toggle('.open');
  });
  $('#hamburger').click(function () {
    $('#mobile-menu').toggle('.open-menu');
  });
  $(window).on('resize', function () {
    var win = $(this);
    if (win.width() >= 1000) {
      var someElements = document.querySelectorAll('.navbar__components--mobile ');
      // $('#mobile-menu').toggle('.open-menu')
      $(someElements[0]).removeClass('.open-menu')
    }

    // if ($('#mobile-menu').classList.hasClass('open-menu')) {
    //   $('#mobile-menu').classList.removeClass('open-menu');
    // };
    // $('#mobile-menu').attr("class", 'open-menu')

  });
})