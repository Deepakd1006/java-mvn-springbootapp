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
});
