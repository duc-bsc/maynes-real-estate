import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    type: 'document',
    name: 'houses',
    title: 'House',
    icon: HomeIcon,
    fields: [
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            type: 'string',
            name: 'title',
            title: 'Title',
            validation: (rule) => rule.required(),
        },
        {
            type: 'number',
            name: 'price',
            title: 'Price',
        },
        {
            title: 'Status',
            name: 'status',
            type: 'string',
            options: {
                list: [
                    { title: 'Public', value: 'public' },
                    { title: 'Craft', value: 'craft' }
                ],
            }
        },
        {
            type: 'string',
            name: 'address',
            title: 'Address',
        },
        {
            type: 'string',
            name: 'contact',
            title: 'Contact',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'textEditor',

        },
        {
            name: 'basicListingInfo',
            title: 'Basic Listing Info',
            type: 'housesBasicListingInfo',

        },
        {
            name: 'generalDetails',
            title: 'General Details',
            type: 'housesGeneralDetails',

        },
        {
            name: 'lotDetails',
            title: 'House & Lot Details',
            type: 'houseLotDetails',

        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            address: 'address',
        },
        prepare({ title, media, address }) {
            return {
                subtitle: address,
                title,
                media
            }
        },
    },
})
