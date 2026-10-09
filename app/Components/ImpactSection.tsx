"use client";

import Image from "next/image";
import ScrollAnimate from "./ScrollAnimate";

/* ================================================
   IMPACT SECTION - Info program CSR Pertamina (Responsive)
   ================================================ */

export default function ImpactSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-15 batik-pattern" id="impact">
      {/* Judul section */}
      <ScrollAnimate direction="right">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-snug sm:leading-tight mb-6 sm:mb-10 text-brand-gold">
          Pertamina <em className="italic text-brand-gold-deeper">Impact:</em>
          <br className="hidden sm:block" />
          {" "}Pemberdayaan Masyarakat &amp; Pengembangan Wisata
        </h2>
      </ScrollAnimate>

      {/* Kartu impact utama */}
      <ScrollAnimate direction="up" delay={0.2}>
        <div className="bg-brand-gold border border-border-default rounded-2xl sm:rounded-3xl shadow-card p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 sm:gap-8 items-center">
          {/* Logo Pertamina */}
          <div className="w-32 sm:w-40 shrink-0 mx-auto lg:mx-0">
            <img
              src="/images/Logo pertamina.png"
              alt="Logo Pertamina"
              className="w-full h-auto object-contain max-h-16"
            />
          </div>

          {/* Konten teks */}
          <div className="flex flex-col text-center lg:text-left">
            <h3 className="font-serif text-lg sm:text-xl leading-relaxed font-normal text-brand-forest mb-2 sm:mb-3 max-w-lg mx-auto lg:mx-0">
              Membangun ekosistem pariwisata berkelanjutan bersama masyarakat
              Pontianak Utara.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-brand-forest max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Melalui program CSR Pertamina, Kanun 5.0 memperkuat kapasitas
              pengrajin tenun, meningkatkan kualitas destinasi ikonik, dan
              mengembangkan rute perjalanan yang lebih inklusif bagi wisatawan dan
              komunitas lokal.
            </p>
          </div>

          {/* Gambar kegiatan CSR */}
          <div className="w-full max-w-xs lg:w-55 mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/Pertamina.png"
              alt="Program CSR Pertamina"
              width={220}
              height={165}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </ScrollAnimate>
    </section>
  );
}
