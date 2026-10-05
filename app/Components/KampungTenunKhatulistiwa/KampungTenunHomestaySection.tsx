"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function KampungTenunHomestaySection() {
  return (
    <section id="homestay" className="relative w-full py-14 md:py-20 bg-tenun-green text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-white font-normal tracking-tight">
            Homestay &amp; Penginapan
          </h2>
          <p className="mt-2.5 text-xs md:text-sm text-white/90 leading-relaxed font-sans">
            Pengalaman menginap berbasis komunitas membuat wisatawan lebih dekat dengan keluarga perajin, sementara akses dari pusat kota tetap praktis untuk kunjungan singkat.
          </p>
        </motion.div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left Card: Homestay (6 cols) with Motion */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 rounded-2xl overflow-hidden shadow-sm flex flex-col bg-white border border-[#E8E2DA]"
          >
            <div className="relative w-full h-[260px] sm:h-[300px] bg-black">
              <Image
                src="/images/kampung-tenun-khatulistiwa/homestay_house.jpg"
                alt="Rumah Warga Sebagai Ruang Tinggal dan Belajar di Tepi Sungai"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-center text-[#1C1A17]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A64B2A] block mb-1.5">
                Community-Based Tourism
              </span>
              <h3 className="font-heading text-xl md:text-2xl text-[#123524] mb-2 font-normal">
                Rumah warga sebagai ruang tinggal dan belajar
              </h3>
              <p className="text-xs text-[#6B726F] leading-relaxed font-sans">
                Beberapa rumah warga disiapkan untuk menerima wisatawan yang ingin tinggal bersama keluarga perajin lokal. Sistem homestay memberi kesempatan merasakan ritme kampung dan kegiatan produksi dari dekat.
              </p>
            </div>
          </motion.div>

          {/* Right Card: Rute Dari Pusat Kota Pontianak (6 cols) with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#123524] rounded-2xl p-6 md:p-7 text-white border border-[#246144] shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D19B4C] block">
                  Rute dari Pusat Kota Pontianak
                </span>
                <svg className="w-4 h-4 text-[#D19B4C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-white mt-1 mb-5 font-normal">
                Menuju Batu Layang
              </h3>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-2.5 mb-6">
                <div className="bg-[#1F5A3C]/40 border border-[#246144] rounded-xl p-3 text-center">
                  <span className="font-heading text-lg font-bold text-white block">&plusmn;15 km</span>
                  <span className="text-[10px] text-white/70 block mt-0.5 leading-tight">jarak dari pusat kota</span>
                </div>
                <div className="bg-[#1F5A3C]/40 border border-[#246144] rounded-xl p-3 text-center">
                  <span className="font-heading text-lg font-bold text-white block">&plusmn;30 menit</span>
                  <span className="text-[10px] text-white/70 block mt-0.5 leading-tight">dengan sepeda motor</span>
                </div>
                <div className="bg-[#1F5A3C]/40 border border-[#246144] rounded-xl p-3 text-center">
                  <span className="font-heading text-lg font-bold text-white block">30–45 menit</span>
                  <span className="text-[10px] text-white/70 block mt-0.5 leading-tight">dengan kendaraan roda empat</span>
                </div>
              </div>

              {/* 3 Route Points */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1F5A3C] text-[#D19B4C] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Ikuti jalur utama Jalan Khatulistiwa</h4>
                    <p className="text-[11px] text-white/70">Arah Pontianak Utara menuju Kelurahan Batu Layang.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1F5A3C] text-[#D19B4C] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Pilihan penanda perjalanan</h4>
                    <p className="text-[11px] text-white/70">Melalui Jembatan Kapuas atau bergerak ke arah Tugu Khatulistiwa.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1F5A3C] text-[#D19B4C] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="9" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Waktu tempuh menyesuaikan lalu lintas</h4>
                    <p className="text-[11px] text-white/70">Sisihkan waktu tambahan pada jam sibuk dan akhir pekan.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Destination Pill */}
            <div className="bg-[#1F5A3C]/40 border border-[#246144] rounded-xl p-3 mt-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D19B4C] block mb-0.5">
                Tujuan
              </span>
              <p className="text-xs text-white/90 font-medium">
                Jl. Khatulistiwa, Gang Sambas Jaya, Batu Layang, Pontianak Utara
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Card: Butuh hotel komersial atau berbintang? with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 bg-white rounded-2xl p-5 border border-[#E8E2DA] shadow-sm flex items-start sm:items-center gap-4 text-[#1C1A17]"
        >
          <div className="w-10 h-10 rounded-full bg-[#D19B4C] text-[#123524] flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 7h-8v6H3V5H1v15h2v-3h18v3h2v-9a4 4 0 00-4-4zM7 13a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </div>
          <div>
            <h4 className="font-heading text-sm md:text-base font-semibold text-[#123524]">
              Butuh hotel komersial atau berbintang?
            </h4>
            <p className="text-xs text-[#6B726F] mt-0.5 leading-relaxed font-sans">
              Wisatawan biasanya menginap di pusat Kota Pontianak atau hotel terdekat di wilayah utara—seperti arah Singkawang atau sekitar Tugu Khatulistiwa—lalu melakukan perjalanan singkat ke kampung wisata.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
