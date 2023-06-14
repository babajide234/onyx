import BgContainer from '../../common/BgContainer'
import { EventCard, FeedsCard } from '../../common/Cards'
import Container from '../../common/Container'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { SectionHeader } from '../../common/Typgraphy'
import SubscribeForm from '../../forms/SubscribeForm'

const Events = () => {
  return (
    <>
    <Container>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeedsCard/>
            <FeedsCard/>
            <FeedsCard/>
            <FeedsCard/>
            <FeedsCard/>
            <FeedsCard/>
            <FeedsCard/>
        </div>
        <div className="flex justify-end w-full">

            <div className="flex pb-[4.37rem] pt-[3.75rem]">
                <button className=" w-[41px] h-[41px] bg-primary flex justify-center items-center text-white text-2xl mr-[3px] last-of-type:mr-0"><RxCaretLeft/></button>
                <button className=" w-[41px] h-[41px] border border-solid border-primary flex justify-center items-center text-primary text-base mr-[3px] last-of-type:mr-0">1</button>
                <button className=" w-[41px] h-[41px] bg-primary flex justify-center items-center text-white text-2xl mr-[3px] last-of-type:mr-0"><RxCaretRight/></button>
            </div>
        </div>

    </Container>
    <BgContainer>
        <Container>
            <div className=" text-center w-full pt-10 md:pt-20 md:pb-16">
                <SectionHeader size={"4rem"}>Events</SectionHeader>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.5rem]">
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </div>
            <div className="flex justify-end w-full">
                <div className="flex pb-[4.37rem] pt-[3.75rem]">
                    <button className=" w-[41px] h-[41px] bg-white flex justify-center items-center text-text text-2xl mr-[3px] last-of-type:mr-0"><RxCaretLeft/></button>
                    <button className=" w-[41px] h-[41px] border border-solid border-white flex justify-center items-center text-white text-base mr-[3px] last-of-type:mr-0">1</button>
                    <button className=" w-[41px] h-[41px] bg-white flex justify-center items-center text-text text-2xl mr-[3px] last-of-type:mr-0"><RxCaretRight/></button>
                </div>
            </div>
            <div className="text-center w-full pt-[1.4rem] pb-[2rem]">
                <h2 className=' text-[40px] md:text-[48px] font-bold text-white'>Subscribe</h2>
            </div>
            <div className="w-full pb-32">
                <SubscribeForm/>
            </div>
        </Container>
    </BgContainer>
    </>
  )
}

export default Events