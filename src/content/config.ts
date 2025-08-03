import { defineCollection, z } from "astro:content";

const placesCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    visit_date: z.string(),
    snippet: z.string(),
    thoughts: z.string(),
    thumbnail_url: z.string(),
    scores: z.object({
      food: z.number(),
      service: z.number(),
      aesthetics: z.number(),
      bathroom: z.number().optional(),
    }),
    location: z.object({
      country: z.string(),
    }),
    website_url: z.string().optional(),
    has_wifi: z.boolean().optional(),
    more_images: z.array(z.string()).optional(),
  }),
});
export const collections = {
  places: placesCollection,
};
