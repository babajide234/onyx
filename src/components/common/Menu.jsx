/* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom"
import { NavbarMenu } from "../../utils/util"
import Burger from '../../assets/burger.svg'
import siteStore from "../../store/siteStore";
import { RxHamburgerMenu } from "react-icons/rx";
const Menu = () => {

  const {pathname} = useLocation()

  const toggle = siteStore((state)=> state.toggleNav);

  const handleNav = ()=>{
    toggle();
  }
  
  return (
    <>
    <div className=" hidden md:flex">
        {
          NavbarMenu.map((item, index)=>(
              <NavLink exact  key={index} to={item.url} className={ (props) => { return props.isActive ? "mr-16 last-of-type:mr-0 text-primary font-bold":" mr-16 last-of-type:mr-0 text-text font-bold"}}>
                    {item.name}
              </NavLink>
            ))
          }
    </div>
    <button className=" flex md:hidden  " onClick={handleNav}>
      {/* <img src={Burger} alt="" className="" /> */}
      <RxHamburgerMenu className={` text-[30px] stroke-[1px] ${ pathname == '/job' || pathname == '/faq' ? 'text-white' : 'text-text'}`}/>
    </button>
    </>
  )
}

export default Menu