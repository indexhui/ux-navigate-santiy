export default {
  name: 'website',
  type: 'document',
  title: 'Website',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
    {
      title: 'Authors',
      name: 'authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'author' }],
        },
      ],
    },
    {
      title: 'Colors',
      name: 'color',
      type: 'array',
      of: [
        {
          type: 'string',
          name: 'color',
          tile: 'color',
        },
      ],
    },
    {
      title: 'ColorStyle',
      name: 'colorStyle',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'colorStyle' }],
        },
      ],
    },
    {
      title: 'tag',
      name: 'tag',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tagWebsite' }],
        },
      ],
    },
    {
      title: 'Industry',
      name: 'industry',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'industry' }],
        },
      ],
    },
    // {
    //   title: 'A little description',
    //   name: 'description',
    //   type: 'text',
    // },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
