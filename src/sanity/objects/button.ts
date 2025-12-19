import { defineField, defineType } from "sanity";

export const button = defineType({
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      options: {
        allowRelative: true,
      },
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: ["primary", "outline"],
      },
      initialValue: "primary",
    }),
    defineField({
      name: "newTab",
      title: "New Tab",
      type: "boolean",
      initialValue: false,
    })
  ],
});