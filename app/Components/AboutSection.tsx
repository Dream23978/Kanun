"use client";

import Image from "next/image";
import ScrollAnimate from "./ScrollAnimate";

/* ================================================
   ABOUT SECTION - Responsive
   ================================================ */

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-15 text-white batik-pattern" id="tentang">
      {/* Judul section */}
      <ScrollAnimate direction="left">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-6 sm:mb-10 max-w-xl text-white">
          Menyusuri jejak masa lalu Pontianak Utara
        </h2>
      </ScrollAnimate>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Kolom kiri: gambar Tugu dengan caption */}
        <ScrollAnimate direction="left" delay={0.15}>
          <div className="relative rounded-2xl sm:rounded-20 overflow-hidden aspect-4/3 max-h-120 object-center border border-border-default/20 shadow-card mx-auto w-full">
            <Image
              src="/images/HistoricalImage.png"
              alt="Tugu Khatulistiwa"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative w-full h-full object-cover mx-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-surface-inverse/95 to-transparent">
              <h4 className="label-m tracking-widest text-brand-gold mb-1 sm:mb-1.5 text-xs sm:text-sm">Tugu Khatulistiwa</h4>
              <p className="body-s text-xs sm:text-sm text-white/85">
                Ikon garis ekuator yang menjadi simbol sejarah dan kebanggaan Pontianak Utara.
              </p>
            </div>
          </div>
        </ScrollAnimate>

        {/* Kolom kanan: deskripsi + 3 feature card */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Paragraf deskripsi */}
          <ScrollAnimate direction="right" delay={0.2}>
            <p className="font-sans text-xs sm:text-sm md:text-base leading-relaxed text-white/90">
              Pontianak Utara menyimpan cerita penting sebagai titik nol derajat bumi. Di sini, Tugu Khatulistiwa menjadi penanda sejarah dunia, sementara Kampung Wisata Tenun (Kanun) menjaga kearifan lokal melalui motif tenun insang khas Melayu. Warisan budaya ini bukan hanya destinasi, melainkan jembatan antara masa lalu dan pengalaman wisata kontemporer.
            </p>
          </ScrollAnimate>

          {/* Card 1: Garis Nol Derajat */}
          <ScrollAnimate direction="right" delay={0.1}>
            <div className="flex items-start gap-3 sm:gap-4 bg-white/8 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/[0.14] hover:translate-x-1">
              <div className="w-9 h-9 sm:w-11 sm:h-11 min-w-9 sm:min-w-11 bg-surface-forest-deep rounded-full flex items-center justify-center text-base sm:text-lg text-white font-bold shrink-0">◎</div>
              <div>
                <h4 className="font-sans text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-gold mb-1">Garis Nol Derajat</h4>
                <p className="body-s text-xs sm:text-sm text-white/80">Tugu Khatulistiwa sebagai penanda geografis yang ikonik.</p>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card 2: Pusat Tenun Khas */}
          <ScrollAnimate direction="right" delay={0.2}>
            <div className="flex items-start gap-3 sm:gap-4 bg-white/8 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/[0.14] hover:translate-x-1">
              <div className="w-9 h-9 sm:w-11 sm:h-11 min-w-9 sm:min-w-11 bg-surface-forest-deep rounded-full flex items-center justify-center text-base sm:text-lg text-white font-bold shrink-0">⬡</div>
              <div>
                <h4 className="font-sans text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-gold mb-1">Pusat Tenun Khas</h4>
                <p className="body-s text-xs sm:text-sm text-white/80">
                  Kampung Tenun (Kanun) sebagai pusat kerajinan tenun tradisional.
                </p>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card 3: Situs Bersejarah */}
          <ScrollAnimate direction="right" delay={0.3}>
            <div className="flex items-start gap-3 sm:gap-4 bg-white/8 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:bg-white/[0.14] hover:translate-x-1">
              <div className="w-9 h-9 sm:w-11 sm:h-11 min-w-9 sm:min-w-11 bg-surface-forest-deep rounded-full flex items-center justify-center text-base sm:text-lg text-white font-bold shrink-0">⛩</div>
              <div>
                <h4 className="font-sans text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-gold mb-1">Situs Bersejarah</h4>
                <p className="body-s text-xs sm:text-sm text-white/80">
                  Makam Batu Layang dan Bukit Rel yang menyimpan kisah masa lampau.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
