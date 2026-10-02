"use client";

import ScrollAnimate from "./ScrollAnimate";

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
    <section className="py-20 px-6 md:px-15 bg-brand-gold bg-[url('/images/Background.png')] bg-repeat bg-center text-white" id="tim">
      {/* Judul section */}
      <ScrollAnimate direction="left">
        <h2 className="font-serif text-4xl font-normal leading-11 mb-10 text-brand-forest">Orang-Orang di Balik Kanun 5.0</h2>
      </ScrollAnimate>

      {/* Grid kartu tim */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {teamMembers.map((member, i) => (
          <ScrollAnimate key={i} direction="up" delay={i * 0.06}>
            <div className="bg-surface border border-border-default rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              {/* Area foto (placeholder kosong) */}
              <div className="w-full aspect-square bg-subtle" />
              {/* Nama dan role */}
              <div className="p-3.5">
                <h4 className="font-sans text-sm font-bold text-txt-primary mb-0.5">{member.name}</h4>
                <p className="font-sans text-xs text-txt-secondary">{member.role}</p>
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
}
