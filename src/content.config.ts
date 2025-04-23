import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    meta_description: z.string(),
    description: z.string(),
    state: z.enum(['live', 'in_development', 'exploring', 'pending']),
    launch_date: z.date()
  })
});

export const collections = { projects };
