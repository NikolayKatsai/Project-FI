var slideIndex = 1;
var timing =7000;
var restart =false;
showSlides(slideIndex);

function plusSlides(n){
    clearInterval(intervalSlides);
    showSlides(slideIndex=slideIndex+n);
    activateInterval(timing);
}

function currentSlide(n){
    clearInterval(intervalSlides);
    showSlides(slideIndex = n);
    activateInterval(timing);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if(n >slides.length){
        slideIndex =1
    }
    if(n<1){
        slideIndex=slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display= "none";
    }

    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active";
}
var activateInterval = function (n) {
    intervalSlides=setInterval(function() {
        if(restart==false){
            plusSlides(1);
        }
    },n);
}
window.onload = function() {
    activateInterval(timing);
};