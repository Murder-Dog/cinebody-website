import { getCollection } from 'astro:content';

export type BlogPost = {
  id: string;
  body: string;
  queued: boolean;
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

async function queued(): Promise<BlogPost[]> {
  const originals = new Map((await getCollection('blog')).map((p) => [p.id, p.data.pubDate]));
  return (await getCollection('blogQueue')).map((q) => {
    const original = originals.get(q.id);
    return {
      id: q.id,
      body: q.body ?? '',
      queued: true,
      // A rewrite keeps the original publish date and shows when it was updated.
      // A brand-new post is simply published on its date.
      data: original
        ? { ...q.data, pubDate: original, updatedDate: q.data.publishOn }
        : { ...q.data, pubDate: q.data.publishOn },
    };
  });
}

/** Posts that are live as of the build: every live post, with any queued
 *  rewrite whose publishOn date has arrived swapped in (or added). The site
 *  rebuilds daily so each queued post appears on its day. */
export async function getLivePosts(now = new Date()): Promise<BlogPost[]> {
  const posts = new Map<string, BlogPost>();
  for (const p of await getCollection('blog')) {
    posts.set(p.id, { id: p.id, body: p.body ?? '', queued: false, data: p.data });
  }
  for (const q of await queued()) {
    if (liveDate(q).getTime() <= now.getTime()) posts.set(q.id, q);
  }
  return [...posts.values()].sort(byNewest);
}

/** Queued posts that have not gone live yet, soonest first (for the preview pages). */
export async function getUpcomingPosts(now = new Date()): Promise<BlogPost[]> {
  return (await queued())
    .filter((q) => liveDate(q).getTime() > now.getTime())
    .sort((a, b) => liveDate(a).getTime() - liveDate(b).getTime());
}
