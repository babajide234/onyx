/* eslint-disable no-unused-vars */
import React from "react";
import IMG from "../assets/allevents.png";
import Container from "../components/common/Container";
import { EventsCard } from "../components/common/Cards";
import postStore from "../store/postStore";

const AllEvents = () => {
  const events = postStore((state) => state.events);

  return (
    <>
      <div
        className=" h-[487px] w-full flex justify-center items-center"
        style={{
          background: `url(${IMG})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <h2 className=" font-bold text-[64px] text-white">
          Career events near you
        </h2>
      </div>
      <Container>
        <div className="grid grid-cols-3 gap-10">
          {events?.data.map((event, i) => (
            <EventsCard
              id={event.id}
              title={event.title}
              image={event.image}
              date={event.eventDate}
              link={event.registrationLink}
              venue={event.venue}
              key={i}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default AllEvents;
