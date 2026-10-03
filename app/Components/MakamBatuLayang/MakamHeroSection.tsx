"use client";

import Image from "next/image";

/* ================================================
   SECTION 1: HERO (Makam Ziarah Batu Layang)
   ================================================ */

export default function MakamHeroSection() {
  return (
    <section className="relative w-full h-screen min-h-160 overflow-hidden" id="makam-hero">
      {/* Background image */}
      <Image
        src="/images/Makam.png"
        alt="Makam Ziarah Batu Layang"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Overlay gradient — heavy black at bottom, fading up */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10" />

      {/* Text overlay — positioned just above the info bar */}
      <div className="absolute bottom-35bottom-[160px] left-6 md:left-15 right-6 md:right-15 z-10 text-center">
        <p className="label-m tracking-[0.25em] text-brand-gold mb-3 text-[11px]">
          MAKAM KESULTANAN PONTIANAK DI BATU LAYANG
        </p>
        <h1 className="font-serif text-3xl md:text-[44px] lg:text-[52px] font-normal leading-[1.15] text-white">
          Makam Ziarah Batu Layang
        </h1>
      </div>

      {/* Info bar — flush at bottom, transparent dark bg */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-310  auto px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {/* Lokasi */}
            <div className="flex flex-col items-center text-center py-6 px-8">
              <span className="label-m tracking-[0.18em] text-brand-gold mb-2.5 text-[10px]">LOKASI</span>
              <span className="font-serif text-lg md:text-xl text-white font-normal leading-snug">Jl. Khatulistiwa</span>
              <span className="body-s text-white/55 mt-1">Kelurahan Batu Layang, Pontianak Utara</span>
            </div>
            {/* Tiket Masuk */}
            <div className="flex flex-col items-center text-center py-6 px-8">
              <span className="label-m tracking-[0.18em] text-brand-gold mb-2.5 text-[10px]">TIKET MASUK</span>
              <span className="font-serif text-lg md:text-xl text-white font-normal leading-snug">Gratis / Umum</span>
              <span className="body-s text-white/55 mt-1">Buka Setiap Hari 08.00-17.00</span>
            </div>
            {/* Aksesibilitas */}
            <div className="flex flex-col items-center text-center py-6 px-8">
              <span className="label-m tracking-[0.18em] text-brand-gold mb-2.5 text-[10px]">AKSESIBILITAS</span>
              <span className="font-serif text-lg md:text-xl text-white font-normal leading-snug">~15 KM dari Pusat</span>
              <span className="body-s text-white/55 mt-1">Sekitar 30 – 45 Menit berkendara</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
