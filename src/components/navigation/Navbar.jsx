import Container from "../common/Container"
import Logo from "../common/Logo"
import Menu from "../common/Menu"
import NavbarButtonContainer from "../common/NavbarButtonContainer"

const Navbar = () => {
  return (
    <div className=" w-full h-24 flex shadow-navbar">
        <Container>
            <div className=" w-full h-full flex items-center justify-between">
                <Logo/>
                <Menu/>
                <NavbarButtonContainer/>
            </div>
        </Container>
    </div>
  )
}

export default Navbar