const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const btn = document.querySelector('.hireMeBtn');

const nav = document.querySelector('nav');

function updateStyles() {
  if (window.scrollY === 0) {
    nav.classList.remove('scrolled');
  } else {
    nav.classList.add('scrolled');
  }
}

updateStyles();

window.addEventListener('scroll', updateStyles);



menuToggle.addEventListener('change', function () {
    if (this.checked) {
        navLinks.classList.add('active');
        btn.classList.add('active');
    } else {
        navLinks.classList.remove('active');
        btn.classList.remove('active');
    }
});

let slideIndex = 1;
showSlides(slideIndex);

setInterval(function () {
    plusSlides(1);
}, 4000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const content = document.getElementsByClassName("content");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        content[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    content[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
