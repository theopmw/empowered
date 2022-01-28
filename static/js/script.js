$(document).ready(function () {
  $('#dropdown').click(function () {
    $('.nav__options').toggle('.open');
  });
  $('#hamburger').click(function () {
    $('.navbar__components--mobile').toggle('.open');
  });
})