function updateJam() {
  const jamEl = document.getElementById("jam");
  if (!jamEl) return;

  const now = new Date();
  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  const detik = now.getSeconds().toString().padStart(2, '0');

  jamEl.innerHTML = "⏰ " + jam + ":" + menit + ":" + detik;
}

setInterval(updateJam, 1000);
updateJam();

function kirimPesan(event) {
  event.preventDefault();
  alert("Pesan Anda berhasil terkirim. Terima kasih!");
  window.location.href = "index.html";
}


