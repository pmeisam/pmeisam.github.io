$(document).ready(function () {
	$("a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});
		} 
	});
});
// var i = 0;
// var txt = "Full-Stack developer, soccer fan and self-starter with a persistent drive to succeed. I am passionate about development as the vehicle for making positive social-change through teaching others the love of technology. I never give up, just like the Iranian soccer team.";
// var speed = 30;
// function typeIntro() {
// 	var time = 200;
// 	if (i < txt.length) {
// 		document.getElementById("demo").innerHTML += txt.charAt(i);
// 		i++;
// 		setTimeout(typeIntro, speed);
// 	}
// }

// var i1 = 0;
// var txt1 = "Full-Stack Web Developer";
// var speed1 = 30;
// function typeBio() {
// 	var time = 200;
// 	if (i1 < txt1.length) {
// 		document.getElementById("header").innerHTML += txt1.charAt(i1);
// 		i1++;
// 		setTimeout(typeBio, speed1);
// 	}
// }
// $(document).ready(function () {
// 	typeIntro();
// 	typeBio();
// });

window.onscroll = () => {
	const nav = document.querySelector('#branding');
	if (this.scrollY <= 700) {
		nav.className = "brand";
	} else nav.className = 'scroll';
}

// <!-- Start of Async Drift Code -->
// <script>
"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('dzgh29grzc6p');
// </script>
// <!-- End of Async Drift Code -->