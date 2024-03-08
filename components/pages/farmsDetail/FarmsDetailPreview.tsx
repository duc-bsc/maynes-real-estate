'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { farmsBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

import FarmsDetailPage from './FarmsDetailPage'

type Props = {
    params: { slug: string }
    initial: QueryResponseInitial<any | null>
}

const FarmsDetailPreview = (props:Props) => {
    const { params, initial } = props
    const { data, encodeDataAttribute } = useQuery<any | null>(
        farmsBySlugQuery,
        params,
        { initial },
    )

    return <FarmsDetailPage data={data!} encodeDataAttribute={encodeDataAttribute} />
};

export default FarmsDetailPreview;