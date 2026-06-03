"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar({ lang, setLang }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = {
    en: ["Services", "About", "Contact"],
    fr: ["Services", "A Propos", "Contact"],
  };

  const t = nav[lang] || nav.en;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-black/70 backdrop-blur-sm"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-black uppercase tracking-tight text-lg cursor-pointer" onClick={() => { router.push("/"); setMenuOpen(false); }}>
          nail<span className="text-red-500">GUN</span>
        </div>

        {/* Masaüstü */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => router.push("/services")} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest transition-colors">{t[0]}</button>
          <button onClick={() => router.push("/about")} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest transition-colors">{t[1]}</button>
          <button onClick={() => router.push("/contact")} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest transition-colors">{t[2]}</button>
          <div className="flex gap-1 ml-4">
            <button onClick={() => setLang("en")} className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-all ${lang === "en" ? "bg-red-600 text-white" : "border border-gray-700 text-gray-400 hover:border-gray-500"}`}>EN</button>
            <button onClick={() => setLang("fr")} className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-all ${lang === "fr" ? "bg-red-600 text-white" : "border border-gray-700 text-gray-400 hover:border-gray-500"}`}>FR</button>
          </div>
        </div>

        {/* Mobil */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex gap-1">
            <button onClick={() => setLang("en")} className={`px-2 py-1 text-xs font-bold rounded uppercase transition-all ${lang === "en" ? "bg-red-600 text-white" : "border border-gray-700 text-gray-400"}`}>EN</button>
            <button onClick={() => setLang("fr")} className={`px-2 py-1 text-xs font-bold rounded uppercase transition-all ${lang === "fr" ? "bg-red-600 text-white" : "border border-gray-700 text-gray-400"}`}>FR</button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-1">
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          <button onClick={() => { router.push("/services"); setMenuOpen(false); }} className="text-sm text-gray-400 hover:text-white uppercase tracking-widest text-left">{t[0]}</button>
          <button onClick={() => { router.push("/about"); setMenuOpen(false); }} className="text-sm text-gray-400 hover:text-white uppercase tracking-widest text-left">{t[1]}</button>
          <button onClick={() => { router.push("/contact"); setMenuOpen(false); }} className="text-sm text-gray-400 hover:text-white uppercase tracking-widest text-left">{t[2]}</button>
        </div>
      )}
    </nav>
  );
}