/* porlevalaszto.hu — ECOTEQ sub-brand website UI kit (light + dark).
   AL-KO Extraction Technology line, modeled on AL-KO's white-led, red-accent,
   energy-efficiency identity — rendered in the ECOTEQ system via
   data-brand="porlevalaszto". White CTA label on the AL-KO red; light mode is a
   crisp cool-white canvas, dark mode the global dark layer. Toggle flips data-mode.
   Exposes <PorlevalasztoSite/> on window. */

const NS = window.ECOTEQDesignSystem_fc88f8;
const { Logo, Button, IconButton, Tag, Badge, Card, ProductCard, StatBlock, Overline, SectionHeading, ContactPill, Input, Select } = NS;

/* ---------- inline Lucide icons ---------- */
const Ico = ({ children }) => <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>;
const Mail = () => <Ico><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></Ico>;
const Phone = () => <Ico><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></Ico>;
const ArrowRight = () => <Ico><path d="M5 12h14M13 6l6 6-6 6"/></Ico>;
const X = () => <Ico><path d="M6 6l12 12M18 6 6 18"/></Ico>;
const MapPin = () => <Ico><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></Ico>;
const Download = () => <Ico><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></Ico>;
const Check = () => <Ico><path d="M20 6 9 17l-5-5"/></Ico>;
const Wind = () => <Ico><path d="M12.8 19.6A2 2 0 1 0 14 16H2M17.5 8a2.5 2.5 0 1 1 2 4H2M9.8 4.4A2 2 0 1 1 11 8H2"/></Ico>;
const Leaf = () => <Ico><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></Ico>;
const Filter = () => <Ico><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></Ico>;
const Sun = () => <Ico><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></Ico>;
const Moon = () => <Ico><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></Ico>;

const PHOTO = "../../assets/photos/";

/* AL-KO Extraction Technology line under the ECOTEQ brand */
const SYSTEMS = [
  { cat: "AL-KO · mobil", title: "Mobil-Jet 75", desc: "Mobil egygépes forgács- és porelszívó asztalos- és famegmunkáló gépekhez — gyors telepítés, halk üzem.", group: "Mobil", img: PHOTO + "service-installation.png", rate: "3 000 m³/h" },
  { cat: "AL-KO · központi", title: "Power-Unit C", desc: "Központi elszívó rendszer teljes üzemcsarnokhoz — frekvenciaváltós ventilátor, energiahatékony üzem.", group: "Központi", img: PHOTO + "service-installation.png", rate: "18 000 m³/h" },
  { cat: "AL-KO · szűrő", title: "Jet-Filter P", desc: "Patronos visszafúvó szűrő automatikus tisztítással — tiszta visszalevegő, alacsony nyomásveszteség.", group: "Szűrő", img: PHOTO + "service-installation.png", rate: "99,9% ↑" },
  { cat: "AL-KO · hasznosítás", title: "Chip-Silo S", desc: "Siló és adagoló a leválasztott forgácsnak — brikett-, pellet- vagy tüzelőanyag-alapanyagként.", group: "Hasznosítás", img: PHOTO + "service-installation.png", rate: "—" },
];

const NAV = ["Főoldal", "Rendszerek", "Folyamat", "Referenciák", "Kapcsolat"];

