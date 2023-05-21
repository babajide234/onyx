import { Link } from "react-router-dom"
import LogoImg from '../../assets/logo.png'

const Logo = () => {
  return (
    <Link to='' className="">
        <img src={LogoImg} alt="" className=" w-20" />
    </Link>
  )
}

export default Logo