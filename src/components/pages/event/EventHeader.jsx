// import Button from "../../common/Buttons";
// import { FaArrowRight } from "react-icons/fa";
import image from "../../../assets/feed.jpg";
import Button from "../../common/Buttons";

const EventHeader = () => {
  return (
    <div
      className=" w-full h-[30rem] mt-20 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <h3 className=" text-[26px] md:text-[4rem] font-bold text-white">
        Take a Survey
      </h3>

      <p className=" text-white text-[1.25rem] leading-9 w-[53rem] text-center mb-10">
        You’ve got first-hand tea on what it’s really like to be Black at your
        job. Answer our short survey and contribute to finding safer workspaces.
      </p>
      <Button
        typpe="link"
        to="/survey"
        varient="contained"
        color="primary"
        size="small">
        Start Now
      </Button>
    </div>
  );
};

export default EventHeader;
