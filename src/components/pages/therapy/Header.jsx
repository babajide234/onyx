import Container from "../../common/Container";
import { HeaderOne } from "../../common/Typgraphy";
import Quad from "../../../assets/quadimage.svg";

const Header = () => {
  return (
    <header className=" min-h-[600px] md:min-h-screen pb-[146px] md:pb-0">
      <Container>
        <div className=" w-full h-full flex flex-col-reverse md:flex-row pt-24">
          <div className=" w-full md:w-1/2 md:pt-[120px] md:px-[10px] pt-8 text-center">
            <HeaderOne invert={true}>CAREER THERAPY</HeaderOne>
            <p className=" text-[22px] md:text-[36px] ">
              When work life gets{" "}
              <span className=" text-primary font-extrabold">messy</span> and
              difficult and complicated, empower yourself with our expert
              guidance to come out{" "}
              <span className=" text-primary font-extrabold">victorious.</span>
            </p>
          </div>
          <div className=" w-full md:w-1/2 md:py-10 flex justify-center md:justify-end relative">
            <img
              src={Quad}
              alt=""
              className=" w-[294px] md:absolute -right-32 md:top-5 md:w-[80rem]"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
