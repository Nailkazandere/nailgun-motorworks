"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

const content = {
  en: {
    title: "About Us",
    subtitle: "Brussels, Belgium · Opening November 2026",
    story_title: "Our Story",
    story1: "NailGUN Motorworks will be Brussels' first AI-powered motorcycle repair, maintenance and custom workshop. Born from a passion for motorcycles and a belief that modern technology should serve the rider, we combine 10 years of hands-on mechanical experience with cutting-edge diagnostic tools.",
    story2: "We believe every motorcycle deserves honest, transparent service — no surprises on the invoice, no unnecessary upsells. Just skilled work at fair prices.",
    ai_title: "Why AI-Powered?",
    ai1: "AI tools allow us to diagnose faster, document better, and serve you more efficiently. From electronic fault analysis to parts sourcing, we use every available tool to give you the best outcome — in less time.",
    ai2: "This is not about replacing the mechanic. It is about making the mechanic better.",
    stats: [
      { value: "10+", label: "Years Experience" },
      { value: "500+", label: "Bikes Serviced" },
      { value: "9", label: "Brands Covered" },
    ],
    brands_title: "Brands We Service",
    cta: "Have a question? We would love to hear from you.",
    whatsapp: "WhatsApp",
    contact: "Contact",
  },
  fr: {
    title: "A Propos",
    subtitle: "Bruxelles, Belgique · Ouverture Novembre 2026",
    story_title: "Notre Histoire",
    story1: "NailGUN Motorworks sera le premier atelier de reparation, entretien et custom moto assiste par IA a Bruxelles. Nous combinons 10 ans d'experience mecanique avec des outils de diagnostic de pointe.",
    story2: "Nous croyons que chaque moto merite un service honnete et transparent. Juste un travail qualifie a prix juste.",
    ai_title: "Pourquoi IA ?",
    ai1: "Les outils IA nous permettent de diagnostiquer plus vite, de mieux documenter et de vous servir plus efficacement.",
    ai2: "Il ne s'agit pas de remplacer le mecanicien. Il s'agit de le rendre meilleur.",
    stats: [
      { value: "10+", label: "Ans d'Experience" },
      { value: "500+", label: "Motos Entretenues" },
      { value: "9", label: "Marques Couvertes" },
    ],
    brands_title: "Marques que nous entretenons",
    cta: "Une question ? Nous serions ravis de vous entendre.",
    whatsapp: "WhatsApp",
    contact: "Contact",
  },
};

export default function AboutPage() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar lang={lang} setLang={setLang} />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">

        <div className="text-center mb-16">
          <p className="text-xs text-red-500 tracking-[0.3em] uppercase mb-4">NailGUN Motorworks</p>
          <h1 className="text-5xl font-black uppercase">{t.title}</h1>
          <p className="text-gray-500 text-sm mt-4 tracking-widest uppercase">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-xs text-red-500 uppercase tracking-widest mb-4">{t.story_title}</h2>
            <p className="text-gray-300 text-sm leading-7">{t.story1}</p>
            <p className="text-gray-400 text-sm leading-7 mt-4">{t.story2}</p>
          </div>
          <div>
            <h2 className="text-xs text-red-500 uppercase tracking-widest mb-4">{t.ai_title}</h2>
            <p className="text-gray-300 text-sm leading-7">{t.ai1}</p>
            <p className="text-gray-400 text-sm leading-7 mt-4">{t.ai2}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16 text-center">
          {t.stats.map((s) => (
            <div key={s.label} className="border border-gray-800 rounded-lg p-6">
              <div className="text-4xl font-black text-white">{s.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-xs text-red-500 uppercase tracking-widest mb-6 text-center">{t.brands_title}</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Honda", "Yamaha", "Kawasaki", "Suzuki", "Ducati", "KTM", "Triumph", "Royal Enfield", "Aprilia"].map((b) => (
              <span key={b} className="border border-gray-800 rounded px-4 py-2 text-xs text-gray-400 uppercase tracking-widest hover:border-red-600 hover:text-white transition-all cursor-default">
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-6">{t.cta}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/905433083704" className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">{t.whatsapp}</a>
            <a href="/contact" className="px-8 py-3 border border-gray-700 hover:border-red-600 hover:text-red-500 rounded font-bold tracking-widest uppercase text-sm transition-all">{t.contact}</a>
          </div>
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