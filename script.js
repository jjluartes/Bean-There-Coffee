document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const categoryContents = document.querySelectorAll('.category-content');

    function showCategory(category) {
        categoryContents.forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(category).style.display = 'grid';
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('onclick').split("'")[1];
            showCategory(category);
        });
    });

    showCategory('food');
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const cartIcon = document.querySelector('.cart-icon');
const modal = document.getElementById('cartModal');
const closeModal = document.querySelector('.modal .close');

cartIcon.addEventListener('click', function () {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.navigation-menu');

hamburgerMenu.addEventListener('click', () => {
    navigationMenu.classList.toggle('show');
});

modal = document.getElementById("cartModal");
cartIcon = document.querySelector(".cart-icon img");
closeBtn = document.querySelector(".close");

cartIcon.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navigationMenu = document.querySelector('.navigation-menu');
    const backgroundLayer = document.querySelector('.background-layer');

    hamburgerMenu.addEventListener('click', function () {
        navigationMenu.classList.toggle('show');
        backgroundLayer.classList.toggle('show');
    });

    backgroundLayer.addEventListener('click', function () {
        navigationMenu.classList.remove('show');
        backgroundLayer.classList.remove('show');
    });
});
