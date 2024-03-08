'use client'

import { useOptions } from '@/sanity/loader/useQuery'

import FarmsLayout from './FarmsLayout'

type Props = {
    initial: Parameters<typeof useOptions>[0]
}


const FarmsPreview = (props:Props) => {
    const { data } = useOptions(props.initial)
    return <FarmsLayout data={data!} />
};

export default FarmsPreview;