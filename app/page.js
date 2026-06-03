"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const brands = [
  "Honda", "Yamaha", "Kawasaki", "Suzuki",
  "Ducati", "KTM", "Triumph", "Royal Enfield", "Aprilia"
];

const content = {
  en: {
    location: "◆ Brussels, Belgium ◆",
    opening: "Opening In",
    month: "November 2026",
    tagline: "Independent · All Brands · Fair Prices",
    services: "Services",
    about_title: "About",
    about_text: "NailGUN Motorworks will be Brussels' first AI-powered motorcycle repair, maintenance and custom workshop. With 10 years of hands-on experience, we service all major brands with transparent pricing and modern diagnostics.",
    gallery_title: "Our Work",
    nav: ["Services", "About", "Contact"],
    stats: [
      { value: 10, suffix: "+", label: "Years Experience" },
      { value: 500, suffix: "+", label: "Bikes Serviced" },
      { value: 9, suffix: "", label: "Brands Covered" },
    ],
    items: [
      { icon: "🛢", title: "Oil Change", desc: "All brands & engine types", price: "from €45" },
      { icon: "🔴", title: "Brake Service", desc: "Pads, discs, fluid flush", price: "from €60" },
      { icon: "⛓", title: "Chain & Belt", desc: "Chain kit, CVT belt, sprockets", price: "from €120" },
      { icon: "🔧", title: "Full Service", desc: "6.000 / 12.000 km revision", price: "from €180" },
      { icon: "🔋", title: "Diagnostics", desc: "Electronic fault scanning", price: "from €40" },
      { icon: "🏍", title: "Tyre Fitting", desc: "Mounting, balancing, TPMS", price: "from €20" },
    ],
  },
  fr: {
    location: "◆ Bruxelles, Belgique ◆",
    opening: "Ouverture Dans",
    month: "Novembre 2026",
    tagline: "Independant · Toutes Marques · Prix Justes",
    services: "Services",
    about_title: "A Propos",
    about_text: "NailGUN Motorworks sera le premier atelier de reparation, entretien et custom moto assiste par IA a Bruxelles. Avec 10 ans d'experience, nous intervenons sur toutes les grandes marques avec des tarifs transparents et un diagnostic moderne.",
    gallery_title: "Nos Realisations",
    nav: ["Services", "A Propos", "Contact"],
    stats: [
      { value: 10, suffix: "+", label: "Ans d'Experience" },
      { value: 500, suffix: "+", label: "Motos Entretenues" },
      { value: 9, suffix: "", label: "Marques Couvertes" },
    ],
    items: [
      { icon: "🛢", title: "Vidange Huile", desc: "Toutes marques & types de moteurs", price: "des €45" },
      { icon: "🔴", title: "Freinage", desc: "Plaquettes, disques, purge liquide", price: "des €60" },
      { icon: "⛓", title: "Chaine & Courroie", desc: "Kit chaine, courroie CVT, pignons", price: "des €120" },
      { icon: "🔧", title: "Revision Complete", desc: "Revision 6.000 / 12.000 km", price: "des €180" },
      { icon: "🔋", title: "Diagnostic Electronique", desc: "Lecture des codes defauts", price: "des €40" },
      { icon: "🏍", title: "Montage Pneus", desc: "Montage, equilibrage, TPMS", price: "des €20" },
    ],
  },
};

function useCountUp(target, duration = 1500, trigger) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

function StatCard({ value, suffix, label, trigger }) {
  const count = useCountUp(value, 1500, trigger);
  return (
    <div className="text-center">
      <div className="text-5xl font-black text-white">
        {count}<span className="text-red-500">{suffix}</span>
      </div>
      <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">{label}</div>
    </div>
  );
}

function Stats({ stats }) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="w-full max-w-2xl grid grid-cols-3 gap-8 mb-10">
      {stats.map((s) => <StatCard key={s.label} {...s} trigger={triggered} />)}
    </div>
  );
}

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
          <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
}

