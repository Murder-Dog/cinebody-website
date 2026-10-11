// Full page HTML for the investor use-of-funds breakdown, served by
// src/middleware.ts once the request carries the funds gate cookie. Ported
// from cinebody-platform apps/web/src/app/research/cinebody-use-of-funds/
// route.ts (FULL_HTML, evaluated, not hand-copied) on 2026-10-11. This file
// is now the source of truth. Investor-facing: grouped totals only, no
// individual salaries. The detailed internal numbers live in the Raise
// Scenarios artifact.

export const FUNDS_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Cinebody: use of funds (private)</title>
<meta name="description" content="Cinebody use-of-funds breakdown for the current raise. Private, password required.">
<meta name="robots" content="noindex">
<style>
  :root{--bg:#0a0a0a;--card:rgba(22,23,28,0.62);--card2:rgba(22,23,28,0.4);--line:rgba(255,255,255,0.10);
    --ink:#f5f7f9;--ink-2:rgba(255,255,255,0.80);--ink-3:rgba(255,255,255,0.55);
    --pink:#eb008b;--cyan:#00bcf1;--yellow:#ffec03;
    --brand:linear-gradient(120deg,#00bcf1 0%,#ffec03 50%,#eb008b 100%);
    --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif;--mono:ui-monospace,"SF Mono",Menlo,monospace;color-scheme:dark}
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:var(--bg);color:var(--ink);font-family:var(--sans);line-height:1.5;
    background-image:
      radial-gradient(820px 520px at 84% -8%,rgba(255,63,174,0.10),transparent 60%),
      radial-gradient(720px 520px at 6% 108%,rgba(42,199,246,0.09),transparent 58%)}
  .wrap{max-width:820px;margin:0 auto;padding:2.5rem 1.5rem 5rem}
  .brandbar{display:block;margin-bottom:1.6rem}
  .kicker{font-family:var(--mono);font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;color:var(--cyan);margin-bottom:.6rem}
  h1{font-size:1.9rem;font-weight:800;letter-spacing:-0.02em;margin-bottom:.5rem;
    background:linear-gradient(180deg,#fff,#8fdcf7);-webkit-background-clip:text;background-clip:text;color:transparent}
  .conf{display:inline-block;font-size:.68rem;font-weight:700;letter-spacing:.08em;color:#ff8fc0;
    border:1px solid rgba(235,0,139,0.4);padding:.2rem .55rem;border-radius:4px;margin-bottom:1.8rem}
  .card{background:var(--card);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid var(--line);
    border-radius:14px;padding:1.4rem 1.5rem;margin-bottom:1.6rem}
  .card h2{font-size:.78rem;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-3);margin-bottom:.9rem;font-weight:600}
  table{width:100%;border-collapse:collapse;font-size:.86rem}
  th{text-align:left;font-family:var(--mono);font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;
    color:var(--ink-3);padding:.5rem .6rem;border-bottom:1px solid var(--line)}
  td{padding:.55rem .6rem;border-bottom:1px solid var(--line);color:var(--ink-2)}
  td.num{text-align:right;font-variant-numeric:tabular-nums;color:var(--ink)}
  tr:last-child td{border-bottom:0}
  tr.total td{font-weight:700;color:var(--ink);background:rgba(255,255,255,0.03)}
  tr.grand td{font-weight:800;color:var(--yellow);background:rgba(255,236,3,0.06);border-top:1px solid rgba(255,236,3,0.3)}
  .note{margin-top:.9rem;padding:.75rem .9rem;background:rgba(255,255,255,0.03);border-left:2px solid var(--cyan);
    border-radius:6px;font-size:.82rem;color:var(--ink-3);line-height:1.6}
  .section-label{font-family:var(--mono);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;
    color:var(--pink);margin:2.4rem 0 .8rem;padding-bottom:.5rem;border-bottom:1px solid var(--line)}
  .cat-head{display:flex;align-items:baseline;gap:.6rem;margin-bottom:.9rem}
  .cat-head .n{font-family:var(--mono);color:var(--cyan);font-size:.78rem}
  .cat-head h3{font-size:1rem;font-weight:700}
  .closing{background:var(--card2);border:1px dashed var(--line);border-radius:12px;padding:1.2rem 1.4rem;margin-top:2rem}
  .closing h3{font-size:.86rem;margin-bottom:.5rem}
  .closing p{font-size:.85rem;color:var(--ink-2);line-height:1.6}
  .backlink{display:inline-block;margin-top:2.5rem;font-size:.82rem;color:var(--cyan);text-decoration:none}
  .backlink:hover{text-decoration:underline}
  @media (max-width:560px){table{font-size:.76rem}th,td{padding:.42rem .4rem}}
</style>
<style id='brand-skin'>@font-face{font-family:'Plus Jakarta Sans';font-style:normal;font-weight:200 800;font-display:swap;src:url('/fonts/plus-jakarta-var.woff2') format('woff2')}:root{--sans:'Plus Jakarta Sans',-apple-system,BlinkMacSystemFont,sans-serif;--mono:'Plus Jakarta Sans',-apple-system,sans-serif}body{font-family:var(--sans)}html,body{overflow-x:clip}h1,h2,h3{letter-spacing:-0.02em}::selection{background:rgba(0,188,241,.35);color:#fff}</style></head>
<body>
<div class="wrap">
  <a class="brandbar" href="/" aria-label="Cinebody"><img src="/cinebody-wordmark.svg" alt="Cinebody" width="130" height="25"></a>
  <p class="kicker">Use of Funds &middot; Private</p>
  <h1>Cinebody: Super 6, LLC</h1>
  <span class="conf">Confidential &amp; Privileged &middot; Do Not Disclose</span>

  <div class="card">
    <h2>Raise Mechanics</h2>
    <table>
      <thead><tr><th>Investment Total</th><th>Advisor Fee (3.5%)</th><th>Available Capital</th></tr></thead>
      <tbody><tr><td class="num">$1,500,000</td><td class="num">$52,500</td><td class="num">$1,447,500</td></tr></tbody>
    </table>
    <div class="note">3.5% is a modeling assumption for this raise, not yet confirmed.</div>
  </div>

  <div class="card">
    <h2>Use of Funds by Category</h2>
    <table>
      <thead><tr><th>#</th><th>Category</th><th style="text-align:right">Amount</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>New Hires</td><td class="num">$275,000</td></tr>
        <tr><td>2</td><td>Marketing</td><td class="num">$175,000</td></tr>
        <tr><td>3</td><td>Operating Capital Buffer</td><td class="num">$350,000</td></tr>
        <tr><td>4</td><td>Debt Payoff</td><td class="num">$200,000</td></tr>
        <tr><td>5</td><td>Salary Adjustments</td><td class="num">$263,882</td></tr>
        <tr><td>6</td><td>Legal &amp; Patent Fees</td><td class="num">$60,000</td></tr>
        <tr class="total"><td colspan="2">Subtotal, Categories 1&ndash;6</td><td class="num">$1,323,882</td></tr>
        <tr><td>7</td><td>Payroll burden (13% on new hires and salary increases)</td><td class="num">$70,055</td></tr>
        <tr class="total"><td colspan="2">Total</td><td class="num">$1,393,937</td></tr>
        <tr class="grand"><td colspan="2">Capital Surplus (available for all categories, as needed)</td><td class="num">$53,563</td></tr>
      </tbody>
    </table>
  </div>

  <p class="section-label">Category Breakdown In Detail</p>

  <div class="card">
    <div class="cat-head"><span class="n">01</span><h3>New Hires</h3></div>
    <table>
      <thead><tr><th>Role</th><th>Description / Notes</th></tr></thead>
      <tbody>
        <tr><td>Senior Product Designer</td><td>Owns the product experience across the app and web platform, working hands-on with AI design and coding tools. US remote.</td></tr>
        <tr><td>Growth Marketer</td><td>Primarily focuses on supporting sales growth through paid funnel development, while spearheading marketing and communication tactics to support all facets of the business</td></tr>
        <tr class="total"><td>Total, both roles (first-year salaries)</td><td class="num">$275,000</td></tr>
      </tbody>
    </table>
    <div class="note">Other future hires, such as accounts-support, are intentionally not included here and will be added as revenue growth requires.</div>
  </div>

  <div class="card">
    <div class="cat-head"><span class="n">02</span><h3>Marketing</h3></div>
    <table>
      <thead><tr><th>Item</th><th>Amount</th><th>Description / Notes</th></tr></thead>
      <tbody>
        <tr><td>Video / digital ad asset creation</td><td class="num">$25,000</td><td>Outsourced production of creative for paid campaigns</td></tr>
        <tr><td>Paid ad spend</td><td class="num">$150,000</td><td>Ramps over the first few months, then sustained. Paid spend is designed to coincide with and complement our current outbound/SDR vendor rather than replace it</td></tr>
        <tr class="total"><td colspan="2">Total</td><td class="num">$175,000</td><td></td></tr>
      </tbody>
    </table>
  </div>

  <div class="card">
    <div class="cat-head"><span class="n">03</span><h3>Operating Capital Buffer</h3></div>
    <table>
      <thead><tr><th>Item</th><th>Amount</th><th>Description / Notes</th></tr></thead>
      <tbody>
        <tr><td>Buffer (approx. 2 months of post-raise operating expense)</td><td class="num">$350,000</td><td></td></tr>
      </tbody>
    </table>
    <div class="note">A working-capital reserve sized against post-raise operating expense, which increases with the salary and hiring investments above. This is a disciplined, metric-tied cushion, not idle cash, sized to keep the business executing without interruption through the growth phase.</div>
  </div>

  <div class="card">
    <div class="cat-head"><span class="n">04</span><h3>Debt Payoff</h3></div>
    <table>
      <thead><tr><th>Item</th><th>Amount</th><th>Rate</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td>Alpine CC</td><td class="num">$33,413</td><td class="num">11.49%</td><td>Approx. full payoff</td></tr>
        <tr><td>US Bank CC</td><td class="num">$25,000</td><td class="num">0% &rarr; Nov 2026</td><td>Approx. full payoff, ahead of the promotional rate expiring</td></tr>
        <tr><td>Line of Credit</td><td class="num">$46,545</td><td class="num">10.25%</td><td>Approx. full payoff</td></tr>
        <tr><td>Founder loans (Gavin &amp; Scott, prior draws)</td><td class="num">$72,000</td><td class="num">N/A</td><td>Approx. full payoff</td></tr>
        <tr><td>Cap1 CC</td><td class="num">$23,042</td><td class="num">24.49%</td><td>A chunk applied toward this balance to bring the total to a flat $200,000, with revenue chipping away at the remainder over time</td></tr>
        <tr class="total"><td colspan="2">Total</td><td class="num">$200,000</td><td></td></tr>
      </tbody>
    </table>
  </div>

  <div class="card">
    <div class="cat-head"><span class="n">05</span><h3>Salary Adjustments</h3></div>
    <table>
      <thead><tr><th>Group</th><th>People</th><th>What changes</th><th style="text-align:right">Annual increase</th></tr></thead>
      <tbody>
        <tr><td>Founders &amp; leadership</td><td class="num">3</td><td>CEO, President and COO move to sustainable, below-market salaries</td><td class="num">$245,000</td></tr>
        <tr><td>Core team</td><td class="num">2</td><td>Account management and post production brought up to market rate</td><td class="num">$18,882</td></tr>
        <tr class="total"><td colspan="3">Total (funded as a 12-month bridge)</td><td class="num">$263,882</td></tr>
      </tbody>
    </table>
    <div class="note">The founders previously removed their own salaries entirely to keep the business self-funded through a multi-year growth plateau, reinvesting instead in the hires that produced the company&rsquo;s current trajectory. This restores founder and team pay to sustainable levels on a funded 12-month bridge, rather than an open-ended run rate. Revenue growth is expected to sustain these levels going forward.</div>
  </div>

  <div class="card">
    <div class="cat-head"><span class="n">06</span><h3>Legal &amp; Patent Fees</h3></div>
    <table>
      <thead><tr><th>Item</th><th>Amount</th><th>Description / Notes</th></tr></thead>
      <tbody>
        <tr><td>Raise legal</td><td class="num">$30,000</td><td></td></tr>
        <tr><td>Patent lawyer</td><td class="num">$30,000</td><td>New filings extending the existing granted-patent family</td></tr>
        <tr class="total"><td colspan="2">Total</td><td class="num">$60,000</td><td></td></tr>
      </tbody>
    </table>
  </div>

  <div class="closing">
    <h3>A note on cap table cleanup</h3>
    <p>Not part of this primary raise, but the opportunity does exist for any investor to buy out other, smaller stakeholders and help consolidate the cap table. This would be on top of the $1.5M being raised here.</p>
  </div>

</div>
</body>
</html>
`;
