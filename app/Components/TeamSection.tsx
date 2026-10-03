"use client";

import Image from "next/image";
import ScrollAnimate from "./ScrollAnimate";

/* ================================================
   DUKUNGAN & KEMITRAAN STRATEGIS SECTION
   Sponsor utama (Pertamina) dan Mitra Pendukung 
   (ASPPERWI Kalbar & BANSA Foundation)
   ================================================ */

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-15 bg-brand-forest bg-[url('/images/Background.png')] bg-repeat bg-center batik-pattern text-white" id="kemitraan">
      <div className="max-w-310 mx-auto space-y-10">
        {/* Judul Utama Section */}
        <ScrollAnimate direction="up">
          <h2 className="font-serif text-3xl md:text-5xl font-normal leading-tight text-white mb-2">
            Dukungan &amp; Kemitraan Strategis
          </h2>
        </ScrollAnimate>

        {/* Subsection 1: SPONSOR UTAMA */}
        <div className="space-y-3">
          <ScrollAnimate direction="up" delay={0.1}>
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-white/80 block">
              SPONSOR UTAMA
            </span>
          </ScrollAnimate>

          <ScrollAnimate direction="up" delay={0.15}>
            <div className="bg-surface text-txt-primary rounded-24 p-6 md:p-10 shadow-card border border-white/10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
              {/* Logo Pertamina */}
              <div className="w-44 md:w-56 shrink-0 flex items-center justify-center p-2">
                <img
                  src="/images/Logo pertamina.png"
                  alt="PT Pertamina (Persero)"
                  className="w-full h-auto object-contain max-h-24"
                />
              </div>

              {/* Teks Deskripsi */}
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-normal text-brand-forest mb-3 leading-snug">
                  Diberdayakan Oleh PT Pertamina (Persero)
                </h3>
                <p className="font-sans text-xs md:text-sm text-txt-primary leading-relaxed">
                  Melalui program CSR Pertamina, Kanun 5.0 memperkuat kapasitas pengrajin tenun, meningkatkan kualitas destinasi ikonik, dan mengembangkan rute perjalanan yang lebih inklusif bagi wisatawan dan komunitas lokal.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>

        {/* Subsection 2: MITRA & ORGANISASI PENDUKUNG */}
        <div className="space-y-3 pt-4">
          <ScrollAnimate direction="up" delay={0.2}>
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-white/80 block">
              MITRA &amp; ORGANISASI PENDUKUNG
            </span>
          </ScrollAnimate>

          {/* Grid 2 Kolom Mitra */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Card 1: ASPPERWI Kalbar */}
            <ScrollAnimate direction="up" delay={0.25}>
              <div className="bg-surface text-txt-primary rounded-24 p-6 md:p-8 shadow-card border border-white/10 flex flex-col justify-between h-full">
                <div>
                  {/* Header: Logo + Nama */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 md:w-24 shrink-0">
                      <img
                        src="/images/aspperwi.png"
                        alt="ASPPERWI Kalbar"
                        className="w-full h-auto object-contain max-h-16"
                      />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-normal text-brand-forest leading-tight">
                      ASPPERWI Kalbar
                    </h3>
                  </div>

                  {/* Deskripsi */}
                  <p className="font-sans text-xs md:text-sm text-txt-secondary leading-relaxed mb-6">
                    Asosiasi Pelaku Perjalanan Wisata Indonesia - Wilayah Kalimantan Barat.
                  </p>
                </div>

                {/* Badge Pill di Bawah */}
                <div>
                  <span className="inline-block bg-subtle text-txt-primary text-xs font-bold px-4 py-1.5 rounded-full">
                    Asosiasi Pariwisata
                  </span>
                </div>
              </div>
            </ScrollAnimate>

            {/* Card 2: BANSA Foundation */}
            <ScrollAnimate direction="up" delay={0.3}>
              <div className="bg-surface text-txt-primary rounded-24 p-6 md:p-8 shadow-card border border-white/10 flex flex-col justify-between h-full">
                <div>
                  {/* Header: Logo + Nama */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 md:w-20 shrink-0">
                      <img
                        src="/images/bansa.png"
                        alt="BANSA Foundation"
                        className="w-full h-auto object-contain max-h-16"
                      />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-normal text-brand-forest leading-tight">
                      BANSA Foundation
                    </h3>
                  </div>

                  {/* Deskripsi */}
                  <p className="font-sans text-xs md:text-sm text-txt-secondary leading-relaxed mb-6">
                    Yayasan pemberdayaan masyarakat dan pelestarian potensi daerah.
                  </p>
                </div>

                {/* Badge Pill di Bawah */}
                <div>
                  <span className="inline-block bg-subtle text-txt-primary text-xs font-bold px-4 py-1.5 rounded-full">
                    Pengembangan Komunitas
                  </span>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  );
}
