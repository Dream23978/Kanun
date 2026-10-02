/* ================================================
   FLOATING BUTTONS - Tombol mengambang di 
   pojok kiri bawah (K) dan kanan bawah (P)
   ================================================ */

export default function FloatingButtons() {
  return (
    <>
      {/* Tombol Kanun di kiri bawah */}
      <button className="floating-btn floating-btn-left" aria-label="Kanun">
        K
      </button>
      {/* Tombol Pertamina di kanan bawah */}
      <button className="floating-btn floating-btn-right" aria-label="Pertamina">
        P
      </button>
    </>
  );
}
