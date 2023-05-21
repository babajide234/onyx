import Button from "./Buttons"

const NavbarButtonContainer = () => {
  return (
    <div className="">
        <Button type="link" to="/" varient="empty" size="">Log in</Button>
        <Button type="link" to="/" varient="contained" size="">Sign up</Button>
    </div>
  )
}

export default NavbarButtonContainer