/* eslint-disable react/no-unknown-property */
import  { useState } from 'react';
import { RxEyeClosed } from 'react-icons/rx'
import { FiEye } from 'react-icons/fi'

const PasswordInput = ({...rest}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full border-b focus-within:border-primary border-solid border-[#737373] flex items-center">
      <input type={showPassword ? 'text' : 'password'} className="w-full py-[10px] outline-none text-xl placeholder:text-xl" {...rest} />
      <div className="relative cursor-pointer hover:text-primary text-[#737373] text-2xl" onClick={togglePasswordVisibility}>
        {
          showPassword ? 
            (
              <FiEye className="" />
            ) : (
              <RxEyeClosed className="" />
            )
        }
      </div>
    </div>
  )
}

export default PasswordInput