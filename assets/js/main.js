function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
  }
  
  // Typing Animation for Hero Section
  document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("heroText");
    const texts = [
      "Modern Tariff Plans with Style ✨",
      "Transparent. Flexible. Reliable.",
      "Powering the Future of Smart Billing ⚡"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let typing = true;
  
    function typeEffect() {
      if (typing) {
        if (charIndex < texts[textIndex].length) {
          textElement.textContent += texts[textIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeEffect, 80);
        } else {
          typing = false;
          setTimeout(typeEffect, 1500);
        }
      } else {
        if (charIndex > 0) {
          textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(typeEffect, 40);
        } else {
          typing = true;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(typeEffect, 500);
        }
      }
    }
  
    typeEffect();
  });
  