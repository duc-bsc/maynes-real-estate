import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'options',
  title: 'Options',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],
  preview: {
    select: {
      logo: 'logo',
    },
    prepare({logo}) {
      return {
        title: logo,
      }
    },
  },
})
