import { defineCollection, z, reference } from "astro:content";
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
    image_card: image(),
    image_hero: image(),
    url: z.string(),
    position: z.number(),
    volunteers_needed: z.array(reference('volunteers')).optional()
  })
});

const volunteers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/volunteers" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    meta_description: z.string(),
    description: z.string(),
    skills: z.array(z.string()),
    project: reference('projects').optional()
  })
})

export const collections = { projects, volunteers };
