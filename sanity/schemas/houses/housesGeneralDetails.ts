import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'housesGeneralDetails',
    title: 'General Details',
    type: 'object',
    fields: [
        {
            name: 'roof',
            title: 'Roof',
            type: 'string',

        },
        {
            name: 'walls',
            title: 'Walls',
            type: 'string',

        },
        {
            name: 'insulation',
            title: 'Insulation',
            type: 'boolean',

        },
        {
            name: 'heatingSystem',
            title: 'Heating System',
            type: 'string',

        },
        {
            name: 'heatingSystem',
            title: 'Heating System',
            type: 'string',

        },
        {
            name: 'hotWaterHeater',
            title: 'Hot Water Heater',
            type: 'string',

        },
       
    ],

})
