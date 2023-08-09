/* eslint-disable no-unused-vars */
import Container from "../../common/Container";
import { HeaderOne } from "../../common/Typgraphy";
import IMG1 from "../../../assets/aboutimage1.png";
import IMG2 from "../../../assets/aboutimage2.png";
import IMG3 from "../../../assets/aboutimage3.png";
import IMG4 from "../../../assets/aboutimage4.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  return (
    <header className="md:min-h-screen">
      <Container>
        <div className=" w-full h-full flex flex-col md:flex-row py-[100px]">
          <div className=" w-full md:w-1/2 text-center pt-[80px] md:pt-[120px] md:px-[10px]">
            <HeaderOne invert={true}>About us</HeaderOne>
            <p className="text-[24px] md:text-[36px] mb-5 ">
              Dear Black{" "}
              <span className=" text-primary font-extrabold">
                Professional,
              </span>
              Work where you’re welcomed. We can help you get there.
            </p>
            <p className=" text-sm  md:text-base">
              The Onyx Truth is a people-focused, data-centered agency that
              empowers Black professionals and colleagues invested in our
              advancement with tools and support to make informed, pro-Black
              career and hiring decisions.
            </p>
          </div>
          <div className=" w-full md:w-1/2 py-10 flex justify-end relative">
            <div className=" relative flex gap-5">
              <motion.img
                ref={ref1}
                initial={{ y: 500 }}
                animate={inView1 ? { y: 0 } : { y: 500 }}
                exit={{ y: 500 }}
                transition={{ duration: 1 }}
                src={IMG1}
                alt=""
                className=""
              />
              <motion.img
                ref={ref2}
                initial={{ y: -500 }}
                animate={inView2 ? { y: 50 } : { y: -500 }}
                transition={{ duration: 1 }}
                src={IMG2}
                alt=""
                className=""
              />
              <motion.img
                ref={ref3}
                initial={{ y: 500 }}
                animate={inView3 ? { y: 0 } : { y: 500 }}
                exit={{ y: 500 }}
                transition={{ duration: 1 }}
                src={IMG3}
                alt=""
                className=""
              />
              <motion.img
                ref={ref4}
                initial={{ y: -500 }}
                animate={inView4 ? { y: 50 } : { y: -500 }}
                transition={{ duration: 1 }}
                src={IMG4}
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
