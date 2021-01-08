const text = document.querySelectorAll(".text");
const changeChevron = document.querySelectorAll(".changeChevron");
const menu = document.querySelector('.menu');

const scrollLine = document.querySelector('.scroll-line');

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

//menu.addEventListener('click', function() {
///	this.classList.toggle('open');
//});

// progress-bar 

function fillScrollLine() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const percentScrolled = (scrolled / (fullHeight - windowHeight) * 100);
  scrollLine.style.width = percentScrolled + '%';
  scrollLine.style.width = `${percentScrolled}%` ;
  
}
/*
function debounce(func, wait = 15, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
*/

window.addEventListener('scroll', fillScrollLine);