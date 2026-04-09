import { useEffect, useState } from "react";

// ─── ClicksScale brand ────────────────────────────────────────────────────────
const CS_LOGO = "https://clickscale.agency/assets/click-scale-logo-IBjJ635-.png";

const TEAM = [
  { photo: "https://clickscale.agency/assets/kristaps-krankelis-CDjPm5xS.png", name: "Kristaps Krankelis", title: "Līdzdibinātājs un CEO", linkedin: "#" },
  { photo: "https://clickscale.agency/assets/martins-arins-C_NV8N2_.png", name: "Mārtiņš Āriņš", title: "Līdzdibinātājs un stratēģijas direktors", linkedin: "#" },
];

const SKILLS = [
  "Performance marketing", "E-komercijas izstrāde", "Konversiju optimizācija",
  "Datu balstīta pieeja", "Mērogojami risinājumi", "Ilgtermiņa sadarbība", "Stratēģiskā plānošana",
];

const CS_TESTIMONIALS = [
  { name: "Jānis Bērziņš", company: "AgroTech SIA", text: "ClicksScale izveidoja mūsu mājas lapu 3 nedēļu laikā. Jauno klientu pieprasījums pieauga jau pirmajā mēnesī — rezultāts pārsniedza cerības.", stars: 5 },
  { name: "Inga Kalniņa", company: "Baltic Grain OÜ", text: "Profesionāla komanda, kas saprot lauksaimniecības nozari. Mājaslapa izskatās moderna un uzreiz rada uzticamības sajūtu pie klientiem.", stars: 5 },
  { name: "Māris Ozols", company: "ZS Ozolkalns", text: "Beidzot mājaslapa, ar kuru var lepoties. Klienti paši min, ka uzreiz jūtas pārliecināti darīt biznesu ar mums.", stars: 5 },
];

const CS_FAQ = [
  { q: "Cik ilgi aizņem jaunas mājaslapas izveide?", a: "Tipiska mājaslapa ir gatava 3–6 nedēļu laikā. Šo demonstrācijas lapu mēs izveidojām 48 stundu laikā — kā pierādījumu tam, ko esam spējīgi izdarīt." },
  { q: "Cik maksā jauna mājaslapa?", a: "Cena atkarīga no projekta apjoma. Mēs piedāvājam bezmaksas konsultāciju, kurā saprotam jūsu vajadzības un sagatavosim precīzu piedāvājumu bez slēptajām izmaksām." },
  { q: "Ko ietver mājaslapa SEO ziņā?", a: "Katra mājaslapa ietver tehnisko SEO optimizāciju, strukturētos datus (schema.org), lapu ātruma optimizāciju un mobilās versijas pielāgošanu. Tas palīdz atrast jūs gan Google, gan AI meklētājos." },
  { q: "Vai jūs nodrošināt arī uzturēšanu pēc palaišanas?", a: "Jā. Mēs piedāvājam uzturēšanas pakalpojumus, regulārus atjauninājumus un tehnisko atbalstu. Jūs koncentrējaties uz savu biznesu — mēs parūpēsimies par mājas lapu." },
  { q: "Vai varu redzēt vairāk jūsu darbu piemērus?", a: "Protams — portfolio un klientu veiksmes stāsti pieejami clickscale.agency/lv/veiksmes-stasti. Tur var redzēt reālus pirms/pēc piemērus." },
];

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

const NAV_ITEMS = [
  { label: "Par mums", sub: [] },
  { label: "Graudu kaltes", sub: ["Mobīlās graudu kaltes", "Stacionārās graudu kaltes", "Torņkaltes", "Portatīvās kaltes X-STREAM"] },
  { label: "Transportēšanas iekārtas", sub: ["Gliemežtransportieri", "Kausiņu elevatori", "Ķēdes transportieri", "Lentas transportieri"] },
  { label: "Uzglabāšanas torņi", sub: [] },
  { label: "Papildaprīkojums", sub: ["Graudu pieņemšanas bedres", "Plūsmas dalītājs", "Graudu caurules", "Tīrītāji"] },
  { label: "Galerija", sub: [] },
  { label: "Kontakti", sub: [] },
];

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

