const text = document.querySelectorAll(".text");
const changeChevron = document.querySelectorAll(".changeChevron");
const menu = document.querySelector('.menu');

const header = document.querySelector('.stickyMenu');
const sticky = document.querySelector('.sticky');

for (let i = 0; i < changeChevron.length; i++) {
	changeChevron[i].addEventListener("click", function() {
		changeChevron[i].classList.toggle("top");
		text[i].classList.toggle("hidden");
		
	});
}

if(window.SimpleSlide) {
	new SimpleSlide({
		slide: "quote",
		time: 5000,
		nav: true
	});
}

if(window.SimpleSlide) {
	new SimpleAnime();
}
// Menu Smartphone

menu.addEventListener('click', function() {
	this.classList.toggle('open');
});


// Sticky menu

window.onscroll = function() {stickyMenuFunction()};

function stickyMenuFunction() {
  if (window.pageYOffset > 400) {
		header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//