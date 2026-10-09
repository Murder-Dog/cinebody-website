import type { APIRoute } from 'astro';

// This handler never actually runs. src/middleware.ts handles the real
// POST /api/research/unlock-investor logic directly (password check + cookie)
// without calling next() - this file exists only so Astro registers the
// route, which is what makes the Vercel adapter wire this path through the
// edge middleware function instead of falling through to a static 404.
// Handling it there instead of here specifically avoids the edge-to-
// serverless-function hop that calling next() for a route Astro treats as
// dynamic would otherwise require (see middleware.ts header comment).
export const prerender = false;

export const POST: APIRoute = () => new Response(null, { status: 500 });
