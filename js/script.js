document.addEventListener("DOMContentLoaded", function () {
  const whatsappButton = document.querySelector(".cta");

  if (whatsappButton) {
    whatsappButton.addEventListener("click", function () {
      const phoneNumber = "6285962687860"; // Ganti dengan nomor WhatsApp kamu tanpa +
      const message = encodeURIComponent(
        "Halo! Saya ingin bekerja sama dengan anda."
      );
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, "_blank");
    });
  }
});

// Event saat ketuk di luar taskbar

document.addEventListener("click", function (event) {
  const menu = document.getElementById("navbarNav");
  const button = document.getElementById("Hamburger-button");

  if (!menu || !button) return;

  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("show");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-colored");
    navbar.classList.remove("navbar-transparent");
  } else {
    navbar.classList.add("navbar-transparent");
    navbar.classList.remove("navbar-colored");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const hamburgerButton = document.getElementById("Hamburger-button");
  const navbarNav = document.getElementById("navbarNav");

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-colored");
      navbar.classList.remove("navbar-transparent", "navbar-active");
    } else if (navbarNav.classList.contains("show")) {
      navbar.classList.add("navbar-active");
      navbar.classList.remove("navbar-transparent", "navbar-colored");
    } else {
      navbar.classList.add("navbar-transparent");
      navbar.classList.remove("navbar-active", "navbar-colored");
    }
  }

  window.addEventListener("scroll", updateNavbar);

  hamburgerButton.addEventListener("click", function () {
    setTimeout(updateNavbar, 10); // Tambahkan delay kecil agar class berubah dengan smooth
  });
});
