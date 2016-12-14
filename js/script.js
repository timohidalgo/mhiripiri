$(document).ready(function() {


// dropdown tags for gallery
$('.dropdown-content').hide();

	$('.dropdown').mouseover(function() {
        $('.dropdown-content').slideDown('fast');
	});
	
	$('.dropdown').mouseleave(function() {
        $('.dropdown-content').slideUp('slow');
	});


// random homepage image
var images = ["smallanimal1.jpg", "smallanimal2.jpg", "smallanimal3.jpg", "smallanimal4.jpg", "smallanimal5.jpg", "smallanimal6.jpg"];
	$("#random").css({"background-image": "url(images/" + images[Math.floor(Math.random()*images.length)] + ")"});




$('#grayout').hide();
$('.largepic').hide();
$('.caption').hide();

// command to grayout other images when one is clicked on
	$(".pic").click(function() {
		$(this).toggleClass("test");
		$('#grayout').fadeIn();
	});
	$("#grayout").click(function() {
		$('#grayout').fadeOut();
		$('.largepic').fadeOut();
		$('.caption').fadeOut();
	});


// commands to exapnd image when clicked on, and show caption
$("#small1").click(function() {
		$('#animal1').fadeIn();
		$('#caption_1').fadeIn();
	});

$("#small2").click(function() {
		$('#animal2').fadeIn();
		$('#caption_2').fadeIn();
	});

$("#small3").click(function() {
		$('#animal3').fadeIn();
		$('#caption_3').fadeIn();
	});

$("#small4").click(function() {
		$('#animal4').fadeIn();
		$('#caption_4').fadeIn();
	});

$("#small5").click(function() {
		$('#animal5').fadeIn();
		$('#caption_5').fadeIn();
	});

$("#small6").click(function() {
		$('#animal6').fadeIn();
		$('#caption_6').fadeIn();
	});

$("#small7").click(function() {
		$('#animal7').fadeIn();
		$('#caption_7').fadeIn();
	});


// enabling Mixitup and settings
	$('#mix-wrapper').mixItUp({
  		load: {
  			sort: 'order:asc'
  		},
		animation: {
    		effects: 'fade',
    		duration: 700
  		},
  		selectors: {
    		target: '.mix-target',
    		filter: '.filter-btn'
  		},
  		callbacks: {
    		onMixEnd: function(state){
      			console.log(state)
    		}
  		}
	});


});