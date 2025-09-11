function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// Close menu when a link is clicked
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  const links = mobileMenu.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
});

  // Typing Animation for Hero Section
  document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("heroText");
    const texts = [
      "Modern Tariff Plans with Style.",
      "Transparent. Flexible. Reliable.",
      "Powering the Future of Smart Billing."
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
  
  // Testimonial scroll animation 
  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("testimonialSlider");
    let scrollAmount = 0;
  
    function autoScroll() {
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0; // reset scroll
      } else {
        scrollAmount += 320; // move by card width
      }
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }
  
    setInterval(autoScroll, 3000); // scroll every 3s
  });  

  // scroll reveal 
  document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // Uncomment if you want animation only once:
          // observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    services.forEach(service => {
      observer.observe(service);
    });
  });
  