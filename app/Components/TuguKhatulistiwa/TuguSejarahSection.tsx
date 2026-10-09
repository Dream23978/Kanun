"use client";

import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION 2: SEJARAH & LATAR BELAKANG (Fully Responsive)
   ================================================ */

export default function TuguSejarahSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-15 bg-brand-gold bg-[url('/images/Background.png')] bg-repeat bg-center diamond-pattern" id="sejarah">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          <ScrollAnimate direction="up">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-brand-forest">
              Sejarah & Latar Belakang
            </h2>
          </ScrollAnimate>
          <ScrollAnimate direction="right" delay={0.15}>
            <p className="font-serif italic text-sm sm:text-base md:text-lg text-brand-forest/90 font-bold leading-relaxed max-w-xl">
              Tugu lahir sebagai penanda ilmiah, lalu berkembang menjadi warisan arsitektur dan ruang belajar publik di garis khatulistiwa.
            </p>
          </ScrollAnimate>
        </div>

        {/* 2 Feature Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Left: White Card */}
          <ScrollAnimate direction="up" delay={0.1}>
            <div className="bg-surface rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-border-default shadow-card h-full flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover">
              <div>
                <span className="font-sans text-[11px] sm:text-xs font-bold tracking-wider text-brand-terracotta uppercase mb-2 sm:mb-3 block">
                  AWAL BERDIRI & EKSPEDISI
                </span>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-txt-primary mb-3 sm:mb-4 leading-snug">
                  Mencari titik ekuator di Pontianak
                </h3>
                <p className="font-sans text-xs sm:text-sm md:text-base text-txt-secondary leading-relaxed">
                  Pada 31 Maret 1928, sebuah ekspedisi internasional yang dipimpin ahli geografi berkebangsaan Belanda datang untuk menentukan titik atau tonggak garis khatulistiwa. Peristiwa ini menjadi awal berdirinya Tugu Khatulistiwa.
                </p>
              </div>
            </div>
          </ScrollAnimate>

          {/* Right: Dark Green Card (#123524) */}
          <ScrollAnimate direction="up" delay={0.2}>
            <div className="bg-[#123524] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-border-forest-dark shadow-card h-full flex flex-col justify-between text-white transition-all duration-300 hover:shadow-card-hover">
              <div>
                <span className="font-sans text-[11px] sm:text-xs font-bold tracking-wider text-brand-gold uppercase mb-2 sm:mb-3 block">
                  CATATAN ARSIP
                </span>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-white mb-3 sm:mb-4 leading-snug">
                  Jejak Wiese dan F. Silaban
                </h3>
                <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                  Catatan yang diperoleh pada 1941 dari van en W oleh Opzichter Wiese —dikutip dari Bijdragen tot de Geographie—menyebut penetapan titik ekuator oleh ekspedisi. Pada 1938, arsitek Indonesia F. Silaban (Frederich Silaban) mengembangkan bentuk dan makna tugu.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
