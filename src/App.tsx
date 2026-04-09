import { useEffect, useState } from "react";

// ─── ClicksScale brand ────────────────────────────────────────────────────────
const CS_LOGO =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/9xh2hCCh94Tp5EyhUvXQdPhcEWK2/uploads/1763656087512-Click%20Scale%20Favicon.png";

// ─── MEXA assets — proxied via wsrv.nl for HTTPS (mexa.lv has no SSL) ───────
const px = (path: string) => `https://wsrv.nl/?url=mexa.lv${path}`;

const MEXA = {
  logo: px("/wp-content/uploads/2013/05/logo_mexa.png"),
  green: "#339966",
  greenDark: "#1f5c3a",
  greenDeep: "#0d2b1a",
  slides: [
    px("/wp-content/uploads/2013/06/slaids1.png"),
    px("/wp-content/uploads/2013/06/slaids2.png"),
    px("/wp-content/uploads/2013/06/slaids3.png"),
    px("/wp-content/uploads/2013/06/slaids4.png"),
    px("/wp-content/uploads/2013/06/slaids5.png"),
  ],
  products: {
    mobile: px("/wp-content/uploads/2013/05/1222_drukai1.jpg"),
    stationary: px("/wp-content/uploads/2013/05/2326_drukai1.jpg"),
    hero: px("/wp-content/uploads/2013/05/11.png"),
  },
  coolers: [
    { img: px("/wp-content/uploads/2013/05/FJ.png"), name: "TJ sērijas modelis" },
    { img: px("/wp-content/uploads/2013/05/GE_2009.png"), name: "GZ sērijas modelis" },
    { img: px("/wp-content/uploads/2013/05/Sp_100.png"), name: "SP sērijas modelis" },
    { img: px("/wp-content/uploads/2013/05/Confort.png"), name: "Confort modelis" },
    { img: px("/wp-content/uploads/2013/05/Farm.png"), name: "Farm modelis" },
    { img: px("/wp-content/uploads/2013/05/EC_2009.png"), name: "EC sērijas modelis" },
  ],
};

const NAV = ["Par mums", "Graudu kaltes", "Transportēšanas iekārtas", "Uzglabāšanas tornis", "Papildpakalpojumi", "Galerija", "Kontakti"];

