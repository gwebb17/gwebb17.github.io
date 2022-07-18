//Open/close contact form//
function openForm() {
    document.getElementById("myForm").style.display="block";
}

function closeForm() {
    document.getElementById("myForm").style.display="none";
}

//this function displays first image in slideshow when page loads//
var slideIndex=1;
showSlides(slideIndex);

//this function changes slide when l or r arrows are clicked//
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//this function changes slide when dots are clicked//
function currentSlide(n) {
    showSlides(slideIndex=n);
}

function showSlides(n) {
    var slides=document.getElementsByClassName("mySlides"); //this takes all elements with class "mySlides" and stores them in variable array "slides"//
    var dots=document.getElementsByClassName("dot"); //this takes elements w/ class name dot and stores them in the variable array "dots"//
    if (n>slides.length) {slideIndex=1}; //If n (number passed into function) is greater than the length of the array "slides", the slideIndex is set to 1//
    if (n<1) {slideIndex=slides.length}; //if n is less than 1 the slideIndex is set to the length of the array "slides"//
    for (i=0; i<slides.length; i++) {
        slides[i].style.display="none";//this for loop takes each item in the array slides and sets the display to none
    }
    for (i=0; i<dots.length; i++) {
        dots[i].className=dots[i].className.replace(" active", ""); //this for loop takes each item in the array "dots" and removes "active" which removes active styling
    }
    slides[slideIndex-1].style.display="block";//This displays the image in the slideshow
    dots[slideIndex-1].className+=" active";//this adds the active styling to the dot associated with the image
}

//this code will close the contact form when the user clicks off of it//
//the first step is to add an event listener for any clicks on the website//
document.addEventListener("click", function(event) {
    //here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function//
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false )

//make #contact go to bottom of page when clicked//
document.getElementById("Contact").addEventListener("click", function() {
    document.body.scrollIntoView(false);
});
