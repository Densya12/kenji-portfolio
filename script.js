document.addEventListener("DOMContentLoaded", () => {

    let index = 0;
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
    const dots = document.querySelectorAll(".dots span");

    function showSlide(i) {
        index = i;

        if (index >= totalSlides) index = 0;
        if (index < 0) index = totalSlides - 1; 

        slides.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function moveSlide(step) {
        showSlide(index + step);
    }

    function currentSlide(i) {
        showSlide(i);
    }

    window.moveSlide = moveSlide;
    window.currentSlide = currentSlide;

    setInterval(() => {
        moveSlide(1);
    }, 3000);

    showSlide(0);

});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 150 && scrollY < sectionTop + sectionHeight - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const fadeElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show"); 
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(el => {
    el.classList.add("fade-section");
    observer.observe(el);
});