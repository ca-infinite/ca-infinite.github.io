let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}     
    slides[slideIndex - 1].classList.add("show"); 
    setTimeout(showSlides, 6000);
}

function plusSlides(n) {
    let slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    else if(slideIndex < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show"); 
    }
    slides[slideIndex - 1].classList.add("show");
}

showSlides();
