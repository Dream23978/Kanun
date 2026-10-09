"use client";

import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   PANDUAN TUGU KHATULISTIWA - RUTE & AKSES SECTION
   ================================================ */

export default function PanduanTuguRuteSection() {
  return (
    <section className="relative w-full pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 lg:px-15 batik-pattern" id="rute-akses">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Section Header */}
        <ScrollAnimate direction="up" delay={0.1}>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-white mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
            <span className="text-brand-gold font-sans">&bull;</span>
            <span>Rute &amp; Akses Menuju Lokasi</span>
          </h2>

          <p className="font-sans text-xs sm:text-base md:text-lg text-white/90 font-semibold mb-8 sm:mb-12 leading-relaxed">
            Alamat: Jl. Khatulistiwa, Kel. Batu Layang, Kec. Pontianak Utara (&plusmn;9&ndash;11 km dari pusat Kota Pontianak).
          </p>
        </ScrollAnimate>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Kendaraan Pribadi / Ojek Online */}
          <ScrollAnimate direction="up" delay={0.15} className="h-full">
            <div className="bg-[#FFFDF7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-forest/15 h-full flex flex-col justify-start hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-forest mb-4 sm:mb-6 leading-tight">
                Kendaraan Pribadi/<br className="hidden sm:inline" /> Ojek Online
              </h3>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-txt-primary leading-relaxed">
                <div>
                  <p className="font-bold text-brand-forest mb-1">
                    1. Dari Pusat Kota Pontianak (&plusmn;20&ndash;30 menit):
                  </p>
                  <p className="text-txt-secondary">
                    Arahkan kendaraan melintasi Jembatan Kapuas I ke arah Siantan, lalu ikuti jalur utama Jl. Gusti Situt Mahmud lurus menyambung ke Jl. Khatulistiwa. Tugu berada tepat di sisi kiri jalan.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-brand-forest mb-1">
                    2. Dari Bandara Supadio (&plusmn;45&ndash;60 menit):
                  </p>
                  <p className="text-txt-secondary">
                    Ambil rute Jl. Arteri Supadio belok ke arah Jl. Mayor Alianyang menuju Jembatan Kapuas II / Trans Kalimantan, lalu belok menuju Jl. Khatulistiwa arah Batu Layang.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card 2: Transportasi Umum */}
          <ScrollAnimate direction="up" delay={0.25} className="h-full">
            <div className="bg-[#FFFDF7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-forest/15 h-full flex flex-col justify-start hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-forest mb-4 sm:mb-6 leading-tight">
                Transportasi Umum
              </h3>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-txt-primary leading-relaxed">
                <div>
                  <p className="font-bold text-brand-forest mb-1">
                    1. Angkutan Kota (Oplet):
                  </p>
                  <p className="text-txt-secondary">
                    Naik angkot trayek Siantan &ndash; Jungkat/Batu Layang (biasanya angkot berwarna biru/kuning dari arah Siantan) dan minta turun langsung di depan gerbang kawasan Tugu Khatulistiwa.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-brand-forest mb-1">
                    2. Bus Antarkota:
                  </p>
                  <p className="text-txt-secondary">
                    Bus rute Pontianak &ndash; Mempawah / Singkawang / Sambas (dari Terminal ALBN Ambawang atau jalur Siantan) melintasi Jl. Khatulistiwa dan bisa berhenti tepat di depan lokasi.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimate>

          {/* Card 3: Transportasi Sungai */}
          <ScrollAnimate direction="up" delay={0.35} className="h-full">
            <div className="bg-[#FFFDF7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-forest/15 h-full flex flex-col justify-start hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-forest mb-4 sm:mb-6 leading-tight">
                Transportasi Sungai
              </h3>

              <div className="font-sans text-xs sm:text-sm text-txt-primary leading-relaxed">
                <p className="text-txt-secondary">
                  <strong className="font-bold text-brand-forest">Ingin pengalaman beda?</strong> Naik kapal motor/ sampan klotok wisata dari tepian Sungai Kapuas (kawasan Alun-Alun Kapuas) menyusuri sungai langsung menuju dermaga tepian Tugu Khatulistiwa.
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
