import Image from "next/image";

/* ================================================
   IMPACT SECTION - Info program CSR Pertamina
   dengan logo, teks, dan gambar kegiatan
   ================================================ */

export default function ImpactSection() {
  return (
    <section className="impact-section diamond-pattern" id="impact">
      {/* Judul section */}
      <h2 className="section-title">
        Pertamina <em>Impact:</em>
        <br />
        Pemberdayaan Masyarakat &amp; Pengembangan Wisata
      </h2>

      {/* Kartu impact utama */}
      <div className="impact-card">
        {/* Logo Pertamina */}
        <div className="impact-logo">
          <img
            src="/images/Logo pertamina.png"
            alt="Logo Pertamina"
            style={{ width: "60px", height: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Konten teks */}
        <div className="impact-body">
          <h3>
            Membangun ekosistem pariwisata berkelanjutan bersama masyarakat
            Pontianak Utara.
          </h3>
          <p>
            Melalui program CSR Pertamina, Kanun 5.0 memperkuat kapasitas
            pengrajin tenun, meningkatkan kualitas destinasi ikonik, dan
            mengembangkan rute perjalanan yang lebih inklusif bagi wisatawan dan
            komunitas lokal.
          </p>
        </div>

        {/* Gambar kegiatan CSR */}
        <div className="impact-image">
          <Image
            src="/images/pertamina-csr.png"
            alt="Program CSR Pertamina"
            width={200}
            height={150}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
