"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

/* ================================================
   HERO SLIDER - Responsive Fullscreen Carousel
   ================================================ */

const heroSlides = [
  {
    image: "/images/utara.jpeg",
    label: "Kecamatan Pontianak Utara",
    title: "Menjelajah Serpihan Surga di Garis Ekuator",
    desc: "Temukan kekayaan warisan budaya, situs bersejarah dunia, dan keramahan masyarakat tepi Sungai Kapuas yang melegenda.",
  },
  {
    image: "/images/slider.png",
    label: "Tugu Khatulistiwa",
    title: "Ikon Dunia di Titik Nol Derajat Bumi",
    desc: "Berdiri megah sebagai penanda garis khatulistiwa, tugu ini menjadi simbol kebanggaan Pontianak dan warisan sejarah dunia.",
  },
  {
    image: "/images/Kampung Tenun.png",
    label: "Kampung Wisata Tenun",
    title: "Kearifan Lokal dalam Setiap Helai Benang",
    desc: "Kampung Tenun (Kanun) menjaga kearifan lokal melalui motif tenun insang khas Melayu yang telah diwariskan turun-temurun.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = useCallback((index: number) => setCurrent(index), []);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length),
    []
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % heroSlides.length),
    []
  );

  return (
    <section className="relative w-full h-[80vh] sm:h-[85vh] md:h-screen min-h-[480px] sm:min-h-[550px] md:min-h-160 overflow-hidden" id="hero">
      {/* Slide gambar */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-800 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            className="w-full h-full object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-inverse/90 via-surface-inverse/50 to-black/20" />
        </div>
      ))}

      {/* Teks overlay di atas slide aktif */}
      <div className="absolute bottom-10 sm:bottom-15 md:bottom-20 left-4 sm:left-6 md:left-15 right-4 sm:right-6 md:right-15 z-10 text-white animate-in" key={current}>
        <p className="label-m text-xs sm:text-sm tracking-widest text-brand-gold mb-2 sm:mb-3">{heroSlides[current].label}</p>
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-snug sm:leading-tight md:leading-14 mb-2 sm:mb-4 max-w-2xl text-white">{heroSlides[current].title}</h1>
        <p className="font-sans text-xs sm:text-sm md:text-base leading-relaxed max-w-lg text-white/90">{heroSlides[current].desc}</p>
      </div>

      {/* Tombol panah kiri/kanan */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-3 sm:px-6 -translate-y-1/2 z-10 pointer-events-none">
        <button
          className="w-9 h-9 sm:w-12 sm:h-12 bg-white/15 backdrop-blur-md border border-white/25 rounded-full flex items-center justify-center text-white text-base sm:text-xl cursor-pointer transition-all duration-250 pointer-events-auto hover:bg-brand-gold hover:border-brand-gold hover:text-txt-primary"
          onClick={prev}
          aria-label="Slide sebelumnya"
        >
          ←
        </button>
        <button
          className="w-9 h-9 sm:w-12 sm:h-12 bg-white/15 backdrop-blur-md border border-white/25 rounded-full flex items-center justify-center text-white text-base sm:text-xl cursor-pointer transition-all duration-250 pointer-events-auto hover:bg-brand-gold hover:border-brand-gold hover:text-txt-primary"
          onClick={next}
          aria-label="Slide berikutnya"
        >
          →
        </button>
      </div>

      {/* Dot indikator slide */}
      <div className="absolute bottom-4 sm:bottom-7.5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`h-2 sm:h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 ${
              i === current ? "bg-brand-gold scale-120 sm:scale-130 w-5 sm:w-6 rounded-xl" : "bg-white/40 w-2 sm:w-2.5"
            }`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
