import { Link } from "react-router-dom"
import Button from "../components/common/Buttons"
import { FeedsCard } from "../components/common/Cards"
import Container from "../components/common/Container"
import { FaArrowLeft } from "react-icons/fa"

const Posts = () => {
  return (
    <div className=" w-full min-h-screen md:bg-cover" style={{
        background: 'linear-gradient(181.54deg, rgba(17, 17, 49, 0) 80.9%, #12122B 110%, #12122B 160%)'
    }}>

        <Container>
            <div className="md:pt-[105px] md:pb-[87px] pb-[50px]">
                <div className=" flex w-full justify-center md:justify-start mb-7 ">
                    <Link to="/event" className=" text-text flex items-center text-[32px] font-bold hover:text-primary"> <FaArrowLeft className=" hidden md:block mr-3"/>All post</Link>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 pt-[]">
                    <FeedsCard/>
                    <FeedsCard/>
                    <FeedsCard/>
                    <FeedsCard/>
                    <FeedsCard/>
                    <FeedsCard/>
                </div>
                <div className=" w-full flex justify-center pt-32">
                    <Button varient="contained" color="primary" size="medium">See more</Button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Posts