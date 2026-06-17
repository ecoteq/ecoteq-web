/* ECOTEQ website UI kit — composed from the design-system bundle.
   Exposes <EcoteqSite/> on window. Icons are inline (Lucide paths). */

const NS = window.ECOTEQDesignSystem_fc88f8;
const { Logo, Button, IconButton, Tag, Badge, Card, ProductCard, StatBlock, Overline, SectionHeading, ContactPill, Input, Select } = NS;

/* ---------- inline Lucide icons (no fragments — this Babel build rejects <>) ---------- */
const Ico = ({ children }) => <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>;
const Mail = () => <Ico><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></Ico>;
const Phone = () => <Ico><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></Ico>;
const ArrowRight = () => <Ico><path d="M5 12h14M13 6l6 6-6 6"/></Ico>;
const X = () => <Ico><path d="M6 6l12 12M18 6 6 18"/></Ico>;
const MapPin = () => <Ico><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></Ico>;
const Download = () => <Ico><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></Ico>;
const Check = () => <Ico><path d="M20 6 9 17l-5-5"/></Ico>;
const Cog = () => <Ico><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></Ico>;

/* industrial placeholder photo (no stock per brand rule) */
function photo(a, b) {
  return { background: "repeating-linear-gradient(118deg, " + a + " 0 26px, " + b + " 26px 52px)" };
}

const PHOTO = "../../assets/photos/";
const PRODUCTS = [
  { cat: "Ipari darálás", title: "ECO-Shred 400", desc: "Nagy áteresztőképességű ipari daráló kemény és vegyes hulladékhoz.", group: "Darálás", img: PHOTO + "shredder.png" },
  { cat: "Brikettálás", title: "BriQ-Line 90", desc: "CFNielsen technológia — kompakt, megtérülő brikettáló rendszer.", group: "Brikettálás", img: PHOTO + "briquetting-line.png" },
  { cat: "Biomassza szárítás", title: "DryFlow DS-12", desc: "Energiahatékony szalagos szárító biomasszához és melléktermékhez.", group: "Szárítás", img: PHOTO + "biomass-belt-dryer.png" },
  { cat: "Pelletálás", title: "PelletPro 2.0", desc: "Kisüzemi és ipari pelletgyártó sor, kiszámítható kimenettel.", group: "Pelletálás", img: PHOTO + "pelletizing-line.png" },
  { cat: "Vákuumtechnológia", title: "VacDry VT-8", desc: "Faipari vákuumszárító — gyors, kíméletes, minőségmegtartó.", group: "Szárítás", img: PHOTO + "vacuum-kiln.png" },
  { cat: "Szerviz", title: "ECOTEQ Care", desc: "Gyártófüggetlen szerviz, alkatrész és távfelügyelet — egész életcikluson át.", group: "Szerviz", img: PHOTO + "service-installation.png" },
];

const NAV = ["Főoldal", "Gépek", "Megoldások", "Referenciák", "Kapcsolat"];

