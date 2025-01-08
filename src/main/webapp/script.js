document.addEventListener("DOMContentLoaded", () => {
    const contentMessage = document.querySelector(".content p");

    const messages = [
        "Empowering businesses through cloud innovation.",
        "Streamlining CI/CD pipelines for better efficiency.",
        "Driving scalable and resilient cloud solutions.",
        "Harnessing the power of DevOps for business growth."
    ];

    let index = 0;
    setInterval(() => {
        contentMessage.textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 3000);

    const header = document.querySelector("header");
    header.style.animation = "fadeIn 2s ease-in-out";

    const style = document.createElement("style");
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});
