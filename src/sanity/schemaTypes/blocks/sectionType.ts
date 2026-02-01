import { defineType } from "sanity";

export const sectionType = defineType({
  name: "section",
  title: "Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        { type: "checklist" },
        { type: "button" },
        { 
          type: "reference",
          name: "portfolioReference",
          to: [{ type: "portfolio" }]
        }
      ],
    },
  ],
});