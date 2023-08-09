import { FaArrowLeft } from "react-icons/fa";
import Container from "../components/common/Container";
// import EventBg from "../components/common/EventBg";
import { Link, useParams } from "react-router-dom";
import { EventCard } from "../components/common/Cards";
import { useQuery } from "react-query";
import postStore from "../store/postStore";

const SingleFeed = () => {
  const getSingePosts = postStore((state) => state.getSingePosts);
  const posts = postStore((state) => state.posts);

  const { eventId } = useParams();
  console.log(eventId);
  const data = useQuery(["singlePost", eventId], () => getSingePosts(eventId));

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear().toString();
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();

    return `${month}-${day}-${year}`;
  }
  return (
    <Container>
      <div className=" pt-[155px] pb-[87px] ">
        <div className=" flex w-full justify-start mb-7 ">
          <Link
            to="/feed"
            className="flex items-center text-[20px] font-bold hover:text-primary">
            {" "}
            <FaArrowLeft className=" mr-3 font-normal" />
            Return
          </Link>
        </div>
        <div className=" w-full pb-7">
          {data.isLoading ? (
            <div className=" w-full h-60 bg-slate-50 animate-pulse rounded-lg" />
          ) : (
            <img
              src={data.data.image}
              alt=""
              className=" w-full h-[400px] object-cover	"
            />
          )}
        </div>

        <div className=" w-full pb-16">
          {data.isLoading ? (
            <>
              <div className=" w-80 h-10 bg-slate-50 animate-pulse rounded-lg mb-5" />
              <div className="">
                <div className=" w-full h-5 bg-slate-50 animate-pulse rounded-lg mb-5" />
                <div className=" w-full h-5 bg-slate-50 animate-pulse rounded-lg mb-5" />
                <div className=" w-full h-5 bg-slate-50 animate-pulse rounded-lg mb-5" />
                <div className=" w-full h-5 bg-slate-50 animate-pulse rounded-lg mb-5" />
                <div className=" w-full h-5 bg-slate-50 animate-pulse rounded-lg mb-5" />
              </div>
            </>
          ) : (
            <>
              <h3 className=" text-[2rem] mb-[23px] font-bold">
                {data.data.title}
              </h3>

              <div className=" mb-16 flex">
                <h2 className="font-bold mr-3">Date: </h2>
                <span className="">
                  {formatDate(data.data.postCategory.createdDate)}
                </span>
              </div>
              <p className="text-base mb-[23px]">{data.data.content}</p>
            </>
          )}
        </div>
        <div className=" flex w-full justify-start pb-[56px] ">
          <h2 className=" text-white flex items-center text-[32px] font-bold">
            More Events
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-9">
          {posts &&
            posts.data
              .slice(0, 3)
              .map((post, index) => (
                <EventCard id={post.id} item={post} key={index} />
              ))}
        </div>
      </div>
    </Container>
  );
};

export default SingleFeed;
