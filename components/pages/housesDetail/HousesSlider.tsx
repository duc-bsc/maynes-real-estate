'use client'
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getUrlImage } from '@/sanity/lib/client'
type Props = {
    items: any[]
}
const HousesSlider = (props: Props) => {
    const { items } = props
    console.log("🚀 ~ HousesSlider ~ items:", items)

    const [nav1, setNav1] = useState<any>(null);
    const [nav2, setNav2] = useState<any>(null);
    let sliderRef1: any = useRef(null);
    let sliderRef2: any = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <div className="pt-5" >
            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                {
                    items?.map((item: any, i: number) => {


                        return (
                            <div key={i} className="px-2" >
                                <img src={getUrlImage(item || '')} alt="" />
                            </div>
                        )
                    })
                }

            </Slider>
            <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                {
                    items?.map((item: any, i: number) => {


                        return (
                            <div key={i} className="px-2" >
                                <img src={getUrlImage(item || '')} alt="" />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
};

export default HousesSlider;