document.addEventListener("DOMContentLoaded", () => { 
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotsContainer = document.querySelector(".carousel-dots");

    let currentIndex = 0;

    items.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot); // Corrigido aqui
    });

    const dots = document.querySelectorAll(".dot");

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Corrigido aqui
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex); // Corrigido aqui
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    nextBtn.addEventListener("click", nextSlide); // Corrigido aqui
    prevBtn.addEventListener("click", prevSlide);

    setInterval(nextSlide, 5000);

    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX; // Corrigido aqui
        if (touchStartX - touchEndX > 50) nextSlide();
        if (touchStartX - touchEndX < -50) prevSlide();
    });
});
