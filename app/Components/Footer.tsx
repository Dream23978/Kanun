/* ================================================
   FOOTER - Branding, navigasi, sosial media,
   dan copyright di bagian paling bawah
   ================================================ */

export default function Footer() {
  return (
    <footer className="bg-surface-deep text-white pt-[60px] px-6 md:px-[60px] pb-0" id="footer">
      {/* Grid utama footer: brand + 2 kolom navigasi */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-[60px] pb-10 border-b border-white/[0.12]">
        {/* Kolom brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center font-sans font-bold text-sm text-txt-primary">
              K
            </div>
            <span className="font-serif text-lg font-normal text-white">Kanun 5.0</span>
            <span className="text-[#FFF9E8] mx-2">|</span>
            <img
              src="/images/Logo pertamina.png"
              alt="Logo Pertamina"
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="body-s text-white/65 max-w-[340px]">
            Platform panduan wisata terpercaya, merangkum keindahan alam, budaya,
            kuliner, dan kerajinan khas di Kecamatan Pontianak Utara, Kalimantan
            Barat.
          </p>
        </div>

        {/* Kolom navigasi */}
        <div className="flex flex-col">
          <h5 className="font-sans text-xs font-bold tracking-[1.5px] uppercase text-brand-gold mb-4">Navigasi</h5>
          <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
            <li><a href="/" className="body-s text-white/70 no-underline transition-colors duration-200 hover:text-brand-gold">Beranda</a></li>
            <li><a href="/destinasi" className="body-s text-white/70 no-underline transition-colors duration-200 hover:text-brand-gold">Destinasi</a></li>
            <li><a href="/oleh-oleh" className="body-s text-white/70 no-underline transition-colors duration-200 hover:text-brand-gold">Oleh-oleh</a></li>
          </ul>
        </div>

        {/* Kolom panduan */}
        <div className="flex flex-col">
          <h5 className="font-sans text-xs font-bold tracking-[1.5px] uppercase text-brand-gold mb-4">Panduan</h5>
          <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
            <li><a href="/rute" className="body-s text-white/70 no-underline transition-colors duration-200 hover:text-brand-gold">Rute Satu Hari</a></li>
            <li><a href="/tips" className="body-s text-white/70 no-underline transition-colors duration-200 hover:text-brand-gold">Tips Perjalanan</a></li>
            <li><a href="/kontak" className="body-s text-white/70 no-underline transition-colors duration-200 hover:text-brand-gold">Kontak Penting</a></li>
          </ul>
        </div>
      </div>

      {/* Baris bawah: copyright, sosmed, lokasi */}
      <div className="flex items-center justify-between py-6">
        <p className="font-sans text-xs text-white/50">
          © 2026 Kanun 5.0 Pontianak Utara. Hak Cipta Dilindungi.
        </p>

        {/* Ikon sosial media */}
        <div className="flex gap-3">
          <a href="#" className="w-9 h-9 rounded-full bg-brand-gold flex items-center justify-center font-sans text-xs font-bold text-txt-primary no-underline transition-all duration-250 hover:bg-brand-gold-dark hover:scale-110" aria-label="Instagram">ig</a>
          <a href="#" className="w-9 h-9 rounded-full bg-brand-gold flex items-center justify-center font-sans text-xs font-bold text-txt-primary no-underline transition-all duration-250 hover:bg-brand-gold-dark hover:scale-110" aria-label="Facebook">fb</a>
          <a href="#" className="w-9 h-9 rounded-full bg-brand-gold flex items-center justify-center font-sans text-xs font-bold text-txt-primary no-underline transition-all duration-250 hover:bg-brand-gold-dark hover:scale-110" aria-label="YouTube">yt</a>
        </div>

        <p className="font-sans text-xs text-white/50 italic">
          Pesona Khatulistiwa, Kalimantan Barat
        </p>
      </div>
    </footer>
  );
}
