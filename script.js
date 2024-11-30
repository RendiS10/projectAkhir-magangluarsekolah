document.querySelector('.visi').addEventListener('click', function() {
  const visiMisiText = document.getElementById('visi-misi-text');
  
  // Jika sedang menampilkan visi, tutup
  if (visiMisiText.style.display === 'block' && 
      visiMisiText.querySelector('.visi-icon i').classList.contains('fa-eye')) {
    visiMisiText.style.display = 'none';
  } else {
    // Jika tidak sedang menampilkan visi atau menampilkan misi, tampilkan visi
    visiMisiText.innerHTML = `
      <p>Menjadi platform pendidikan non-formal berbasis teknologi yang menghasilkan generasi muda yang unggul dalam keterampilan, pengetahuan, karakter, aktif dalam pengembangan potensi diri dan memiliki daya saing.</p>
      <br>
      <div class="visi-icon">
        <i class="fa-regular fa-eye"></i>
        <span>Visi</span>
      </div>
    `;
    visiMisiText.style.display = 'block';
  }
});

document.querySelector('.misi').addEventListener('click', function() {
  const visiMisiText = document.getElementById('visi-misi-text');
  
  // Jika sedang menampilkan misi, tutup
  if (visiMisiText.style.display === 'block' && 
      visiMisiText.querySelector('.visi-icon i').classList.contains('fa-clipboard')) {
    visiMisiText.style.display = 'none';
  } else {
    // Jika tidak sedang menampilkan misi atau menampilkan visi, tampilkan misi
    visiMisiText.innerHTML = `
      <p>Kami menyediakan program pendidikan terkurasi, platform teknologi pembelajaran, dan pelatihan berkualitas yang relevan dengan kebutuhan industri, sambil mendorong kolaborasi, kesadaran pembelajaran sepanjang hayat, dan pendampingan aktif bagi generasi muda Indonesia.</p>
       <br>
      <div class="visi-icon">
        <i class="fa-solid fa-clipboard"></i>
        <span>Misi</span>
      </div>
    `;
    visiMisiText.style.display = 'block';
  }
});

// Menambahkan event listener untuk tombol close
document.addEventListener('click', function(e) {
  if (e.target.closest('.visi-icon')) {
    document.getElementById('visi-misi-text').style.display = 'none';
  }
});

// Event listeners untuk value yang diberikan
document.querySelector('.valuesatu').addEventListener('click', function() {
  const valueText = document.getElementById('value-text');
  
  if (valueText.style.display === 'block' && 
      valueText.querySelector('.value-icon i').classList.contains('fa-rocket')) {
    valueText.style.display = 'none';
  } else {
    valueText.innerHTML = `
      <p>Mendukung setiap individu yang ingin mengambil langkah pertama dalam mengembangkan diri.</p>
      <br>
      <div class="value-icon">
        <i class="fas fa-rocket"></i>
        <span>Berani Untuk Memulai</span>
      </div>
    `;
    valueText.style.display = 'block';
  }
});

document.querySelector('.valuedua').addEventListener('click', function() {
  const valueText = document.getElementById('value-text');
  
  if (valueText.style.display === 'block' && 
      valueText.querySelector('.value-icon i').classList.contains('fa-bullseye')) {
    valueText.style.display = 'none';
  } else {
    valueText.innerHTML = `
      <p>Setiap program dirancang untuk menghadapi kebutuhan industri dan tren terkini</p>
      <br>
      <div class="value-icon">
        <i class="fas fa-bullseye"></i>
        <span>Relevan Dengan Zaman</span>
      </div>
    `;
    valueText.style.display = 'block';
  }
});

document.querySelector('.valuetiga').addEventListener('click', function() {
  const valueText = document.getElementById('value-text');
  
  if (valueText.style.display === 'block' && 
      valueText.querySelector('.value-icon i').classList.contains('fa-brain')) {
    valueText.style.display = 'none';
  } else {
    valueText.innerHTML = `
      <p>Setiap materi yang diberikan dipilih secara cermat agar memberikan wawasan dan keterampilan yang relevan dan berkualitas.</p>
      <br>
      <div class="value-icon">
        <i class="fas fa-brain"></i>
        <span>Terbaru dan Terakurasi</span>
      </div>
    `;
    valueText.style.display = 'block';
  }
});

// Event listener untuk menutup box value
document.addEventListener('click', function(e) {
  if (e.target.closest('.value-icon')) {
    document.getElementById('value-text').style.display = 'none';
  }
});

// Event listeners untuk whyLs
document.querySelector('.valuesatuWhy').addEventListener('click', function() {
  const whyText = document.getElementById('why-text');
  
  if (whyText.style.display === 'block' && 
      whyText.querySelector('.why-icon i').classList.contains('fa-desktop')) {
    whyText.style.display = 'none';
  } else {
    whyText.innerHTML = `
      <p>Bergabunglah dengan grup edukasi kami untuk mendapatkan pengalaman belajar yang interaktif dan kolaboratif bersama peserta lainnya.</p>
      <br>
      <div class="why-icon">
        <i class="fas fa-desktop"></i>
        <span>Grup Edukasi</span>
      </div>
    `;
    whyText.style.display = 'block';
  }
});

document.querySelector('.valueduaWhy').addEventListener('click', function() {
  const whyText = document.getElementById('why-text');
  
  if (whyText.style.display === 'block' && 
      whyText.querySelector('.why-icon i').classList.contains('fa-graduation-cap')) {
    whyText.style.display = 'none';
  } else {
    whyText.innerHTML = `
      <p>Tidak puas dengan jurusan kuliah? Kami menyediakan alternatif pembelajaran yang sesuai dengan minat dan passion Anda.</p>
      <br>
      <div class="why-icon">
        <i class="fas fa-graduation-cap"></i>
        <span>Kuliah Salah Jurusan</span>
      </div>
    `;
    whyText.style.display = 'block';
  }
});

document.querySelector('.valuetigaWhy').addEventListener('click', function() {
  const whyText = document.getElementById('why-text');
  
  if (whyText.style.display === 'block' && 
      whyText.querySelector('.why-icon i').classList.contains('fa-tags')) {
    whyText.style.display = 'none';
  } else {
    whyText.innerHTML = `
      <p>Dapatkan akses ke berbagai kelas berkualitas dengan harga yang terjangkau dan bersahabat dengan kantong Anda.</p>
      <br>
      <div class="why-icon">
        <i class="fas fa-tags"></i>
        <span>Kelas Terjangkau</span>
      </div>
    `;
    whyText.style.display = 'block';
  }
});

document.querySelector('.valueempatWhy').addEventListener('click', function() {
  const whyText = document.getElementById('why-text');
  
  if (whyText.style.display === 'block' && 
      whyText.querySelector('.why-icon i').classList.contains('fa-book')) {
    whyText.style.display = 'none';
  } else {
    whyText.innerHTML = `
      <p>Akses materi pembelajaran kapan saja dan di mana saja melalui platform digital kami yang mudah digunakan.</p>
      <br>
      <div class="why-icon">
        <i class="fas fa-book"></i>
        <span>Akses Edukasi</span>
      </div>
    `;
    whyText.style.display = 'block';
  }
});

// Event listener untuk menutup box why
document.addEventListener('click', function(e) {
  if (e.target.closest('.why-icon')) {
    document.getElementById('why-text').style.display = 'none';
  }
});
