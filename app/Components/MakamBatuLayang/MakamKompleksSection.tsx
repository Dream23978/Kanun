"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION 3: KOMPLEKS, TOKOH & SILSILAH
   ================================================ */

export default function MakamKompleksSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-15 bg-brand-gold bg-[url('/images/Background.png')] bg-repeat bg-center diamond-pattern" id="kompleks">
      <div className="max-w-310 auto space-y-12">
        {/* Section Heading */}
        <ScrollAnimate direction="up">
          <div className="max-w-3xl mb-8">
            <h2 className="font-serif text-3xl md:text-[38px] font-normal leading-tight text-brand-forest mb-2">
              Kompleks, Tokoh & Silsilah Makam Ziarah Batu layang
            </h2>
            <p className="font-sans text-xs md:text-sm font-bold text-txt-primary">
              Tata letak bangunan, bentuk mahkota, dan rupa tambak menyimpan pengetahuan tentang kedudukan, garis keturunan, serta identitas mereka yang dimakamkan.
            </p>
          </div>
        </ScrollAnimate>

        {/* Row 1: Image Card Left + 4 Stats Grid Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image Card */}
          <ScrollAnimate direction="left" delay={0.1}>
            <div className="relative rounded-24 overflow-hidden aspect-4/3 md:aspect-auto h-full min-h-75 group shadow-card border border-border-default/30">
              <Image
                src="/images/Makam.png"
                alt="Ruang Makam Inti Bangunan Utama"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block bg-surface-forest-darker/85 backdrop-blur-md text-brand-gold-dark text-[10px] font-bold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full border border-brand-gold-dark/20">
                  BANGUNAN UTAMA - RUANG MAKAM INTI
                </span>
              </div>
              {/* Bottom Overlay Box */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-brand-forest-dark/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-white flex items-center gap-3 shadow-lg">
                  <div className="shrink-0 p-1 text-brand-gold-dark">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <p className="font-sans text-xs text-white/90 leading-snug">
                    Rumah beratap tiga tingkat berukuran 28 x 28 meter.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Right 4 Stats Grid (2x2) */}
          <ScrollAnimate direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {/* Stat 1 */}
              <div>
                <span className="font-serif text-3xl md:text-[38px] font-normal text-brand-forest-dark block leading-none mb-1.5">
                  784 m²
                </span>
                <span className="font-sans text-xs font-bold text-txt-primary block mb-0.5">
                  bangunan utama
                </span>
                <span className="font-sans text-[11px] text-txt-secondary">
                  Denah persegi 28 x 28 meter.
                </span>
              </div>

              {/* Stat 2 */}
              <div>
                <span className="font-serif text-3xl md:text-[38px] font-normal text-brand-forest-dark block leading-none mb-1.5">
                  ±500
                </span>
                <span className="font-sans text-xs font-bold text-txt-primary block mb-0.5">
                  makam di dalam
                </span>
                <span className="font-sans text-[11px] text-txt-secondary">
                  Makam inti dinaungi bangunan utama.
                </span>
              </div>

              {/* Stat 3 */}
              <div>
                <span className="font-serif text-3xl md:text-[38px] font-normal text-brand-forest-dark block leading-none mb-1.5">
                  ±3.000
                </span>
                <span className="font-sans text-xs font-bold text-txt-primary block mb-0.5">
                  makam keseluruhan
                </span>
                <span className="font-sans text-[11px] text-txt-secondary">
                  Termasuk pangeran dan keluarga raja.
                </span>
              </div>

              {/* Stat 4 */}
              <div>
                <span className="font-serif text-3xl md:text-[38px] font-normal text-brand-forest-dark block leading-none mb-1.5">
                  3 tingkat
                </span>
                <span className="font-sans text-xs font-bold text-txt-primary block mb-0.5">
                  susunan atap
                </span>
                <span className="font-sans text-[11px] text-txt-secondary">
                  Siluet utama kompleks bersejarah.
                </span>
              </div>
            </div>
          </ScrollAnimate>
        </div>

        {/* Row 2: Delapan Sultan Pontianak (Garis Kepemimpinan) Dark Green Card */}
        <ScrollAnimate direction="up">
          <div className="bg-brand-forest-dark text-white rounded-24 p-6 md:p-8 space-y-6 shadow-card border border-white/10">
            {/* Header inside Dark Card */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <span className="font-sans text-[10px] font-bold tracking-[0.18em] text-brand-gold-dark uppercase block mb-1">
                  DELAPAN SULTAN PONTIANAK
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-normal text-white">
                  Garis kepemimpinan yang bersemayam di Batu Layang
                </h3>
              </div>
              <span className="font-sans text-[10px] font-bold tracking-[0.18em] text-brand-gold-dark uppercase">
                08 TOKOH UTAMA
              </span>
            </div>

            {/* Grid 8 Sultans (2 rows x 4 cols) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Sultan 1 */}
              <div className="bg-surface-forest-dark rounded-xl p-3 flex items-start gap-3 border border-white/5">
                <div className="p-1.5 text-brand-gold-dark shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[12px] font-bold text-white leading-tight">
                    Sultan Syarif Abdurrahman Al-Kadrie
                  </h4>
                  <span className="font-sans text-[10px] text-txt-forest-muted block mt-0.5">
                    wafat 1808 · pendiri
                  </span>
                </div>
              </div>

              {/* Sultan 2 */}
              <div className="bg-surface-forest-dark rounded-xl p-3 flex items-start gap-3 border border-white/5">
                <div className="p-1.5 text-brand-gold-dark shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[12px] font-bold text-white leading-tight">
                    Sultan Syarif Kasim
                  </h4>
                  <span className="font-sans text-[10px] text-txt-forest-muted block mt-0.5">
                    sultan kedua
                  </span>
                </div>
              </div>

              {/* Sultan 3 */}
              <div className="bg-surface-forest-dark rounded-xl p-3 flex items-start gap-3 border border-white/5">
                <div className="p-1.5 text-brand-gold-dark shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[12px] font-bold text-white leading-tight">
                    Sultan Syarif Usman
                  </h4>
                  <span className="font-sans text-[10px] text-txt-forest-muted block mt-0.5">
                    sultan ketiga
                  </span>
                </div>
              </div>

              {/* Sultan 4 */}
              <div className="bg-surface-forest-dark rounded-xl p-3 flex items-start gap-3 border border-white/5">
                <div className="p-1.5 text-brand-gold-dark shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[12px] font-bold text-white leading-tight">
                    Sultan Hamid I
                  </h4>
                  <span className="font-sans text-[10px] text-txt-forest-muted block mt-0.5">
                    sultan keempat
                  </span>
                </div>
              </div>

              {/* Sultan 5 */}
              <div className="bg-surface-forest-dark rounded-xl p-3 flex items-start gap-3 border border-white/5">
                <div className="p-1.5 text-brand-gold-dark shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[12px] font-bold text-white leading-tight">
                    Sultan Syarif Yusuf
                  </h4>
                  <span className="font-sans text-[10px] text-txt-forest-muted block mt-0.5">
                    sultan kelima
                  </span>
                </div>
              </div>

              {/* Sultan 6 */}
              <div className="bg-surface-forest-dark rounded-xl p-3 flex items-start gap-3 border border-white/5">
                <div className="p-1.5 text-brand-gold-dark shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[12px] font-bold text-white leading-tight">
                    Sultan Syarif Muhammad
                  </h4>
                  <span className="font-sans text-[10px] text-txt-forest-muted block mt-0.5">
                    sultan keenam
                  </span>
                </div>
              </div>

              {/* Sultan 7 */}
              <div className="bg-surface-forest-dark rounded-xl p-3 flex items-start gap-3 border border-white/5">
                <div className="p-1.5 text-brand-gold-dark shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[12px] font-bold text-white leading-tight">
                    Sultan Syarif Thaha
                  </h4>
                  <span className="font-sans text-[10px] text-txt-forest-muted block mt-0.5">
                    sultan ketujuh
                  </span>
                </div>
              </div>

              {/* Sultan 8 */}
              <div className="bg-surface-forest-dark rounded-xl p-3 flex items-start gap-3 border border-white/5">
                <div className="p-1.5 text-brand-gold-dark shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-[12px] font-bold text-white leading-tight">
                    Sultan Hamid II
                  </h4>
                  <span className="font-sans text-[10px] text-txt-forest-muted block mt-0.5">
                    sultan kedelapan
                  </span>
                </div>
              </div>
            </div>

            {/* Highlight Bottom Strip */}
            <div className="bg-surface-forest-darker rounded-xl p-3.5 border border-white/10 flex items-center gap-3">
              <div className="p-1 text-brand-gold-dark shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <p className="font-sans text-xs text-white/90 leading-snug">
                Makam Sultan Syarif Abdurrahman dan permaisurinya, Puteri Utin Chandramidi, berada di posisi depan-tengah bangunan utama.
              </p>
            </div>
          </div>
        </ScrollAnimate>

        {/* Row 3: Panduan membaca identitas nisan (4 White Cards) */}
        <div className="pt-4 space-y-6">
          <ScrollAnimate direction="up">
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-brand-forest">
              Panduan membaca identitas nisan
            </h3>
          </ScrollAnimate>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 01: Mahkota */}
            <ScrollAnimate direction="up" delay={0.1}>
              <div className="bg-surface rounded-20 p-6 border border-border-default shadow-card h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-gold-accent text-white flex items-center justify-center text-sm shadow-sm">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
                      </svg>
                    </div>
                    <span className="font-sans text-xs font-bold text-txt-secondary">01</span>
                  </div>
                  <h4 className="font-serif text-lg font-normal text-txt-primary mb-2 leading-snug">
                    Mahkota menunjukkan garis sultan
                  </h4>
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    Nisan sultan berbentuk mahkota. Keturunan langsung laki-laki memakai mahkota polos tanpa hiasan; keturunan perempuan memiliki bulatan kecoklatan pada mahkotanya.
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Card 02: Bulat */}
            <ScrollAnimate direction="up" delay={0.15}>
              <div className="bg-surface rounded-20 p-6 border border-border-default shadow-card h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-forest-dark text-white flex items-center justify-center text-sm shadow-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="7" strokeWidth="2.2" />
                      </svg>
                    </div>
                    <span className="font-sans text-xs font-bold text-txt-secondary">02</span>
                  </div>
                  <h4 className="font-serif text-lg font-normal text-txt-primary mb-2 leading-snug">
                    Bulat untuk laki-laki
                  </h4>
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    Bentuk nisan di atas tambak membedakan jenis kelamin. Nisan bulat menyerupai gada menandai makam laki-laki.
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Card 03: Pipih */}
            <ScrollAnimate direction="up" delay={0.2}>
              <div className="bg-surface rounded-20 p-6 border border-border-default shadow-card h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-terracotta text-white flex items-center justify-center text-sm shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                        <rect x="5" y="9" width="14" height="6" rx="3" fill="currentColor" />
                      </svg>
                    </div>
                    <span className="font-sans text-xs font-bold text-txt-secondary">03</span>
                  </div>
                  <h4 className="font-serif text-lg font-normal text-txt-primary mb-2 leading-snug">
                    Pipih untuk perempuan
                  </h4>
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    Nisan berbentuk pipih menandai makam perempuan, sehingga silsilah dapat dibaca bersama tanda mahkota.
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Card 04: Tambak */}
            <ScrollAnimate direction="up" delay={0.25}>
              <div className="bg-surface rounded-20 p-6 border border-border-default shadow-card h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-forest-dark text-white flex items-center justify-center text-sm shadow-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polygon points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" strokeWidth="1.8" />
                      </svg>
                    </div>
                    <span className="font-sans text-xs font-bold text-txt-secondary">04</span>
                  </div>
                  <h4 className="font-serif text-lg font-normal text-txt-primary mb-2 leading-snug">
                    Apa itu tambak?
                  </h4>
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    Tambak adalah peti makam berbentuk persegi panjang yang berada di atas permukaan tanah; nisan ditempatkan di bagian atasnya.
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  );
}
