import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { loadOptions } from '@/sanity/loader/loadQuery'

import HeaderLayout from './HeaderLayout'
const HeaderPreview = dynamic(() => import('./HeaderPreview'))

const Header = async() => {
    const initial = await loadOptions()
    if (draftMode().isEnabled) {
      return <HeaderPreview initial={initial} />
    }
  
    return <HeaderLayout data={initial.data} />
};

export default Header;