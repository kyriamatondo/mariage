document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    // Séquence de chargement ultra-clean
    tl.to("#nav", { opacity: 1, y: 0, duration: 1.5, startAt: {y: -20} })
      .to("#main-bento", { 
          opacity: 1, 
          scale: 1, 
          duration: 1.8, 
          startAt: {scale: 0.98} 
      }, "-=1.2")
      .to("#footer", { opacity: 1, duration: 1.5 }, "-=1");

    // Animation au survol des lignes (subtile)
    document.getElementById('main-bento').addEventListener('mouseenter', () => {
        gsap.to(".grid-line", { borderColor: "rgba(168, 137, 78, 0.2)", duration: 0.6 });
    });
    document.getElementById('main-bento').addEventListener('mouseleave', () => {
        gsap.to(".grid-line", { borderColor: "rgba(255, 255, 255, 0.05)", duration: 0.6 });
    });
});

function redirectToTally() {
    const TALLY_URL = "https://tally.so/r/QKRvbk"; 
    
    gsap.to("main", { 
        opacity: 0, 
        scale: 1.02,
        duration: 0.8, 
        ease: "power2.in",
        onComplete: () => { window.location.href = TALLY_URL; }
    });
}