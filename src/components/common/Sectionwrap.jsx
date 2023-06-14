/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Sectionwrap = ({ src, text, direction}) => {
  return (
    <div className={` ${ direction == "right" ? "flex-col-reverse  md:flex-row ":" flex-col-reverse md:flex-row-reverse"} flex items-center mb-10 last-of-type:mb-0`}>
        <div className={` w-full md:w-[60%] ${ direction == "right" ? "md:pr-[115px]":" md:pl-[115px]"} `}>
            <p className={` ${ direction == "right" ? " text-justify md:text-left":" text-justify md:text-left"} text-sm md:text-base text-white leading-[25px]`}>{text}</p>
        </div>
        <div className=" w-full mb-5 md:w-[40%]">
            <img src={src} alt="" className="" />
        </div>
    </div>
  )
}

export default Sectionwrap