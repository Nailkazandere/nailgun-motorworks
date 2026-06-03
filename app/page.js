"use client";
import { useEffect, useState } from "react";

const content = {
  en: {
    location: "◆ Brussels, Belgium ◆",
    opening: "Opening In",
    month: "November 2026",
    tagline: "Independent · All Brands · Fair Prices",
    services: "Services",
    items: [
      { icon: "🛢", title: "Oil Change", desc: "All brands & engine types" },
      { icon: "🔴", title: "Brake Service", desc: "Pads, discs, fluid flush" },
      { icon: "⛓", title: "Chain & Belt", desc: "Chain kit, CVT belt, sprockets" },
      { icon: "🔧", title: "Full Service", desc: "6.000 / 12.000 km revision" },
      { icon: "🔋", title: "Diagnostics", desc: "Electronic fault scanning" },
      { icon: "🏍", title: "Tyre Fitting", desc: "Mounting, balancing, TPMS" },
    ],
  },
  fr: {
    location: "◆ Bruxelles, Belgique ◆",
    opening: "Ouverture Dans",
    month: "Novembre 2026",
    tagline: "Indépendant · Toutes Marques · Prix Justes",
    services: "Services",
    items: [
      { icon: "🛢", title: "Vidange Huile", desc: "Toutes marques & types de moteurs" },
      { icon: "🔴", title: "Freinage", desc: "Plaquettes, disques, purge liquide" },
      { icon: "⛓", title: "Chaîne & Courroie", desc: "Kit chaîne, courroie CVT, pignons" },
      { icon: "🔧", title: "Révision Complète", desc: "Révision 6.000 / 12.000 km" },
      { icon: "🔋", title: "Diagnostic Électronique", desc: "Lecture des codes défauts" },
      { icon: "🏍", title: "Montage Pneus", desc: "Montage, équilibrage, TPMS" },
    ],
  },
};

function Countdown() {
  const target = new Date("2026-11-01T00:00:00");
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { k: "d", label: "Days" },
    { k: "h", label: "Hours" },
    { k: "m", label: "Min" },
    { k: "s", label: "Sec" },
  ];

  return (
    <div className="flex gap-6 justify-center">
      {units.map(({ k, label }) => (
        <div key={k} className="flex flex-col items-center">
          <span className="text-4xl font-black text-white tabular-nums w-16 text-center">
            {String(time[k]).padStart(2, "0")}
          </span>
          <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg.jpg')" }} />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a000055_0%,_#000000aa_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-red-600 opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-red-600 opacity-30" />

      {/* Dil toggle */}
      <div className="absolute top-4 right-4 z-20 flex gap-1">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-all ${lang === "en" ? "bg-red-600 text-white" : "border border-gray-700 text-gray-400 hover:border-gray-500"}`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("fr")}
          className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-all ${lang === "fr" ? "bg-red-600 text-white" : "border border-gray-700 text-gray-400 hover:border-gray-500"}`}
        >
          FR
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 py-20">

        {/* Logo */}
        <div className="text-center space-y-2 mb-10">
          <div className="text-xs text-red-500 tracking-[0.3em] uppercase mb-4">{t.location}</div>
          <h1 className="text-6xl font-black tracking-tight uppercase leading-none">
            nail<span className="text-red-500">GUN</span>
            <br />
            <span className="text-4xl font-light tracking-[0.2em]">motorworks</span>
          </h1>
        </div>

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mb-10" />

        {/* Geri sayım */}
        <div className="text-center space-y-4 mb-10">
          <p className="text-gray-400 uppercase tracking-[0.2em] text-sm">{t.opening}</p>
          <Countdown />
          <p className="text-gray-600 text-xs tracking-widest uppercase">{t.month}</p>
        </div>

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10" />

        {/* Hizmetler */}
        <div className="w-full max-w-3xl mb-10">
          <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-6">{t.services}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.items.map((s) => (
              <div key={s.title} className="border border-gray-800 hover:border-red-600 rounded-lg p-4 text-center transition-all hover:bg-red-600/5">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="text-sm font-bold uppercase tracking-wider text-white">{s.title}</div>
                <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10" />

        <p className="text-gray-500 text-sm tracking-widest uppercase mb-8">{t.tagline}</p>

        {/* Butonlar */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://www.youtube.com/@nailGUN-motorworks" className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">YouTube</a>
          <a href="https://instagram.com/nailkazandere" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">Instagram</a>
          <a href="https://wa.me/905433083704" className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">WhatsApp</a>
          <a href="mailto:info@nailgunmotorworks.com" className="px-8 py-3 border border-gray-700 hover:border-red-600 hover:text-red-500 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">Contact</a>
        </div>

      </div>
    </main>
  );
}