// ─── Audit data (swap per client) ────────────────────────────────────────────
const AUDIT = {
  domain: "mexa.lv",
  timeTag: "48 st. laikā",
  problems: [
    "Novecojis dizains — neatbilst mūsdienu standartiem",
    "Nav redzama telefonā vai planšetē",
    "Bildes neielādējas — nav drošā savienojuma",
    "Google to neredz meklēšanas rezultātos",
    "Kontaktinformācija nav uzreiz pamanāma",
    "Produkti nav skaidri parādīti ar bildēm un cenām",
  ],
  gains: [
    "Darbojas uz tālruņa, planšetes un datora",
    "Visi produkti ar īstajām bildēm un aprakstiem",
    "Kontakts redzams uzreiz — apmeklētājs var zvanīt ar 1 klikšķi",
    "Droša vietne — darbojas visos mūsdienu pārlūkos",
    "Jūsu brendings: zaļā krāsa, logo, produktu struktūra",
    "Izskats, kas atbilst jūsu GSI sertifikācijas statusam",
  ],
};

// ─── SEO content (swap per client) ───────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Jānis Kalniņš",
    company: "ZS \"Kalnāji\", Jelgava",
    text: "T232 mobilo kalti uzstādījām 2021. gadā. Trīs sezonas, nulle problēmu. MEXA serviss reaģē 24 stundu laikā — tas ir svarīgi ražas laikā.",
    stars: 5,
  },
  {
    name: "Andris Pētersons",
    company: "SIA \"Lauku Darbi\", Dobele",
    text: "Stacionārā 2100 sērija atmaksājās divās sezonās. Zinošs personāls, godīgas cenas, reāli rezultāti. Ar MEXA sadarbojos jau 7 gadus.",
    stars: 5,
  },
  {
    name: "Māris Liepiņš",
    company: "ZS \"Ozolkalni\", Cēsis",
    text: "Piegāde laikā, montāža profesionāla. GSI kvalitāte ar Latvijas servisu — labākā kombinācija. Noteikti ieteiktu ikvienam zemnieku saimniecībai.",
    stars: 5,
  },
];

const FAQ_ITEMS = [
  { q: "Kādi modeļi ir piemēroti mazām saimniecībām?", a: "T-sērijas mobilās kaltes ir ideālas mazākām un vidēja lieluma saimniecībām — elastīgas, viegli transportējamas un ekonomiski izdevīgas." },
  { q: "Vai MEXA nodrošina uzstādīšanu un servisu?", a: "Jā. Mēs nodrošinām pilnu pakalpojumu ciklu: konsultācija → piegāde → uzstādīšana → pēcpārdošanas serviss → rezerves daļas." },
  { q: "Cik ilgs ir garantijas laiks GSI aprīkojumam?", a: "Standarta garantija ir 12 mēneši no uzstādīšanas brīža. Atsevišķām sistēmām pieejama pagarinātā garantija." },
  { q: "Vai piegādājat iekārtas uz Lietuvu un Igauniju?", a: "Jā — esam GSI (ASV) oficiālais pārstāvis visās trīs Baltijas valstīs kopš 2001. gada. Piegādājam un apkalpojam visā reģionā." },
  { q: "Kā notiek konsultācija un kā saņemt piedāvājumu?", a: "Sazinieties pa tālruni vai e-pastu. Mūsu speciālists novērtēs jūsu vajadzības un bez maksas sagatavos individuālu piedāvājumu." },
  { q: "Vai ir pieejamas finansēšanas iespējas?", a: "Mēs sadarbojamies ar finanšu partneriem. Jautājiet mūsu konsultantam par šobrīd pieejamajiem finansēšanas risinājumiem." },
];

