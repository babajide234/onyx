import { useLocation } from "react-router-dom"
import Container from "../common/Container"
import Logo from "../common/Logo"
import Menu from "../common/Menu"
import MobileMenu from "../common/MobileMenu"
import NavbarButtonContainer from "../common/NavbarButtonContainer"

const Navbar = () => {

  const { pathname } = useLocation()
  console.log(pathname)
  const isTransparent = pathname == "/job" ||  pathname == "/faq" ? true : false;

  return (
    <>
    <div className={`w-full h-24 flex shadow-none md:shadow-navbar z-50 absolute inset-0 md:bg-white`}>
        <Container>
            <div className=" w-full h-full flex flex-row-reverse md:flex-row items-center justify-between">
                <Logo/>
                <Menu/>
                <NavbarButtonContainer/>
            </div>
        </Container>
    </div>
    <MobileMenu/>
    </>
  )
}

export default Navbar