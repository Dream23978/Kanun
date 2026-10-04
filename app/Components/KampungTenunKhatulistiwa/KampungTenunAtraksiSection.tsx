"use client";

import { motion } from "motion/react";

export default function KampungTenunAtraksiSection() {
  return (
    <section
      id="atraksi"
      className="relative w-full min-h-screen py-8 md:py-12 flex flex-col justify-center text-white bg-[#1B4E34]"
      style={{
        backgroundImage: "url('/images/bf.png')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center top",
        backgroundSize: "672px auto",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="max-w-[1200px] w-full mx-auto px-5 sm:px-6 lg:px-8">
        {/* Top Card: 6 Activities (White / Cream Card with 2 Columns: 01-03 & 04-06) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FCFBF7] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-6 sm:p-7 md:p-8 lg:px-10 lg:py-7 shadow-md text-[#1C1A17] border border-[#EADBCC]/60"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-14">
            {/* Left Column: 01, 02, 03 */}
            <div className="flex flex-col">
              {/* 01 */}
              <div className="flex items-center gap-4 sm:gap-5 pb-4 pt-1 border-b border-[#EAE4DB]">
                <div className="flex flex-col items-center justify-center shrink-0 w-9 sm:w-10 text-center">
                  <span className="font-heading text-base sm:text-lg font-bold text-[#123524] mb-1.5 leading-none">
                    01
                  </span>
                  <svg
                    className="w-5 h-5 text-[#123524]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18" />
                    <path d="M5 21V10" />
                    <path d="M19 21V10" />
                    <path d="M12 21V10" />
                    <path d="M2 10h20" />
                    <path d="M12 3L2 10h20L12 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-[17px] font-bold text-[#123524] mb-0.5 leading-snug">
                    Melihat ATBM bekerja
                  </h3>
                  <p className="text-xs md:text-[12.5px] text-[#5A6660] leading-relaxed font-sans">
                    Mengikuti proses pembuatan kain tenun tradisional secara manual dengan Alat Tenun Bukan Mesin di rumah warga.
                  </p>
                </div>
              </div>

              {/* 02 */}
              <div className="flex items-center gap-4 sm:gap-5 py-4 border-b border-[#EAE4DB]">
                <div className="flex flex-col items-center justify-center shrink-0 w-9 sm:w-10 text-center">
                  <span className="font-heading text-base sm:text-lg font-bold text-[#123524] mb-1.5 leading-none">
                    02
                  </span>
                  <svg
                    className="w-5 h-5 text-[#123524]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-[17px] font-bold text-[#123524] mb-0.5 leading-snug">
                    Belajar menenun
                  </h3>
                  <p className="text-xs md:text-[12.5px] text-[#5A6660] leading-relaxed font-sans">
                    Mengenal benang, pola, ritme tangan, dan ketelitian yang membuat kain sehelai demi sehelai.
                  </p>
                </div>
              </div>

              {/* 03 */}
              <div className="flex items-center gap-4 sm:gap-5 pt-4 pb-1">
                <div className="flex flex-col items-center justify-center shrink-0 w-9 sm:w-10 text-center">
                  <span className="font-heading text-base sm:text-lg font-bold text-[#123524] mb-1.5 leading-none">
                    03
                  </span>
                  <svg
                    className="w-5 h-5 text-[#123524]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 8h12l1.5 12H4.5L6 8z" />
                    <path d="M9 8V6a3 3 0 016 0v2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-[17px] font-bold text-[#123524] mb-0.5 leading-snug">
                    Menjual &amp; berbelanja
                  </h3>
                  <p className="text-xs md:text-[12.5px] text-[#5A6660] leading-relaxed font-sans">
                    Belajar melihat nilai kerja sekaligus berbelanja langsung dari rumah produksi yang dikelola perajin.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: 04, 05, 06 */}
            <div className="flex flex-col">
              {/* 04 */}
              <div className="flex items-center gap-4 sm:gap-5 pb-4 pt-1 border-b border-[#EAE4DB]">
                <div className="flex flex-col items-center justify-center shrink-0 w-9 sm:w-10 text-center">
                  <span className="font-heading text-base sm:text-lg font-bold text-[#123524] mb-1.5 leading-none">
                    04
                  </span>
                  <svg
                    className="w-5 h-5 text-[#123524]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="18" r="3" fill="currentColor" />
                    <path d="M12 18V6c0-.55.45-1 1-1h2.5c1.1 0 2 .9 2 2v1" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-[17px] font-bold text-[#123524] mb-0.5 leading-snug">
                    Menari tradisional
                  </h3>
                  <p className="text-xs md:text-[12.5px] text-[#5A6660] leading-relaxed font-sans">
                    Mengenal gerak dan ekspresi budaya Kalimantan Barat melalui seni tari tradisional yang sarat makna.
                  </p>
                </div>
              </div>

              {/* 05 */}
              <div className="flex items-center gap-4 sm:gap-5 py-4 border-b border-[#EAE4DB]">
                <div className="flex flex-col items-center justify-center shrink-0 w-9 sm:w-10 text-center">
                  <span className="font-heading text-base sm:text-lg font-bold text-[#123524] mb-1.5 leading-none">
                    05
                  </span>
                  <svg
                    className="w-5 h-5 text-[#123524]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 11h16v6a4 4 0 01-4 4H8a4 4 0 01-4-4v-6z" />
                    <path d="M3 11h18" />
                    <path d="M10 7h4" />
                    <path d="M12 7V5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-[17px] font-bold text-[#123524] mb-0.5 leading-snug">
                    Memasak kuliner khas
                  </h3>
                  <p className="text-xs md:text-[12.5px] text-[#5A6660] leading-relaxed font-sans">
                    Menyiapkan kuliner lokal bersama warga sambil mempelajari bahan dan cerita di balik hidangan.
                  </p>
                </div>
              </div>

              {/* 06 */}
              <div className="flex items-center gap-4 sm:gap-5 pt-4 pb-1">
                <div className="flex flex-col items-center justify-center shrink-0 w-9 sm:w-10 text-center">
                  <span className="font-heading text-base sm:text-lg font-bold text-[#123524] mb-1.5 leading-none">
                    06
                  </span>
                  <svg
                    className="w-5 h-5 text-[#123524]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <path d="M15 6h2m-5 0l-3 8h5.5l2-6" />
                    <path d="M5.5 17.5l4-7.5h5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-base md:text-[17px] font-bold text-[#123524] mb-0.5 leading-snug">
                    Agrowisata &amp; bersepeda
                  </h3>
                  <p className="text-xs md:text-[12.5px] text-[#5A6660] leading-relaxed font-sans">
                    Menikmati jalur kampung melalui ruang hijau, kebun warga, dan tepian permukiman Batu Layang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Card: Fasilitas Umum (Dark Green Card) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-5 bg-[#0D261A] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-5 sm:p-6 md:p-7 lg:px-9 lg:py-6 border border-[#1A3D2D] shadow-lg"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-4 sm:mb-5">
            <div>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-[#D19B4C] block mb-1">
                FASILITAS UMUM
              </span>
              <h3 className="font-heading text-xl sm:text-2xl md:text-[26px] text-white font-normal leading-tight">
                Kebutuhan dasar untuk kunjungan
              </h3>
            </div>
            <span className="text-[11px] md:text-xs text-white/80 font-bold uppercase tracking-[0.16em]">
              06 FASILITAS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 md:gap-3.5">
            {/* 1. Balai pertemuan / ruang pelatihan */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-[#183B2B] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between min-h-[105px] sm:min-h-[114px] border border-[#26533C]/40"
            >
              <svg
                className="w-5 h-5 text-[#D19B4C]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="text-[11.5px] sm:text-xs font-medium text-white/95 leading-snug">
                Balai pertemuan / ruang pelatihan
              </span>
            </motion.div>

            {/* 2. Kios galeri & souvenir tenun */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-[#183B2B] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between min-h-[105px] sm:min-h-[114px] border border-[#26533C]/40"
            >
              <svg
                className="w-5 h-5 text-[#D19B4C]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8h12l1.5 12H4.5L6 8z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
              <span className="text-[11.5px] sm:text-xs font-medium text-white/95 leading-snug">
                Kios galeri &amp; souvenir tenun
              </span>
            </motion.div>

            {/* 3. Area parkir */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-[#183B2B] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between min-h-[105px] sm:min-h-[114px] border border-[#26533C]/40"
            >
              <svg
                className="w-5 h-5 text-[#D19B4C]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
              </svg>
              <span className="text-[11.5px] sm:text-xs font-medium text-white/95 leading-snug">
                Area parkir
              </span>
            </motion.div>

            {/* 4. Toilet umum */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-[#183B2B] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between min-h-[105px] sm:min-h-[114px] border border-[#26533C]/40"
            >
              <svg
                className="w-5 h-5 text-[#D19B4C]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 3h10v6H7z" />
                <path d="M9 9v3a3 3 0 0 0 6 0V9" />
                <path d="M10 15v5h4v-5" />
                <path d="M8 20h8" />
              </svg>
              <span className="text-[11.5px] sm:text-xs font-medium text-white/95 leading-snug">
                Toilet umum
              </span>
            </motion.div>

            {/* 5. Masjid / musholla */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-[#183B2B] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between min-h-[105px] sm:min-h-[114px] border border-[#26533C]/40"
            >
              <svg
                className="w-5 h-5 text-[#D19B4C]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.5 5.5 0 0 1-7.54-7.54C12.92 3.04 12.46 3 12 3z" />
                <path d="M19 5l.5 1.5L21 7l-1.5.5L19 9l-.5-1.5L17 7l1.5-.5z" />
              </svg>
              <span className="text-[11.5px] sm:text-xs font-medium text-white/95 leading-snug">
                Masjid / musholla
              </span>
            </motion.div>

            {/* 6. Akses internet / area WiFi */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-[#183B2B] rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between min-h-[105px] sm:min-h-[114px] border border-[#26533C]/40"
            >
              <svg
                className="w-5 h-5 text-[#D19B4C]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <circle cx="12" cy="20" r="1" fill="currentColor" />
              </svg>
              <span className="text-[11.5px] sm:text-xs font-medium text-white/95 leading-snug">
                Akses internet / area WiFi
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
