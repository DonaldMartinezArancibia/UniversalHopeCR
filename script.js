var count = false;
const prime = document.getElementById("prime");
const second = document.getElementById("second");
const x = document.getElementById("x");
const third = document.getElementById("third");
const mySidenav = document.getElementById("mySidenav");

function sidenavAnimation() {
	if (count == false) {
		prime.style.transform = "scale(0)";
		second.style.transform = "rotate(-45deg)";
		x.style.transform = "rotate(450deg)";
		third.style.transform = "scale(0)";
		mySidenav.style.width = "65vh";
		count = true;
	} else if (count == true) {
		prime.style.transform = "scale(1)";
		second.style.transform = "rotate(0deg)";
		x.style.transform = "rotate(0deg)";
		third.style.transform = "scale(1)";
		mySidenav.style.width = "0";
		count = false;
	}
}
// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
	var x = document.getElementById("navDemo");
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}
