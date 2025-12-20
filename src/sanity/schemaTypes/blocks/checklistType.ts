import { Rule, defineArrayMember, defineField, defineType } from 'sanity';

export const checklistType = defineType({
	name: 'checklist',
	title: 'Checklist',
	type: 'object',
	fields: [
		defineField({
			name: 'items',
			title: 'Items',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					fields: [
						defineField({
							name: 'title',
							title: 'Title',
							type: 'string',
              validation: (rule: Rule) => rule.required(),
						}),
						defineField({
							name: 'proficiency',
							title: 'Proficiency',
							type: 'string',
							options: {
								list: ['Proficient', 'Familiar']
							},
              validation: (rule: Rule) => rule.required(),
						})
					],
          preview: {
            select: {
              title: 'title',
              proficiency: 'proficiency'
            },
            prepare({ title, proficiency }) {
              return {
                title,
                subtitle: proficiency
              };
            }
          }
				})
			],
      validation: (rule: Rule) => rule.required().min(1).max(6),
		})
	],
  preview: {
    prepare() {
      return {
        title: 'Checklist'
      };
    },
  }
});
