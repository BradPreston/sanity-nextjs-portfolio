
import { Rule, defineArrayMember, defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [defineArrayMember({ type: "button" })],
      validation: (rule: Rule) => rule.max(2),
    })
  ],
});