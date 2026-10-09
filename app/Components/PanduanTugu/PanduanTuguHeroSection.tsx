"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   PANDUAN TUGU KHATULISTIWA - HERO & BANNER SECTION
   ================================================ */

export default function PanduanTuguHeroSection() {
  return (
    <section className="relative w-full pt-28 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-15 batik-pattern overflow-hidden" id="panduan-hero">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Header Title & Description */}
        <ScrollAnimate direction="up" delay={0.1}>
          <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.15em] text-brand-gold uppercase mb-2 sm:mb-3 block">
            PANDUAN PERJALANAN WISATA
          </span>
          
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white mb-4 sm:mb-6 leading-tight">
            Ayo Menjelajah Pontianak Utara!
          </h1>
          
          <p className="font-sans text-sm sm:text-base md:text-lg text-white/90 max-w-4xl leading-relaxed mb-8 sm:mb-12 font-light">
            Eksplorasi ragam pesona Pontianak Utara sesuai ritme perjalanan Anda. Halaman ini merangkum panduan lapangan esensial untuk singgah di Tugu Khatulistiwa, Makam Batu Layang, rumah perajin Kampung Tenun, dan rute daki Bukit Rel.
          </p>
        </ScrollAnimate>

        {/* Big Hero Feature Image Card */}
        <ScrollAnimate direction="up" delay={0.25} className="w-full">
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] border border-white/15 group">
            <Image
              src="/images/utara.jpeg"
              alt="Tugu Khatulistiwa Pontianak"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-8 md:p-12">
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-white mb-2 sm:mb-3 leading-tight">
                Tugu Khatulistiwa
              </h2>
              <p className="font-serif italic text-xs sm:text-base md:text-lg text-white/90 max-w-3xl leading-relaxed font-light">
                &ldquo;Berdiri tepat di garis lintang 0&deg; 0&apos; 0&quot;, menyajikan tugu kayu belian orisinal tahun 1928 di dalam kubah serta pelataran pembelah bumi utara-selatan&rdquo;
              </p>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
