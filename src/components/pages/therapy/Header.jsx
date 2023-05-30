import Container from "../../common/Container"
import { HeaderOne } from "../../common/Typgraphy"
import Quad from '../../../assets/quadimage.svg'

const Header = () => {
  return (
    <header className=" min-h-screen">
        <Container>
            <div className=" w-full h-full flex  ">
                <div className="w-1/2 pt-[120px] px-[10px]">
                    <HeaderOne invert={true} >CAREER THERAPY</HeaderOne>
                    <p className="text-[36px] ">
                        When work life gets <span className=" text-primary font-extrabold mr-5">messy</span> and difficult and complicated, empower yourself with our expert guidance to come out <span className=" text-primary font-extrabold">victorious.</span>
                    </p>
                </div>
                <div className="w-1/2 py-10 flex justify-end relative">
                    <img src={Quad} alt="" className=" absolute -right-32 top-5 w-[80rem]" />
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header