import { type SchemaTypeDefinition } from 'sanity'
import { pageType } from './pageType'
import { button } from '../objects/button'
import { heroType } from './blocks/heroType'
import { siteSettingsType } from './siteSettingsType'
import { sectionType } from './blocks/sectionType'
import { checklistType } from './blocks/checklistType'
import { portfolioType } from './portfolioType'
import { tagType } from './tagType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, heroType, button, siteSettingsType, sectionType, checklistType, portfolioType, tagType],
}
