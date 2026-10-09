"use client";

import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   SECTION 3: TIMELINE (Lima Tonggak Perubahan 1928 - 2005) - Responsive
   ================================================ */

const timelineData = [
  {
    year: "1928",
    color: "#E53935",
    tag: "31 MARET",
    title: "Tonggak pertama",
    desc: "Ekspedisi internasional yang dipimpin ahli geografi Belanda tiba di Pontianak untuk menentukan titik atau tonggak garis khatulistiwa. Tugu pertama pun didirikan.",
  },
  {
    year: "1938",
    color: "#FB8C00",
    tag: "10 TAHUN KEMUDIAN",
    title: "Rancangan F. Silaban",
    desc: "Frederich Silaban mengembangkan bentuk dan makna tugu. Rancangan asli inilah yang masih dapat disaksikan di dalam monumen.",
  },
  {
    year: "1990",
    color: "#1F5A3C",
    tag: "RENOVASI",
    title: "Kubah pelindung",
    desc: "Tugu dikembangkan dengan bangunan kubah untuk menjaga struktur asli. Di atasnya didirikan duplikat berukuran lima kali lebih besar.",
  },
  {
    year: "1991",
    color: "#E53935",
    tag: "21 SEPTEMBER",
    title: "Peresmian",
    desc: "Kompleks hasil renovasi diresmikan oleh Gubernur Kalimantan Barat saat itu, Pardjoko Suryokusumo.",
  },
  {
    year: "2005",
    color: "#1F5A3C",
    tag: "MARET",
    title: "Pengukuran BPPT",
    desc: "Teknologi modern digunakan tim Badan Pengkajian dan Penerapan Teknologi untuk meneliti posisi tepat tugu saat ini.",
  },
];

export default function TuguTimelineSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-15 bg-brand-gold bg-[url('/images/Background.png')] bg-repeat bg-center diamond-pattern border-t border-border-default/40" id="linimasa">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        {/* Header: Title Left + Year Range Right */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-3 sm:gap-4 border-b border-brand-forest/20 pb-4 sm:pb-6">
          <ScrollAnimate direction="up">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-brand-forest">
              Lima tonggak perubahan
            </h2>
          </ScrollAnimate>
          <ScrollAnimate direction="left" delay={0.15}>
            <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-forest/80 font-normal tracking-wide">
              1928 — 2005
            </span>
          </ScrollAnimate>
        </div>

        {/* Timeline Horizontal Indicator Line */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[14px] left-0 right-0 h-[2px] bg-brand-forest/20 z-0" />

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative z-10">
            {timelineData.map((item, index) => (
              <ScrollAnimate key={index} direction="up" delay={index * 0.1}>
                <div className="bg-surface rounded-2xl p-5 sm:p-6 border border-border-default shadow-card flex flex-col h-full relative transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  {/* Top Color Line & Dot Indicator */}
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <div
                      className="h-1.5 w-10 sm:w-12 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>

                  {/* Year */}
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-txt-primary mb-1">
                    {item.year}
                  </h3>

                  {/* Tag */}
                  <span
                    className="font-sans text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-2 sm:mb-3 block"
                    style={{ color: item.color }}
                  >
                    {item.tag}
                  </span>

                  {/* Title */}
                  <h4 className="font-sans text-xs sm:text-sm md:text-base font-bold text-txt-primary mb-2">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="font-sans text-xs text-txt-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
