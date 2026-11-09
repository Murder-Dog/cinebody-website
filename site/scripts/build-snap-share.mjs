/**
 * THE SNAP PAGE'S LINK PREVIEW, AS A VIDEO.
 *
 * Scott, Nov 9: "give it a video share image". The homepage already plays in iMessage and X
 * (public/share/cinebody-hero.mp4) but nothing recorded how it was made, so this one is a script.
 *
 * The card is built here rather than screenshotted off /snap: the live hero is a 1.25fr/0.75fr
 * layout at the page's own zoom, and a 1200x630 link card wants its own composition. Same parts
 * though - the wall columns scrolling opposite ways, the headline, the two logos.
 *
 * HOW THE FRAMES ARE MADE. One CSS animation, paused, stepped by negative animation-delay: frame n
 * sets delay to -(n/fps)s and screenshots. That gives exact, repeatable frames with no reliance on
 * wall-clock timing, and the loop is seamless because the delay wraps the animation's own period.
 *
 *   node site/scripts/build-snap-share.mjs
 */
// Playwright lives in the platform repo, not this one: the site has no test deps and adding a
// browser to it for one asset would be the wrong trade. The path is resolved rather than imported
// by name so this runs from a clean checkout of the website alone.
const pw = await import('/Users/scottmcdonald/cinebody-platform/node_modules/playwright/index.js');
const chromium = pw.chromium ?? pw.default.chromium;
import { execFile } from 'node:child_process';
import { mkdtemp, rm, writeFile, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const run = promisify(execFile);
const here = dirname(fileURLToPath(import.meta.url));
const OUT = join(here, '..', 'public', 'share');
const W = 1200, H = 630, FPS = 24, SECONDS = 8;
const FRAMES = FPS * SECONDS;

/** Poster frames off the live grid, so the card shows the real work. */
const TILES = [
  '2127477928-dd4ffc41b15de6a339826e43de1160cf4ceae64072d3af3a4a21b5ac504facda',
  '2127476595-b123815ece51ee71864e9d1e544d6d6d37d05c3b0237940451c42afa5511635a',
  '2127475765-48abfcdc3a1f4eeb1069f53ce18e7c5ceec628fdfea9060863196f4045a4f344',
  '2127475053-0432b11849cab8899c9a25ac35c46e959c9aa80b4bda027037ae13db2e01e5fd',
  '2127475081-b4b2fc795ec90388c6fa26c0f6e67e59d87fc0fce2353bd3d7b6fc1293e0c642',
  '2127470960-e3d840ec51074798ff40b49ce0fcaf1c5aac522a96483d10927ed6225e0b194f',
  '2127467233-70474e056e0e18b7b4ccfaae874a4791e523548d7a7f1c2d9211dfaaa9b9e71d',
  '2107210747-89295709aff33c81109ba2f4e6e8849d406fbe67547c51ae3dac492f879ee908',
  '2107159296-68fe63c5debd893e307856b2b88fc8f21f6e24b94e644e55bd9143e7858fa10d',
  '2107159768-531769726d5e95a5a7e391109631079a86a72ebd6791c728f420f2f104996646',
  '2107162791-36bbead219adea8623c48cbd20eab9b2d74cecb033f8eb1277a29ed1f33a74e6',
  '2107163698-26a99f03687f7e761a37e64ce7b6499d5cbb92d50c627d556e4cb55d48cf4762',
].map(id => `https://i.vimeocdn.com/video/${id}-d_640`);

const col = (n) => {
  // Each column gets its own slice and is doubled, so a -50% travel loops seamlessly.
  const pick = Array.from({ length: 4 }, (_, i) => TILES[(n * 3 + i) % TILES.length]);
  const imgs = [...pick, ...pick].map(src => `<div class="t"><img src="${src}"></div>`).join('');
  return `<div class="col ${n % 2 ? 'down' : 'up'}" style="--d:${26 + n * 5}s"><div class="track">${imgs}</div></div>`;
};

const html = `<!doctype html><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px;overflow:hidden}
body{background:
  radial-gradient(ellipse 70% 60% at 72% 30%, rgba(0,188,241,.10), transparent 70%),
  radial-gradient(ellipse 50% 50% at 28% 75%, rgba(255,236,3,.05), transparent 70%),
  linear-gradient(180deg,#0a0a0a,#041a24);
  font-family:"Helvetica Neue",Arial,sans-serif;color:#fff;position:relative}
.wall{position:absolute;inset:0 0 0 52%;display:flex;gap:10px;overflow:hidden;
  -webkit-mask-image:linear-gradient(to right,transparent,#000 14%),linear-gradient(to bottom,transparent,#000 12%,#000 88%,transparent);
  -webkit-mask-composite:source-in;mask-composite:intersect}
.col{flex:1;overflow:hidden}
.track{display:flex;flex-direction:column;gap:10px;animation-duration:var(--d);animation-timing-function:linear;
  animation-iteration-count:infinite;animation-play-state:paused}
.up .track{animation-name:u}.down .track{animation-name:d}
@keyframes u{from{transform:translateY(0)}to{transform:translateY(calc(-50% - 5px))}}
@keyframes d{from{transform:translateY(calc(-50% - 5px))}to{transform:translateY(0)}}
.t{flex:none;width:100%;aspect-ratio:9/16;border-radius:10px;overflow:hidden;background:#111}
.t img{width:100%;height:100%;object-fit:cover;display:block}
.copy{position:absolute;left:64px;top:50%;translate:0 -50%;width:46%;z-index:2}
.eyebrow{display:inline-block;font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;
  color:#00bcf1;border:1px solid rgba(0,188,241,.45);border-radius:999px;padding:7px 15px;margin-bottom:26px}
h1{font-size:68px;line-height:.97;letter-spacing:-.035em;font-weight:800}
h1 span{color:#00bcf1}
p{margin-top:20px;font-size:19px;line-height:1.45;color:rgba(255,255,255,.66);max-width:30ch}
.by{position:absolute;left:64px;bottom:44px;display:flex;align-items:center;gap:12px;font-size:15px;
  font-weight:700;color:rgba(255,255,255,.85);z-index:2}
.by i{display:block;width:34px;height:3px;border-radius:2px;
  background:linear-gradient(90deg,#00bcf1 0 33.3%,#ffec03 33.3% 66.6%,#eb008b 66.6%)}
</style>
<div class="wall">${[0,1,2,3].map(col).join('')}</div>
<div class="copy">
  <div class="eyebrow">Case study</div>
  <h1>600 videos.<br><span>Zero crews.</span></h1>
  <p>60 creators. Two months. Every major short-form platform.</p>
</div>
<div class="by"><i></i> Cinebody &times; Snap</div>`;

const dir = await mkdtemp(join(tmpdir(), 'snapshare-'));
const page = await (await chromium.launch()).newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.waitForFunction(() => [...document.images].every(i => i.complete && i.naturalWidth));

for (let f = 0; f < FRAMES; f++) {
  const t = f / FPS;
  await page.evaluate((t) => {
    document.querySelectorAll('.track').forEach(el => {
      const d = parseFloat(getComputedStyle(el.parentElement).getPropertyValue('--d'));
      el.style.animationDelay = `${-(t % d)}s`;
    });
  }, t);
  await page.screenshot({ path: join(dir, `f${String(f).padStart(4, '0')}.png`) });
}
await page.context().browser().close();

await mkdir(OUT, { recursive: true });
await run('ffmpeg', ['-y', '-framerate', String(FPS), '-i', join(dir, 'f%04d.png'),
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-profile:v', 'baseline', '-level', '3.1',
  '-movflags', '+faststart', '-b:v', '1400k', join(OUT, 'snap-hero.mp4')]);
await run('ffmpeg', ['-y', '-i', join(dir, 'f0000.png'), '-q:v', '3', join(OUT, 'snap-hero.jpg')]);
await rm(dir, { recursive: true, force: true });
console.log('wrote share/snap-hero.mp4 and .jpg');
