"use client";

import Image from "next/image";
import ScrollAnimate from "./ScrollAnimate";

/* ================================================
   DESTINASI SECTION - Grid 4 kolom kartu destinasi
   dengan gambar, deskripsi, dan link detail
   ================================================ */

// Data destinasi unggulan
const destinations = [
  {
    image: "/images/CardImage.png",
    category: "DESTINASI",
    title: "Tugu Khatulistiwa",
    desc: "Ikon bumi belahan utara dan selatan tepat di garis ekuator.",
    link: "#",
  },
  {
    image: "/images/Kampung Tenun.png",
    title: "Kampung Wisata Tenun (Kanun)",
    desc: "Kerajinan tenun tradisional motif corak insang khas melayu.",
    link: "#",
  },
  {
    image: "/images/makam.png",
    title: "Makam Kesultanan Batu Layang",
    desc: "Situs pemakaman bersejarah kesultanan Pontianak di tepian sungai.",
    link: "#",
  },
  {
    image: "/images/bukit.png",
    title: "Bukit Rel",
    desc: "Sisa sejarah jalur lori rute kuno dengan panorama alam hijau.",
    link: "#",
  },
];

export default function DestinasiSection() {
  return (
    <section className="py-20 px-6 md:px-15 bg-brand-gold diamond-pattern" id="destinasi">
      {/* Header: judul + deskripsi */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-10">
        <ScrollAnimate direction="up">
          <h2 className="font-serif text-4xl font-normal leading-11 text-brand-forest">Destinasi Pilihan Terbaik</h2>
        </ScrollAnimate>
        <ScrollAnimate direction="right" delay={0.15}>
          <p className="body-m text-[#313131] max-w-sm font-bold">
            Empat pilar pesona wisata Pontianak Utara yang merangkum sejarah dunia,
            kearifan lokal kerajinan tangan, hingga petualangan alam liar.
          </p>
        </ScrollAnimate>
      </div>

      {/* Grid kartu destinasi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="p-5 flex flex-col grow">
                <h3 className="heading-h3 text-txt-primary mb-2">{dest.title}</h3>
                <p className="body-s text-txt-secondary mb-4 grow">{dest.desc}</p>
                <a href={dest.link} className="body-s text-brand-forest no-underline font-semibold inline-flex items-center gap-1.5 transition-all duration-250 hover:gap-2.5 hover:text-brand-gold-deeper">Lihat Detail →</a>
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
}
