"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION 1: HERO (Tugu Khatulistiwa) - Fully Responsive
   ================================================ */

export default function TuguHeroSection() {
  return (
    <section className="relative w-full h-[80vh] sm:h-[85vh] min-h-[500px] sm:min-h-[600px] flex flex-col justify-end overflow-hidden" id="tugu-hero">
      {/* Background image */}
      <Image
        src="/images/CardImage.png"
        alt="Tugu Khatulistiwa di Pontianak"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Overlay gradient — heavy dark forest green at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#123524] via-[#123524]/60 to-black/20" />

      {/* Hero Content & Metadata Bar */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pb-8 sm:pb-12 flex flex-col items-center text-center">
        <ScrollAnimate direction="up" delay={0.1}>
          <span className="font-sans text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.15em] text-brand-gold uppercase mb-2 sm:mb-3 block">
            WISATA EDUKASI DI GARIS NOL
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 sm:mb-10 leading-tight">
            Tugu Khatulistiwa
          </h1>
        </ScrollAnimate>

        {/* Metadata info cards bar */}
        <ScrollAnimate direction="up" delay={0.25} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-white/15 text-white/90">
            {/* Lokasi */}
            <div className="flex flex-col items-center text-center px-2 sm:px-4 pb-3 sm:pb-0 border-b sm:border-b-0 border-white/15 sm:border-r sm:border-white/15">
              <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-widest text-brand-gold uppercase mb-0.5 sm:mb-1">
                LOKASI
              </span>
              <p className="font-sans text-xs sm:text-sm md:text-base font-bold text-white">
                Jl. Khatulistiwa, Batu Layang
              </p>
              <p className="font-sans text-[11px] sm:text-xs text-white/70">
                Kelurahan Batu Layang, Pontianak Utara
              </p>
            </div>

            {/* Tiket Masuk */}
            <div className="flex flex-col items-center text-center px-2 sm:px-4 pb-3 sm:pb-0 border-b sm:border-b-0 border-white/15 sm:border-r sm:border-white/15">
              <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-widest text-brand-gold uppercase mb-0.5 sm:mb-1">
                TIKET MASUK
              </span>
              <p className="font-sans text-xs sm:text-sm md:text-base font-bold text-white">
                Gratis / Umum
              </p>
              <p className="font-sans text-[11px] sm:text-xs text-white/70">
                Buka Setiap Hari 08.00 - 17.00
              </p>
            </div>

            {/* Aksesbilitas */}
            <div className="flex flex-col items-center text-center px-2 sm:px-4">
              <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-widest text-brand-gold uppercase mb-0.5 sm:mb-1">
                AKSESBILITAS
              </span>
              <p className="font-sans text-xs sm:text-sm md:text-base font-bold text-white">
                ~3 KM dari Pusat
              </p>
              <p className="font-sans text-[11px] sm:text-xs text-white/70">
                Sekitar 20-30 Menit berkendara
              </p>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
