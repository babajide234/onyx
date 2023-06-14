import Button from "./Buttons"

const NavbarButtonContainer = () => {
  return (
    <div className=" gap-3 hidden md:flex">
        <Button varient="empty" typpe="link" to="/login" color="default" size="small">Log in</Button>
        <Button varient="contained" typpe="link" to="/register" color="primary"  size="small">Sign up</Button>
    </div>
  )
}

export default NavbarButtonContainer