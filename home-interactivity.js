// home-interactivity.js
// Adds mouse-based interactivity to the homepage in a dark-themed style

document.addEventListener("DOMContentLoaded", () => {
    // 1️⃣ Smooth hover animations for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#3366ff"; // same as Sign-up button blue
            link.style.transition = "color 0.25s ease";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "#ffffff";
        });
    });

    // 2️⃣ Animated glow effect inside the hero section
    const hero = document.querySelector(".hero");
    const glow = document.createElement("div");
    glow.classList.add("mouse-glow");
    hero.appendChild(glow);

    hero.addEventListener("mousemove", (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
    });

    hero.addEventListener("mouseenter", () => {
        glow.style.opacity = "1";
    });

    hero.addEventListener("mouseleave", () => {
        glow.style.opacity = "0";
    });

    // 3️⃣ Button hover animations
    const buttons = document.querySelectorAll(".cta-buttons a");
    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "translateY(-3px)";
            btn.style.boxShadow = "0 6px 20px rgba(51,102,255,0.3)";
            btn.style.transition = "all 0.3s ease";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "translateY(0)";
            btn.style.boxShadow = "none";
        });
    });
});
