// teamMember.js

export default {
    name: 'teammember',
    title: 'Team Member',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Name of the team member',
      },
      {
        name: 'URL',
        title: 'Image URL',
        type: 'url',
        description: 'URL of the image for the team member',
      },
      {
        name: 'linkedin',
        title: 'LinkedIn URL',
        type: 'url',
        description: 'LinkedIn profile URL of the team member',
      },
    ],
  };
  