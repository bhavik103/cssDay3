//
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 

  $('.tab-pane').mouseenter(function () {
  	var demo_height = $(this).find('.image_box').height();
  	var image_height = $(this).find('.image_container > img').height() - demo_height;
  	if (image_height > 0) {
  		$(this).find('.image_container').css('top', -(image_height));
  	} else {
  		$(this).find('.image_container').css('top', 0);
  	}
  });
  $('.tab-pane').mouseleave(function () {
  	$('.image_container').css('top', 0);
  });
  $('.dropdown.dropdown_click > a').click(function(){
    $('.dropdown-menu.onclick').toggleClass('open');
  });
  $('.dropdown.dropdown_hover > a').mouseenter(function(){
    $('.dropdown-menu.onhover').addClass('open');
  });
  $('.dropdown.dropdown_hover > a').mouseleave(function(){
    $('.dropdown-menu.onhover').removeClass('open');
  });

  $('.search_btn').click(function() {
    var input_value = document.getElementById("search").value;
    if (input_value.length > 0) {
      $("body").append($(
        `<div class="alert alert-success alert-dismissible fade in">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        Hey! U searched something ;)
        </div>`
      ));
    } else {
      $("body").append($(
        `<div class="alert alert-danger alert-dismissible fade in">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        Enter Something To Search! :(
        </div>`
      ));
    }
  });
});


