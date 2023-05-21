import { NavLink } from "react-router-dom"
import { NavbarMenu } from "../../utils/util"

const Menu = () => {
  return (
    <div className="">
        {
            NavbarMenu.map((item, index)=>(
                <NavLink key={index} to={item.url} className=" mr-16 last-of-type:mr-0 text-text font-bold">
                    {item.name}
                </NavLink>
            ))
        }
    </div>
  )
}

export default Menu