"use client";

import Image from "next/image";

/* ================================================
   SECTION 1: HERO (Bukit Rel Wisata Edukasi)
   ================================================ */

export default function BukitRelHeroSection() {
  return (
    <section className="relative w-full h-screen min-h-160 overflow-hidden" id="bukit-hero">
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
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10" />

      {/* Text overlay — positioned just above the info bar */}
      <div className="absolute bottom-[140px] md:bottom-[160px] left-6 md:left-15 right-6 md:right-15 z-10 text-center">
        <p className="label-m tracking-[0.25em] text-brand-gold mb-3 text-[11px] font-bold uppercase">
          WISATA EDUKASI DI GARIS NOL
        </p>
        <h1 className="font-serif text-4xl md:text-[52px] lg:text-[60px] font-normal leading-[1.15] text-white">
          Bukit Rel
        </h1>
      </div>

      {/* Info bar — flush at bottom, transparent dark bg */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-310 mx-auto px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {/* Lokasi */}
            <div className="flex flex-col items-center text-center py-6 px-8">
              <span className="label-m tracking-[0.18em] text-brand-gold mb-2.5 text-[10px] font-bold">LOKASI</span>
              <span className="font-serif text-lg md:text-xl text-white font-normal leading-snug">Jl. Panca Bhakti</span>
              <span className="body-s text-white/55 mt-1">Kelurahan Batu Layang, Pontianak Utara</span>
            </div>
            {/* Jadwal Buka */}
            <div className="flex flex-col items-center text-center py-6 px-8">
              <span className="label-m tracking-[0.18em] text-brand-gold mb-2.5 text-[10px] font-bold">JADWAL BUKA</span>
              <span className="font-serif text-lg md:text-xl text-white font-normal leading-snug">Rp.10.000 - Rp 15.000</span>
              <span className="body-s text-white/55 mt-1">Buka Setiap Hari 24 Jam</span>
            </div>
            {/* Aksesibilitas */}
            <div className="flex flex-col items-center text-center py-6 px-8">
              <span className="label-m tracking-[0.18em] text-brand-gold mb-2.5 text-[10px] font-bold">AKSESIBILITAS</span>
              <span className="font-serif text-lg md:text-xl text-white font-normal leading-snug">12-15 km dari Pusat</span>
              <span className="body-s text-white/55 mt-1">Sekitar 25-40 Menit berkendara</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
