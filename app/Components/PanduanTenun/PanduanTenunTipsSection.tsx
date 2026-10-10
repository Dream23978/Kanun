"use client";

import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   PANDUAN KAMPUNG TENUN - TIPS & INFO PRAKTIS SECTION
   ================================================ */

interface TipItem {
  title: string;
  italicWord?: string;
  desc: string;
}

export default function PanduanTenunTipsSection() {
  const tipsData: TipItem[] = [
    {
      title: "Ikut Kelas Keterampilan",
      desc: "Sayang banget kan kalau cuma jadi penonton? Di sini kamu bisa cobain pengalaman seru kayak Belajar Menenun (~Rp150.000), Belajar Merajut (~Rp100.000), sampai bikin Kerajinan Batok Kelapa (~Rp50.000).",
    },
    {
      title: "Reservasi Kelas",
      desc: "Nah, buat masukin kelas ini ke agendamu, kamu wajib banget reservasi dulu! Harga di atas itu baru kisaran awal ya. Langsung aja hubungi CP Reservasi: 08xx-xxxx-xxxx buat mastiin jadwal, kuota peserta, dan total biayanya sebelum kamu datang.",
    },
    {
      title: "Borong Oleh-oleh Lokal",
      desc: "Sebelum balik, wajib mampir ke kios galeri dan suvenirnya. Ada kain Songket, Tenun Corak Insang andalan Pontianak, baju ready-to-wear, sampai tas dan dompet etnik yang cocok banget buat dipakai hangout.",
    },
    {
      title: "Menginap di ",
      italicWord: "Homestay",
      desc: "Kalau pengen ngerasain pengalaman yang lebih deep, kamu bisa nginep di homestay (rumah warga setempat) biar bisa membaur dan belajar langsung bareng keluarga perajin lokal.",
    },
    {
      title: "Fasilitas",
      desc: "Area ini memiliki fasilitas berupa balai pertemuan, kios galeri & suvenir, area parkir, toilet umum, musholla, serta akses Wi-Fi.",
    },
  ];

  return (
    <section className="relative w-full pb-20 sm:pb-28 px-4 sm:px-6 md:px-12 lg:px-15 batik-pattern" id="tips-info-tenun">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Section Title with Bullet and Underline Line */}
        <ScrollAnimate direction="up" delay={0.1}>
          <div className="mb-8 sm:mb-10 inline-block border-b-2 border-white/20 pb-2">
            <h2 className="font-serif italic text-2xl sm:text-4xl md:text-5xl font-normal text-white flex items-center gap-2 sm:gap-3">
              <span className="text-white font-sans not-italic">&bull;</span>
              <span>Tips &amp; Info Praktis</span>
            </h2>
          </div>
        </ScrollAnimate>

        {/* Cream Card Container */}
        <ScrollAnimate direction="up" delay={0.25} className="w-full">
          <div className="bg-[#FFFDF7] rounded-2xl sm:rounded-3xl md:rounded-[32px] p-6 sm:p-10 md:p-12 shadow-2xl border border-brand-forest/15">
            <div className="space-y-6 sm:space-y-8">
              {tipsData.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  {/* Bullet Dot */}
                  <span className="text-xl sm:text-2xl font-bold text-txt-primary mt-0.5 leading-none shrink-0">
                    &bull;
                  </span>

                  <div className="flex flex-col">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-txt-primary mb-1.5 sm:mb-2 leading-snug">
                      {item.title}
                      {item.italicWord && (
                        <span className="italic font-serif">{item.italicWord}</span>
                      )}
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
