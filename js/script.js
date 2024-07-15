const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

let prevScrollPos = window.pageYOffset;
let isScrolling = false;

window.addEventListener('scroll', function () {
    if (!isScrolling) {
        window.requestAnimationFrame(function () {
            handleScroll();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

function handleScroll() {
    const navbar = document.querySelector('.navbar');
    const contact = document.querySelector('.contact');
    const currentScrollPos = window.pageYOffset;

    if (contact.getBoundingClientRect().top < window.innerHeight) {
        if (prevScrollPos > currentScrollPos) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }
    } else {
        navbar.classList.remove('hidden');
    }

    prevScrollPos = currentScrollPos;
}

const texts = ["Modal Usaha?", "Renovasi Rumah?", "Pendidikan?"];
let index = 0;

const changeText = () => {
    const textElement = document.getElementById("changing-text");
    textElement.textContent = texts[index];
    index = (index + 1) % texts.length;
};

setInterval(changeText, 3000);

function toggleInfo(id) {
    const element = document.getElementById(id);
    element.style.display = (element.style.display === "block") ? "none" : "block";
}

const mybutton = document.getElementById("scrollBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    mybutton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbymk0njHaIJgPL4gZHPpWoQ288ns6FNJSqn3uc-5GR2SSY9WbH0Fkf7vhCGy_o72pjf/exec';

function submitForm() {
    const form = document.forms['loanForm'];
    const data = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: data })
        .then(response => {
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
}

document.getElementById('nomor').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

window.addEventListener('DOMContentLoaded', (event) => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.marginBottom = '20px';
    }
});

if (window.top !== window.self) {
    window.top.location = window.location;
}