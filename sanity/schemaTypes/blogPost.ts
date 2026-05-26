import {defineField, defineType} from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Otsikko',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug / URL-osoite',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Kieli',
      type: 'string',
      options: {
        list: [
          {title: 'Suomi', value: 'fi'},
          {title: 'English', value: 'en'},
        ],
      },
      initialValue: 'fi',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Julkaisupäivä',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Lyhyt teksti etusivulle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Varsinainen teksti',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})