/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import LOGO from "../../assets/logo.png";

const AuthContainer = ({ head, subhead, children }) => {
  return (
    <div className=" w-full ">
      <div className=" w-full flex justify-center mb-[50px]">
        <Link to="/">
          <img src={LOGO} alt="" className=" w-[83px] h-[47px]" />
        </Link>
      </div>
      <div className="">
        <div className=" mb-10">
          <h1 className=" text-[36px] font-bold">{head}</h1>
          <p className=" text-base ">{subhead}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
