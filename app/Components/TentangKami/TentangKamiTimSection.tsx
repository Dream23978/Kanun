"use client";

import ScrollAnimate from "../ScrollAnimate";

/* ================================================
   TENTANG KAMI - TIM & ORANG DI BALIK KANUN 5.0
   ================================================ */

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
}

export default function TentangKamiTimSection() {
  const teamMembers: TeamMember[] = [
    { id: 1, name: "??????", role: "Lorem Ipsum" },
    { id: 2, name: "??????", role: "Lorem Ipsum" },
    { id: 3, name: "??????", role: "Lorem Ipsum" },
    { id: 4, name: "????????", role: "UI/UX Designer" },
    { id: 5, name: "??????", role: "Lorem Ipsum" },
    { id: 6, name: "Sore", role: "Lorem Ipsum" },
    { id: 7, name: "??????", role: "Lorem Ipsum" },
    { id: 8, name: "??????", role: "Lorem Ipsum" },
    { id: 9, name: "??????", role: "Lorem Ipsum" },
    { id: 10, name: "??????", role: "Lorem Ipsum" },
  ];

  return (
    <section
      className="relative w-full pt-4 sm:pt-6 pb-16 sm:pb-24 md:pb-28 px-4 sm:px-6 md:px-12 lg:px-15 bg-tenun-yellow overflow-hidden"
      id="orang-di-balik-kanun"
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Section Heading */}
        <ScrollAnimate direction="up" delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-forest mb-8 sm:mb-12 leading-tight">
            Orang-Orang di Balik Kanun 5.0
          </h2>
        </ScrollAnimate>

        {/* Responsive Grid: 2 cols on mobile, 3 cols on sm, 4 cols on md, 5 cols on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {teamMembers.map((member, index) => (
            <ScrollAnimate
              key={member.id}
              direction="up"
              delay={0.1 + (index % 5) * 0.05}
              className="h-full"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8E2DA]/80 flex flex-col h-full hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group">
                {/* Photo Placeholder Area */}
                <div className="w-full aspect-square bg-[#F2EDE4] flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#EAE4D8]">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center text-brand-forest/30">
                      <svg
                        className="w-5 h-5 text-brand-forest/40"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="p-3.5 sm:p-4 flex flex-col justify-center bg-white grow">
                  <h3 className="font-serif font-bold text-sm sm:text-base text-brand-forest leading-snug mb-1 group-hover:text-brand-forest-hover transition-colors">
                    {member.name}
                  </h3>
                  <p className="font-sans text-[11px] sm:text-xs text-txt-secondary leading-tight">
                    {member.role}
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
