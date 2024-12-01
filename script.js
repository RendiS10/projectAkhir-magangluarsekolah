// Array gambar
const images = [
  'images/26 April 2024 - 5 - Tengah.jpeg',
  'images/Screen Shot 2024-03-04 at 10.06.39.png',
  'images/Screenshot (150).png',
  'images/Screenshot_24.png'
];

function initImageSlider() {
  const slider = document.querySelector('.image-slider');
  
  // Tambahkan gambar tiga kali untuk efek infinite scroll yang lebih mulus
  [...images, ...images, ...images].forEach(imageSrc => {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Kegiatan Luar Sekolah';
    slider.appendChild(img);
  });
}

document.addEventListener('DOMContentLoaded', initImageSlider);