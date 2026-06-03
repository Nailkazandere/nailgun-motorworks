"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

const content = {
  en: {
    title: "Contact Us",
    subtitle: "We will get back to you as soon as possible",
    whatsapp_title: "WhatsApp",
    whatsapp_desc: "Fastest response — message us directly",
    whatsapp_btn: "Open WhatsApp",
    email_title: "Email",
    email_desc: "For detailed inquiries and estimates",
    email_btn: "Send Email",
    instagram_title: "Instagram",
    instagram_desc: "Follow our work and projects",
    instagram_btn: "Follow Us",
    youtube_title: "YouTube",
    youtube_desc: "Watch our builds and tutorials",
    youtube_btn: "Subscribe",
    opening_title: "Opening Soon",
    opening_text: "NailGUN Motorworks is opening in Brussels, Belgium in November 2026. We are currently accepting pre-bookings via WhatsApp.",
  },
  fr: {
    title: "Contactez-Nous",
    subtitle: "Nous vous repondrons le plus rapidement possible",
    whatsapp_title: "WhatsApp",
    whatsapp_desc: "Reponse la plus rapide — ecrivez-nous directement",
    whatsapp_btn: "Ouvrir WhatsApp",
    email_title: "Email",
    email_desc: "Pour les demandes detaillees et les devis",
    email_btn: "Envoyer un Email",
    instagram_title: "Instagram",
    instagram_desc: "Suivez nos travaux et projets",
    instagram_btn: "Nous Suivre",
    youtube_title: "YouTube",
    youtube_desc: "Regardez nos constructions et tutoriels",
    youtube_btn: "S'abonner",
    opening_title: "Ouverture Prochaine",
    opening_text: "NailGUN Motorworks ouvre a Bruxelles, Belgique en novembre 2026. Nous acceptons actuellement les pre-reservations via WhatsApp.",
  },
};

export default function ContactPage() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  const channels = [
    {
      icon: "💬",
      title: t.whatsapp_title,
      desc: t.whatsapp_desc,
      btn: t.whatsapp_btn,
      href: "https://wa.me/905433083704",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: "✉️",
      title: t.email_title,
      desc: t.email_desc,
      btn: t.email_btn,
      href: "mailto:info@nailgunmotorworks.com",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      icon: "📸",
      title: t.instagram_title,
      desc: t.instagram_desc,
      btn: t.instagram_btn,
      href: "https://instagram.com/nailkazandere",
      color: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
    },
    {
      icon: "▶️",
      title: t.youtube_title,
      desc: t.youtube_desc,
      btn: t.youtube_btn,
      href: "https://www.youtube.com/@nailGUN-motorworks",
      color: "bg-red-700 hover:bg-red-800",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar lang={lang} setLang={setLang} />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">

        <div className="text-center mb-16">
          <p className="text-xs text-red-500 tracking-[0.3em] uppercase mb-4">NailGUN Motorworks</p>
          <h1 className="text-5xl font-black uppercase">{t.title}</h1>
          <p className="text-gray-500 text-sm mt-4">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {channels.map((ch) => (
            <div key={ch.title} className="border border-gray-800 hover:border-gray-600 rounded-lg p-6 transition-all">
              <div className="text-3xl mb-3">{ch.icon}</div>
              <h2 className="text-lg font-black uppercase tracking-wider mb-1">{ch.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{ch.desc}</p>
              <a href={ch.href} className={`inline-block px-6 py-2 ${ch.color} rounded font-bold tracking-widest uppercase text-xs transition-all hover:scale-105`}>
                {ch.btn}
              </a>
            </div>
          ))}
        </div>

        <div className="border border-gray-800 rounded-lg p-8 text-center">
          <div className="text-xs text-red-500 tracking-widest uppercase mb-4">{t.opening_title}</div>
          <p className="text-gray-300 text-sm leading-7 max-w-lg mx-auto">{t.opening_text}</p>
          <div className="mt-6 text-xs text-gray-600 uppercase tracking-widest">
            Brussels, Belgium · November 2026
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