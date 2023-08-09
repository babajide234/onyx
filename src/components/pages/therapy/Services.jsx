import { ServiceExtendCard } from "../../common/Cards";
import Container from "../../common/Container";
import SectionHeading from "../../common/SectionHeading";
import Career1 from "../../../assets/image1.jpg";
import Career2 from "../../../assets/image2.jpg";
import Career3 from "../../../assets/image3.jpg";
import Career4 from "../../../assets/image4.jpg";
import ContactUs from "../../forms/ContactUs";

import Button from "../../common/Buttons";

const Services = () => {
  const CAREERTHERAPYSERVICE = [
    {
      name: "Career coaching",
      image: Career1,
      url: "/therapy",
      text: "Let’s meet one-on-one and outline a plan to negotiate a higher salary, resolve a conflict with a colleague, strategize your next move or figure out what you really want to do when you grow up.",
      rate: "$100/Hour",
    },
    {
      name: "Interview and Salary Negotiation",
      image: Career4,
      url: "/therapy",
      text: "Did you know only 20% of job candidates negotiate their hiring offers? That means most people in the market are leaving money on the table. Don’t be one of them. We’ll get you ready for interviews that get the offer you deserve and the salary you desire.",
      rate: "$75/Hour",
    },
    {
      name: "Job Search Support",
      image: Career2,
      url: "/therapy",
      text: "Internet searches may not be enough to discover your next amazing career opportunity or prepare you to get it. Does your resume stand out? Are your cover letters selling your skills? Let us get you all ready to outshine the competition and receive the offer letter you want.",
      rate: "$75/Hour",
    },
    {
      name: "Work 101 Webinar",
      image: Career3,
      url: "/therapy",
      text: "Our one-hour seminar for recent graduates entering the job market is packed with inside corporate do’s and don’ts we wish we’d known when we were starting our careers. Designed specifically for young Black professionals, you’ll learn how to flourish in your first role, navigate office politics, and position yourself for promotions and growth.",
      rate: "$50/Access ",
    },
  ];

  return (
    <div className=" w-full h-full  md:pt-[138px]">
      <Container>
        <SectionHeading>
          <p className=" mb-[15px] md:px-[150px] text-text text-base">
            A gentle reminder, friends: you shouldn’t have to start the week
            already looking forward to the end of the week. Purge your Sunday
            nights of pre-work week dread. From entry-level associate to
            executive-level leader, there’s a solution for your workplace
            challenges waiting on the other side of our initial conversation.
            Here’s how we can help.
          </p>
        </SectionHeading>

        <div className=" pt-[138px] grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-11 md:px-[120px] h-full pb-[57px]">
          {CAREERTHERAPYSERVICE.map((item, index) => (
            <ServiceExtendCard
              key={index}
              src={item.image}
              heading={item.name}
              rate={item.rate}
              subText={item.text}
              link={"#contact"}
            />
          ))}
        </div>
        <div className=" w-full py-[152px] flex justify-center">
          <div className=" w-fit text-center">
            <h3 className=" text-xl font-normal mb-5">
              Not Sure What Help You Need?
            </h3>
            <Button
              to=""
              typpe="link"
              varient="contained"
              color="primary"
              size="full">
              Book a FREE 10-Minute Clarity Session
            </Button>
          </div>
        </div>
        <div id="contact" className=" w-full py-16 md:px-[100px]">
          <div className=" w-full py-5 text-center">
            <h2 className=" text-[48px] font-extrabold">Contact us</h2>
          </div>
          <ContactUs />
        </div>
      </Container>
    </div>
  );
};

export default Services;
