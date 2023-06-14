import { motion } from "framer-motion"
import { MdOutlineClose } from 'react-icons/md'
import { NavLink } from "react-router-dom"
import siteStore from "../../store/siteStore"
import { NavbarMenu } from "../../utils/util"

const MobileMenu = () => {
  const isOpen = siteStore((state)=> state.isSidebar);
  const toggle = siteStore((state)=> state.toggleNav);

  const closeMenu = () => {
    toggle();
  };

return (
    <motion.div 
        initial={{ opacity: 0, x: "-100%" }}
        animate={ isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" } }
        exit={{ opacity: 0, x: "-100%" }}
        className={` fixed inset-0 z-50 w-[333px] bg-black h-[483px] flex flex-col px-[35px] py-[40px]`}
    >
        <div className="">
            <button className=" text-white" onClick={closeMenu}> <MdOutlineClose className="text-4xl "/> </button>
        </div>
        <ul className="">
            {
              NavbarMenu.map((item,index)=>(
                <li key={index} className=" py-[22px] ">
                  <NavLink to={item.url} className=" text-white text-lg leading-[120%] font-medium" onClick={closeMenu} >{item.name}</NavLink></li>

              ))
            }
        </ul>
    </motion.div>
  )
}

export default MobileMenu