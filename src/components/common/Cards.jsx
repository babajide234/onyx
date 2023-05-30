/* eslint-disable react/prop-types */

import Button from "./Buttons"

export const ServiceCard = ({src, disabled,heading, subText}) => {
  return (
    <div className=" relative w-full bg-white shadow-servicard hover:shadow-servicard_hover rounded-[10px] hover:cursor-pointer overflow-hidden">
        <div className=" w-full h-[242px] bg-gray-400 bg-cover" style={{backgroundImage: `url(${src})`}}>

        </div>
        <div className=" w-full h-[252px] p-[30px]">
            <h3 className=" text-[24px] font-bold leading-[188%] text-text font-[Raleway]">{heading}</h3>
            <p className=" text-text text-base leading-[188%] font-[Raleway]">{subText}</p>
        </div>
        {
           disabled && <div className="absolute top-0 left-0 w-full h-full bg-white/70"></div>
        } 
    </div>
  )
}
export const ServiceExtendCard = ({src, disabled,heading, subText}) => {
  return (
    <div className=" relative w-full bg-white shadow-lg hover:shadow-servicard_hover rounded-[10px] hover:cursor-pointer overflow-hidden">
        <div className=" w-full h-[292px] bg-gray-400 bg-cover" style={{backgroundImage: `url(${src})`}}>

        </div>
        <div className=" w-full min-h-[252px] p-[30px]">
            <h3 className=" text-[24px] font-bold leading-[188%] text-text font-['Raleway']">{heading}</h3>
            <p className=" text-text text-base leading-[188%] font-['Raleway'] mb-3">{subText}</p>
            <Button typpe="link" varient="contained" color="primary" size="full">Get Started</Button>
        </div>
        {
           disabled && <div className="absolute top-0 left-0 w-full h-full bg-white/70"></div>
        } 
    </div>
  )
}