// ─── Icons ────────────────────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="m9 18 6-6-6-6" />
  </svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
  </svg>
);
const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const MapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [slide, setSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setSlide((s) => (s + 1) % MEXA.slides.length);
        setFadeIn(true);
      }, 300);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const prevSlide = () => {
    setFadeIn(false);
    setTimeout(() => { setSlide((s) => (s - 1 + MEXA.slides.length) % MEXA.slides.length); setFadeIn(true); }, 200);
  };
  const nextSlide = () => {
    setFadeIn(false);
    setTimeout(() => { setSlide((s) => (s + 1) % MEXA.slides.length); setFadeIn(true); }, 200);
  };

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="font-['Plus_Jakarta_Sans',sans-serif]">

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — CLICKSSCALE DEMO FRAME
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={CS_LOGO} alt="ClicksScale" className="h-9 w-9 rounded-full object-contain shadow-sm" />
              <div>
                <p className="text-sm font-bold text-gray-900 leading-tight">ClicksScale</p>
                <p className="text-[11px] text-gray-400">Web Development Agency</p>
              </div>
            </div>
            <span className="bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-semibold px-3 py-1 rounded-full">
              Demo lapa
            </span>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Personalizēta demonstrācija — MEXA
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
              Mēs izveidojām šo lapu<br />
              <span className="text-blue-600">speciāli priekš jums</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10">
              Zemāk redzat, kā MEXA mājaslapa varētu izskatīties — tāda pati struktūra, jūsu bildes, jūsu produkti. Tikai moderna.
            </p>
            <button
              onClick={() => scrollTo("mexa")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-lg"
            >
              Skatīt demonstrāciju <ChevronDown />
            </button>
            <p className="mt-5 text-xs text-gray-400">Bezmaksas demonstrācija · Nav saistošu pienākumu</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — MEXA SHOWCASE
      ══════════════════════════════════════════════════════ */}
      <div id="mexa">

        {/* Nav */}
        <nav style={{ backgroundColor: MEXA.greenDark }} className="sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <img src={MEXA.logo} alt="MEXA" className="h-12 py-1 object-contain" />
            <div className="hidden md:flex items-center">
              {NAV.map((item) => (
                <a key={item} href="#" onClick={(e) => e.preventDefault()}
                  className="text-white text-xs font-semibold px-3 py-4 hover:opacity-80 transition-opacity uppercase tracking-wide whitespace-nowrap cursor-pointer">
                  {item}
                </a>
              ))}
            </div>
            <div className="md:hidden text-white text-2xl px-3 py-3 cursor-pointer">☰</div>
          </div>
        </nav>

        {/* Hero Slider */}
        <div className="relative overflow-hidden bg-gray-900" style={{ height: "480px" }}>
          <img
            src={MEXA.slides[slide]}
            alt="MEXA"
            className={`w-full h-full object-cover transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-8 w-full">
              <p className="text-white/80 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                GSI (ASV) Oficiālais Pārstāvis Baltijā
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6 max-w-xl">
                Mēs pārstāvam jūsu intereses —<br />
                <span style={{ color: "#7dd356" }}>graudu tehnoloģiju eksperti</span>
              </h2>
              <button
                onClick={() => scrollTo("products")}
                style={{ backgroundColor: MEXA.green }}
                className="inline-flex items-center gap-2 text-white font-bold px-7 py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
              >
                Skatīt produktus <ArrowRight />
              </button>
            </div>
          </div>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors cursor-pointer">
            <ChevronLeft />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors cursor-pointer">
            <ChevronRight />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {MEXA.slides.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${i === slide ? "bg-white scale-125" : "bg-white/50"}`} />
            ))}
          </div>
        </div>

        {/* About */}
        <div className="bg-white py-10 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <img src={MEXA.products.hero} alt="MEXA" className="w-full md:w-72 object-contain rounded-lg shadow-md flex-shrink-0" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: MEXA.green }}>Par mums</p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
                MEXA ir uzņēmums, kas vairāk nekā 20 gadus darbojas lauksaimniecībā, nodrošinot pilna cikla graudu apstrādes risinājumus Baltijas valstīs.
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                No 2001. gada uzņēmums aktīvi iesaistās graudu primārās apstrādes kompleksu projektēšanā, biznesa procesu pilnveidošanā, graudu primārās apstrādes procesā — graudu transportēšanā, kaltēšanā, uzglabāšanā.
              </p>
              <p className="font-bold text-sm" style={{ color: MEXA.green }}>
                TAGAD ESAM AR "Izstāžu kompleksa RĀMAVA" Ķekavos novada Valdlaucos
              </p>
            </div>
          </div>
        </div>

        {/* Red seasonal bar */}
        <div className="bg-red-600 py-4 px-6">
          <h3 className="text-white text-xl font-extrabold uppercase tracking-wider text-center">
            Sezonas Piedāvājums
          </h3>
        </div>

        {/* Products — side by side */}
        <div id="products" className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                tag: "GSI T-sērija (ASV)",
                title: "Mobila graudu kalte T232",
                img: MEXA.products.mobile,
                specs: ["Ražīgums: pēc pieprasījuma", "Degšanas tips: propāna gāze", "Kafle ar daudziem: JUMBO", "Kafle ar daudziem: 5,5 T"],
                price: "EUR 3 000–5 000 + PVN",
              },
              {
                tag: "GSI 2100-sērija (ASV)",
                title: "Stacionārā graudu kalte 2100",
                img: MEXA.products.stationary,
                specs: ["Ražīgums: 51,2 t/h", "Degšanas tips: propāna gāze", "Kafle ar daudziem: Stacionary 2100", "Kafle: 5 kārtas kolonna"],
                price: "EUR 15 000–30 000 + PVN",
              },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-gray-50 p-6 flex items-center justify-center h-56">
                  <img src={p.img} alt={p.title} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] mb-1" style={{ color: MEXA.green }}>{p.tag}</p>
                  <h4 className="text-lg font-extrabold text-gray-900 mb-3">{p.title}</h4>
                  <ul className="space-y-1.5 mb-5">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: MEXA.green + "22", color: MEXA.green }}>
                          <Check />
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm font-semibold text-gray-500 mb-4">Cena: {p.price}</div>
                  <button style={{ backgroundColor: MEXA.green }} className="w-full text-white font-bold py-2.5 rounded-lg hover:opacity-90 transition-opacity cursor-pointer text-sm">
                    Pieteikt konsultāciju
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coolers */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: MEXA.green }}>SILDĪTĀJI</p>
              <h3 className="text-3xl font-extrabold text-gray-900">Graudu sildīšnas risinājumi</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {MEXA.coolers.map((c) => (
                <div key={c.name} className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center hover:border-green-300 hover:shadow-sm transition-all duration-200 cursor-pointer group">
                  <img src={c.img} alt={c.name} className="h-20 w-full object-contain mb-3 group-hover:scale-105 transition-transform duration-200" />
                  <p className="text-xs font-medium text-gray-600 leading-tight">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ backgroundColor: MEXA.green }} className="py-10 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ n: "2001", l: "Dibināšanas gads" }, { n: "23+", l: "Gadi pieredzē" }, { n: "GSI", l: "ASV sertifikāts" }, { n: "3", l: "Baltijas valstis" }].map((s) => (
              <div key={s.l}>
                <div className="text-4xl font-extrabold text-white mb-1">{s.n}</div>
                <div className="text-green-100 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div id="kontakti" className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <img src={MEXA.logo} alt="MEXA" className="h-14 object-contain mb-6" />
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: MEXA.green }}>Sazināties</p>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Kontakti</h3>
              <div className="space-y-4">
                {[
                  { icon: <MapPin />, text: "Tirgoņu iela 4a, Cēsis, LV-4101" },
                  { icon: <Phone />, text: "+371 26 588 885 · +371 29 276 699" },
                  { icon: <Mail />, text: "a.barkans@mexa.lv · eriksdainis@mexa.lv" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: MEXA.green }}>{icon}</span>
                    <span className="text-gray-600 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-5">Nosūtīt ziņojumu</h4>
              <div className="space-y-4">
                <input type="text" placeholder="Jūsu vārds" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-400 transition-colors" />
                <input type="email" placeholder="E-pasta adrese" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-400 transition-colors" />
                <textarea placeholder="Jūsu ziņojums" rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-400 transition-colors resize-none" />
                <button style={{ backgroundColor: MEXA.green }} className="w-full text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                  Nosūtīt
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MEXA footer */}
        <div style={{ backgroundColor: MEXA.greenDeep }} className="py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            <img src={MEXA.logo} alt="MEXA" className="h-8 object-contain opacity-80" />
            <p className="text-green-300/60 text-xs text-center">© {new Date().getFullYear()} MEXA SIA · Tirgoņu iela 4a, Cēsis · mexa.lv</p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — CLICKSSCALE CTA
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white border-t-4 border-blue-600">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src={CS_LOGO} alt="ClicksScale" className="h-12 w-12 rounded-full object-contain shadow-md" />
            <span className="text-2xl font-bold text-gray-900">ClicksScale</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 leading-tight">Patīk tas, ko redzi?</h2>
          <p className="text-xl text-gray-400 mb-3">Tieši tā izskatās mūsu darbs.</p>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
            Šī demonstrācijas lapa tika izveidota 48 stundu laikā — ar jūsu īstajiem attēliem, jūsu krāsām, jūsu produktiem. Mēs veidojam mājaslapas, kas pārdod.
          </p>
          <a href="mailto:hello@clicksscale.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-lg">
            Sazināties ar ClicksScale <ArrowRight />
          </a>
          <p className="mt-6 text-sm text-gray-400">Bez saistībām · Bezmaksas konsultācija · Atbilde 24 st. laikā</p>
        </div>
        <div className="border-t border-gray-100 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <span>© {new Date().getFullYear()} ClicksScale. Visas tiesības aizsargātas.</span>
            <span className="italic">Šī lapa ir izveidota kā demonstrācija MEXA — nav publiska mājaslapa.</span>
          </div>
        </div>
      </section>

    </div>
  );
}
