/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Sectionwrap = ({ src, text, direction}) => {
  return (
    <div className={` ${ direction == "right" ? " flex-row":" flex-row-reverse"} flex items-center mb-10 last-of-type:mb-0`}>
        <div className={`w-[60%] ${ direction == "right" ? "pr-[115px]":" pl-[115px]"} `}>
            <p className={` ${ direction == "right" ? "text-left":"text-left"} text-base text-white leading-[25px]`}>{text}</p>
        </div>
        <div className="w-[40%]">
            <img src={src} alt="" className="" />
        </div>
    </div>
  )
}

export default Sectionwrap