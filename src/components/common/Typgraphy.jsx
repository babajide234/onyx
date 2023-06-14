/* eslint-disable react/prop-types */

export const HeaderOne = ({invert,children}) => {
  return (
    <h2 className={` ${ invert ? 'text-text': 'text-white'} text-sm md:text-base mb-6 font-normal font-['Manrope'] uppercase tracking-[1.03em] md:tracking-[1.13em]`}>{children}</h2>
  )
}
export const SectionHeader = ({size, invert,children}) => {
  return (
    <h2 className={` ${ invert ? 'text-text': 'text-white'} mb-6 font-bold capitalize text-[40px] md:text-[${size}]`}>{children}</h2>
  )
}
