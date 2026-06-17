/* raklapdaralo.hu — ECOTEQ sub-brand website UI kit (light + dark).
   Shares the SAME design system as iparidaralo.hu (graphite + ISVE-red) via
   data-brand="raklapdaralo". The dark toggle flips data-mode on <html>.
   Exposes <RaklapdaraloSite/> on window. */

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
const Scissors = () => <Ico><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12M20 4 8.12 15.88M14.8 14.8 20 20M6 18a3 3 0 1 0 0 .01"/></Ico>;
const Gauge = () => <Ico><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></Ico>;
const Recycle = () => <Ico><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 4.875 9.5 1.5 13.5"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/></Ico>;
const Sun = () => <Ico><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></Ico>;
const Moon = () => <Ico><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></Ico>;

const PHOTO = "../../assets/photos/";

/* ISVE / AL-KO shredders under the ECOTEQ brand */
const SHREDDERS = [
  { cat: "ISVE · egytengelyes", title: "PalleX 1100", desc: "Egytengelyes daráló egész raklapokhoz — szegezett, vegyes faanyagot is megbírja, tömör kivitel.", group: "Egytengelyes", img: PHOTO + "shredder.png", rate: "1 200 kg/h" },
  { cat: "ISVE · egytengelyes", title: "PalleX 1500 HD", desc: "Nagy átmérőjű rotor és erősített rosta nagy volumenű, folyamatos raklap-feldolgozáshoz.", group: "Egytengelyes", img: PHOTO + "shredder.png", rate: "2 000 kg/h" },
  { cat: "Mágneses szeparátor", title: "FerroSep 60", desc: "Szalag fölötti mágnes a szegek és fém elemek kivonására — tiszta, fémmentes faapríték.", group: "Szeparálás", img: PHOTO + "shredder.png", rate: "—" },
  { cat: "utóaprító", title: "ReFine 800", desc: "Második fokozatú aprító egyenletes szemcséhez — brikett- és pellet-kész alapanyag.", group: "Utóaprító", img: PHOTO + "shredder.png", rate: "900 kg/h" },
];

const NAV = ["Főoldal", "Gépek", "Folyamat", "Referenciák", "Kapcsolat"];

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
        <a href="#" aria-label="info@raklapdaralo.hu" style={railIconStyle} className="rail-ic"><span style={{width:18,height:18,display:"inline-flex"}}><Mail/></span></a>
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
          raklapdaralo<span style={{ color: "var(--color-accent)" }}>.hu</span>
        </span>
      </span>
      <nav style={{ display: "flex", gap: 4, marginLeft: 14 }}>
        {NAV.map((n) => (
          <button key={n} onClick={() => setActive(n)} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 13px",
            fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: active === n ? 700 : 600,
            color: active === n ? "var(--color-accent)" : "var(--color-text)", position: "relative" }}>
            {n}
            {active === n && <span style={{ position: "absolute", left: 13, right: 13, bottom: 2, height: 3, borderRadius: 99, background: "var(--color-accent)" }} />}
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

/* ---------- Hero ---------- */
function Hero({ onQuote }) {
  return (
    <section style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: `url(${PHOTO}shredder.png) center/cover` }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--overlay-navy-side)" }} />
      <div style={{ position: "relative", padding: "0 64px 72px", maxWidth: 840 }}>
        <Tag>Raklapdarálás · ISVE</Tag>
        <h1 style={{ color: "#fff", fontSize: 72, lineHeight: 0.98, letterSpacing: "-0.02em", margin: "20px 0 0", fontWeight: 800 }}>
          A raklapból <span style={{ color: "var(--color-accent)" }}>tiszta alapanyag</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 19, lineHeight: 1.55, maxWidth: 640, marginTop: 18 }}>
          Egytengelyes darálók egész, szegezett raklapokhoz — integrált mágneses fémleválasztással tiszta, fémmentes faapríték a brikett-, pellet- és tüzelőanyag-gyártáshoz, olasz ISVE robusztussággal és magyar mérnöki támogatással.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" iconRight={<ArrowRight/>} onClick={onQuote}>Ajánlatot kérek</Button>
          <Button variant="outline-light" size="lg" iconLeft={<Download/>}>Gép-katalógus</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats strip ---------- */
