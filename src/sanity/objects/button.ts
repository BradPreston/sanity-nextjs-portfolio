import { Rule, defineField, defineType } from "sanity";

export const button = defineType({
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      options: {
        allowRelative: true,
      },
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: ["primary", "outline"],
      },
      initialValue: "primary",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "newTab",
      title: "New Tab",
      type: "boolean",
      initialValue: false,
      validation: (rule: Rule) => rule.required(),
    })
  ],
});