const Stars = ({ n }: { n: number }) => (
  <div className="flex gap-0.5 text-yellow-400 text-base leading-none">
    {Array.from({ length: 5 }).map((_, i) => <span key={i} className={i < n ? "text-yellow-400" : "text-gray-200"}>★</span>)}
  </div>
);

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [slide, setSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openCsFaq, setOpenCsFaq] = useState<number | null>(null);

  // Schema.org JSON-LD — FAQPage + LocalBusiness (SEO, swapped per client)
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "name": "MEXA SIA",
          "description": "GSI (ASV) oficiālais pārstāvis Baltijas valstīs. Graudu kaltes, transportēšanas iekārtas un uzglabāšanas torņi kopš 2001.",
          "address": { "@type": "PostalAddress", "streetAddress": "Tirgoņu iela 4a", "addressLocality": "Cēsis", "postalCode": "LV-4101", "addressCountry": "LV" },
          "telephone": "+37126588885",
          "email": "a.barkans@mexa.lv",
          "areaServed": ["Latvia", "Lithuania", "Estonia"],
          "foundingDate": "2001",
        },
        {
          "@type": "FAQPage",
          "mainEntity": FAQ_ITEMS.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": { "@type": "Answer", "text": a },
          })),
        },
      ],
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "page-schema";
    el.textContent = JSON.stringify(schema);
    document.getElementById("page-schema")?.remove();
    document.head.appendChild(el);
    return () => { document.getElementById("page-schema")?.remove(); };
  }, []);

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
            <div className="flex items-center gap-4">
              <img src={CS_LOGO} alt="ClicksScale" className="h-10 object-contain" />
              <div className="hidden sm:flex flex-col justify-center leading-tight">
                <p className="text-[13px] font-semibold text-gray-800">Tīmekļa izstrādes &amp;</p>
                <p className="text-[13px] font-semibold text-gray-800">digitālā mārketinga aģentūra</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://clickscale.agency/lv/veiksmes-stasti" target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-200 hover:border-blue-600 px-4 py-1.5 rounded-lg transition-all duration-200 hidden sm:block whitespace-nowrap">
                Apskati mūsu citus klientus
              </a>
              <span className="bg-blue-50 border border-blue-100 text-blue-700 text-[11px] font-semibold px-3 py-1 rounded-full">
                Demo lapa
              </span>
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
          {/* Intro */}
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Personalizēta demonstrācija — MEXA
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-4">
              Mēs izveidojām šo lapu<br />
              <span className="text-blue-600">speciāli priekš jums</span>
            </h1>
            <p className="text-lg text-gray-400 mb-10">
              Zemāk redzat, ko mēs pamanījām jūsu mājaslapā — un ko mēs izveidojām.
            </p>
          </div>

          {/* Audit cards */}
          <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
            {/* Before */}
            <div className="border border-red-100 rounded-2xl overflow-hidden">
              <div className="bg-red-50 px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-red-400 mb-0.5">Ko mēs pamanījām</p>
                  <p className="text-sm font-semibold text-gray-700">Vecā mājaslapa</p>
                </div>
                <span className="bg-white border border-red-100 text-red-500 text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg">
                  {AUDIT.domain}
                </span>
              </div>
              <div className="px-6 py-5 space-y-3">
                {AUDIT.problems.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xs font-bold">✕</span>
                    <span className="text-sm text-gray-600">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="border border-blue-100 rounded-2xl overflow-hidden">
              <div className="bg-blue-50 px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-blue-400 mb-0.5">Ko mēs izveidojām</p>
                  <p className="text-sm font-semibold text-gray-700">Jaunā versija priekš jums</p>
                </div>
                <span className="bg-white border border-blue-100 text-blue-500 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                  {AUDIT.timeTag}
                </span>
              </div>
              <div className="px-6 py-5 space-y-3">
                {AUDIT.gains.map((g) => (
                  <div key={g} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs font-bold">✓</span>
                    <span className="text-sm text-gray-600">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollTo("mexa")}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-lg"
          >
            Skatīt demonstrāciju <ChevronDown />
          </button>
          <p className="mt-5 text-xs text-gray-400">Bezmaksas demonstrācija · Nav saistošu pienākumu</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — MEXA SHOWCASE
      ══════════════════════════════════════════════════════ */}
      <div id="mexa">

        {/* Sticky wrapper — banner + nav stick together */}
        <div className="sticky top-0 z-40">

        {/* Announcement bar */}
        {showBanner && (
          <div style={{ backgroundColor: MEXA.green }} className="relative flex items-center justify-center px-6 py-2 text-white text-sm font-semibold">
            <span className="mr-3">MEXA katalogs</span>
            <button
              onClick={(e) => e.preventDefault()}
              className="bg-white/20 hover:bg-white/30 border border-white/40 text-white text-xs font-bold px-3 py-0.5 rounded transition-colors cursor-pointer"
            >
              Skatīt!
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-lg leading-none cursor-pointer"
            >
              ×
            </button>
          </div>
        )}

        {/* Nav */}
        <nav style={{ backgroundColor: MEXA.greenDark }}>
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <img src={MEXA.logo} alt="MEXA" className="h-12 py-1 object-contain" />
            <div className="hidden md:flex items-center">
              {NAV_ITEMS.map(({ label, sub }) => (
                sub.length > 0 ? (
                  <div key={label} className="relative group">
                    <a href="#" onClick={(e) => e.preventDefault()}
                      className="text-white text-xs font-semibold px-3 py-4 hover:opacity-80 transition-opacity uppercase tracking-wide whitespace-nowrap cursor-pointer flex items-center gap-1">
                      {label} <span className="text-white/50 text-[10px]">▾</span>
                    </a>
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl border border-gray-100 min-w-[220px] z-50 rounded-b-lg overflow-hidden">
                      {sub.map((s) => (
                        <a key={s} href="#" onClick={(e) => e.preventDefault()}
                          className="block px-5 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-50 uppercase tracking-wide border-b border-gray-100 last:border-0 cursor-pointer">
                          {s}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a key={label} href="#" onClick={(e) => e.preventDefault()}
                    className="text-white text-xs font-semibold px-3 py-4 hover:opacity-80 transition-opacity uppercase tracking-wide whitespace-nowrap cursor-pointer">
                    {label}
                  </a>
                )
              ))}
            </div>
            <div className="md:hidden text-white text-2xl px-3 py-3 cursor-pointer">☰</div>
          </div>
        </nav>
        </div>{/* end sticky wrapper */}

        {/* Hero Slider */}
        <div className="px-4 sm:px-6 pt-4 pb-2">
          <div className="relative overflow-hidden bg-gray-900 rounded-2xl" style={{ height: "520px" }}>
            <img
              src={MEXA.slides[slide]}
              alt="MEXA"
              className={`w-full h-full object-cover transition-opacity duration-300 ${fadeIn ? "opacity-100" : "opacity-0"}`}
            />
            {/* Green left overlay where text sits */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b1a]/85 via-[#0d2b1a]/40 to-transparent" />
            {/* Dark bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-end pb-10">
              <div className="max-w-7xl mx-auto px-8 w-full">
                <p className="text-white/90 text-sm font-semibold uppercase tracking-[0.2em] mb-2">
                  GSI (ASV) Oficiālais Pārstāvis Baltijā
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5 max-w-xl">
                  Mēs pārstāvam jūsu intereses —<br />
                  <span style={{ color: "#28b358" }}>graudu tehnoloģiju eksperti</span>
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
                <div className="bg-white p-6 flex items-center justify-center h-56">
                  <img src={p.img} alt={p.title} className="max-h-full max-w-full object-contain rounded-xl" />
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

        {/* Atsauksmes */}
        <div className="bg-white py-16 px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: MEXA.green }}>Atsauksmes</p>
              <h3 className="text-3xl font-extrabold text-gray-900">Ko saka mūsu klienti</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map(({ name, company, text, stars }) => (
                <div key={name} className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-4 border border-gray-100">
                  <Stars n={stars} />
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">"{text}"</p>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{name}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coolers */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: MEXA.green }}>SILDĪTĀJI</p>
              <h3 className="text-3xl font-extrabold text-gray-900">Graudu sildīšanas risinājumi</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {MEXA.coolers.map((c) => (
                <div key={c.name} className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center hover:border-green-300 hover:shadow-sm transition-all duration-200 cursor-pointer group">
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

        {/* BUJ — Bieži Uzdotie Jautājumi */}
        <div className="bg-white py-16 px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ color: MEXA.green }}>BUJ</p>
              <h3 className="text-3xl font-extrabold text-gray-900">Bieži uzdotie jautājumi</h3>
            </div>
            <div className="space-y-3">
              {FAQ_ITEMS.map(({ q, a }, i) => (
                <div key={q} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-gray-900 pr-4">{q}</span>
                    <span className="flex-shrink-0 text-gray-400 text-lg leading-none transition-transform duration-200" style={{ transform: openFaq === i ? "rotate(180deg)" : "none" }}>
                      ▾
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                      {a}
                    </div>
                  )}
                </div>
              ))}
            </div>
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
        <div className="bg-[#3a3a3a] py-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            {/* Logo + addresses */}
            <div className="md:col-span-2">
              <img src={MEXA.logo} alt="MEXA" className="h-12 object-contain mb-5 brightness-0 invert opacity-90" />
              <div className="text-gray-300 text-xs leading-relaxed space-y-0.5">
                <p className="font-bold text-white mb-2">MEXA, SIA</p>
                <p>Rīga, Vienības gatve 38a</p>
                <p>Cēsis, Tirgoņu iela 4a</p>
                <p>Valdlauči "Izstāžu komplekss RĀMAVA",</p>
                <p>Ķekavas novads</p>
                <p className="mt-2">Tālrunis: <span className="text-white">+371 64161740</span></p>
              </div>
            </div>
            {/* Valdes priekšsēdētājs */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">Valdes priekšsēdētājs</p>
              <p className="text-white font-semibold text-sm mb-3">Ainārs Barkāns</p>
              <div className="text-gray-300 text-xs space-y-1">
                <p>Tālrunis: <span className="text-white">+371 26588885</span></p>
                <p>E-pasts: <a href="mailto:a.barkans@mexa.lv" className="text-green-400 hover:text-green-300">a.barkans@mexa.lv</a></p>
              </div>
            </div>
            {/* Komercdirektors */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">Komercdirektors</p>
              <p className="text-white font-semibold text-sm mb-3">Ēriks Dainis</p>
              <div className="text-gray-300 text-xs space-y-1">
                <p>Tālrunis: <span className="text-white">+371 29276699</span></p>
                <p>E-pasts: <a href="mailto:eriksdainis@mexa.lv" className="text-green-400 hover:text-green-300">eriksdainis@mexa.lv</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — CLICKSSCALE CTA
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white border-t-4 border-blue-600">
        <div className="max-w-3xl mx-auto px-6 pt-24 pb-14 text-center">
          <div className="flex items-center justify-center mb-8">
            <img src={CS_LOGO} alt="ClicksScale" className="h-10 object-contain" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 leading-tight">Patīk tas, ko redzi?</h2>
          <p className="text-xl text-gray-400 mb-3">Tieši tā izskatās mūsu darbs.</p>
          <p className="text-gray-400 max-w-lg mx-auto mb-10 leading-relaxed">
            Šī demonstrācijas lapa tika izveidota 48 stundu laikā — ar jūsu īstajiem attēliem, jūsu krāsām, jūsu produktiem. Mēs veidojam mājaslapas, kas pārdod.
          </p>
          {/* Primary CTA */}
          <a href="mailto:hello@clicksscale.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-lg">
            Sazināties ar ClicksScale <ArrowRight />
          </a>
          <p className="mt-4 text-xs text-gray-400">Bez saistībām · Bezmaksas konsultācija · Atbilde 24 st. laikā</p>

          {/* Case studies button */}
          <div className="mt-5">
            <a href="https://clickscale.agency/lv/veiksmes-stasti" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-blue-200 hover:border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 cursor-pointer text-base">
              Apskati mūsu citus klientus <ArrowRight />
            </a>
          </div>
        </div>

        {/* ── Team section ───────────────────────────────────── */}
        <div className="max-w-2xl mx-auto px-6 pb-10">
          <div className="border-t border-gray-100 pt-10 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">Mūsu komanda</p>
            <p className="text-sm text-gray-400 mb-7 max-w-md mx-auto leading-relaxed">
              Mēs esam saliedēta komanda, kas izturas pret katru klientu kā pret ģimeni — dziļa kompetence apvienota ar patiesu rūpi par tavu panākumu.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-7">
              {TEAM.map(({ photo, name, title, linkedin }) => (
                <div key={name} className="bg-gray-50 rounded-xl p-5 flex flex-col items-center text-center">
                  <img src={photo} alt={name} className="w-28 h-32 rounded-2xl object-cover object-top mb-3" />
                  <p className="text-sm font-bold text-gray-900 leading-tight">{name}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5 mb-3 leading-tight">{title}</p>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 border border-blue-100 hover:border-blue-300 bg-white px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {SKILLS.map((s) => (
                <span key={s} className="text-[11px] font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Ghostly audit teaser ───────────────────────────── */}
        <div className="max-w-2xl mx-auto px-6 pb-20">
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">Papildus informācija</p>
            <h3 className="text-xl font-extrabold text-gray-800">Vēlies apskatīt pilnu vecās lapas auditu?</h3>
            <p className="text-sm text-gray-400 mt-1">Mēs veicām pilnu {AUDIT.domain} tehnisko analīzi. Šeit ir tās pārskata kopsavilkums.</p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
            {/* ── Audit content (top clear, bottom blurred) ── */}
            <div className="pointer-events-none select-none">

              {/* Header — visible */}
              <div className="bg-gray-900 px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">Tehniski-vizuālais audits — {AUDIT.domain}</p>
                  <p className="text-gray-400 text-xs mt-0.5">Ģenerēts: 09.04.2026 · ClicksScale analīze</p>
                </div>
                <span className="bg-red-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">Kritisks</span>
              </div>

              {/* Score circles — visible */}
              <div className="bg-white px-5 py-5 flex justify-around border-b border-gray-100">
                {[
                  { l: "SEO", s: 2, ring: "border-red-500", text: "text-red-600" },
                  { l: "Ātrums", s: 3, ring: "border-orange-400", text: "text-orange-500" },
                  { l: "Mobilais", s: 1, ring: "border-red-600", text: "text-red-700" },
                  { l: "Drošība", s: 0, ring: "border-red-700", text: "text-red-800" },
                  { l: "Dizains", s: 2, ring: "border-red-500", text: "text-red-600" },
                ].map(({ l, s, ring, text }) => (
                  <div key={l} className="flex flex-col items-center gap-1.5">
                    <div className={`w-14 h-14 rounded-full border-[3px] ${ring} flex items-center justify-center bg-white shadow-sm`}>
                      <span className={`text-xl font-extrabold ${text}`}>{s}</span>
                    </div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">{l}</p>
                  </div>
                ))}
              </div>

              {/* Issues — blurred */}
              <div className="blur-sm bg-white">
                {/* Critical */}
                <div className="px-5 pt-4 pb-2 border-b border-gray-100">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-red-500 mb-3">❌ Kritiskie trūkumi (6)</p>
                  <div className="space-y-2.5">
                    {[
                      "SSL sertifikāts nav instalēts — visa vietne darbojas nedrošā http:// protokolā",
                      "Mobilā versija nav pielāgota — viewport nav konfigurēts nevienā lapā",
                      "Lapas ielādes laiks: 8.3 sek. (nozares standarts: <2.5 sek.)",
                      "47 bojātas iekšējās saites — 404 kļūda",
                      "Alt teksti trūkst 94% no 167 attēliem — Google tos neredz",
                      "Google Search Console: 0% lapas ir indeksētas meklētājā",
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <span className="text-red-500 flex-shrink-0 mt-0.5">✕</span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Warnings */}
                <div className="px-5 pt-4 pb-2 border-b border-gray-100">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-orange-500 mb-3">⚠ Brīdinājumi (5)</p>
                  <div className="space-y-2.5">
                    {[
                      "Meta apraksti trūkst 78% lapām — slikta Google redzamība",
                      "Schema.org strukturētie dati nav ieviesti",
                      "Attēli nav optimizēti — kopējais svars 14.2 MB (norm: <1 MB)",
                      "Konkurenti meha.lv, graudi.lv ar 3–4× augstāku Google pozicionēšanu",
                      "Core Web Vitals: LCP 9.1s · FID 820ms · CLS 0.41 — visi FAILED",
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <span className="text-orange-400 flex-shrink-0 mt-0.5">▲</span>
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Competitor comparison */}
                <div className="px-5 pt-4 pb-2 border-b border-gray-100">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-gray-400 mb-3">Konkurentu salīdzinājums</p>
                  <div className="space-y-2">
                    {[
                      { n: "mexa.lv", seo: 2, mob: 1, spd: 3, bg: "bg-red-50" },
                      { n: "meha.lv", seo: 6, mob: 7, spd: 6, bg: "bg-gray-50" },
                      { n: "graudi.lv", seo: 7, mob: 8, spd: 7, bg: "bg-gray-50" },
                    ].map(({ n, seo, mob, spd, bg }) => (
                      <div key={n} className={`${bg} rounded-lg px-3 py-2 flex items-center justify-between text-xs`}>
                        <span className="font-bold text-gray-700 w-28">{n}</span>
                        <span className="text-gray-500">SEO: <b>{seo}/10</b></span>
                        <span className="text-gray-500">Mob: <b>{mob}/10</b></span>
                        <span className="text-gray-500">Ātr: <b>{spd}/10</b></span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Tech stats */}
                <div className="px-5 py-4 grid grid-cols-4 gap-3 bg-gray-50">
                  {[
                    { l: "HTTP pieprasījumi", v: "87" },
                    { l: "Lapas svars", v: "14.2 MB" },
                    { l: "Pirmā ielāde", v: "8.3 sek" },
                    { l: "Bojātas saites", v: "47" },
                  ].map(({ l, v }) => (
                    <div key={l} className="text-center">
                      <p className="text-base font-extrabold text-gray-800">{v}</p>
                      <p className="text-[9px] text-gray-400 uppercase tracking-wide leading-tight mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Gradient overlay + CTA ── */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[38%] to-white to-[72%] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-10 px-6 text-center pointer-events-auto">
              <p className="text-sm text-gray-500 mb-4 font-medium">Gribi redzēt pilnu auditu un ko mēs varam uzlabot?</p>
              <a href="mailto:hello@clicksscale.com"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer text-sm">
                Pieprasīt pilno auditu <ArrowRight />
              </a>
            </div>
          </div>
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
