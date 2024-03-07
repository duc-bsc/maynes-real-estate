import React from 'react';
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { getUrlImage } from '@/sanity/lib/client'
import Link from 'next/link';
import { PortableText } from '@portabletext/react'
import HousesSlider from './HousesSlider';
export interface Props {
    data: any | null
    encodeDataAttribute?: EncodeDataAttributeCallback
}

const HousesDetailPage = (props: Props) => {
    const { data } = props
    return (
        <div className='block max-w-5xl mx-auto' >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
                <div>
                    <img className='block w-full' src={getUrlImage(data?.mainImage || '')} alt="" />
                </div>
                <div>
                    <ul className='ml-0 pb-3' >
                        <li>
                            <strong>Price: </strong>
                            <span>{data?.price}</span>
                        </li>
                        <li>
                            <strong>Status: </strong>
                            <span>{data?.status}</span>
                        </li>
                        <li>
                            <strong>Address: </strong>
                            <span>{data?.address}</span>
                        </li>
                        <li>
                            <strong>Contact: </strong>
                            <span>{data?.contact}</span>
                        </li>
                        <li>
                            <strong>Description: </strong>

                            <span><PortableText
                                value={data?.description}
                            /></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-5">
                <div>
                    <h3 className='text-xl font-bold' >Basic Listing Info</h3>
                    <ul className='ml-0 pt-2' >
                        <li>
                            <strong>County: </strong>
                            <span>{data?.basicListingInfo?.county}</span>
                        </li>
                        <li>
                            <strong>Square Feet: </strong>
                            <span>{data?.basicListingInfo?.squareFeet}</span>
                        </li>
                        <li>
                            <strong>Lot Size Width: </strong>
                            <span>{data?.basicListingInfo?.lotSizeWidth}</span>
                        </li>
                        <li>
                            <strong>Lot Size Height: </strong>
                            <span>{data?.basicListingInfo?.lotSizeHeight}</span>
                        </li>
                        <li>
                            <strong>Year Built : </strong>
                            <span>{data?.basicListingInfo?.yearBuilt}</span>
                        </li>
                        <li>
                            <strong>No. of Bedrooms: </strong>
                            <span>{data?.basicListingInfo?.noOfBedrooms}</span>
                        </li>
                        <li>
                            <strong>No. of Bathrooms: </strong>
                            <span>{data?.basicListingInfo?.noOfBathrooms}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold' >House & Lot Details</h3>
                    <ul className='ml-0 pt-2' >
                        <li>
                            <strong>Style: </strong>
                            <span>{data?.lotDetails?.style}</span>
                        </li>
                        <li>
                            <strong>Stories: </strong>
                            <span>{data?.lotDetails?.stories} Story</span>
                        </li>
                        <li>
                            <strong>Street Paved: </strong>
                            <span>{data?.lotDetails?.streetPaved ? 'Yes' : 'No'}</span>
                        </li>
                        <li>
                            <strong>Garage: </strong>
                            <span>{data?.lotDetails?.garage}</span>
                        </li>
                        <li>
                            <strong>Basement: </strong>
                            <span>{data?.lotDetails?.basement}</span>
                        </li>
                        <li>
                            <strong>Foundation: </strong>
                            <span>{data?.lotDetails?.foundation}</span>
                        </li>
                        <li>
                            <strong>Porch/Patio: </strong>
                            <span>{data?.lotDetails?.porchPatio}</span>
                        </li>
                        <li>
                            <strong>Deck: </strong>
                            <span>{data?.lotDetails?.deck}</span>
                        </li>
                        <li>
                            <strong>School: </strong>
                            <span>{data?.lotDetails?.school}</span>
                        </li>
                        <li>
                            <strong>Zoning: </strong>
                            <span>{data?.lotDetails?.zoning}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold' >Utilities Information</h3>


                    <ul className='ml-0 pt-2' >
                        <li>
                            <strong>Utilities: </strong>
                            {/* <span>{data?.basicListingInfo?.county}</span> */}
                        </li>
                        <li>
                            <strong>Gas: </strong>
                            {/* <span>{data?.basicListingInfo?.county}</span> */}
                        </li>
                        <li>
                            <strong>Water: </strong>
                            {/* <span>{data?.basicListingInfo?.county}</span> */}
                        </li>
                        <li>
                            <strong>Sewer: </strong>
                            {/* <span>{data?.basicListingInfo?.county}</span> */}
                        </li>

                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold' >Terms & Taxes</h3>
                    <ul className='ml-0 pt-2' >
                        <li>
                            <strong>Terms: </strong>
                            {/* <span>{data?.basicListingInfo?.county}</span> */}
                        </li>
                        <li>
                            <strong>Taxes: </strong>
                            {/* <span>{data?.basicListingInfo?.county}</span> */}
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold' >Additional Information</h3>
                    <ul className='ml-0 pt-2' >
                        <li>
                            <strong>Personal Property Included: </strong>
                            <span>{data?.additionalInformation?.personalPropertyIncluded}</span>
                        </li>
                        <li>
                            <strong>Kitchen Details: </strong>
                            <span>

                                <PortableText
                                    value={data?.additionalInformation?.kitchenDetails || null}
                                />
                            </span>
                        </li>
                        <li>
                            <strong>Items Retained by Sellers: </strong>
                            <span>
                                <PortableText
                                    value={data?.additionalInformation?.itemsRetainedBySellers || null}
                                />
                            </span>
                        </li>
                        <li>
                            <strong>Additional Comments: </strong>
                            <span>
                                <PortableText
                                    value={data?.additionalInformation?.additionalComments || null}
                                />
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold' >General Details</h3>
                    <ul className='ml-0 pt-2' >
                        <li>
                            <strong>Roof: </strong>
                            <span>{data?.generalDetails?.roof}</span>
                        </li>
                        <li>
                            <strong>Walls: </strong>
                            <span>{data?.generalDetails?.walls}</span>
                        </li>
                        <li>
                            <strong>Insulation: </strong>
                            <span>{data?.generalDetails?.insulation}</span>
                        </li>
                        <li>
                            <strong>Heating System: </strong>
                            <span>{data?.generalDetails?.heatingSystem}</span>
                        </li>
                        <li>
                            <strong>Cooling System: </strong>
                            <span>{data?.generalDetails?.coolingSystem}</span>
                        </li>
                        <li>
                            <strong>Hot Water Heater: </strong>
                            <span>{data?.generalDetails?.hotWaterHeater}</span>
                        </li>
                    </ul>
                </div>
            </div>
            {
                data?.additionalInformation?.gallery?.images &&
                data?.additionalInformation?.gallery?.images?.length>0 &&
                <HousesSlider
                items={data?.additionalInformation?.gallery?.images}
                />
            }
           
        </div>
    );
};

export default HousesDetailPage;