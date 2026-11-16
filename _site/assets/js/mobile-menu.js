document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".menu-toggle");
    const navigation = document.getElementById("main-navigation");
  
    if (!button || !navigation) return;
  
    const header = button.closest(".site-header");
    if (!header) return;
  
    function closeMenu() {
      navigation.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    }
  
    // Only hide the mobile navigation after JavaScript is ready.
    header.classList.add("menu-ready");
  
    button.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  
    navigation.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu();
      }
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" &&
          button.getAttribute("aria-expanded") === "true") {
        closeMenu();
        button.focus();
      }
    });
  
    // Reset the menu if the window is enlarged to desktop size.
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeMenu();
    });
  });