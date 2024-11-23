document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("¡Gracias por contactarme! Te responderé pronto.");
    });
});
