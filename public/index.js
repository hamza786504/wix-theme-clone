document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const side_bar = document.getElementById("side_bar");
  const close_sidebar = document.getElementById("close_sidebar");
  hamburger.addEventListener("click", function () {
    side_bar.style.display = "block";
    side_bar.style.opacity = 1;
    side_bar.style.right = "0";
  });

  close_sidebar.addEventListener("click", function () {
    side_bar.style.display = "none";
    side_bar.style.opacity = 0;
    side_bar.style.right = "-100%";
  });

  // Get the testimonials and buttons
  const testimonials = document.querySelectorAll(".review_cover");
  const buttons = document.querySelectorAll("button[data-slide]");

  // Add a click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the data-slide attribute of the clicked button
      const slideNumber = button.getAttribute("data-slide");

      // Remove the 'active' class from all buttons
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add the 'active' class to the clicked button to mark it as active
      button.classList.add("active");

      // Hide all testimonials with a fade-out effect
      testimonials.forEach((testimonial) => {
        testimonial.style.transition = "opacity 0.5s";
        testimonial.style.opacity = 0;
      });

      document.querySelectorAll(`.review_cover`).forEach((review_cover) => {
        review_cover.style.opacity = 0;
        review_cover.classList.add("hidden");
      });

      // Show the testimonial that corresponds to the clicked button with a fade-in effect
      document.getElementById(`testimonial${slideNumber}`).style.opacity = 1;
      document
        .getElementById(`testimonial${slideNumber}`)
        .classList.remove("hidden");
    });
  });








  
  // Add an event listener to each heart icon
  const favoriteIcons = document.querySelectorAll(".favorite-icon");
  favoriteIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      console.log("hello");
      // Toggle the 'text-red-500' class to change the color to red when clicked
      icon.querySelector(".fa-heart").classList.toggle("text-red-500");
      icon.querySelector(".fa-heart + .favorite_count").innerHTML = 1;
    });
  });







  const navigationLinks = document.querySelectorAll(".section_navigation a");
  const sections = document.querySelectorAll("section");
  
  let currentSection = null;
  
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId !== currentSection) {
            if (currentSection) {
              const prevLink = document.querySelector(`.section_navigation a[href="#${currentSection}"]`);
              prevLink.classList.remove("active");
            }
  
            const link = document.querySelector(`.section_navigation a[href="#${sectionId}"]`);
            link.classList.add("active");
            currentSection = sectionId;
          }
        }
      });
    },
    { threshold: 0.5 }
  );
  
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
  
      navigationLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
  
      link.classList.add("active");
  
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scroll({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
  
  // Add this code to set the initial active section
  window.addEventListener("load", () => {
    const firstSection = sections[0]; // You can set this to the desired default section
    const firstLink = document.querySelector(`.section_navigation a[href="#${firstSection.id}"]`);
    firstLink.classList.add("active");
    currentSection = firstSection.id;
  });
  
});
