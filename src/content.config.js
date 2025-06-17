// src/content/config.js
import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const docsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/docs" }),
  // Type-check your frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // Add other properties you expect
  }),
});


export const collections = {
  'docs': docsCollection,
};