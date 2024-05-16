import { defineCollection, z } from "astro:content"

const aboutCollection = defineCollection({
  schema: z.object({
    title: z.any(),
    name: z.string(),
    designation: z.string(),
    location: z.any(),
    website: z.string()
  })
});

//const blogCollection = defineCollection({
//  schema: z.object({
//
//  })
//})

export const collections = {
  'about': aboutCollection
};
