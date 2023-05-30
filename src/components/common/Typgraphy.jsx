/* eslint-disable react/prop-types */

export const HeaderOne = ({invert,children}) => {
  return (
    <h2 className={` ${ invert ? 'text-text': 'text-white'} mb-6 font-normal font-['Manrope'] uppercase tracking-[1.13em]`}>{children}</h2>
  )
}
