/* eslint-disable react/prop-types */

const RadioCol = ({label,id, name, ...rest}) => {
  return (
    <label htmlFor={id} className=" flex flex-col items-center text-base font-normal cursor-pointer ">
        {label}
        <input type="radio" id={id} name={name} className=" mt-3 w-4 h-4" {...rest} />
    </label>
  )
}

export default RadioCol