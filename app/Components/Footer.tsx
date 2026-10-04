"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0B2317] text-white pt-14 pb-8 border-t border-[#1C4230]/40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Top Section: Brand & Navigation Columns with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-14 pb-12"
        >
          {/* Column 1: Brand, Partner & Description */}
          <div className="max-w-md">
            <div className="flex items-center gap-3.5 mb-4">
              {/* Kanun 'K' Badge */}
              <div className="w-8 h-8 rounded-lg bg-[#FFEFC8] text-[#123524] flex items-center justify-center font-sans font-bold text-sm shadow-sm">
                K
              </div>
              <span className="font-heading font-serif text-lg text-white font-normal">
                Kanun 5.0
              </span>
              <span className="text-white/30 text-lg mx-0.5 font-light">|</span>

              {/* Pertamina Partner Badge */}
              <div className="bg-white rounded px-2.5 py-1 flex items-center h-8 shadow-xs">
                <Image
                  src="/images/pertamina.png"
                  alt="Pertamina"
                  width={110}
                  height={26}
                  className="h-5 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs md:text-sm text-white/70 leading-relaxed font-sans">
              Platform panduan wisata terpercaya, merangkum keindahan alam, budaya, kuliner, dan kerajinan khas di Kecamatan Pontianak Utara, Kalimantan Barat.
            </p>
          </div>

          {/* Right Columns: Navigasi & Panduan */}
          <div className="flex gap-14 sm:gap-20 md:gap-28">
            {/* Column 2: NAVIGASI */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D19B4C] mb-4">
                NAVIGASI
              </h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-white/80 font-sans">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/destinasi" className="hover:text-white transition-colors">
                    Destinasi
                  </Link>
                </li>
                <li>
                  <Link href="/oleh-oleh" className="hover:text-white transition-colors">
                    Oleh-oleh
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: PANDUAN */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D19B4C] mb-4">
                PANDUAN
              </h4>
              <ul className="space-y-2.5 text-xs md:text-sm text-white/80 font-sans">
                <li>
                  <Link href="/panduan/rute-satu-hari" className="hover:text-white transition-colors">
                    Rute Satu Hari
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/tips-perjalanan" className="hover:text-white transition-colors">
                    Tips Perjalanan
                  </Link>
                </li>
                <li>
                  <Link href="/panduan/kontak-penting" className="hover:text-white transition-colors">
                    Kontak Penting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Divider Line */}
        <div className="border-t border-[#1C4230] pt-6" />

        {/* Bottom Bar: Copyright, Social Badges, Slogan with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
        >
          {/* Copyright */}
          <p className="text-white/60 text-xs text-center md:text-left">
            © 2026 Kanun 5.0 Pontianak Utara. Hak Cipta Dilindungi.
          </p>

          {/* Social Badges (ig, fb, yt) */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Kanun"
              className="w-7 h-7 rounded-full bg-[#FFEFC8] text-[#123524] flex items-center justify-center font-bold text-xs hover:scale-110 transition-transform shadow-xs"
            >
              ig
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Kanun"
              className="w-7 h-7 rounded-full bg-[#FFEFC8] text-[#123524] flex items-center justify-center font-bold text-xs hover:scale-110 transition-transform shadow-xs"
            >
              fb
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Kanun"
              className="w-7 h-7 rounded-full bg-[#FFEFC8] text-[#123524] flex items-center justify-center font-bold text-xs hover:scale-110 transition-transform shadow-xs"
            >
              yt
            </a>
          </div>

          {/* Regional Slogan */}
          <p className="text-white/60 text-xs italic text-center md:text-right">
            Pesona Khatulistiwa, Kalimantan Barat
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
