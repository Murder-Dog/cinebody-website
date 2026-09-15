import { getCollection } from 'astro:content';

export type BlogPost = {
  id: string;
  body: string;
  queued: boolean;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    author: string;
    heroImage?: string;
    cardImage?: string;
  };
};

const byNewest = (a: BlogPost, b: BlogPost) => b.data.pubDate.getTime() - a.data.pubDate.getTime();

async function queued(): Promise<BlogPost[]> {
  return (await getCollection('blogQueue')).map((q) => ({
    id: q.id,
    body: q.body ?? '',
    queued: true,
    data: { ...q.data, pubDate: q.data.publishOn },
  }));
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
    if (q.data.pubDate.getTime() <= now.getTime()) posts.set(q.id, q);
  }
  return [...posts.values()].sort(byNewest);
}

/** Queued posts that have not gone live yet, soonest first (for the preview pages). */
export async function getUpcomingPosts(now = new Date()): Promise<BlogPost[]> {
  return (await queued())
    .filter((q) => q.data.pubDate.getTime() > now.getTime())
    .sort((a, b) => a.data.pubDate.getTime() - b.data.pubDate.getTime());
}
