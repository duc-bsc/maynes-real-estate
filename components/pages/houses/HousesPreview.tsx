'use client'

import { useOptions } from '@/sanity/loader/useQuery'

import HousesLayout from './HousesLayout'

type Props = {
    initial: Parameters<typeof useOptions>[0]
}


const HousesPreview = (props:Props) => {
    const { data } = useOptions(props.initial)
    return <HousesLayout data={data!} />
};

export default HousesPreview;