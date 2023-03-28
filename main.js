// Jquery 3.3.1
// pcdevshare.com
$(function () {
  $('.ws-contact-icon.btnn').click(function () {
    $('.ws-contact-icon').toggleClass('is-active');
  });
});

$(document).mouseup(function (e) {
  if (!$(".ws-contact-icon").is(e.target) && $(".ws-contact-icon").has(e.target).length === 0) {
    $(".ws-contact-icon").removeClass("is-active");
  }
});

$(document).ready(function () {
  if ($(window).width() < 700) {

  }
  else {

  }
});