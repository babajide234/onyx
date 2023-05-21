/* eslint-disable react/prop-types */

const Radio = ({label,id, name, ...rest}) => {
  return (
    <label htmlFor={id} className=" flex items-center text-base font-normal cursor-pointer ">
        <input type="radio" id={id} name={name} className=" mr-4 w-4 h-4" {...rest} />
        {label}
    </label>
  )
}

export default Radio