/* eslint-disable react/no-unescaped-entities */
import { ServiceCard } from "../../common/Cards"
import Container from "../../common/Container"
import PIC2 from '../../../assets/job2.png'
import PIC3 from '../../../assets/job3.png'
import PIC4 from '../../../assets/job4.png'
import PIC5 from '../../../assets/job5.png'
import PIC6 from '../../../assets/job6.png'
import SectionHeading from "../../common/SectionHeading"


const JobsSection = () => {
  return (
    <div className="">
        <Container>
            <div className=" flex flex-col py-10">

                <SectionHeading>
                    <h2 className=" font-bold text-[24px]">And that's why we are here</h2>
                    <p className=" text-base mb-5 px-[100px]">We understand the frustration that makes job hunting, well, frustrating. To help shorten your Google search time, here’s a list of diversity-focused employment opportunities for Black jobseekers.</p>
                </SectionHeading>
                <div className=" grid grid-cols-2 gap-8 pt-[90px] px-[100px]">
                    <ServiceCard
                        src={PIC2}
                        heading="Black Tech Jobs"
                        subText="Dismally low numbers of new Black hires in tech, especially in leadership, has been broadly discussed. This site is doing something about it by recruiting candidates for clients who pay for job listings."
                    />
                    <ServiceCard
                        src={PIC2}
                        heading="JobStars"
                        subText="It's not a job board per se, but this site features a robust list of more than 50 Black professional associations and organizations that host their own industry-specific job boards—a resource to diligent jobseekers."
                    />
                    <ServiceCard
                        src={PIC3}
                        heading="Black Career Network"
                        subText="The Professional Diversity Network—a group that includes Women’s Career Channel, Pride Careers and Ability Careers—sources a database of qualified candidates and hosts in-person career events all over the country."
                    />
                    <ServiceCard
                        src={PIC4}
                        heading="Jopwell"
                        subText="A paid membership site launched by Black co-founders to increase the number of Black folks in tech, Jopwell works with recruiters at partner companies, curates individualized job recommendations and posts verified job opportunities."
                    />
                    <ServiceCard
                        src={PIC5}
                        heading="Black Jobs"
                        subText="Reportedly the largest Black career community online, just create a profile to access the more than 500 employers who are actively recruiting and hiring for well-paying jobs in a range of industries."
                    />
                    <ServiceCard
                        src={PIC6}
                        heading="HBCU Connect Jobs"
                        subText="Popular for its annual list of the top 50 employers for HBCU graduates, the site posts a wealth of jobs and internships, and profiles for HBCU alumni and students looking to connect and network."
                    />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default JobsSection