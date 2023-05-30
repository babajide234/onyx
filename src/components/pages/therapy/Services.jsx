import { ServiceExtendCard } from "../../common/Cards"
import Container from "../../common/Container"
import SectionHeading from "../../common/SectionHeading"
import Career from "../../../assets/career.png"
import ContactUs from "../../forms/ContactUs"

import { CAREERTHERAPYSERVICE } from "../../../utils/util"

const Services = () => {
  return (
    <div className=" w-full h-full">
        <Container>
            <SectionHeading>
                <p className=" mb-[15px] px-[150px] text-text text-base">A gentle reminder, friends: you shouldn’t have to start the week already looking forward to the end of the week. Purge your Sunday nights of pre-work week dread. From entry-level associate to executive-level leader, there’s a solution for your workplace challenges waiting on the other side of our initial conversation. Here’s how we can help.</p>
            </SectionHeading>
            <div className=" grid grid-cols-2 gap-11 px-[120px] h-full pb-[57px]">
              {
                CAREERTHERAPYSERVICE.map((item, index)=>(
                  <ServiceExtendCard key={index}  src={Career} heading={item.name} rate={item.rate} subText={item.text}/>
                ))
              }
                
            </div>
            <div className=" w-full py-16 px-[100px]">
              <div className=" w-full py-5 text-center">
                    <h2 className=" text-[48px] font-extrabold">Contact us</h2>
              </div>
              <ContactUs/>
            </div>
        </Container>
    </div>
  )
}

export default Services