// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const whatsappNumber = "6289653720025";
        const text = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\nPesan: ${message}`);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

        window.open(whatsappURL, "_blank");
    });
});

