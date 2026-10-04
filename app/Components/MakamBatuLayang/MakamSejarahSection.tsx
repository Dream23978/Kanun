"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION 2: SEJARAH & LATAR BELAKANG
   ================================================ */

export default function MakamSejarahSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-15 bg-brand-gold bg-[url('/images/Background.png')] bg-repeat bg-center diamond-pattern" id="sejarah">
      <div className="max-w-310 mx-auto space-y-10">
        {/* Header Section */}
        <ScrollAnimate direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl md:text-5xl font-normal leading-tight text-brand-forest mb-3">
              Sejarah & Latar Belakang
            </h2>
            <p className="font-sans text-sm md:text-base font-bold italic text-txt-primary">
              Kompleks peristirahatan keluarga Kesultanan Pontianak—ruang ziarah, arsip silsilah, dan saksi
              sejarah kota di tepi Sungai Kapuas Besar.
            </p>
          </div>
        </ScrollAnimate>

        {/* Row 1: Two Main Featured Cards (River Image + Ibunda Quote) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card Left: River Rocks Image */}
          <ScrollAnimate direction="left" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 md:aspect-auto h-full min-h-80 group shadow-card border border-border-default/30">
              <Image
                src="/images/sungai-kapuas.png"
                alt="Bebatuan besar di tepi Sungai Kapuas"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block bg-surface-forest-darker/85 backdrop-blur-md text-brand-gold-dark text-[10px] font-bold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full border border-brand-gold-dark/20">
                  BATU · SUNGAI · PETUNJUK LELUHUR
                </span>
              </div>
              {/* Bottom Overlay Info Box */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-brand-forest-dark/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white flex items-center gap-3.5 shadow-lg">
                  <div className="shrink-0 p-1 text-brand-gold-dark">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9c2.5-1.5 5.5-1.5 8 0s5.5 1.5 8 0M3 13c2.5-1.5 5.5-1.5 8 0s5.5 1.5 8 0M3 17c2.5-1.5 5.5-1.5 8 0s5.5 1.5 8 0" />
                    </svg>
                  </div>
                  <p className="font-sans text-xs text-white/90 leading-relaxed">
                    Bebatuan besar di tepi Kapuas menjadi karakter geologis unik yang tidak dijumpai di sisi hilir lainnya.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card Right: Ibunda Quote (Dark Green Card) */}
          <ScrollAnimate direction="right" delay={0.15}>
            <div className="bg-brand-forest-dark text-white rounded-24 p-8 flex flex-col justify-between h-full shadow-card border border-white/10">
              <div>
                <span className="font-sans text-[10px] font-bold tracking-[0.18em] text-brand-gold-dark uppercase block mb-4">
                  PESAN IBUNDA · TRIM, HADHRAMAUT
                </span>
                <blockquote className="font-serif text-2xl md:text-[30px] leading-[1.3] text-white font-normal italic mb-5">
                  “Ada batu, tapi tak ada gunung.”
                </blockquote>
                <p className="font-sans text-[13px] text-txt-forest-muted leading-[1.6]">
                  Sebelum Habib Husein Al-Kadrie berangkat dari Trim, Hadhramaut, Yaman Selatan, ibundanya menyampaikan tiga petunjuk tentang zuriat. Salah satunya menjadi penanda lanskap yang kelak ditemukan di Batu Layang.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-forest-dark">
                <p className="font-sans text-[12px] text-brand-gold-dark">
                  Zuriat berarti keturunan atau garis keluarga.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>

        {/* Row 2: Middle Layout (Pioneer Cards + Stats Bar on Left, 1771 Arrival Card on Right) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Left 2 Columns */}
          <div className="md:col-span-2 flex flex-col justify-between gap-4">
            {/* Top 2 White Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 grow">
              {/* Card 1: Syarif Abdurrahman */}
              <ScrollAnimate direction="up" delay={0.1}>
                <div className="bg-surface rounded-20 p-6 border border-border-default shadow-card h-full flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-brand-forest-dark text-brand-gold-dark text-[10px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-3">
                      TOKOH PELOPOR
                    </span>
                    <h3 className="font-serif text-xl font-normal text-txt-primary mb-2 leading-snug">
                      Syarif Abdurrahman Al-Kadrie
                    </h3>
                    <p className="font-sans text-[12px] text-txt-secondary leading-[1.6]">
                      Syarif Abdurrahman ibn Habib Husein ibn Ahmad Al-Kadrie—pendiri Kesultanan Pontianak—menyiapkan lahan di tepi Kapuas Besar untuk dirinya, zuriat, dan keluarga kesultanan.
                    </p>
                  </div>
                </div>
              </ScrollAnimate>

              {/* Card 2: Panglima Laskar Siak */}
              <ScrollAnimate direction="up" delay={0.15}>
                <div className="bg-surface rounded-20 p-6 border border-border-default shadow-card h-full flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-brand-forest-dark text-brand-gold-dark text-[10px] font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full mb-3">
                      SEKUTU KESULTANAN
                    </span>
                    <h3 className="font-serif text-xl font-normal text-txt-primary mb-2 leading-snug">
                      Panglima Laskar Siak
                    </h3>
                    <p className="font-sans text-[12px] text-txt-secondary leading-[1.6]">
                      Area ini mula-mula turut menjadi tempat pemakaman Panglima Laskar Siak yang membantu Sultan Syarif Abdurrahman dalam peperangan melawan Sanggau.
                    </p>
                  </div>
                </div>
              </ScrollAnimate>
            </div>

            {/* Bottom Dark Stats Bar */}
            <ScrollAnimate direction="up" delay={0.2}>
              <div className="bg-brand-forest-dark rounded-20 p-4 text-white border border-white/10 shadow-card">
                <div className="grid grid-cols-3 gap-2 text-center divide-x divide-white/15">
                  <div className="px-2">
                    <span className="font-serif text-2xl md:text-3xl font-normal text-brand-gold-dark block leading-tight">
                      8.424 m²
                    </span>
                    <span className="font-sans text-[9px] font-bold tracking-[0.15em] text-white uppercase">
                      LUAS KOMPLEKS MAKAM
                    </span>
                  </div>
                  <div className="px-2">
                    <span className="font-serif text-2xl md:text-3xl font-normal text-brand-gold-dark block leading-tight">
                      ±3.000
                    </span>
                    <span className="font-sans text-[9px] font-bold tracking-[0.15em] text-white uppercase">
                      MAKAM KESELURUHAN
                    </span>
                  </div>
                  <div className="px-2">
                    <span className="font-serif text-2xl md:text-3xl font-normal text-brand-gold-dark block leading-tight">
                      8 Sultan
                    </span>
                    <span className="font-sans text-[9px] font-bold tracking-[0.15em] text-white uppercase">
                      PONTIANAK DIMAKAMKAN
                    </span>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Right Column: 1771 Arrival Card */}
          <ScrollAnimate direction="right" delay={0.2}>
            <div className="bg-brand-forest-dark text-white rounded-24 p-7 flex flex-col justify-between h-full shadow-card border border-white/10">
              <div>
                <span className="font-sans text-[10px] font-bold tracking-[0.18em] text-brand-gold-dark uppercase block mb-3">
                  TAHUN KEDATANGAN
                </span>
                <span className="font-serif text-6xl md:text-[64px] font-normal text-white block mb-6 leading-none">
                  1771
                </span>
                <h4 className="font-sans text-[15px] font-bold text-white mb-2">
                  Pontianak disiapkan
                </h4>
                <p className="font-sans text-[12px] text-txt-forest-muted leading-[1.6]">
                  Syarif Abdurrahman tiba di wilayah yang kini menjadi Kota Pontianak.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>

        {/* Row 3: Timeline "Tiga penanda awal Batu Layang" */}
        <div className="pt-6 space-y-6">
          {/* Title & Year Range */}
          <ScrollAnimate direction="up">
            <div className="flex flex-row justify-between items-baseline border-b border-brand-forest/15 pb-3">
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-brand-forest">
                Tiga penanda awal Batu Layang
              </h3>
              <span className="font-serif text-base md:text-lg font-bold text-brand-forest tracking-wide">
                1771 — 1808
              </span>
            </div>
          </ScrollAnimate>

          {/* 3 Timeline Cards with colored top borders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: 1771 */}
            <ScrollAnimate direction="up" delay={0.1}>
              <div className="bg-surface rounded-2xl p-6 border border-border-default border-t-4 border-t-brand-terracotta shadow-card h-full flex flex-col">
                <span className="font-serif text-3xl font-normal text-txt-primary block mb-2">
                  1771
                </span>
                <span className="font-sans text-[10px] font-bold tracking-wider text-brand-terracotta uppercase block mb-1">
                  LAHAN DISIAPKAN
                </span>
                <h4 className="font-sans text-sm font-bold text-txt-primary mb-2">
                  Tempat peristirahatan keluarga
                </h4>
                <p className="font-sans text-xs text-txt-secondary leading-relaxed grow">
                  Tanah di tepi Sungai Kapuas Besar dipilih untuk menjadi kompleks pemakaman pendiri, zuriat, dan keluarga kesultanan.
                </p>
              </div>
            </ScrollAnimate>

            {/* Card 2: 1778 */}
            <ScrollAnimate direction="up" delay={0.15}>
              <div className="bg-surface rounded-2xl p-6 border border-border-default border-t-4 border-t-brand-gold-deeper shadow-card h-full flex flex-col">
                <span className="font-serif text-3xl font-normal text-txt-primary block mb-2">
                  1778
                </span>
                <span className="font-sans text-[10px] font-bold tracking-wider text-brand-gold-deeper uppercase block mb-1">
                  KETEGANGAN DAGANG
                </span>
                <h4 className="font-sans text-sm font-bold text-txt-primary mb-2">
                  Meriam di wilayah berbatu
                </h4>
                <p className="font-sans text-xs text-txt-secondary leading-relaxed grow">
                  Nicholas de Kloek, utusan VOC yang bertentangan dengan Sultan, menempatkan meriam untuk menutup lalu lintas dagang Pontianak dengan wilayah luar.
                </p>
              </div>
            </ScrollAnimate>

            {/* Card 3: 1808 */}
            <ScrollAnimate direction="up" delay={0.2}>
              <div className="bg-surface rounded-2xl p-6 border border-border-default border-t-4 border-t-brand-forest shadow-card h-full flex flex-col">
                <span className="font-serif text-3xl font-normal text-txt-primary block mb-2">
                  1808
                </span>
                <span className="font-sans text-[10px] font-bold tracking-wider text-brand-forest uppercase block mb-1">
                  MAKAM PENDIRI
                </span>
                <h4 className="font-sans text-sm font-bold text-txt-primary mb-2">
                  Sultan pertama wafat
                </h4>
                <p className="font-sans text-xs text-txt-secondary leading-relaxed grow">
                  Sultan Syarif Abdurrahman Al-Kadrie wafat dan dimakamkan di posisi depan-tengah bangunan utama bersama permaisurinya.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  );
}
