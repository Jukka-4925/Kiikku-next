'use client'

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId: 'd8yeiq5x',
  dataset: 'production',
  plugins: [structureTool({structure})],
  schema: {
    types: schemaTypes,
  },
})