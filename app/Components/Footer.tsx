"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0C2418] text-white pt-9 sm:pt-11 pb-6 sm:pb-7 border-t border-[#1C3E2B]/50">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        {/* Top Section: Responsive Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start pb-7 sm:pb-8"
        >
          {/* Area Kiri: Logo Kanun dan Deskripsi */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3 sm:mb-3.5">
              {/* Kanun 'K' Badge */}
              <div className="w-7 h-7 rounded-lg bg-[#FFEDBB] text-[#0C2418] flex items-center justify-center font-sans font-bold text-xs shadow-xs shrink-0">
                K
              </div>
              <span className="font-heading font-serif text-lg sm:text-xl text-white font-normal tracking-wide">
                Kanun 5.0
              </span>
            </div>

            <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed font-sans max-w-md md:max-w-[340px]">
              Platform panduan wisata terpercaya, merangkum keindahan alam, budaya, kuliner, dan kerajinan khas di Kecamatan Pontianak Utara, Kalimantan Barat.
            </p>
          </div>

          {/* Area Kanan: NAVIGASI & PANDUAN (2 Kolom berdampingan di Mobile) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-6 sm:gap-8 w-full">
            {/* Kolom NAVIGASI */}
            <div className="flex flex-col items-start">
              <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFEDBB] mb-3 sm:mb-3.5">
                NAVIGASI
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] text-white/80 font-sans">
                <li>
                  <Link href="/" className="hover:text-white transition-colors py-0.5 inline-block">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/destinasi/kanun" className="hover:text-white transition-colors py-0.5 inline-block">
                    Destinasi
                  </Link>
                </li>
                <li>
                  <Link href="#rekomendasi" className="hover:text-white transition-colors py-0.5 inline-block">
                    Oleh-oleh
                  </Link>
                </li>
              </ul>
            </div>

            {/* Kolom PANDUAN */}
            <div className="flex flex-col items-start">
              <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFEDBB] mb-3 sm:mb-3.5">
                PANDUAN
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] text-white/80 font-sans">
                <li>
                  <Link href="/panduan" className="hover:text-white transition-colors py-0.5 inline-block">
                    Rute Satu Hari
                  </Link>
                </li>
                <li>
                  <Link href="/panduan" className="hover:text-white transition-colors py-0.5 inline-block">
                    Tips Perjalanan
                  </Link>
                </li>
                <li>
                  <Link href="/panduan" className="hover:text-white transition-colors py-0.5 inline-block">
                    Kontak Penting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Garis Pemisah Horizontal Tipis */}
        <div className="w-full border-t border-[#1C3E2B]" />

        {/* Bottom Bar: Copyright, Social Media, Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-3.5 sm:gap-4 text-xs pt-5 text-center lg:text-left"
        >
          {/* Copyright: Order 3 di Mobile (paling bawah), Order 1 di Desktop (kiri) */}
          <p className="text-white/50 text-[11px] sm:text-xs order-3 lg:order-1 text-center lg:text-left">
            © 2026 Kanun 5.0 Pontianak Utara. Hak Cipta Dilindungi.
          </p>

          {/* Social Media: Order 1 di Mobile, Order 2 di Desktop (tengah) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs text-white order-1 lg:order-2">
            <a
              href="https://instagram.com/kanun_khatulistiwa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Kanun"
              className="w-6 h-6 rounded-full bg-[#FFEDBB] text-[#0C2418] flex items-center justify-center shrink-0 hover:scale-105 transition-transform shadow-xs"
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-2.5 gap-y-1 font-medium text-white/90">
              <a
                href="https://instagram.com/dutapariwisatakalbar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFEDBB] transition-colors py-0.5"
              >
                @dutapariwisatakalbar
              </a>
              <span className="text-white/60 select-none">•</span>
              <a
                href="https://instagram.com/kanun_khatulistiwa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFEDBB] transition-colors py-0.5"
              >
                @kanun_khatulistiwa
              </a>
              <span className="text-white/60 select-none">•</span>
              <a
                href="https://instagram.com/produk_kanun"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFEDBB] transition-colors py-0.5"
              >
                @produk_kanun
              </a>
            </div>
          </div>

          {/* Regional Slogan: Order 2 di Mobile, Order 3 di Desktop (kanan) */}
          <p className="text-white/50 text-[11px] sm:text-xs italic order-2 lg:order-3 text-center lg:text-right">
            Pesona Khatulistiwa, Kalimantan Barat
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
