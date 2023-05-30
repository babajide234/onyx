/* eslint-disable react/prop-types */

const Container = ({children}) => {
  return (
    <div className=" w-full h-full px-[25px] md:px-[7.5rem]">
        {children}
    </div>
  )
}

export default Container