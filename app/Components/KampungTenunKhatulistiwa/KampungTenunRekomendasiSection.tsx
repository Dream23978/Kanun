"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function KampungTenunRekomendasiSection() {
  const products = [
    {
      title: "Songket Corak Insang Eksklusif",
      desc: "Kain tenun songket tenun tangan benang katun dan sutra dengan ragam variasi corak insang bernilai seni tinggi.",
      image: "/images/kampung-tenun-khatulistiwa/product_songket.jpg",
      badge: "Kerajinan Tangan",
    },
    {
      title: "Selendang Tenun Insang Halus",
      desc: "Selendang anggun dengan motif khas Pontianak, cocok untuk pelengkap busana formal maupun cenderamata istimewa.",
      image: "/images/kampung-tenun-khatulistiwa/product_selendang.jpg",
      badge: "Kain Tradisional",
    },
    {
      title: "Busana & Kemeja Tenun",
      desc: "Inovasi busana siap pakai berpadu tenun corak insang karya desainer lokal Pontianak.",
      image: "/images/kampung-tenun-khatulistiwa/product_fashion.jpg",
      badge: "Fashion Modern",
    },
  ];

  return (
    <section id="rekomendasi" className="relative w-full py-16 md:py-24 bg-tenun-yellow">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px] text-[#123524] font-normal tracking-tight">
            Rekomendasi oleh-oleh
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#1C1A17]/80 leading-relaxed font-sans">
            Bawa pulang keindahan karya penenun lokal sebagai cinderamata bernilai budaya tinggi, langsung dari sentra pengrajin.
          </p>
        </motion.div>

        {/* 3 Product Cards Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#FFFDF7] rounded-2xl overflow-hidden border border-[#E8E2DA] shadow-sm elevation-card-hover flex flex-col"
            >
              <div className="relative w-full h-[220px] bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#123524] text-white shadow-sm">
                    {item.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg md:text-xl text-[#123524] mb-2 font-normal">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B726F] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Accessories Split Showcase with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden shadow-sm border border-[#E8E2DA] bg-[#FFFDF7] grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Photo Side */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[340px]">
            <Image
              src="/images/kampung-tenun-khatulistiwa/product_accessories.jpg"
              alt="Koleksi Aksesoris & Suvenir Tenun Corak Insang"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#123524] text-white shadow-sm">
                Aksesoris &amp; Souvenir
              </span>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#A64B2A] text-white">
                Produk Kreatif UMKM
              </span>
            </div>

            <h3 className="font-heading text-2xl md:text-[26px] text-[#123524] mt-3 mb-3 leading-snug font-normal">
              Motif unik untuk keseharian
            </h3>

            <p className="text-xs md:text-sm text-[#6B726F] leading-relaxed mb-6 font-sans">
              Selain kain lembaran, pengrajin di Kampung Tenun menghasilkan beragam turunan produk kriya fungsional seperti tas selempang, dompet, sarung bantal, hingga suvenir cinderamata yang modis dan ramah kantong.
            </p>

            <div className="bg-[#1F5A3C]/10 border border-[#1F5A3C]/20 rounded-xl p-4 flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#1F5A3C] text-white flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xs text-[#123524] font-medium leading-relaxed">
                Setiap pembelian produk secara langsung mendukung keberlanjutan mata pencaharian penenun perempuan di Gang Sambas Jaya.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
