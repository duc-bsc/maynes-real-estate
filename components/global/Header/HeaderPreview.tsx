'use client'

import { useOptions } from '@/sanity/loader/useQuery'

import HeaderLayout from './HeaderLayout'

type Props = {
    initial: Parameters<typeof useOptions>[0]
}


const HeaderPreview = (props: Props) => {
    const { data } = useOptions(props.initial)
    return <HeaderLayout data={data!} />
};

export default HeaderPreview;