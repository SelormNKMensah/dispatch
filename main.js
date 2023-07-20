let slideImg = document.getElementById("slideImg");
let slidesImg = slideImg.getElementsByTagName("img");

let index = 0;

function nextImage() {
    slidesImg[index].classList.remove("active");
    index = (index + 1) % slidesImg.length;
    slidesImg[index].classList.add("active");
}

function prevImage() {
    slidesImg[index].classList.remove("active");
    index = (index - 1 + slidesImg.length) % slidesImg.length;
    slidesImg[index].classList.add("active");
}

let slideTxt = document.getElementById("slideTxt");
let slidesTxt = slideTxt.getElementsByTagName("div");

let i = 0;

function nextTxt() {
    slidesTxt[i].classList.remove("active");
    i = (i + 1) % slidesTxt.length;
    slidesTxt[i].classList.add("active");
}

function prevTxt() {
    slidesTxt[i].classList.remove("active");
    i = (i - 1 + slidesTxt.length) % slidesTxt.length;
    slidesTxt[i].classList.add("active");
}

//animations
function init() {
    const carouselSlides = document.querySelectorAll('carouselContainer');
    const contentPages = document.querySelector('');
}