"use client";

import { motion } from "motion/react";

export default function KampungTenunPaketSection() {
  const packages = [
    {
      title: "Belajar Menenun",
      price: "sekitar Rp150.000",
      desc: "Sesi pengenalan ATBM dan praktik dasar bersama perajin.",
      badge: "SEJARAH",
      badgeColor: "bg-[#123524] text-white",
      icon: (
        <svg className="w-4 h-4 text-[#123524]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Memasak Kuliner Khas",
      price: "sekitar Rp150.000",
      desc: "Belajar bahan, resep, dan cerita hidangan lokal.",
      badge: "Perlu dikonfirmasi",
      badgeColor: "bg-[#D19B4C] text-white",
      icon: (
        <svg className="w-4 h-4 text-[#123524]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V4m0 4h6m-6 0H6" />
        </svg>
      ),
    },
    {
      title: "Menari Tradisional",
      price: "sekitar Rp250.000",
      desc: "Pengenalan gerak tari tradisional untuk pengunjung.",
      badge: "KULINER",
      badgeColor: "bg-[#A64B2A] text-white",
      icon: (
        <svg className="w-4 h-4 text-[#123524]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
    {
      title: "Belajar Merajut",
      price: "sekitar Rp100.000",
      desc: "Praktik rajut sederhana dengan bimbingan warga.",
      badge: "SEJARAH",
      badgeColor: "bg-[#123524] text-white",
      icon: (
        <svg className="w-4 h-4 text-[#123524]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6m0-6l-6 6" />
        </svg>
      ),
    },
    {
      title: "Kerajinan Batok Kelapa",
      price: "sekitar Rp50.000",
      desc: "Mengolah batok menjadi benda dekoratif atau souvenir.",
      badge: "Perlu dikonfirmasi",
      badgeColor: "bg-[#D19B4C] text-white",
      icon: (
        <svg className="w-4 h-4 text-[#123524]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
        </svg>
      ),
    },
    {
      title: "Agrowisata Kampung",
      price: "sekitar Rp20.000",
      desc: "Menjelajah suasana kampung dan kawasan Batu Layang.",
      badge: "KULINER",
      badgeColor: "bg-[#A64B2A] text-white",
      icon: (
        <svg className="w-4 h-4 text-[#123524]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6m-4-6l2-4h3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="paket" className="relative w-full py-14 md:py-20 bg-tenun-green text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-8 md:mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-white font-normal tracking-tight">
            Paket Wisata Keterampilan
          </h2>
          <p className="mt-2.5 text-xs md:text-sm text-white/90 leading-relaxed font-sans">
            Semua angka di bawah merupakan kisaran informasi, bukan harga final. Konfirmasikan kembali jadwal, kapasitas peserta, durasi, dan biaya langsung kepada pengelola sebelum berkunjung.
          </p>
        </motion.div>

        {/* 6 Package Cards Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-[#E8E2DA] shadow-sm flex flex-col justify-between text-[#1C1A17]"
            >
              <div>
                {/* Header Row: Circle Icon + Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    {pkg.icon}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider ${pkg.badgeColor}`}>
                    {pkg.badge}
                  </span>
                </div>

                <h3 className="font-heading text-lg md:text-xl text-[#123524] mb-1 font-normal">
                  {pkg.title}
                </h3>

                <span className="text-[10px] text-[#6B726F] font-bold uppercase tracking-wider block mb-1">
                  Kisaran Informasi
                </span>

                <span className="font-heading text-xl md:text-2xl font-bold text-[#123524] tracking-tight block mb-2">
                  {pkg.price}
                </span>

                <p className="text-xs text-[#6B726F] leading-relaxed">
                  {pkg.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
