import ImageSlider from '../components/ImageSlider';
import heroImage from '../assets/images/Supporting_Copy.png';
import visiIcon from '../assets/images/icons/Visi2.png';
import misiIcon from '../assets/images/icons/Misi2.png';
import beraniIcon from '../assets/images/icons/Berani2.png';
import relevanIcon from '../assets/images/icons/Relavan2.png';
import terbaruIcon from '../assets/images/icons/Terbaharu2.png';
import fleksibilitasIcon from '../assets/images/icons/Fleksibelitas.png';
import ragamProgramIcon from '../assets/images/icons/RagamProgram.png';
import materiRelevanIcon from '../assets/images/icons/materiRelavan.png';
import biayaIcon from '../assets/images/icons/BiayaTerjangkay.png';
import komunitasIcon from '../assets/images/icons/KomunitasAktif.png';
import mentorIcon from '../assets/images/icons/MentorAhli.png';
import prakerjaImage from '../assets/images/orang/image prakerja.png';
import belajarBekerjaImage from '../assets/images/orang/image belajar bekerja.png';
import skillsWeekImage from '../assets/images/orang/image Indonesian Skills Week.png';
import pbiImage from '../assets/images/orang/Ikon ProgramB1.png';
import jobConnectorImage from '../assets/images/orang/Hero ProgramB2.png';
import capCutImage from '../assets/images/orang/Hero ProgramC1.png';
import contentWriterImage from '../assets/images/orang/Hero ProgramC2.png';
import chatGPTImage from '../assets/images/orang/Hero ProgramC3.png';
import contactCenterImage from '../assets/images/orang/Hero ProgramC4.png';

