$(document).ready(function () {
	// Add smooth scrolling to all links
	$("a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});
var titleArray = "Full-stack Web Developer."
var introArray = "Full-Stack developer, soccer fan and self-starter with a persistent drive to succeed. I am passionate about development as the vehicle for making positive social-change through teaching others the love of technology. I never give up, just like the Iranian soccer team.";
titleArray = titleArray.split("");
function typeIntro() {
	var time = 200;

	for (var i = 0; i < titleArray.length; i++) {
		$('.heading').append(`<span id=${i}>${titleArray[i]}</span>`);
		$(`#${i}`).fadeIn(time);
		$(`#${i}`).css('display', "inline");
		time = time + 200;
	}
}

function typeBio() {
	var time = 800;
	for (var i = 0; i < introArray.length; i++) {
		$('.bio').append(`<span id=${i}a>${introArray[i]}</span>`);
		$(`#${i}a`).toggle(time);
		$(`#${i}a`).css('display', "inline");
		time = time + 100;
	}
}
$(document).ready(function () {
	typeIntro();
	typeBio();
});

window.onscroll = () =>{
	const nav = document.querySelector('#branding');
	if(this.scrollY <= 1000){
		nav.className = "brand";
	}else nav.className = 'scroll';
}

