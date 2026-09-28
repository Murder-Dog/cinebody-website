import { getCollection } from 'astro:content';
import { publishSlots } from './blog-schedule';

export type BlogPost = {
  id: string;
  body: string;
  queued: boolean;
  /** Queued posts: place in line, and whether the launch date is still unset. */
  order?: number;
  pending?: boolean;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    /** Set when a queued rewrite replaced an older post: the day it went live. */
    updatedDate?: Date;
    author: string;
    heroImage?: string;
    cardImage?: string;
  };
};

/** The date a post last went live: its update if rewritten, otherwise its publish date. */
export const liveDate = (p: BlogPost) => p.data.updatedDate ?? p.data.pubDate;
const byNewest = (a: BlogPost, b: BlogPost) => liveDate(b).getTime() - liveDate(a).getTime();

/** Stand-in date for posts waiting on the launch date; never treated as live. */
const NOT_SCHEDULED = new Date(Date.UTC(9999, 11, 31));

async function queued(): Promise<BlogPost[]> {
  const originals = new Map((await getCollection('blog')).map((p) => [p.id, p.data.pubDate]));
  const entries = (await getCollection('blogQueue')).sort(
    (a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id),
  );
  // Each post takes the next publishing day after the site launch, in order.
  const slots = publishSlots(entries.length);
  return entries.map((q, i) => {
    const { order, ...data } = q.data;
    const date = slots ? slots[i] : NOT_SCHEDULED;
    const original = originals.get(q.id);
    return {
      id: q.id,
      body: q.body ?? '',
      queued: true,
      order,
      pending: !slots,
      // A rewrite keeps the original publish date and shows when it was updated.
      // A brand-new post is simply published on its date.
      data: original ? { ...data, pubDate: original, updatedDate: date } : { ...data, pubDate: date },
    };
  });
}

/** Posts that are live as of the build: every live post, with any queued
 *  rewrite whose go-live date has arrived swapped in (or added). The site
 *  rebuilds daily so each queued post appears on its day. */
export async function getLivePosts(now = new Date()): Promise<BlogPost[]> {
  const posts = new Map<string, BlogPost>();
  for (const p of await getCollection('blog')) {
    posts.set(p.id, { id: p.id, body: p.body ?? '', queued: false, data: p.data });
  }
  for (const q of await queued()) {
    if (!q.pending && liveDate(q).getTime() <= now.getTime()) posts.set(q.id, q);
  }
  return [...posts.values()].sort(byNewest);
}

/** Queued posts that have not gone live yet, soonest first (for the preview pages). */
export async function getUpcomingPosts(now = new Date()): Promise<BlogPost[]> {
  return (await queued())
    .filter((q) => q.pending || liveDate(q).getTime() > now.getTime())
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
