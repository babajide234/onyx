/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { RxEyeClosed } from "react-icons/rx";
import { FiEye } from "react-icons/fi";

const PasswordInput = ({ error, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div
        className={`w-full border-b focus-within:border-primary border-solid mb-2 flex items-center ${
          error ? "border-red-500" : "border-[#737373]"
        }`}>
        <input
          type={showPassword ? "text" : "password"}
          className={`w-full py-[10px] outline-none text-xl placeholder:text-xl ${
            error
              ? " placeholder:text-red-500/70"
              : " placeholder:text-gray-400"
          } `}
          {...rest}
        />
        <div
          className="relative cursor-pointer hover:text-primary text-[#737373] text-2xl"
          onClick={togglePasswordVisibility}>
          {showPassword ? <FiEye className="" /> : <RxEyeClosed className="" />}
        </div>
      </div>
      {error && <div className="text-red-500 text-xs">{error}</div>}
    </>
  );
};

export default PasswordInput;
