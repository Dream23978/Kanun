"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION: DETAIL ARSITEKTUR & TITIK KOORDINAT - Responsive
   ================================================ */

export default function TuguArsitekturSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-15 bg-tenun-green border-t border-border-forest-dark" id="arsitektur">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        {/* Title */}
        <ScrollAnimate direction="up">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white max-w-2xl leading-tight">
            Detail Arsitektur & Titik Koordinat
          </h2>
        </ScrollAnimate>

        {/* Content Grid: Left Diagram Image & Right 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left: Diagram Image */}
          <div className="lg:col-span-7">
            <ScrollAnimate direction="left" className="h-full">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-4/3 lg:aspect-auto h-full min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] shadow-xl border border-white/20">
                <Image
                  src="/images/Diagram tugu asli.png"
                  alt="Detail Arsitektur & Tampak Tugu Khatulistiwa 1938"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </ScrollAnimate>
          </div>

          {/* Right: 2 Cards (Struktur Tugu Asli & Hasil Penelitian BPPT) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6">
            {/* Top White Card: Struktur Tugu Asli 1938 */}
            <ScrollAnimate direction="right" delay={0.1}>
              <div className="bg-surface rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-border-default shadow-card text-txt-primary">
                <span className="font-sans text-[11px] sm:text-xs font-bold tracking-wider text-brand-terracotta uppercase mb-2 sm:mb-3 block">
                  STRUKTUR TUGU ASLI · 1938
                </span>
                <p className="font-sans text-xs sm:text-sm text-txt-secondary leading-relaxed mb-4 sm:mb-6">
                  Empat kayu belian atau kayu besi berdiameter sekitar 30 cm menancap kokoh di tanah hitam pekat. Dua tonggak depan mengarah ke barat; dua tonggak belakang menopang tiga rangkaian lingkaran.
                </p>

                <div className="border-t border-border-default/60 pt-4 grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                  <div>
                    <h4 className="font-serif text-2xl sm:text-3xl font-normal text-txt-primary mb-1">
                      30 cm
                    </h4>
                    <p className="font-sans text-[10px] sm:text-[11px] text-txt-secondary leading-snug">
                      Ukuran sekitar tiap kayu belian
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl sm:text-3xl font-normal text-txt-primary mb-1">
                      3 + 1
                    </h4>
                    <p className="font-sans text-[10px] sm:text-[11px] text-txt-secondary leading-snug">
                      Tiga lingkaran ditembus satu anak panah
                    </p>
                  </div>
                </div>

                <div className="border-t border-border-default/60 pt-4">
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    Plat pada anak panah bertuliskan <strong className="text-txt-primary font-semibold">109° 20′ OLvGr</strong> (Bujur Timur), sedangkan lingkaran terluar memuat tulisan <strong className="text-txt-primary font-semibold">&quot;Evenaar&quot;</strong>.
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Bottom White Card: Hasil Penelitian BPPT Maret 2005 */}
            <ScrollAnimate direction="right" delay={0.2}>
              <div className="bg-surface rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-border-default shadow-card text-txt-primary">
                <div className="flex items-center gap-2 mb-2 sm:mb-3 text-brand-forest">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5l3 3" />
                  </svg>
                  <span className="font-sans text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                    HASIL PENELITIAN BPPT · MARET 2005
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl md:text-4xl font-normal text-txt-primary mb-1">
                  0° 0′ 3,809″ LU
                </h3>
                <h3 className="font-serif text-xl sm:text-2xl md:text-4xl font-normal text-txt-primary mb-3 sm:mb-4">
                  109° 19′ 19,9″ BT
                </h3>

                <p className="font-sans text-xs sm:text-sm text-txt-secondary leading-relaxed">
                  Posisi tepat tugu saat ini menurut penelitian berteknologi modern oleh Badan Pengkajian dan Penerapan Teknologi.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  );
}
