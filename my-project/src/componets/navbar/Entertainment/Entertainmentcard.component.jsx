import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props)=>{
    return (
        <>
        <div className="w-full h-30 px-2">
            <img 
            src="{props.src}" 
            alt="Entertainment" 
            className="w-full h-full rounded-lg" />
        </div>

        
        </>

    );

}
const EntertainmentCardSlider = ()=>{
    const EntertainmentImage = ["https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NDc4LjdLIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323848-ekwsewfjzy-portrait.jpg",
"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4yLzEwICA4LjVLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00336450-wjhmepgnzc-portrait.jpg",
"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAyMDMuMksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-bdbylvqqwb-portrait.jpg",
"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MS41SyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00344704-rrjhgxnakp-portrait.jpg",
"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OTk1IGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00346558-rfdwzvxxul-portrait.jpg",

                                ];




    const settings = {
        infinite:false,
        autoplay:false,
        slidesToShaow:5,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase:"linear",
    };


    return(
    <>
    <Slider {...settings}>
        {EntertainmentImage.map((image)=>(
        <EntertainmentImage src={image} />

        ))}

    </Slider>

    </>
    )
}
export default EntertainmentCardSlider;