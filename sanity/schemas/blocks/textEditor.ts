import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'textEditor',
    title: 'Text Editor',
    type: 'array',
    of: [
        defineArrayMember({
            lists: [],
            marks: {
                annotations: [],
                decorators: [
                    {
                        title: 'Italic',
                        value: 'em',
                    },
                    {
                        title: 'Strong',
                        value: 'strong',
                    },
                ],
            },
            styles: [],
            type: 'block',
        }),
    ],
    
})
