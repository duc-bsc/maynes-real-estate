import React from 'react';
import { getUrlImage } from '@/sanity/lib/client'
import Link from 'next/link';
interface Props {
    data: any
}
const HeaderLayout = (props: Props) => {
    const { data } = props
    const logoSrc = getUrlImage(data?.logo?.asset)
    return (
        <div className='flex justify-center items-center' >
            <Link href={'/'} >
                {
                    logoSrc && (
                        <img src={logoSrc} alt="" className='block' />
                    )
                }
            </Link>

        </div>
    );
};

export default HeaderLayout;