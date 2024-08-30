let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
        //slides[i].style.display = "none"; 
        slides[i].classList.remove("show");// Remove show class
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    //slides[slideIndex-1].style.display = "block";  
    slides[slideIndex - 1].classList.add("show"); // Add show class to the current slide
    setTimeout(showSlides, 6000); // Change image every 3 seconds
}

function plusSlides(n) {
    //clearTimeout(showSlides); // Add this to clear timeout when manually changing slides
    let slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    else if(slideIndex < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        //slides[i].style.display = "none"; 
        slides[i].classList.remove("show"); 
    }
    //slides[slideIndex-1].style.display = "block";
    slides[slideIndex - 1].classList.add("show");
    //setTimeout(showSlides, 6000); // Add this to restart the automatic slideshow after manual change
}

showSlides();

/*// Function to check if an element is in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }
  
  // Function to check each element on scroll
  function checkScroll() {
    for (let element of document.querySelectorAll('.animate')) {
      if (isInView(element)) {
        element.classList.add('animate-in-view');
      } else {
        element.classList.remove('animate-in-view');
      }
    }
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', checkScroll);
  
  // Check on page load
  checkScroll();*/