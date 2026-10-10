"use client";

import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   PANDUAN TUGU KHATULISTIWA - TIPS & INFO PRAKTIS SECTION
   ================================================ */

export default function PanduanTuguTipsSection() {
  const tipsData = [
    {
      title: "Jam Operasional & Tiket",
      desc: "Buka setiap hari pukul 08.00–16.00 WIB. Tiket masuknya sangat terjangkau, hanya Rp5.000/orang",
    },
    {
      title: "Waktu & Cuaca",
      desc: "Karena lokasinya tepat di garis khatulistiwa, sebaiknya datang pagi atau sore agar tidak kepanasan. Jangan lupa bawa pelindung matahari, air minum, dan payung untuk jaga-jaga hujan tropis.",
    },
    {
      title: "Momen Kulminasi",
      desc: "Saksikan fenomena alam langka Hari Tanpa Bayangan di Tugu Khatulistiwa Pontianak setiap tanggal 21–23 Maret dan 21–23 September. Momen unik ini dirayakan melalui Festival Pesona Kulminasi Matahari yang meriah dengan pentas seni budaya dan edukasi astronomi. Jangan lewatkan keseruan tradisi mendirikan telur yang hanya bisa berdiri tegak secara alami saat matahari berada tepat di atas kepala.",
    },
    {
      title: "Fasilitas & Etika",
      desc: "Area ini dilengkapi parkir, toilet, dan ruang informasi. Selalu jaga kebersihan, patuhi rambu, dan ikuti arahan petugas jika sedang ada acara khusus.",
    },
  ];

  return (
    <section className="relative w-full pb-20 sm:pb-28 px-4 sm:px-6 md:px-12 lg:px-15 batik-pattern" id="tips-info-praktis">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Section Title with Bullet */}
        <ScrollAnimate direction="up" delay={0.1}>
          <div className="mb-8 sm:mb-10 inline-block border-b-2 border-white/20 pb-2">
            <h2 className="font-serif italic text-2xl sm:text-4xl md:text-5xl font-normal text-white flex items-center gap-2 sm:gap-3">
              <span className="text-brand-gold font-sans not-italic">&bull;</span>
              <span>Tips &amp; Info Praktis</span>
            </h2>
          </div>
        </ScrollAnimate>

        {/* Cream Card Container */}
        <ScrollAnimate direction="up" delay={0.25} className="w-full">
          <div className="bg-[#FFFDF7] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-brand-forest/15">
            <div className="space-y-6 sm:space-y-8">
              {tipsData.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  {/* Bullet Dot */}
                  <span className="text-xl sm:text-2xl font-bold text-txt-primary mt-0.5 leading-none shrink-0">
                    &bull;
                  </span>

                  <div className="flex flex-col">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-txt-primary mb-1 sm:mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm md:text-base text-txt-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
