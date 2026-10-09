"use client";

import Image from "next/image";

/* ================================================
   SECTION 1: HERO (Bukit Rel Wisata Edukasi) - Responsive
   ================================================ */

export default function BukitRelHeroSection() {
  return (
    <section className="relative w-full h-[80vh] sm:h-[85vh] md:h-screen min-h-[500px] sm:min-h-[600px] flex flex-col justify-end overflow-hidden" id="bukit-hero">
      {/* Background image */}
      <Image
        src="/images/bukit-rel-hero.png"
        alt="Bukit Rel Pontianak Utara"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Overlay gradient — heavy dark at bottom, fading up */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

      {/* Hero Content & Info Bar */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pb-6 sm:pb-8 flex flex-col items-center text-center">
        <div className="mb-6 sm:mb-10">
          <p className="label-m tracking-[0.2em] text-brand-gold mb-2 sm:mb-3 text-[10px] sm:text-xs font-bold uppercase">
            WISATA EDUKASI DI GARIS NOL
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-white">
            Bukit Rel
          </h1>
        </div>

        {/* Info bar — responsive cards */}
        <div className="w-full border-t border-white/20 pt-4 sm:pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20 text-white/90">
            {/* Lokasi */}
            <div className="flex flex-col items-center text-center py-3 sm:py-4 px-3 sm:px-6">
              <span className="label-m tracking-[0.18em] text-brand-gold mb-1 text-[10px] sm:text-[11px] font-bold">LOKASI</span>
              <span className="font-serif text-base sm:text-lg md:text-xl text-white font-normal leading-snug">Jl. Panca Bhakti</span>
              <span className="font-sans text-[11px] sm:text-xs text-white/60 mt-0.5">Kelurahan Batu Layang, Pontianak Utara</span>
            </div>
            {/* Jadwal Buka */}
            <div className="flex flex-col items-center text-center py-3 sm:py-4 px-3 sm:px-6">
              <span className="label-m tracking-[0.18em] text-brand-gold mb-1 text-[10px] sm:text-[11px] font-bold">JADWAL BUKA</span>
              <span className="font-serif text-base sm:text-lg md:text-xl text-white font-normal leading-snug">Rp.10.000 - Rp 15.000</span>
              <span className="font-sans text-[11px] sm:text-xs text-white/60 mt-0.5">Buka Setiap Hari 24 Jam</span>
            </div>
            {/* Aksesibilitas */}
            <div className="flex flex-col items-center text-center py-3 sm:py-4 px-3 sm:px-6">
              <span className="label-m tracking-[0.18em] text-brand-gold mb-1 text-[10px] sm:text-[11px] font-bold">AKSESIBILITAS</span>
              <span className="font-serif text-base sm:text-lg md:text-xl text-white font-normal leading-snug">12-15 km dari Pusat</span>
              <span className="font-sans text-[11px] sm:text-xs text-white/60 mt-0.5">Sekitar 25-40 Menit berkendara</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
