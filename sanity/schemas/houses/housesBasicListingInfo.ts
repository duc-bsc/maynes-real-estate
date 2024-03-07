import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'housesBasicListingInfo',
    title: 'houses Basic Listing Info',
    type: 'object',
    fields: [
        {
            name: 'county',
            title: 'County',
            type: 'string',

        },
        {
            name: 'squareFeet',
            title: 'Square Feet',
            type: 'number',

        },
        {
            name: 'lotSizeWidth',
            title: 'Lot Size Width',
            type: 'number',

        },
        {
            name: 'lotSizeHeight',
            title: 'Lot Size Height',
            type: 'number',

        },
        {
            name: 'yearBuilt',
            title: 'Year Built',
            type: 'number',

        },
        {
            name: 'noOfBedrooms',
            title: 'No. of Bedrooms',
            type: 'number',

        },
        {
            name: 'noOfBathrooms',
            title: 'No. of Bathrooms',
            type: 'number',

        },
    ],

})
