"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

/* ================================================
   NAVBAR - Navigasi utama fixed di atas dengan 
   dropdown Destinasi & Panduan Wisata (Responsive)
   ================================================ */

// Data items dropdown Destinasi
const destinationItems = [
  {
    name: "Tugu Khatulistiwa",
    desc: "Ikon ekuator belahan bumi",
    href: "/destinasi/tugu",
    icon: (
      <svg className="w-4 h-4 text-brand-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    name: "Kampung Tenun",
    desc: "Kerajinan tenun corak insang",
    href: "/destinasi/kanun",
    icon: (
      <svg className="w-4 h-4 text-brand-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    name: "Makam Batu Layang",
    desc: "Situs bersejarah Kesultanan",
    href: "/destinasi/makam",
    icon: (
      <svg className="w-4 h-4 text-brand-forest" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-3 0-5 2.5-5 6v8h10V9c0-3.5-2-6-5-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
      </svg>
    ),
  },
  {
    name: "Bukit Rel",
    desc: "Wisata alam & sejarah lori",
    href: "/destinasi/bukit-rel",
    icon: (
      <svg className="w-4 h-4 text-brand-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 20l7-10 4 5 7-9" />
      </svg>
    ),
  },
];

// Data items dropdown Panduan Wisata untuk semua destinasi
const panduanItems = [
  {
    name: "Panduan Tugu Khatulistiwa",
    desc: "Titik kulminasi, sertifikat & akses",
    href: "/destinasi/tugu#atraksi",
    icon: (
      <svg className="w-4 h-4 text-brand-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    name: "Panduan Kampung Tenun",
    desc: "Workshop menenun & homestay warga",
    href: "/destinasi/kanun#atraksi",
    icon: (
      <svg className="w-4 h-4 text-brand-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    name: "Panduan Makam Batu Layang",
    desc: "Etika ziarah, rute gapura & silsilah",
    href: "/destinasi/makam#etika",
    icon: (
      <svg className="w-4 h-4 text-brand-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3c-3 0-5 2.5-5 6v8h10V9c0-3.5-2-6-5-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
      </svg>
    ),
  },
  {
    name: "Panduan Bukit Rel",
    desc: "Akses hiking, camping & gardu pandang",
    href: "/destinasi/bukit-rel#fasilitas",
    icon: (
      <svg className="w-4 h-4 text-brand-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 20l7-10 4 5 7-9" />
      </svg>
    ),
  },
];

const mainLinks = [
  { id: "beranda", label: "Beranda", href: "/", isExact: true },
  { id: "destinasi", label: "Destinasi", href: "/destinasi", isDropdown: true, items: destinationItems, header: "Destinasi Wisata" },
  { id: "panduan", label: "Panduan", href: "/panduan", isDropdown: true, items: panduanItems, header: "Panduan Wisata Destinasi" },
  { id: "tentang-kami", label: "Tentang Kami", href: "/tentang-kami" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // State posisi & lebar indikator garis bawah
  const [indicator, setIndicator] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Ref untuk setiap item li navigasi desktop
  const navItemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

  // Mengukur dan menggeser garis bawah ke elemen target
  const moveIndicatorTo = useCallback((id: string) => {
    const targetEl = navItemRefs.current[id];
    if (targetEl) {
      setIndicator({
        left: targetEl.offsetLeft,
        width: targetEl.offsetWidth,
        opacity: 1,
      });
    }
  }, []);

  // Temukan menu aktif berdasarkan URL saat ini
  const activeLinkId = mainLinks.find((link) => {
    if (link.isExact) return pathname === link.href;
    return pathname?.startsWith(link.href);
  })?.id || "beranda";

  // Reset garis bawah ke item aktif saat URL / window di-resize
  const resetToActive = useCallback(() => {
    moveIndicatorTo(activeLinkId);
  }, [activeLinkId, moveIndicatorTo]);

  useEffect(() => {
    const timer = setTimeout(() => {
      resetToActive();
    }, 50);

    window.addEventListener("resize", resetToActive);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resetToActive);
    };
  }, [pathname, resetToActive]);

  // Handle klik di luar dropdown untuk menutup
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-15 py-3 md:py-4 bg-canvas/92 backdrop-blur-md border-b border-brand-forest/15 transition-colors duration-300"
      id="navbar"
      ref={dropdownRef}
    >
      {/* Logo Kanun */}
      <Link href="/" className="flex items-center gap-2.5 sm:gap-3 no-underline">
        <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-forest rounded-lg flex items-center justify-center font-sans font-bold text-sm sm:text-base text-txt-inverse shadow-sm">
          K
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-serif text-base sm:text-lg font-normal text-brand-forest">Kanun 5.0</span>
          <span className="font-sans text-[9px] sm:text-[10px] text-txt-secondary tracking-widest uppercase font-semibold">
            Pontianak Utara
          </span>
        </div>
      </Link>

      {/* Navigasi Utama (Desktop) dengan Sliding Underline */}
      <div className="hidden md:block relative">
        <ul
          className="flex items-center gap-6 lg:gap-8 list-none m-0 p-0 relative"
          onMouseLeave={() => {
            resetToActive();
            setOpenDropdown(null);
          }}
        >
          {mainLinks.map((link) => {
            const isActive = link.isExact
              ? pathname === link.href
              : pathname?.startsWith(link.href);

            if (link.isDropdown && link.items) {
              const isThisDropdownOpen = openDropdown === link.id;

              return (
                <li
                  key={link.id}
                  ref={(el) => {
                    navItemRefs.current[link.id] = el;
                  }}
                  className="relative pb-1"
                  onMouseEnter={() => {
                    moveIndicatorTo(link.id);
                    setOpenDropdown(link.id);
                  }}
                >
                  <button
                    onClick={() => setOpenDropdown(isThisDropdownOpen ? null : link.id)}
                    className={`flex items-center gap-1.5 font-sans text-sm transition-colors duration-250 cursor-pointer bg-transparent border-none p-0 ${
                      isActive || isThisDropdownOpen
                        ? "text-brand-forest font-semibold"
                        : "text-txt-primary hover:text-brand-forest font-medium"
                    }`}
                    aria-expanded={isThisDropdownOpen}
                  >
                    {link.label}

                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isThisDropdownOpen
                          ? "rotate-180 text-brand-forest"
                          : "text-txt-secondary"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Menu Dropdown */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 sm:w-80 transition-all duration-200 origin-top ${
                      isThisDropdownOpen
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="bg-[#FFFDF7] border border-brand-forest/15 rounded-2xl shadow-xl p-2 space-y-1">
                      <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-txt-secondary border-b border-border-default mb-1">
                        {link.header}
                      </div>

                      {link.items.map((item) => {
                        const isSubActive = pathname === item.href;

                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`flex items-start gap-3 p-2.5 rounded-xl no-underline transition-all duration-200 group ${
                              isSubActive
                                ? "bg-brand-forest/10 text-brand-forest"
                                : "hover:bg-brand-forest/8 text-txt-primary hover:text-brand-forest"
                            }`}
                          >
                            <div className="p-2 rounded-lg bg-canvas border border-border-default group-hover:border-brand-forest/30 transition-colors shrink-0 mt-0.5">
                              {item.icon}
                            </div>

                            <div className="flex flex-col">
                              <span className="font-sans text-sm font-semibold leading-tight group-hover:text-brand-forest">
                                {item.name}
                              </span>

                              <span className="font-sans text-[11px] text-txt-secondary leading-tight mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li
                key={link.id}
                ref={(el) => {
                  navItemRefs.current[link.id] = el;
                }}
                className="relative pb-1"
                onMouseEnter={() => {
                  moveIndicatorTo(link.id);
                  setOpenDropdown(null);
                }}
              >
                <Link
                  href={link.href}
                  className={`font-sans text-sm transition-colors duration-250 no-underline ${
                    isActive
                      ? "text-brand-forest font-semibold"
                      : "text-txt-primary hover:text-brand-forest font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          {/* Garis Bawah yang Bergerak / Sliding Underline */}
          <span
            className="absolute bottom-0 h-0.5 bg-brand-forest rounded-full transition-all duration-300 ease-out pointer-events-none"
            style={{
              left: `${indicator.left}px`,
              width: `${indicator.width}px`,
              opacity: indicator.opacity,
            }}
          />
        </ul>
      </div>

      {/* Hamburger Button untuk Mobile */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 text-txt-primary hover:text-brand-forest focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Menu Mobile Responsif dengan Animasi Accordion Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden fixed top-[56px] sm:top-[60px] left-0 right-0 bg-[#FFFDF7] border-b border-brand-forest/15 shadow-2xl p-4 sm:p-5 flex flex-col gap-3 max-h-[85vh] overflow-y-auto z-100"
          >
            {mainLinks.map((link) => {
              const isActive = link.isExact
                ? pathname === link.href
                : pathname?.startsWith(link.href);

              if (link.isDropdown && link.items) {
                const isExpanded = mobileDropdownOpen === link.id;

                return (
                  <div key={link.id} className="flex flex-col border-b border-border-default/60 pb-2">
                    <button
                      onClick={() =>
                        setMobileDropdownOpen(isExpanded ? null : link.id)
                      }
                      className={`w-full flex items-center justify-between font-sans text-sm sm:text-base py-1 bg-transparent border-none text-left cursor-pointer transition-colors ${
                        isActive || isExpanded
                          ? "text-brand-forest font-semibold"
                          : "text-txt-primary hover:text-brand-forest font-medium"
                      }`}
                    >
                      <span>{link.label}</span>
                      <motion.svg
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className={`w-4 h-4 ${
                          isExpanded ? "text-brand-forest" : "text-txt-secondary"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>

                    {/* Content Submenu Dropdown Mobile dengan Animasi Height & Fade */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-2 pr-1 pt-2 flex flex-col gap-1.5 mt-1 border-l-2 border-brand-forest/20 ml-1">
                            <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-txt-secondary mb-0.5">
                              {link.header}
                            </span>
                            {link.items.map((item) => {
                              const isSubActive = pathname === item.href;
                              return (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileDropdownOpen(null);
                                  }}
                                  className={`font-sans text-xs sm:text-sm no-underline flex items-start gap-2.5 p-2 rounded-lg transition-colors ${
                                    isSubActive
                                      ? "bg-brand-forest/10 text-brand-forest font-semibold"
                                      : "hover:bg-brand-forest/8 text-txt-primary font-medium"
                                  }`}
                                >
                                  <div className="p-1.5 rounded-md bg-canvas border border-border-default shrink-0 mt-0.5">
                                    {item.icon}
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="leading-tight">{item.name}</span>
                                    <span className="text-[10px] text-txt-secondary font-normal mt-0.5 leading-tight">
                                      {item.desc}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setMobileDropdownOpen(null);
                  }}
                  className={`font-sans text-sm sm:text-base no-underline border-b border-border-default/60 pb-2 transition-colors ${
                    isActive
                      ? "text-brand-forest font-semibold"
                      : "text-txt-primary hover:text-brand-forest font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}