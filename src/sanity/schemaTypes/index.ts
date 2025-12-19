import { type SchemaTypeDefinition } from 'sanity'
import { pageType } from './pageType'
import { button } from '../objects/button'
import { heroType } from './blocks/heroType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, heroType, button],
}
