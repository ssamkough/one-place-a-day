import { defineCollection, z } from "astro:content";

const placesCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    website_url: z.string().optional(),
    has_wifi: z.boolean().optional(),
    scores: z
      .object({
        food: z.number(),
        service: z.number(),
        aesthetics: z.number(),
        bathroom: z.number().optional(),
      })
      .optional(),
    location: z.object({
      country: z.string(),
    }),
    thoughts: z.string(),
    initial_visit_date: z.string(),
    // created_date: z.date().transform((str) => new Date(str)),
    // updated_date: z.date().transform((str) => new Date(str)),
  }),
});
export const collections = {
  places: placesCollection,
};
