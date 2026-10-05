"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function KampungTenunSejarahSection() {
  return (
    <section id="sejarah" className="relative w-full py-14 md:py-20 bg-tenun-yellow">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-[#123524] font-normal tracking-tight">
            Sejarah &amp; Latar Belakang
          </h2>
          <p className="mt-3 text-xs md:text-sm text-[#1C1A17] font-medium italic leading-relaxed">
            Bukan sekadar sentra produksi, Kampung Tenun tumbuh dari pengetahuan seorang perajin, kerja bersama warga, dan semangat membangun kembali kehidupan melalui kain tradisional.
          </p>
        </motion.div>

        {/* 3-Column Core Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Column: Photo of Ibu Kurniati (5 cols) with Motion */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-sm border border-[#E8E2DA] min-h-[420px] bg-white"
          >
            <Image
              src="/images/kampung-tenun-khatulistiwa/weaver_history.jpg"
              alt="Ibu Kurniati - Tokoh Penggerak Kampung Tenun Khatulistiwa"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            {/* Top-Left Pill Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#123524] text-[#D19B4C] border border-[#D19B4C]/30 shadow">
                Ibu Kurniati - Tokoh Penggerak
              </span>
            </div>

            {/* Bottom Quote Box */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <div className="bg-[#123524]/90 backdrop-blur-sm border border-[#246144] rounded-xl p-4 text-white shadow-lg">
                <p className="font-heading text-sm md:text-base leading-snug">
                  &ldquo;Keterampilan sejak kecil menjadi jalan bagi banyak keluarga untuk bangkit.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Middle Column: 2 Stacked Cards (4 cols) with Motion */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl p-5 border border-[#E8E2DA] shadow-sm flex-1 flex flex-col justify-center"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#123524] text-[#D19B4C]">
                  Tokoh Penggerak
                </span>
              </div>
              <h3 className="font-heading text-lg md:text-xl text-[#123524] mt-2.5 mb-2 font-normal">
                Ibu Kurniati dan ilmu sejak kecil
              </h3>
              <p className="text-xs text-[#516057] leading-relaxed">
                Kampung ini diprakarsai Ibu Kurniati bersama warga setempat. Keahlian menenun yang beliau miliki sejak kecil kemudian dibagikan melalui pelatihan kepada para ibu di lingkungan Batu Layang.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl p-5 border border-[#E8E2DA] shadow-sm flex-1 flex flex-col justify-center"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#123524] text-[#D19B4C]">
                  Catatan Sosial
                </span>
              </div>
              <h3 className="font-heading text-lg md:text-xl text-[#123524] mt-2.5 mb-2 font-normal">
                Bangkit setelah konflik
              </h3>
              <p className="text-xs text-[#516057] leading-relaxed">
                Sentra tenun berkaitan dengan ketangguhan pengungsi dan pendatang korban konflik sosial masa lalu dari Sambas serta daerah lain di Kalimantan Barat yang bangkit secara ekonomi melalui kerajinan tenun tradisional.
              </p>
            </motion.div>
          </div>

          {/* Right Column: 20 Ibu-ibu Aktif Card (3 cols) with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 bg-[#123524] rounded-none p-6 md:p-7 lg:p-8 text-white border border-[#246144] shadow-md flex flex-col justify-start h-full"
          >
            {/* Top Category Label */}
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#D19B4C] block">
              DAYA HIDUP KOMUNITAS
            </span>

            {/* Big Stat & Subtitle */}
            <div className="mt-6">
              <span className="font-heading text-7xl sm:text-8xl lg:text-[88px] font-bold text-white block leading-[0.9] tracking-tight">
                20
              </span>
              <span className="font-heading text-3xl sm:text-[34px] font-bold text-white block mt-2.5 leading-tight">
                ibu-ibu aktif
              </span>
            </div>

            {/* Accent Divider Bar */}
            <div className="w-16 h-1 bg-[#D19B4C] mt-6 mb-6 rounded-none" />

            {/* Description */}
            <p className="text-sm text-[#EDE8DF] leading-relaxed font-sans max-w-[260px]">
              Bagian dari jaringan puluhan perajin dan belasan rumah produksi mandiri.
            </p>
          </motion.div>
        </div>

        {/* Sub-Section Timeline: Dari satu keterampilan menjadi sentra kota */}
        <div className="mt-14 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-4"
          >
            <h3 className="font-heading text-xl md:text-2xl text-[#123524] font-normal">
              Dari satu keterampilan menjadi sentra kota
            </h3>
            <span className="font-heading text-base md:text-lg font-bold text-[#123524] tracking-wider">
              &plusmn;1999 — KINI
            </span>
          </motion.div>

          {/* Timeline Connector Line with colored dots */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.9 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-4 hidden md:block"
          >
            <div className="h-0.5 bg-[#C9BDA6]/40 w-full" />
            <div className="absolute top-1/2 -translate-y-1/2 left-[16%] w-2.5 h-2.5 rounded-full bg-[#FF0000]" />
            <div className="absolute top-1/2 -translate-y-1/2 left-[50%] w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <div className="absolute top-1/2 -translate-y-1/2 left-[83%] w-2.5 h-2.5 rounded-full bg-[#123524]" />
          </motion.div>

          {/* 3 Timeline Cards with Staggered Motion */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DA] shadow-sm p-5 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF0000]" />
              <div className="mb-2">
                <span className="font-heading text-2xl font-bold text-[#123524] block">
                  &plusmn;1999
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF0000] block mt-0.5">
                  Kampung Tematik
                </span>
              </div>
              <h4 className="font-sans text-xs font-bold text-[#123524] mb-1.5">
                Mendapat pengakuan pemerintah kota
              </h4>
              <p className="text-[11px] text-[#6B726F] leading-relaxed">
                Mulai resmi dikenal dan dikembangkan sebagai kampung tematik serta memperoleh SK dari Pemerintah Kota Pontianak.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DA] shadow-sm p-5 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#F59E0B]" />
              <div className="mb-2">
                <span className="font-heading text-2xl font-bold text-[#123524] block">
                  Puluhan
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B] block mt-0.5">
                  Perajin Terlatih
                </span>
              </div>
              <h4 className="font-sans text-xs font-bold text-[#123524] mb-1.5">
                Pengetahuan menyebar
              </h4>
              <p className="text-[11px] text-[#6B726F] leading-relaxed">
                Kurniati melatih warga sekitar. Keterampilan berkembang dari rumah ke rumah hingga melibatkan puluhan perajin.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DA] shadow-sm p-5 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#123524]" />
              <div className="mb-2">
                <span className="font-heading text-2xl font-bold text-[#123524] block">
                  Belasan
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#123524] block mt-0.5">
                  Rumah Produksi
                </span>
              </div>
              <h4 className="font-sans text-xs font-bold text-[#123524] mb-1.5">
                Sentra tenun terbesar di kota
              </h4>
              <p className="text-[11px] text-[#6B726F] leading-relaxed">
                Belasan produksi mandiri membentuk ekosistem kerajinan yang kini berkembang sebagai sentra tenun terbesar di Kota Pontianak dan destinasi wisata budaya.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
