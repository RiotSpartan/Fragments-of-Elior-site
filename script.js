const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

function closeMenu() {
  navLinks.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", toggleMenu);

  navItems.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const clickedOutsideMenu = !navLinks.contains(event.target);
    const clickedOutsideButton = !menuToggle.contains(event.target);

    if (clickedOutsideMenu && clickedOutsideButton) {
      closeMenu();
    }
  });
}