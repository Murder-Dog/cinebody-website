import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    pubDate: z.coerce.date(),
    author: z.string().default('Cinebody'),
    heroImage: z.string().optional(),
    cardImage: z.string().optional(),
    // Manual crop focal point "x y" (0..1, e.g. "0.5 0.3"). Applied by
    // scripts/recrop-blog.mjs; omit to use the default smart crop.
    focal: z.string().optional(),
  }),
});

// Rewrites and new posts waiting to go live, in order. Their dates are worked out
// from the site launch date (src/lib/blog-schedule.ts): two a week from launch. A
// queued post with the same id as a live post replaces it on its day and shows
// "Updated" with that date; until then the live post stays as it is.
const blogQueue = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-queue' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    /** Place in line. Dates come from the site launch date (src/lib/blog-schedule.ts). */
    order: z.number().int().positive(),
    author: z.string().default('Cinebody'),
    heroImage: z.string().optional(),
    cardImage: z.string().optional(),
    focal: z.string().optional(),
  }),
});

export const collections = { blog, blogQueue };
