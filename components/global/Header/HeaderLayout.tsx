import React from 'react';
import {getUrlImage} from '@/sanity/lib/client'
interface Props {
    data: any
  }
const HeaderLayout = (props:Props) => {
    const { data } = props
    const logoSrc =getUrlImage(data?.logo?.asset)
    return (
        <div className='flex justify-center items-center' >
            {
                logoSrc && (
                    <img src={logoSrc} alt="" className='block' />
                )
            }
        </div>
    );
};

export default HeaderLayout;