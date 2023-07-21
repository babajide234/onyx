/* eslint-disable no-unused-vars */
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import postStore from "../store/postStore";
import { EventCard } from "../components/common/Cards";
import Button from "../components/common/Buttons";
import { useQuery } from "react-query";
import { useState } from "react";

const AllEvents = () => {
  const [carNum, setCardNum] = useState(6);
  const posts = postStore((state) => state.posts);
  const getEvents = postStore((state) => state.getEvents);

  const getPost = useQuery(["posts"], () => getEvents());

  const filteredState = getPost.isFetched && getPost.data.slice(0, carNum);
  return (
    <Container>
      <div className=" pt-[155px] pb-[87px] ">
        <div className=" flex w-full justify-start mb-7 ">
          <Link
            to="/event"
            className="flex items-center text-[24px] font-bold hover:text-primary">
            {" "}
            <FaArrowLeft className=" mr-3" />
            Return
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {posts &&
            posts.data.map((post, index) => (
              <EventCard id={post.id} item={post} key={index} />
            ))}
        </div>

        <div className="flex justify-center mt-5">
          <Button
            onClick={() => setCardNum(carNum + 3)}
            varient="contained"
            color="primary"
            size="medium">
            See more
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AllEvents;
