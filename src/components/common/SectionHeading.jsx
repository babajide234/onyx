/* eslint-disable react/prop-types */

const SectionHeading = ({children}) => {
  return (
    <div className="w-full text-center flex flex-col items-center">
        {children}
        <div className=" w-[213px] bg-[#969696] h-[1px] block"></div>
    </div>
  )
}

export default SectionHeading