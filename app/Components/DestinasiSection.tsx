"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollAnimate from "./ScrollAnimate";

/* ================================================
   DESTINASI SECTION - Grid 4 kolom kartu destinasi (Responsive)
   ================================================ */

const destinations = [
  {
    image: "/images/CardImage.png",
    category: "DESTINASI",
    title: "Tugu Khatulistiwa",
    desc: "Ikon bumi belahan utara dan selatan tepat di garis ekuator.",
    link: "/destinasi/tugu",
  },
  {
    image: "/images/Kampung Tenun.png",
    title: "Kampung Wisata Tenun (Kanun)",
    desc: "Kerajinan tenun tradisional motif corak insang khas melayu.",
    link: "/destinasi/kanun",
  },
  {
    image: "/images/makam.png",
    title: "Makam Kesultanan Batu Layang",
    desc: "Situs pemakaman bersejarah kesultanan Pontianak di tepian sungai.",
    link: "/destinasi/makam",
  },
  {
    image: "/images/bukit.png",
    title: "Bukit Rel",
    desc: "Sisa sejarah jalur lori rute kuno dengan panorama alam hijau.",
    link: "/destinasi/bukit-rel",
  },
];

export default function DestinasiSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-15 bg-brand-gold diamond-pattern" id="destinasi">
      {/* Header: judul + deskripsi */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-10 gap-4 sm:gap-10">
        <ScrollAnimate direction="up">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-brand-forest">Destinasi Pilihan Terbaik</h2>
        </ScrollAnimate>
        <ScrollAnimate direction="right" delay={0.15}>
          <p className="font-sans text-xs sm:text-sm md:text-base text-txt-primary max-w-sm font-bold leading-relaxed">
            Empat pilar pesona wisata Pontianak Utara yang merangkum sejarah dunia,
            kearifan lokal kerajinan tangan, hingga petualangan alam liar.
          </p>
        </ScrollAnimate>
      </div>

      {/* Grid kartu destinasi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {destinations.map((dest, i) => (
          <ScrollAnimate key={i} direction="up" delay={i * 0.12}>
            <div className="bg-surface rounded-20 overflow-hidden border border-border-default shadow-card transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-card-hover group h-full">
              {/* Gambar destinasi */}
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
              </div>
              {/* Info destinasi */}
              <div className="p-4 sm:p-5 flex flex-col grow">
                <h3 className="font-serif text-lg sm:text-xl font-normal text-txt-primary mb-2">{dest.title}</h3>
                <p className="font-sans text-xs sm:text-sm text-txt-secondary mb-4 grow leading-relaxed">{dest.desc}</p>
                <Link href={dest.link} className="font-sans text-xs sm:text-sm text-brand-forest no-underline font-semibold inline-flex items-center gap-1.5 transition-all duration-250 hover:gap-2.5 hover:text-brand-gold-deeper">Lihat Detail →</Link>
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
}
