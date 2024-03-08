import { defineArrayMember, defineField, defineType } from 'sanity'
export default defineType({
    name: 'farmsAgent',
    title: 'Agent',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string',
        },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'number',
        }
    ],
})
