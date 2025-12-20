import { Rule, defineArrayMember, defineField, defineType } from "sanity";

export const portfolioType = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "tag" }] })],
      validation: (rule: Rule) => rule.required().min(1).max(3),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineType({
      name: "websiteUrl",
      title: "Website URL",
      type: "url",
      options: {
        allowRelative: true,
      },
    }),
    defineType({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
      options: {
        allowRelative: true,
      },
    }),
  ],
});