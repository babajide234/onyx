import Container from "../common/Container"
import Logo from "../common/Logo"
import Menu from "../common/Menu"
import MobileMenu from "../common/MobileMenu"
import NavbarButtonContainer from "../common/NavbarButtonContainer"

const Navbar = () => {
  return (
    <>
    <div className=" w-full h-24 flex shadow-none md:shadow-navbar z-50 absolute inset-0">
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