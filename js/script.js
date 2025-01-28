document.addEventListener("DOMContentLoaded", function () {
  const whatsappButton = document.querySelector(".cta");

  if (whatsappButton) {
    whatsappButton.addEventListener("click", function () {
      const phoneNumber = "6285962687860"; // Ganti dengan nomor WhatsApp kamu tanpa +
      const message = encodeURIComponent(
        "Halo! Saya tertarik dengan layanan Anda."
      );
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, "_blank");
    });
  }
});
