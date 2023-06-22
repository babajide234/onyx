import { ServiceCard } from "../../common/Cards"
import Container from "../../common/Container"
import SectionHeading from "../../common/SectionHeading"
import { HeaderOne } from "../../common/Typgraphy"
import CardImage1 from "../../../assets/cr.png"
import CardImage2 from "../../../assets/ct.png"
import CardImage3 from "../../../assets/crw.png"
import CardImage4 from "../../../assets/cs.png"


const WhatWeDo = () => {

    const Resources = [
        {
            title:"Career Therapy",
            image:CardImage2,
            description:"Are you looking for career guidance? We can help you with that. Ranging from job search support, to career coaching and interview and salary negotiation tips, our Career Therapy service ensures you’re ready and set to land your dream job at your dream company.",
            disable:false
        },
        {
            title:"Career Resources",
            image:CardImage1,
            description:"Get Access to some of the top sites, resources, and networking events on jobs and careers for black people. These resources cut across several industries, guaranteeing that you find the right one for your career needs.",
            disable:false
        },
        {
            title:"Drop Your Company Review",
            image:CardImage3,
            description:"Tell us what we should know about the company you work at. Your reviews are anonymous and we never share private information with third parties.",
            disable:false
        },
        {
            title:"The OnyxBoard (Coming Soon)",
            image:CardImage4,
            description:"Discover the best places for black people to work with our company ratings compiled from thousands of entries.",
            disable:true
        },
    ]

  return (
    <div className="">
        <Container>
            <div className=" w-full h-full pt-[58px] pb-[300px]  md:py-[100px]">

                <SectionHeading>
                    <HeaderOne invert={true}>what we do</HeaderOne>
                    <p className=" text-[20px] md:text-[32px] px-[30px] md:px-[20rem] mb-5 md:mb-10">
                        <span className="font-extrabold">Dear Black professional,</span> <br/>Work where you’re welcomed. We can help you get there
                    </p>
                </SectionHeading>

                <div className=" pt-10 grid grid-cols-1 md:grid-cols-2 gap-[38px]">
                    {
                        Resources.map((item,index) => (
                            <ServiceCard 
                                key={index}
                                heading={item.title}
                                src={item.image} 
                                subText={item.description}
                                disabled={item.disable} 
                            />
                        ))
                    }

                </div>
            </div>
        </Container>
    </div>
  )
}

export default WhatWeDo