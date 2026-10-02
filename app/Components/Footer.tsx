/* ================================================
   FOOTER - Branding, navigasi, sosial media,
   dan copyright di bagian paling bawah
   ================================================ */

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      {/* Grid utama footer: brand + 2 kolom navigasi */}
      <div className="footer-main">
        {/* Kolom brand */}
        <div className="footer-brand">
          <div className="footer-brand-logo">
            <div className="footer-brand-icon">K</div>
            <span className="footer-brand-name">Kanun 5.0</span>
            <span style={{ color: "#FFF9E8", margin: "0 8px" }}>|</span>
            <img
              src="/images/Logo pertamina.png"
              alt="Logo Pertamina"
              style={{ height: "64px", width: "auto", objectFit: "contain" }}
            />
          </div>
          <p>
            Platform panduan wisata terpercaya, merangkum keindahan alam, budaya,
            kuliner, dan kerajinan khas di Kecamatan Pontianak Utara, Kalimantan
            Barat.
          </p>
        </div>

        {/* Kolom navigasi */}
        <div className="footer-nav">
          <h5>Navigasi</h5>
          <ul>
            <li><a href="/">Beranda</a></li>
            <li><a href="/destinasi">Destinasi</a></li>
            <li><a href="/oleh-oleh">Oleh-oleh</a></li>
          </ul>
        </div>

        {/* Kolom panduan */}
        <div className="footer-nav">
          <h5>Panduan</h5>
          <ul>
            <li><a href="/rute">Rute Satu Hari</a></li>
            <li><a href="/tips">Tips Perjalanan</a></li>
            <li><a href="/kontak">Kontak Penting</a></li>
          </ul>
        </div>
      </div>

      {/* Baris bawah: copyright, sosmed, lokasi */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 Kanun 5.0 Pontianak Utara. Hak Cipta Dilindungi.
        </p>

        {/* Ikon sosial media */}
        <div className="footer-socials">
          <a href="#" className="footer-social-icon" aria-label="Instagram">ig</a>
          <a href="#" className="footer-social-icon" aria-label="Facebook">fb</a>
          <a href="#" className="footer-social-icon" aria-label="YouTube">yt</a>
        </div>

        <p className="footer-location">
          Pesona Khatulistiwa, Kalimantan Barat
        </p>
      </div>
    </footer>
  );
}
