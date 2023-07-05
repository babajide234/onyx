/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { RxArrowRight } from "react-icons/rx";
import Button from "./Buttons";
import { useState } from "react";
import { motion } from "framer-motion";
import IMG from "../../assets/event1.png";
import { Link } from "react-router-dom";

export const ServiceCard = ({ src, disabled, heading, subText }) => {
  return (
    <div className=" relative w-full bg-white shadow-servicard hover:shadow-servicard_hover rounded-[10px] hover:cursor-pointer overflow-hidden">
      <div
        className=" w-full h-[242px] bg-gray-400 bg-cover"
        style={{ backgroundImage: `url(${src})` }}></div>
      <div className=" w-full h-[252px] p-[30px]">
        <h3 className=" text-[24px] font-bold leading-[188%] text-text font-[Raleway]">
          {heading}
        </h3>
        <p className=" text-text text-base leading-[188%] font-[Raleway]">
          {subText}
        </p>
      </div>
      {disabled && (
        <div className="absolute top-0 left-0 w-full h-full bg-white/70"></div>
      )}
    </div>
  );
};

export const ServiceExtendCard = ({
  src,
  rate,
  disabled,
  heading,
  subText,
}) => {
  return (
    <div className=" relative w-full bg-white shadow-lg hover:shadow-servicard_hover rounded-[10px] hover:cursor-pointer overflow-hidden">
      <div
        className=" w-full h-[292px] bg-gray-400 bg-cover"
        style={{ backgroundImage: `url(${src})` }}></div>
      <div className=" w-full min-h-[252px] p-[30px] flex flex-col">
        <h3 className=" text-[22px] font-bold leading-[188%] text-text font-['Raleway']">
          {heading}
        </h3>
        <h4 className=" font-bold text-base my-4 text-primary">{rate}</h4>
        <p className=" text-text text-base leading-[188%] font-['Raleway'] mb-3">
          {subText}
        </p>
        <Button typpe="link" varient="contained" color="primary" size="full">
          Get Started
        </Button>
      </div>
      {disabled && (
        <div className="absolute top-0 left-0 w-full h-full bg-white/70"></div>
      )}
    </div>
  );
};

export const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track open/close

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle open/close state
  };

  return (
    <motion.div
      className={`w-full px-5 py-5 md:px-[59px] md:py-[39px] border border-white rounded-[10px] hover:border-primary hover:cursor-pointer group mb-10 ${
        isOpen ? "open" : ""
      }`}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}>
      <div className="w-full flex justify-start items-center">
        <RxArrowRight
          className={` text-[20px] md:text-[30px] text-white font-bold mr-5 group-hover:text-primary ${
            isOpen ? "open" : ""
          }`}
        />
        <motion.h2
          className={` text-[20px] md:text-[36px] text-white font-bold group-hover:text-primary ${
            isOpen ? "open" : ""
          }`}>
          {question}
        </motion.h2>
      </div>
      {isOpen && (
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}>
          <motion.p
            className=" text-[16px] md:text-[24px] text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            {answer}
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

export const FeedsCard = ({ src, heading, subText }) => {
  return (
    <Link
      to="/posts/4"
      className=" relative w-full bg-white group  hover:cursor-pointer overflow-hidden">
      <div
        className=" w-full h-[242px] bg-gray-400 bg-cover group-hover:shadow-2xl"
        style={{ backgroundImage: `url(${IMG})` }}></div>
      <div className=" w-full h-[252px] py-[18px]">
        <h3 className=" text-[24px] font-bold leading-[188%] text-text mb-4 font-[Raleway]">
          Heading text
        </h3>
        <p className=" text-text text-base leading-[188%] font-[Raleway] mb-2">
          Black professionals and colleagues invested in our advancement with
          tools and support to make informed,
        </p>
        <div className="flex justify-between">
          <h3 className=" text-base font-bold">By: Dasola</h3>
          <p className="text-base font-normal">19th February, 2023</p>
        </div>
      </div>
    </Link>
  );
};

export const EventCard = ({ item }) => {
  return (
    <Link
      to={`/event/${item?.postCategoryId}`}
      className=" relative w-full bg-white group  hover:cursor-pointer overflow-hidden rounded-xl hover:shadow-2xl ">
      <div
        className=" w-full h-[242px] bg-gray-400 bg-cover "
        style={{ backgroundImage: `url(${IMG})` }}></div>
      <div className=" w-full py-3 pl-2 pr-5">
        <h3 className=" text-[20px] font-bold leading-[188%] text-text mb-2 font-[Raleway]">
          {item?.title}
        </h3>
        <p className="mb-[10px] text-sm font-normal">{item?.intorduction}</p>
      </div>
    </Link>
  );
};
