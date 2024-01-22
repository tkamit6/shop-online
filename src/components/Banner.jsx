'use client'
import bannerOne from "@/images/bannerone.jpg"
import bannerTwo from "@/images/bannertwo.jpg"
import bannerThree from "@/images/bannerthree.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi"
import Image from "next/image";
import BannrText from "./BannrText";

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div className="bg-slate-100 p-3 hover:bg-orange-600 absolute">
            <PiCaretRightLight />
        </div>
    )
}
const PreArrow = (props) => {
    const { onCick } = props;
    return (
        <div>
            <PiCaretLeftLight />
        </div>
    )
}

export default function Banner() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        NextArrow: <NextArrow />,
        PreArrow: <PreArrow />,
    };



    return (
        <div className="relative sm:pb-8">
            <Slider {...settings}>
                <div className="w-full relative">
                    <Image src={bannerOne} alt="banner" className="w-full h-full relative" />
                   <BannrText title={"Look Bold"} /> 
                </div>
                <div className="w-full relative">
                    <Image src={bannerTwo} alt="banner" className="w-full h-full relative" />
                   <BannrText title={"Shop Now"} /> 
                </div>
                <div className="w-full relative">
                    <Image src={bannerThree} alt="banner" className="w-full h-full relative" />
                   <BannrText title={"Best Ever"} /> 
                </div>
            </Slider>
            <div className="w-full h-20 bg-gradient-to-t from-gray-50/50 to-transaparent bottom-0 left-0 z-10 absolute"/>
        </div>
    )
}
