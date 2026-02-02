document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide-img');
    let currentIndex = 0;

    if (slides.length > 0) {
        gsap.set(slides, { opacity: 0, filter: "grayscale(100%)" });
        gsap.set(slides[0], { opacity: 1 });

        function nextSlide() {
            let nextIndex = (currentIndex + 1) % slides.length;
            let currentImg = slides[currentIndex];
            let nextImg = slides[nextIndex];
            const tl = gsap.timeline();

            tl.to(currentImg, { filter: "grayscale(0%)", duration: 3, ease: "sine.inOut" })
              .to(currentImg, { opacity: 0, duration: 2, ease: "power2.inOut" }, "+=2")
              .to(nextImg, { opacity: 1, duration: 2, ease: "power2.inOut" }, "-=2")
              .set(nextImg, { filter: "grayscale(100%)" });

            currentIndex = nextIndex;
        }
        setInterval(nextSlide, 10000);
        
        gsap.to(".slide-img", { scale: 1.1, duration: 15, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }
});

function redirectToTally() {
    window.location.href = "https://tally.so/r/eqR2gE";
}