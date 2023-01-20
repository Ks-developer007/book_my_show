import React, { useState } from "react";
import HeroSlider from "react-slick"
import { NextArrow } from "./Arrows.Component";
import { PrevArrow } from "./Arrows.Component";

const HeroCarousel = ()=>{
    const [images,setimages] = useState([])

    const settingsLG = {
        arrows: true,
        slidesToShow:1,
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        autoplay: true,
        speed: 2000,
        autoplayspeed: 2000,
        cssEase:"linear",


    }
    const settings = {
        arrows: true,
        slidesToShow:1,
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        autoplay: true,
        speed: 2000,
        autoplayspeed: 2000,
        cssEase:"linear",

    }

    return (
     <>
    <div className="lg:hidden">
        <HeroSlider {...settings}>
        {images.map((image)=>(
                <div className="w-full h-56 md:h-80 py-3">
                    <img 
                    src="https://assets-in.bmscdn.com/promotions/cms/creatives/1674045370747_freeweb.jpg"  
                    alt="Herobanner"
                    lassName="w-full h-full rounded-md object-cover" 
                    />
                    </div>
        ))};
        </HeroSlider>
    </div>
     <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
        {images.map((image)=>(
                <div className="w-full h-56 md:h-80 py-3">
                    <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1674108010073_rahulkolweb.jpg" 
                     alt="Herobanner"
                     className="w-full h-full rounded-md object-cover" />
                    </div>

        ))};
        </HeroSlider>
    </div>
    </>
    );
 };


export default HeroCarousel;