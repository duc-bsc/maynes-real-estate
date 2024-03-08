'use client'
import React from 'react';
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { getUrlImage } from '@/sanity/lib/client'
import Link from 'next/link';
import { PortableText } from '@portabletext/react'
export interface Props {
    data: any | null
    encodeDataAttribute?: EncodeDataAttributeCallback
}

const FarmsDetailPage = (props: Props) => {
    const { data } = props
    console.log("🚀 ~ FarmsDetailPage ~ data:", data?.details)
    const details = data?.details



    return (
        <div className='block max-w-5xl mx-auto' >
            <h3 className='text-xl' >Farm Details</h3>
            <ul className='ml-0 pt-1' >
                <li>
                    <strong>Presenting: </strong>
                    {details?.presenting}
                </li>
                <li>
                    <strong>Legal Description: </strong>
                    <PortableText
                        value={details?.legalDescription}
                    />
                </li>
                <li>
                    <strong>Price & Term: </strong>
                    <PortableText
                        value={details?.priceTerm}
                    />
                </li>
                <li>
                    <strong>Improvements: </strong>
                    <PortableText
                        value={details?.improvements}
                    />

                </li>
                <li>
                    <strong>Possession: </strong>
                    {details?.possession}
                </li>
                <li>
                    <strong>Tillable Acres: </strong>
                    <PortableText
                        value={details?.tillableAcres}
                    />
                </li>
                <li>
                    <strong>Comments: </strong>
                    <PortableText
                        value={details?.comments}
                    />
                </li>
                <li>
                    <strong>Taxes: </strong>
                    {details?.taxes}
                </li>
            </ul>

        </div>
    );
};

export default FarmsDetailPage;