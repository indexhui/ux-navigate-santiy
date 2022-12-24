export default {
  name: 'book',
  type: 'document',
  title: 'Book',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      title: 'Recommend',
      name: 'recommend',
      type: 'text',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'tag',
      name: 'tag',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
  ],
}
