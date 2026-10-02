/* ================================================
   NAVBAR - Navigasi utama fixed di atas
   ================================================ */

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 md:px-[60px] py-3 md:py-4 bg-canvas/92 backdrop-blur-md border-b border-brand-forest/15 transition-colors duration-300" id="navbar">
      {/* Logo Kanun */}
      <a href="/" className="flex items-center gap-3 no-underline">
        <div className="w-9 h-9 bg-brand-forest rounded-lg flex items-center justify-center font-sans font-bold text-base text-txt-inverse">
          K
        </div>
        <div className="flex flex-col leading-[1.2]">
          <span className="font-serif text-lg font-normal text-brand-forest">Kanun 5.0</span>
          <span className="font-sans text-[10px] text-txt-secondary tracking-[1.5px] uppercase font-semibold">Pontianak Utara</span>
        </div>
      </a>

      {/* Link navigasi utama */}
      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        <li>
          <a href="/" className="font-sans text-brand-forest no-underline text-sm font-medium transition-colors duration-250 relative pb-1 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-brand-forest after:rounded-sm">
            Beranda
          </a>
        </li>
        <li>
          <a href="/destinasi" className="font-sans text-txt-primary hover:text-brand-forest no-underline text-sm font-medium transition-colors duration-250 relative pb-1">
            Destinasi
          </a>
        </li>
        <li>
          <a href="/panduan" className="font-sans text-txt-primary hover:text-brand-forest no-underline text-sm font-medium transition-colors duration-250 relative pb-1">
            Panduan
          </a>
        </li>
        <li>
          <a href="/artikel" className="font-sans text-txt-primary hover:text-brand-forest no-underline text-sm font-medium transition-colors duration-250 relative pb-1">
            Artikel
          </a>
        </li>
      </ul>
    </nav>
  );
}
