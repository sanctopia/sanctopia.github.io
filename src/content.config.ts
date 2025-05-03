import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    meta_description: z.string(),
    description: z.string(),
    state: z.enum(["Live", "En développement", "Phase d'exploration"]),
    launch_date: z.date(),
    image_card: image()
  })
});

export const collections = { projects };
