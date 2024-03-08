import React from 'react';
import { getUrlImage } from '@/sanity/lib/client'
import Link from 'next/link';
import { PortableText } from '@portabletext/react'
interface Props {
    data: any
}

const FarmsLayout = (props: Props) => {
    const { data } = props
    return (
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3' >
            {
           data && data?.length > 0&&     data?.map((item: any) => (
                    <div className='relative' >
                        <img className='block w-full' src={getUrlImage(item?.thumbnail)} alt="" />
                        <div className='p-2' >
                            <ul className='ml-0 pb-3' >
                                <li>
                                    <strong>Location: </strong>
                                    <span>{item?.location}</span>
                                </li>
                                <li>
                                    <strong>Total Acres: </strong>
                                    <span>{item?.total} acres</span>
                                </li>
                                <li>
                                    <strong>Price: </strong>
                                    <span>{item?.price}</span>
                                </li>
                                <li>
                                    <strong>Agent Contact: </strong>
                                    <span>{item?.agent?.name}-{item?.agent?.phone}</span>
                                </li>
                              
                            </ul>

                            <Link href={'/farms/' +item?.slug?.current || ''} className='bg-green-700 text-white p-2 inline-flex'  > See Detail</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default FarmsLayout;