//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - lightbox

//Add overlay
	// An image
	// A caption
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);

$("body").append($overlay);

//Capture the click event on a link to an image
$('#imageGallery').on('click', 'a', function (e) {
	e.preventDefault();
	var imageLocation = $(this).attr('href');
	//Get child's alt attribute and set caption
	var imageDesc = $(this).find('img').attr('alt');	
	//Update overlay with the image linked in the link
	$image.attr('src', imageLocation);
	$caption.text(imageDesc);
	//Show the overlay.
	$overlay.show();

});

//When overlay is clicked
$overlay.on('click', function () {
	//Hide the overlay
	$overlay.hide(); // No utilizo this porque ya lo tengo cacheado, así no es necesario que jquery lo vuelva a seleccionar.
});


