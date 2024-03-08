import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    type: 'document',
    name: 'farms',
    title: 'Farms',
    icon: HomeIcon,
    fields: [
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            type: 'string',
            name: 'location',
            title: 'Location',
        },
        {
            type: 'number',
            name: 'total',
            title: 'Total',
        },
        {
            type: 'number',
            name: 'price',
            title: 'Price',
        },
        {
            type: 'farmsAgent',
            name: 'agent',
            title: 'Agent',
        },
        {
            type: 'farmsDetails',
            name: 'details',
            title: 'Details',
        },
       
    ],
    preview: {
        select: {
            title: 'location',
            media: 'thumbnail',
        },
        prepare({ title, media, }) {
            return {
                // subtitle: address,
                title,
                media
            }
        },
    },
})
