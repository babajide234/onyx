import Container from "../../common/Container"
import { HeaderOne } from "../../common/Typgraphy"

const Header = () => {
  return (
    <header className=" min-h-screen">
    <Container>
        <div className=" w-full h-full flex  ">
            <div className="w-1/2 pt-[120px] px-[10px]">
                <HeaderOne invert={true} >About us</HeaderOne>
                <p className="text-[36px] mb-5 ">
                    Dear Black <span className=" text-primary font-extrabold mr-5">professional,</span> Work where you’re welcomed. We can help you get there.
                </p>
                <p className=" text-base">The Onyx Truth is a people-focused, data-centered agency that empowers Black professionals and colleagues invested in our advancement with tools and support to make informed, pro-Black career and hiring decisions.</p>
            </div>
            <div className="w-1/2 py-10 flex justify-end relative">
            </div>
        </div>
    </Container>
</header>
  )
}

export default Header