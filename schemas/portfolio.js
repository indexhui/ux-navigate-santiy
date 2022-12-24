export default {
  name: 'portfolio',
  type: 'document',
  title: 'Portfolio',
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
    // {
    //   title: 'Image',
    //   name: 'image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: 'relatedUrl',
      title: 'Related URL',
      type: 'urlWithMetadata',
    },
  ],
}
