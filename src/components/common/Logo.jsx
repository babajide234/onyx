import { Link, useLocation } from "react-router-dom"
import LogoImg from '../../assets/logo.png'
import WhiteLogo from '../../assets/logo-white.svg'

const Logo = () => {
  const {pathname} = useLocation()
  
  console.log(pathname)

  return (
    <Link to='' className="">
        <img src={ pathname == '/job' || pathname == '/faq'  ? WhiteLogo :LogoImg } alt="" className=" w-[46px] h-[24px] md:h-[44px]  md:w-20" />
    </Link>
  )
}

export default Logo