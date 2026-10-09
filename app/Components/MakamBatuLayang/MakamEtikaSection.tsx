"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION 5: ETIKA SELAMA KUNJUNGAN - Responsive
   ================================================ */

export default function MakamEtikaSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-15 bg-brand-gold bg-[url('/images/Background.png')] bg-repeat bg-center diamond-pattern" id="etika">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        {/* Header Section */}
        <ScrollAnimate direction="up">
          <div className="max-w-3xl mb-6 sm:mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-normal leading-tight text-brand-forest mb-2 sm:mb-3">
              Etika selama Kunjungan
            </h2>
            <p className="font-sans text-xs sm:text-sm font-bold text-txt-primary leading-relaxed">
              Akses singkat dari Tugu Khatulistiwa membawa pengunjung ke ruang pusaka yang menuntut sikap tenang, pakaian sopan, dan penghormatan.
            </p>
          </div>
        </ScrollAnimate>

        {/* Row 1: Menuju Batu Layang Dark Card + Penanda Masuk Photo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {/* Card Left: Menuju Batu Layang (Dark Green Card) */}
          <ScrollAnimate direction="left" delay={0.1} className="lg:col-span-2">
            <div className="bg-brand-forest-dark text-white rounded-2xl sm:rounded-24 p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full shadow-card border border-white/10">
              <div>
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div>
                    <span className="font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-brand-gold-dark uppercase block mb-1">
                      DARI TUGU KHATULISTIWA
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-white">
                      Menuju Batu Layang
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-surface-forest-dark text-brand-gold-dark text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
                    <svg className="w-3.5 h-3.5 text-brand-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    ±2 KM · ±5 MENIT
                  </span>
                </div>

                {/* 3 Direction Step Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 mb-4 sm:mb-6">
                  {/* Step 1 */}
                  <div className="bg-surface-forest-dark rounded-xl p-3.5 sm:p-4 border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div className="p-1.5 text-brand-gold-dark bg-surface-forest-darker rounded-lg">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 014 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                          </svg>
                        </div>
                        <span className="font-sans text-xs font-bold text-txt-forest-muted">01</span>
                      </div>
                      <h4 className="font-sans text-xs font-bold text-white mb-1">
                        Arah utara
                      </h4>
                      <p className="font-sans text-[11px] text-txt-forest-muted leading-relaxed">
                        Berkendara melalui Jalan Khatulistiwa sekitar 5 menit ke arah utara.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-surface-forest-dark rounded-xl p-3.5 sm:p-4 border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div className="p-1.5 text-brand-gold-dark bg-surface-forest-darker rounded-lg">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="9" strokeWidth="2" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                          </svg>
                        </div>
                        <span className="font-sans text-xs font-bold text-txt-forest-muted">02</span>
                      </div>
                      <h4 className="font-sans text-xs font-bold text-white mb-1">
                        Cari gapura kuning
                      </h4>
                      <p className="font-sans text-[11px] text-txt-forest-muted leading-relaxed">
                        Saat gapura kuning terlihat di kiri jalan, perlambat kendaraan.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-surface-forest-dark rounded-xl p-3.5 sm:p-4 border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div className="p-1.5 text-brand-gold-dark bg-surface-forest-darker rounded-lg">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                        <span className="font-sans text-xs font-bold text-txt-forest-muted">03</span>
                      </div>
                      <h4 className="font-sans text-xs font-bold text-white mb-1">
                        Masuk 200 meter
                      </h4>
                      <p className="font-sans text-[11px] text-txt-forest-muted leading-relaxed">
                        Belok masuk dan lanjutkan sekitar 200 meter menuju kompleks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom 2 Transport Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-3 border-t border-border-forest-dark">
                <div className="bg-surface-forest-dark rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5 border border-white/5 text-xs text-white/90 font-medium">
                  <span className="p-1 text-brand-gold-dark bg-surface-forest-darker rounded-md">🚘</span>
                  Transportasi darat
                </div>
                <div className="bg-surface-forest-dark rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5 border border-white/5 text-xs text-white/90 font-medium">
                  <span className="p-1 text-brand-gold-dark bg-surface-forest-darker rounded-md">⛵</span>
                  Jalur air dengan sampan
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card Right: Penanda Masuk Photo Card */}
          <ScrollAnimate direction="right" delay={0.15} className="lg:col-span-1">
            <div className="bg-white p-2 rounded-2xl sm:rounded-24 shadow-card h-full flex flex-col">
              <div className="relative rounded-xl sm:rounded-20 overflow-hidden aspect-4/3 sm:aspect-4/5 lg:aspect-auto h-full min-h-[240px] sm:min-h-[280px] group border border-border-default/30">
                <Image
                  src="/images/gerbang-makam.png"
                  alt="Gapura Kuning Penanda Masuk Makam Batu Layang"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Top Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                  <span className="inline-block bg-surface-forest-darker/85 backdrop-blur-md text-brand-gold-dark text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-brand-gold-dark/20">
                    PENANDA MASUK
                  </span>
                </div>
                {/* Bottom Overlay Box */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-10">
                  <div className="bg-brand-forest-dark/90 backdrop-blur-md p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-white/10 text-white text-xs leading-snug shadow-lg">
                    Perlambat kendaraan ketika melihat gapura kuning di sisi kiri Jalan Khatulistiwa.
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>

        {/* Row 2: Berpakaian Sopan dan Tertutup (White Card) */}
        <ScrollAnimate direction="up" delay={0.2}>
          <div className="bg-surface rounded-2xl sm:rounded-24 p-5 sm:p-6 md:p-8 border border-border-default shadow-card grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-center">
            {/* Left Column (2 cols) */}
            <div className="md:col-span-2">
              <span className="inline-block bg-brand-terracotta text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-2 sm:mb-3">
                HORMATI RUANG SAKRAL
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-txt-primary mb-2 sm:mb-3 leading-snug">
                Berpakaian sopan dan tertutup
              </h3>
              <p className="font-sans text-xs italic text-txt-secondary leading-relaxed">
                Imbauan berlaku bagi seluruh wisatawan, khususnya pengunjung mancanegara dan non-muslim.
              </p>
            </div>

            {/* Right Column (3 cols) with vertical divider border */}
            <div className="md:col-span-3 md:border-l md:border-border-default/60 md:pl-8 space-y-4 sm:space-y-5">
              {/* Item 1 */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-badge-mint text-badge-mint-txt flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-txt-primary mb-0.5">
                    Tutupi bahu dan lutut
                  </h4>
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    Pilih pakaian yang sopan, longgar, dan tertutup agar nyaman selama berada di kompleks.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-badge-mint text-badge-mint-txt flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-txt-primary mb-0.5">
                    Hindari pakaian terlalu terbuka
                  </h4>
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    Jaga marwah situs pusaka sejarah kerajaan Islam dan hormati kesakralan area makam.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-badge-mint text-badge-mint-txt flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-txt-primary mb-0.5">
                    Jaga ketenangan
                  </h4>
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    Dahulukan doa dan pengamatan yang tenang; jangan mengganggu peziarah lain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
