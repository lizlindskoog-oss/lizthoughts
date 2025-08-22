
// /src/content/config.ts
import { defineCollection, z } from 'astro:content';

const strategyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  strategy: strategyCollection,
};
