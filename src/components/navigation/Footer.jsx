import { Link } from "react-router-dom";
import Container from "../common/Container";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" w-full h-28 bg-black">
      <Container>
        <div className="flex flex-col-reverse  md:flex-row w-full h-full text-center items-center justify-center">
          <p className=" text-white text-xs">
            © 2023 The Onyx Truth. All rights reserved.&nbsp;
            <Link to="/terms" className=" underline mr-2">
              Terms and Conditions
            </Link>
          </p>
          <div className="flex mb-3 ml-0 md:mb-0 md:ml-3">
            <a
              href="https://twitter.com/the_onyxtruth"
              className=" mr-8 md:mr-2 text-white text-3xl md:text-2xl  hover:text-primary">
              <FaTwitter />
            </a>
            <a
              href="https://web.facebook.com/The-Onyx-Truth-100446776464517"
              className=" mr-8 md:mr-2 text-white text-3xl md:text-2xl  hover:text-primary">
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/the_onyxtruth/"
              className=" mr-8 md:mr-2 text-white text-3xl md:text-2xl hover:text-primary">
              <AiFillInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/the-onyx-truth-756a4a283/"
              className=" mr-8 md:mr-2 text-white text-3xl md:text-2xl  hover:text-primary">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
