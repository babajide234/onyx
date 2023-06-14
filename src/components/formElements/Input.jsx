/* eslint-disable react/prop-types */

const Input = ({invert,...rest}) => {
  return (
    <input type="text" className={`w-full outline-none px-5 py-4 rounded-md border border-solid ${ invert ? "bg-transparent border-gray-600 hover:border-gray-200 hover:placeholder:text-gray-200 text-white": 'border-secondary/10 focus:border-primary/30'}`} {...rest} />
  )
}

export default Input