import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

import { categoryNames } from "./data/categories";

const articles = defineCollection({
  loader: glob({
    base: "./src/content/articles",
    pattern: "**/*.md"
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),

    category: z.enum(categoryNames),

    author: z.string(),

    pubDate: z.coerce.date(),

    readingTime: z.number().default(5),

    draft: z.boolean().default(false)
  })
});

export const collections = {
  articles
};