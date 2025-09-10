function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
}  
// Typing Animation for Hero Section
const textElement = document.getElementById("heroText");
const texts = [
    "Modern Tariff Plans with Style",
    "Transparent. Flexible. Reliable.",
    "Powering the future of smart billing"
];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < texts[textIndex].length) {
    textElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
    } else {
    setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
    textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 40);
    } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 200);
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);