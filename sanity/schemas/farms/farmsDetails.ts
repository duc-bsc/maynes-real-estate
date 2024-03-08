import { defineArrayMember, defineField, defineType } from 'sanity'
export default defineType({
    name: 'farmsDetails',
    title: 'Details',
    type: 'object',
    fields: [
        {
            name: 'presenting',
            title: 'Presenting',
            type: 'string',
        },
        {
            name: 'legalDescription',
            title: 'Legal Description',
            type: 'textEditor',
        },
        {
            name: 'priceTerm',
            title: 'Price & Term',
            type: 'textEditor',
        },
        {
            name: 'improvements',
            title: 'Improvements',
            type: 'textEditor',
        },
        {
            name: 'possession',
            title: 'Possession',
            type: 'string',
        },
        {
            name: 'tillableAcres',
            title: 'Tillable Acres',
            type: 'textEditor',
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'textEditor',
        },
        {
            name: 'taxes',
            title: 'Taxes',
            type: 'string',
        }
    ],
})
