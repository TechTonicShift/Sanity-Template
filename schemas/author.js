// author.js (Schema file)

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the author',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      description: 'Link associated with the author',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Caption for the author',
    },
  ],
};
