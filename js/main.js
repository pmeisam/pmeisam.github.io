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
var i = 0;
var txt = "Full-Stack developer, soccer fan and self-starter with a persistent drive to succeed. I am passionate about development as the vehicle for making positive social-change through teaching others the love of technology. I never give up, just like the Iranian soccer team.";
var speed = 30;
function typeIntro() {
	var time = 200;
	if (i < txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeIntro, speed);
	}
}

var i1 = 0;
var txt1 = "Full-Stack Web Developer";
var speed1 = 30;
function typeBio() {
	var time = 200;
	if (i1 < txt1.length) {
		document.getElementById("header").innerHTML += txt1.charAt(i1);
		i1++;
		setTimeout(typeBio, speed1);
	}
}
$(document).ready(function () {
	typeIntro();
	typeBio();
});

window.onscroll = () => {
	const nav = document.querySelector('#branding');
	if (this.scrollY <= 870) {
		nav.className = "brand";
	} else nav.className = 'scroll';
}

