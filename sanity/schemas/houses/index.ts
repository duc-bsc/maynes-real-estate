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
                    { title: 'Craft', value: 'craft' },
                    { title: 'For Sale', value: 'forSale' },
                ],
            }
        },
        {
            type: 'string',
            name: 'address',
            title: 'Address',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'address',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
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
        {
            name: 'additionalInformation',
            title: 'Additional Information',
            type: 'houseAdditionalInformation',

        },
    ],
    preview: {
        select: {
            title: 'address',
            media: 'mainImage',
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
