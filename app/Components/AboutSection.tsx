import Image from "next/image";

/* ================================================
   ABOUT SECTION - "Menyusuri jejak masa lalu 
   Pontianak Utara" dengan gambar + feature cards
   ================================================ */

export default function AboutSection() {
  return (
    <section className="about-section batik-pattern" id="tentang">
      {/* Judul section */}
      <h2 className="section-title">
        Menyusuri jejak masa lalu Pontianak Utara
      </h2>

      <div className="about-content">
        {/* Kolom kiri: gambar Tugu dengan caption */}
        <div className="about-image-wrapper">
          <Image
            src="/images/tugu-about.png"
            alt="Tugu Khatulistiwa"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="about-image-caption">
            <span className="badge badge-destinasi" style={{ marginBottom: "8px" }}>
              DESTINASI
            </span>
            <h4>Tugu Khatulistiwa</h4>
            <p>
              Ikon garis ekuator yang menjadi simbol sejarah dan kebanggaan
              Pontianak Utara.
            </p>
          </div>
        </div>

        {/* Kolom kanan: deskripsi + 3 feature card */}
        <div className="about-right">
          {/* Paragraf deskripsi */}
          <p className="about-desc">
            Pontianak Utara menyimpan cerita penting sebagai titik nol derajat
            bumi. Di sini, Tugu Khatulistiwa menjadi penanda sejarah dunia,
            sementara Kampung Wisata Tenun (Kanun) menjaga kearifan lokal
            melalui motif tenun insang khas Melayu. Warisan budaya ini bukan
            hanya destinasi, melainkan jembatan antara masa lalu dan pengalaman
            wisata kontemporer.
          </p>

          {/* Card: Garis Nol Derajat */}
          <div className="feature-card">
            <div className="feature-icon">◎</div>
            <div>
              <h4>Garis Nol Derajat</h4>
              <p>Tugu Khatulistiwa sebagai penanda geografis yang ikonik.</p>
            </div>
          </div>

          {/* Card: Pusat Tenun Khas */}
          <div className="feature-card">
            <div className="feature-icon">⬡</div>
            <div>
              <h4>Pusat Tenun Khas</h4>
              <p>
                Kampung Tenun (Kanun) sebagai pusat kerajinan tenun tradisional.
              </p>
            </div>
          </div>

          {/* Card: Situs Bersejarah */}
          <div className="feature-card">
            <div className="feature-icon">⛩</div>
            <div>
              <h4>Situs Bersejarah</h4>
              <p>
                Mat Batu Layang dan Bukit Rel yang menyimpan kisah masa lampau.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
