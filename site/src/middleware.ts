import { defineMiddleware } from 'astro:middleware';
import { INTRO_HTML, UPDATE_HTML } from './lib/research-content';
import { DECK_HTML } from './lib/research-deck-content';

// Password gate for the three investor microsites (the full investor deck
// plus its two teasers), and ONLY those six exact paths (three pages, three
// unlock endpoints). Everything else on
// www.cinebody.com is still a fully static build - this middleware returns
// immediately (next()) for any other request, so it cannot affect them.
//
// Both the gate check AND the unlock POST are handled right here, entirely
// on the edge - deliberately not split into separate Astro API routes under
// src/pages/api/. An edge-middleware request that calls next() for a path
// Astro treats as dynamic has to hop to the separate Node serverless
// function (_render.func) to be served; that hop 500'd in practice
// (FUNCTION_INVOCATION_FAILED) on the deployed preview even though the
// identical bundle ran fine invoked directly. Handling everything in one
// edge function avoids that hop. src/pages/research/cinebody-investor-*.ts
// still exist as unreachable prerender:false stubs purely so Astro
// registers those two routes as dynamic - with zero dynamic routes the
// Vercel adapter forces buildOutput to "static" and silently drops
// edgeMiddleware regardless of the edgeMiddleware:true option.
//
// Mirrors the gate already live on app.cinebody.com/research/* (same
// defaults, same page content - ported from cinebody-platform's
// apps/web/src/app/research/cinebody-investor-{intro,update}/route.ts).

type GateConfig = {
  page: string;
  unlockPath: string;
  cookie: string;
  token: string;
  passwords: string[];
  title: string;
  kicker: string;
  heading: string;
  sub: string;
  html: string;
};

const GATES: GateConfig[] = [
  {
    page: '/research/cinebody-investor-intro',
    unlockPath: '/api/research/unlock-intro',
    cookie: 'cb_research_intro',
    token: 'cb-research-intro-unlocked-v1',
    passwords: [import.meta.env.RESEARCH_PASSWORD_INTRO || 'Cinebody2026Intro'],
    title: 'Cinebody: investor intro',
    kicker: 'Investor Intro &middot; Private',
    heading: 'A quick look at Cinebody.',
    sub: 'A short overview for prospective investors. Private, requires its own password.',
    html: INTRO_HTML,
  },
  {
    page: '/research/cinebody-investor-update',
    unlockPath: '/api/research/unlock-update',
    cookie: 'cb_research_update',
    token: 'cb-research-update-unlocked-v1',
    passwords: [import.meta.env.RESEARCH_PASSWORD_UPDATE || 'Cinebody2026Update'],
    title: 'Cinebody: investor update',
    kicker: 'Investor Update &middot; Private',
    heading: 'An update for our investors.',
    sub: 'A short update for current Cinebody investors. Private, requires its own password.',
    html: UPDATE_HTML,
  },
  {
    // Same passwords as the original on app.cinebody.com, so links already
    // sent keep working: the env value (comma-separated) or its default,
    // plus the fixed fallback.
    page: '/research/cinebody-investor-deck',
    unlockPath: '/api/research/unlock-investor',
    cookie: 'cb_research_investor',
    token: 'cb-research-investor-unlocked-v1',
    passwords: [
      ...(import.meta.env.RESEARCH_PASSWORD_INVESTOR || 'CinebodyRaise')
        .split(',')
        .map((p: string) => p.trim())
        .filter(Boolean),
      'Cinebody2026Investor',
    ],
    title: 'Cinebody: investor overview',
    kicker: 'Investor Overview &middot; Private',
    heading: 'Ten years of real revenue. Now the platform.',
    sub: 'Cinebody&rsquo;s business today, the AI platform underway, the go-to-market plan, and the raise. Private, requires the investor password.',
    html: DECK_HTML,
  },
];

