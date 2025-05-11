
// Load Particles.js
particlesJS.load("particles-js", "particles.json", function () {
    console.log("Particles.js loaded successfully.");
  });
  
  // ScrollSpy: Highlight Active Nav Link
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    sections.forEach((section) => {
      const top = window.scrollY;
      const offset = section.offsetTop - 120; // leave space for fixed navbar
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
  
  // Vertical Carousel-like Animation for Project Cards
  function animateProjectCarousel() {
    const triggerPoint = window.innerHeight * 0.85;
    const cards = document.querySelectorAll(".project-card");
  
    cards.forEach((card) => {
      const top = card.getBoundingClientRect().top;
      const bottom = card.getBoundingClientRect().bottom;
  
      if (top < triggerPoint && bottom > 100) {
        card.classList.add("show");
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
        card.classList.remove("show");
      }
    });
  }
  
  window.addEventListener("scroll", animateProjectCarousel);
  window.addEventListener("load", animateProjectCarousel);

// Run function on scroll
// Animate skill bars when in view, reset when out
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }
  
  function animateSkillBars() {
    const bars = document.querySelectorAll(".skill-bar");
  
    bars.forEach((bar) => {
      if (isInViewport(bar)) {
        // Animate in
        bar.style.width = bar.getAttribute("data-skill");
      } else {
        // Reset when out of view
        bar.style.width = "0";
      }
    });
  }
  
  // Trigger on scroll and on load
  window.addEventListener("scroll", animateSkillBars);
  window.addEventListener("load", animateSkillBars);
  
  