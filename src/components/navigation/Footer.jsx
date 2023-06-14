import { Link } from "react-router-dom"
import Container from "../common/Container"
import { FaFacebook,FaTwitter } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <div className=" w-full h-28 bg-black">
        <Container>
            <div className="flex flex-col-reverse  md:flex-row w-full h-full text-center items-center justify-center">
                <p className=" text-white text-xs">© 2023 OnyxTruth. All rights reserved.&nbsp;
                  <Link to="/terms" className=" underline mr-2">Terms and Conditions</Link>
                </p>
                <div className="flex mb-3 md:mb-0">
                  <a href="https://www.facebook.com/OnyxTruth/" className=" mr-8 md:mr-2 text-white text-3xl md:text-4xl  hover:text-primary"><FaTwitter/></a>
                  <a href="https://www.facebook.com/OnyxTruth/" className=" mr-8 md:mr-2 text-white text-3xl md:text-4xl  hover:text-primary"><FaFacebook/></a>
                  <a href="https://www.facebook.com/OnyxTruth/" className=" mr-8 md:mr-2 text-white text-3xl md:text-4xl  hover:text-primary"><AiFillInstagram/></a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer