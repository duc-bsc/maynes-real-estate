import React from 'react';
import { getUrlImage } from '@/sanity/lib/client'
import Link from 'next/link';
import { PortableText } from '@portabletext/react'
interface Props {
    data: any
}

const HousesLayout = (props: Props) => {
    const { data } = props
    return (
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3' >
            {
           data && data?.length > 0&&     data?.map((item: any) => (
                    <div className='relative' >
                        <img className='block w-full' src={getUrlImage(item?.mainImage)} alt="" />
                        <div className='p-2' >
                            <ul className='ml-0 pb-3' >
                                <li>
                                    <strong>Price: </strong>
                                    <span>{item?.price}</span>
                                </li>
                                <li>
                                    <strong>Status: </strong>
                                    <span>{item?.status}</span>
                                </li>
                                <li>
                                    <strong>Address: </strong>
                                    <span>{item?.address}</span>
                                </li>
                                <li>
                                    <strong>Contact: </strong>
                                    <span>{item?.contact}</span>
                                </li>
                                <li>
                                    <strong>Description: </strong>

                                    <span><PortableText
                                        value={item?.description}
                                    /></span>
                                </li>
                            </ul>

                            <Link href={item?.slug?.current || ''} className='bg-green-700 text-white p-2 inline-flex'  > See Detail</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default HousesLayout;