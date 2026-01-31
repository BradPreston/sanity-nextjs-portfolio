
import { Rule, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "button" }],
      validation: (rule: Rule) => rule.max(2),
    }
  ],
});