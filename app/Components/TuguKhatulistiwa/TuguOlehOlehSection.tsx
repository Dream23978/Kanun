"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION 5: REKOMENDASI OLEH-OLEH (Paling Akhir) - Responsive
   ================================================ */

const olehOlehData = [
  {
    badge: "KAIN TRADISIONAL",
    title: "Kain Corak Insang",
    desc: "Kain tenun bermotif sisik ikan yang menjadi ikon kain adat Melayu Pontianak. Kerap dipakai dalam upacara adat dan dijadikan cendera mata premium.",
    image: "/images/tenun.jpg",
  },
  {
    badge: "PRODUK ALAM",
    title: "Olahan Lidah Buaya",
    desc: "Pontianak dikenal sebagai sentra lidah buaya terbesar. Tersedia dalam bentuk minuman, dodol, keripik, hingga produk kecantikan lokal.",
    image: "/images/kampung-tenun-khatulistiwa/product_accessories.jpg",
  },
  {
    badge: "KUE TRADISIONAL",
    title: "Bingke",
    desc: "Kue lapis berbahan santan dan telur yang dipanggang dalam cetakan bunga. Tersedia dalam aneka rasa: pandan, ubi, dan keju.",
    image: "/images/HistoricalImage.png",
  },
  {
    badge: "CAMILAN KERING",
    title: "Amplang",
    desc: "Kerupuk ikan khas Kalimantan Barat yang gurih dan renyah. Dibuat dari ikan tenggiri pilihan, cocok sebagai oleh-oleh tahan lama.",
    image: "/images/aktivitas-ziarah.png",
  },
  {
    badge: "OLAHAN DURIAN",
    title: "Lempok Durian",
    desc: "Dodol durian pekat khas Kalimantan Barat dengan aroma kuat dan rasa manis legit. Dibuat dari durian lokal pilihan tanpa bahan pengawet.",
    image: "/images/bansa.png",
  },
];

export default function TuguOlehOlehSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-15 bg-tenun-green border-t border-border-forest-dark" id="oleholeh">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        {/* Section Header */}
        <ScrollAnimate direction="up">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-normal text-white mb-2 sm:mb-3">
              Rekomendasi oleh-oleh
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-normal">
              Bawa pulang sepotong Pontianak—dari kain tradisional bermotif insang hingga cita rasa khas yang sulit ditemukan di tempat lain.
            </p>
          </div>
        </ScrollAnimate>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {olehOlehData.map((item, index) => (
            <ScrollAnimate key={index} direction="up" delay={index * 0.1}>
              <div className="bg-[#17382B] rounded-2xl sm:rounded-3xl overflow-hidden border border-border-forest-dark/80 shadow-card flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover group">
                {/* Image & Badge Container */}
                <div className="relative w-full aspect-4/3 overflow-hidden bg-black/20">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge */}
                  <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3">
                    <span className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-[#12241B]/90 text-brand-gold backdrop-blur-xs border border-brand-gold/20 shadow-xs">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col justify-between grow">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-white mb-1.5 sm:mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-white/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
