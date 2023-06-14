import Container from "../../common/Container"
import SectionHeading from "../../common/SectionHeading"

const SectionMid = () => {
  return (
    <div className="">
        <Container>
            <div className=" py-11 md:px-[180px]">
                <SectionHeading>
                    <p className=" text-sm md:text-base leading-[35px] text-center mb-10">
                        <span className=" font-extrabold mb-5">
                            Fact: organizational structures were not created to boost your experiences, your culture or your Blackness.
                        </span>
                        <br/>
                            That’s why we’re here. Our suite of expert career coaching, individualized mentorship and real-life reviews of employers by their Black staff members—past and present—is the inside intel you’ve needed at some point.<br/>
                            And now you have it. We’re glad you’re here. 
                        <br/>
                            Connect with us. Browse our resources. Join our community.
                        <br/>
                        <span className=" font-extrabold">
                            You’ll never have to go into a new job saying “I wish I knew” ever again. 
                        </span>
                    </p>
                </SectionHeading>
            </div> 
        </Container>
    </div>
  )
}

export default SectionMid