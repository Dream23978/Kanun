/* ================================================
   TEAM SECTION - Grid 5x2 kartu anggota tim
   dengan foto placeholder dan nama/role
   ================================================ */

// Data anggota tim
const teamMembers = [
  { name: "Sore", role: "Lorem Ipsum" },
  { name: "??????", role: "Lorem Ipsum" },
  { name: "??????", role: "Lorem Ipsum" },
  { name: "???????", role: "UI/UX Designer" },
  { name: "??????", role: "Lorem Ipsum" },
  { name: "Sore", role: "Lorem Ipsum" },
  { name: "??????", role: "Lorem Ipsum" },
  { name: "??????", role: "Lorem Ipsum" },
  { name: "??????", role: "Lorem Ipsum" },
  { name: "??????", role: "Lorem Ipsum" },
];

export default function TeamSection() {
  return (
    <section className="team-section" id="tim">
      {/* Judul section */}
      <h2 className="section-title">Orang-Orang di Balik Kanun 5.0</h2>

      {/* Grid kartu tim */}
      <div className="team-grid">
        {teamMembers.map((member, i) => (
          <div className="team-card" key={i}>
            {/* Area foto (placeholder kosong) */}
            <div className="team-card-photo" />
            {/* Nama dan role */}
            <div className="team-card-info">
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
