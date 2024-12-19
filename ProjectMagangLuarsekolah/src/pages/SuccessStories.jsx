import React from 'react';
import '../assets/css/succes.css';
// Import gambar untuk realStories section
import realStoriesIcon1 from '../assets/images/animasi/33.png';
import realStoriesIcon2 from '../assets/images/animasi/4.png';
// Mengimpor gambar jika berada di dalam src
import materiRelevan from '../assets/images/animasi/materi relevan 1.png';
import jumlahAlumniPrakerja from '../assets/images/orang/Prakerja.png';
import alumniBekerja from '../assets/images/orang/Job.png';
import statistikIcon1 from '../assets/images/animasi/Real(icon) (1).png';
import statistikIcon2 from '../assets/images/animasi/Real(icon) (2).png';
import statistikIcon3 from '../assets/images/animasi/Real(icon) (3).png';

const SuccessStories = () => {
  return (
    <article>
      <section className="realStories">
        <div className="reals-kiri">
          <div className="container-reals">
            <img src={realStoriesIcon1} alt="Real Stories Icon" />
            <div className="kiridalam">
              <h2>Real Stories,</h2>
              <h2>Real Impact</h2>
            </div>
          </div>
          <p>
            Temui alumni kami yang telah mengubah perjalanan karier dengan
            dukungan program kami.
          </p>
        </div>
        <div className="reals-kanan">
          <div className="animasi-reals-kanan-sebelahkiri">
            <img src={realStoriesIcon2} alt="Animation Icon" />
          </div>
          <div className="animasi-reals-kanan-sebelahkanan">
            <img
              src={'https://communicatewithexpertise.com/wp-content/uploads/2022/12/173.jpg?ezimgfmt=rs%3Adevice%2Frscb1-1'}
              alt="Real Stories"
            />
          </div>
        </div>
      </section>

      <section className="achievement-section">
        <h1>Dari Berjuang Hingga Berprestasi</h1>
        <div className="cards-container">
          {alumniData.map((alumni, index) => (
            <div className="card" key={index}>
              <img src={alumni.image} alt={alumni.name} />
              <div className="card-content">
                <h3>{alumni.name}</h3>
                <p>Profesi: {alumni.profession}</p>
                <p>Tempat: {alumni.workplace}</p>
                <div className="sosmedtim">
                  {alumni.socials.map((social, index) => (
                    <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                      <i className={`fab fa-${social.platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="statistikAlumni">
        <h1>Statistik Alumni</h1>
        <div className="container-statistik">
          <div className="statistik-kiri">
            <div className="statistik-kiri-dalam">
              <div className="animasisatu">
                <img src={materiRelevan} alt="Materi Relevan" />
              </div>
              <div className="jumlahAlumniPrakerja">
                <img src={jumlahAlumniPrakerja} alt="Jumlah Alumni Prakerja" />
              </div>
            </div>
            <div className="animasidua">
              <img src={statistikIcon1} alt="Statistik Alumni" />
            </div>
          </div>
          <div className="statistik-kanan">
            <div className="statistik-kanan-dalam">
              <div className="animasi-satu">
                <img src={alumniBekerja} alt="Jumlah Alumni Bekerja" />
              </div>
              <div className="jumlahAlumniPrakerja">
                <img src={statistikIcon3} alt="Jumlah Alumni Bekerja" />
              </div>
            </div>
            <div className="animasi-dua">
              <img src={statistikIcon2} alt="Statistik Alumni" />
            </div>
          </div>
        </div>
      </section>

      <section className="merekaBerhasil">
        <h1>Langsung dari Mereka yang Berhasil</h1>
        <div className="testimonials-container">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </section>

      <section className="cerita">
        <h1>Saatnya Anda Menulis Cerita Anda Sendiri</h1>
        <p>
          Luarsekolah menyediakan program belajar dan pelatihan untuk meningkatkan
          keterampilan Anda menghadapi dunia kerja. Bersama Luarsekolah, raih masa
          depan sukses!
        </p>
        <div className="btn-pelajari">
          <button className="btn">Pelajari Program Kami</button>
        </div>
      </section>
    </article>
  );
};

// Komponen pendukung
const AlumniCard = ({ image, name, profession, workplace, socials }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>Profesi: {profession}</p>
        <p>Tempat: {workplace}</p>
        <div className="sosmedtim">
          {socials.map((social, index) => (
            <a key={index} href={social.link}>
              <i className={`fab fa-${social.platform}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ image, name, role, quote }) => {
  return (
    <div className="testimonial-card">
      <div className="atas">
        <img src={image} alt={name} />
        <div className="atas-kanan">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
      <blockquote>{quote}</blockquote>
    </div>
  );
};

// Data dummy untuk alumni dan testimonial
const alumniData = [
  {
    image: "https://magang.luarsekolah.com/upload/lulusan_bb/46ff3084892de74b27d0ae3308d1ae04.jpeg",
    name: "Muhammad Fachri Afif",
    profession: "NDN-RG Research Assistant",
    workplace: "Telkom University",
    socials: [
      { platform: "linkedin", link: "https://www.linkedin.com" },
      { platform: "instagram", link: "https://www.instagram.com" },
      { platform: "twitter", link: "https://www.twitter.com" }
    ]
  },
  {
    image: "https://rendis10.github.io/projectAkhir-magangluarsekolah/public/assets/images/orang/image%2011.png", // Ganti dengan URL gambar yang sesuai
    name: "Rafi Ahmad Khairan",
    profession: "Web Developer",
    workplace: "Kementerian Hukum dan HAM RI",
    socials: [
      { platform: "linkedin", link: "https://www.linkedin.com" },
      { platform: "instagram", link: "https://www.instagram.com" },
      { platform: "twitter", link: "https://www.twitter.com" }
    ]
  },
  {
    image: "https://magang.luarsekolah.com/upload/lulusan_bb/9ade67141af985f7fd84dd32c5a67f66.png",
    name: "Laurensius Patrick Steve",
    profession: "Social Media Manager",
    workplace: "PT. SUMBER REJEKI BERKAT ABADI",
    socials: [
      { platform: "linkedin", link: "https://www.linkedin.com" },
      { platform: "instagram", link: "https://www.instagram.com" },
      { platform: "twitter", link: "https://www.twitter.com" }
    ]
  },
  {
    image: "https://magang.luarsekolah.com/upload/lulusan_bb/6671da690a622669737af6bb3685618c.jpeg",
    name: "Tengku Chairu Abda",
    profession: "Front-End Engineer",
    workplace: "PT. Summit Global Teknologi",
    socials: [
      { platform: "linkedin", link: "https://www.linkedin.com" },
      { platform: "instagram", link: "https://www.instagram.com" },
      { platform: "twitter", link: "https://www.twitter.com" }
    ]
  }
];

const testimonialData = [
  {
    image: "/assets/images/orang/1 1.png",
    name: "Wafiq Nur Agniati",
    role: "Graphic Design",
    quote: "Program Luarsekolah membuat skill design graphic aku lebih terasah dan juga membuat aku lebih bisa mengeskpresikan kreativitas dengan bebas."
  },
  // ... tambahkan data testimonial lainnya
];

export default SuccessStories;