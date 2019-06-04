const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slides = document.getElementsByClassName("slides");
const img = document.querySelectorAll("img");

let slideIndex = 0;

//initialize slideshow
const init = () => {
    showFirstSlides();
}

//show next slide
const nextSlide = () => {
    showSlides(slideIndex += 1);
    setTimeout(clearSlideInterval());
}

//show previous slide
const prevSlide = () => {
    showSlides(slideIndex -= 1);
    setTimeout(clearSlideInterval());
}

//display slides
const showSlides = (num) => {
    if(num > slides.length) {slideIndex = 1}
    if(num < 1) {slideIndex = slides.length}
    img.forEach(item => {
        item.classList.add("fit-img")
    })
    hideSlides();
}

//hide imgs if not the current img
const hideSlides = () => {
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    /* forEach loop does not work here, I'm not sure why */
    // slides.forEach(slide => {
    //     slide.style.display = "none";
    // })

    slides[slideIndex-1].style.display = "block";
}

/* This section below for slideshow only */

//create array of slides and slice into parts for 
//slideshow functionality
const slideArr = Array.from(slides);
const firstSlides = slideArr.slice(0,4);
const secondSlides = slideArr.slice(4,8);
const thirdSlides = slideArr.slice(8,10);

//variables for setting timeout
let timeout1;
let timeout2;
let timeout3;

//display first 4 imgs in slideshow
const showFirstSlides = () => {
    firstSlides.forEach(slide => {
        slide.style.display = "";
        hideSecondSlides();
        hideFinalSlides();
    })

    timeout1 = setTimeout(showSecondSlides, 5000);
}

//display next 4 imgs in slideshow
const showSecondSlides = () => {
    secondSlides.forEach(slide => {
        slide.style.display = "";
        hideFirstSlides();
        hideFinalSlides();
    })

    timeout2 = setTimeout(showFinalSlides, 5000);
}

//show final imgs in slideshow
const showFinalSlides = () => {
    thirdSlides.forEach(slide => {
        slide.style.display = "";
        hideFirstSlides();
        hideSecondSlides();
    })

    timeout3 = setTimeout(showFirstSlides, 5000);
}

//hide first 4 slides
const hideFirstSlides = () => {
    firstSlides.forEach(slide => {
        slide.style.display = "none";
    })
}

//hide second 4 slides
const hideSecondSlides = () => {
    secondSlides.forEach(slide => {
        slide.style.display = "none";
    })
}

//hide last 2 slides
const hideFinalSlides = () => {
    thirdSlides.forEach(slide => {
        slide.style.display = "none";
    })
}

const clearSlideInterval = () => {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
}

/*This section above for slideshow only*/

init();

nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)