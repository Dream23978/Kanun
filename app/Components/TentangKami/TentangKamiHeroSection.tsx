"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   TENTANG KAMI - HERO SECTION
   ================================================ */

export default function TentangKamiHeroSection() {
  return (
    <section className="relative w-full h-[52vh] min-h-[380px] sm:min-h-[440px] md:min-h-[480px] overflow-hidden bg-black flex items-center justify-center" id="tentang-hero">
      {/* Background Image Banner */}
      <Image
        src="/images/slider.png"
        alt="Kawasan Wisata Tugu Khatulistiwa Pontianak Utara"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />

      {/* Centered Content with Scroll Animation */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center pt-16 sm:pt-20">
        <ScrollAnimate direction="up" delay={0.1}>
          <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-gold uppercase mb-3 sm:mb-4 block">
            TENTANG KANUN 5.0
          </span>
        </ScrollAnimate>

        <ScrollAnimate direction="up" delay={0.25}>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-[1.18] tracking-tight">
            Membangun Pariwisata &amp; Pemberdayaan<br className="hidden sm:inline" /> Masyarakat Pontianak Utara
          </h1>
        </ScrollAnimate>
      </div>
    </section>
  );
}
