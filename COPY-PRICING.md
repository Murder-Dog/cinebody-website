# Pricing Page Copy (draft, 2026-08-20)

No em dashes, no emojis. **PRICING NOT LANDED** — there's a calculator in flux (admin/pricing), so treat everything below as current-but-subject-to-change. Structure + numbers below are pulled accurately from `cinebody-platform/apps/web/src/lib/tiers.ts`.

---

## Hero
- **Simple plans. Real content.**
- Sub: Pick the plan that fits how you work. Upgrade anytime.
- Value line: Brands on Cinebody typically save 70%+ vs. traditional production.
- Monthly/annual toggle (annual is cheaper — see below).

## Tiers (current state — 4 tiers, incl. a real Free tier)

### Free: "For getting started" ($0, public from Oct 15)
- Shown on the marketing pricing page. Limits match `cinebody-platform` PRICING.md (Sep 28) and `lib/tiers.ts`:
- 1 project, 1 admin seat, up to 3 people filming at once, 10 GB storage
- 1 app video a month (resets on the 1st), 3 chat edits per video, graphics and a new song once each per video
- Save and share at 1080p, ending on the Cinebody end card; no desktop editor
- AI shot list + clip review; no auto-editor

### Plus — "For small teams" — $300/mo ($250/mo annual)
- Unlimited active projects · 2 admin seats · unlimited filmers
- **AI Rough Cut (auto-editor)** · **AI Voice Interviews** · basic exports (MP4, ZIP)
- Photo capture + real-time sync · Email & FAQ support
- 100 GB · 2,000 AI actions/mo · 4 auto-edits/mo

### Pro — "For growing brands"  *(Most popular)* — $600/mo ($500/mo annual)
- Everything in Plus, plus:
- Multiple teams · 5 admin seats
- **Post Production clean-up (stabilize, audio, upscale, reframe)** · advanced exports (.prproj, FCPXML, EDL)
- Dedicated support · custom legal + API access · premium plugins
- 500 GB · 10,000 AI actions/mo · 20 auto-edits/mo · 50 clean-up runs/mo

### Enterprise — "For large organizations" — custom
- Everything in Pro, plus:
- Custom teams, admins & storage (all uncapped) · concierge support
- Advanced security & encryption · custom integrations (DAM, Drive)
- Strategic Producer · custom legal document signing · headless / MCP access

## AI feature gating (real, from capabilities)
- **AI shot list + clip review:** all tiers (even Free)
- **AI Rough Cut (auto-editor) + AI Voice Interviews:** Plus and up
- **Post Production clean-up (clip doctor) + advanced exports + API + plugins:** Pro and up
- Auto-edits are metered per tier (Free 1 → Plus 4 → Pro 20 → Ent unlimited/mo)

## OPEN QUESTIONS (need Scott)
- **The pricing model isn't landed** (calculator in flux). Hold the pricing page as a placeholder until it's decided; don't publish numbers.
- ~~Free tier reconciliation~~ RESOLVED: the product Free tier IS the gen-pop free tier, and it goes public on the pricing page Oct 15. Public pricing = Free / Plus / Pro / Enterprise.
- Confirm monthly vs annual display and the exact numbers once the calculator lands.

## CTA
- [Book a Demo] · [Start with Plus]
