// import BgContainer from "../../common/BgContainer";
import { EventCard } from "../../common/Cards";
import Container from "../../common/Container";
// import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
// import { SectionHeader } from "../../common/Typgraphy";
// import SubscribeForm from "../../forms/SubscribeForm";

import Button from "../../common/Buttons";
import postStore from "../../../store/postStore";

import EVE from "../../../assets/eventcard.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const Events = () => {
  const posts = postStore((state) => state.posts);
  return (
    <>
      <Container>
        <div className=" flex justify-between pb-20">
          <div className=" w-[60%]">
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-10 pr-10 py-10">
              {posts &&
                posts.data
                  .slice(0, 4)
                  .map((post, index) => <EventCard item={post} key={index} />)}
            </div>
            <div className="">
              <Link
                to="/"
                className="flex items-center p-3 hover:text-primary ">
                See more <FaArrowRight className=" ml-2 text-text" />
              </Link>
            </div>
          </div>
          <div className="  w-[35%] flex flex-col items-center py-10 bg-[#FBFBFB] rounded-3xl px-10 ">
            <div className=" bg-white mb-[3rem]  px-[2rem] py-[3.5rem] flex flex-col items-center justify-center text-center rounded-3xl">
              <h2 className=" text-[30px] font-bold mb-3">Take a Survey</h2>
              <p className=" mb-3">Contribute to finding safer workspaces</p>
              <Button
                typpe="link"
                varient="contained"
                color="primary"
                size="small">
                Start Now
              </Button>
            </div>
            <div className="">
              <div className=" bg-white w-[17.3rem] px-4 py-10 flex flex-col text-center items-center rounded-3xl">
                <h3 className=" text-2xl font-bold text-text mb-5">
                  Event title
                </h3>
                <img src={EVE} alt="" className=" w-full h-[10rem] mb-5 " />
                <p className=" mb-5">24th Feb, 2023 | Yaba, Lagos</p>
                <div className=" mb-5">
                  <Button
                    typpe={"link"}
                    varient="outlined"
                    color="secondary"
                    size="medium">
                    Register Now
                  </Button>
                </div>
                <Link to="" className=" underline text-base font-normal">
                  See more Events
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-end w-full">
          <div className="flex pb-[4.37rem] pt-[3.75rem]">
            <button className=" w-[41px] h-[41px] bg-primary flex justify-center items-center text-white text-2xl mr-[3px] last-of-type:mr-0">
              <RxCaretLeft />
            </button>
            <button className=" w-[41px] h-[41px] border border-solid border-primary flex justify-center items-center text-primary text-base mr-[3px] last-of-type:mr-0">
              1
            </button>
            <button className=" w-[41px] h-[41px] bg-primary flex justify-center items-center text-white text-2xl mr-[3px] last-of-type:mr-0">
              <RxCaretRight />
            </button>
          </div>
        </div> */}
      </Container>
      {/* <BgContainer>
        <Container>
          <div className=" text-center w-full pt-10 md:pt-20 md:pb-16">
            <SectionHeader size={"4rem"}>Events</SectionHeader>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.5rem]">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
          <div className="flex justify-end w-full">
            <div className="flex pb-[4.37rem] pt-[3.75rem]">
              <button className=" w-[41px] h-[41px] bg-white flex justify-center items-center text-text text-2xl mr-[3px] last-of-type:mr-0">
                <RxCaretLeft />
              </button>
              <button className=" w-[41px] h-[41px] border border-solid border-white flex justify-center items-center text-white text-base mr-[3px] last-of-type:mr-0">
                1
              </button>
              <button className=" w-[41px] h-[41px] bg-white flex justify-center items-center text-text text-2xl mr-[3px] last-of-type:mr-0">
                <RxCaretRight />
              </button>
            </div>
          </div>
          <div className="text-center w-full pt-[1.4rem] pb-[2rem]">
            <h2 className=" text-[40px] md:text-[48px] font-bold text-white">
              Subscribe
            </h2>
          </div>
          <div className="w-full pb-32">
            <SubscribeForm />
          </div>
        </Container>
      </BgContainer> */}
    </>
  );
};

export default Events;