/* ---------- Left brand rail ---------- */
function Rail({ onQuote }) {
  return (
    <aside style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: "var(--sidebar-w)", background: "var(--color-surface-dark)",
      display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 0", zIndex: 40, borderRight: "1px solid rgba(255,255,255,0.06)" }}>
      <Logo tone="white" size={34} showWordmark={false} />
      <button onClick={onQuote} style={{ marginTop: 36, writingMode: "vertical-rl", transform: "rotate(180deg)", background: "var(--color-accent)",
        color: "var(--color-on-accent)", border: "none", borderRadius: "var(--radius-pill)", padding: "20px 11px", fontWeight: 700, fontSize: 13,
        letterSpacing: "0.16em", textTransform: "uppercase", cursor: "pointer", boxShadow: "var(--shadow-accent)", transition: "background var(--dur-base)" }}
        onMouseEnter={(e)=>e.currentTarget.style.background="var(--color-accent-hover)"}
        onMouseLeave={(e)=>e.currentTarget.style.background="var(--color-accent)"}>
        Ajánlat kérés
      </button>
      <div style={{ flex: 1 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
        <a href="#" aria-label="info@porlevalaszto.hu" style={railIconStyle} className="rail-ic"><span style={{width:18,height:18,display:"inline-flex"}}><Mail/></span></a>
        <a href="#" aria-label="+36 00 000 000" style={railIconStyle} className="rail-ic"><span style={{width:18,height:18,display:"inline-flex"}}><Phone/></span></a>
      </div>
    </aside>
  );
}
const railIconStyle = { width: 40, height: 40, borderRadius: "var(--radius-pill)", border: "1px solid rgba(255,255,255,0.4)",
  display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", transition: "all var(--dur-base)" };

/* ---------- Top header ---------- */
function Header({ active, setActive, onQuote, mode, toggleMode }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "var(--color-header-bg, rgba(255,255,255,0.92))", backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", gap: 24, padding: "0 32px", height: 72 }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
        <Logo tone={mode === "dark" ? "white" : "navy"} size={26} showWordmark={false} />
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 21, letterSpacing: "-0.01em", color: "var(--color-text)" }}>
          porlevalaszto<span style={{ color: "var(--color-accent-text)" }}>.hu</span>
        </span>
      </span>
      <nav style={{ display: "flex", gap: 4, marginLeft: 14 }}>
        {NAV.map((n) => (
          <button key={n} onClick={() => setActive(n)} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 13px",
            fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: active === n ? 700 : 600,
            color: active === n ? "var(--color-accent-text)" : "var(--color-text)", position: "relative" }}>
            {n}
            {active === n && <span style={{ position: "absolute", left: 13, right: 13, bottom: 2, height: 3, borderRadius: 99, background: "var(--color-accent-text)" }} />}
          </button>
        ))}
      </nav>
      <div style={{ flex: 1 }} />
      <button onClick={toggleMode} aria-label="Téma váltása" title={mode === "dark" ? "Világos téma" : "Sötét téma"}
        style={{ width: 40, height: 40, borderRadius: "var(--radius-pill)", border: "1px solid var(--color-border)", background: "var(--color-surface)",
          color: "var(--color-text)", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all var(--dur-base)" }}>
        <span style={{ width: 18, height: 18, display: "inline-flex" }}>{mode === "dark" ? <Sun/> : <Moon/>}</span>
      </button>
      <Button variant="primary" size="sm" iconRight={<ArrowRight/>} onClick={onQuote}>Ajánlatot kérek</Button>
    </header>
  );
}

