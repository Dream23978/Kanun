"use client";

import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION 4: INFORMASI FASILITAS (Bukit Rel) - Responsive
   ================================================ */

export default function BukitRelFasilitasSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-15 bg-brand-forest bg-[url('/images/Background.png')] bg-repeat bg-center batik-pattern" id="fasilitas">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        {/* Header Section */}
        <ScrollAnimate direction="up">
          <div className="max-w-2xl mb-6 sm:mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-normal leading-tight text-white mb-2">
              Informasi Fasilitas
            </h2>
            <p className="font-sans text-xs sm:text-sm font-bold text-white/90 leading-relaxed">
              Bukit Rel adalah ruang alam yang tumbuh dari swadaya warga, bukan kawasan dengan fasilitas resort.
            </p>
          </div>
        </ScrollAnimate>

        {/* Grid 2 Columns: Left 2x2 White Cards, Right Dark Green Homestay Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {/* Left Column (2 cols): 2x2 White Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Parkir */}
            <ScrollAnimate direction="up" delay={0.1}>
              <div className="bg-surface rounded-20 p-5 sm:p-6 border border-border-default shadow-card h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
                <div>
                  <span className="inline-block bg-subtle text-txt-secondary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    PARKIR
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-bold text-txt-primary mb-1.5 leading-snug">
                    Area parkir sederhana
                  </h3>
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    Untuk kendaraan roda dua dan roda empat.
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Card 2: Gardu Pandang */}
            <ScrollAnimate direction="up" delay={0.15}>
              <div className="bg-surface rounded-20 p-5 sm:p-6 border border-border-default shadow-card h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
                <div>
                  <span className="inline-block bg-subtle text-txt-secondary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    GARDU PANDANG
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-bold text-txt-primary mb-1.5 leading-snug">
                    Observasi lanskap terbuka
                  </h3>
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    Spot gardu pandang atau panggung untuk menikmati panorama.
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Card 3: Warung Warga */}
            <ScrollAnimate direction="up" delay={0.2}>
              <div className="bg-surface rounded-20 p-5 sm:p-6 border border-border-default shadow-card h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
                <div>
                  <span className="inline-block bg-subtle text-txt-secondary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    WARUNG WARGA
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-bold text-txt-primary mb-1.5 leading-snug">
                    Singgah di kedai lokal
                  </h3>
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    Warung atau kedai kopi lokal milik warga sekitar.
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Card 4: Toilet & Istirahat */}
            <ScrollAnimate direction="up" delay={0.25}>
              <div className="bg-surface rounded-20 p-5 sm:p-6 border border-border-default shadow-card h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
                <div>
                  <span className="inline-block bg-subtle text-txt-secondary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    TOILET &amp; ISTIRAHAT
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-bold text-txt-primary mb-1.5 leading-snug">
                    Fasilitas dasar swadaya
                  </h3>
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    Toilet umum darurat dan area istirahat yang dikelola secara swadaya.
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Right Column (1 col): Dark Green Homestay Card */}
          <ScrollAnimate direction="right" delay={0.2} className="lg:col-span-1">
            <div className="bg-brand-forest-dark text-white rounded-24 p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full shadow-card border border-white/10">
              <div>
                {/* Top Icon */}
                <div className="p-2 text-brand-gold-dark bg-surface-forest-dark rounded-xl w-fit mb-3 sm:mb-4 border border-white/5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>

                {/* Tag */}
                <span className="inline-block bg-surface-forest-dark text-brand-gold-dark text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 sm:mb-4 border border-white/5">
                  HOMESTAY &amp; PENGINAPAN
                </span>

                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-white mb-3 sm:mb-4 leading-snug">
                  Belum Ada Akomodasi Komersial Resmi
                </h3>
                <p className="font-sans text-xs sm:text-sm text-txt-forest-muted leading-relaxed mb-4 sm:mb-6">
                  Belum tersedia homestay atau akomodasi komersial resmi di sekitar bukit. Pengunjung umumnya datang untuk day trip atau mendirikan tenda untuk berkemah.
                </p>
              </div>

              {/* Bottom Footer Info Box */}
              <div className="border-t border-border-forest-dark pt-4 mt-auto">
                <h4 className="font-sans text-xs font-bold text-white mb-1">
                  Perlu tempat menginap?
                </h4>
                <p className="font-sans text-xs text-txt-forest-muted">
                  Pilihan penginapan utama berada di pusat Kota Pontianak.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
