import type { APIRoute } from 'astro';

// This handler never actually runs. src/middleware.ts intercepts every
// request to this exact path and returns its own Response (the gate page,
// or the real investor-intro HTML) without calling next() - this file
// exists only so Astro registers the route, which is what makes the Vercel
// adapter wire /research/cinebody-investor-intro through the edge
// middleware function instead of falling through to a static 404.
export const prerender = false;

export const GET: APIRoute = () => new Response(null, { status: 500 });
