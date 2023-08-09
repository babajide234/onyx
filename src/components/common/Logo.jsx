import { Link, useLocation } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import WhiteLogo from "../../assets/logo-white.svg";
import userStore from "../../store/usserStore";

const Logo = () => {
  const { pathname } = useLocation();
  const isLoggedIn = userStore((state) => state.isLoggedIn);

  console.log(pathname);

  return (
    <Link to={isLoggedIn ? "/feed" : "/"} className="">
      {pathname == "/faq" || pathname == "/job" ? (
        <>
          <img
            src={WhiteLogo}
            alt=""
            className=" w-[46px] h-[24px] md:h-[44px]  md:w-20 md:hidden"
          />
          <img
            src={LogoImg}
            alt=""
            className=" w-[46px] h-[24px] md:h-[44px]  md:w-20 hidden md:block  "
          />
        </>
      ) : (
        <img
          src={LogoImg}
          alt=""
          className=" w-[46px] h-[24px] md:h-[44px]  md:w-20 "
        />
      )}
    </Link>
  );
};

export default Logo;
