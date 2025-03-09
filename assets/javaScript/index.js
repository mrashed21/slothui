// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector("menu");
  const overlay = document.querySelector(".overlay");

  hamburger.addEventListener("click", function () {
    // Toggle hamburger animation
    this.classList.toggle("active");

    // Toggle menu visibility
    menu.classList.toggle("active");

    // Toggle overlay
    overlay.classList.toggle("active");

    // Prevent body scrolling when menu is open
    document.body.style.overflow = menu.classList.contains("active")
      ? "hidden"
      : "auto";
  });

  // Close menu when clicking on overlay
  overlay.addEventListener("click", function () {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Close menu when clicking on menu links
  const menuLinks = document.querySelectorAll(".menu-link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });
});
document.querySelectorAll(".faq-box").forEach((faq) => {
  const toggleBtn = faq.querySelector(".faq-toggle");

  toggleBtn.addEventListener("click", () => {
    faq.classList.toggle("active");

    // Toggle visibility of the answer
    const answer = faq.querySelector(".faq-answer");
    if (faq.classList.contains("active")) {
      answer.style.display = "block";
      toggleBtn.querySelector("img").style.transform = "rotate(180deg)";
    } else {
      answer.style.display = "none";
      toggleBtn.querySelector("img").style.transform = "rotate(0deg)";
    }
  });
});
