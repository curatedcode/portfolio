import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// export const blogPostSchema = z.object({
// 	id: z.number(),
// 	title: z.string().min(1),
// 	excerpt: z.string().min(1),
// 	date: z.string().min(1),
// 	author: z.string().min(1),
// 	tags: z.array(z.string()),
// 	slug: z.string().min(1)
// });

/**
 * @typedef {Object} BlogPost
 * @property {number} id - Unique identifier for the blog post
 * @property {string} title - The blog post title
 * @property {string} excerpt - A short summary of the post
 * @property {string} date - Publication date
 * @property {string} author - Author's name
 * @property {string[]} tags - Array of tags related to the post
 * @property {string} content - Full content of the post
 */
// const blog = defineCollection({
// 	loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
// 	schema: blogPostSchema
// });

export const caseStudySchema = z.object({
	id: z.number(),
	title: z.string().min(1),
	excerpt: z.string().min(1),
	date: z.string().min(1),
	author: z.string().min(1),
	slug: z.string().min(1),
});

/**
 * @typedef {Object} CaseStudy
 * @property {number} id - Unique identifier for the case study
 * @property {string} title - The case study title
 * @property {string} excerpt - A short summary
 * @property {string} date - Publication date
 * @property {string} author - Author's name
 * @property {string} content - Full content of the post
 */
const caseStudies = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/data/case-studies" }),
	schema: caseStudySchema,
});

export const collections = { caseStudies };
