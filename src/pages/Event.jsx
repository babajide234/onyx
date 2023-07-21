/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import EventHeader from "../components/pages/event/EventHeader";
import Events from "../components/pages/event/Events";
import postStore from "../store/postStore";
import { useEffect } from "react";
import userStore from "../store/usserStore";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const getEvents = postStore((state) => state.getEvents);
  const isLoggedIn = userStore((state) => state.isLoggedIn);
  const navigate = useNavigate();

  const getPost = useQuery(["posts"], () => getEvents());

  // useEffect(() => {
  //   getEvents();
  // }, [getEvents]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <EventHeader />
      <Events />
    </>
  );
};

export default Event;
