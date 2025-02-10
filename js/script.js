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
