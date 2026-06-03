"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const services = {
  en: [
    {
      icon: "🛢",
      title: "Oil Change",
      desc: "Full oil and filter replacement for all motorcycle types. We use premium oils suited to your engine specification.",
      price: "from €45",
      duration: "~30 min",
      includes: ["Engine oil drain & refill", "Oil filter replacement", "Level check", "Disposal of old oil"],
    },
    {
      icon: "🔴",
      title: "Brake Service",
      desc: "Complete brake system inspection and replacement. Safety first — we use OEM-grade pads and discs.",
      price: "from €60",
      duration: "~1 hour",
      includes: ["Pad thickness check", "Disc inspection", "Fluid condition test", "Brake bleeding if needed"],
    },
    {
      icon: "⛓",
      title: "Chain & Belt",
      desc: "Chain kit, CVT belt and sprocket replacement. Correct tension and lubrication for maximum life.",
      price: "from €120",
      duration: "~1.5 hours",
      includes: ["Chain wear measurement", "Sprocket inspection", "New chain/belt fitting", "Tension adjustment"],
    },
    {
      icon: "🔧",
      title: "Full Service",
      desc: "Comprehensive 6.000 or 12.000 km revision covering all critical systems.",
      price: "from €180",
      duration: "~3 hours",
      includes: ["Oil & filter change", "Air filter check", "Spark plugs", "Brake inspection", "Chain & tension", "Full safety check"],
    },
    {
      icon: "🔋",
      title: "Diagnostics",
      desc: "Electronic fault code reading and live data analysis. We identify the problem before we fix it.",
      price: "from €40",
      duration: "~45 min",
      includes: ["OBD fault code scan", "Live sensor data", "Written report", "Repair estimate"],
    },
    {
      icon: "🏍",
      title: "Tyre Fitting",
      desc: "Tyre mounting and balancing for all wheel sizes. We stock major brands or fit your own tyres.",
      price: "from €20",
      duration: "~30 min",
      includes: ["Wheel removal", "Tyre demount & mount", "Dynamic balancing", "Valve replacement"],
    },
  ],
  fr: [
    {
      icon: "🛢",
      title: "Vidange Huile",
      desc: "Vidange complete huile et filtre pour tous types de motos.",
      price: "des €45",
      duration: "~30 min",
      includes: ["Vidange et remplissage huile moteur", "Remplacement filtre a huile", "Controle niveau", "Elimination huile usagee"],
    },
    {
      icon: "🔴",
      title: "Freinage",
      desc: "Inspection et remplacement complet du systeme de freinage.",
      price: "des €60",
      duration: "~1 heure",
      includes: ["Controle epaisseur plaquettes", "Inspection disques", "Test liquide de frein", "Purge si necessaire"],
    },
    {
      icon: "⛓",
      title: "Chaine & Courroie",
      desc: "Remplacement kit chaine, courroie CVT et pignons.",
      price: "des €120",
      duration: "~1h30",
      includes: ["Mesure usure chaine", "Inspection pignons", "Pose nouvelle chaine/courroie", "Reglage tension"],
    },
    {
      icon: "🔧",
      title: "Revision Complete",
      desc: "Revision complete 6.000 ou 12.000 km couvrant tous les systemes critiques.",
      price: "des €180",
      duration: "~3 heures",
      includes: ["Vidange & filtre", "Filtre a air", "Bougies", "Freins", "Chaine & tension", "Controle securite complet"],
    },
    {
      icon: "🔋",
      title: "Diagnostic Electronique",
      desc: "Lecture codes defauts et analyse donnees en temps reel.",
      price: "des €40",
      duration: "~45 min",
      includes: ["Scan codes defauts OBD", "Donnees capteurs live", "Rapport ecrit", "Devis reparation"],
    },
    {
      icon: "🏍",
      title: "Montage Pneus",
      desc: "Montage et equilibrage pneus pour toutes tailles de roues.",
      price: "des €20",
      duration: "~30 min",
      includes: ["Depose roue", "Demontage & montage pneu", "Equilibrage dynamique", "Remplacement valve"],
    },
  ],
};

export default function ServicesPage() {
  const [lang, setLang] = useState("en");
  const router = useRouter();
  const s = services[lang];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-black uppercase tracking-tight text-lg cursor-pointer" onClick={() => router.push("/")}>
            nail<span className="text-red-500">GUN</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => router.push("/services")} className="text-xs text-white uppercase tracking-widest hidden md:block">Services</button>
            <button onClick={() => router.push("/about")} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest transition-colors hidden md:block">About</button>
            <button onClick={() => router.push("/contact")} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest transition-colors hidden md:block">Contact</button>
            <div className="flex gap-1 ml-4">
              <button onClick={() => setLang("en")} className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-all ${lang === "en" ? "bg-red-600 text-white" : "border border-gray-700 text-gray-400"}`}>EN</button>
              <button onClick={() => setLang("fr")} className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-all ${lang === "fr" ? "bg-red-600 text-white" : "border border-gray-700 text-gray-400"}`}>FR</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <p className="text-xs text-red-500 tracking-[0.3em] uppercase mb-4">NailGUN Motorworks</p>
          <h1 className="text-5xl font-black uppercase">Our Services</h1>
          <p className="text-gray-500 text-sm mt-4 tracking-widest uppercase">Brussels · All Brands · Fair Prices</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {s.map((item) => (
            <div key={item.title} className="border border-gray-800 hover:border-red-600 rounded-lg p-6 transition-all hover:bg-red-600/5">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-black uppercase tracking-wider">{item.title}</h2>
                    <span className="text-red-500 font-bold text-sm">{item.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Duration: {item.duration}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-6 mb-4">{item.desc}</p>
              <ul className="space-y-1">
                {item.includes.map((inc) => (
                  <li key={inc} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="text-red-600">◆</span> {inc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm mb-6">Ready to book? Contact us via WhatsApp.</p>
          <a href="https://wa.me/905433083704" className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105 inline-block">
            Book via WhatsApp
          </a>
        </div>
      </main>

      <footer className="border-t border-gray-900 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-black uppercase tracking-tight text-lg">
            nail<span className="text-red-500">GUN</span> <span className="font-light text-gray-500">motorworks</span>
          </div>
          <p className="text-xs text-gray-700">2026 NailGUN Motorworks · Brussels, Belgium</p>
        </div>
      </footer>
    </div>
  );
}