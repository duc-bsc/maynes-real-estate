import { defineArrayMember, defineField, defineType } from 'sanity'
export default defineType({
    name: 'houseAdditionalInformation',
    title: 'Additional Information',
    type: 'object',
    fields: [
        {
            name: 'kitchenDetails',
            title: 'Kitchen Details',
            type: 'textEditor',
        },
        {
            name: 'itemsRetainedBySellers',
            title: 'Items Retained by Sellers',
            type: 'textEditor',
        },
        {
            name: 'additionalComments',
            title: 'Additional Comments',
            type: 'textEditor',
        },
        {
            name: 'gallery',
            type: 'object',
            title: 'Gallery',
            fields: [
                {
                    name: 'images',
                    type: 'array',
                    title: 'Images',
                    of: [
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image',
                            options: {
                                hotspot: true,
                            },
                            fields: [
                                {
                                    name: 'alt',
                                    type: 'string',
                                    title: 'Alternative text',
                                },
                            ],
                        },
                    ],
                    options: {
                        layout: 'grid',
                    },
                }
            ]
        }
    ],
})
