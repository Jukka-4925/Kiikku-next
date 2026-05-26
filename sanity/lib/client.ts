import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'd8yeiq5x',
  dataset: 'production',
  apiVersion: '2026-05-26',
  useCdn: false,
})