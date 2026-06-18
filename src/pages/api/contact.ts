import type { APIRoute } from 'astro';

// On-demand (serverless) — never prerendered.
export const prerender = false;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const FIELD_LABELS: Record<string, string> = {
  nev: 'Név',
  ceg: 'Cég',
  email: 'E-mail',
  telefon: 'Telefon',
  anyag: 'Anyag',
  mennyiseg: 'Mennyiség',
  nedvesseg: 'Nedvesség',
  cel: 'Cél',
  hely: 'Telepítés helye',
  tech: 'Technológiai irány',
  megjegyzes: 'Megjegyzés',
  forras: 'Forrás',
};

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  // Honeypot — silently accept bots without sending.
  if (typeof data.website === 'string' && data.website.trim() !== '') {
    return json({ ok: true });
  }

  const get = (k: string) => (typeof data[k] === 'string' ? (data[k] as string).trim() : '');
  const nev = get('nev');
  const email = get('email');
  const anyag = get('anyag');
  const cel = get('cel');

  if (!nev || !email || !anyag || !cel || !/.+@.+\..+/.test(email)) {
    return json({ ok: false, error: 'missing_fields' }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'sales@ecoteq.hu';
  const from = process.env.CONTACT_FROM_EMAIL;

  // Email backend not configured yet → tell the client to fall back gracefully.
  if (!apiKey || !from) {
    return json({ ok: false, error: 'not_configured' }, 503);
  }

  const irany = Array.isArray(data.irany) ? (data.irany as string[]).join(', ') : '';
  const lines = Object.entries(FIELD_LABELS)
    .map(([k, label]) => [label, get(k)] as const)
    .filter(([, v]) => v)
    .map(([label, v]) => `${label}: ${v}`);
  if (irany) lines.push(`Érdeklődési irány: ${irany}`);
  const summary = lines.join('\n');

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Új előminősítés — ${nev}${anyag ? ` (${anyag})` : ''}`,
      text: `Új projekt-előminősítés érkezett az ecoteq.hu űrlapról.\n\n${summary}`,
    });

    await resend.emails.send({
      from,
      to: email,
      subject: 'Köszönjük a megkeresést — ECOTEQ',
      text:
        `Kedves ${nev}!\n\n` +
        `Köszönjük, hogy elküldte a projekt alapadatait. Munkanapokon előszűrjük a ` +
        `feladatot, és jellemzően 24 órán belül visszajelzünk a következő lépésről.\n\n` +
        `A megadott adatok:\n${summary}\n\n` +
        `Üdvözlettel,\nECOTEQ`,
    });

    return json({ ok: true });
  } catch {
    return json({ ok: false, error: 'send_failed' }, 502);
  }
};
