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

const bars_search = document.getElementById("ctn-bars-search");
const cover_ctn = document.getElementById("cover-ctn-search");
const inputSearch = document.getElementById("inputSearch");
const box_search = document.getElementById("bos-search");

function searchButton() {
	if (count == false) {
		bars_search.style.height = "3em";
		cover_ctn.style.height = "100%";
		cover_ctn.style.width = "100%";
		cover_ctn.style.backgroundColor = "rgba(0,0,0,0.5)";
		cover_ctn.style.transition = "background 1s ease-in"
		inputSearch.focus();
		count = true;
	} else if (count == true) {
		bars_search.style.height = "0";
		cover_ctn.style.height = "0";
		cover_ctn.style.backgroundColor = "#ffffff00";
		inputSearch.value = "";
		count = false;
	}
	// var x = document.getElementById("navDemo");
	// if (x.className.indexOf("w3-show") == -1) {
	// 	x.className += " w3-show";
	// } else {
	// 	x.className = x.className.replace(" w3-show", "");
	// }
}
