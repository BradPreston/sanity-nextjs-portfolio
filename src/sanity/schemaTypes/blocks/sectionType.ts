import { defineArrayMember, defineField, defineType } from "sanity";

export const sectionType = defineType({
  name: "section",
  title: "Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "checklist" }),
        defineArrayMember({ type: "button" }),
      ],
    },
  ],
});