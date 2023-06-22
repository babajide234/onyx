import Container from "../../common/Container"
import IMG from "../../../assets/success.svg"
const SuccessPage = () => {
  return (
    <div className="w-full h-screen py-[170px]">
        <Container>
            <div className=" w-1/2 mx-auto text-center h-full flex flex-col justify-center items-center">
                <img src={IMG} alt="" className=" mb-7" />
                <h3 className=" font-bold text-3xl mb-6">Hooray! You’re One Step Closer to The Career of Your Dreams</h3>
                <p className=" font-normal text-base">We will send you an email with details on the next steps to take.</p>
            </div>
        </Container>
    </div>
  )
}

export default SuccessPage