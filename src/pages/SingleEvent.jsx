import { FaArrowLeft } from "react-icons/fa"
import Container from "../components/common/Container"
import EventBg from "../components/common/EventBg"
import { Link } from "react-router-dom"
import IMG from '../assets/singleevent.png'
import { EventCard } from "../components/common/Cards"
const SingleEvent = () => {
  return (
    <EventBg>
        <Container>
            <div className=" pt-[105px] pb-[87px] ">
                <div className=" flex w-full justify-start mb-7 ">
                    <Link to="/event" className=" text-white flex items-center text-[32px] font-bold hover:text-primary"> <FaArrowLeft className=" mr-3"/> Event name</Link>
                </div>
                <div className=" w-full pb-7">
                    <img src={IMG} alt="" className=" w-full" />
                </div>
                <div className=" w-full pb-16">
                    <h3 className=" text-white text-[2rem] mb-[23px] font-bold">Event title</h3>
                    <p className=" text-white text-base mb-[23px]">
                    Lorem ipsum dolor sit amet consectetur. Viverra pellentesque quis et massa elementum. Nulla nunc elit lacus volutpat tempus odio massa. Enim habitant est lectus tristique. Rhoncus lacus felis nunc duis amet viverra. Leo non proin vitae interdum in. Nibh amet nunc mauris ut massa. Placerat gravida faucibus amet curabitur duis. Cursus sodales nascetur sed blandit vitae. Et feugiat turpis risus ultricies cum eget ut tempus magnis. Et auctor senectus suspendisse feugiat proin bibendum nullam et elit. Facilisis accumsan lobortis accumsan gravida massa a et magna lacinia. Vel in porttitor aliquet condimentum adipiscing aliquet velit et. Ac dictum magnis nisl velit
                    </p>

                    <div className=" flex flex-col">
                        <h3 className="text-white text-base mb-[23px]">
                            <span className=" font-bold">Category: </span>
                            Software Development
                        </h3>
                        <h3 className=" text-white text-base">
                            <span className=" font-bold">Date: </span>
                            24th Feb, 2023
                        </h3>
                    </div>
                </div>
                <div className=" flex w-full justify-start pb-[56px] ">
                    <h2 className=" text-white flex items-center text-[32px] font-bold">More events</h2>
                </div>
                <div className="grid grid-cols-3 gap-9">
                    <EventCard/>
                    <EventCard/>
                    <EventCard/>
                </div>
            </div>
        </Container>
    </EventBg>
  )
}

export default SingleEvent