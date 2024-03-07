import { defineArrayMember, defineField, defineType } from 'sanity'
export default defineType({
    name: 'houseLotDetails',
    title: 'House & Lot Details',
    type: 'object',
    fields: [
        {
            name: 'style',
            title: 'Style',
            type: 'string',
        },
        {
            name: 'stories',
            title: 'Stories',
            type: 'number',
        },
        {
            name: 'streetPaved',
            title: 'Street Paved',
            type: 'boolean',
        },
        {
            name: 'garage',
            title: 'Garage',
            type: 'string',
        },
        {
            name: 'basement',
            title: 'Basement',
            type: 'string',
        },
        {
            name: 'foundation',
            title: 'Foundation',
            type: 'string',
        },
        {
            name: 'porchPatio',
            title: 'Porch/Patio',
            type: 'string',
        },
        {
            name: 'deck',
            title: 'Deck',
            type: 'string',
        },
        {
            name: 'school',
            title: 'School',
            type: 'string',
        },
        {
            name: 'zoning',
            title: 'Zoning',
            type: 'string',
        },
    ],
})
