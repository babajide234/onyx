/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Outlet } from "react-router-dom"
import LeftBg from "../components/pages/auth/LeftBg"

const AuthLayout = ({children}) => {
  return (
    <div className="flex min-h-screen">
        <div className=" hidden md:block md:w-1/2">
            <LeftBg/>
        </div>
        <div className=" px-[27px] py-[53px] md:px-[160px] md:py-[133px] w-full md:w-1/2">
            <Outlet/>
        </div>
    </div>
  )
}

export default AuthLayout