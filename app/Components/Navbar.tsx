/* ================================================
   NAVBAR - Navigasi utama fixed di atas
   ================================================ */

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      {/* Logo Kanun */}
      <a href="/" className="navbar-logo">
        <div className="navbar-logo-icon">K</div>
        <div className="navbar-logo-text">
          <span className="navbar-logo-title">Kanun 5.0</span>
          <span className="navbar-logo-subtitle">Pontianak Utara</span>
        </div>
      </a>

      {/* Link navigasi utama */}
      <ul className="navbar-links">
        <li>
          <a href="/" className="active">Beranda</a>
        </li>
        <li>
          <a href="/destinasi">Destinasi</a>
        </li>
        <li>
          <a href="/panduan">Panduan</a>
        </li>
        <li>
          <a href="/artikel">Artikel</a>
        </li>
      </ul>
    </nav>
  );
}
