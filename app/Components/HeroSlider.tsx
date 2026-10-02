"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

/* ================================================
   HERO SLIDER - Carousel gambar fullscreen 
   dengan overlay text & navigasi dot/arrow
   ================================================ */

// Data slide hero carousel
const heroSlides = [
  {
    image: "/images/slider.png",
    label: "Kecamatan Pontianak Utara",
    title: "Menjelajah Serpihan Surga di Garis Ekuator",
    desc: "Temukan kekayaan warisan budaya, situs bersejarah dunia, dan keramahan masyarakat tepi Sungai Kapuas yang melegenda.",
  },
  {
    image: "/images/dest-tugu-khatulistiwa.png",
    label: "Tugu Khatulistiwa",
    title: "Ikon Dunia di Titik Nol Derajat Bumi",
    desc: "Berdiri megah sebagai penanda garis khatulistiwa, tugu ini menjadi simbol kebanggaan Pontianak dan warisan sejarah dunia.",
  },
  {
    image: "/images/dest-kampung-tenun.png",
    label: "Kampung Wisata Tenun",
    title: "Kearifan Lokal dalam Setiap Helai Benang",
    desc: "Kampung Tenun (Kanun) menjaga kearifan lokal melalui motif tenun insang khas Melayu yang telah diwariskan turun-temurun.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-slide setiap 6 detik
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
    <section className="hero-section" id="hero">
      {/* Slide gambar */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className="hero-slide"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
          <div className="hero-overlay" />
        </div>
      ))}

      {/* Teks overlay di atas slide aktif */}
      <div className="hero-content animate-in" key={current}>
        <p className="hero-label">{heroSlides[current].label}</p>
        <h1 className="hero-title">{heroSlides[current].title}</h1>
        <p className="hero-desc">{heroSlides[current].desc}</p>
      </div>

      {/* Tombol panah kiri/kanan */}
      <div className="hero-arrows">
        <button className="hero-arrow" onClick={prev} aria-label="Slide sebelumnya">
          ←
        </button>
        <button className="hero-arrow" onClick={next} aria-label="Slide berikutnya">
          →
        </button>
      </div>

      {/* Dot indikator slide */}
      <div className="hero-dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