function gateHtml(g: GateConfig): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${g.title}</title>
<meta name="description" content="${g.title}. Private, password required.">
<meta name="robots" content="noindex">
<style>
  :root{--bg:#0a0a0a;--card:rgba(22,23,28,0.62);--line:rgba(255,255,255,0.10);
    --ink:#f5f7f9;--ink-2:rgba(255,255,255,0.80);--ink-3:rgba(255,255,255,0.55);
    --pink:#eb008b;--cyan:#00bcf1;--yellow:#ffec03;
    --brand:linear-gradient(120deg,#00bcf1 0%,#ffec03 50%,#eb008b 100%);
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif;--mono:ui-monospace,"SF Mono",Menlo,monospace;color-scheme:dark}
  *{margin:0;padding:0;box-sizing:border-box}
  body{min-height:100vh;min-height:100dvh;background:var(--bg);color:var(--ink);font-family:var(--sans);
    display:flex;align-items:center;justify-content:center;padding:1.5rem;
    background-image:
      radial-gradient(820px 520px at 84% -8%,rgba(255,63,174,0.16),transparent 60%),
      radial-gradient(720px 520px at 6% 108%,rgba(42,199,246,0.13),transparent 58%),
      radial-gradient(600px 420px at 50% 122%,rgba(255,225,74,0.06),transparent 60%)}
  .card{width:100%;max-width:30rem;background:var(--card);
    backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border:1px solid var(--line);
    box-shadow:inset 0 1px 0 rgba(255,255,255,0.05),0 22px 54px rgba(0,0,0,0.42);
    border-radius:18px;padding:2.2rem 2rem;position:relative;overflow:hidden}
  .card::before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:var(--brand)}
  .mark{height:23px;width:auto;display:block;margin-bottom:1.5rem}
  .kick{font-family:var(--mono);font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--pink);
    display:flex;align-items:center;gap:.5rem;margin-bottom:1.2rem}
  h1{font-size:1.7rem;line-height:1.18;letter-spacing:-0.025em;font-weight:800;margin-bottom:.85rem;padding-bottom:.06em;text-wrap:balance;
    background:linear-gradient(180deg,#fff,#8fdcf7);-webkit-background-clip:text;background-clip:text;color:transparent}
  .sub{font-size:.95rem;line-height:1.5;color:var(--ink-2);margin-bottom:1.7rem}
  label{display:block;font-family:var(--mono);font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3);margin-bottom:.5rem}
  .row{display:flex;gap:.55rem}
  input{flex:1;min-width:0;background:rgba(0,0,0,0.28);border:1px solid var(--line);border-radius:10px;color:var(--ink);
    font-family:var(--sans);font-size:1rem;padding:.7rem .85rem;outline:none}
  input::placeholder{color:var(--ink-3)}
  input:focus{border-color:var(--pink);box-shadow:0 0 0 3px color-mix(in srgb,var(--pink) 22%,transparent)}
  button{border:0;border-radius:10px;background:var(--pink);color:#fff;font-family:var(--sans);font-weight:700;
    font-size:.92rem;padding:.7rem 1.05rem;cursor:pointer;white-space:nowrap;transition:filter .15s;
    box-shadow:0 0 22px color-mix(in srgb,var(--pink) 34%,transparent)}
  button:hover{filter:brightness(1.08)}
  button:disabled{opacity:.6;cursor:default;box-shadow:none}
  .err{color:#ff6b8a;font-size:.82rem;margin-top:.7rem}
  [hidden]{display:none}
  @media (max-width:420px){.row{flex-direction:column}h1{font-size:1.5rem}}
</style>
<style id='brand-skin'>@font-face{font-family:'Plus Jakarta Sans';font-style:normal;font-weight:200 800;font-display:swap;src:url('/fonts/plus-jakarta-var.woff2') format('woff2')}:root{--sans:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,sans-serif;--mono:'Plus Jakarta Sans',-apple-system,sans-serif}body{font-family:var(--sans)}html,body{overflow-x:clip}h1,h2,h3{letter-spacing:-0.02em}::selection{background:rgba(0,188,241,.35);color:#fff}</style></head>
<body>
  <main class="card">
    <img class="mark" src="/cinebody-wordmark.svg" alt="Cinebody" width="118" height="23">
    <div class="kick">${g.kicker}</div>
    <h1>${g.heading}</h1>
    <p class="sub">${g.sub}</p>
    <form id="gate" novalidate>
      <label for="pw">Password</label>
      <div class="row">
        <input id="pw" type="password" autocomplete="current-password" placeholder="Enter password" aria-label="Password" autofocus>
        <button type="submit">View</button>
      </div>
      <p id="err" class="err" hidden>That password didn&rsquo;t match, try again.</p>
    </form>
  </main>
  <script>
    var f=document.getElementById('gate'),pw=document.getElementById('pw'),err=document.getElementById('err'),btn=f.querySelector('button');
    f.addEventListener('submit',async function(e){
      e.preventDefault();
      if(!pw.value)return;
      err.hidden=true; btn.disabled=true; var t=btn.textContent; btn.textContent='Checking…';
      try{
        var r=await fetch('${g.unlockPath}',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({password:pw.value})});
        if(r.ok){ location.reload(); return; }
      }catch(_){}
      err.hidden=false; btn.disabled=false; btn.textContent=t; pw.focus(); pw.select();
    });
  </script>
</body>
</html>`;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  const pageGate = GATES.find((g) => g.page === pathname);
  if (pageGate) {
    const token = context.cookies.get(pageGate.cookie)?.value;
    const body = token === pageGate.token ? pageGate.html : gateHtml(pageGate);
    return new Response(body, {
      status: 200,
      headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'private, no-store' },
    });
  }

  const unlockGate = GATES.find((g) => g.unlockPath === pathname);
  if (unlockGate && context.request.method === 'POST') {
    let password = '';
    try {
      const body = (await context.request.json()) as { password?: unknown };
      if (typeof body?.password === 'string') password = body.password;
    } catch {
      // malformed body -> treated as wrong password below
    }
    if (!unlockGate.passwords.includes(password)) {
      return new Response(JSON.stringify({ ok: false }), {
        status: 401,
        headers: { 'content-type': 'application/json' },
      });
    }
    context.cookies.set(unlockGate.cookie, unlockGate.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }

  // Not one of the six gated paths - the entire rest of www.cinebody.com.
  // Pass straight through.
  return next();
});
