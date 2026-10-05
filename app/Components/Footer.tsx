"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0C2418] text-white pt-11 pb-7 border-t border-[#1C3E2B]/50">
      <div className="max-w-[1140px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Top Section: 3-Column Layout (Area Kiri, Area Tengah, Area Kanan) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8"
        >
          {/* Area Kiri: Logo Kanun + Pertamina dan Deskripsi */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3.5">
              {/* Kanun 'K' Badge */}
              <div className="w-7 h-7 rounded-lg bg-[#FFEDBB] text-[#0C2418] flex items-center justify-center font-sans font-bold text-xs shadow-xs shrink-0">
                K
              </div>
              <span className="font-heading font-serif text-lg text-white font-normal tracking-wide">
                Kanun 5.0
              </span>
              <span className="text-white/30 text-lg mx-1 font-light">|</span>

              {/* Pertamina Partner Badge */}
              <div className="bg-white rounded px-2.5 py-1 flex items-center justify-center h-8 shadow-xs">
                <Image
                  src="/images/pertamina.png"
                  alt="Pertamina"
                  width={85}
                  height={20}
                  className="h-4.5 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-white/70 leading-[1.65] font-sans max-w-[340px]">
              Platform panduan wisata terpercaya, merangkum keindahan alam, budaya, kuliner, dan kerajinan khas di Kecamatan Pontianak Utara, Kalimantan Barat.
            </p>
          </div>

          {/* Area Tengah: Kolom NAVIGASI */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFEDBB] mb-3.5">
              NAVIGASI
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-sans">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/destinasi/kanun" className="hover:text-white transition-colors">
                  Destinasi
                </Link>
              </li>
              <li>
                <Link href="#rekomendasi" className="hover:text-white transition-colors">
                  Oleh-oleh
                </Link>
              </li>
            </ul>
          </div>

          {/* Area Kanan: Kolom PANDUAN */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFEDBB] mb-3.5">
              PANDUAN
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-sans">
              <li>
                <Link href="/panduan" className="hover:text-white transition-colors">
                  Rute Satu Hari
                </Link>
              </li>
              <li>
                <Link href="/panduan" className="hover:text-white transition-colors">
                  Tips Perjalanan
                </Link>
              </li>
              <li>
                <Link href="/panduan" className="hover:text-white transition-colors">
                  Kontak Penting
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Garis Pemisah Horizontal Tipis */}
        <div className="w-full border-t border-[#1C3E2B]" />

        {/* Bottom Bar: Copyright (Kiri), Social (Tengah), Slogan (Kanan) dalam 1 Baris */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-xs pt-5"
        >
          {/* Copyright di Kiri */}
          <p className="text-white/50 text-xs text-center md:text-left">
            © 2026 Kanun 5.0 Pontianak Utara. Hak Cipta Dilindungi.
          </p>

          {/* Icon Social Media di Tengah */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Kanun"
              className="w-7 h-7 rounded-full bg-[#FFEDBB] text-[#0C2418] flex items-center justify-center font-bold text-xs hover:scale-105 transition-transform shadow-xs"
            >
              ig
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Kanun"
              className="w-7 h-7 rounded-full bg-[#FFEDBB] text-[#0C2418] flex items-center justify-center font-bold text-xs hover:scale-105 transition-transform shadow-xs"
            >
              fb
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Kanun"
              className="w-7 h-7 rounded-full bg-[#FFEDBB] text-[#0C2418] flex items-center justify-center font-bold text-xs hover:scale-105 transition-transform shadow-xs"
            >
              yt
            </a>
          </div>

          {/* Regional Slogan di Kanan */}
          <p className="text-white/50 text-xs italic text-center md:text-right">
            Pesona Khatulistiwa, Kalimantan Barat
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
