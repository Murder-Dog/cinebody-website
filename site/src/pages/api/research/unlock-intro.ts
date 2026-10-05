import type { APIRoute } from 'astro';

// Verifies the investor-intro teaser password and, on success, sets the
// httpOnly unlock cookie that src/middleware.ts checks on GET
// /research/cinebody-investor-intro. Own gate, independent of
// unlock-update. Password compared server-side and never leaves the
// server; the cookie value is an opaque token, not the password.
export const prerender = false;

const PASSWORD = import.meta.env.RESEARCH_PASSWORD_INTRO || 'Cinebody2026Intro';
const COOKIE = 'cb_research_intro';
const TOKEN = 'cb-research-intro-unlocked-v1';

export const POST: APIRoute = async ({ request, cookies }) => {
  let password = '';
  try {
    const body = (await request.json()) as { password?: unknown };
    if (typeof body?.password === 'string') password = body.password;
  } catch {
    // malformed body -> treated as wrong password below
  }

  if (password !== PASSWORD) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    });
  }

  cookies.set(COOKIE, TOKEN, {
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
};
