import React from 'react';
import { Link } from 'react-router-dom';
import vectorIcon from '../assets/images/icons/Vector.png';
import googlePlayBadge from '../assets/images/icons/google-play-badge 1.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer1">
        <h1>Luarsekolah</h1>
      </div>
      <div className="footer2">
        <div className="footer2-component1">
          <p>
            Luarsekolah merupakan wadah belajar dan mengajar pelajaran
            non-formal / alternatif dengan cara menyediakan kelas pengajaran
            dalam bentuk online dan offline
          </p>
          <SocialLinks />
        </div>
        <FooterLinks />
        <div className="footer2-component3">
          <p><b>Aplikasi Luarsekolah Juga ada di</b></p>
          <div className="google-play">
            <img src={vectorIcon} alt="Vector Icon" />
            <a
              href="https://play.google.com/store/apps/details?id=com.luarsekolah.mobile"
              className="btn-google-play"
            >
              <img
                src={googlePlayBadge}
                alt="Google Play Badge"
              />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <FooterBottom />
    </footer>
  );
};

const SocialLinks = () => {
  return (
    <div className="sosmed">
      <a href="https://www.linkedin.com/company/luarsekolah-com">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://www.tiktok.com/@luarsekolahofficial">
        <i className="fab fa-tiktok"></i>
      </a>
      <a href="https://www.instagram.com/luarsekolah/">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/luarsekolahofficial/">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com/luarsekolah/">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.youtube.com/luarsekolah">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  );
};

const FooterLinks = () => {
  return (
    <div className="footer2-component2">
      <div className="informasi-footer1">
        <ul>
          <li><Link to="/">Tentang Kami</Link></li>
          <li><a href="https://luarsekolah.com/article">Blog</a></li>
          <li><a href="https://luarsekolah.com/promo">Promo</a></li>
          <li><a href="https://luarsekolah.com/bantuan">Bantuan</a></li>
          <li><a href="https://luarsekolah.com/komunitas">Komunitas</a></li>
          <li><Link to="/success-stories">Success Alumni</Link></li>
        </ul>
      </div>
      <div className="informasi-footer2">
        <ul>
          <li><a href="https://magang.luarsekolah.com/">Luarsekolah</a></li>
          <li><a href="https://magang.luarsekolah.com/">Magang +</a></li>
        </ul>
      </div>
      <div className="informasi-footer3">
        <ul>
          <li><a href="#">Ajukan Penawaran</a></li>
          <li><a href="https://luarsekolah.com/pages#terms-of-use">Syarat & Ketentuan</a></li>
          <li><a href="https://luarsekolah.com/pages#privacy-policy">Kebijakan Privasi</a></li>
        </ul>
      </div>
    </div>
  );
};

const FooterAppDownload = () => {
  return (
    <div className="footer2-component3">
      <p><b>Aplikasi Luarsekolah Juga ada di</b></p>
      <div className="google-play">
        <img src="/assets/images/icons/Vector.png" alt="" />
        <a
          href="https://play.google.com/store/apps/details?id=com.luarsekolah.mobile"
          className="btn-google-play"
        >
          <img
            src="/assets/images/icons/google-play-badge 1.png"
            alt="Google Play"
          />
        </a>
      </div>
    </div>
  );
};

const FooterBottom = () => {
  return (
    <>
      <div className="footer3">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Kantor kami Ada Di</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <u>
                Centenial Tower Level 29, Jl. Jend Gatot Subroto No.27, Karet
                Semanggi, Setiabudi, Daerah Khusus Ibukota Jakarta 12950
              </u>
            </p>
          </div>
          <div className="footer-section">
            <h3>Jika kamu punya pertanyaan/Keluhan bisa hubungi melalui</h3>
            <p>
              <i className="fab fa-whatsapp"></i>
              <a href="https://wa.me/08112021444">0811 2021 444</a>
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@luarsekolah.com">info@luarsekolah.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer4">
        <div className="footer-bottom">
          <p>
            <b>Copyright ©2022. PT Teknologi Edukasi Indonesia. All Rights Reserved</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer; 