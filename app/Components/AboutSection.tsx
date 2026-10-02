import Image from "next/image";

/* ================================================
   ABOUT SECTION - "Menyusuri jejak masa lalu 
   Pontianak Utara" dengan gambar + feature cards
   ================================================ */

export default function AboutSection() {
  return (
    <section className="py-20 px-6 md:px-[60px] text-white batik-pattern" id="tentang">
      {/* Judul section */}
      <h2 className="font-serif text-4xl font-normal leading-[44px] mb-10 max-w-[560px] text-white">
        Menyusuri jejak masa lalu Pontianak Utara
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Kolom kiri: gambar Tugu dengan caption */}
        <div className="relative rounded-20 overflow-hidden aspect-[3/4] max-h-[480px] border border-border-default/20 shadow-card">
          <Image
            src="/images/HistoricalImage.png"
            alt="Tugu Khatulistiwa"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-surface-inverse/95 to-transparent">
            <h4 className="label-m tracking-[2px] text-brand-gold mb-1.5">Tugu Khatulistiwa</h4>
            <p className="body-s text-white/85">
              Ikon garis ekuator yang menjadi simbol sejarah dan kebanggaan
              Pontianak Utara.
            </p>
          </div>
        </div>

        {/* Kolom kanan: deskripsi + 3 feature card */}
        <div className="flex flex-col gap-6">
          {/* Paragraf deskripsi */}
          <p className="font-sans text-[15px] leading-6 text-white/90">
            Pontianak Utara menyimpan cerita penting sebagai titik nol derajat
            bumi. Di sini, Tugu Khatulistiwa menjadi penanda sejarah dunia,
            sementara Kampung Wisata Tenun (Kanun) menjaga kearifan lokal
            melalui motif tenun insang khas Melayu. Warisan budaya ini bukan
            hanya destinasi, melainkan jembatan antara masa lalu dan pengalaman
            wisata kontemporer.
          </p>

          {/* Card: Garis Nol Derajat */}
          <div className="flex items-start gap-4 bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-16 p-5 transition-all duration-300 hover:bg-white/[0.14] hover:translate-x-1">
            <div className="w-11 h-11 min-w-[44px] bg-brand-gold rounded-full flex items-center justify-center text-lg text-white font-bold">◎</div>
            <div>
              <h4 className="font-sans text-[13px] font-bold tracking-[1.5px] uppercase text-brand-gold mb-1">Garis Nol Derajat</h4>
              <p className="body-s text-white/80">Tugu Khatulistiwa sebagai penanda geografis yang ikonik.</p>
            </div>
          </div>

          {/* Card: Pusat Tenun Khas */}
          <div className="flex items-start gap-4 bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-16 p-5 transition-all duration-300 hover:bg-white/[0.14] hover:translate-x-1">
            <div className="w-11 h-11 min-w-[44px] bg-brand-gold rounded-full flex items-center justify-center text-lg text-white font-bold">⬡</div>
            <div>
              <h4 className="font-sans text-[13px] font-bold tracking-[1.5px] uppercase text-brand-gold mb-1">Pusat Tenun Khas</h4>
              <p className="body-s text-white/80">
                Kampung Tenun (Kanun) sebagai pusat kerajinan tenun tradisional.
              </p>
            </div>
          </div>

          {/* Card: Situs Bersejarah */}
          <div className="flex items-start gap-4 bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-16 p-5 transition-all duration-300 hover:bg-white/[0.14] hover:translate-x-1">
            <div className="w-11 h-11 min-w-[44px] bg-brand-gold rounded-full flex items-center justify-center text-lg text-white font-bold">⛩</div>
            <div>
              <h4 className="font-sans text-[13px] font-bold tracking-[1.5px] uppercase text-brand-gold mb-1">Situs Bersejarah</h4>
              <p className="body-s text-white/80">
                Mat Batu Layang dan Bukit Rel yang menyimpan kisah masa lampau.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
