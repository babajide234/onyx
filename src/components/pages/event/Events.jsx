// import BgContainer from "../../common/BgContainer";
import { EventCard } from "../../common/Cards";
import Container from "../../common/Container";
// import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
// import { SectionHeader } from "../../common/Typgraphy";
// import SubscribeForm from "../../forms/SubscribeForm";

import Button from "../../common/Buttons";
import postStore from "../../../store/postStore";

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Events = () => {
  const posts = postStore((state) => state.posts);
  const events = postStore((state) => state.events);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear().toString();
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();

    return `${month}-${day}-${year}`;
  }
  return (
    <>
      <Container>
        <div className=" w-full text-center my-[4rem] ">
          <h2 className=" font-bold text-[2.1875rem]">News for you</h2>
        </div>
        <div className=" w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 pr-10 py-10">
          {posts &&
            posts.data
              .slice(0, 4)
              .map((post, index) => (
                <EventCard id={post.id} item={post} key={index} />
              ))}
        </div>
        <div className="w-[90%] mx-auto mb-14">
          <Link
            to="/feeds"
            className="flex items-center p-3 hover:text-primary ">
            See more <FaArrowRight className=" ml-2 text-text" />
          </Link>
        </div>
        {/* <div className=" flex justify-between pb-20">
          <div className="  w-[35%] flex flex-col items-center py-10 bg-[#FBFBFB] rounded-3xl px-10 ">
          <div className=" bg-white mb-[3rem]  px-[2rem] py-[3.5rem] flex flex-col items-center justify-center text-center rounded-3xl">
          <h2 className=" text-[30px] font-bold mb-3">Take a Survey</h2>
          <p className=" mb-3">Contribute to finding safer workspaces</p>
          <Button
          typpe="link"
          to="/survey"
          varient="contained"
          color="primary"
          size="small">
          Start Now
          </Button>
          </div>
          <div className="">
          {events?.data.slice(0, 1).map((event, i) => (
            <EventsCard
            id={event.id}
                  title={event.title}
                  image={event.image}
                  date={event.eventDate}
                  link={event.registrationLink}
                  venue={event.venue}
                  single={true}
                  key={i}
                  />
                  ))}
                  </div>
                  </div>
                </div> */}
      </Container>
      <div className="bg-text w-full min-h-[20rem] px-[3.75rem] py-5">
        <div className=" w-full text-center mb-5">
          <h2 className=" font-bold text-[3.75rem] text-white">Events</h2>
        </div>
        <div className=" pb-10">
          {events?.data.slice(0, 1).map((event, i) => (
            <div
              key={i}
              className=" w-[50rem] h-[26rem] bg-black rounded-md flex gap-10 p-12">
              <img
                src={event.image}
                alt=""
                className=" w-[25rem] h-full rounded-lg"
              />
              <div className=" flex flex-col justify-between">
                <div className="">
                  <h2 className="text-white text-xl font-normal mb-1">
                    {event.title}
                  </h2>
                  <p className="text-white mb-7">
                    {formatDate(event.eventDate)} | {event.venue}
                  </p>
                  <Button
                    to={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    typpe={"link"}
                    varient="outlined"
                    color="default"
                    size="medium">
                    Register Now
                  </Button>
                </div>
                <Link
                  to="/events"
                  className=" underline text-base font-normal text-white flex items-center">
                  See more Events <FaArrowRight className=" ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
