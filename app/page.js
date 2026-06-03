"use client";
import { useEffect, useState } from "react";

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

const services = [
  { icon: "🛢", title: "Oil Change", desc: "All brands & engine types" },
  { icon: "🔴", title: "Brake Service", desc: "Pads, discs, fluid flush" },
  { icon: "⛓", title: "Chain & Belt", desc: "Chain kit, CVT belt, sprockets" },
  { icon: "🔧", title: "Full Service", desc: "6.000 / 12.000 km revision" },
  { icon: "🔋", title: "Diagnostics", desc: "Electronic fault scanning" },
  { icon: "🏍", title: "Tyre Fitting", desc: "Mounting, balancing, TPMS" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* Arka plan fotoğrafı */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />
      {/* Karartma katmanı */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a000055_0%,_#000000aa_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-red-600 opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-red-600 opacity-30" />

      <div className="relative z-10 flex flex-col items-center px-6 py-20">

        {/* Logo */}
        <div className="text-center space-y-2 mb-10">
          <div className="text-xs text-red-500 tracking-[0.3em] uppercase mb-4">
            ◆ Brussels, Belgium ◆
          </div>
          <h1 className="text-6xl font-black tracking-tight uppercase leading-none">
            nail<span className="text-red-500">GUN</span>
            <br />
            <span className="text-4xl font-light tracking-[0.2em]">motorworks</span>
          </h1>
        </div>

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mb-10" />

        {/* Geri sayım */}
        <div className="text-center space-y-4 mb-10">
          <p className="text-gray-400 uppercase tracking-[0.2em] text-sm">Opening In</p>
          <Countdown />
          <p className="text-gray-600 text-xs tracking-widest uppercase">November 2026</p>
        </div>

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10" />

        {/* Hizmetler */}
        <div className="w-full max-w-3xl mb-10">
          <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-6">Services</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-gray-800 hover:border-red-600 rounded-lg p-4 text-center transition-all hover:bg-red-600/5"
              >
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="text-sm font-bold uppercase tracking-wider text-white">{s.title}</div>
                <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10" />

        {/* Tagline */}
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-8">
          Independent · All Brands · Fair Prices
        </p>

        {/* Butonlar */}
        <div className="flex gap-4">
          <a href="https://www.youtube.com/@nailGUN-motorworks" className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">YouTube</a>
          <a href="mailto:info@nailgunmotorworks.com" className="px-8 py-3 border border-gray-700 hover:border-red-600 hover:text-red-500 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">Contact</a>
        </div>

      </div>
    </main>
  );
}