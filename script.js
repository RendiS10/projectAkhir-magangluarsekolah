// Array gambar
const images = [
  "./public/assets/images/kegiatan/26 April 2024 - 5 - Tengah.jpeg",
  "./public/assets/images/kegiatan/Screen Shot 2024-03-04 at 10.06.39.png",
  "./public/assets/images/kegiatan/Screenshot (150).png",
  "./public/assets/images/kegiatan/Screenshot_24.png",
  // 'images/kegiatan/Screenshot (75).png',
  // 'images/kegiatan/Screen Shot 2024-03-04 at 10.06.39.png',
  // 'images/kegiatan/LS_TRKP_024.jpg',
  // 'images/kegiatan/DSC02955.JPG',
  // 'images/kegiatan/26_04_2024 - 5 - Tengah.png'
];

function initImageSlider() {
  const slider = document.querySelector(".image-slider");

  // Tambahkan gambar tiga kali untuk efek infinite scroll yang lebih mulus
  [...images, ...images, ...images].forEach((imageSrc) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Kegiatan Luar Sekolah";
    slider.appendChild(img);
  });
}

document.addEventListener("DOMContentLoaded", initImageSlider);
