/*Active navigation*/
let header = document.getElementById("nav__list");
let btns = header.getElementsByClassName("nav__item");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active__item");
    current[0].className = current[0].className.replace(" active__item", "");
    this.className += " active__item";
  });
}
/*Slider*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots__item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
/*Slider 2*/
/*$(document).ready(function(){
    $('#newsSlider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
    });
   
})*/
/*filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
*/
/*Form validation*/
function validate(e) { 
	let valid = true;
 
	const errors = document.getElementsByClassName( 'validation-error' );
	while( errors.length > 0 ){
		errors[0].parentNode.removeChild( errors[0] );
	}
 
	const authorField = document.getElementById( "author" );
	if ( ! authorField.value ) {
		document.querySelector( 'label[for="author"]' ).innerHTML += ' <span class="validation-error">Укажите имя</span>';
		valid = false;
	}
 
	const emailField = document.getElementById( "email" );
	if ( ! emailField.value ) {
		document.querySelector( 'label[for="email"]' ).innerHTML += ' <span class="validation-error">Укажите email</span>';
		valid = false;
	} else {
		const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		if( ! re.test(String(emailField.value).toLowerCase()) ) {
			document.querySelector( 'label[for="email"]' ).innerHTML += ' <span class="validation-error">Некорректный email</span>';
			valid = false;
		}
	}
	if( false == valid ) {
		e.preventDefault();	}
	return valid; 
}
 
const form = document.getElementById( 'commentform' ); 
form.addEventListener( 'submit', validate );
/*map*/
let map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
L.marker([51.505, -0.09]).addTo(map);