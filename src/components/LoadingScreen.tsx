import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1800);
    const t2 = setTimeout(() => setVisible(false), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-900 transition-opacity duration-500"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <img
        src="/logo.svg"
        alt="Bolelwane Precast Construction"
        className="w-24 h-24 object-contain mb-4 animate-float"
      />
      <p className="text-amber-400 font-extrabold text-2xl tracking-wide mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>BOLELWANE</p>
      <p className="text-white text-[11px] tracking-[0.25em] uppercase font-semibold mb-6">Precast Construction</p>
      <div className="w-48 h-1 bg-stone-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-[1800ms] ease-out"
          style={{ width: '100%' }}
        />
      </div>
      <p className="mt-4 text-stone-400 text-xs tracking-widest uppercase font-medium">
        Building your experience
      </p>
    </div>
  );
}
