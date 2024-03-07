'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { housesBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

import HousesDetailPage from './HousesDetailPage'

type Props = {
    params: { slug: string }
    initial: QueryResponseInitial<any | null>
}

const HousesDetailPreview = (props:Props) => {
    const { params, initial } = props
    const { data, encodeDataAttribute } = useQuery<any | null>(
        housesBySlugQuery,
        params,
        { initial },
    )

    return <HousesDetailPage data={data!} encodeDataAttribute={encodeDataAttribute} />
};

export default HousesDetailPreview;