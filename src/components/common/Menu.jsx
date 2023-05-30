/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import { NavbarMenu } from "../../utils/util"
import Burger from '../../assets/burger.svg'
const Menu = () => {

  const handleNav = ()=>{

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
      <img src={Burger} alt="" className="" />
    </button>
    </>
  )
}

export default Menu