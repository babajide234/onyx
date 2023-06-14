import Container from "../../common/Container"
import { FaqCard } from "../../common/Cards"
import { FAQs } from "../../../utils/util"
import BgContainer from "../../common/BgContainer"

const FaqSetion = () => {
  return (
    <BgContainer>
            <Container>
                <div className=" flex justify-center w-full pt-24 mt-0 md:mt-24 md:pt-10">
                  <h1 className="text-white text-[40px] font-bold ">FAQs</h1>
                </div>
                <div className=" py-[40px]">
                  {
                    FAQs.map((item, index)=>(
                      <FaqCard key={index} question={item.name} answer={item.answer}/>
                      ))
                    }
                </div>
            </Container>
    </BgContainer>
  )
}

export default FaqSetion