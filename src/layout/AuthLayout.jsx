/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Outlet, useNavigate } from "react-router-dom";
import LeftBg from "../components/pages/auth/LeftBg";
import userStore from "../store/usserStore";
import { useEffect } from "react";

const AuthLayout = ({ children }) => {
  const isLoggedIn = userStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/event");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex min-h-screen">
      <div className=" hidden md:block md:w-1/2">
        <LeftBg />
      </div>
      <div className=" px-[27px] py-[53px] md:px-[160px] md:py-[80px] w-full md:w-1/2">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
