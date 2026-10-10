"use client";

import Image from "next/image";
import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   TENTANG KAMI - LATAR BELAKANG & VISI MISI SECTION
   ================================================ */

export default function TentangKamiVisiMisiSection() {
  const focusItems = [
    {
      title: "Pelestarian Budaya",
      desc: "Kain Tenun Corak Insang & Situs Bersejarah — menjaga warisan agar terus dikenal dan diwariskan.",
      icon: (
        <svg
          className="w-5 h-5 text-brand-forest"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 3h12" />
          <path d="M6 21h12" />
          <path d="M7 3l5 9-5 9" />
          <path d="M17 3l-5 9 5 9" />
        </svg>
      ),
    },
    {
      title: "Penguatan Ekonomi Lintas Komunitas",
      desc: "Membuka ruang kolaborasi bagi pengrajin, UMKM, pengelola wisata, dan masyarakat lokal.",
      icon: (
        <svg
          className="w-5 h-5 text-brand-forest"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Wisata Berkelanjutan & Edukasi",
      desc: "Mengajak pengunjung belajar, menghormati budaya, dan merawat lingkungan bersama warga.",
      icon: (
        <svg
          className="w-5 h-5 text-brand-forest"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22v-9" />
          <path d="M12 13a5 5 0 0 1 5-5h2v2a5 5 0 0 1-5 5h-2z" />
          <path d="M12 13a5 5 0 0 0-5-5H5v2a5 5 0 0 0 5 5h2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-15 bg-tenun-yellow overflow-hidden"
      id="visi-misi"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Kolom Kiri: Foto Menenun & Quote Banner (5 cols di desktop) */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollAnimate direction="up" delay={0.15}>
              {/* Photo Frame Container */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-sm border border-[#E8E2DA]/80">
                <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src="/images/menenun_visimisi.png"
                    alt="Aktivitas perajin menenun kain tradisional di Pontianak Utara"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Caption di bawah foto */}
              <p className="font-sans text-[11px] sm:text-xs text-[#6B726F] mt-2.5 px-1">
                Ilustrasi aktivitas menenun &bull; bukan dokumentasi program
              </p>

              {/* Quote Highlight Box */}
              <div className="bg-[#E3ECE6] rounded-xl sm:rounded-2xl p-4 sm:p-5 mt-4 border border-[#CADAD0]/60">
                <p className="font-sans font-bold italic text-xs sm:text-sm text-brand-forest leading-relaxed">
                  Warisan terjaga, warga berdaya. Pariwisata tumbuh bersama komunitas.
                </p>
              </div>
            </ScrollAnimate>
          </div>

          {/* Kolom Kanan: Judul, Deskripsi & 3 Fokus Visi Misi (7 cols di desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <ScrollAnimate direction="up" delay={0.2}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-forest mb-4 sm:mb-6 leading-tight">
                Latar Belakang &amp; Visi Misi
              </h2>

              <p className="font-sans text-xs sm:text-sm md:text-base text-txt-primary/90 leading-relaxed mb-4 font-normal">
                Kanun 5.0 hadir sebagai wadah penggerak potensi pariwisata dan kebudayaan Pontianak Utara. Inisiatif ini mempertemukan komunitas lokal, pengrajin, dan pegiat wisata agar cerita, karya, serta destinasi daerah semakin dikenal.
              </p>

              <p className="font-sans text-xs sm:text-sm md:text-base text-txt-primary/90 leading-relaxed mb-6 sm:mb-8 font-normal">
                Visi kami adalah pariwisata yang menjaga warisan budaya dan memberi ruang bagi masyarakat untuk tumbuh. Misi ini diwujudkan melalui tiga fokus yang saling menguatkan.
              </p>
            </ScrollAnimate>

            {/* 3 Kartu Fokus Visi Misi */}
            <div className="space-y-3.5 sm:space-y-4">
              {focusItems.map((item, idx) => (
                <ScrollAnimate key={item.title} direction="up" delay={0.25 + idx * 0.1}>
                  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-[#E8E2DA]/80 flex items-start gap-3.5 sm:gap-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300">
                    {/* Icon Container */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#F4EFEA] flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>

                    {/* Text Container */}
                    <div className="flex flex-col">
                      <h3 className="font-sans font-bold text-sm sm:text-base text-txt-primary mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-txt-secondary leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
