import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import HousesLayout from './HousesLayout'
const HousesPreview = dynamic(() => import('./HousesPreview'))
import { loadHouses } from '@/sanity/loader/loadQuery'
const PageHouse = async() => {
    const initial = await loadHouses()
    if (draftMode().isEnabled) {
      return <HousesPreview initial={initial} />
    }
  
    return <HousesLayout data={initial.data} />
};

export default PageHouse;