function MarqueeBrands() {
  const repeated = [...brands, ...brands, ...brands];
  return (
    <div className="w-full overflow-hidden mb-10">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track { display: flex; animation: marquee 18s linear infinite; width: max-content; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="marquee-track">
        {repeated.map((brand, i) => (
          <div key={i} className="flex items-center">
            <span className="text-gray-400 font-black uppercase tracking-widest text-sm px-8 hover:text-red-500 transition-colors cursor-default whitespace-nowrap">{brand}</span>
            <span className="text-red-800 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Navbar({ lang, setLang, nav }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-black uppercase tracking-tight text-lg cursor-pointer" onClick={() => router.push("/")}>
          nail<span className="text-red-500">GUN</span>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => router.push("/services")} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest transition-colors hidden md:block">{nav[0]}</button>
          <button onClick={() => router.push("/about")} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest transition-colors hidden md:block">{nav[1]}</button>
          <button onClick={() => router.push("/contact")} className="text-xs text-gray-400 hover:text-white uppercase tracking-widest transition-colors hidden md:block">{nav[2]}</button>
          <div className="flex gap-1 ml-4">
            <button onClick={() => setLang("en")} className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-all ${lang === "en" ? "bg-red-600 text-white" : "border border-gray-700 text-gray-400 hover:border-gray-500"}`}>EN</button>
            <button onClick={() => setLang("fr")} className={`px-3 py-1 text-xs font-bold rounded uppercase tracking-wider transition-all ${lang === "fr" ? "bg-red-600 text-white" : "border border-gray-700 text-gray-400 hover:border-gray-500"}`}>FR</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Gallery({ title }) {
  const images = [
    { src: "/gallery1.jpg", label: "Custom Build" },
    { src: "/gallery2.jpg", label: "Workshop" },
    { src: "/gallery3.jpg", label: "Engine Detail" },
  ];
  return (
    <div id="gallery" className="w-full max-w-4xl mb-10 scroll-mt-20">
      <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-6">{title}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.src} className="relative group overflow-hidden rounded-lg border border-gray-800 hover:border-red-600 transition-all" style={{ height: "220px" }}>
            <Image src={img.src} alt={img.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
            <div className="absolute bottom-3 left-3">
              <span className="text-xs text-white font-bold uppercase tracking-widest">{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <div className="relative min-h-screen text-white">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg.jpg')" }} />
      <div className="fixed inset-0 bg-black/55" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_#1a000055_0%,_#000000aa_70%)]" />
      <div className="fixed top-0 left-0 right-0 h-px bg-red-600 opacity-60 z-10" />

      <Navbar lang={lang} setLang={setLang} nav={t.nav} />

      <main className="relative z-10 flex flex-col items-center px-6 pt-32 pb-0">

        <div className="text-center space-y-2 mb-10">
          <div className="text-xs text-red-500 tracking-[0.3em] uppercase mb-4">{t.location}</div>
          <h1 className="text-6xl font-black tracking-tight uppercase leading-none">
            nail<span className="text-red-500">GUN</span>
            <br />
            <span className="text-4xl font-light tracking-[0.2em]">motorworks</span>
          </h1>
          <p className="text-xs text-gray-400 tracking-widest uppercase mt-4">Brussels' First AI-Powered Motorcycle Workshop</p>
        </div>

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mb-10" />

        <div className="text-center space-y-4 mb-10">
          <p className="text-gray-400 uppercase tracking-[0.2em] text-sm">{t.opening}</p>
          <Countdown />
          <p className="text-gray-600 text-xs tracking-widest uppercase">{t.month}</p>
        </div>

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10" />

        <Stats stats={t.stats} />

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10" />

        <div id="services" className="w-full max-w-3xl mb-10 scroll-mt-20">
          <p className="text-center text-xs text-gray-500 uppercase tracking-widest mb-6">{t.services}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {t.items.map((s) => (
              <div key={s.title} className="border border-gray-800 hover:border-red-600 rounded-lg p-4 text-center transition-all hover:bg-red-600/5">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="text-sm font-bold uppercase tracking-wider text-white">{s.title}</div>
                <div className="text-xs text-gray-500 mt-1">{s.desc}</div>
                <div className="text-xs text-red-500 font-bold mt-2">{s.price}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10" />

        <Gallery title={t.gallery_title} />

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10" />

        <MarqueeBrands />

        <div id="about" className="w-full max-w-2xl mb-10 text-center scroll-mt-20">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{t.about_title}</p>
          <p className="text-gray-300 text-sm leading-7">{t.about_text}</p>
        </div>

        <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10" />

        <p className="text-gray-500 text-xs tracking-widest uppercase mb-8 text-center px-4">{t.tagline}</p>

        <div id="contact" className="flex flex-wrap gap-4 justify-center scroll-mt-20 mb-16">
          <a href="https://www.youtube.com/@nailGUN-motorworks" className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">YouTube</a>
          <a href="https://instagram.com/nailkazandere" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">Instagram</a>
          <a href="https://wa.me/905433083704" className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">WhatsApp</a>
          <a href="mailto:info@nailgunmotorworks.com" className="px-8 py-3 border border-gray-700 hover:border-red-600 hover:text-red-500 rounded font-bold tracking-widest uppercase text-sm transition-all hover:scale-105">Contact</a>
        </div>

      </main>

      <footer className="relative z-10 w-full border-t border-gray-900 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="font-black uppercase tracking-tight text-lg">
              nail<span className="text-red-500">GUN</span> <span className="font-light text-gray-500">motorworks</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">Brussels, Belgium · Opening November 2026</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.youtube.com/@nailGUN-motorworks" className="text-xs text-gray-500 hover:text-red-500 uppercase tracking-widest transition-colors">YouTube</a>
            <a href="https://instagram.com/nailkazandere" className="text-xs text-gray-500 hover:text-red-500 uppercase tracking-widest transition-colors">Instagram</a>
            <a href="https://wa.me/905433083704" className="text-xs text-gray-500 hover:text-red-500 uppercase tracking-widest transition-colors">WhatsApp</a>
          </div>
          <p className="text-xs text-gray-700">2026 NailGUN Motorworks</p>
        </div>
      </footer>

    </div>
  );
}