const Home = () => {
  return (
    <article>
      <section className="hero">
        <img src={heroImage} alt="Image Hero" />
      </section>
      
      <section className="aboutLuarSekolah">
        <h1>Apa Itu Luarsekolah</h1>
        <div className="berawal">
          <h2>Berawal Dari.....</h2>
          <p>
            Kecemasan terhadap generasi muda dimana banyak dari mereka yang
            merasa tidak siap memasuki tahap dunia kerja, kami di Luarsekolah
            coba membuat platform pendidikan vokasi untuk menjembatani skill gap
            yang dirasakan oleh generasi Y dan Z di Indonesia agar bisa
            berkompetisi di industri yang super cepat ini. Kami hadir sebagai
            jawaban dari masalah yang dihadapi oleh generasi muda Indonesia
            dengan mengahdirkan program pelatihan yang relevan dengan kebutuhan
            dunia kerja melalui pembelejaran vokasi dan pengembangan diri
            berbasis digital.
          </p>
        </div>
        <div className="user-count">
          <div className="atributAboutLS">
            <i className="fas fa-user"></i>
            <span>250.000+</span>
          </div>
          <p>User sudah belajar di Luarsekolah</p>
        </div>
      </section>

      <section className="mediaLS">
        <h1>Foto Kegiatan Luarsekolah</h1>
        <ImageSlider />
      </section>
      
      <section className="visimisi">
        <h1>Visi Misi Kami</h1>
        <div className="containerVisiMisi">
          <div className="visi-card">
            <div className="visi-content">
              <p>
                Menjadi platform pendidikan non-formal berbasis teknologi yang
                menghasilkan generasi muda yang unggul dalam keterampilan,
                pengetahuan, karakter, aktif dalam pengembangan potensi diri dan
                memiliki daya saing.
              </p>
            </div>
            <div className="visi-icon">
              <img src={visiIcon} alt="Visi Icon" />
              <h4>Visi</h4>
            </div>
          </div>
          <div className="misi-card">
            <div className="misi-content">
              <p>
                Kami menyediakan program pendidikan terkurasi, platform
                teknologi pembelajaran, dan pelatihan berkualitas yang relevan
                dengan kebutuhan industri, sambil mendorong kolaborasi,
                kesadaran pembelajaran sepanjang hayat, dan pendampingan aktif
                bagi generasi muda Indonesia.
              </p>
            </div>
            <div className="misi-icon">
              <img src={misiIcon} alt="Misi Icon" />
              <h4>Misi</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="valueDiberikan">
        <br />
        <h1>Value Apa Aja Sih Yang kami Berikan ?</h1>
        <div className="containerValue">
          <ValueCard 
            icon={beraniIcon}
            title="Berani Untuk Memulai"
            description="Mendukung setiap individu yang ingin mengambil langkah pertama dalam mengembangkan diri."
          />
          <ValueCard 
            icon={relevanIcon}
            title="Relavan Dengan Zaman"
            description="Setiap program dirancang untuk menghadapi kebutuhan industri dan tren terkini"
          />
          <ValueCard 
            icon={terbaruIcon}
            title="Terbaru dan Terakurasi"
            description="Setiap materi yang diberikan dipilih secara cermat agar memberikan wawasan dan keterampilan yang relevan dan berkualitas."
          />
        </div>
      </section>

      <section className="tim-kami">
        <h1>Tim Kami Yang Luar Biasa !</h1>
        <div className="container-tim">
          <div className="tim-satu">
            <img
              src="https://luarsekolah.com/assets-front/images/team/jibril-300x416px.jpg"
              alt="M. Jibril Sobron"
            />
            <div className="component-tim">
              <h3>M. Jibril Sobron</h3>
              <p>Chief Executive Officer & Co-Founder</p>
              <div className="sosmedtim">
                <a href="mailto:jibril@luarsekolah.com">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://www.instagram.com/jibrilsobron">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="http://linkedin.com/in/jibrilsobron">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="tim-dua">
            <img
              src="https://luarsekolah.com/assets-front/images/team/fauzan-300x416px.jpg"
              alt="M. Fauzan Ahsan"
            />
            <div className="component-tim">
              <h3>M. Fauzan Ahsan</h3>
              <p>Technology Advisor & Co-Founder</p>
              <div className="sosmedtim">
                <a href="mailto:fauzan.ahsan@gmail.com">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://www.instagram.com/mfauzanahsan">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/mfauzanahsan">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyLs">
        <h1>Kenapa Harus Luarsekolah ?</h1>
        <div className="containerWhy">
          <WhyCard
            icon={fleksibilitasIcon}
            title="Fleksibelitas Belajar"
            description="Belajar kapan saja dan dimana saja sesuai dengan kenyamanan."
          />
          <WhyCard
            icon={ragamProgramIcon}
            title="Ragam Program"
            description="Berbagai program pengembangan ketrampilan teknis yang dapat dipilih sesuai kebutuhan."
          />
          <WhyCard
            icon={materiRelevanIcon}
            title="Materi Relavan"
            description="Kurikulum pembelajaran yang menyesuaikan dengan kebutuhan industri terkini."
          />
          <WhyCard
            icon={biayaIcon}
            title="Biaya Terjangkau"
            description="Biaya yang ditawarkan sangat kompetitif dan ramah kantong pelajar."
          />
          <WhyCard
            icon={komunitasIcon}
            title="Komunitas Aktif"
            description="Memiliki komunitas aktif yang memungkinkan peserta saling berbagi pengalaman dan berdiskusi."
          />
          <WhyCard
            icon={mentorIcon}
            title="Mentor Ahli"
            description="Praktisi berpengalaman yang memberikan wawasan nyata di dunia kerja."
          />
        </div>
      </section>

      <section className="program-section">
        <h1>Program Kami</h1>
        <p className="program-description">
          Kami menawarkan beragam program pembelajaran inovatif yang mencakup
          berbagai bidang, dirancang untuk membantu Anda menguasai keterampilan
          baru dan mencapai potensi terbaik.
        </p>
        <div className="program-cards">
          <ProgramCard
            image={prakerjaImage}
            title="Prakerja"
            description="Program Pelatihan Prakerja bertujuan mengembangkan kompetensi kerja untuk pencari kerja, pekerja yang terkena PHK, dan yang membutuhkan peningkatan keterampilan."
            link="https://luarsekolah.com/prakerja"
          />
          <ProgramCard
            image={belajarBekerjaImage}
            title="Belajar Bekerja"
            description="Program Belajar Bekerja membekali keterampilan digital dan AI, dengan mentor praktisi industri, untuk meningkatkan kesiapan dan daya saing profesional."
            link="https://belajarbekerja.com/"
          />
          <ProgramCard
            image={skillsWeekImage}
            title="Indonesian Skills Week"
            description="Indonesia Skills Week adalah event dua bulanan dari Prakerja yang terbuka untuk semua golongan, termasuk alumni Prakerja."
            link="https://luarsekolah.com/indonesia-skills-week"
          />
        </div>
      </section>

      <section className="program-tersedia">
        <h1>Program Tersedia</h1>
        <div className="program-cards">
          <ProgramCard
            image={pbiImage}
            title="Project Based Intership (PBI)"
            description="Program magang berdurasi maksimal 3 bulan. Cocok untukmu untuk mendapatkan basic experiences atau portofolio."
            link="#"
          />
          <ProgramCard
            image={jobConnectorImage}
            title="Job Connector"
            description="Program berdurasi 6 bulan atau lebih. Cocok untukmu agar lebih siap secara profesional untuk bisa mendapatkan pekerjaan."
            link="#"
          />
        </div>
      </section>

      <section className="recommendation-section">
        <h1>Rekomendasi Program</h1>
        <p className="recommendation-description">
          Maksimalkan potensi belajar dengan program teratas kami, materi
          relevan, dan instruktur berpengalaman untuk hasil luar biasa dan
          tujuan tercapai.
        </p>
        <div className="recommendation-cards">
          <RecommendationCard
            image={capCutImage}
            category="Webinar"
            title="Optimalisasi AI untuk Editing Video di CapCut"
            instructor="M. Syauqi Ridho, Febrian Budi Satia"
            description="Program ini bertujuan untuk memanfaatkan teknologi AI di CapCut guna meningkatkan efisiensi dan kualitas editing video secara praktis dan inovatif."
            price="1.500.000"
          />
          <RecommendationCard
            image={contentWriterImage}
            category="Project-based Internship"
            title="Content Writer"
            instructor="Mohamad Ryan Saputra"
            description="Program ini membantu kamu belajar menulis konten yang kreatif, menarik, dan cocok banget buat dunia digital marketing."
            price="645.000"
          />
          <RecommendationCard
            image={chatGPTImage}
            category="Webinar"
            title="Penggunaan ChatGPT untuk Ide Konten Pemasaran"
            instructor="Denny Sitompul"
            description="Program ini ngajarin cara pakai ChatGPT buat dapetin ide-ide fresh dan kreatif untuk konten pemasaran."
            price="1.500.000"
          />
          <RecommendationCard
            image={contactCenterImage}
            category="Webinar"
            title="Menerapkan Orientasi Pelayanan bagi Petugas Contact Center"
            instructor="Afif Lutfi"
            description="Program ini mengajarkan petugas contact center cara memberikan pelayanan terbaik yang fokus pada kebutuhan dan kepuasan pelanggan."
            price="1.000.000"
          />
        </div>
      </section>
    </article>
  );
};

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="value-card">
      <div className="value-content">
        <p>{description}</p>
      </div>
      <div className="value-icon">
        <img src={icon} alt={title} />
        <h4>{title}</h4>
      </div>
    </div>
  );
};

const WhyCard = ({ icon, title, description }) => {
  return (
    <div className="why-card">
      <div className="why-content">
        <p>{description}</p>
      </div>
      <div className="why-icon">
        <img src={icon} alt={title} />
        <h4>{title}</h4>
      </div>
    </div>
  );
};

const ProgramCard = ({ image, title, description, link }) => {
  return (
    <div className="program-card">
      <img src={image} alt={title} className="program-image" />
      <h3 className="program-card-title">{title}</h3>
      <p className="program-card-description">{description}</p>
      <a href={link} className="program-button">{title}</a>
    </div>
  );
};

const RecommendationCard = ({ image, category, title, instructor, description, price }) => {
  return (
    <div className="recommendation-card">
      <img src={image} alt={title} className="card-image" />
      <div className={`card-header ${category.toLowerCase().replace(/\s+/g, '')}`}>{category}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-instructor">{instructor}</p>
      <p className="card-description">{description}</p>
      <p className="card-price">Rp {price}</p>
      <a href="#" className="card-button">Selengkapnya →</a>
    </div>
  );
};

export default Home;