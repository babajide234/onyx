import Container from "../../common/Container"
import { HeaderOne } from "../../common/Typgraphy"

const Header = () => {
  return (
    <header className=" md:min-h-screen">
    <Container>
        <div className=" w-full h-full flex flex-col md:flex-row pt-24">
            <div className=" w-full md:w-1/2 text-center pt-[80px] md:pt-[120px] md:px-[10px]">
                <HeaderOne invert={true} >About us</HeaderOne>
                <p className="text-[24px] md:text-[36px] mb-5 ">
                    Dear Black <span className=" text-primary font-extrabold mr-5">professional,</span> Work where you’re welcomed. We can help you get there.
                </p>
                <p className=" text-sm  md:text-base">The Onyx Truth is a people-focused, data-centered agency that empowers Black professionals and colleagues invested in our advancement with tools and support to make informed, pro-Black career and hiring decisions.</p>
            </div>
            <div className=" w-full md:w-1/2 py-10 flex justify-end relative">
            </div>
        </div>
    </Container>
</header>
  )
}

export default Header