/* ---------- Hero (white-led: photo + solid red panel — AL-KO signature) ---------- */
function Hero({ onQuote }) {
  return (
    <section style={{ background: "var(--color-bg)", padding: "36px 40px 12px" }}>
      <style>{`.alko-hero-cta:hover{background:var(--color-bg-subtle);} .alko-hero-cta:active{transform:translateY(1px);}`}</style>
      <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 480,
        borderRadius: "var(--radius-xl)", overflow: "hidden", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-sm)" }}>
        <div style={{ position: "relative", minHeight: 340, background: `url(${PHOTO}service-installation.png) center/cover` }} />
        <div style={{ background: "var(--color-accent)", padding: "56px 52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Overline color="#fff" style={{ marginBottom: 16 }}>AL-KO Extraction Technology</Overline>
          <h1 style={{ color: "#fff", fontSize: 52, lineHeight: 1.03, letterSpacing: "-0.02em", margin: 0, fontWeight: 800 }}>
            Tiszta levegő, hatékony üzem
          </h1>
          <p style={{ color: "rgba(255,255,255,0.92)", fontSize: 18, lineHeight: 1.55, marginTop: 18, marginBottom: 30, maxWidth: 460 }}>
            AL-KO por- és forgácselszívó technológia fa- és fémmegmunkáláshoz — mobil géptől a központi rendszerig, energiahatékony, „Made in Germany” minőségben.
          </p>
          <button onClick={onQuote} className="alko-hero-cta" style={{ alignSelf: "flex-start", background: "#fff", color: "var(--color-accent)",
            border: "none", borderRadius: "var(--radius-pill)", padding: "15px 30px", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16,
            display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer", transition: "background var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)" }}>
            Ajánlatkérés <span style={{ width: 18, height: 18, display: "inline-flex" }}><ArrowRight/></span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats strip ---------- */
function Stats() {
  return (
    <section style={{ background: "var(--color-feature-deep, var(--color-surface-dark))", padding: "36px 64px", display: "flex", gap: 64, flexWrap: "wrap" }}>
      <StatBlock tone="dark" value="18 000" suffix="m³/h" label="központi rendszer légteljesítmény" />
      <StatBlock tone="dark" value="35" suffix="év" label="AL-KO elszívástechnikai tapasztalat" />
      <StatBlock tone="dark" value="99,9" suffix="%" label="por-leválasztási hatékonyság" />
      <StatBlock tone="dark" value="40" suffix="%" label="energia-megtakarítás hővisszanyeréssel" />
    </section>
  );
}

/* ---------- System grid ---------- */
function Systems({ onQuote }) {
  const [filter, setFilter] = React.useState("Összes");
  const groups = ["Összes", "Mobil", "Központi", "Szűrő", "Hasznosítás"];
  const shown = filter === "Összes" ? SYSTEMS : SYSTEMS.filter((p) => p.group === filter);
  return (
    <section style={{ padding: "72px 64px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
        <SectionHeading overline="Rendszerek" title="Elszívás minden üzemhez és géphez"
          lead="A mobil egygépes elszívótól a központi rendszerig, szűrővel és forgács-hasznosítással — funkció szerint." />
        <div style={{ minWidth: 220 }}>
          <Select label="Rendszertípus" value={filter} onChange={(e) => setFilter(e.target.value)} options={groups} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
        {shown.map((p) => (
          <ProductCard key={p.title} category={p.cat} title={p.title}
            description={p.desc} cta={p.rate + " · részletek"}
            image={p.img} onClick={onQuote} style={{}} />
        ))}
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
function Process() {
  const items = [
    { t: "Tiszta, biztonságos levegő", d: "A hatékony elszívás eltávolítja a port és forgácsot a forrásnál — egészséges munkakörnyezet, robbanás- és tűzvédelem." , ic: <Wind/> },
    { t: "Energiahatékony", d: "Frekvenciaváltós ventilátor és hővisszanyerés: a levegőt nem fűtjük az utcára — jelentősen kisebb energiaszámla." , ic: <Leaf/> },
    { t: "Hasznosítható melléktermék", d: "A leválasztott forgács nem hulladék: brikett- vagy pellet-alapanyag, akár saját tüzelőanyag." , ic: <Filter/> },
  ];
  return (
    <section style={{ background: "var(--color-bg-subtle)", padding: "72px 64px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeading align="center" style={{ margin: "0 auto 40px" }} overline="Miért elszívás?"
          title="Tiszta üzem, kisebb energia" lead="Nem csak elszívót szállítunk — a csarnokra és a gépekre méretezzük, beüzemeljük és életcikluson át támogatjuk." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {items.map((it) => (
            <Card key={it.t} padding={28}>
              <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--color-accent-tint)",
                color: "var(--color-accent-text)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <span style={{ width: 24, height: 24, display: "inline-flex" }}>{it.ic}</span>
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700, color: "var(--color-text)" }}>{it.t}</h3>
              <p style={{ margin: 0, color: "var(--color-text-secondary)", fontSize: 15, lineHeight: 1.55 }}>{it.d}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact (light, white-led) ---------- */
function Contact({ onQuote }) {
  return (
    <section style={{ background: "var(--color-bg)", padding: "72px 64px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <SectionHeading overline="Kapcsolat" title="Beszéljük át az elszívási feladatát"
            lead="Küldje el a gépeket, a csarnok méretét és a por típusát — 24 órán belül rendszer-javaslattal és ár-becsléssel jelentkezünk." />
          <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
            <ContactPill tone="light" icon={<Mail/>} href="#">info@porlevalaszto.hu</ContactPill>
            <ContactPill tone="light" icon={<Phone/>} href="#">+36 00 000 000</ContactPill>
            <ContactPill tone="light" icon={<MapPin/>} href="#">Magyarország</ContactPill>
          </div>
        </div>
        <Card padding={28}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Input label="Név" placeholder="Az Ön neve" />
            <Input label="Cég" placeholder="Cégnév" />
            <Input label="E-mail" icon={<Mail/>} type="email" placeholder="nev@ceg.hu" />
            <Select label="Por forrása" options={["Faipari gép","Fémmegmunkálás","CNC / megmunkáló","Csiszolás","Egyéb"]} />
          </div>
          <div style={{ marginTop: 16 }}><Input label="Csarnok / gépszám" placeholder="pl. 1 200 m² · 12 gép" /></div>
          <div style={{ marginTop: 20 }}><Button variant="primary" iconRight={<ArrowRight/>} onClick={onQuote} style={{ width: "100%" }}>Ajánlatot kérek</Button></div>
        </Card>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const subs = ["iparidaralo.hu", "brikettalo.hu", "vakuumszarito.hu", "dobszarito.hu", "porlevalaszto.hu"];
  return (
    <footer style={{ background: "var(--color-feature-deep, var(--navy-900))", color: "rgba(255,255,255,0.7)", padding: "48px 64px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 40, flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ maxWidth: 320 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
            <Logo tone="white" size={28} showWordmark={false} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "#fff" }}>
              porlevalaszto<span style={{ color: "var(--color-accent)" }}>.hu</span>
            </span>
          </span>
          <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.6 }}>Az ECOTEQ elszívástechnikai üzletága — AL-KO Extraction Technology. Por- és forgácselszívó rendszerek magyar mérnöki támogatással.</p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>ECOTEQ almárkák</div>
            {subs.map((s) => <div key={s} style={{ fontSize: 14, padding: "4px 0", color: s === "porlevalaszto.hu" ? "var(--color-accent)" : "inherit", fontWeight: s === "porlevalaszto.hu" ? 700 : 400 }}>{s}</div>)}
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Kapcsolat</div>
            <div style={{ fontSize: 14, padding: "4px 0" }}>info@porlevalaszto.hu</div>
            <div style={{ fontSize: 14, padding: "4px 0" }}>+36 00 000 000</div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "28px auto 0", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: 13 }}>© 2026 ECOTEQ Kft. — porlevalaszto.hu — Minden jog fenntartva.</div>
    </footer>
  );
}

/* ---------- Quote modal ---------- */
function QuoteModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(18,20,23,0.62)", backdropFilter: "blur(3px)", zIndex: 60,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "var(--color-surface)", borderRadius: "var(--radius-xl)", width: 520, maxWidth: "100%",
        boxShadow: "var(--shadow-lg)", overflow: "hidden", border: "1px solid var(--color-border)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid var(--color-border)" }}>
          <strong style={{ fontSize: 18, color: "var(--color-text)" }}>Ajánlatkérés</strong>
          <IconButton label="Bezárás" onClick={onClose}><X/></IconButton>
        </div>
        <div style={{ padding: 24 }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--color-accent-tint)", color: "var(--color-accent-text)",
                display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <span style={{ width: 28, height: 28, display: "inline-flex" }}><Check/></span>
              </div>
              <h3 style={{ margin: "0 0 6px", color: "var(--color-text)" }}>Köszönjük!</h3>
              <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>24 órán belül rendszer-javaslattal jelentkezünk.</p>
              <div style={{ marginTop: 20 }}><Button variant="secondary" onClick={onClose}>Bezárás</Button></div>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Input label="Név" placeholder="Az Ön neve" />
                <Input label="Telefon" icon={<Phone/>} placeholder="+36" />
              </div>
              <div style={{ marginTop: 14 }}><Input label="E-mail" icon={<Mail/>} type="email" placeholder="nev@ceg.hu" /></div>
              <div style={{ marginTop: 14 }}><Select label="Por forrása" options={["Faipari gép","Fémmegmunkálás","CNC / megmunkáló","Csiszolás","Egyéb"]} /></div>
              <div style={{ marginTop: 20 }}><Button variant="primary" iconRight={<ArrowRight/>} style={{ width: "100%" }} onClick={() => setSent(true)}>Elküldöm</Button></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Root ---------- */
function PorlevalasztoSite() {
  const [active, setActive] = React.useState("Főoldal");
  const [quote, setQuote] = React.useState(false);
  const [mode, setMode] = React.useState(() => {
    try { return localStorage.getItem("porlevalaszto-mode") || "light"; } catch (e) { return "light"; }
  });
  React.useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try { localStorage.setItem("porlevalaszto-mode", mode); } catch (e) {}
  }, [mode]);
  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));
  const onQuote = () => setQuote(true);
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <style>{`.rail-ic:hover{background:var(--color-accent);border-color:var(--color-accent);color:var(--color-on-accent);}`}</style>
      <Rail onQuote={onQuote} />
      <div style={{ marginLeft: "var(--sidebar-w)" }}>
        <Header active={active} setActive={setActive} onQuote={onQuote} mode={mode} toggleMode={toggleMode} />
        <Hero onQuote={onQuote} />
        <Stats />
        <Systems onQuote={onQuote} />
        <Process />
        <Contact onQuote={onQuote} />
        <Footer />
      </div>
      <QuoteModal open={quote} onClose={() => setQuote(false)} />
    </div>
  );
}

window.PorlevalasztoSite = PorlevalasztoSite;
