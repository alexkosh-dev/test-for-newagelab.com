$('.menu-mobile').on('click', function(){
  $('.menu').toggleClass('menu--active');
});

$('.tiles-more').on('click', function(){
  $('.tiles-item__block.block-hide').toggleClass('block-hide--none');
});