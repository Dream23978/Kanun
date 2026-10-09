"use client";

import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION 3: ATRAKSI WISATA BUKIT REL - Responsive
   ================================================ */

export default function BukitRelAtraksiSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-15 bg-brand-gold bg-[url('/images/Background.png')] bg-repeat bg-center diamond-pattern" id="atraksi">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        {/* Header Section */}
        <ScrollAnimate direction="up">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-normal leading-tight text-brand-forest mb-2">
              Atraksi Wisata Bukit Rel
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base font-bold text-txt-primary leading-relaxed">
              Dari cahaya pagi hingga sore yang tenang, temukan pengalaman yang sesuai dengan ritmemu.
            </p>
          </div>
        </ScrollAnimate>

        {/* 3 White Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 01: Panorama & Fotografi */}
          <ScrollAnimate direction="up" delay={0.1}>
            <div className="bg-surface rounded-20 p-5 sm:p-6 border border-border-default shadow-card h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div>
                {/* Icon */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-badge-mint text-badge-mint-txt flex items-center justify-center text-sm shadow-sm mb-3 sm:mb-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 22V12h6v10" />
                  </svg>
                </div>
                {/* Tag */}
                <span className="inline-block bg-subtle text-txt-secondary text-[10px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
                  PANORAMA &amp; FOTOGRAFI
                </span>
                <h3 className="font-sans text-base sm:text-lg font-bold text-txt-primary mb-2 leading-snug">
                  Menikmati sudut pandang baru
                </h3>
                <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                  Panorama alam terbuka dan spot foto dari ketinggian. Rasakan suasana sunrise atau sunset dengan lanskap kota sebagai latar.
                </p>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card 02: Camping & Area Hijau */}
          <ScrollAnimate direction="up" delay={0.15}>
            <div className="bg-surface rounded-20 p-5 sm:p-6 border border-border-default shadow-card h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <div>
                {/* Icon */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-badge-mint text-badge-mint-txt flex items-center justify-center text-sm shadow-sm mb-3 sm:mb-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3L2 20h20L12 3z" />
                  </svg>
                </div>
                {/* Tag */}
                <span className="inline-block bg-subtle text-txt-secondary text-[10px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
                  CAMPING &amp; AREA HIJAU
                </span>
                <h3 className="font-sans text-base sm:text-lg font-bold text-txt-primary mb-2 leading-snug">
                  Berhenti sejenak di alam
                </h3>
                <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                  Bersantai di area hijau atau mendirikan tenda untuk camping. Pilih ritme kunjungan yang santai dan jaga kebersihan bersama.
                </p>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card 03: Light Hiking */}
          <ScrollAnimate direction="up" delay={0.2}>
            <div className="bg-surface rounded-20 p-5 sm:p-6 border border-border-default shadow-card h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:col-span-2 lg:col-span-1">
              <div>
                {/* Icon */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-badge-mint text-badge-mint-txt flex items-center justify-center text-sm shadow-sm mb-3 sm:mb-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                {/* Tag */}
                <span className="inline-block bg-subtle text-txt-secondary text-[10px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
                  LIGHT HIKING
                </span>
                <h3 className="font-sans text-base sm:text-lg font-bold text-txt-primary mb-2 leading-snug">
                  Menjelajah dengan langkah ringan
                </h3>
                <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                  Penjelajahan ringan di jalur bukit untuk menikmati suasana alam. Sesuaikan langkah dengan kondisi jalur dan kemampuan diri.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
