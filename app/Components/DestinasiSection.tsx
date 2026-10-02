import Image from "next/image";

/* ================================================
   DESTINASI SECTION - Grid 4 kolom kartu destinasi
   dengan gambar, deskripsi, dan link detail
   ================================================ */

// Data destinasi unggulan
const destinations = [
  {
    image: "/images/dest-tugu-khatulistiwa.png",
    category: "DESTINASI",
    badgeClass: "badge-destinasi",
    title: "Tugu Khatulistiwa",
    desc: "Ikon bumi belahan utara dan selatan tepat di garis ekuator.",
    link: "#",
  },
  {
    image: "/images/dest-kampung-tenun.png",
    category: "ATRAKSI",
    badgeClass: "badge-atraksi",
    title: "Kampung Wisata Tenun (Kanun)",
    desc: "Kerajinan tenun tradisional motif corak insang khas melayu.",
    link: "#",
  },
  {
    image: "/images/dest-makam-batu.png",
    category: "SEJARAH",
    badgeClass: "badge-sejarah",
    title: "Makam Kesultanan Batu Layang",
    desc: "Situs pemakaman bersejarah kesultanan Pontianak di tepian sungai.",
    link: "#",
  },
  {
    image: "/images/dest-bukit-rel.png",
    category: "ATRAKSI",
    badgeClass: "badge-atraksi",
    title: "Bukit Rel",
    desc: "Sisa sejarah jalur lori rute kuno dengan panorama alam hijau.",
    link: "#",
  },
];

export default function DestinasiSection() {
  return (
    <section className="py-20 px-6 md:px-[60px] bg-brand-gold diamond-pattern" id="destinasi">
      {/* Header: judul + deskripsi */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-10">
        <h2 className="font-serif text-4xl font-normal leading-[44px] text-brand-forest">Destinasi Pilihan Terbaik</h2>
        <p className="body-m text-surface-inverse/85 max-w-[420px]">
          Empat pilar pesona wisata Pontianak Utara yang merangkum sejarah dunia,
          kearifan lokal kerajinan tangan, hingga petualangan alam liar.
        </p>
      </div>

      {/* Grid kartu destinasi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((dest, i) => (
          <div className="bg-surface rounded-20 overflow-hidden border border-border-default shadow-card transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-card-hover group" key={i}>
            {/* Gambar destinasi */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={dest.image}
                alt={dest.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
              />
            </div>
            {/* Info destinasi */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="heading-h3 text-txt-primary mb-2">{dest.title}</h3>
              <p className="body-s text-txt-secondary mb-4 flex-grow">{dest.desc}</p>
              <a href={dest.link} className="body-s text-brand-forest no-underline font-semibold inline-flex items-center gap-1.5 transition-all duration-250 hover:gap-2.5 hover:text-brand-gold-deeper">Lihat Detail →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
