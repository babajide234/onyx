/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";
import { NavbarMenu } from "../../utils/util";
// import Burger from '../../assets/burger.svg'
import siteStore from "../../store/siteStore";
import { RxHamburgerMenu } from "react-icons/rx";
import userStore from "../../store/usserStore";
const Menu = () => {
  const { pathname } = useLocation();

  const toggle = siteStore((state) => state.toggleNav);
  const isLoggedIn = userStore((state) => state.isLoggedIn);

  const handleNav = () => {
    toggle();
  };

  return (
    <>
      <div className=" hidden md:flex">
        {NavbarMenu.map((item, index) => (
          <NavLink
            exact
            key={index}
            to={true && item.url === "/" ? "/feed" : item.url}
            className={(props) => {
              return props.isActive
                ? "mr-16 last-of-type:mr-0 text-primary font-bold capitalize"
                : " mr-16 last-of-type:mr-0 text-text font-bold capitalize";
            }}>
            {item.name}
          </NavLink>
        ))}
      </div>
      <button className=" flex md:hidden  " onClick={handleNav}>
        {/* <img src={Burger} alt="" className="" /> */}
        <RxHamburgerMenu
          className={` text-[30px] stroke-[1px] ${
            pathname == "/job" || pathname == "/faq"
              ? "text-white"
              : "text-text"
          }`}
        />
      </button>
    </>
  );
};

export default Menu;
