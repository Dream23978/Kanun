import Image from "next/image";

/* ================================================
   IMPACT SECTION - Info program CSR Pertamina
   dengan logo, teks, dan gambar kegiatan
   ================================================ */

export default function ImpactSection() {
  return (
    <section className="py-20 px-6 md:px-[60px] diamond-pattern" id="impact">
      {/* Judul section */}
      <h2 className="font-serif text-4xl font-normal leading-[44px] mb-10 text-brand-forest">
        Pertamina <em className="italic text-brand-gold-deeper">Impact:</em>
        <br />
        Pemberdayaan Masyarakat &amp; Pengembangan Wisata
      </h2>

      {/* Kartu impact utama */}
      <div className="bg-brand-forest border border-border-default rounded-3xl shadow-card p-10 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 items-center">
        {/* Logo Pertamina */}
        <div className="w-16 shrink-0">
          <img
            src="/images/Logo pertamina.png"
            alt="Logo Pertamina"
            className="w-[60px] h-auto object-contain"
          />
        </div>

        {/* Konten teks */}
        <div className="flex flex-col">
          <h3 className="font-serif text-[22px] leading-[30px] font-normal text-white mb-3 max-w-[520px]">
            Membangun ekosistem pariwisata berkelanjutan bersama masyarakat
            Pontianak Utara.
          </h3>
          <p className="body-m text-brand-forest max-w-[520px]">
            Melalui program CSR Pertamina, Kanun 5.0 memperkuat kapasitas
            pengrajin tenun, meningkatkan kualitas destinasi ikonik, dan
            mengembangkan rute perjalanan yang lebih inklusif bagi wisatawan dan
            komunitas lokal.
          </p>
        </div>

        {/* Gambar kegiatan CSR */}
        <div className="w-full md:w-[220px] rounded-16 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
          <Image
            src="/images/pertamina-csr.png"
            alt="Program CSR Pertamina"
            width={200}
            height={150}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
