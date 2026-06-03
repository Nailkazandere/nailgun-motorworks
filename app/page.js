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

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a0000_0%,_#000000_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-red-600 opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-red-600 opacity-30" />

      <div className="relative z-10 max-w-2xl w-full text-center space-y-10">

        <div className="space-y-2">
          <div className="text-xs text-red-500 tracking-[0.3em] uppercase mb-4">
            ◆ Brussels, Belgium ◆
          </div>
          <h1 className="text-6xl font-black tracking-tight uppercase leading-none">
            nail<span className="text-red-500">GUN</span>
            <br />
            <span className="text-4xl font-light tracking-[0.2em]">motorworks</span>
          </h1>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />

        <div className="space-y-6">
          <p className="text-gray-400 uppercase tracking-[0.2em] text-sm">
            Opening In
          </p>
          <Countdown />
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            November 2026
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        <p className="text-gray-500 text-sm tracking-widest uppercase">
          Independent · All Brands · Fair Prices
        </p>

        <div className="flex gap-4 justify-center">
          <a href="https://www.youtube.com/@nailGUN-motorworks" className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">YouTube</a>
          <a href="mailto:info@nailgunmotorworks.com" className="px-8 py-3 border border-gray-700 hover:border-red-600 hover:text-red-500 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">Contact</a>
        </div>

      </div>
    </main>
  );
}