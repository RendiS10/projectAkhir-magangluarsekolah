import React from 'react';

const SuccessStories = () => {
  return (
    <article>
      <section className="realStories">
        <div className="reals-kiri">
          <div className="container-reals">
            <img src="/assets/images/animasi/33.png" alt="" />
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
            <img src="/assets/images/animasi/4.png" alt="" />
          </div>
          <div className="animasi-reals-kanan-sebelahkanan">
            <img
              src="https://communicatewithexpertise.com/wp-content/uploads/2022/12/173.jpg?ezimgfmt=rs%3Adevice%2Frscb1-1"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="achievement-section">
        <h1>Dari Berjuang Hingga Berprestasi</h1>
        <div className="cards-container">
          {alumniData.map((alumni, index) => (
            <AlumniCard key={index} {...alumni} />
          ))}
        </div>
      </section>

      <section className="statistikAlumni">
        <h1>Statistik Alumni</h1>
        <div className="container-statistik">
          <div className="statistik-kiri">
            <div className="statistik-kiri-dalam">
              <div className="animasisatu">
                <img src="/assets/images/animasi/materi relevan 1.png" alt="" />
              </div>
              <div className="jumlahAlumniPrakerja">
                <img src="/assets/images/orang/Prakerja.png" alt="" />
              </div>
            </div>
            <div className="animasidua">
              <img src="/assets/images/animasi/Real(icon) (1).png" alt="" />
            </div>
          </div>
          <div className="statistik-kanan">
            <div className="statistik-kanan-dalam">
              <div className="animasi-satu">
                <img src="/assets/images/orang/Job.png" alt="" />
              </div>
              <div className="jumlahAlumniPrakerja">
                <img src="/assets/images/animasi/Real(icon) (3).png" alt="" />
              </div>
            </div>
            <div className="animasi-dua">
              <img src="/assets/images/animasi/Real(icon) (2).png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="merekaBerhasil">
        <h1>Langsung dari Mereka yang Berhasil</h1>
        <div className="testimonials-container">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
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
      { platform: "linkedin", link: "#" },
      { platform: "instagram", link: "#" },
      { platform: "twitter", link: "#" }
    ]
  },
  // ... tambahkan data alumni lainnya
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