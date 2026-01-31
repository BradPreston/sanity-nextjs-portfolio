import { Rule, defineType } from "sanity";

export const button = defineType({
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      options: {
        allowRelative: true,
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: ["primary", "outline"],
      },
      initialValue: "primary",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "newTab",
      title: "New Tab",
      type: "boolean",
      initialValue: false,
      validation: (rule: Rule) => rule.required(),
    }
  ],
});