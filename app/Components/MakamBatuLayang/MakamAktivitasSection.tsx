"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION 4: AKTIVITAS YANG DAPAT DILAKUKAN
   ================================================ */

export default function MakamAktivitasSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-15 bg-brand-forest bg-[url('/images/Background.png')] bg-repeat bg-center batik-pattern" id="aktivitas">
      <div className="max-w-310 mx-auto space-y-10">
        {/* Header Section */}
        <ScrollAnimate direction="up">
          <div className="max-w-3xl mb-8">
            <h2 className="font-serif text-3xl md:text-5xl font-normal leading-tight text-white mb-3">
              Aktivitas yang Dapat Dilakukan
            </h2>
            <p className="font-sans text-xs md:text-sm font-bold text-white/90">
              Kunjungan yang baik mengutamakan doa dan penghormatan, lalu membuka ruang untuk memahami arsitektur makam, silsilah, dan lanskap sungai.
            </p>
          </div>
        </ScrollAnimate>

        {/* Row 1: 3 White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01: Ziarah */}
          <ScrollAnimate direction="up" delay={0.1}>
            <div className="bg-surface rounded-20 p-6 border border-border-default shadow-card h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-badge-mint-txt text-white flex items-center justify-center text-sm shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="font-sans text-xs font-bold text-txt-secondary">01</span>
                </div>
                <h3 className="font-serif text-xl font-normal text-txt-primary mb-2 leading-snug">
                  Ziarah dan memanjatkan doa
                </h3>
                <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                  Datang sebagai peziarah, menjaga ketenangan, dan memanjatkan doa di kompleks makam keluarga Kesultanan Pontianak.
                </p>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card 02: Studi arsitektur */}
          <ScrollAnimate direction="up" delay={0.15}>
            <div className="bg-surface rounded-20 p-6 border border-border-default shadow-card h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-badge-mint-txt text-white flex items-center justify-center text-sm shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="font-sans text-xs font-bold text-txt-secondary">02</span>
                </div>
                <h3 className="font-serif text-xl font-normal text-txt-primary mb-2 leading-snug">
                  Studi arsitektur dan nisan
                </h3>
                <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                  Amati bangunan beratap tiga tingkat, bentuk mahkota, perbedaan nisan laki-laki dan perempuan, serta susunan tambak.
                </p>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card 03: Bersantai di tepi sungai */}
          <ScrollAnimate direction="up" delay={0.2}>
            <div className="bg-surface rounded-20 p-6 border border-border-default shadow-card h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-badge-mint-txt text-white flex items-center justify-center text-sm shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    </svg>
                  </div>
                  <span className="font-sans text-xs font-bold text-txt-secondary">03</span>
                </div>
                <h3 className="font-serif text-xl font-normal text-txt-primary mb-2 leading-snug">
                  Bersantai di tepi sungai
                </h3>
                <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                  Setelah berkunjung, nikmati minuman dan makanan kecil dari deretan warung dekat Sungai Kapuas.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>

        {/* Row 2: Two Main Featured Cards (Warung Image + Cara Mengalami Situs Quote) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch pt-2">
          {/* Card Left: Warung Lokal Image */}
          <ScrollAnimate direction="left" delay={0.1}>
            <div className="relative rounded-24 overflow-hidden aspect-4/3 md:aspect-auto h-full min-h-90 group shadow-card border border-white/10">
              <Image
                src="/images/sungai-kapuas.png"
                alt="Warung lokal di tepi Sungai Kapuas"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block bg-surface-forest-darker/85 backdrop-blur-md text-brand-gold-dark text-[10px] font-bold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full border border-brand-gold-dark/20">
                  TEPI KAPUAS · WARUNG LOKAL
                </span>
              </div>
              {/* Bottom Overlay Box */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-brand-forest-dark/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-white flex items-center gap-3.5 shadow-lg">
                  <div className="shrink-0 p-1 text-brand-gold-dark">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    </svg>
                  </div>
                  <p className="font-sans text-xs text-white/90 leading-snug">
                    Ruang singgah sederhana untuk peziarah dan pengunjung.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card Right: Cara Mengalami Situs (Dark Green Card) */}
          <ScrollAnimate direction="right" delay={0.15}>
            <div className="bg-brand-forest-dark text-white rounded-24 p-8 flex flex-col justify-between h-full shadow-card border border-white/10">
              <div>
                <span className="font-sans text-[10px] font-bold tracking-[0.18em] text-brand-gold-dark uppercase block mb-4">
                  CARA MENGALAMI SITUS
                </span>
                <h3 className="font-serif text-2xl md:text-[30px] leading-[1.3] text-white font-normal mb-4">
                  Datang pelan, membaca jejak dengan saksana
                </h3>
                <p className="font-sans text-[13px] text-txt-forest-muted leading-[1.6]">
                  Batu Layang bukan sekadar tujuan rekreasi. Setiap unsur—dari atap, posisi makam, hingga tanda pada nisan—adalah bagian dari arsip hidup Kesultanan Pontianak.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-forest-dark">
                <p className="font-serif text-xs md:text-sm text-brand-gold-dark italic">
                  “Utamakan ziarah; biarkan sejarah hadir tanpa mengusik kesakralan.”
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
