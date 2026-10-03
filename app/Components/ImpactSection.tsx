"use client";

import Image from "next/image";
import ScrollAnimate from "./ScrollAnimate";

/* ================================================
   IMPACT SECTION - Info program CSR Pertamina
   dengan logo, teks, dan gambar kegiatan
   ================================================ */

export default function ImpactSection() {
  return (
    <section className="py-20 px-6 md:px-15 batik-pattern" id="impact">
      {/* Judul section */}
      <ScrollAnimate direction="right">
        <h2 className="font-serif text-4xl font-normal leading-11 mb-10 text-brand-gold">
          Pertamina <em className="italic text-brand-gold-deeper">Impact:</em>
          <br />
          Pemberdayaan Masyarakat &amp; Pengembangan Wisata
        </h2>
      </ScrollAnimate>

      {/* Kartu impact utama */}
      <ScrollAnimate direction="up" delay={0.2}>
        <div className="bg-brand-gold border border-border-default rounded-3xl shadow-card p-10 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 items-center">
          {/* Logo Pertamina */}
          <div className="w-40 shrink-0">
            <img
              src="/images/Logo pertamina.png"
              alt="Logo Pertamina"
              className="w-80 h-auto object-contain"
            />
          </div>

          {/* Konten teks */}
          <div className="flex flex-col">
            <h3 className="font-serif text-xl leading-7.5 font-normal text-[#18522C] mb-3 max-w-lg">
              Membangun ekosistem pariwisata berkelanjutan bersama masyarakat
              Pontianak Utara.
            </h3>
            <p className="body-m text-[#18522C] max-w-lg">
              Melalui program CSR Pertamina, Kanun 5.0 memperkuat kapasitas
              pengrajin tenun, meningkatkan kualitas destinasi ikonik, dan
              mengembangkan rute perjalanan yang lebih inklusif bagi wisatawan dan
              komunitas lokal.
            </p>
          </div>

          {/* Gambar kegiatan CSR */}
          <div className="w-full md:w-55 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/Pertamina.png"
              alt="Program CSR Pertamina"
              width={200}
              height={150}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </ScrollAnimate>
    </section>
  );
}
