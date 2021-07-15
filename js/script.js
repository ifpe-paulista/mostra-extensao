
$(document).ready(function($){
  $(window).scroll(function(){
    if($(this).scrollTop()>550){
      $('#top').fadeIn();
    }else{
      $('#top').fadeOut();
    }
  });
  $('#top').click(function(){
    $('body,html').animate({
      scrollTop:0
    },800);
    return false;
  });
});

(function () {

  'use strict';

  var $projects = $('.projects');

  $projects.isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

  $projects.imagesLoaded().progress( function() {
    $projects.isotope('layout');
  });

  $('ul.filters > li').on('click', function (e) {

    e.preventDefault();

    var filter = $(this).attr('data-filter');

    $('ul.filters > li').removeClass('active');
    $(this).addClass('active');

    $projects.isotope({ filter: filter });

  });

  $('.card').mouseenter(function () {

    $(this).find('.card-overlay').css({ 'top': '-100%' });
    $(this).find('.card-hover').css({ 'top': '0' });

  }).mouseleave(function () {

    $(this).find('.card-overlay').css({ 'top': '0' });
    $(this).find('.card-hover').css({ 'top': '100%' });

  });

})(jQuery);