// Full page HTML for the two investor microsites, served directly by
// src/middleware.ts once the request's gate cookie checks out. Ported
// verbatim from cinebody-platform's apps/web/src/app/research/
// cinebody-investor-{intro,update}/route.ts (fetched from the live rendered
// output, not hand-transcribed) - keep this in sync if that source changes,
// or treat this as the new source of truth and update that repo to match.

export const INTRO_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Cinebody: investor intro</title>
<meta name="description" content="Cinebody: a decade of real revenue, a patented AI video loop, at its first profitable inflection. A quick look, and the raise.">
<meta name="theme-color" content="#0a0a0a">
<meta name="robots" content="noindex">
<style>*{margin:0;padding:0}html{-webkit-text-size-adjust:100%}</style>
<style>
:root{
  --bg:#0a0a0a; --ink:#f5f7f9; --ink-2:rgba(255,255,255,0.80); --ink-3:rgba(255,255,255,0.54);
  --pink:#eb008b; --cyan:#00bcf1; --yellow:#ffec03; --ghost:rgba(255,255,255,0.05);
  --card:rgba(22,23,28,0.62); --card-2:rgba(32,33,40,0.5); --line:rgba(255,255,255,0.10);
  --glass-blur:blur(20px); --shadow:0 10px 34px rgba(0,0,0,0.34);
  --brand:linear-gradient(135deg,#00bcf1 0%,#00bcf1 28%,#ffec03 36%,#ffec03 64%,#eb008b 72%,#eb008b 100%);
  --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif;
  --mono:ui-monospace,"SF Mono",SFMono-Regular,Menlo,"Roboto Mono",monospace;
  color-scheme:dark;
}
*{box-sizing:border-box;margin:0;padding:0}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
body{background:#08090d;color:var(--ink);font-family:var(--sans);font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:clip;position:relative}
@font-face{font-family:'Plus Jakarta Sans';font-style:normal;font-weight:200 800;font-display:swap;src:url('/fonts/plus-jakarta-var.woff2') format('woff2')}
body{font-family:'Plus Jakarta Sans',var(--sans)}
a{color:var(--cyan);text-decoration:none;border-bottom:1px solid color-mix(in srgb,var(--cyan) 32%,transparent)}
a:hover{border-bottom-color:var(--cyan)}

/* ---- homepage aurora: deep teal wash behind the hero, not flat black ---- */
.hero-aurora{position:absolute;top:0;left:0;right:0;height:680px;z-index:0;pointer-events:none;overflow:hidden;
  background:linear-gradient(180deg,#0a0a0a 0%,#041a24 55%,#08090d 100%)}
.hero-aurora::before{content:'';position:absolute;top:-30%;right:-25%;width:1100px;height:1100px;background:var(--cyan);border-radius:50%;filter:blur(200px);opacity:.14;animation:hero-glow 18s ease-in-out infinite alternate}
.hero-aurora::after{content:'';position:absolute;bottom:-30%;left:-20%;width:900px;height:900px;background:var(--pink);border-radius:50%;filter:blur(200px);opacity:.08;animation:hero-glow 22s ease-in-out infinite alternate-reverse}
@keyframes hero-glow{0%{transform:translate(0,0)}100%{transform:translate(30px,-20px)}}
@media(prefers-reduced-motion:reduce){.hero-aurora::before,.hero-aurora::after{animation:none}}

.wrap{position:relative;z-index:1;max-width:68rem;margin:0 auto;padding:2.6rem 1.75rem 3rem}
.brandbar{display:flex;width:fit-content;margin:0 0 2.2rem}
.brandbar img{height:24px;width:auto;display:block}
.ppill{display:flex;width:fit-content;align-items:center;gap:7px;font-family:var(--mono);font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#fff;
  background:#151518;border:1px solid transparent;border-radius:999px;padding:.4rem .85rem;margin:0 0 1.4rem;
  background-image:linear-gradient(#151518,#151518),linear-gradient(120deg,var(--cyan),var(--yellow),var(--pink),var(--cyan));
  background-origin:border-box;background-clip:padding-box,border-box}
.ppill::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--cyan);box-shadow:0 0 6px rgba(0,188,241,.7)}
.conf{display:inline-block;margin-top:1rem;font-size:.66rem;font-weight:700;letter-spacing:.08em;color:#ff8fc0;
  border:1px solid rgba(235,0,139,0.4);padding:.24rem .6rem;border-radius:4px}
.act-light .conf{color:#a3006b;border-color:rgba(194,3,111,.35)}
h1{font-weight:800;letter-spacing:-0.03em;line-height:1.12;font-size:clamp(2.1rem,4.6vw,3.2rem);margin:0 0 1.1rem;text-wrap:balance;
  background:linear-gradient(180deg,#fff 0%,#cdeefb 55%,#8fdcf7 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.dek{font-size:1.1rem;color:var(--ink-2);margin:0 0 1.6rem;text-wrap:balance;max-width:34rem}
h2{font-weight:750;letter-spacing:-0.02em;font-size:clamp(1.5rem,2.8vw,1.85rem);line-height:1.22;margin:0 0 1rem;max-width:38rem;text-wrap:balance;color:var(--ink)}
.sec{margin-top:3.6rem;padding:0 1.75rem}
.sec .wrap{padding:0;max-width:60rem;margin:0 auto}
.eyebrow{font-family:var(--mono);font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#fff;margin:0 0 .7rem}
.act-light .eyebrow{color:#0c0f14}
p{margin:0 0 1rem;color:var(--ink-2)}
.lead{font-size:1.03rem;color:var(--ink-2);max-width:44ch}
strong{font-weight:700;color:var(--ink)}
.video-embed{position:relative;padding-top:56.25%;height:0;border-radius:16px;overflow:hidden;background:#000;box-shadow:0 20px 60px rgba(0,0,0,.4)}
.video-embed iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.act-light .video-embed{box-shadow:0 20px 60px rgba(15,25,40,.18)}
.filmrow{display:grid;grid-template-columns:minmax(0,1fr) 465px;gap:clamp(24px,3.5vw,48px);align-items:center}
.filmrow h2,.filmrow .lead{max-width:none}
@media(max-width:980px){.filmrow{display:block}.filmrow .video-embed{margin-top:1.8rem}}

/* ---- hero: split grid, copy left, video wall right (site layout) ---- */
.hero-grid{display:grid;grid-template-columns:minmax(0,1fr) 465px;gap:clamp(24px,3.5vw,48px);align-items:center}
@media(max-width:980px){.hero-grid{display:block}}
.hero-scroller{display:none}
@media(min-width:980px){
  .hero-scroller{display:flex;gap:10px;height:600px;overflow:hidden;justify-content:center;
    -webkit-mask-image:linear-gradient(to bottom,transparent 0%,black 6%,black 94%,transparent 100%);
    mask-image:linear-gradient(to bottom,transparent 0%,black 6%,black 94%,transparent 100%)}
}
.hero-scroller-col{opacity:.75;filter:saturate(.92);display:flex;flex-direction:column;gap:10px;will-change:transform;flex-shrink:0;width:145px}
.scroll-up .hero-scroller-col{animation:scrollUp 40s linear infinite}
.scroll-down .hero-scroller-col{animation:scrollDown 45s linear infinite}
@keyframes scrollUp{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
@keyframes scrollDown{0%{transform:translateY(-50%)}100%{transform:translateY(0)}}
@media(prefers-reduced-motion:reduce){.hero-scroller-col{animation:none!important}}
.scr-card{position:relative;flex-shrink:0;width:145px;aspect-ratio:9/16;border-radius:12px;overflow:hidden;
  background:linear-gradient(135deg,#1a2a3a 0%,#0e1820 100%);border:1px solid rgba(255,255,255,.08)}
.scr-card iframe{position:absolute;inset:0;width:100%;height:100%;border:0;pointer-events:none}
.scr-label{position:absolute;left:8px;bottom:8px;z-index:2;font-family:var(--mono);font-size:.58rem;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,.8)}

.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:.7rem;margin-top:1.8rem}
@media(max-width:760px){.stats{grid-template-columns:repeat(2,1fr)}}
.stat{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:1.05rem 1rem;backdrop-filter:var(--glass-blur)}
.stat.ph{border-style:dashed;opacity:.7}
.act-light .stat{background:#fff;border-color:rgba(12,20,30,.10);box-shadow:0 10px 28px rgba(15,25,40,.08)}
.stat .n{font-family:var(--mono);font-size:1.5rem;font-weight:600;letter-spacing:-0.02em;color:var(--ink);font-variant-numeric:tabular-nums;line-height:1}
.act-light .stat .n{color:#0c0f14}
.stat .n.pink{color:var(--pink)}.stat .n.yellow{color:var(--yellow)}.stat .n.cyan{color:var(--cyan)}
.stat .l{font-size:.68rem;letter-spacing:.05em;text-transform:uppercase;color:var(--ink-3);margin-top:.4rem;line-height:1.35}

/* ---- act bands: curved dome edge into a light section, real technique ---- */
.act-light{position:relative;z-index:1;isolation:isolate;padding:6rem 0 3.4rem;margin-top:4rem}
.act-light::before{content:'';position:absolute;top:0;bottom:0;left:calc(50% - 50vw);width:100vw;z-index:-2;background:#f7f8fa;
  -webkit-mask-image:radial-gradient(65vw 70px at 50% -20px,transparent 98.5%,#000 100%);
  mask-image:radial-gradient(65vw 70px at 50% -20px,transparent 98.5%,#000 100%)}
.curve-backdrop{position:absolute;top:-2px;left:calc(50% - 50vw);width:100vw;height:80px;background:#08090d;z-index:-3;pointer-events:none}
.act-light{--ink:#12151b;--ink-2:rgba(18,21,27,.76);--ink-3:rgba(18,21,27,.52);--card:#fff;--card-2:#f2f4f8;--line:rgba(12,20,30,.12);color:var(--ink-2)}
.act-light h2,.act-light h3,.act-light strong,.act-light b{color:#111}

.quotes{display:flex;flex-wrap:wrap;justify-content:center;gap:.9rem;margin-top:1.4rem}
.quote{flex:0 1 calc(33.333% - .6rem);min-width:15rem}
@media(max-width:820px){.quote{flex-basis:calc(50% - .45rem)}}
@media(max-width:560px){.quote{flex-basis:100%}}
.quote{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:1.1rem 1.2rem;display:flex;flex-direction:column;gap:.7rem;
  border-top:3px solid var(--yellow)}
.quote p{font-size:.94rem;color:var(--ink);line-height:1.48;margin:0;font-style:italic}
.act-light .quote p{color:#222}
.qwho{display:flex;align-items:center;gap:.6rem;margin-top:auto}
.qwho .who{font-size:.78rem;color:var(--ink-3);line-height:1.35}
.qwho .who b{color:var(--ink);font-weight:650;display:block;font-size:.86rem}
.act-light .qwho .who b{color:#111}

.mono{flex:none;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;
  font-family:var(--sans);font-weight:800;font-size:.85rem;color:#04121a;border:1px solid rgba(255,255,255,.2)}
.pface{flex:none;width:40px;height:40px;border-radius:50%;object-fit:cover;border:1px solid var(--line)}
.pface.lg{width:56px;height:56px}
.mono.c1{background:linear-gradient(135deg,#00bcf1,#0098cc)}
.mono.c2{background:linear-gradient(135deg,#ffec03,#e0c800)}
.mono.c3{background:linear-gradient(135deg,#eb008b,#b8006c);color:#fff}
.mono.c4{background:linear-gradient(135deg,#8b9cff,#5f6fd8);color:#fff}
.mono.c5{background:linear-gradient(135deg,#7ff0a8,#2fb86a);color:#04250f}
.mono.lg{width:56px;height:56px;font-size:1.05rem}

.numlist{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1.4rem}
@media(max-width:760px){.numlist{grid-template-columns:1fr}}
.numitem{background:var(--card-2);border:1px solid var(--line);border-radius:12px;padding:1.1rem 1.15rem}
.numitem .no{font-family:var(--mono);font-size:.85rem;color:var(--cyan);font-weight:700;display:block;margin-bottom:.5rem}
.numitem h3{font-size:.98rem;font-weight:700;color:var(--ink);margin:0 0 .4rem;line-height:1.3}
.numitem p{font-size:.86rem;margin:0;line-height:1.5}

/* ---- solution: real sticky-scroll pipeline (pulled from cinebody-investor-deck) ----
   left: ghost numeral + eyebrow + h2 + lead, crossfading per stage.
   center: a dotted progress rail.
   right: the stage's real UI mockup, crossfading in sync. ---- */
.pipe-scroll{position:relative}
.pipe-sticky{position:sticky;top:calc(50vh - 300px);height:600px;display:flex;align-items:center}
@media(max-width:860px){.pipe-sticky{position:static;height:auto;display:block}}
.ps-grid{display:grid;grid-template-columns:minmax(0,.56fr) 40px minmax(0,1.44fr);gap:clamp(16px,2.5vw,36px);align-items:center;width:100%}
@media(max-width:860px){.ps-grid{display:block}}
.ps-copies{position:relative;min-height:300px}
@media(max-width:860px){.ps-copies{min-height:0;margin-bottom:1.6rem}}
.ps-copy{position:absolute;top:50%;left:0;right:0;transform:translateY(calc(-50% + 16px));opacity:0;transition:opacity .45s ease,transform .5s cubic-bezier(.2,.7,.2,1);pointer-events:none}
.ps-copy.on{opacity:1;transform:translateY(-50%);pointer-events:auto}
@media(max-width:860px){.ps-copy{position:static;opacity:1;transform:none;pointer-events:auto;display:none}.ps-copy.on{display:block}}
.pipe-ghost{position:absolute;top:-1rem;left:-0.04em;font-size:clamp(3.6rem,7vw,5.5rem);font-weight:800;line-height:1;letter-spacing:-.04em;color:rgba(0,188,241,.13);pointer-events:none;z-index:-1;user-select:none}
.ps-copy.c1 .pipe-ghost{color:rgba(235,0,139,.12)}
.ps-copy.c2 .pipe-ghost{color:rgba(255,236,3,.09)}
.ps-copy h2{margin-top:0}
.ps-rail{position:relative;height:340px;width:40px;justify-self:center}
@media(max-width:860px){.ps-rail{display:none}}
.ps-rail-line{position:absolute;left:50%;top:0;bottom:0;width:2px;margin-left:-1px;background:rgba(0,188,241,.14);border-radius:2px;overflow:hidden}
.ps-rail-fill{width:100%;height:0;background:linear-gradient(180deg,var(--cyan),rgba(0,188,241,.4));border-radius:2px;transition:height .3s ease}
.ps-node{position:absolute;left:50%;width:11px;height:11px;margin-left:-6px;border-radius:50%;background:#08131a;border:2px solid rgba(0,188,241,.4);transition:box-shadow .3s ease,border-color .3s ease}
.ps-node.on{border-color:var(--cyan);box-shadow:0 0 14px rgba(0,188,241,.5),0 0 0 5px rgba(0,188,241,.1)}
.ps-node.c1.on{border-color:var(--pink);box-shadow:0 0 14px rgba(235,0,139,.5),0 0 0 5px rgba(235,0,139,.1)}
.ps-node.c2.on{border-color:var(--yellow);box-shadow:0 0 14px rgba(255,236,3,.4),0 0 0 5px rgba(255,236,3,.08)}
.ps-scenes{position:relative;height:600px}
@media(max-width:860px){.ps-scenes{height:auto}}
.ps-scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;transform:translateY(16px);transition:opacity .45s ease,transform .5s cubic-bezier(.2,.7,.2,1);pointer-events:none}
.ps-scene.on{opacity:1;transform:none;pointer-events:auto}
@media(max-width:860px){.ps-scene{position:static;opacity:1;transform:none;pointer-events:auto;display:none}.ps-scene.on{display:flex}}
.ps-scene .d-cap{font-family:var(--mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);text-align:center;margin-top:1rem}
.ps-scene-body{width:100%}
/* device frame */
.d-phone{position:relative;width:100%;max-width:210px;aspect-ratio:9/19.3;margin:0 auto;
  border-radius:30px;padding:7px;background:linear-gradient(160deg,#26282e,#0d0e12);
  box-shadow:0 24px 56px rgba(0,0,0,.55),inset 0 1px 0 rgba(255,255,255,.12),0 0 0 1px rgba(255,255,255,.05)}
.d-screen{position:relative;width:100%;height:100%;border-radius:24px;overflow:hidden;background:#05070b}
.d-notch{position:absolute;top:7px;left:50%;transform:translateX(-50%);width:60px;height:15px;border-radius:10px;background:#000;z-index:6}
.d-vid{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border:0;pointer-events:none}
.d-scrim{position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,rgba(0,0,0,.32),transparent 22%,transparent 60%,rgba(0,0,0,.55))}
.d-two{display:grid;gap:.7rem;grid-template-columns:repeat(2,1fr);max-width:440px;margin:0 auto}
/* real director/interview overlay UI, pulled verbatim from the deck's own capture screen */
.a-ui{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;padding:26px 9px 12px;font-family:var(--sans)}
.a-top{display:flex;align-items:center;gap:5px}
.a-back{color:#fff;font-size:10px;font-weight:500;white-space:nowrap;opacity:.95}
.a-shot{flex:1;min-width:0;display:flex;align-items:center;gap:5px;background:rgba(16,18,23,.82);border-radius:16px;padding:5px 9px}
.a-shot .n{color:rgba(255,255,255,.5);font-size:9px;font-weight:600}
.a-shot .t{color:#fff;font-size:9.5px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}
.a-next{background:rgba(16,18,23,.82);border-radius:16px;padding:5px 9px;color:#fff;font-size:10px;font-weight:600;white-space:nowrap}
.a-sp{flex:1}
.a-note{background:rgba(14,16,21,.86);border-radius:13px;padding:9px 11px;display:flex;gap:8px;align-items:flex-start}
.a-note .bot{flex:none;width:18px;height:18px;border-radius:6px;background:rgba(0,188,241,.16);display:grid;place-items:center}
.a-note .bot svg{width:11px;height:11px;stroke:#00bcf1;fill:none;stroke-width:1.7}
.a-note .lab{font-size:7px;letter-spacing:.14em;font-weight:800;color:#00bcf1;margin:0 0 2px}
.a-note .msg{font-size:10.5px;line-height:1.32;color:#fff;margin:0}
.a-meters{display:flex;gap:4px;margin-top:8px;flex-wrap:wrap}
.a-meter{flex:1;min-width:40%;display:flex;align-items:center;justify-content:center;gap:3px;font-size:8px;font-weight:700;padding:5px 0;border-radius:16px;border:1px solid rgba(92,224,143,.55);color:#7fe6a3;background:rgba(16,26,20,.5)}
.a-meter.bad{border-color:rgba(255,95,95,.65);color:#ff8080;background:rgba(30,16,16,.5)}
.a-ctrls{display:flex;align-items:center;justify-content:center;gap:26px;margin-top:10px}
.a-side{width:30px;height:30px;border-radius:50%;background:rgba(16,18,23,.66);display:grid;place-items:center;color:#fff;font-size:12px}
.a-shutter{width:44px;height:44px;border-radius:50%;background:#eb008b;box-shadow:0 0 0 3px #fff,0 0 0 5px rgba(0,0,0,.28)}
/* interview question overlay, real video behind it */
.d-qcard{position:absolute;left:9px;right:9px;top:26px;z-index:3;background:rgba(235,0,139,.22);backdrop-filter:blur(6px);border:1px solid rgba(235,0,139,.5);border-radius:11px;padding:9px 10px}
.d-qcard .lab{font-size:7px;font-weight:800;letter-spacing:.14em;color:#ff5cc0;margin:0 0 3px;display:flex;align-items:center;gap:4px}
.d-qcard .lab::before{content:'';width:5px;height:5px;border-radius:50%;background:#ff2ba8}
.d-qcard .txt{font-size:10.5px;font-weight:650;line-height:1.3;color:#fff;margin:0}
/* brief -> shot list */
.d-brief{background:rgba(255,255,255,.02);border:1px solid var(--line);border-radius:14px;padding:1.1rem 1.2rem}
.d-brow{display:grid;grid-template-columns:5rem 1fr;gap:.4rem .9rem;align-items:baseline;padding:.6rem 0;border-bottom:1px solid var(--line)}
.d-brow:last-child{border-bottom:0}
.d-brow .k{font-family:var(--mono);font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3)}
.d-brow .val{font-size:.86rem;color:#fff}
.d-tone{display:flex;gap:.35rem;flex-wrap:wrap}
.d-tone span{font-size:.68rem;font-weight:600;color:var(--cyan);border:1px solid color-mix(in srgb,var(--cyan) 45%,transparent);border-radius:99px;padding:.15rem .5rem}
.d-panelhead{display:flex;align-items:center;gap:.6rem;font-family:var(--mono);font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);margin:1.1rem 0 .7rem}
.d-gen{margin-left:auto;color:var(--cyan);display:flex;align-items:center;gap:.35rem}
.d-gen::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--cyan);box-shadow:0 0 8px var(--cyan)}
.d-shots{display:flex;flex-direction:column;gap:.5rem}
.d-shot{background:rgba(255,255,255,.02);border:1px solid var(--line);border-radius:12px;padding:.7rem .85rem}
.d-shot .top{display:flex;align-items:baseline;gap:.5rem;margin-bottom:.3rem}
.d-shot .num{font-family:var(--mono);font-size:.72rem;color:var(--cyan);font-weight:700}
.d-shot .name{font-size:.86rem;font-weight:650;color:#fff}
.d-shot .meta{margin-left:auto;display:flex;gap:.3rem;flex-wrap:wrap}
.d-shot .meta span{font-family:var(--mono);font-size:.54rem;color:var(--ink-3);border:1px solid var(--line);border-radius:5px;padding:.1rem .35rem;white-space:nowrap}
.d-dots{display:flex;gap:4px;flex:none}
.d-dots i{width:7px;height:7px;border-radius:50%;display:block}
.d-shot .prompt{font-size:.76rem;line-height:1.42;color:var(--ink-2);margin:0}
.d-split{display:grid;gap:1.2rem;grid-template-columns:1fr;align-items:center}
@media(min-width:640px){.d-split.narrow{grid-template-columns:5fr 7fr}}
/* real score card + real scored clip preview */
.d-clip-ph{position:relative;width:100%;border-radius:16px;overflow:hidden;aspect-ratio:9/16;max-width:220px;margin:0 auto;border:1px solid var(--line);box-shadow:var(--shadow)}
.a-badge{position:absolute;top:10px;left:10px;z-index:4;font-family:var(--mono);font-size:.58rem;font-weight:700;letter-spacing:.1em;background:rgba(255,236,3,.95);color:#241a00;border-radius:99px;padding:.2rem .55rem;display:flex;align-items:center;gap:.3rem}
.a-badge::before{content:'';width:5px;height:5px;border-radius:50%;background:#241a00}
.a-cmeta{position:absolute;bottom:10px;left:10px;z-index:4;font-family:var(--mono);font-size:.55rem;letter-spacing:.06em;color:#fff;background:rgba(10,12,16,.72);border-radius:8px;padding:.28rem .5rem}
.a-score{background:rgba(255,255,255,.02);border:1px solid var(--line);border-radius:16px;padding:1.2rem 1.3rem}
.a-stop{display:flex;gap:1rem;align-items:flex-start;margin-bottom:1rem}
.a-rev{flex:none;text-align:left}
.a-rl{font-family:var(--mono);font-size:.58rem;letter-spacing:.16em;color:var(--ink-3);display:block;margin-bottom:.2rem}
.a-big{font-size:2.4rem;font-weight:800;line-height:.85;color:var(--yellow);font-variant-numeric:tabular-nums}
.a-big i{font-size:.85rem;color:var(--ink-3);font-style:normal;font-weight:600}
.a-gd{font-family:var(--mono);font-size:.58rem;letter-spacing:.18em;color:var(--yellow);font-weight:700;display:block;margin-top:.3rem}
.a-rtext{font-size:.82rem;line-height:1.46;color:var(--ink-2);margin:0}
.d-dims{display:flex;flex-direction:column;gap:.55rem;margin-top:1rem}
.d-dim{display:grid;grid-template-columns:4.6rem 1fr 2rem;gap:.7rem;align-items:center;font-family:var(--mono);font-size:.58rem;letter-spacing:.08em;color:var(--ink-3);font-weight:700}
.d-dim b{color:#fff;text-align:right;font-size:.74rem;font-variant-numeric:tabular-nums}
.d-track{height:5px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden}
.d-fill{height:100%;border-radius:99px}
.d-fill.cyan{background:var(--cyan)}.d-fill.warn{background:var(--yellow)}
.a-tips{border-top:1px solid var(--line);padding-top:.85rem;margin-top:1rem}
.a-tl{font-family:var(--mono);font-size:.56rem;letter-spacing:.16em;color:var(--ink-3);margin:0 0 .5rem}
.a-tip{display:flex;gap:.5rem;font-size:.78rem;line-height:1.4;color:var(--ink-2);margin-bottom:.4rem}
.a-tip::before{content:'';flex:none;width:6px;height:6px;border-radius:50%;background:var(--cyan);margin-top:.38rem}
/* edit -> the real product */
.d-editorshot{border-radius:16px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--shadow);max-width:480px;margin:0 auto}
.d-editorshot img{display:block;width:100%}

/* ---- why now: horizontal timeline, scroll-drawn connector ---- */
.tl-h{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;margin-top:2.2rem;position:relative}
.tl-h.tl-4{grid-template-columns:repeat(4,1fr)}
@media(max-width:760px){.tl-h{grid-template-columns:1fr!important;gap:1.6rem}}
.tl-h::before{content:'';position:absolute;top:9px;left:0;right:0;height:2px;background:var(--line);z-index:0}
@media(max-width:760px){.tl-h::before{top:0;bottom:0;left:9px;right:auto;width:2px;height:auto}}
.tl-h .tl-line{position:absolute;top:9px;left:0;height:2px;background:var(--cyan);width:0;transition:width 1.4s cubic-bezier(.2,.7,.2,1);z-index:1}
.tl-h.in .tl-line{width:100%}
@media(max-width:760px){.tl-h .tl-line{top:0;left:9px;width:2px;height:0;transition:height 1.4s cubic-bezier(.2,.7,.2,1)}.tl-h.in .tl-line{height:100%;width:2px}}
.tlh-item{position:relative;padding-top:1.8rem;opacity:0;transform:translateY(8px);transition:opacity .5s ease,transform .5s ease}
.tl-h.in .tlh-item{opacity:1;transform:none}
.tl-h.in .tlh-item:nth-child(2){transition-delay:.2s}.tl-h.in .tlh-item:nth-child(3){transition-delay:.4s}.tl-h.in .tlh-item:nth-child(4){transition-delay:.6s}
@media(max-width:760px){.tlh-item{padding-top:0;padding-left:1.8rem}}
.tlh-item::before{content:'';position:absolute;top:5px;left:0;width:10px;height:10px;border-radius:50%;background:var(--cyan);box-shadow:0 0 0 4px #08090d;z-index:2}
@media(max-width:760px){.tlh-item::before{top:2px;left:0}}
.tlh-item .yr{font-family:var(--mono);font-size:.74rem;color:var(--cyan);font-weight:700;letter-spacing:.04em;display:block;margin-bottom:.4rem}
.tlh-item p{font-size:.9rem;margin:0;color:var(--ink-2);line-height:1.5}

.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem;margin-top:1.4rem}
@media(max-width:760px){.pillars{grid-template-columns:1fr}}
.pillar{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:1.15rem 1.15rem}
.pillar h3{font-size:.94rem;font-weight:700;color:var(--ink);margin:0 0 .4rem}
.pillar p{font-size:.83rem;line-height:1.48;margin:0;color:var(--ink-3)}

/* ---- moat: real donut ring, real 3-item legend, slow ambient spin ---- */
.donutwrap{display:grid;grid-template-columns:1fr;justify-items:center;gap:2.2rem;max-width:44rem;margin:1.8rem auto 0;text-align:center}
.donut-box{position:relative;width:100%;max-width:230px;aspect-ratio:1;filter:drop-shadow(0 0 40px rgba(0,188,241,.22)) drop-shadow(0 8px 44px rgba(235,0,139,.16))}
.donut-ring{position:absolute;inset:0;border-radius:50%;animation:moatspin 36s linear infinite;
  background:conic-gradient(from -90deg,#00bcf1 0%,#00bcf1 26%,#ffec03 40%,#ffec03 60%,#eb008b 74%,#eb008b 96%,#00bcf1 100%);
  -webkit-mask:radial-gradient(farthest-side,transparent 0 60%,#000 62% 86%,transparent 88%);
  mask:radial-gradient(farthest-side,transparent 0 60%,#000 62% 86%,transparent 88%)}
@keyframes moatspin{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){.donut-ring{animation:none}}
.donut-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;pointer-events:none}
.donut-center b{font-family:var(--mono);font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3);font-weight:400}
.donut-center span{font-family:var(--sans);font-weight:800;font-size:1.15rem;color:var(--ink);letter-spacing:-0.01em}
.act-light .donut-center span{color:#111}
.rlegend{display:grid;grid-template-columns:repeat(3,1fr);gap:1.6rem;width:100%;text-align:left}
@media(max-width:640px){.rlegend{grid-template-columns:1fr}}
.rlegend .ri{display:flex;gap:.6rem;align-items:flex-start}
.rlegend .rdot{width:12px;height:12px;border-radius:4px;flex:none;margin-top:.25rem}
.rlegend .rt b{display:block;font-family:var(--sans);font-size:.92rem;color:var(--ink);font-weight:650}
.act-light .rlegend .rt b{color:#111}
.rlegend .rt span{font-family:var(--sans);font-size:.83rem;color:var(--ink-2);line-height:1.42}

/* ---- traction: full-bleed 55s logo marquee, real per-logo sizing ---- */
.logos{width:100vw;margin-left:calc(50% - 50vw);padding:2.2rem 0 0;overflow:hidden;position:relative;margin-top:1.8rem}
.logos-track{display:flex;align-items:center;gap:52px;animation:logos-scroll 55s linear infinite;width:max-content}
.logos-track:hover{animation-play-state:paused}
@keyframes logos-scroll{to{transform:translateX(-50%)}}
@media(prefers-reduced-motion:reduce){.logos-track{animation:none}}
.logos-track img{height:24px;width:auto;max-width:130px;object-fit:contain;opacity:.55;transition:opacity .3s ease;flex-shrink:0;filter:brightness(0) invert(1)}
.act-light .logos-track img{filter:brightness(0);opacity:.6}
.logos-track img:hover{opacity:.9}
.logos-track img[data-logo=siemens]{height:16px;max-width:100px}
.logos-track img[data-logo=webmd]{height:36px;max-width:150px}
.logos-track img[data-logo=roku]{height:20px;max-width:90px}
.logos-track img[data-logo=boeing]{height:24px;max-width:120px}
.logos-track img[data-logo=experian]{height:26px;max-width:130px}
.logos-track img[data-logo=dell]{height:34px;max-width:90px}
.logos-track img[data-logo=spglobal]{height:22px;max-width:120px}
.logos-track img[data-logo=royalcaribbean]{height:28px;max-width:140px}
.logos-track img[data-logo=altra]{height:22px;max-width:95px}

/* ---- competitive: box grid with a key up top, real six-stage coverage data ---- */
.cg-key{display:flex;flex-wrap:wrap;gap:1.1rem;margin:1.4rem 0 1.5rem;padding:.85rem 1.05rem;background:var(--card-2);border:1px solid var(--line);border-radius:10px}
.cg-key .k{display:flex;align-items:center;gap:.5rem;font-size:.78rem;color:var(--ink-2)}
.cg-sw{width:15px;height:15px;border-radius:4px;flex:none}
.cg-sw.on{background:var(--cyan)}
.cg-sw.comp{background:var(--pink)}
.cg-sw.part{background:color-mix(in srgb,var(--pink) 18%,transparent);border:1.5px solid var(--pink)}
.cg-sw.dev{background:color-mix(in srgb,var(--yellow) 16%,transparent);border:1.5px dashed var(--yellow)}
.cg-sw.off{background:var(--ghost);border:1px solid var(--line)}
.compgrid{overflow-x:auto;-webkit-overflow-scrolling:touch}
.cg-table{display:grid;grid-template-columns:8.5rem repeat(6,1fr);gap:5px;min-width:36rem;align-items:center}
.cg-row{display:contents}
.cg-head{font-family:var(--mono);font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3);text-align:center;padding:0 0 .5rem}
.cg-head:first-child{text-align:left}
.cg-name{font-size:.84rem;color:var(--ink-2);padding:.3rem .6rem .3rem 0}
.cg-name.cine{color:var(--ink);font-weight:700}
.cg-cell{aspect-ratio:1;border-radius:6px;justify-self:center;width:100%;max-width:2.3rem}
.cg-cell.on{background:var(--cyan)}
.cg-cell.comp{background:var(--pink)}
.cg-cell.part{background:color-mix(in srgb,var(--pink) 16%,transparent);border:1.5px solid var(--pink)}
.cg-cell.dev{background:color-mix(in srgb,var(--yellow) 14%,transparent);border:1.5px dashed var(--yellow)}
.cg-cell.off{background:var(--ghost);border:1px solid var(--line)}
.act-light .cg-cell.off{background:rgba(12,20,30,.05)}

.risks{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin-top:1.4rem}
@media(max-width:700px){.risks{grid-template-columns:1fr}}
.riskcard{background:var(--card-2);border:1px solid var(--line);border-radius:12px;padding:1.05rem 1.2rem}
.riskcard .rk{font-family:var(--mono);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--pink);font-weight:700;margin-bottom:.35rem}
.riskcard .rq{font-size:.92rem;color:var(--ink);font-weight:650;margin-bottom:.45rem}
.act-light .riskcard{background:#fff;border-color:rgba(12,20,30,.10)}
.act-light .riskcard .rq{color:#111}
.riskcard .ra{font-size:.85rem;color:var(--ink-3);line-height:1.5}

.team{display:flex;flex-direction:column;gap:.7rem;margin-top:1.4rem}
.tcard{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:1.1rem 1.25rem;display:flex;gap:1rem;align-items:flex-start}
.tcard .tbody{flex:1;min-width:0}
.tcard h3{font-size:.98rem;font-weight:700;color:var(--ink);margin:0 0 .1rem}
.tcard .role{font-family:var(--mono);font-size:.64rem;letter-spacing:.06em;text-transform:uppercase;color:var(--cyan);margin-bottom:.5rem}
.tcard p{font-size:.84rem;line-height:1.5;margin:0;color:var(--ink-3)}
.advisors{display:flex;flex-wrap:wrap;gap:1rem;margin-top:1rem}
.advcard{background:var(--card-2);border:1px solid var(--line);border-radius:12px;padding:.9rem 1.1rem;display:flex;gap:.8rem;align-items:center;flex:1 1 260px}
.advcard b{display:block;font-size:.86rem;color:var(--ink)}
.advcard span{font-size:.76rem;color:var(--ink-3);line-height:1.4}
.photo-note{margin-top:1rem;font-size:.72rem;color:var(--ink-3);font-style:italic}
.roadmap-h{font-size:1.15rem;font-weight:700;letter-spacing:-0.01em;margin-top:2.6rem}

.raisebox{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:1.7rem 1.7rem;margin-top:1.4rem}
.raisebox .lead{color:var(--ink-2);max-width:none;margin-bottom:1.2rem}
.fundtable{display:flex;flex-direction:column;gap:0;margin-top:1rem;border-top:1px solid var(--line)}
.fundrow{display:flex;justify-content:space-between;gap:1rem;padding:.7rem 0;border-bottom:1px solid var(--line)}
.fundrow .k{font-size:.88rem;color:var(--ink)}
.fundrow .d{font-size:.76rem;color:var(--ink-3);margin-top:.15rem}
.fundrow .v{font-family:var(--mono);font-size:.9rem;color:var(--cyan);font-weight:700;white-space:nowrap}
.returns{margin-top:1.6rem;padding-top:1.5rem;border-top:1px solid var(--line)}
.returns h3{font-size:1.15rem;font-weight:700;letter-spacing:-0.01em;margin-bottom:.35rem}
.returns .sub{font-size:.88rem;color:var(--ink-2);margin-bottom:1.1rem}
.cases{display:grid;grid-template-columns:repeat(2,1fr);gap:.7rem}
.case{background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:12px;padding:1.05rem 1rem;position:relative;overflow:hidden}
.case::before{content:'';position:absolute;top:0;left:0;right:0;height:3px}
.case.base::before{background:var(--cyan)}
.case.up::before{background:var(--pink)}
.case .t{font-size:.66rem;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-3);font-weight:700}
.case .n{font-family:var(--mono);font-size:1.6rem;font-weight:600;letter-spacing:-0.02em;margin:.5rem 0 .55rem;font-variant-numeric:tabular-nums;line-height:1}
.case.base .n{color:var(--cyan)}
.case.up .n{color:var(--pink)}
.case p{font-size:.8rem;color:var(--ink-2);line-height:1.5}
.case .ill{display:inline-block;margin-top:.55rem;font-size:.62rem;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3);border:1px dashed var(--line);border-radius:4px;padding:.1rem .4rem}
@media(max-width:760px){.cases{grid-template-columns:1fr}}

.closing{text-align:center;margin-top:3rem;padding:2rem 1.75rem 0}
.closing p{font-size:1.4rem;color:var(--ink);font-weight:650;line-height:1.4;max-width:34rem;margin:0 auto 2.4rem;text-wrap:balance}
.closing .real{background:linear-gradient(180deg,#22c8f7,#0098cc);-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:800}
.closing .contact{font-family:var(--mono);font-size:.8rem;color:var(--ink-3);margin-top:1.6rem}
.closing .disclaimer{max-width:46rem;margin:3rem auto 0;padding:1.6rem 0 3rem;border-top:1px solid var(--line);text-align:left}
.closing .disclaimer p{font-size:.68rem;font-weight:400;line-height:1.6;color:var(--ink-3);max-width:none;margin:0 0 .8rem;text-wrap:pretty}
.cta-pill{display:inline-flex;align-items:center;gap:.6rem;font-family:var(--sans);font-size:.86rem;font-weight:600;
  color:#fff;background:#151518;border:2px solid transparent;border-radius:999px;padding:.7rem 1.3rem;
  background-image:linear-gradient(#151518,#151518),conic-gradient(from 0deg,var(--cyan),var(--yellow),var(--pink),var(--cyan));
  background-origin:border-box;background-clip:padding-box,border-box;text-decoration:none;transition:transform .2s ease,box-shadow .2s ease}
.cta-pill:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(0,188,241,.22)}
.cta-pill svg{width:14px;height:14px}
.note{margin-top:1rem;padding:.7rem .9rem;background:rgba(255,255,255,.025);border-left:2px solid var(--cyan);border-radius:6px;font-size:.78rem;color:var(--ink-3);line-height:1.55}
.act-light .note{background:rgba(0,0,0,.02)}
</style>
</head>
<body>
<div class="hero-aurora" aria-hidden="true"></div>
<div class="wrap">
  <div class="hero-grid">
    <div>
      <a class="brandbar" href="/" aria-label="Cinebody"><img src="/cinebody-wordmark.svg" alt="Cinebody" width="130" height="25"></a>
      <p class="ppill">Investor Intro &middot; Private</p>
      <h1>Brief in. Video out. Smarter every time.</h1>
      <p class="dek">Real people film. AI learns what worked, for which brand, which market, which channel. One shoot becomes every format. Every result makes the next brief smarter. Nobody else has the loop, or the decade of human decisions training it.</p>
      <span class="conf">Confidential &middot; Not For Distribution</span>
    </div>
    <div class="hero-scroller" aria-hidden="true">
      <div class="scroll-up"><div class="hero-scroller-col">
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1111765405?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Dell</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1087531124?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Cogent</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1012467060?h=39cf8e54c8&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Royal Caribbean</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1111765405?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Dell</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1087531124?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Cogent</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1012467060?h=39cf8e54c8&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Royal Caribbean</span></div>
      </div></div>
      <div class="scroll-down"><div class="hero-scroller-col">
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/329885560?h=87abedb56e&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Nike</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1092175563?h=aeeb559c41&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Altra</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1087421388?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Point.me</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/329885560?h=87abedb56e&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Nike</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1092175563?h=aeeb559c41&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Altra</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1087421388?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Point.me</span></div>
      </div></div>
      <div class="scroll-up"><div class="hero-scroller-col">
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1129595346?h=755f92d893&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Lorde</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1061059233?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Royal Caribbean</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1098260354?h=9d87d05789&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Altra</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1129595346?h=755f92d893&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Lorde</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1061059233?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Royal Caribbean</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1098260354?h=9d87d05789&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Altra</span></div>
      </div></div>
    </div>
  </div>
</div>

<div class="act-light"><div class="curve-backdrop"></div><div class="wrap" style="padding:0 1.75rem">
  <p class="eyebrow">The Industry Verdict</p>
  <h2>Real people cannot be automated.</h2>
  <p class="lead">The world&rsquo;s most powerful marketers spent billions figuring this out.</p>
  <div class="quotes">
    <div class="quote"><p>&ldquo;Brands are met with skepticism when messages come directly from corporations. There are 19,000 zip codes in India. I want one influencer in each of them.&rdquo;</p><div class="qwho"><img class="pface" src="/research-headshots/fernando-fernandez.jpg" alt="Fernando Fernandez"><div class="who"><b>Fernando Fernandez</b>CEO, Unilever</div></div></div>
    <div class="quote"><p>&ldquo;We have become incredibly efficient in creating things that people ignore. Value has been replaced by volume. We confused motion with meaning.&rdquo;</p><div class="qwho"><img class="pface" src="/research-headshots/leandro-barreto.jpg" alt="Leandro Barreto"><div class="who"><b>Leandro Barreto</b>Global CMO, Unilever</div></div></div>
    <div class="quote"><p>&ldquo;Do not expect AI to be a magic wand for generating breakthrough creative. Draw inspiration from everyday moments that matter in customers&rsquo; lives.&rdquo;</p><div class="qwho"><img class="pface" src="/research-headshots/marc-pritchard.jpg" alt="Marc Pritchard"><div class="who"><b>Marc Pritchard</b>Chief Brand Officer, P&amp;G</div></div></div>
    <div class="quote"><p>&ldquo;AI slop is content not about creating value for the viewer. It is mass-produced to drive revenue for the uploader.&rdquo;</p><div class="qwho"><img class="pface" src="/research-headshots/rich-raddon.jpg" alt="Rich Raddon"><div class="who"><b>Rich Raddon</b>CEO, Zefr</div></div></div>
    <div class="quote"><p>&ldquo;The rise of AI will trigger a feverish demand for authenticity. In a world overrun by robot output, hollow feelings will spark a frantic search for all things real.&rdquo;</p><div class="qwho"><img class="pface" src="/research-headshots/thomas-ranese.jpg" alt="Thomas Ranese"><div class="who"><b>Thomas Ranese</b>Global CMO, Intuit</div></div></div>
  </div>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">The Problem</p>
  <h2>Every video AI tool is blind to the brief.</h2>
  <div class="numlist">
    <div class="numitem"><span class="no">01</span><h3>AI tools process the brief. But they do not understand it.</h3><p>Today&rsquo;s tools ingest a brief but have no grasp of brand voice, market nuance, or audience context. Clips come back with a clear gap between intent and output.</p></div>
    <div class="numitem"><span class="no">02</span><h3>&ldquo;Fix it in post&rdquo; is not a viable option.</h3><p>Every existing AI edit tool receives a dump of unscored, unguided footage. The problem was upstream. The edit cannot fix what the shoot never had.</p></div>
    <div class="numitem"><span class="no">03</span><h3>Nothing learned for the next brief.</h3><p>Which shots converted, which creators delivered, which channel performed: none of it feeds back. Every brief is written blind.</p></div>
  </div>
</div></div>

<div class="sec"><div class="wrap" style="max-width:70rem">
  <p class="eyebrow">The Solution</p>
  <h2>Cinebody runs intelligence while people are still shooting.</h2>
  <p class="lead">Not just directing the shoot. A full loop, measured, then fed back to make the next brief smarter. Scroll through it.</p>
  <div class="pipe-scroll" id="solScroll" style="height:400vh">
    <div class="pipe-sticky"><div class="ps-grid">
      <div class="ps-copies" id="psCopies">
        <div class="ps-copy on" data-stage="0"><div class="pipe-ghost" aria-hidden="true">01</div><p class="eyebrow">Stage 01 &middot; Brief to shot list</p><h2>It turns a brand brief into a real shot list</h2><p class="lead">Drop in the brand&rsquo;s brief and Cinebody writes the shoot: every shot with its framing, length, seconds, frame-rate and the exact prompt the filmer follows. This is a real shot list generated inside the product.</p></div>
        <div class="ps-copy c1" data-stage="1"><div class="pipe-ghost" aria-hidden="true">02</div><p class="eyebrow">Stage 02 &middot; The AI Director</p><h2>A director in the viewfinder, not a filter over it</h2><p class="lead">The Director rides in the camera while the filmer shoots, metering light, focus, steadiness and audio live, and speaking up one note at a time. For testimonials, the same AI runs the interview: it asks the brief&rsquo;s questions out loud and adapts each follow-up to what the person says.</p></div>
        <div class="ps-copy c2" data-stage="2"><div class="pipe-ghost" aria-hidden="true">03</div><p class="eyebrow">Stage 03 &middot; Scored ingestion</p><h2>Every clip is graded the moment it lands</h2><p class="lead">Uploads hit a zero-click pipeline: a review score against the brief across audio, focus, framing, exposure and stability, with written tips back to the filmer. Strong clips auto-approve into the edit pool.</p></div>
        <div class="ps-copy" data-stage="3"><div class="pipe-ghost" aria-hidden="true">04</div><p class="eyebrow">Stage 04 &middot; The auto edit</p><h2>An AI edit you can actually edit</h2><p class="lead">Cinebody assembles the cut itself: the best take of each shot in story order, b-roll placed, captions burned, music mixed. A real, editable timeline out, not a locked render.</p></div>
      </div>
      <div class="ps-rail" id="psRail">
        <div class="ps-rail-line"><div class="ps-rail-fill" id="psRailFill"></div></div>
        <div class="ps-node on" style="top:6%"></div>
        <div class="ps-node c1" style="top:35.3%"></div>
        <div class="ps-node c2" style="top:64.6%"></div>
        <div class="ps-node" style="top:94%"></div>
      </div>
      <div class="ps-scenes" id="psScenes">
        <div class="ps-scene on" data-stage="0"><div class="ps-scene-body">
          <div class="d-panelhead" style="margin-bottom:.8rem"><span class="d-dots"><i style="background:#ff5f56"></i><i style="background:#ffbd2e"></i><i style="background:#27c93f"></i></span>Cinebody &middot; Brief to shot list<span class="d-gen">Generated</span></div>
          <div class="d-split narrow">
            <div class="d-brief">
              <div class="d-brow"><span class="k">Campaign</span><span class="val">Shop the Routine, Spring Essentials</span></div>
              <div class="d-brow"><span class="k">Goal</span><span class="val">Drive spring purchase intent, direct shop CTA</span></div>
              <div class="d-brow"><span class="k">Content</span><span class="val">Customer routine walkthroughs and product value props</span></div>
              <div class="d-brow"><span class="k">Format</span><span class="val">Portrait 9:16 &middot; guided capture</span></div>
              <div class="d-brow"><span class="k">Tone</span><span class="val"><span class="d-tone"><span>Real</span><span>Warm</span><span>Shoppable</span></span></span></div>
            </div>
            <div>
              <div class="d-panelhead">AI shot list &middot; 5 of 8 shots</div>
              <div class="d-shots">
                <div class="d-shot"><div class="top"><span class="num">01</span><span class="name">The Flat Lay Reveal</span><span class="meta"><span>8&ndash;15s</span><span>30fps</span><span>PORT</span></span></div><p class="prompt">Lay all your spring skincare products out on a clean white or light-colored surface&hellip;</p></div>
                <div class="d-shot"><div class="top"><span class="num">02</span><span class="name">Texture Close-Up</span><span class="meta"><span>5&ndash;10s</span><span>60fps</span><span>PORT</span></span></div><p class="prompt">Pick your hero product, a serum, moisturizer, or SPF. Hold&hellip;</p></div>
                <div class="d-shot"><div class="top"><span class="num">03</span><span class="name">Step-by-Step Routine Walkthrough</span><span class="meta"><span>30&ndash;60s</span><span>30fps</span><span>PORT</span></span></div><p class="prompt">Stand in front of your bathroom mirror with good lighting,&hellip;</p></div>
                <div class="d-shot"><div class="top"><span class="num">04</span><span class="name">Why Spring, Why Now</span><span class="meta"><span>10&ndash;20s</span><span>30fps</span><span>PORT</span></span></div><p class="prompt">Face the camera straight on with good light on your face,&hellip;</p></div>
                <div class="d-shot"><div class="top"><span class="num">05</span><span class="name">The Shop CTA Close-Out</span><span class="meta"><span>5&ndash;10s</span><span>30fps</span><span>PORT</span></span></div><p class="prompt">Hold your one or two favorite products from the routine rig&hellip;</p></div>
              </div>
            </div>
          </div>
          <p class="d-cap">Brief in &rarr; shot list out. Generated inside the product.</p>
        </div></div>
        <div class="ps-scene" data-stage="1"><div class="ps-scene-body">
          <div class="d-two">
            <div class="d-phone"><div class="d-screen"><span class="d-notch"></span>
              <img class="d-vid" src="/research-cuts/feed-grace.jpg" alt="Real filmer feed"><span class="d-scrim"></span>
              <div class="a-ui">
                <div class="a-top"><span class="a-back">&lsaquo; Back</span><div class="a-shot"><span class="n">1/8</span><span class="t">Meet the creator, intro</span></div><span class="a-next">Next &rsaquo;</span></div>
                <div class="a-sp"></div>
                <div class="a-note"><span class="bot"><svg viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4M8 13h.01M16 13h.01M9 17h6"/></svg></span><div><p class="lab">DIRECTOR</p><p class="msg">Beautiful light. Come in closer and keep your face sharp.</p></div></div>
                <div class="a-meters"><div class="a-meter">&#10003; LIGHT</div><div class="a-meter">&#10003; FOCUS</div><div class="a-meter">&#10003; STEADY</div><div class="a-meter">&#10003; AUDIO</div></div>
                <div class="a-ctrls"><span class="a-side">&#9881;</span><span class="a-shutter"></span><span class="a-side">&#8635;</span></div>
              </div>
            </div></div>
            <div class="d-phone"><div class="d-screen"><span class="d-notch"></span>
              <img class="d-vid" src="/research-cuts/feed-broll.jpg" alt="Real filmer feed"><span class="d-scrim"></span>
              <div class="a-ui">
                <div class="a-top"><span class="a-back">&lsaquo; Back</span><div class="a-shot"><span class="n">3/8</span><span class="t">The spread, table b-roll</span></div><span class="a-next">Next &rsaquo;</span></div>
                <div class="a-sp"></div>
                <div class="a-note"><span class="bot"><svg viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4M8 13h.01M16 13h.01M9 17h6"/></svg></span><div><p class="lab">DIRECTOR</p><p class="msg">Get lower and let the food fill the frame, and hold steady.</p></div></div>
                <div class="a-meters"><div class="a-meter">&#10003; LIGHT</div><div class="a-meter">&#10003; FOCUS</div><div class="a-meter bad">&#9679; STEADY</div><div class="a-meter">&#10003; AUDIO</div></div>
                <div class="a-ctrls"><span class="a-side">&#9881;</span><span class="a-shutter"></span><span class="a-side">&#8635;</span></div>
              </div>
            </div></div>
          </div>
          <p class="d-cap">Two live directions &middot; light / focus / steady / audio meters &middot; the shot list in the viewfinder</p>
        </div></div>
        <div class="ps-scene" data-stage="2"><div class="ps-scene-body">
          <div class="d-split narrow">
            <div class="d-clip-ph">
              <img class="d-vid" src="/research-cuts/feed-veronica.jpg" alt="Scored clip, real footage"><span class="d-scrim"></span>
              <span class="a-badge">GOOD</span><span class="a-cmeta">0:12 &middot; 9:16 &middot; Veronica O.</span>
            </div>
            <div class="a-score">
              <div class="a-stop"><div class="a-rev"><span class="a-rl">REVIEW</span><span class="a-big">7<i>/10</i></span><span class="a-gd">GOOD</span></div><p class="a-rtext">Strong energy and a clean shot, but the framing is inconsistent and occasionally cuts off the filmer&rsquo;s face.</p></div>
              <div class="d-dims">
                <div class="d-dim">AUDIO<div class="d-track"><div class="d-fill cyan" style="width:80%"></div></div><b>80</b></div>
                <div class="d-dim">FOCUS<div class="d-track"><div class="d-fill cyan" style="width:80%"></div></div><b>80</b></div>
                <div class="d-dim">FRAMING<div class="d-track"><div class="d-fill warn" style="width:50%"></div></div><b>50</b></div>
                <div class="d-dim">EXPOSURE<div class="d-track"><div class="d-fill cyan" style="width:85%"></div></div><b>85</b></div>
              </div>
              <div class="a-tips"><p class="a-tl">TIPS</p><div class="a-tip">Keep your face in frame when speaking, or frame fully out.</div></div>
            </div>
          </div>
          <p class="d-cap">The clip on one side, its score against the brief on the other: the real review UI</p>
        </div></div>
        <div class="ps-scene" data-stage="3"><div class="ps-scene-body">
          <div class="d-editorshot"><img src="/research-cuts/editor-real.png" alt="Cinebody editor, real product capture"></div>
          <p class="d-cap">The real editor &middot; not a mockup.</p>
        </div></div>
      </div>
    </div></div>
  </div>
</div></div>

<div class="act-light"><div class="curve-backdrop"></div><div class="wrap" style="padding:0 1.75rem">
  <div class="filmrow">
    <div>
      <p class="eyebrow">See It In Motion</p>
      <h2>That&rsquo;s the loop. Here&rsquo;s the full picture.</h2>
      <p class="lead">Everything above, plus the rest of the product: the launch video, live on the site today.</p>
    </div>
    <div class="video-embed"><iframe src="https://player.vimeo.com/video/1231053723?h=3deef9a1e3&amp;title=0&amp;byline=0&amp;portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>
  </div>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">Why Now</p>
  <h2>Ten years early. Right on time.</h2>
  <div class="tl-h" id="whyNowTl">
    <div class="tl-line"></div>
    <div class="tlh-item"><span class="yr">2016 &ndash; 2022</span><p>Cinebody ships its first software and gains real traction: Nike, Gatorade, Diageo and others sign up. The AI needed to complete the full vision doesn&rsquo;t exist yet, and the market isn&rsquo;t ready. We were early.</p></div>
    <div class="tlh-item"><span class="yr">2022 &ndash; 2025</span><p>Growth plateaus. Brands shift budgets to creators and hit the problem of briefing and managing them at scale. Cinebody survives on services, rebuilds, sharpens the model.</p></div>
    <div class="tlh-item"><span class="yr">2026</span><p>First profitable half. All six stages live. The AI capabilities Cinebody always needed finally exist. Repositioning to software-first. This is what we set out to build in 2016.</p></div>
  </div>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">Market Size</p>
  <h2>The brand video market is massive. Our capture model is bottom-up.</h2>
  <div class="stats" style="grid-template-columns:repeat(3,1fr)">
    <div class="stat"><div class="n">$130B</div><div class="l">TAM &middot; brand spend on creator &amp; social video, growing 26% YoY, 4x the media industry</div></div>
    <div class="stat"><div class="n cyan">$9.6B</div><div class="l">SAM &middot; enterprise UGC video production, English-speaking markets</div></div>
    <div class="stat"><div class="n pink">$7&ndash;10M</div><div class="l">SOM &middot; ARR, 3-year bottom-up capture across SMB, mid-market &amp; enterprise SaaS</div></div>
  </div>
  <p class="note">Sources: IAB State of Creator Advertising 2026, Grand View Research UGC Platform Market Report 2026.</p>
</div></div>

<div class="act-light"><div class="curve-backdrop"></div><div class="wrap" style="padding:0 1.75rem">
  <p class="eyebrow">Moat</p>
  <h2>Directing a shoot is replicable. A decade of human editor data is not.</h2>
  <div class="donutwrap">
    <div class="donut-box" role="img" aria-label="The moat: capture scoring, brief-to-edit, and training data"><div class="donut-ring"></div><div class="donut-center"><b>The</b><span>moat</span></div></div>
    <div class="rlegend">
      <div class="ri"><span class="rdot" style="background:#00bcf1"></span><span class="rt"><b>Capture scoring</b><span>Grade raw footage against the brief at ingest.</span></span></div>
      <div class="ri"><span class="rdot" style="background:#eb008b"></span><span class="rt"><b>Brief-to-edit</b><span>Cut a finished video from the scored pool.</span></span></div>
      <div class="ri"><span class="rdot" style="background:#ffec03"></span><span class="rt"><b>Training data</b><span>Real editor project files, ingested at scale.</span></span></div>
    </div>
  </div>
  <p style="margin-top:1.4rem;font-size:.86rem">8 granted patents (7 US, 1 Canada), 2017&ndash;2025, protect the foundation of this loop. New filings extending to AI scoring and edit-assembly are already in process.</p>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">Traction</p>
  <h2>Not a demo. A decade of real revenue, at its first profitable inflection.</h2>
  <div class="stats" style="grid-template-columns:repeat(3,1fr)">
    <div class="stat"><div class="n">10</div><div class="l">Years in business</div></div>
    <div class="stat"><div class="n cyan">$1.4&ndash;1.6M</div><div class="l">Revenue trend, 2026</div></div>
    <div class="stat"><div class="n">+40%</div><div class="l">YoY revenue growth, H1 2026</div></div>
    <div class="stat"><div class="n">+177%</div><div class="l">YoY net profit growth, H1 2026</div></div>
    <div class="stat"><div class="n">H1 2026</div><div class="l">First profitable half in company history</div></div>
    <div class="stat"><div class="n">6/6</div><div class="l">Loop stages shipped live</div></div>
  </div>
  <div class="logos"><div class="logos-track">
    <img src="/research-logos/nike.png" alt="Nike" loading="lazy"><img src="/research-logos/boeing.png" alt="Boeing" data-logo="boeing" loading="lazy"><img src="/research-logos/siemens.png" alt="Siemens" data-logo="siemens" loading="lazy"><img src="/research-logos/dell.png" alt="Dell" data-logo="dell" loading="lazy"><img src="/research-logos/royalcaribbean.png" alt="Royal Caribbean" data-logo="royalcaribbean" loading="lazy"><img src="/research-logos/spglobal.png" alt="S&amp;P Global" data-logo="spglobal" loading="lazy"><img src="/research-logos/experian.png" alt="Experian" data-logo="experian" loading="lazy"><img src="/research-logos/webmd.png" alt="WebMD" data-logo="webmd" loading="lazy"><img src="/research-logos/roku.png" alt="Roku" data-logo="roku" loading="lazy"><img src="/research-logos/georgiapacific.png" alt="Georgia-Pacific" loading="lazy"><img src="/research-logos/altra.png" alt="Altra" data-logo="altra" loading="lazy"><img src="/research-logos/pointme.png" alt="point.me" loading="lazy">
    <img src="/research-logos/nike.png" alt="" loading="lazy"><img src="/research-logos/boeing.png" alt="" data-logo="boeing" loading="lazy"><img src="/research-logos/siemens.png" alt="" data-logo="siemens" loading="lazy"><img src="/research-logos/dell.png" alt="" data-logo="dell" loading="lazy"><img src="/research-logos/royalcaribbean.png" alt="" data-logo="royalcaribbean" loading="lazy"><img src="/research-logos/spglobal.png" alt="" data-logo="spglobal" loading="lazy"><img src="/research-logos/experian.png" alt="" data-logo="experian" loading="lazy"><img src="/research-logos/webmd.png" alt="" data-logo="webmd" loading="lazy"><img src="/research-logos/roku.png" alt="" data-logo="roku" loading="lazy"><img src="/research-logos/georgiapacific.png" alt="" loading="lazy"><img src="/research-logos/altra.png" alt="" data-logo="altra" loading="lazy"><img src="/research-logos/pointme.png" alt="" loading="lazy">
  </div></div>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">Competitive Landscape</p>
  <h2>They hold pieces, not the loop</h2>
  <p class="lead">Six stages, brief to finished cut. Each row is a player, each column a stage. Cinebody spans the track; every rival lights up one or two isolated cells.</p>
  <div class="cg-key">
    <span class="k"><span class="cg-sw on"></span>Cinebody, shipped</span>
    <span class="k"><span class="cg-sw comp"></span>Competitor, full</span>
    <span class="k"><span class="cg-sw part"></span>Competitor, partial</span>
    <span class="k"><span class="cg-sw off"></span>Not offered</span>
  </div>
  <div class="compgrid"><div class="cg-table">
    <div class="cg-head"></div><div class="cg-head">Brief</div><div class="cg-head">Direct</div><div class="cg-head">Ingest</div><div class="cg-head">Edit</div><div class="cg-head">Finish</div><div class="cg-head">Graphics</div>
    <div class="cg-row"><div class="cg-name cine">Cinebody</div><div class="cg-cell on" title="Shipped: brand brief drives an AI shot list"></div><div class="cg-cell on" title="Shipped: AI director coaches the filmer live"></div><div class="cg-cell on" title="Shipped: scored ingest, auto approve/reject"></div><div class="cg-cell on" title="Shipped: autonomous edit from the raw pool"></div><div class="cg-cell on" title="Shipped: finished social cut, no human pass"></div><div class="cg-cell on" title="Shipped: automated brand graphics engine"></div></div>
    <div class="cg-row"><div class="cg-name">Eddie AI</div><div class="cg-cell part" title="Reads a brief or treatment"></div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell comp" title="Builds real rough cuts from raw footage"></div><div class="cg-cell off"></div><div class="cg-cell off"></div></div>
    <div class="cg-row"><div class="cg-name">TikTok Symphony</div><div class="cg-cell comp" title="Reads a brief"></div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell part" title="Brief to finished ad, but fully generative avatars"></div><div class="cg-cell off"></div></div>
    <div class="cg-row"><div class="cg-name">Adobe Premiere AI</div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell part" title="Assembles starting points; can&rsquo;t read a brief yet"></div><div class="cg-cell off"></div><div class="cg-cell off"></div></div>
    <div class="cg-row"><div class="cg-name">Descript Underlord</div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell part" title="Prompt-directed edits inside its own editor"></div><div class="cg-cell off"></div><div class="cg-cell off"></div></div>
  </div></div>
  <p class="note">TikTok Symphony is fully generative: licensed-actor avatars, not real footage. Adobe brief support is explicitly &ldquo;on the roadmap&rdquo; per its own FAQ. Descript takes prompts, not briefs, on single recordings inside its own editor.</p>
</div></div>

<div class="act-light"><div class="curve-backdrop"></div><div class="wrap" style="padding:0 1.75rem">
  <p class="eyebrow">The Ugly</p>
  <h2>Every reason this could fail. And why it won&rsquo;t.</h2>
  <div class="risks">
    <div class="riskcard"><div class="rk">Risk</div><div class="rq">A fast-follower builds the full loop.</div><div class="ra">They&rsquo;d need every stage (brief, shoot, score, adapt, distribute, measure, learn) run at scale, then start collecting labeled data. Years away. 8 patents protect the foundation; the data moat compounds with every campaign.</div></div>
    <div class="riskcard"><div class="rk">Risk</div><div class="rq">Google or Adobe builds this themselves.</div><div class="ra">Each owns exactly one piece of the loop. Building the full assembly would take 3&ndash;5 years. They would buy Cinebody before they build it.</div></div>
    <div class="riskcard"><div class="rk">Risk</div><div class="rq">AI-generated video replaces the need for real footage.</div><div class="ra">Nobody wants synthetic ads. They want authentic content made faster, exactly what Cinebody delivers. The backlash against AI slop strengthens this position every month.</div></div>
    <div class="riskcard"><div class="rk">Risk</div><div class="rq">Current revenue is too small for platform-scale returns.</div><div class="ra">$1.4&ndash;1.6M is a services-weighted baseline, not the software ceiling. This raise funds the return to software-first. At platform scale, the trajectory is a different order of magnitude.</div></div>
  </div>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">The Team</p>
  <h2>The founders removed their own salaries rather than compromise the vision.</h2>
  <div class="team">
    <div class="tcard"><img class="pface lg" src="/research-headshots/scott-mcdonald.jpg" alt="Scott McDonald"><div class="tbody"><h3>Scott McDonald</h3><div class="role">CEO &amp; Co-Founder</div><p>Built Cinebody from zero to ten years of operating revenue before UGC was a category. Removed his own salary for multiple years to protect the company and the vision. Now leading the return to software-first at the moment the market finally caught up.</p></div></div>
    <div class="tcard"><img class="pface lg" src="/research-headshots/gavin-anstey.jpg" alt="Gavin Anstey"><div class="tbody"><h3>Gavin Anstey</h3><div class="role">President &amp; Co-Founder</div><p>Engineered the H1 2026 turnaround: +40% revenue YoY, first profitable half, full operational rebuild. Also removed his own salary. The financial architect behind the inflection point this raise is built on.</p></div></div>
    <div class="tcard"><img class="pface lg" src="/research-headshots/adam-shaffner.jpg" alt="Adam Shaffner"><div class="tbody"><h3>Adam Shaffner</h3><div class="role">COO</div><p>Rebuilt the services operation and sales process: SOPs, sharpened ICP, structured pipeline. Owns delivery quality and client retention. The commercial backbone behind the H1 2026 turnaround.</p></div></div>
  </div>
  <div class="advisors">
    <div class="advcard"><img class="pface" src="/research-headshots/alex-bogusky.jpg" alt="Alex Bogusky"><div><b>Alex Bogusky</b><span>Advisor, Investor &middot; Co-founder, CP+B &middot; Adweek&rsquo;s Creative Director of the Decade</span></div></div>
    <div class="advcard"><img class="pface" src="/research-headshots/olivier-rabenschlag.jpg" alt="Olivier Rabenschlag"><div><b>Olivier Rabenschlag</b><span>Advisor, Investor &middot; Former Google Director (11 yrs), built &amp; scaled Google&rsquo;s Enterprise AI Partnership Portfolio</span></div></div>
  </div>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">The Raise</p>
  <h2>$1.5M to own the category.</h2>
  <div class="raisebox">
    <p class="lead">Growth capital into a 10-year operating business at its first profitable inflection. Returning to software-first to build the platform that owns enterprise video production globally.</p>
    <div class="stats" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat"><div class="n">$1.5M</div><div class="l">Raising</div></div>
      <div class="stat"><div class="n cyan">$10.4M</div><div class="l">Valuation</div></div>
      <div class="stat"><div class="n">12mo</div><div class="l">Runway</div></div>
    </div>
    <div class="returns">
      <h3>Valued at $10.4M today. Here is where it could go.</h3>
      <p class="sub">Software companies are valued on recurring revenue. Our bottom-up SOM puts Cinebody at $7&ndash;10M ARR within three years, and that changes the math.</p>
      <div class="cases">
        <div class="case base"><div class="t">Base case &middot; 7&ndash;10x</div><div class="n">$49&ndash;100M</div><p>Our $7&ndash;10M ARR SOM at a standard multiple for defensible, patented SaaS.</p></div>
        <div class="case up"><div class="t">Upside &middot; 30&ndash;100x</div><div class="n">$300M&ndash;$1B+</div><p>Strategic partner integrations embed Cinebody inside global brands and agencies, making it the operating system for brand video. Competing acquirers pay a control premium.</p><span class="ill">Illustrative</span></div>
      </div>
      <p class="note">7&ndash;10x is standard for defensible SaaS with a patented moat (Bessemer Venture Partners, State of the Cloud 2025). The upside case is illustrative, not part of the plan.</p>
    </div>
  </div>
</div></div>

<div class="closing">
  <p>The world is drowning in content no real person made, watched by audiences that don&rsquo;t exist, measured by metrics nobody trusts. Cinebody is the infrastructure for the only thing that still works: <span class="real">Real.</span></p>
  <a class="cta-pill" href="mailto:gavin@cinebody.com"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>Contact &middot; gavin@cinebody.com</a>
  <p class="contact">cinebody.com &middot; 2026</p>
  <div class="disclaimer">
    <p>The information herein has been prepared for informational purposes only and does not purport to contain all of the information that a prospective investor may require in evaluating an investment and making an investment decision. In all cases, interested parties should conduct their own investigation of Super 6, LLC (the &ldquo;Company&rdquo;). None of the Company nor any of its affiliates, officers, managers, members, employees or representatives make any representations or warranties, explicit or otherwise, as to the accuracy or completeness of the information herein or otherwise made available in connection with any further investigation of the Company, and the Company expressly disclaims any and all liability that may be based on or arise from such information, errors therein or omissions therefrom.</p>
    <p>Nothing herein or otherwise made available shall be construed as giving legal, financial, tax or other advice of any kind. Delivery of this confidential summary (this &ldquo;CS&rdquo;) shall not and does not, under any circumstance, create any implication or inference that the information contained herein is correct or complete. Statements made in this CS or by the Company in connection herewith that are not historical facts and that reflect the current view of the Company about future events and financial performance are hereby identified as &ldquo;forward looking statements.&rdquo; Some of these statements can be identified by terms and phrases such as &ldquo;anticipate,&rdquo; &ldquo;believe,&rdquo; &ldquo;intend,&rdquo; &ldquo;estimate,&rdquo; &ldquo;expect,&rdquo; &ldquo;continue,&rdquo; &ldquo;could,&rdquo; &ldquo;should,&rdquo; &ldquo;may,&rdquo; &ldquo;plan,&rdquo; &ldquo;project,&rdquo;, &ldquo;predict,&rdquo; and similar expressions and include references and assumptions that the Company currently believes are reasonable and relate to the future prospects, developments and business strategies. The Company cautions that such &ldquo;forward looking statements,&rdquo; including without limitation, those relating to the Company&rsquo;s future business prospects, market reach, revenue, liquidity, capital needs and income, wherever they occur in this CS or any other communications or materials provided by the Company, are necessarily estimates and involve a number of risks and uncertainties that could cause actual results to differ materially from those suggested by the &ldquo;forward looking statements.&rdquo; Factors that could cause actual results to differ materially from those expressed or implied in such forward-looking statements include, but are not limited to, the risks associate with any failure by the Company to diversify its customer base, to continue to make advancements in Company technology that keep pace with other industry advancements, to provide innovative services and products that are appealing to customers, or the departure of any key employees or officers of the Company critical to its continued technological advancement and implementation of business plan. The Company disclaims any intent or obligation to update &ldquo;forward looking statements&rdquo; made in this CS to reflect changed assumptions, the occurrence of unanticipated events, or changes to future operating results over time. The recipient expressly understands and agrees that any estimates, projections and assumptions are uncertain and accordingly, no representation can be made or is made as to their attainability. Only those representations and warranties made in a definitive, written purchase agreement, and subject to such limitations and restrictions as may be specified therein, shall have any legal effect.</p>
    <p>This CS is not a prospectus and does not constitute an offer or the solicitation of an offer for the sale or purchase of any assets or securities of the Company. Neither this CS nor the information contained herein shall form the basis of, or constitute, any contract or binding offer.</p>
  </div>
</div>

<script>
(function(){
  var pipe=document.getElementById('solScroll');
  var copies=document.querySelectorAll('#psCopies .ps-copy');
  var nodes=document.querySelectorAll('#psRail .ps-node');
  var scenes=document.querySelectorAll('#psScenes .ps-scene');
  var railFill=document.getElementById('psRailFill');
  var STAGES=copies.length;
  function setStage(i){
    copies.forEach(function(c,idx){c.classList.toggle('on',idx===i)});
    nodes.forEach(function(n,idx){n.classList.toggle('on',idx===i)});
    scenes.forEach(function(s,idx){s.classList.toggle('on',idx===i)});
  }
  if(pipe&&window.matchMedia('(min-width:861px)').matches){
    var ticking=false;
    function onScroll(){
      if(ticking)return; ticking=true;
      requestAnimationFrame(function(){
        ticking=false;
        var r=pipe.getBoundingClientRect();
        var total=r.height-window.innerHeight;
        var progress=total>0 ? Math.min(1,Math.max(0,-r.top/total)) : 0;
        if(railFill) railFill.style.height=(progress*100)+'%';
        var idx=Math.min(STAGES-1,Math.floor(progress*STAGES));
        setStage(idx);
      });
    }
    window.addEventListener('scroll',onScroll,{passive:true});
    onScroll();
  }
  var tl=document.getElementById('whyNowTl');
  if(tl&&'IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){tl.classList.add('in');io.disconnect()}})},{threshold:.35});
    io.observe(tl);
  } else if(tl){ tl.classList.add('in'); }
})();
</script>
</body>
</html>`;

export const UPDATE_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Cinebody: investor update</title>
<meta name="description" content="Cinebody: the raise that gets us to the exit. A quick update for the investors who backed this before the market understood it.">
<meta name="theme-color" content="#0a0a0a">
<meta name="robots" content="noindex">
<style>*{margin:0;padding:0}html{-webkit-text-size-adjust:100%}</style>
<style>
:root{
  --bg:#0a0a0a; --ink:#f5f7f9; --ink-2:rgba(255,255,255,0.80); --ink-3:rgba(255,255,255,0.54);
  --pink:#eb008b; --cyan:#00bcf1; --yellow:#ffec03; --ghost:rgba(255,255,255,0.05);
  --card:rgba(22,23,28,0.62); --card-2:rgba(32,33,40,0.5); --line:rgba(255,255,255,0.10);
  --glass-blur:blur(20px); --shadow:0 10px 34px rgba(0,0,0,0.34);
  --brand:linear-gradient(135deg,#00bcf1 0%,#00bcf1 28%,#ffec03 36%,#ffec03 64%,#eb008b 72%,#eb008b 100%);
  --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif;
  --mono:ui-monospace,"SF Mono",SFMono-Regular,Menlo,"Roboto Mono",monospace;
  color-scheme:dark;
}
*{box-sizing:border-box;margin:0;padding:0}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
body{background:#08090d;color:var(--ink);font-family:var(--sans);font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:clip;position:relative}
@font-face{font-family:'Plus Jakarta Sans';font-style:normal;font-weight:200 800;font-display:swap;src:url('/fonts/plus-jakarta-var.woff2') format('woff2')}
body{font-family:'Plus Jakarta Sans',var(--sans)}
a{color:var(--cyan);text-decoration:none;border-bottom:1px solid color-mix(in srgb,var(--cyan) 32%,transparent)}
a:hover{border-bottom-color:var(--cyan)}

.hero-aurora{position:absolute;top:0;left:0;right:0;height:680px;z-index:0;pointer-events:none;overflow:hidden;
  background:linear-gradient(180deg,#0a0a0a 0%,#041a24 55%,#08090d 100%)}
.hero-aurora::before{content:'';position:absolute;top:-30%;right:-25%;width:1100px;height:1100px;background:var(--cyan);border-radius:50%;filter:blur(200px);opacity:.14;animation:hero-glow 18s ease-in-out infinite alternate}
.hero-aurora::after{content:'';position:absolute;bottom:-30%;left:-20%;width:900px;height:900px;background:var(--pink);border-radius:50%;filter:blur(200px);opacity:.08;animation:hero-glow 22s ease-in-out infinite alternate-reverse}
@keyframes hero-glow{0%{transform:translate(0,0)}100%{transform:translate(30px,-20px)}}
@media(prefers-reduced-motion:reduce){.hero-aurora::before,.hero-aurora::after{animation:none}}

.wrap{position:relative;z-index:1;max-width:68rem;margin:0 auto;padding:2.6rem 1.75rem 3rem}
.brandbar{display:flex;width:fit-content;margin:0 0 2.2rem}
.brandbar img{height:24px;width:auto;display:block}
.ppill{display:flex;width:fit-content;align-items:center;gap:7px;font-family:var(--mono);font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#fff;
  background:#151518;border:1px solid transparent;border-radius:999px;padding:.4rem .85rem;margin:0 0 1.4rem;
  background-image:linear-gradient(#151518,#151518),linear-gradient(120deg,var(--cyan),var(--yellow),var(--pink),var(--cyan));
  background-origin:border-box;background-clip:padding-box,border-box}
.ppill::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--cyan);box-shadow:0 0 6px rgba(0,188,241,.7)}
.conf{display:inline-block;margin-top:1rem;font-size:.66rem;font-weight:700;letter-spacing:.08em;color:#ff8fc0;
  border:1px solid rgba(235,0,139,0.4);padding:.24rem .6rem;border-radius:4px}
.act-light .conf{color:#a3006b;border-color:rgba(194,3,111,.35)}
h1{font-weight:800;letter-spacing:-0.03em;line-height:1.12;font-size:clamp(2.1rem,4.6vw,3.2rem);margin:0 0 1.1rem;text-wrap:balance;
  background:linear-gradient(180deg,#fff 0%,#cdeefb 55%,#8fdcf7 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.dek{font-size:1.1rem;color:var(--ink-2);margin:0 0 1.6rem;text-wrap:balance;max-width:34rem}
h2{font-weight:750;letter-spacing:-0.02em;font-size:clamp(1.5rem,2.8vw,1.85rem);line-height:1.22;margin:0 0 1rem;max-width:38rem;text-wrap:balance;color:var(--ink)}
.sec{margin-top:3.6rem;padding:0 1.75rem}
.sec .wrap{padding:0;max-width:60rem;margin:0 auto}
.eyebrow{font-family:var(--mono);font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#fff;margin:0 0 .7rem}
.act-light .eyebrow{color:#0c0f14}
p{margin:0 0 1rem;color:var(--ink-2)}
.lead{font-size:1.03rem;color:var(--ink-2);max-width:44ch}
strong{font-weight:700;color:var(--ink)}
.video-embed{position:relative;padding-top:56.25%;height:0;border-radius:16px;overflow:hidden;background:#000;box-shadow:0 20px 60px rgba(0,0,0,.4)}
.video-embed iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.act-light .video-embed{box-shadow:0 20px 60px rgba(15,25,40,.18)}
.filmrow{display:grid;grid-template-columns:minmax(0,1fr) 465px;gap:clamp(24px,3.5vw,48px);align-items:center}
.filmrow h2,.filmrow .lead{max-width:none}
@media(max-width:980px){.filmrow{display:block}.filmrow .video-embed{margin-top:1.8rem}}

.hero-grid{display:grid;grid-template-columns:minmax(0,1fr) 465px;gap:clamp(24px,3.5vw,48px);align-items:center}
@media(max-width:980px){.hero-grid{display:block}}
.hero-scroller{display:none}
@media(min-width:980px){
  .hero-scroller{display:flex;gap:10px;height:600px;overflow:hidden;justify-content:center;
    -webkit-mask-image:linear-gradient(to bottom,transparent 0%,black 6%,black 94%,transparent 100%);
    mask-image:linear-gradient(to bottom,transparent 0%,black 6%,black 94%,transparent 100%)}
}
.hero-scroller-col{opacity:.75;filter:saturate(.92);display:flex;flex-direction:column;gap:10px;will-change:transform;flex-shrink:0;width:145px}
.scroll-up .hero-scroller-col{animation:scrollUp 40s linear infinite}
.scroll-down .hero-scroller-col{animation:scrollDown 45s linear infinite}
@keyframes scrollUp{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
@keyframes scrollDown{0%{transform:translateY(-50%)}100%{transform:translateY(0)}}
@media(prefers-reduced-motion:reduce){.hero-scroller-col{animation:none!important}}
.scr-card{position:relative;flex-shrink:0;width:145px;aspect-ratio:9/16;border-radius:12px;overflow:hidden;
  background:linear-gradient(135deg,#1a2a3a 0%,#0e1820 100%);border:1px solid rgba(255,255,255,.08)}
.scr-card iframe{position:absolute;inset:0;width:100%;height:100%;border:0;pointer-events:none}
.scr-label{position:absolute;left:8px;bottom:8px;z-index:2;font-family:var(--mono);font-size:.58rem;color:#fff;text-shadow:0 1px 4px rgba(0,0,0,.8)}

.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:.7rem;margin-top:1.8rem}
@media(max-width:760px){.stats{grid-template-columns:repeat(2,1fr)}}
.stat{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:1.05rem 1rem;backdrop-filter:var(--glass-blur)}
.stat.ph{border-style:dashed;opacity:.7}
.act-light .stat{background:#fff;border-color:rgba(12,20,30,.10);box-shadow:0 10px 28px rgba(15,25,40,.08)}
.stat .n{font-family:var(--mono);font-size:1.5rem;font-weight:600;letter-spacing:-0.02em;color:var(--ink);font-variant-numeric:tabular-nums;line-height:1}
.act-light .stat .n{color:#0c0f14}
.stat .n.pink{color:var(--pink)}.stat .n.yellow{color:var(--yellow)}.stat .n.cyan{color:var(--cyan)}
.stat .l{font-size:.68rem;letter-spacing:.05em;text-transform:uppercase;color:var(--ink-3);margin-top:.4rem;line-height:1.35}

.act-light{position:relative;z-index:1;isolation:isolate;padding:6rem 0 3.4rem;margin-top:4rem}
.act-light::before{content:'';position:absolute;top:0;bottom:0;left:calc(50% - 50vw);width:100vw;z-index:-2;background:#f7f8fa;
  -webkit-mask-image:radial-gradient(65vw 70px at 50% -20px,transparent 98.5%,#000 100%);
  mask-image:radial-gradient(65vw 70px at 50% -20px,transparent 98.5%,#000 100%)}
.curve-backdrop{position:absolute;top:-2px;left:calc(50% - 50vw);width:100vw;height:80px;background:#08090d;z-index:-3;pointer-events:none}
.act-light{--ink:#12151b;--ink-2:rgba(18,21,27,.76);--ink-3:rgba(18,21,27,.52);--card:#fff;--card-2:#f2f4f8;--line:rgba(12,20,30,.12);color:var(--ink-2)}
.act-light h2,.act-light h3,.act-light strong,.act-light b{color:#111}

.quotes{display:flex;flex-wrap:wrap;justify-content:center;gap:.9rem;margin-top:1.4rem}
.quote{flex:0 1 calc(33.333% - .6rem);min-width:15rem}
@media(max-width:820px){.quote{flex-basis:calc(50% - .45rem)}}
@media(max-width:560px){.quote{flex-basis:100%}}
.quote{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:1.1rem 1.2rem;display:flex;flex-direction:column;gap:.7rem;
  border-top:3px solid var(--yellow)}
.quote p{font-size:.94rem;color:var(--ink);line-height:1.48;margin:0;font-style:italic}
.act-light .quote p{color:#222}
.qwho{display:flex;align-items:center;gap:.6rem;margin-top:auto}
.qwho .who{font-size:.78rem;color:var(--ink-3);line-height:1.35}
.qwho .who b{color:var(--ink);font-weight:650;display:block;font-size:.86rem}
.act-light .qwho .who b{color:#111}

.mono{flex:none;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;
  font-family:var(--sans);font-weight:800;font-size:.85rem;color:#04121a;border:1px solid rgba(255,255,255,.2)}
.pface{flex:none;width:40px;height:40px;border-radius:50%;object-fit:cover;border:1px solid var(--line)}
.pface.lg{width:56px;height:56px}
.mono.c1{background:linear-gradient(135deg,#00bcf1,#0098cc)}
.mono.c2{background:linear-gradient(135deg,#ffec03,#e0c800)}
.mono.c3{background:linear-gradient(135deg,#eb008b,#b8006c);color:#fff}
.mono.c4{background:linear-gradient(135deg,#8b9cff,#5f6fd8);color:#fff}
.mono.c5{background:linear-gradient(135deg,#7ff0a8,#2fb86a);color:#04250f}
.mono.lg{width:56px;height:56px;font-size:1.05rem}

.numlist{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1.4rem}
@media(max-width:760px){.numlist{grid-template-columns:1fr}}
.numitem{background:var(--card-2);border:1px solid var(--line);border-radius:12px;padding:1.1rem 1.15rem}
.numitem .no{font-family:var(--mono);font-size:.85rem;color:var(--cyan);font-weight:700;display:block;margin-bottom:.5rem}
.numitem h3{font-size:.98rem;font-weight:700;color:var(--ink);margin:0 0 .4rem;line-height:1.3}
.numitem p{font-size:.86rem;margin:0;line-height:1.5}

/* ---- solution: real sticky-scroll pipeline (pulled from cinebody-investor-deck) ----
   left: ghost numeral + eyebrow + h2 + lead, crossfading per stage.
   center: a dotted progress rail.
   right: the stage's real UI mockup, crossfading in sync. ---- */
.pipe-scroll{position:relative}
.pipe-sticky{position:sticky;top:calc(50vh - 300px);height:600px;display:flex;align-items:center}
@media(max-width:860px){.pipe-sticky{position:static;height:auto;display:block}}
.ps-grid{display:grid;grid-template-columns:minmax(0,.56fr) 40px minmax(0,1.44fr);gap:clamp(16px,2.5vw,36px);align-items:center;width:100%}
@media(max-width:860px){.ps-grid{display:block}}
.ps-copies{position:relative;min-height:300px}
@media(max-width:860px){.ps-copies{min-height:0;margin-bottom:1.6rem}}
.ps-copy{position:absolute;top:50%;left:0;right:0;transform:translateY(calc(-50% + 16px));opacity:0;transition:opacity .45s ease,transform .5s cubic-bezier(.2,.7,.2,1);pointer-events:none}
.ps-copy.on{opacity:1;transform:translateY(-50%);pointer-events:auto}
@media(max-width:860px){.ps-copy{position:static;opacity:1;transform:none;pointer-events:auto;display:none}.ps-copy.on{display:block}}
.pipe-ghost{position:absolute;top:-1rem;left:-0.04em;font-size:clamp(3.6rem,7vw,5.5rem);font-weight:800;line-height:1;letter-spacing:-.04em;color:rgba(0,188,241,.13);pointer-events:none;z-index:-1;user-select:none}
.ps-copy.c1 .pipe-ghost{color:rgba(235,0,139,.12)}
.ps-copy.c2 .pipe-ghost{color:rgba(255,236,3,.09)}
.ps-copy h2{margin-top:0}
.ps-rail{position:relative;height:340px;width:40px;justify-self:center}
@media(max-width:860px){.ps-rail{display:none}}
.ps-rail-line{position:absolute;left:50%;top:0;bottom:0;width:2px;margin-left:-1px;background:rgba(0,188,241,.14);border-radius:2px;overflow:hidden}
.ps-rail-fill{width:100%;height:0;background:linear-gradient(180deg,var(--cyan),rgba(0,188,241,.4));border-radius:2px;transition:height .3s ease}
.ps-node{position:absolute;left:50%;width:11px;height:11px;margin-left:-6px;border-radius:50%;background:#08131a;border:2px solid rgba(0,188,241,.4);transition:box-shadow .3s ease,border-color .3s ease}
.ps-node.on{border-color:var(--cyan);box-shadow:0 0 14px rgba(0,188,241,.5),0 0 0 5px rgba(0,188,241,.1)}
.ps-node.c1.on{border-color:var(--pink);box-shadow:0 0 14px rgba(235,0,139,.5),0 0 0 5px rgba(235,0,139,.1)}
.ps-node.c2.on{border-color:var(--yellow);box-shadow:0 0 14px rgba(255,236,3,.4),0 0 0 5px rgba(255,236,3,.08)}
.ps-scenes{position:relative;height:600px}
@media(max-width:860px){.ps-scenes{height:auto}}
.ps-scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;transform:translateY(16px);transition:opacity .45s ease,transform .5s cubic-bezier(.2,.7,.2,1);pointer-events:none}
.ps-scene.on{opacity:1;transform:none;pointer-events:auto}
@media(max-width:860px){.ps-scene{position:static;opacity:1;transform:none;pointer-events:auto;display:none}.ps-scene.on{display:flex}}
.ps-scene .d-cap{font-family:var(--mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);text-align:center;margin-top:1rem}
.ps-scene-body{width:100%}
/* device frame */
.d-phone{position:relative;width:100%;max-width:210px;aspect-ratio:9/19.3;margin:0 auto;
  border-radius:30px;padding:7px;background:linear-gradient(160deg,#26282e,#0d0e12);
  box-shadow:0 24px 56px rgba(0,0,0,.55),inset 0 1px 0 rgba(255,255,255,.12),0 0 0 1px rgba(255,255,255,.05)}
.d-screen{position:relative;width:100%;height:100%;border-radius:24px;overflow:hidden;background:#05070b}
.d-notch{position:absolute;top:7px;left:50%;transform:translateX(-50%);width:60px;height:15px;border-radius:10px;background:#000;z-index:6}
.d-vid{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border:0;pointer-events:none}
.d-scrim{position:absolute;inset:0;z-index:2;background:linear-gradient(180deg,rgba(0,0,0,.32),transparent 22%,transparent 60%,rgba(0,0,0,.55))}
.d-two{display:grid;gap:.7rem;grid-template-columns:repeat(2,1fr);max-width:440px;margin:0 auto}
/* real director/interview overlay UI, pulled verbatim from the deck's own capture screen */
.a-ui{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;padding:26px 9px 12px;font-family:var(--sans)}
.a-top{display:flex;align-items:center;gap:5px}
.a-back{color:#fff;font-size:10px;font-weight:500;white-space:nowrap;opacity:.95}
.a-shot{flex:1;min-width:0;display:flex;align-items:center;gap:5px;background:rgba(16,18,23,.82);border-radius:16px;padding:5px 9px}
.a-shot .n{color:rgba(255,255,255,.5);font-size:9px;font-weight:600}
.a-shot .t{color:#fff;font-size:9.5px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1}
.a-next{background:rgba(16,18,23,.82);border-radius:16px;padding:5px 9px;color:#fff;font-size:10px;font-weight:600;white-space:nowrap}
.a-sp{flex:1}
.a-note{background:rgba(14,16,21,.86);border-radius:13px;padding:9px 11px;display:flex;gap:8px;align-items:flex-start}
.a-note .bot{flex:none;width:18px;height:18px;border-radius:6px;background:rgba(0,188,241,.16);display:grid;place-items:center}
.a-note .bot svg{width:11px;height:11px;stroke:#00bcf1;fill:none;stroke-width:1.7}
.a-note .lab{font-size:7px;letter-spacing:.14em;font-weight:800;color:#00bcf1;margin:0 0 2px}
.a-note .msg{font-size:10.5px;line-height:1.32;color:#fff;margin:0}
.a-meters{display:flex;gap:4px;margin-top:8px;flex-wrap:wrap}
.a-meter{flex:1;min-width:40%;display:flex;align-items:center;justify-content:center;gap:3px;font-size:8px;font-weight:700;padding:5px 0;border-radius:16px;border:1px solid rgba(92,224,143,.55);color:#7fe6a3;background:rgba(16,26,20,.5)}
.a-meter.bad{border-color:rgba(255,95,95,.65);color:#ff8080;background:rgba(30,16,16,.5)}
.a-ctrls{display:flex;align-items:center;justify-content:center;gap:26px;margin-top:10px}
.a-side{width:30px;height:30px;border-radius:50%;background:rgba(16,18,23,.66);display:grid;place-items:center;color:#fff;font-size:12px}
.a-shutter{width:44px;height:44px;border-radius:50%;background:#eb008b;box-shadow:0 0 0 3px #fff,0 0 0 5px rgba(0,0,0,.28)}
/* interview question overlay, real video behind it */
.d-qcard{position:absolute;left:9px;right:9px;top:26px;z-index:3;background:rgba(235,0,139,.22);backdrop-filter:blur(6px);border:1px solid rgba(235,0,139,.5);border-radius:11px;padding:9px 10px}
.d-qcard .lab{font-size:7px;font-weight:800;letter-spacing:.14em;color:#ff5cc0;margin:0 0 3px;display:flex;align-items:center;gap:4px}
.d-qcard .lab::before{content:'';width:5px;height:5px;border-radius:50%;background:#ff2ba8}
.d-qcard .txt{font-size:10.5px;font-weight:650;line-height:1.3;color:#fff;margin:0}
/* brief -> shot list */
.d-brief{background:rgba(255,255,255,.02);border:1px solid var(--line);border-radius:14px;padding:1.1rem 1.2rem}
.d-brow{display:grid;grid-template-columns:5rem 1fr;gap:.4rem .9rem;align-items:baseline;padding:.6rem 0;border-bottom:1px solid var(--line)}
.d-brow:last-child{border-bottom:0}
.d-brow .k{font-family:var(--mono);font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3)}
.d-brow .val{font-size:.86rem;color:#fff}
.d-tone{display:flex;gap:.35rem;flex-wrap:wrap}
.d-tone span{font-size:.68rem;font-weight:600;color:var(--cyan);border:1px solid color-mix(in srgb,var(--cyan) 45%,transparent);border-radius:99px;padding:.15rem .5rem}
.d-panelhead{display:flex;align-items:center;gap:.6rem;font-family:var(--mono);font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);margin:1.1rem 0 .7rem}
.d-gen{margin-left:auto;color:var(--cyan);display:flex;align-items:center;gap:.35rem}
.d-gen::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--cyan);box-shadow:0 0 8px var(--cyan)}
.d-shots{display:flex;flex-direction:column;gap:.5rem}
.d-shot{background:rgba(255,255,255,.02);border:1px solid var(--line);border-radius:12px;padding:.7rem .85rem}
.d-shot .top{display:flex;align-items:baseline;gap:.5rem;margin-bottom:.3rem}
.d-shot .num{font-family:var(--mono);font-size:.72rem;color:var(--cyan);font-weight:700}
.d-shot .name{font-size:.86rem;font-weight:650;color:#fff}
.d-shot .meta{margin-left:auto;display:flex;gap:.3rem;flex-wrap:wrap}
.d-shot .meta span{font-family:var(--mono);font-size:.54rem;color:var(--ink-3);border:1px solid var(--line);border-radius:5px;padding:.1rem .35rem;white-space:nowrap}
.d-dots{display:flex;gap:4px;flex:none}
.d-dots i{width:7px;height:7px;border-radius:50%;display:block}
.d-shot .prompt{font-size:.76rem;line-height:1.42;color:var(--ink-2);margin:0}
.d-split{display:grid;gap:1.2rem;grid-template-columns:1fr;align-items:center}
@media(min-width:640px){.d-split.narrow{grid-template-columns:5fr 7fr}}
/* real score card + real scored clip preview */
.d-clip-ph{position:relative;width:100%;border-radius:16px;overflow:hidden;aspect-ratio:9/16;max-width:220px;margin:0 auto;border:1px solid var(--line);box-shadow:var(--shadow)}
.a-badge{position:absolute;top:10px;left:10px;z-index:4;font-family:var(--mono);font-size:.58rem;font-weight:700;letter-spacing:.1em;background:rgba(255,236,3,.95);color:#241a00;border-radius:99px;padding:.2rem .55rem;display:flex;align-items:center;gap:.3rem}
.a-badge::before{content:'';width:5px;height:5px;border-radius:50%;background:#241a00}
.a-cmeta{position:absolute;bottom:10px;left:10px;z-index:4;font-family:var(--mono);font-size:.55rem;letter-spacing:.06em;color:#fff;background:rgba(10,12,16,.72);border-radius:8px;padding:.28rem .5rem}
.a-score{background:rgba(255,255,255,.02);border:1px solid var(--line);border-radius:16px;padding:1.2rem 1.3rem}
.a-stop{display:flex;gap:1rem;align-items:flex-start;margin-bottom:1rem}
.a-rev{flex:none;text-align:left}
.a-rl{font-family:var(--mono);font-size:.58rem;letter-spacing:.16em;color:var(--ink-3);display:block;margin-bottom:.2rem}
.a-big{font-size:2.4rem;font-weight:800;line-height:.85;color:var(--yellow);font-variant-numeric:tabular-nums}
.a-big i{font-size:.85rem;color:var(--ink-3);font-style:normal;font-weight:600}
.a-gd{font-family:var(--mono);font-size:.58rem;letter-spacing:.18em;color:var(--yellow);font-weight:700;display:block;margin-top:.3rem}
.a-rtext{font-size:.82rem;line-height:1.46;color:var(--ink-2);margin:0}
.d-dims{display:flex;flex-direction:column;gap:.55rem;margin-top:1rem}
.d-dim{display:grid;grid-template-columns:4.6rem 1fr 2rem;gap:.7rem;align-items:center;font-family:var(--mono);font-size:.58rem;letter-spacing:.08em;color:var(--ink-3);font-weight:700}
.d-dim b{color:#fff;text-align:right;font-size:.74rem;font-variant-numeric:tabular-nums}
.d-track{height:5px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden}
.d-fill{height:100%;border-radius:99px}
.d-fill.cyan{background:var(--cyan)}.d-fill.warn{background:var(--yellow)}
.a-tips{border-top:1px solid var(--line);padding-top:.85rem;margin-top:1rem}
.a-tl{font-family:var(--mono);font-size:.56rem;letter-spacing:.16em;color:var(--ink-3);margin:0 0 .5rem}
.a-tip{display:flex;gap:.5rem;font-size:.78rem;line-height:1.4;color:var(--ink-2);margin-bottom:.4rem}
.a-tip::before{content:'';flex:none;width:6px;height:6px;border-radius:50%;background:var(--cyan);margin-top:.38rem}
/* edit -> the real product */
.d-editorshot{border-radius:16px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--shadow);max-width:480px;margin:0 auto}
.d-editorshot img{display:block;width:100%}

.tl-h{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;margin-top:2.2rem;position:relative}
.tl-h.tl-4{grid-template-columns:repeat(4,1fr)}
@media(max-width:760px){.tl-h{grid-template-columns:1fr!important;gap:1.6rem}}
.tl-h::before{content:'';position:absolute;top:9px;left:0;right:0;height:2px;background:var(--line);z-index:0}
@media(max-width:760px){.tl-h::before{top:0;bottom:0;left:9px;right:auto;width:2px;height:auto}}
.tl-h .tl-line{position:absolute;top:9px;left:0;height:2px;background:var(--cyan);width:0;transition:width 1.4s cubic-bezier(.2,.7,.2,1);z-index:1}
.tl-h.in .tl-line{width:100%}
@media(max-width:760px){.tl-h .tl-line{top:0;left:9px;width:2px;height:0;transition:height 1.4s cubic-bezier(.2,.7,.2,1)}.tl-h.in .tl-line{height:100%;width:2px}}
.tlh-item{position:relative;padding-top:1.8rem;opacity:0;transform:translateY(8px);transition:opacity .5s ease,transform .5s ease}
.tl-h.in .tlh-item{opacity:1;transform:none}
.tl-h.in .tlh-item:nth-child(2){transition-delay:.2s}.tl-h.in .tlh-item:nth-child(3){transition-delay:.4s}.tl-h.in .tlh-item:nth-child(4){transition-delay:.6s}
@media(max-width:760px){.tlh-item{padding-top:0;padding-left:1.8rem}}
.tlh-item::before{content:'';position:absolute;top:5px;left:0;width:10px;height:10px;border-radius:50%;background:var(--cyan);box-shadow:0 0 0 4px #08090d;z-index:2}
@media(max-width:760px){.tlh-item::before{top:2px;left:0}}
.tlh-item.tbd::before{background:var(--yellow)}
.tlh-item .yr{font-family:var(--mono);font-size:.74rem;color:var(--cyan);font-weight:700;letter-spacing:.04em;display:block;margin-bottom:.4rem}
.tlh-item.tbd .yr{color:var(--yellow)}
.tlh-item p{font-size:.9rem;margin:0;color:var(--ink-2);line-height:1.5}

.thennow{display:grid;grid-template-columns:1fr 1fr;gap:.9rem;margin-top:1.4rem}
@media(max-width:700px){.thennow{grid-template-columns:1fr}}
.tnrow{position:relative;overflow:hidden;background:var(--card-2);border:1px solid var(--line);border-radius:12px;padding:1.1rem 1.2rem;
  transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
.tnrow::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--brand);transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.2,.7,.2,1)}
.tnrow:hover{transform:translateY(-3px);box-shadow:0 14px 32px rgba(0,0,0,.28);border-color:color-mix(in srgb,var(--cyan) 35%,var(--line))}
.tnrow:hover::before{transform:scaleX(1)}
.tnrow .lab{font-family:var(--mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--cyan);font-weight:700;margin-bottom:.6rem}
.tnpair{display:grid;grid-template-columns:1fr;gap:.7rem}
.tnpair .then,.tnpair .now{font-size:.82rem;line-height:1.48}
.tnpair .then{color:var(--ink-3)}.tnpair .now{color:var(--ink-2)}
.act-light .tnpair .then{color:var(--ink-3)}.act-light .tnpair .now{color:#222}
.tnpair .tag{font-family:var(--mono);font-size:.58rem;letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:.3rem}
.tnpair .then .tag{color:var(--ink-3)}.tnpair .now .tag{color:var(--cyan)}

.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem;margin-top:1.4rem}
@media(max-width:760px){.pillars{grid-template-columns:1fr}}
.pillar{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:1.15rem 1.15rem}
.pillar h3{font-size:.94rem;font-weight:700;color:var(--ink);margin:0 0 .4rem}
.pillar p{font-size:.83rem;line-height:1.48;margin:0;color:var(--ink-3)}

.donutwrap{display:grid;grid-template-columns:1fr;justify-items:center;gap:2.2rem;max-width:44rem;margin:1.8rem auto 0;text-align:center}
.donut-box{position:relative;width:100%;max-width:230px;aspect-ratio:1;filter:drop-shadow(0 0 40px rgba(0,188,241,.22)) drop-shadow(0 8px 44px rgba(235,0,139,.16))}
.donut-ring{position:absolute;inset:0;border-radius:50%;animation:moatspin 36s linear infinite;
  background:conic-gradient(from -90deg,#00bcf1 0%,#00bcf1 26%,#ffec03 40%,#ffec03 60%,#eb008b 74%,#eb008b 96%,#00bcf1 100%);
  -webkit-mask:radial-gradient(farthest-side,transparent 0 60%,#000 62% 86%,transparent 88%);
  mask:radial-gradient(farthest-side,transparent 0 60%,#000 62% 86%,transparent 88%)}
@keyframes moatspin{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){.donut-ring{animation:none}}
.donut-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;pointer-events:none}
.donut-center b{font-family:var(--mono);font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3);font-weight:400}
.donut-center span{font-family:var(--sans);font-weight:800;font-size:1.15rem;color:var(--ink);letter-spacing:-0.01em}
.act-light .donut-center span{color:#111}
.rlegend{display:grid;grid-template-columns:repeat(3,1fr);gap:1.6rem;width:100%;text-align:left}
@media(max-width:640px){.rlegend{grid-template-columns:1fr}}
.rlegend .ri{display:flex;gap:.6rem;align-items:flex-start}
.rlegend .rdot{width:12px;height:12px;border-radius:4px;flex:none;margin-top:.25rem}
.rlegend .rt b{display:block;font-family:var(--sans);font-size:.92rem;color:var(--ink);font-weight:650}
.act-light .rlegend .rt b{color:#111}
.rlegend .rt span{font-family:var(--sans);font-size:.83rem;color:var(--ink-2);line-height:1.42}

.logos{width:100vw;margin-left:calc(50% - 50vw);padding:2.2rem 0 0;overflow:hidden;position:relative;margin-top:1.8rem}
.logos-track{display:flex;align-items:center;gap:52px;animation:logos-scroll 55s linear infinite;width:max-content}
.logos-track:hover{animation-play-state:paused}
@keyframes logos-scroll{to{transform:translateX(-50%)}}
@media(prefers-reduced-motion:reduce){.logos-track{animation:none}}
.logos-track img{height:24px;width:auto;max-width:130px;object-fit:contain;opacity:.55;transition:opacity .3s ease;flex-shrink:0;filter:brightness(0) invert(1)}
.act-light .logos-track img{filter:brightness(0);opacity:.6}
.logos-track img:hover{opacity:.9}
.logos-track img[data-logo=siemens]{height:16px;max-width:100px}
.logos-track img[data-logo=webmd]{height:36px;max-width:150px}
.logos-track img[data-logo=roku]{height:20px;max-width:90px}
.logos-track img[data-logo=boeing]{height:24px;max-width:120px}
.logos-track img[data-logo=experian]{height:26px;max-width:130px}
.logos-track img[data-logo=dell]{height:34px;max-width:90px}
.logos-track img[data-logo=spglobal]{height:22px;max-width:120px}
.logos-track img[data-logo=royalcaribbean]{height:28px;max-width:140px}
.logos-track img[data-logo=altra]{height:22px;max-width:95px}

/* ---- competitive: box grid with a key up top, real six-stage coverage data ---- */
.cg-key{display:flex;flex-wrap:wrap;gap:1.1rem;margin:1.4rem 0 1.5rem;padding:.85rem 1.05rem;background:var(--card-2);border:1px solid var(--line);border-radius:10px}
.cg-key .k{display:flex;align-items:center;gap:.5rem;font-size:.78rem;color:var(--ink-2)}
.cg-sw{width:15px;height:15px;border-radius:4px;flex:none}
.cg-sw.on{background:var(--cyan)}
.cg-sw.comp{background:var(--pink)}
.cg-sw.part{background:color-mix(in srgb,var(--pink) 18%,transparent);border:1.5px solid var(--pink)}
.cg-sw.dev{background:color-mix(in srgb,var(--yellow) 16%,transparent);border:1.5px dashed var(--yellow)}
.cg-sw.off{background:var(--ghost);border:1px solid var(--line)}
.compgrid{overflow-x:auto;-webkit-overflow-scrolling:touch}
.cg-table{display:grid;grid-template-columns:8.5rem repeat(6,1fr);gap:5px;min-width:36rem;align-items:center}
.cg-row{display:contents}
.cg-head{font-family:var(--mono);font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3);text-align:center;padding:0 0 .5rem}
.cg-head:first-child{text-align:left}
.cg-name{font-size:.84rem;color:var(--ink-2);padding:.3rem .6rem .3rem 0}
.cg-name.cine{color:var(--ink);font-weight:700}
.cg-cell{aspect-ratio:1;border-radius:6px;justify-self:center;width:100%;max-width:2.3rem}
.cg-cell.on{background:var(--cyan)}
.cg-cell.comp{background:var(--pink)}
.cg-cell.part{background:color-mix(in srgb,var(--pink) 16%,transparent);border:1.5px solid var(--pink)}
.cg-cell.dev{background:color-mix(in srgb,var(--yellow) 14%,transparent);border:1.5px dashed var(--yellow)}
.cg-cell.off{background:var(--ghost);border:1px solid var(--line)}
.act-light .cg-cell.off{background:rgba(12,20,30,.05)}

.risks{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin-top:1.4rem}
@media(max-width:700px){.risks{grid-template-columns:1fr}}
.riskcard{background:var(--card-2);border:1px solid var(--line);border-radius:12px;padding:1.05rem 1.2rem}
.riskcard .rk{font-family:var(--mono);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--pink);font-weight:700;margin-bottom:.35rem}
.riskcard .rq{font-size:.92rem;color:var(--ink);font-weight:650;margin-bottom:.45rem}
.act-light .riskcard{background:#fff;border-color:rgba(12,20,30,.10)}
.act-light .riskcard .rq{color:#111}
.riskcard .ra{font-size:.85rem;color:var(--ink-3);line-height:1.5}

.team{display:flex;flex-direction:column;gap:.7rem;margin-top:1.4rem}
.tcard{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:1.1rem 1.25rem;display:flex;gap:1rem;align-items:flex-start}
.tcard .tbody{flex:1;min-width:0}
.tcard h3{font-size:.98rem;font-weight:700;color:var(--ink);margin:0 0 .1rem}
.tcard .role{font-family:var(--mono);font-size:.64rem;letter-spacing:.06em;text-transform:uppercase;color:var(--cyan);margin-bottom:.5rem}
.tcard p{font-size:.84rem;line-height:1.5;margin:0;color:var(--ink-3)}
.advisors{display:flex;flex-wrap:wrap;gap:1rem;margin-top:1rem}
.advcard{background:var(--card-2);border:1px solid var(--line);border-radius:12px;padding:.9rem 1.1rem;display:flex;gap:.8rem;align-items:center;flex:1 1 260px}
.advcard b{display:block;font-size:.86rem;color:var(--ink)}
.advcard span{font-size:.76rem;color:var(--ink-3);line-height:1.4}
.photo-note{margin-top:1rem;font-size:.72rem;color:var(--ink-3);font-style:italic}
.roadmap-h{font-size:1.15rem;font-weight:700;letter-spacing:-0.01em;margin-top:2.6rem}

.raisebox{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:1.7rem 1.7rem;margin-top:1.4rem}
.raisebox .lead{color:var(--ink-2);max-width:none;margin-bottom:1.2rem}
.fundtable{display:flex;flex-direction:column;gap:0;margin-top:1rem;border-top:1px solid var(--line)}
.fundrow{display:flex;justify-content:space-between;gap:1rem;padding:.7rem 0;border-bottom:1px solid var(--line)}
.fundrow .k{font-size:.88rem;color:var(--ink)}
.fundrow .d{font-size:.76rem;color:var(--ink-3);margin-top:.15rem}
.fundrow .v{font-family:var(--mono);font-size:.9rem;color:var(--cyan);font-weight:700;white-space:nowrap}
.returns{margin-top:1.6rem;padding-top:1.5rem;border-top:1px solid var(--line)}
.returns h3{font-size:1.15rem;font-weight:700;letter-spacing:-0.01em;margin-bottom:.35rem}
.returns .sub{font-size:.88rem;color:var(--ink-2);margin-bottom:1.1rem}
.cases{display:grid;grid-template-columns:repeat(2,1fr);gap:.7rem}
.case{background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:12px;padding:1.05rem 1rem;position:relative;overflow:hidden}
.case::before{content:'';position:absolute;top:0;left:0;right:0;height:3px}
.case.base::before{background:var(--cyan)}
.case.up::before{background:var(--pink)}
.case .t{font-size:.66rem;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-3);font-weight:700}
.case .n{font-family:var(--mono);font-size:1.6rem;font-weight:600;letter-spacing:-0.02em;margin:.5rem 0 .55rem;font-variant-numeric:tabular-nums;line-height:1}
.case.base .n{color:var(--cyan)}
.case.up .n{color:var(--pink)}
.case p{font-size:.8rem;color:var(--ink-2);line-height:1.5}
.case .ill{display:inline-block;margin-top:.55rem;font-size:.62rem;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-3);border:1px dashed var(--line);border-radius:4px;padding:.1rem .4rem}
@media(max-width:760px){.cases{grid-template-columns:1fr}}

.acquirers{display:grid;grid-template-columns:repeat(3,1fr);gap:.9rem;margin-top:1.4rem}
@media(max-width:820px){.acquirers{grid-template-columns:1fr}}
.acard{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:1.15rem 1.25rem;display:flex;flex-direction:column;gap:.6rem}
.act-light .acard{background:#fff;border-color:rgba(12,20,30,.10)}
.acard .aq{font-size:1rem;color:var(--ink);font-weight:700}
.acard .ag{font-size:.82rem;color:var(--ink-3);line-height:1.48}
.acard .ap{font-size:.85rem;color:var(--ink-2);line-height:1.5;margin-top:auto;padding-top:.6rem;border-top:1px solid var(--line)}
.acard .ap b{color:var(--cyan)}

.closing{text-align:center;margin-top:3rem;padding:2rem 1.75rem 0}
.closing p{font-size:1.4rem;color:var(--ink);font-weight:650;line-height:1.4;max-width:34rem;margin:0 auto 2.4rem;text-wrap:balance}
.closing .real{background:linear-gradient(180deg,#22c8f7,#0098cc);-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:800}
.closing .contact{font-family:var(--mono);font-size:.8rem;color:var(--ink-3);margin-top:1.6rem}
.closing .disclaimer{max-width:46rem;margin:3rem auto 0;padding:1.6rem 0 3rem;border-top:1px solid var(--line);text-align:left}
.closing .disclaimer p{font-size:.68rem;font-weight:400;line-height:1.6;color:var(--ink-3);max-width:none;margin:0 0 .8rem;text-wrap:pretty}
.cta-pill{display:inline-flex;align-items:center;gap:.6rem;font-family:var(--sans);font-size:.86rem;font-weight:600;
  color:#fff;background:#151518;border:2px solid transparent;border-radius:999px;padding:.7rem 1.3rem;
  background-image:linear-gradient(#151518,#151518),conic-gradient(from 0deg,var(--cyan),var(--yellow),var(--pink),var(--cyan));
  background-origin:border-box;background-clip:padding-box,border-box;text-decoration:none;transition:transform .2s ease,box-shadow .2s ease}
.cta-pill:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(0,188,241,.22)}
.cta-pill svg{width:14px;height:14px}
.note{margin-top:1rem;padding:.7rem .9rem;background:rgba(255,255,255,.025);border-left:2px solid var(--cyan);border-radius:6px;font-size:.78rem;color:var(--ink-3);line-height:1.55}
.note.warn{border-left-color:var(--yellow)}
.act-light .note{background:rgba(0,0,0,.02)}
</style>
</head>
<body>
<div class="hero-aurora" aria-hidden="true"></div>
<div class="wrap">
  <div class="hero-grid">
    <div>
      <a class="brandbar" href="/" aria-label="Cinebody"><img src="/cinebody-wordmark.svg" alt="Cinebody" width="130" height="25"></a>
      <p class="ppill">Investor Update &middot; Private</p>
      <h1>Brief in. Video out. Smarter every time.</h1>
      <p class="dek">You backed this vision before the market understood it. The tech to complete it just arrived. The market just caught up. This is the raise that gets us to the exit.</p>
      <span class="conf">Confidential &middot; Not For Distribution</span>
    </div>
    <div class="hero-scroller" aria-hidden="true">
      <div class="scroll-up"><div class="hero-scroller-col">
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1111765405?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Dell</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1087531124?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Cogent</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1012467060?h=39cf8e54c8&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Royal Caribbean</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1111765405?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Dell</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1087531124?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Cogent</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1012467060?h=39cf8e54c8&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Royal Caribbean</span></div>
      </div></div>
      <div class="scroll-down"><div class="hero-scroller-col">
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/329885560?h=87abedb56e&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Nike</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1092175563?h=aeeb559c41&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Altra</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1087421388?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Point.me</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/329885560?h=87abedb56e&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Nike</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1092175563?h=aeeb559c41&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Altra</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1087421388?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Point.me</span></div>
      </div></div>
      <div class="scroll-up"><div class="hero-scroller-col">
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1129595346?h=755f92d893&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Lorde</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1061059233?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Royal Caribbean</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1098260354?h=9d87d05789&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Altra</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1129595346?h=755f92d893&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Lorde</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1061059233?background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Royal Caribbean</span></div>
        <div class="scr-card"><iframe src="https://player.vimeo.com/video/1098260354?h=9d87d05789&background=1&autoplay=1&muted=1&loop=1" loading="lazy" allow="autoplay"></iframe><span class="scr-label">Altra</span></div>
      </div></div>
    </div>
  </div>
</div>

<div class="act-light"><div class="curve-backdrop"></div><div class="wrap" style="padding:0 1.75rem">
  <p class="eyebrow">The Industry Verdict</p>
  <h2>Real people cannot be automated.</h2>
  <p class="lead">The world&rsquo;s most powerful marketers spent billions figuring this out.</p>
  <div class="quotes">
    <div class="quote"><p>&ldquo;Brands are met with skepticism when messages come directly from corporations. There are 19,000 zip codes in India. I want one influencer in each of them.&rdquo;</p><div class="qwho"><img class="pface" src="/research-headshots/fernando-fernandez.jpg" alt="Fernando Fernandez"><div class="who"><b>Fernando Fernandez</b>CEO, Unilever</div></div></div>
    <div class="quote"><p>&ldquo;We have become incredibly efficient in creating things that people ignore. Value has been replaced by volume. We confused motion with meaning.&rdquo;</p><div class="qwho"><img class="pface" src="/research-headshots/leandro-barreto.jpg" alt="Leandro Barreto"><div class="who"><b>Leandro Barreto</b>Global CMO, Unilever</div></div></div>
    <div class="quote"><p>&ldquo;Do not expect AI to be a magic wand for generating breakthrough creative. Draw inspiration from everyday moments that matter in customers&rsquo; lives.&rdquo;</p><div class="qwho"><img class="pface" src="/research-headshots/marc-pritchard.jpg" alt="Marc Pritchard"><div class="who"><b>Marc Pritchard</b>Chief Brand Officer, P&amp;G</div></div></div>
    <div class="quote"><p>&ldquo;AI slop is content not about creating value for the viewer. It is mass-produced to drive revenue for the uploader.&rdquo;</p><div class="qwho"><img class="pface" src="/research-headshots/rich-raddon.jpg" alt="Rich Raddon"><div class="who"><b>Rich Raddon</b>CEO, Zefr</div></div></div>
    <div class="quote"><p>&ldquo;The rise of AI will trigger a feverish demand for authenticity. In a world overrun by robot output, hollow feelings will spark a frantic search for all things real.&rdquo;</p><div class="qwho"><img class="pface" src="/research-headshots/thomas-ranese.jpg" alt="Thomas Ranese"><div class="who"><b>Thomas Ranese</b>Global CMO, Intuit</div></div></div>
  </div>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">The Problem</p>
  <h2>Every video AI tool is blind to the brief.</h2>
  <div class="numlist">
    <div class="numitem"><span class="no">01</span><h3>AI tools process the brief. But they do not understand it.</h3><p>Today&rsquo;s tools ingest a brief but have no grasp of brand voice, market nuance, or audience context. Clips come back with a clear gap between intent and output.</p></div>
    <div class="numitem"><span class="no">02</span><h3>&ldquo;Fix it in post&rdquo; is not a viable option.</h3><p>Every existing AI edit tool receives a dump of unscored, unguided footage. The problem was upstream. The edit cannot fix what the shoot never had.</p></div>
    <div class="numitem"><span class="no">03</span><h3>Nothing learned for the next brief.</h3><p>Which shots converted, which creators delivered, which channel performed: none of it feeds back. Every brief is written blind.</p></div>
  </div>
</div></div>

<div class="sec"><div class="wrap" style="max-width:70rem">
  <p class="eyebrow">The Solution</p>
  <h2>Cinebody runs intelligence while people are still shooting.</h2>
  <p class="lead">Not just directing the shoot. A full loop, measured, then fed back to make the next brief smarter. Scroll through it.</p>
  <div class="pipe-scroll" id="solScroll" style="height:400vh">
    <div class="pipe-sticky"><div class="ps-grid">
      <div class="ps-copies" id="psCopies">
        <div class="ps-copy on" data-stage="0"><div class="pipe-ghost" aria-hidden="true">01</div><p class="eyebrow">Stage 01 &middot; Brief to shot list</p><h2>It turns a brand brief into a real shot list</h2><p class="lead">Drop in the brand&rsquo;s brief and Cinebody writes the shoot: every shot with its framing, length, seconds, frame-rate and the exact prompt the filmer follows. This is a real shot list generated inside the product.</p></div>
        <div class="ps-copy c1" data-stage="1"><div class="pipe-ghost" aria-hidden="true">02</div><p class="eyebrow">Stage 02 &middot; The AI Director</p><h2>A director in the viewfinder, not a filter over it</h2><p class="lead">The Director rides in the camera while the filmer shoots, metering light, focus, steadiness and audio live, and speaking up one note at a time. For testimonials, the same AI runs the interview: it asks the brief&rsquo;s questions out loud and adapts each follow-up to what the person says.</p></div>
        <div class="ps-copy c2" data-stage="2"><div class="pipe-ghost" aria-hidden="true">03</div><p class="eyebrow">Stage 03 &middot; Scored ingestion</p><h2>Every clip is graded the moment it lands</h2><p class="lead">Uploads hit a zero-click pipeline: a review score against the brief across audio, focus, framing, exposure and stability, with written tips back to the filmer. Strong clips auto-approve into the edit pool.</p></div>
        <div class="ps-copy" data-stage="3"><div class="pipe-ghost" aria-hidden="true">04</div><p class="eyebrow">Stage 04 &middot; The auto edit</p><h2>An AI edit you can actually edit</h2><p class="lead">Cinebody assembles the cut itself: the best take of each shot in story order, b-roll placed, captions burned, music mixed. A real, editable timeline out, not a locked render.</p></div>
      </div>
      <div class="ps-rail" id="psRail">
        <div class="ps-rail-line"><div class="ps-rail-fill" id="psRailFill"></div></div>
        <div class="ps-node on" style="top:6%"></div>
        <div class="ps-node c1" style="top:35.3%"></div>
        <div class="ps-node c2" style="top:64.6%"></div>
        <div class="ps-node" style="top:94%"></div>
      </div>
      <div class="ps-scenes" id="psScenes">
        <div class="ps-scene on" data-stage="0"><div class="ps-scene-body">
          <div class="d-panelhead" style="margin-bottom:.8rem"><span class="d-dots"><i style="background:#ff5f56"></i><i style="background:#ffbd2e"></i><i style="background:#27c93f"></i></span>Cinebody &middot; Brief to shot list<span class="d-gen">Generated</span></div>
          <div class="d-split narrow">
            <div class="d-brief">
              <div class="d-brow"><span class="k">Campaign</span><span class="val">Shop the Routine, Spring Essentials</span></div>
              <div class="d-brow"><span class="k">Goal</span><span class="val">Drive spring purchase intent, direct shop CTA</span></div>
              <div class="d-brow"><span class="k">Content</span><span class="val">Customer routine walkthroughs and product value props</span></div>
              <div class="d-brow"><span class="k">Format</span><span class="val">Portrait 9:16 &middot; guided capture</span></div>
              <div class="d-brow"><span class="k">Tone</span><span class="val"><span class="d-tone"><span>Real</span><span>Warm</span><span>Shoppable</span></span></span></div>
            </div>
            <div>
              <div class="d-panelhead">AI shot list &middot; 5 of 8 shots</div>
              <div class="d-shots">
                <div class="d-shot"><div class="top"><span class="num">01</span><span class="name">The Flat Lay Reveal</span><span class="meta"><span>8&ndash;15s</span><span>30fps</span><span>PORT</span></span></div><p class="prompt">Lay all your spring skincare products out on a clean white or light-colored surface&hellip;</p></div>
                <div class="d-shot"><div class="top"><span class="num">02</span><span class="name">Texture Close-Up</span><span class="meta"><span>5&ndash;10s</span><span>60fps</span><span>PORT</span></span></div><p class="prompt">Pick your hero product, a serum, moisturizer, or SPF. Hold&hellip;</p></div>
                <div class="d-shot"><div class="top"><span class="num">03</span><span class="name">Step-by-Step Routine Walkthrough</span><span class="meta"><span>30&ndash;60s</span><span>30fps</span><span>PORT</span></span></div><p class="prompt">Stand in front of your bathroom mirror with good lighting,&hellip;</p></div>
                <div class="d-shot"><div class="top"><span class="num">04</span><span class="name">Why Spring, Why Now</span><span class="meta"><span>10&ndash;20s</span><span>30fps</span><span>PORT</span></span></div><p class="prompt">Face the camera straight on with good light on your face,&hellip;</p></div>
                <div class="d-shot"><div class="top"><span class="num">05</span><span class="name">The Shop CTA Close-Out</span><span class="meta"><span>5&ndash;10s</span><span>30fps</span><span>PORT</span></span></div><p class="prompt">Hold your one or two favorite products from the routine rig&hellip;</p></div>
              </div>
            </div>
          </div>
          <p class="d-cap">Brief in &rarr; shot list out. Generated inside the product.</p>
        </div></div>
        <div class="ps-scene" data-stage="1"><div class="ps-scene-body">
          <div class="d-two">
            <div class="d-phone"><div class="d-screen"><span class="d-notch"></span>
              <img class="d-vid" src="/research-cuts/feed-grace.jpg" alt="Real filmer feed"><span class="d-scrim"></span>
              <div class="a-ui">
                <div class="a-top"><span class="a-back">&lsaquo; Back</span><div class="a-shot"><span class="n">1/8</span><span class="t">Meet the creator, intro</span></div><span class="a-next">Next &rsaquo;</span></div>
                <div class="a-sp"></div>
                <div class="a-note"><span class="bot"><svg viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4M8 13h.01M16 13h.01M9 17h6"/></svg></span><div><p class="lab">DIRECTOR</p><p class="msg">Beautiful light. Come in closer and keep your face sharp.</p></div></div>
                <div class="a-meters"><div class="a-meter">&#10003; LIGHT</div><div class="a-meter">&#10003; FOCUS</div><div class="a-meter">&#10003; STEADY</div><div class="a-meter">&#10003; AUDIO</div></div>
                <div class="a-ctrls"><span class="a-side">&#9881;</span><span class="a-shutter"></span><span class="a-side">&#8635;</span></div>
              </div>
            </div></div>
            <div class="d-phone"><div class="d-screen"><span class="d-notch"></span>
              <img class="d-vid" src="/research-cuts/feed-broll.jpg" alt="Real filmer feed"><span class="d-scrim"></span>
              <div class="a-ui">
                <div class="a-top"><span class="a-back">&lsaquo; Back</span><div class="a-shot"><span class="n">3/8</span><span class="t">The spread, table b-roll</span></div><span class="a-next">Next &rsaquo;</span></div>
                <div class="a-sp"></div>
                <div class="a-note"><span class="bot"><svg viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4M8 13h.01M16 13h.01M9 17h6"/></svg></span><div><p class="lab">DIRECTOR</p><p class="msg">Get lower and let the food fill the frame, and hold steady.</p></div></div>
                <div class="a-meters"><div class="a-meter">&#10003; LIGHT</div><div class="a-meter">&#10003; FOCUS</div><div class="a-meter bad">&#9679; STEADY</div><div class="a-meter">&#10003; AUDIO</div></div>
                <div class="a-ctrls"><span class="a-side">&#9881;</span><span class="a-shutter"></span><span class="a-side">&#8635;</span></div>
              </div>
            </div></div>
          </div>
          <p class="d-cap">Two live directions &middot; light / focus / steady / audio meters &middot; the shot list in the viewfinder</p>
        </div></div>
        <div class="ps-scene" data-stage="2"><div class="ps-scene-body">
          <div class="d-split narrow">
            <div class="d-clip-ph">
              <img class="d-vid" src="/research-cuts/feed-veronica.jpg" alt="Scored clip, real footage"><span class="d-scrim"></span>
              <span class="a-badge">GOOD</span><span class="a-cmeta">0:12 &middot; 9:16 &middot; Veronica O.</span>
            </div>
            <div class="a-score">
              <div class="a-stop"><div class="a-rev"><span class="a-rl">REVIEW</span><span class="a-big">7<i>/10</i></span><span class="a-gd">GOOD</span></div><p class="a-rtext">Strong energy and a clean shot, but the framing is inconsistent and occasionally cuts off the filmer&rsquo;s face.</p></div>
              <div class="d-dims">
                <div class="d-dim">AUDIO<div class="d-track"><div class="d-fill cyan" style="width:80%"></div></div><b>80</b></div>
                <div class="d-dim">FOCUS<div class="d-track"><div class="d-fill cyan" style="width:80%"></div></div><b>80</b></div>
                <div class="d-dim">FRAMING<div class="d-track"><div class="d-fill warn" style="width:50%"></div></div><b>50</b></div>
                <div class="d-dim">EXPOSURE<div class="d-track"><div class="d-fill cyan" style="width:85%"></div></div><b>85</b></div>
              </div>
              <div class="a-tips"><p class="a-tl">TIPS</p><div class="a-tip">Keep your face in frame when speaking, or frame fully out.</div></div>
            </div>
          </div>
          <p class="d-cap">The clip on one side, its score against the brief on the other: the real review UI</p>
        </div></div>
        <div class="ps-scene" data-stage="3"><div class="ps-scene-body">
          <div class="d-editorshot"><img src="/research-cuts/editor-real.png" alt="Cinebody editor, real product capture"></div>
          <p class="d-cap">The real editor &middot; not a mockup.</p>
        </div></div>
      </div>
    </div></div>
  </div>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">Why Now</p>
  <h2>You backed us when nobody understood it. Here is why that bet just came due.</h2>
  <div class="tl-h" id="whyNowTl">
    <div class="tl-line"></div>
    <div class="tlh-item"><span class="yr">2016 &ndash; 2022</span><p>Cinebody ships its first software and gains real traction: Nike, Gatorade, Diageo and others sign up. The AI needed to complete the full vision doesn&rsquo;t exist yet, and the market isn&rsquo;t ready. We were early.</p></div>
    <div class="tlh-item"><span class="yr">2022 &ndash; 2025</span><p>Growth plateaus. Brands shift budgets to creators and hit the problem of briefing and managing them at scale. Cinebody survives on services, rebuilds, sharpens the model.</p></div>
    <div class="tlh-item"><span class="yr">2026</span><p>First profitable half. All six stages live. The AI capabilities Cinebody always needed finally exist. This is what we set out to build in 2016, and the window to exit at maximum value is open.</p></div>
  </div>
</div></div>

<div class="act-light"><div class="curve-backdrop"></div><div class="wrap" style="padding:0 1.75rem">
  <p class="eyebrow">What Changed Since 2016</p>
  <h2>We had the vision. We were missing the tools.</h2>
  <p class="lead">The AI capabilities Cinebody always needed to complete the full loop simply didn&rsquo;t exist in 2016. They do now.</p>
  <div class="thennow">
    <div class="tnrow"><div class="lab">Direction</div><div class="tnpair"><div class="then"><span class="tag">Then</span>The shot list gave creative direction, but no ability to guide framing, audio, or lighting in the moment. Using footage that wasn&rsquo;t ideal became the norm.</div><div class="now"><span class="tag">Now</span>AI director rides in the viewfinder. Real-time guidance on light, focus, framing, audio. Any creator, any phone, any market.</div></div></div>
    <div class="tnrow"><div class="lab">Scoring</div><div class="tnpair"><div class="then"><span class="tag">Then</span>A human reviewer watched every clip and manually selected the best takes, a bottleneck that killed speed and introduced subjectivity.</div><div class="now"><span class="tag">Now</span>Every clip reviewed automatically the moment it lands and scored against the brief on audio, focus, framing, exposure and stability. Strong clips auto-approve. Zero clicks.</div></div></div>
    <div class="tnrow"><div class="lab">Editing</div><div class="tnpair"><div class="then"><span class="tag">Then</span>A human editor assembled every cut. Days of post-production per campaign.</div><div class="now"><span class="tag">Now</span>AI assembles the cut from the scored pool: best take of each shot, b-roll placed, captions burned, music mixed. Finished video in minutes.</div></div></div>
    <div class="tnrow"><div class="lab">Channel Adaptation</div><div class="tnpair"><div class="then"><span class="tag">Then</span>Repurposing for multiple platforms meant going back for more content, or settling for footage that wasn&rsquo;t designed for the format. An afterthought, not a plan.</div><div class="now"><span class="tag">Now</span>From the brief, Cinebody plans for every channel from the start. One shoot becomes TikTok, YouTube, X automatically.</div></div></div>
  </div>
  <p class="note">These are not incremental improvements. They are the missing stages that make the full loop completable. We have been building toward this since 2016.</p>
</div></div>

<div class="sec"><div class="wrap">
  <div class="filmrow">
    <div>
      <p class="eyebrow">The Launch</p>
      <h2>The New Cinebody is live.</h2>
      <p class="lead">The rebuilt product, in three minutes: the same launch video live on the site today.</p>
    </div>
    <div class="video-embed"><iframe src="https://player.vimeo.com/video/1231053723?h=3deef9a1e3&amp;title=0&amp;byline=0&amp;portrait=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>
  </div>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">Market Size</p>
  <h2>The brand video market is massive. Our capture model is bottom-up.</h2>
  <div class="stats" style="grid-template-columns:repeat(3,1fr)">
    <div class="stat"><div class="n">$130B</div><div class="l">TAM &middot; brand spend on creator &amp; social video, growing 26% YoY, 4x the media industry</div></div>
    <div class="stat"><div class="n cyan">$9.6B</div><div class="l">SAM &middot; enterprise UGC video production, English-speaking markets</div></div>
    <div class="stat"><div class="n pink">$7&ndash;10M</div><div class="l">SOM &middot; ARR, 3-year bottom-up capture across SMB, mid-market &amp; enterprise SaaS</div></div>
  </div>
  <p class="note">Sources: IAB State of Creator Advertising 2026, Grand View Research UGC Platform Market Report 2026.</p>
</div></div>

<div class="act-light"><div class="curve-backdrop"></div><div class="wrap" style="padding:0 1.75rem">
  <p class="eyebrow">Moat</p>
  <h2>Directing a shoot is replicable. A decade of human editor data is not.</h2>
  <div class="donutwrap">
    <div class="donut-box" role="img" aria-label="The moat: capture scoring, brief-to-edit, and training data"><div class="donut-ring"></div><div class="donut-center"><b>The</b><span>moat</span></div></div>
    <div class="rlegend">
      <div class="ri"><span class="rdot" style="background:#00bcf1"></span><span class="rt"><b>Capture scoring</b><span>Grade raw footage against the brief at ingest.</span></span></div>
      <div class="ri"><span class="rdot" style="background:#eb008b"></span><span class="rt"><b>Brief-to-edit</b><span>Cut a finished video from the scored pool.</span></span></div>
      <div class="ri"><span class="rdot" style="background:#ffec03"></span><span class="rt"><b>Training data</b><span>Real editor project files, ingested at scale.</span></span></div>
    </div>
  </div>
  <p style="margin-top:1.4rem;font-size:.86rem">8 granted patents (7 US, 1 Canada), 2017&ndash;2025, protect the foundation of this loop. New filings extending to AI scoring and edit-assembly are already in process.</p>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">Traction</p>
  <h2>Not a demo. A decade of real revenue, at its first profitable inflection.</h2>
  <div class="stats" style="grid-template-columns:repeat(3,1fr)">
    <div class="stat"><div class="n">10</div><div class="l">Years in business</div></div>
    <div class="stat"><div class="n cyan">$1.4&ndash;1.6M</div><div class="l">Revenue trend, 2026</div></div>
    <div class="stat"><div class="n">+40%</div><div class="l">YoY revenue growth, H1 2026</div></div>
    <div class="stat"><div class="n">+177%</div><div class="l">YoY net profit growth, H1 2026</div></div>
    <div class="stat"><div class="n">H1 2026</div><div class="l">First profitable half in company history</div></div>
    <div class="stat"><div class="n">6/6</div><div class="l">Loop stages shipped live</div></div>
  </div>
  <div class="logos"><div class="logos-track">
    <img src="/research-logos/nike.png" alt="Nike" loading="lazy"><img src="/research-logos/boeing.png" alt="Boeing" data-logo="boeing" loading="lazy"><img src="/research-logos/siemens.png" alt="Siemens" data-logo="siemens" loading="lazy"><img src="/research-logos/dell.png" alt="Dell" data-logo="dell" loading="lazy"><img src="/research-logos/royalcaribbean.png" alt="Royal Caribbean" data-logo="royalcaribbean" loading="lazy"><img src="/research-logos/spglobal.png" alt="S&amp;P Global" data-logo="spglobal" loading="lazy"><img src="/research-logos/experian.png" alt="Experian" data-logo="experian" loading="lazy"><img src="/research-logos/webmd.png" alt="WebMD" data-logo="webmd" loading="lazy"><img src="/research-logos/roku.png" alt="Roku" data-logo="roku" loading="lazy"><img src="/research-logos/georgiapacific.png" alt="Georgia-Pacific" loading="lazy"><img src="/research-logos/altra.png" alt="Altra" data-logo="altra" loading="lazy"><img src="/research-logos/pointme.png" alt="point.me" loading="lazy">
    <img src="/research-logos/nike.png" alt="" loading="lazy"><img src="/research-logos/boeing.png" alt="" data-logo="boeing" loading="lazy"><img src="/research-logos/siemens.png" alt="" data-logo="siemens" loading="lazy"><img src="/research-logos/dell.png" alt="" data-logo="dell" loading="lazy"><img src="/research-logos/royalcaribbean.png" alt="" data-logo="royalcaribbean" loading="lazy"><img src="/research-logos/spglobal.png" alt="" data-logo="spglobal" loading="lazy"><img src="/research-logos/experian.png" alt="" data-logo="experian" loading="lazy"><img src="/research-logos/webmd.png" alt="" data-logo="webmd" loading="lazy"><img src="/research-logos/roku.png" alt="" data-logo="roku" loading="lazy"><img src="/research-logos/georgiapacific.png" alt="" loading="lazy"><img src="/research-logos/altra.png" alt="" data-logo="altra" loading="lazy"><img src="/research-logos/pointme.png" alt="" loading="lazy">
  </div></div>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">Competitive Landscape</p>
  <h2>They hold pieces, not the loop</h2>
  <p class="lead">Six stages, brief to finished cut. Each row is a player, each column a stage. Cinebody spans the track; every rival lights up one or two isolated cells.</p>
  <div class="cg-key">
    <span class="k"><span class="cg-sw on"></span>Cinebody, shipped</span>
    <span class="k"><span class="cg-sw comp"></span>Competitor, full</span>
    <span class="k"><span class="cg-sw part"></span>Competitor, partial</span>
    <span class="k"><span class="cg-sw off"></span>Not offered</span>
  </div>
  <div class="compgrid"><div class="cg-table">
    <div class="cg-head"></div><div class="cg-head">Brief</div><div class="cg-head">Direct</div><div class="cg-head">Ingest</div><div class="cg-head">Edit</div><div class="cg-head">Finish</div><div class="cg-head">Graphics</div>
    <div class="cg-row"><div class="cg-name cine">Cinebody</div><div class="cg-cell on" title="Shipped: brand brief drives an AI shot list"></div><div class="cg-cell on" title="Shipped: AI director coaches the filmer live"></div><div class="cg-cell on" title="Shipped: scored ingest, auto approve/reject"></div><div class="cg-cell on" title="Shipped: autonomous edit from the raw pool"></div><div class="cg-cell on" title="Shipped: finished social cut, no human pass"></div><div class="cg-cell on" title="Shipped: automated brand graphics engine"></div></div>
    <div class="cg-row"><div class="cg-name">Eddie AI</div><div class="cg-cell part" title="Reads a brief or treatment"></div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell comp" title="Builds real rough cuts from raw footage"></div><div class="cg-cell off"></div><div class="cg-cell off"></div></div>
    <div class="cg-row"><div class="cg-name">TikTok Symphony</div><div class="cg-cell comp" title="Reads a brief"></div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell part" title="Brief to finished ad, but fully generative avatars"></div><div class="cg-cell off"></div></div>
    <div class="cg-row"><div class="cg-name">Adobe Premiere AI</div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell part" title="Assembles starting points; can&rsquo;t read a brief yet"></div><div class="cg-cell off"></div><div class="cg-cell off"></div></div>
    <div class="cg-row"><div class="cg-name">Descript Underlord</div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell off"></div><div class="cg-cell part" title="Prompt-directed edits inside its own editor"></div><div class="cg-cell off"></div><div class="cg-cell off"></div></div>
  </div></div>
  <p class="note">TikTok Symphony is fully generative: licensed-actor avatars, not real footage. Adobe brief support is explicitly &ldquo;on the roadmap&rdquo; per its own FAQ. Descript takes prompts, not briefs, on single recordings inside its own editor.</p>
</div></div>

<div class="act-light"><div class="curve-backdrop"></div><div class="wrap" style="padding:0 1.75rem">
  <p class="eyebrow">The Ugly</p>
  <h2>Every reason this could fail. And why it won&rsquo;t.</h2>
  <div class="risks">
    <div class="riskcard"><div class="rk">Risk</div><div class="rq">A fast-follower builds the full loop.</div><div class="ra">They&rsquo;d need every stage (brief, shoot, score, adapt, distribute, measure, learn) run at scale, then start collecting labeled data. Years away. 8 patents protect the foundation; the data moat compounds with every campaign.</div></div>
    <div class="riskcard"><div class="rk">Risk</div><div class="rq">Google or Adobe builds this themselves.</div><div class="ra">Each owns exactly one piece of the loop. Building the full assembly would take 3&ndash;5 years. They would buy Cinebody before they build it.</div></div>
    <div class="riskcard"><div class="rk">Risk</div><div class="rq">AI-generated video replaces the need for real footage.</div><div class="ra">Nobody wants synthetic ads. They want authentic content made faster, exactly what Cinebody delivers. The backlash against AI slop strengthens this position every month.</div></div>
    <div class="riskcard"><div class="rk">Risk</div><div class="rq">Current revenue is too small for platform-scale returns.</div><div class="ra">$1.4&ndash;1.6M is a services-weighted baseline, not the software ceiling. This raise funds the return to software-first. At platform scale, the trajectory is a different order of magnitude.</div></div>
  </div>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">The Team</p>
  <h2>The founders removed their own salaries rather than compromise the vision.</h2>
  <div class="team">
    <div class="tcard"><img class="pface lg" src="/research-headshots/scott-mcdonald.jpg" alt="Scott McDonald"><div class="tbody"><h3>Scott McDonald</h3><div class="role">CEO &amp; Co-Founder</div><p>Built Cinebody from zero to ten years of operating revenue before UGC was a category. Removed his own salary for multiple years to protect the company and the vision. Now leading the return to software-first at the moment the market finally caught up.</p></div></div>
    <div class="tcard"><img class="pface lg" src="/research-headshots/gavin-anstey.jpg" alt="Gavin Anstey"><div class="tbody"><h3>Gavin Anstey</h3><div class="role">President &amp; Co-Founder</div><p>Engineered the H1 2026 turnaround: +40% revenue YoY, first profitable half, full operational rebuild. Also removed his own salary. The financial architect behind the inflection point this raise is built on.</p></div></div>
    <div class="tcard"><img class="pface lg" src="/research-headshots/adam-shaffner.jpg" alt="Adam Shaffner"><div class="tbody"><h3>Adam Shaffner</h3><div class="role">COO</div><p>Rebuilt the services operation and sales process: SOPs, sharpened ICP, structured pipeline. Owns delivery quality and client retention. The commercial backbone behind the H1 2026 turnaround.</p></div></div>
  </div>
  <div class="advisors">
    <div class="advcard"><img class="pface" src="/research-headshots/alex-bogusky.jpg" alt="Alex Bogusky"><div><b>Alex Bogusky</b><span>Advisor, Investor &middot; Co-founder, CP+B &middot; Adweek&rsquo;s Creative Director of the Decade</span></div></div>
    <div class="advcard"><img class="pface" src="/research-headshots/olivier-rabenschlag.jpg" alt="Olivier Rabenschlag"><div><b>Olivier Rabenschlag</b><span>Advisor, Investor &middot; Former Google Director (11 yrs), built &amp; scaled Google&rsquo;s Enterprise AI Partnership Portfolio</span></div></div>
  </div>
</div></div>

<div class="sec"><div class="wrap">
  <p class="eyebrow">The Raise</p>
  <h2>$1.5M to fuel the path to acquisition.</h2>
  <div class="raisebox">
    <p class="lead">Growth capital to scale Cinebody as a software company. This raise funds the return to software-first and puts sales behind it, building the growth that leads to the acquisition conversation you have been waiting ten years for.</p>
    <div class="stats" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat"><div class="n">$1.5M</div><div class="l">Raising</div></div>
      <div class="stat"><div class="n cyan">$10.4M</div><div class="l">Valuation</div></div>
      <div class="stat"><div class="n">12mo</div><div class="l">Runway</div></div>
    </div>
    <div class="returns">
      <h3>Valued at $10.4M today. Here is where it could go.</h3>
      <p class="sub">Software companies are valued on recurring revenue. Our bottom-up SOM puts Cinebody at $7&ndash;10M ARR within three years, and that changes the math.</p>
      <div class="cases">
        <div class="case base"><div class="t">Base case &middot; 7&ndash;10x</div><div class="n">$49&ndash;100M</div><p>Our $7&ndash;10M ARR SOM at a standard multiple for defensible, patented SaaS.</p></div>
        <div class="case up"><div class="t">Upside &middot; 30&ndash;100x</div><div class="n">$300M&ndash;$1B+</div><p>Strategic partner integrations embed Cinebody inside global brands and agencies, making it the operating system for brand video. Competing acquirers pay a control premium.</p><span class="ill">Illustrative</span></div>
      </div>
      <p class="note">7&ndash;10x is standard for defensible SaaS with a patented moat (Bessemer Venture Partners, State of the Cloud 2025). The upside case is illustrative, not part of the plan.</p>
    </div>
  </div>
  <h3 class="roadmap-h">Our target roadmap</h3>
  <div class="tl-h tl-4" id="raiseTl" style="margin-top:1.2rem">
    <div class="tl-line"></div>
    <div class="tlh-item"><span class="yr">Q4 2026</span><p>Software-first launch. Design partners live.</p></div>
    <div class="tlh-item"><span class="yr">H1 2027</span><p>Enterprise client wins. Acquirer conversations seeded.</p></div>
    <div class="tlh-item"><span class="yr">H2 2027</span><p>Formal acquirer process opens.</p></div>
    <div class="tlh-item tbd"><span class="yr">2028</span><p>Exit target. Directional, not a fixed date.</p></div>
  </div>
  <p class="note warn">This timeline is directional, not a commitment. Timing is still being discussed and may move.</p>
</div></div>

<div class="act-light"><div class="curve-backdrop"></div><div class="wrap" style="padding:0 1.75rem">
  <p class="eyebrow">The Exit Strategy</p>
  <h2>The exit is the strategy. Here is the path.</h2>
  <p class="lead">Three categories of acquirer. Each owns exactly one piece of what Cinebody has already assembled.</p>
  <div class="acquirers">
    <div class="acard"><div class="aq">Google</div><div class="ag">Owns Camera Coach: AI guidance for still photos only. No directed video capture, no brief-to-edit loop, no enterprise workflow.</div><div class="ap"><b>The pitch:</b> Camera Coach directs a still photo. Cinebody directs video, shot by shot, on any phone in an untrained hand. Why build it when you can buy it?</div></div>
    <div class="acard"><div class="aq">Adobe</div><div class="ag">Owns Premiere AI: editing and distribution only. Brief ingestion is still on the roadmap. No capture layer, no scoring, no loop.</div><div class="ap"><b>The pitch:</b> Brief ingestion is still on your roadmap. We already shipped it, wired into the whole loop. Why build it when you can buy it?</div></div>
    <div class="acard"><div class="aq">ByteDance / Apple / Snap</div><div class="ag">Each owns distribution but not the human creation layer.</div><div class="ap"><b>The pitch:</b> Whoever acquires Cinebody acquires the only closed loop from brief to finished human video, and locks competitors out of the category.</div></div>
  </div>
</div></div>

<div class="closing">
  <p>You believed in this vision when the market called it too early. Then the tech caught up. The market caught up. And now we need one final push to get to the exit you deserve. Cinebody is the infrastructure for the only thing that still works in a world drowning in AI content: <span class="real">Real.</span></p>
  <a class="cta-pill" href="mailto:gavin@cinebody.com"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>Contact &middot; gavin@cinebody.com</a>
  <p class="contact">cinebody.com &middot; 2026</p>
  <div class="disclaimer">
    <p>The information herein has been prepared for informational purposes only and does not purport to contain all of the information that a prospective investor may require in evaluating an investment and making an investment decision. In all cases, interested parties should conduct their own investigation of Super 6, LLC (the &ldquo;Company&rdquo;). None of the Company nor any of its affiliates, officers, managers, members, employees or representatives make any representations or warranties, explicit or otherwise, as to the accuracy or completeness of the information herein or otherwise made available in connection with any further investigation of the Company, and the Company expressly disclaims any and all liability that may be based on or arise from such information, errors therein or omissions therefrom.</p>
    <p>Nothing herein or otherwise made available shall be construed as giving legal, financial, tax or other advice of any kind. Delivery of this confidential summary (this &ldquo;CS&rdquo;) shall not and does not, under any circumstance, create any implication or inference that the information contained herein is correct or complete. Statements made in this CS or by the Company in connection herewith that are not historical facts and that reflect the current view of the Company about future events and financial performance are hereby identified as &ldquo;forward looking statements.&rdquo; Some of these statements can be identified by terms and phrases such as &ldquo;anticipate,&rdquo; &ldquo;believe,&rdquo; &ldquo;intend,&rdquo; &ldquo;estimate,&rdquo; &ldquo;expect,&rdquo; &ldquo;continue,&rdquo; &ldquo;could,&rdquo; &ldquo;should,&rdquo; &ldquo;may,&rdquo; &ldquo;plan,&rdquo; &ldquo;project,&rdquo;, &ldquo;predict,&rdquo; and similar expressions and include references and assumptions that the Company currently believes are reasonable and relate to the future prospects, developments and business strategies. The Company cautions that such &ldquo;forward looking statements,&rdquo; including without limitation, those relating to the Company&rsquo;s future business prospects, market reach, revenue, liquidity, capital needs and income, wherever they occur in this CS or any other communications or materials provided by the Company, are necessarily estimates and involve a number of risks and uncertainties that could cause actual results to differ materially from those suggested by the &ldquo;forward looking statements.&rdquo; Factors that could cause actual results to differ materially from those expressed or implied in such forward-looking statements include, but are not limited to, the risks associate with any failure by the Company to diversify its customer base, to continue to make advancements in Company technology that keep pace with other industry advancements, to provide innovative services and products that are appealing to customers, or the departure of any key employees or officers of the Company critical to its continued technological advancement and implementation of business plan. The Company disclaims any intent or obligation to update &ldquo;forward looking statements&rdquo; made in this CS to reflect changed assumptions, the occurrence of unanticipated events, or changes to future operating results over time. The recipient expressly understands and agrees that any estimates, projections and assumptions are uncertain and accordingly, no representation can be made or is made as to their attainability. Only those representations and warranties made in a definitive, written purchase agreement, and subject to such limitations and restrictions as may be specified therein, shall have any legal effect.</p>
    <p>This CS is not a prospectus and does not constitute an offer or the solicitation of an offer for the sale or purchase of any assets or securities of the Company. Neither this CS nor the information contained herein shall form the basis of, or constitute, any contract or binding offer.</p>
  </div>
</div>

<script>
(function(){
  var pipe=document.getElementById('solScroll');
  var copies=document.querySelectorAll('#psCopies .ps-copy');
  var nodes=document.querySelectorAll('#psRail .ps-node');
  var scenes=document.querySelectorAll('#psScenes .ps-scene');
  var railFill=document.getElementById('psRailFill');
  var STAGES=copies.length;
  function setStage(i){
    copies.forEach(function(c,idx){c.classList.toggle('on',idx===i)});
    nodes.forEach(function(n,idx){n.classList.toggle('on',idx===i)});
    scenes.forEach(function(s,idx){s.classList.toggle('on',idx===i)});
  }
  if(pipe&&window.matchMedia('(min-width:861px)').matches){
    var ticking=false;
    function onScroll(){
      if(ticking)return; ticking=true;
      requestAnimationFrame(function(){
        ticking=false;
        var r=pipe.getBoundingClientRect();
        var total=r.height-window.innerHeight;
        var progress=total>0 ? Math.min(1,Math.max(0,-r.top/total)) : 0;
        if(railFill) railFill.style.height=(progress*100)+'%';
        var idx=Math.min(STAGES-1,Math.floor(progress*STAGES));
        setStage(idx);
      });
    }
    window.addEventListener('scroll',onScroll,{passive:true});
    onScroll();
  }
  var tls=[document.getElementById('whyNowTl'),document.getElementById('raiseTl')];
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.3});
    tls.forEach(function(tl){ if(tl) io.observe(tl); });
  } else { tls.forEach(function(tl){ if(tl) tl.classList.add('in'); }); }
})();
</script>
</body>
</html>`;
