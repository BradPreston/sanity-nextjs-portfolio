import { Rule, defineType } from "sanity";

export const portfolioType = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
      validation: (rule: Rule) => rule.required().min(1).max(3),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "websiteUrl",
      title: "Website URL",
      type: "url",
      options: {
        allowRelative: true,
      },
    },
    {
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
      options: {
        allowRelative: true,
      },
    },
  ],
});