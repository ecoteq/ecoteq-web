# ECOTEQ.hu — fejlesztési állapot & folytatás

Élő (Vercel): https://ecoteq-web.vercel.app · Repo: https://github.com/ecoteq/ecoteq-web
A site `noindex` amíg másképp nem rendelkezünk (`src/config.ts` → `ALLOW_INDEXING`).

## Kész
- **Főoldal (HUB)** — chrome (desktop bal navy brand rail + felső sticky nav + footer),
  hero (üveg trust-sáv ikon-badge-ekkel), 8 tartalmi szekció, progresszív előminősítő
  űrlap (`#ajanlatkeres`) → `/api/contact` (Resend), záró CTA.
- **8 technológiai kapuoldal** — `/technologiak/[slug]/`, adatvezérelt
  (`src/lib/technologies.ts`), figuratív Lucide-ikonokkal a „Mikor jó irány?" kártyákon.
- Stratégia + tartalom: `project docs/` (00 masterspec, 01 főoldal, 02_* kapuoldalak,
  03 navigáció/UX architektúra, `jogi/` jogi szövegek).

## Következő teendők
1. **Jogi oldalak megépítése** a `project docs/jogi/*.md`-ből (Impresszum, ÁSZF,
   Cookie, Adatvédelmi) + footer „Jogi" oszlop + linkek. Tisztázni: GA4 / Vercel
   Analytics / témakapcsoló tényleges bekötése (a szövegek ezt feltételezik).
2. **Resend bekötése** — `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` (igazolt domain) a
   Vercel env-be; utána az űrlap élesben küld.
3. **Navigáció/UX** a `03_…navigacio_hub_ux_architektura` szerint (menüstruktúra,
   megoldás-/iparági belépők). Menü-/link-ikonok (a felhasználó kéri, finoman).
4. Hátralévő MVP-oldalak: Rólunk, Szerviz és alkatrész, Tudástár.
5. Valódi referenciák/logók (validált tartalom kell hozzá).

## Folytatás másik gépen
1. Telepítsd: Node 20+, Git, GitHub CLI (`gh`), Claude Code.
2. `gh auth login` majd `gh repo clone ecoteq/ecoteq-web`
3. `cd ecoteq-web` → `npm install` → `npm run dev` (a `npm run dev`/`build` automatikusan
   szinkronizálja a design systemet a `SOURCE OF TRUTH …` mappából `src/ds`-be).
4. Indítsd a Claude Code-ot a mappában — a `CLAUDE.md` + `project docs/` + ez a `STATUS.md`
   adja a kontextust.

### Ami NEM jön át automatikusan
- **Titkok:** `.env` nincs commitolva (lásd `.env.example`) — `RESEND_API_KEY` stb. újra
  kell rögzíteni (vagy a Vercel env-ből húzni: `vercel env pull`).
- **Claude memória:** a `~/.claude/projects/.../memory/` gépspecifikus; ez a `STATUS.md`
  pótolja a repón belül. (Át is másolható a régi gépről, ha kell.)
- **Vercel plugin:** user-scope, az új gépen újra kell telepíteni, ha kell.
- **Screenshot QA:** `npm i -D playwright && npx playwright install chromium`, majd
  `npm run shot` (a `.shots/` git-ignored).
