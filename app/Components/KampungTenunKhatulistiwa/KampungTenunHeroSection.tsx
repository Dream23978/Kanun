"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function KampungTenunHeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[640px] overflow-hidden bg-black">
      {/* Hero Image Container with Full Screen Height */}
      <div className="relative w-full h-full">
        <Image
          src="/images/kampung-tenun-khatulistiwa/hero_gate.jpg"
          alt="Gerbang Masuk Kampung Wisata Tenun Khatulistiwa Gang Sambas Jaya"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Centered Title & Caption with Motion */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16 pb-24">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[12px] sm:text-xs font-semibold uppercase tracking-widest text-[#D19B4C] mb-3 block"
          >
            Kampung Wisata Tenun Khatulistiwa
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal tracking-tight max-w-4xl"
          >
            Kampung Tenun Khatulistiwa
          </motion.h1>
        </div>

        {/* Bottom Information Row directly inside Hero with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm border-t border-white/10 py-4 px-4 z-10"
        >
          <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/15 text-center text-white">
            {/* Lokasi */}
            <div className="px-3">
              <p className="text-xs md:text-sm font-medium text-white/95">
                Jl. Khatulistiwa Gg. Sambas Jaya
              </p>
              <p className="text-[10px] md:text-xs text-white/60 mt-0.5">
                Batu Layang, Pontianak Utara
              </p>
            </div>

            {/* Jam Buka */}
            <div className="pt-2 md:pt-0 px-3">
              <p className="text-xs md:text-sm font-medium text-white/95">
                08.00 - 17.00 WIB
              </p>
              <p className="text-[10px] md:text-xs text-white/60 mt-0.5">
                Buka setiap hari
              </p>
            </div>

            {/* Tiket */}
            <div className="pt-2 md:pt-0 px-3">
              <p className="text-xs md:text-sm font-medium text-white/95">
                Gratis Masuk
              </p>
              <p className="text-[10px] md:text-xs text-white/60 mt-0.5">
                Akses publik Kampung Tenun terbuka gratis
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