/* ---------- Left brand rail (fixed) ---------- */
function Rail({ onQuote }) {
  return (
    <aside style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: "var(--sidebar-w)", background: "var(--ecoteq-navy)",
      display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 0", zIndex: 40, borderRight: "1px solid rgba(255,255,255,0.06)" }}>
      <Logo tone="white" size={34} showWordmark={false} />
      <button onClick={onQuote} style={{ marginTop: 36, writingMode: "vertical-rl", transform: "rotate(180deg)", background: "var(--color-accent)",
        color: "#fff", border: "none", borderRadius: "var(--radius-pill)", padding: "20px 11px", fontWeight: 700, fontSize: 13,
        letterSpacing: "0.16em", textTransform: "uppercase", cursor: "pointer", boxShadow: "var(--shadow-accent)", transition: "background var(--dur-base)" }}
        onMouseEnter={(e)=>e.currentTarget.style.background="var(--color-accent-hover)"}
        onMouseLeave={(e)=>e.currentTarget.style.background="var(--color-accent)"}>
        Ajánlat kérés
      </button>
      <div style={{ flex: 1 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
        <a href="#" aria-label="info@ecoteq.hu" style={railIconStyle} className="rail-ic"><span style={{width:18,height:18,display:"inline-flex"}}><Mail/></span></a>
        <a href="#" aria-label="+36 00 000 000" style={railIconStyle} className="rail-ic"><span style={{width:18,height:18,display:"inline-flex"}}><Phone/></span></a>
      </div>
    </aside>
  );
}
const railIconStyle = { width: 40, height: 40, borderRadius: "var(--radius-pill)", border: "1px solid rgba(255,255,255,0.4)",
  display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", transition: "all var(--dur-base)" };

/* ---------- Top header ---------- */
function Header({ active, setActive, onQuote }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", gap: 24, padding: "0 40px", height: 72 }}>
      <Logo tone="navy" size={26} href="#" />
      <nav style={{ display: "flex", gap: 4, marginLeft: 18 }}>
        {NAV.map((n) => (
          <button key={n} onClick={() => setActive(n)} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 14px",
            fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: active === n ? 700 : 600,
            color: active === n ? "var(--color-accent)" : "var(--ecoteq-navy)", position: "relative" }}>
            {n}
            {active === n && <span style={{ position: "absolute", left: 14, right: 14, bottom: 2, height: 3, borderRadius: 99, background: "var(--color-accent)" }} />}
          </button>
        ))}
      </nav>
      <div style={{ flex: 1 }} />
      <Button variant="primary" size="sm" iconRight={<ArrowRight/>} onClick={onQuote}>Ajánlatot kérek</Button>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero({ onQuote }) {
  return (
    <section style={{ position: "relative", minHeight: 560, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "url(../../assets/photos/hero-briquette-plant.jpg) center/cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "var(--overlay-navy-side)" }} />
      <div style={{ position: "relative", padding: "0 64px 72px", maxWidth: 820 }}>
        <Tag>Körforgásos gazdaság · 2024</Tag>
        <h1 style={{ color: "#fff", fontSize: 72, lineHeight: 0.98, letterSpacing: "-0.02em", margin: "20px 0 0", fontWeight: 800 }}>
          A körforgásos gazdaság <span style={{ color: "var(--color-accent)" }}>műszaki partnere</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 19, lineHeight: 1.55, maxWidth: 620, marginTop: 18 }}>
          Ipari hulladékhasznosító technológiák a projektötlettől a megvalósításig — darálás, brikettálás, pelletálás és szárítás, mérnöki garanciával és kiszámítható megtérüléssel.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 30, flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" iconRight={<ArrowRight/>} onClick={onQuote}>Ajánlatot kérek</Button>
          <Button variant="outline-light" size="lg" iconLeft={<Download/>}>Prospektus</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats strip ---------- */
function Stats() {
  return (
    <section style={{ background: "var(--ecoteq-navy)", padding: "40px 64px", display: "flex", gap: 64, flexWrap: "wrap" }}>
      <StatBlock tone="dark" value="15" suffix="+" label="év mérnöki tapasztalat" />
      <StatBlock tone="dark" value="5" label="vezető európai gyártó partner" />
      <StatBlock tone="dark" value="98" suffix="%" label="szerviz-elérhetőség" />
      <StatBlock tone="dark" value="20" suffix="év" label="tervezett üzemidő" />
    </section>
  );
}

/* ---------- Product grid ---------- */
function Products({ onQuote }) {
  const [filter, setFilter] = React.useState("Összes");
  const groups = ["Összes", "Darálás", "Brikettálás", "Szárítás", "Pelletálás", "Szerviz"];
  const shown = filter === "Összes" ? PRODUCTS : PRODUCTS.filter((p) => p.group === filter);
  return (
    <section style={{ padding: "72px 64px", maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
        <SectionHeading overline="Gépkínálat" title="Gépek, amelyeket magunknak is betennénk"
          lead="Európa legjobb technológiái, magyar mérnöki támogatással. Szűrjön kategória szerint." />
        <div style={{ minWidth: 220 }}>
          <Select label="Kategória" value={filter} onChange={(e) => setFilter(e.target.value)} options={groups} />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
        {shown.map((p) => (
          <ProductCard key={p.title} category={p.cat} title={p.title} description={p.desc} cta="Részletek"
            image={p.img} onClick={onQuote} style={{}} />
        ))}
      </div>
    </section>
  );
}

/* ---------- Solutions ---------- */
function Solutions() {
  const items = [
    { t: "Projekt-előkészítés", d: "Már a tervezésnél bekapcsolódunk, hogy a rendszer illeszkedjen — tervezhetően, üzemeltethetően." , ic: <Cog/> },
    { t: "Mérnöki kiválasztás", d: "Műszaki és gazdaságossági szempontok együtt: melyik gép hozza vissza valóban az árát." , ic: <Check/> },
    { t: "Szerviz & támogatás", d: "Gyártófüggetlen szerviz, alkatrész és távfelügyelet az egész életciklus alatt." , ic: <Phone/> },
  ];
  return (
    <section style={{ background: "var(--color-bg-subtle)", padding: "72px 64px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeading align="center" style={{ margin: "0 auto 40px" }} overline="Megoldások"
          title="Az ötlettől a megvalósításig" lead="Nem csak gépeket szállítunk — együtt gondolkodunk és valódi ROI-t biztosítunk." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {items.map((it) => (
            <Card key={it.t} padding={28}>
              <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--color-accent-tint)",
                color: "var(--color-accent)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <span style={{ width: 24, height: 24, display: "inline-flex" }}>{it.ic}</span>
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700, color: "var(--ecoteq-navy)" }}>{it.t}</h3>
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
    <section style={{ background: "var(--ecoteq-navy)", padding: "72px 64px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <SectionHeading tone="dark" overline="Kapcsolat" title="Beszéljük át a projektjét"
            lead="Személyes mérnöki támogatás, gyors válasz, átlátható árak. Írjon, és 24 órán belül jelentkezünk." />
          <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
            <ContactPill icon={<Mail/>} href="#">info@ecoteq.hu</ContactPill>
            <ContactPill icon={<Phone/>} href="#">+36 00 000 000</ContactPill>
            <ContactPill icon={<MapPin/>} href="#">Magyarország</ContactPill>
          </div>
        </div>
        <Card padding={28}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Input label="Név" placeholder="Az Ön neve" />
            <Input label="Cég" placeholder="Cégnév" />
            <Input label="E-mail" icon={<Mail/>} type="email" placeholder="nev@ceg.hu" />
            <Select label="Érdeklődés" options={["Darálás","Brikettálás","Szárítás","Pelletálás","Szerviz"]} />
          </div>
          <div style={{ marginTop: 16 }}><Input label="Üzenet" placeholder="Röviden a projektről…" /></div>
          <div style={{ marginTop: 20 }}><Button variant="primary" iconRight={<ArrowRight/>} onClick={onQuote} style={{ width: "100%" }}>Ajánlatot kérek</Button></div>
        </Card>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const subs = ["iparidaralo.hu", "brikettalo.hu", "dobszarito.hu", "pelletgyartogep.hu"];
  return (
    <footer style={{ background: "var(--navy-900)", color: "rgba(255,255,255,0.7)", padding: "48px 64px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 40, flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ maxWidth: 320 }}>
          <Logo tone="white" size={28} />
          <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.6 }}>A körforgásos gazdaság műszaki partnere. Ipari hulladékhasznosító technológiák magyar mérnöki támogatással.</p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Almárkák</div>
            {subs.map((s) => <div key={s} style={{ fontSize: 14, padding: "4px 0" }}>{s}</div>)}
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Kapcsolat</div>
            <div style={{ fontSize: 14, padding: "4px 0" }}>info@ecoteq.hu</div>
            <div style={{ fontSize: 14, padding: "4px 0" }}>+36 00 000 000</div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "28px auto 0", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: 13 }}>© 2024 ECOTEQ Kft. — Minden jog fenntartva.</div>
    </footer>
  );
}

/* ---------- Quote modal ---------- */
function QuoteModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(15,32,48,0.6)", backdropFilter: "blur(3px)", zIndex: 60,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: "var(--radius-xl)", width: 520, maxWidth: "100%",
        boxShadow: "var(--shadow-lg)", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid var(--color-border)" }}>
          <strong style={{ fontSize: 18, color: "var(--ecoteq-navy)" }}>Ajánlatkérés</strong>
          <IconButton label="Bezárás" onClick={onClose}><X/></IconButton>
        </div>
        <div style={{ padding: 24 }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--color-accent-tint)", color: "var(--color-accent)",
                display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <span style={{ width: 28, height: 28, display: "inline-flex" }}><Check/></span>
              </div>
              <h3 style={{ margin: "0 0 6px", color: "var(--ecoteq-navy)" }}>Köszönjük!</h3>
              <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>24 órán belül személyesen jelentkezünk.</p>
              <div style={{ marginTop: 20 }}><Button variant="secondary" onClick={onClose}>Bezárás</Button></div>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Input label="Név" placeholder="Az Ön neve" />
                <Input label="Telefon" icon={<Phone/>} placeholder="+36" />
              </div>
              <div style={{ marginTop: 14 }}><Input label="E-mail" icon={<Mail/>} type="email" placeholder="nev@ceg.hu" /></div>
              <div style={{ marginTop: 14 }}><Select label="Milyen rendszer érdekli?" options={["Darálás","Brikettálás","Szárítás","Pelletálás","Szerviz"]} /></div>
              <div style={{ marginTop: 20 }}><Button variant="primary" iconRight={<ArrowRight/>} style={{ width: "100%" }} onClick={() => setSent(true)}>Elküldöm</Button></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Root ---------- */
function EcoteqSite() {
  const [active, setActive] = React.useState("Főoldal");
  const [quote, setQuote] = React.useState(false);
  const onQuote = () => setQuote(true);
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <style>{`.rail-ic:hover{background:var(--color-accent);border-color:var(--color-accent);color:#fff;}`}</style>
      <Rail onQuote={onQuote} />
      <div style={{ marginLeft: "var(--sidebar-w)" }}>
        <Header active={active} setActive={setActive} onQuote={onQuote} />
        <Hero onQuote={onQuote} />
        <Stats />
        <Products onQuote={onQuote} />
        <Solutions />
        <Contact onQuote={onQuote} />
        <Footer />
      </div>
      <QuoteModal open={quote} onClose={() => setQuote(false)} />
    </div>
  );
}

window.EcoteqSite = EcoteqSite;
