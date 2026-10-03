# Kanun 5.0 — Design System

> **Versi:** 02 Oktober 2026  
> **Platform:** Next.js + Tailwind CSS v4  
> **Font:** DM Serif Text (editorial), Inter (UI/body)  
> **Filosofi:** Palet hangat tropis terinspirasi budaya wisata Pontianak Utara — hijau hutan membangun identitas, emas memberi aksen, netral menjaga keterbacaan.

---

## Daftar Isi

1. [Color Tokens](#1-color-tokens)
2. [Typography](#2-typography)
3. [Spacing Scale](#3-spacing-scale)
4. [Radius & Elevation](#4-radius--elevation)
5. [Core Components](#5-core-components)
6. [Patterns & Backgrounds](#6-patterns--backgrounds)
7. [Animation & Motion](#7-animation--motion)
8. [Layout Guidelines](#8-layout-guidelines)
9. [File Map](#9-file-map)

---

## 1. Color Tokens

Semua token didefinisikan di `globals.css` dalam blok `@theme inline` dan dapat digunakan langsung sebagai Tailwind utility (contoh: `bg-brand-forest`, `text-txt-primary`).

### Brand & Semantic Colors

| Token | Hex | Kegunaan |
|---|---|---|
| `brand/forest` | `#246144` | Identitas utama, CTA, navbar, badge sejarah |
| `brand/forest-hover` | `#2d7a55` | Hover state tombol forest |
| `brand/green` | `#1F5A3C` | Background batik-pattern overlay |
| `brand/gold` | `#FFEDBB` | Aksen warm, label hero, section background |
| `brand/gold-dark` | `#DBB06A` | Aksen gold lebih gelap, hover social icon |
| `brand/gold-deeper` | `#B8863C` | Aksen gold paling gelap, hover link |
| `brand/terracotta` | `#A64B2A` | Badge kategori kuliner |

### Background & Surface

| Token | Hex | Kegunaan |
|---|---|---|
| `background/canvas` | `#FCFAF7` | Background utama halaman |
| `background/subtle` | `#F4EFEA` | Background area foto placeholder |
| `surface/default` | `#FFFDF7` | Surface kartu, tombol secondary |
| `surface/inverse` | `#123524` | Surface gelap (overlay hero, footer) |
| `surface/deep` | `#0C2418` | Footer background paling gelap |

### Text

| Token | Hex | Kegunaan |
|---|---|---|
| `text/primary` | `#1C1A17` | Body text utama |
| `text/secondary` | `#6B726F` | Deskripsi, caption |
| `text/inverse` | `#FFFFFF` | Teks di atas surface gelap |

### Border

| Token | Hex | Kegunaan |
|---|---|---|
| `border/default` | `#E8E2DA` | Border kartu, divider halus |
| `border/strong` | `#C9BDA6` | Border yang lebih tegas |

### Icon

| Token | Hex | Kegunaan |
|---|---|---|
| `icon/secondary` | `#516057` | Ikon sekunder |

### Utility

| Token | Hex | Kegunaan |
|---|---|---|
| `white` | `#FFFFFF` | Teks inverse, ikon |

### Panduan Penggunaan Warna

- Gunakan **Forest** untuk area identitas dan CTA utama
- Gunakan **Gold** untuk aksen
- Gunakan **Canvas** dan **Surface** untuk struktur halaman
- Jangan gunakan warna brand secara berlebihan — biarkan Canvas/Surface mendominasi layout

---

## 2. Typography

DM Serif Text memberi karakter editorial dan historis; Inter menjaga informasi, navigasi, serta data tetap jelas dan modern.

### Font Families

```css
--font-serif: var(--font-dm-serif), "DM Serif Text", Georgia, serif;
--font-sans: var(--font-inter), "Inter", Arial, sans-serif;
```

### Type Scale

| Token | Font | Size / Line-height | Weight | Penggunaan |
|---|---|---|---|---|
| `display-xl` | DM Serif Text | 42px / 50px | Regular (400) | Hero heading utama |
| `heading-h1` | DM Serif Text | 32px / 40px | Regular (400) | Judul halaman / section |
| `heading-h2` | DM Serif Text | 24px / 32px | Regular (400) | Sub-heading section |
| `heading-h3` | DM Serif Text | 20px / 28px | Regular (400) | Judul kartu, sub-section |
| `body-l` | Inter | 16px / 26px | Regular (400) | Body text besar, paragraf utama |
| `body-m` | Inter | 14px / 22px | Regular (400) | Body text standar |
| `body-s` | Inter | 13px / 20px | Regular (400) | Caption, deskripsi kecil |
| `label-m` | Inter | 12px / 16px | Bold (700) | Label, badge, uppercase tag |

### Panduan Penggunaan

- Gunakan **display** dan **heading** secara hemat — hanya untuk judul utama
- Body dan label memakai **Inter** untuk kenyamanan baca pada konten panjang
- `label-m` selalu **uppercase** dengan `letter-spacing: 0.05em`
- Heading tidak menggunakan bold — kesan editorial didapat dari serif typeface

### Contoh Penggunaan di Tailwind

```tsx
{/* Display XL */}
<h1 className="display-xl text-brand-forest">Judul Besar</h1>

{/* Heading H1 */}
<h2 className="heading-h1 text-txt-primary">Section Title</h2>

{/* Body M */}
<p className="body-m text-txt-secondary">Deskripsi konten...</p>

{/* Label */}
<span className="label-m text-brand-gold">KATEGORI</span>
```

---

## 3. Spacing Scale

Gunakan kelipatan 4 sebagai fondasi; 8–24 untuk komponen; 32–64 untuk jarak antar-seksi.

| Token | Value | Kegunaan |
|---|---|---|
| `space/2` | 2px | Micro spacing |
| `space/4` | 4px | Padding badge, gap minimal |
| `space/8` | 8px | Gap antar elemen inline |
| `space/12` | 12px | Padding badge, gap komponen kecil |
| `space/16` | 16px | Padding kartu kompak |
| `space/24` | 24px | Padding tombol, padding horizontal standar |
| `space/32` | 32px | Gap antar komponen |
| `space/48` | 48px | Margin antar section kecil |
| `space/64` | 64px | Margin antar section besar |

### Penerapan Umum

```
Section padding    : py-20 (80px) px-6 (24px) md:px-15 (60px)
Gap grid kartu     : gap-6 (24px)
Padding kartu      : p-5 (20px)
Gap antar section  : mb-10 (40px)
```

---

## 4. Radius & Elevation

### Border Radius

| Value | Penggunaan |
|---|---|
| `4px` | Micro element |
| `8px` / `rounded-lg` | Logo box, elemen kecil |
| `12px` / `rounded-xl` | Dot aktif hero |
| `16px` / `rounded-2xl` | Feature cards, overlay |
| `20px` / `rounded-20` | Kartu utama, gambar section |
| `24px` / `rounded-3xl` | Kartu impact besar |
| `full` / `999px` | Badge, tombol pill, dot, avatar |

### Panduan Radius
- Radius **12–24** digunakan untuk kartu dan panel
- Radius **penuh** untuk badge dan tombol
- Konsisten: semua kartu destinasi pakai `rounded-20`

### Elevation / Shadow

| Token | Value | Kegunaan |
|---|---|---|
| `shadow-card` | `0 4px 20px rgba(28,26,23, 0.06)` | Default card shadow |
| `shadow-card-hover` | `0 12px 32px rgba(28,26,23, 0.12)` | Hover card shadow |

### Panduan Elevation
- Gunakan `shadow-card` hanya saat butuh pemisahan dari latar
- Hover state: kombinasikan `shadow-card-hover` + `hover:-translate-y-1` untuk efek "angkat"

---

## 5. Core Components

### 5.1 Buttons

Primary digunakan untuk aksi utama; Secondary untuk aksi pendamping pada permukaan terang.

#### Primary Button (Forest Green Pill)

```css
@utility btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--color-brand-forest);    /* #246144 */
  color: var(--color-txt-inverse);                 /* #FFFFFF */
  font-family: var(--font-sans);                   /* Inter */
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  padding: 12px 24px;
  border-radius: 999px;                            /* Pill shape */
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
}
```

```tsx
<button className="btn-primary">Jelajahi sekarang</button>
```

#### Secondary Button (Outlined Pill)

```css
@utility btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--color-surface);          /* #FFFDF7 */
  color: var(--color-brand-forest);                /* #246144 */
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  padding: 12px 24px;
  border-radius: 999px;
  border: 1px solid var(--color-brand-forest);
  cursor: pointer;
  transition: all 0.25s ease;
}
```

```tsx
<button className="btn-secondary">Jelajahi sekarang</button>
```

### 5.2 Badges

Badge membantu pemindaian kategori. Semua badge berbentuk pill (`border-radius: 999px`) dengan tipografi `label-m`.

#### Base Badge

```css
@utility badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: fit-content;
}
```

#### Varian Badge

| Varian | Background | Text Color | Contoh Penggunaan |
|---|---|---|---|
| `badge-sejarah` | `brand/forest` (#246144) | `text/inverse` (#FFF) | Kategori sejarah |
| `badge-atraksi` | `brand/gold` (#FFEDBB) | `text/inverse` (#FFF) | Kategori atraksi |
| `badge-kuliner` | `brand/terracotta` (#A64B2A) | `text/inverse` (#FFF) | Kategori kuliner |
| `badge-destinasi` | `brand/forest` (#246144) | `brand/gold` (#FFEDBB) | Label destinasi di kartu |

```tsx
<span className="badge badge-sejarah">SEJARAH</span>
<span className="badge badge-atraksi">ATRAKSI</span>
<span className="badge badge-kuliner">KULINER</span>
<span className="badge badge-destinasi">DESTINASI</span>
```

### 5.3 Cards

Kartu menggabungkan judul editorial, deskripsi, dan metadata singkat.

#### Destination Card

```css
@utility card-ds {
  background-color: var(--color-surface);       /* #FFFDF7 */
  border: 1px solid var(--color-border-default); /* #E8E2DA */
  border-radius: 20px;
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: all 0.3s ease;
}
```

**Struktur kartu:**

```tsx
<div className="bg-surface rounded-20 overflow-hidden border border-border-default 
     shadow-card transition-all duration-300 flex flex-col 
     hover:-translate-y-1 hover:shadow-card-hover group h-full">
  
  {/* Gambar — aspect ratio 4:3 */}
  <div className="relative w-full aspect-4/3 overflow-hidden">
    <Image ... className="object-cover transition-transform duration-400 
           group-hover:scale-105" />
  </div>
  
  {/* Konten */}
  <div className="p-5 flex flex-col grow">
    <h3 className="heading-h3 text-txt-primary mb-2">Judul Kartu</h3>
    <p className="body-s text-txt-secondary mb-4 grow">Deskripsi...</p>
    <a className="body-s text-brand-forest font-semibold inline-flex items-center 
       gap-1.5 hover:gap-2.5 hover:text-brand-gold-deeper">
      Lihat Detail →
    </a>
  </div>
</div>
```

**Hover behavior:**
- Kartu naik 4px (`hover:-translate-y-1`)
- Shadow membesar (`hover:shadow-card-hover`)
- Gambar zoom-in 5% (`group-hover:scale-105`)
- Link arrow bergerak (`hover:gap-2.5`)

#### Feature Card (Glassmorphism — di atas batik-pattern)

```tsx
<div className="flex items-start gap-4 bg-white/[0.08] backdrop-blur-md 
     border border-white/15 rounded-2xl p-5 transition-all duration-300 
     hover:bg-white/[0.14] hover:translate-x-1">
  
  {/* Icon circle */}
  <div className="w-11 h-11 min-w-11 bg-[#122700] rounded-full 
       flex items-center justify-center text-lg text-white font-bold">
    ◎
  </div>
  
  {/* Content */}
  <div>
    <h4 className="font-sans text-sm/5 font-bold tracking-wider uppercase 
        text-brand-gold mb-1">Label</h4>
    <p className="body-s text-white/80">Deskripsi fitur...</p>
  </div>
</div>
```

#### Team Member Card

```tsx
<div className="bg-surface border border-border-default rounded-2xl overflow-hidden 
     shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
  <div className="w-full aspect-square bg-subtle" />  {/* Foto placeholder */}
  <div className="p-3.5">
    <h4 className="font-sans text-sm font-bold text-txt-primary mb-0.5">Nama</h4>
    <p className="font-sans text-xs text-txt-secondary">Role</p>
  </div>
</div>
```

### 5.4 Navbar

```
Layout     : fixed top-0, full-width, z-100
Background : bg-canvas/92 backdrop-blur-md
Border     : border-b border-brand-forest/15
Padding    : px-5 md:px-15 py-3 md:py-4
Logo       : 36×36px forest box rounded-lg + serif brand name
Nav links  : font-sans text-sm font-medium, active → underline forest
```

### 5.5 Hero Slider

```
Layout      : full-screen (h-screen min-h-160)
Overlay     : bg-linear-to-t from-surface-inverse/85 via-surface-inverse/40 to-black/20
Text pos    : absolute bottom-15 md:bottom-20 left-6 md:left-15
Label       : label-m text-brand-gold (uppercase)
Title       : font-serif text-3xl md:text-4xl lg:text-5xl text-white
Desc        : font-sans text-base text-white/90
Nav arrows  : 48×48px bg-white/15 backdrop-blur-md rounded-full
Dots        : h-2.5, active → w-6 bg-brand-gold, inactive → w-2.5 bg-white/40
Auto-slide  : 6 detik interval
```

### 5.6 Footer

```
Background  : bg-surface-deep (#0C2418)
Layout      : grid 3-col [2fr 1fr 1fr] pada desktop
Logo        : 32×32px gold box + serif brand name putih
Section title : uppercase, text-brand-gold, text-xs font-bold
Links       : body-s text-white/70, hover → text-brand-gold
Social icons: 36×36px rounded-full bg-brand-gold, hover → bg-brand-gold-dark + scale-110
Copyright   : text-xs text-white/50
```

---

## 6. Patterns & Backgrounds

### Batik Pattern (Surface Gelap)

Digunakan pada About Section dan Impact Section sebagai pattern overlay.

```css
@utility batik-pattern {
  background-color: #1F5A3C;
  background-image: url("/images/Background.png");
  background-size: auto;
  background-repeat: repeat;
  background-blend-mode: multiply;
}
```

### Diamond Pattern (Surface Terang)

Digunakan pada Destinasi Section dan Team Section.

```css
@utility diamond-pattern {
  background-color: var(--color-canvas);
  background-image: url("/images/Background.png");
  background-size: auto;
  background-repeat: repeat;
  background-position: center;
}
```

---

## 7. Animation & Motion

### Scroll Animation (Motion / Framer Motion)

Komponen `ScrollAnimate` membungkus elemen dengan animasi on-scroll.

| Direction | Offset | Kegunaan |
|---|---|---|
| `up` | y: +48px → 0 | Default, muncul dari bawah |
| `left` | x: -60px → 0 | Muncul dari kiri |
| `right` | x: +60px → 0 | Muncul dari kanan |
| `fade` | tanpa translate | Fade-in saja |

**Parameter:**

```tsx
<ScrollAnimate 
  direction="up"      // "up" | "left" | "right" | "fade"
  delay={0.15}         // delay dalam detik
  duration={0.6}       // durasi animasi (default 0.6s)
  once={false}         // true = animasi hanya sekali
>
  {children}
</ScrollAnimate>
```

**Easing curve:** `[0.25, 0.1, 0.25, 1]` — smooth deceleration  
**Viewport margin:** `-80px` (trigger sedikit sebelum elemen terlihat penuh)

### CSS Keyframe Animation

```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

Digunakan via utility `animate-in` untuk elemen hero text overlay dengan `animation: fade-in-up 0.6s ease forwards`.

### Transition Standar

| Elemen | Transition | Keterangan |
|---|---|---|
| Button | `all 0.25s ease` | Warna + scale |
| Card | `all 0.3s ease` | Shadow + translate |
| Image (hover) | `transform 0.4s` | Scale zoom-in |
| Nav link | `colors 0.25s` | Perubahan warna |
| Social icon | `all 0.25s` | Color + scale-110 |

---

## 8. Layout Guidelines

### Section Pattern

Setiap section mengikuti pola konsisten:

```tsx
<section className="py-20 px-6 md:px-15 [bg-*]" id="section-name">
  <ScrollAnimate>
    <h2 className="font-serif text-4xl font-normal leading-11 mb-10 [text-*]">
      Judul Section
    </h2>
  </ScrollAnimate>
  
  {/* Grid konten */}
  <div className="grid grid-cols-1 md:grid-cols-[...] gap-[...]">
    ...
  </div>
</section>
```

### Responsive Breakpoints

| Breakpoint | Penggunaan |
|---|---|
| Default (mobile) | Single column, `px-6` |
| `md:` (768px+) | Multi column, `px-15` |
| `lg:` (1024px+) | 4+ column grid (destinasi), larger text |

### Urutan Section Homepage

1. **Navbar** — fixed, transparent overlay
2. **HeroSlider** — fullscreen carousel
3. **AboutSection** — batik-pattern, 2-col grid
4. **DestinasiSection** — diamond-pattern, 4-col grid
5. **ImpactSection** — batik-pattern, 3-col card
6. **TeamSection** — diamond-pattern, 5-col grid
7. **Footer** — surface-deep, 3-col grid

### Alternasi Background

Section mengalternasi antara pattern gelap dan terang untuk ritme visual:

```
Hero       → gambar fullscreen
About      → batik-pattern (gelap, hijau)
Destinasi  → diamond-pattern (terang, gold)
Impact     → batik-pattern (gelap, hijau)
Team       → diamond-pattern (terang, gold)
Footer     → surface-deep (gelap, paling tua)
```

---

## 9. File Map

| File | Deskripsi |
|---|---|
| `app/globals.css` | Semua design tokens, utility classes, dan base reset |
| `app/layout.tsx` | Root layout dengan font loading (DM Serif Text + Inter) |
| `app/page.tsx` | Susunan section homepage |
| `app/Components/Navbar.tsx` | Navigasi fixed dengan logo + link |
| `app/Components/HeroSlider.tsx` | Carousel fullscreen dengan auto-slide |
| `app/Components/AboutSection.tsx` | Section sejarah + feature cards |
| `app/Components/DestinasiSection.tsx` | Grid 4 kartu destinasi |
| `app/Components/ImpactSection.tsx` | Kartu CSR Pertamina |
| `app/Components/TeamSection.tsx` | Grid 5×2 anggota tim |
| `app/Components/Footer.tsx` | Footer dengan branding + navigasi |
| `app/Components/ScrollAnimate.tsx` | Wrapper animasi on-scroll (Motion) |

---

> **Catatan:** Dokumen ini diturunkan dari prototype Figma "Kanun Design System" dan implementasi kode yang aktif. Selalu rujuk ke `globals.css` sebagai _source of truth_ untuk token values.
