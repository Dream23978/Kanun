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
    <section className="destinasi-section diamond-pattern" id="destinasi">
      {/* Header: judul + deskripsi */}
      <div className="destinasi-header">
        <h2 className="section-title">Destinasi Pilihan Terbaik</h2>
        <p className="section-desc">
          Empat pilar pesona wisata Pontianak Utara yang merangkum sejarah dunia,
          kearifan lokal kerajinan tangan, hingga petualangan alam liar.
        </p>
      </div>

      {/* Grid kartu destinasi */}
      <div className="destinasi-grid">
        {destinations.map((dest, i) => (
          <div className="destinasi-card" key={i}>
            {/* Gambar destinasi + badge kategori */}
            <div className="destinasi-card-img">
              <span className={`destinasi-card-badge badge ${dest.badgeClass}`}>
                {dest.category}
              </span>
              <Image
                src={dest.image}
                alt={dest.title}
                width={400}
                height={300}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {/* Info destinasi */}
            <div className="destinasi-card-body">
              <h3>{dest.title}</h3>
              <p>{dest.desc}</p>
              <a href={dest.link}>Lihat Detail →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
