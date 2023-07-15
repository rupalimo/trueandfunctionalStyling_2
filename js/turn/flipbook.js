
function loadApp() {

	// Create the flipbook

	$('.flipbook').turn({
			// Width

			width:670,
			
			// Height

			height:495,

			// Elevation

			elevation: 50,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: true

	});
}

// Load the HTML4 version if there's not CSS transform

yepnope({
	test : Modernizr.csstransforms,
	yep: ['js/turn/turn.js'],
	nope: ['js/turn/turn.html4.min.js'],
	both: ['css/style.css'],
	complete: loadApp
});