function Stats() {
  return (
    <section style={{ background: "var(--color-surface-dark)", padding: "40px 64px", display: "flex", gap: 64, flexWrap: "wrap" }}>
      <StatBlock tone="dark" value="2 000" suffix="kg/h" label="csúcskapacitás gépenként" />
      <StatBlock tone="dark" value="100" suffix="%" label="szeg- és fémleválasztás" />
      <StatBlock tone="dark" value="15" suffix="mm" label="kontrollált végszemcse" />
      <StatBlock tone="dark" value="20" suffix="év" label="tervezett géplettartam" />
    </section>
  );
}

/* ---------- Shredder grid ---------- */
function Shredders({ onQuote }) {
  const [filter, setFilter] = React.useState("Összes");
  const groups = ["Összes", "Egytengelyes", "Szeparálás", "Utóaprító"];
  const shown = filter === "Összes" ? SHREDDERS : SHREDDERS.filter((p) => p.group === filter);
  return (
    <section style={{ padding: "72px 64px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
        <SectionHeading overline="Gépek" title="Teljes raklap-feldolgozó sor"
          lead="A raklapdarálótól a mágneses fémleválasztáson át az utóaprítóig — funkció szerint." />
        <div style={{ minWidth: 220 }}>
          <Select label="Géptípus" value={filter} onChange={(e) => setFilter(e.target.value)} options={groups} />
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
    { t: "Szeg- és fémmentes", d: "Az integrált mágneses szeparátor kivonja a szegeket és fém elemeket — tiszta faapríték, védett kések." , ic: <Scissors/> },
    { t: "Egész raklapra méretezve", d: "Rotor, kés és rosta a szegezett, kemény raklaphoz — EUR és egyedi raklap, valós áteresztéssel." , ic: <Gauge/> },
    { t: "Az értéklánc kezdete", d: "A tiszta apríték tüzelőanyag, brikett- vagy pellet-alapanyag, esetleg eladható termék lesz." , ic: <Recycle/> },
  ];
  return (
    <section style={{ background: "var(--color-bg-subtle)", padding: "72px 64px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeading align="center" style={{ margin: "0 auto 40px" }} overline="Miért raklapdarálás?"
          title="A raklapból érték" lead="Nem csak gépet szállítunk — a teljes sort méretezzük, beüzemeljük és életcikluson át támogatjuk." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {items.map((it) => (
            <Card key={it.t} padding={28}>
              <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--color-accent-tint)",
                color: "var(--color-accent)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
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

/* ---------- Contact ---------- */
function Contact({ onQuote }) {
  return (
    <section style={{ background: "var(--color-surface-dark)", padding: "72px 64px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <SectionHeading tone="dark" overline="Kapcsolat" title="Beszéljük át az aprítási feladatát"
            lead="Küldje el az alapanyagot és a kívánt volument — 24 órán belül daráló-javaslattal és ár-becsléssel jelentkezünk." />
          <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
            <ContactPill icon={<Mail/>} href="#">info@raklapdaralo.hu</ContactPill>
            <ContactPill icon={<Phone/>} href="#">+36 00 000 000</ContactPill>
            <ContactPill icon={<MapPin/>} href="#">Magyarország</ContactPill>
          </div>
        </div>
        <Card padding={28}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Input label="Név" placeholder="Az Ön neve" />
            <Input label="Cég" placeholder="Cégnév" />
            <Input label="E-mail" icon={<Mail/>} type="email" placeholder="nev@ceg.hu" />
            <Select label="Alapanyag" options={["EUR raklap","Egyedi raklap","Láda / rekesz","Vegyes fahulladék","Egyéb"]} />
          </div>
          <div style={{ marginTop: 16 }}><Input label="Becsült volumen" placeholder="pl. 200 raklap/nap" /></div>
          <div style={{ marginTop: 20 }}><Button variant="primary" iconRight={<ArrowRight/>} onClick={onQuote} style={{ width: "100%" }}>Ajánlatot kérek</Button></div>
        </Card>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const subs = ["iparidaralo.hu", "raklapdaralo.hu", "brikettalo.hu", "dobszarito.hu", "pelletgyartogep.hu"];
  return (
    <footer style={{ background: "var(--color-feature-deep, var(--navy-900))", color: "rgba(255,255,255,0.7)", padding: "48px 64px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 40, flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ maxWidth: 320 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
            <Logo tone="white" size={28} showWordmark={false} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, color: "#fff" }}>
              raklapdaralo<span style={{ color: "var(--color-accent)" }}>.hu</span>
            </span>
          </span>
          <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.6 }}>Az ECOTEQ raklap-feldolgozási üzletága. Egytengelyes raklapdarálók és fémleválasztás magyar mérnöki támogatással.</p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>ECOTEQ almárkák</div>
            {subs.map((s) => <div key={s} style={{ fontSize: 14, padding: "4px 0", color: s === "raklapdaralo.hu" ? "var(--color-accent)" : "inherit", fontWeight: s === "raklapdaralo.hu" ? 700 : 400 }}>{s}</div>)}
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Kapcsolat</div>
            <div style={{ fontSize: 14, padding: "4px 0" }}>info@raklapdaralo.hu</div>
            <div style={{ fontSize: 14, padding: "4px 0" }}>+36 00 000 000</div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "28px auto 0", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: 13 }}>© 2026 ECOTEQ Kft. — raklapdaralo.hu — Minden jog fenntartva.</div>
    </footer>
  );
}

/* ---------- Quote modal ---------- */
function QuoteModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(16,17,19,0.62)", backdropFilter: "blur(3px)", zIndex: 60,
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
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--color-accent-tint)", color: "var(--color-accent)",
                display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <span style={{ width: 28, height: 28, display: "inline-flex" }}><Check/></span>
              </div>
              <h3 style={{ margin: "0 0 6px", color: "var(--color-text)" }}>Köszönjük!</h3>
              <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>24 órán belül gép-javaslattal jelentkezünk.</p>
              <div style={{ marginTop: 20 }}><Button variant="secondary" onClick={onClose}>Bezárás</Button></div>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Input label="Név" placeholder="Az Ön neve" />
                <Input label="Telefon" icon={<Phone/>} placeholder="+36" />
              </div>
              <div style={{ marginTop: 14 }}><Input label="E-mail" icon={<Mail/>} type="email" placeholder="nev@ceg.hu" /></div>
              <div style={{ marginTop: 14 }}><Select label="Milyen alapanyaghoz?" options={["EUR raklap","Egyedi raklap","Láda / rekesz","Vegyes fahulladék","Egyéb"]} /></div>
              <div style={{ marginTop: 20 }}><Button variant="primary" iconRight={<ArrowRight/>} style={{ width: "100%" }} onClick={() => setSent(true)}>Elküldöm</Button></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Root ---------- */
function RaklapdaraloSite() {
  const [active, setActive] = React.useState("Főoldal");
  const [quote, setQuote] = React.useState(false);
  const [mode, setMode] = React.useState(() => {
    try { return localStorage.getItem("raklapdaralo-mode") || "light"; } catch (e) { return "light"; }
  });
  React.useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try { localStorage.setItem("raklapdaralo-mode", mode); } catch (e) {}
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
        <Shredders onQuote={onQuote} />
        <Process />
        <Contact onQuote={onQuote} />
        <Footer />
      </div>
      <QuoteModal open={quote} onClose={() => setQuote(false)} />
    </div>
  );
}

window.RaklapdaraloSite = RaklapdaraloSite;
