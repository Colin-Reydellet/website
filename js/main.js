/* Colin Reydellet — Avocat : navigation behaviour */
(function ($) {
  'use strict';

  var $nav = $('#mainNav');
  var SHRINK_AT = 80;

  // Shrink the navbar once the hero starts scrolling away.
  function toggleShrink() {
    $nav.toggleClass('nav-shrink', $(window).scrollTop() > SHRINK_AT);
  }
  $(window).on('scroll', toggleShrink);
  toggleShrink();

  // Smooth scroll to the anchored section, offset by the navbar height.
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.hash);
    if (!target.length) return;

    event.preventDefault();

    var offset = $nav.outerHeight() - 1;
    $('html, body').animate({ scrollTop: target.offset().top - offset }, 600, 'swing');
  });

  // Collapse the mobile menu after picking a section.
  $('#navbarLinks a.nav-link').on('click', function () {
    if ($('.navbar-toggler').is(':visible')) {
      $('#navbarLinks').collapse('hide');
    }
  });

  // Keep the copyright year current.
  $('#year').text(new Date().getFullYear());

}(jQuery));
