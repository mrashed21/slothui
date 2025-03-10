//  Mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector("menu");
  const overlay = document.querySelector(".overlay");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = menu.classList.contains("active")
      ? "hidden"
      : "auto";
  });

  overlay.addEventListener("click", function () {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });

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

//WHO IS IT

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".who-is-it .box");
  const image = document.querySelector(".who-is-it .right-side img");

  const images = [
    "./assets/image/Frame.png",
    "./assets/image/Frame2.jpg",
    "./assets/image/Frame3.jpg",
  ];

  boxes[0].querySelector(".bar-line").classList.add("active");
  image.src = images[0];
  boxes.forEach((box, index) => {
    box.addEventListener("click", function () {
      document.querySelectorAll(".bar-line").forEach((bar) => {
        bar.classList.remove("active");
      });
      box.querySelector(".bar-line").classList.add("active");
      image.src = images[index];
    });
  });
});

// testimonials
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial-box");
  const loadMoreBtn = document.createElement("button");
  function handleMobileView() {
    if (window.innerWidth <= 768) {
      testimonials.forEach((testimonial, index) => {
        if (index >= 3) {
          testimonial.style.display = "none";
        }
      });

      loadMoreBtn.textContent = "Load More +";
      loadMoreBtn.classList.add("load-more-btn");
      document
        .querySelector(".testimonial .container")
        .appendChild(loadMoreBtn);

      loadMoreBtn.addEventListener("click", function () {
        testimonials.forEach((testimonial) => {
          testimonial.style.display = "flex";
        });
        loadMoreBtn.style.display = "none";
      });
    } else {
      testimonials.forEach((testimonial) => {
        testimonial.style.display = "flex";
      });
      if (document.contains(loadMoreBtn)) {
        loadMoreBtn.remove();
      }
    }
  }

  handleMobileView();

  window.addEventListener("resize", handleMobileView);
});

// FAQ section
document.querySelectorAll(".faq-box").forEach((faq) => {
  const toggleBtn = faq.querySelector(".faq-toggle");

  toggleBtn.addEventListener("click", () => {
    faq.classList.toggle("active");
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
