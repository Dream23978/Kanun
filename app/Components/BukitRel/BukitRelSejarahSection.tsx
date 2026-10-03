"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION 2: SEJARAH & LATAR BELAKANG (Bukit Rel)
   ================================================ */

export default function BukitRelSejarahSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-15 bg-brand-gold bg-[url('/images/Background.png')] bg-repeat bg-center diamond-pattern" id="sejarah">
      <div className="max-w-310 mx-auto space-y-10">
        {/* Header Section */}
        <ScrollAnimate direction="up">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-serif text-3xl md:text-5xl font-normal leading-tight text-brand-forest mb-2">
              Sejarah & Latar Belakang
            </h2>
            <p className="font-sans text-sm md:text-base font-bold italic text-brand-forest">
              Dari rel lori, menjadi ruang bersama
            </p>
          </div>
        </ScrollAnimate>

        {/* Row 1: Image Left + White Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side: Photo */}
          <ScrollAnimate direction="left" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 lg:aspect-auto h-full min-h-90 group shadow-card border border-border-default/30">
              <Image
                src="/images/bukit-rel-sejarah.png"
                alt="Hutan dan jalur rel lori Bukit Rel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </ScrollAnimate>

          {/* Right Side: White Card */}
          <ScrollAnimate direction="right" delay={0.15}>
            <div className="bg-surface rounded-3xl p-6 md:p-8 border border-border-default shadow-card h-full flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-normal text-brand-forest mb-4 leading-snug">
                  Dari melihat, mencoba, hingga membawa pulang cerita
                </h3>
                <p className="font-sans text-xs md:text-sm text-txt-secondary leading-relaxed mb-4">
                  Bukit Rel berada di kawasan dataran tinggi Pontianak Utara, sekitar Kelurahan Batu Layang. Di tengah dataran rendah Pontianak yang relatif datar, bukit ini menjadi viewpoint favorit untuk menikmati lanskap kota.
                </p>
                <div className="border-b border-border-default/60 my-4" />
                <p className="font-sans text-xs md:text-sm text-txt-secondary leading-relaxed mb-6">
                  Nama “Bukit Rel” berasal dari jalur rel lori masa lampau. Kini, kawasan ini mulai ramai dikembangkan sebagai destinasi wisata alternatif berbasis alam dan ruang publik hijau.
                </p>
              </div>

              {/* Bottom Light Green Box */}
              <div className="bg-badge-mint text-badge-mint-txt rounded-xl p-4 flex items-center gap-3 border border-badge-mint-txt/10 mt-2">
                <div className="shrink-0 text-badge-mint-txt">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="font-sans text-xs font-medium text-badge-mint-txt leading-snug">
                  Dikembangkan secara swadaya oleh komunitas pemuda setempat, pegiat pariwisata lokal, dan warga sekitar.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
