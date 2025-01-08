// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Webpage loaded successfully");

    const logos = document.querySelectorAll(".logos-grid img");

    logos.forEach(logo => {
        logo.addEventListener("mouseover", () => {
            logo.style.opacity = "1";
        });

        logo.addEventListener("mouseout", () => {
            logo.style.opacity = "0.8";
        });
    });
});
