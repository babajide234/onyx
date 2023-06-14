import BG from '../../../assets/aboutBg.png'
import PIC1 from '../../../assets/bright-pic.png'
import PIC2 from '../../../assets/pic2.png'
import PIC3 from '../../../assets/pic3.png'
import Container from '../../common/Container'
import Sectionwrap from '../../common/Sectionwrap'

const OurStory = () => {
  return (
    <div className=" w-full bg-cover min-h-[560px] relative " style={{
        background: `linear-gradient(0deg, rgba(15, 15, 15, 0.91), rgba(15, 15, 15, 0.91))`
    }}>
        <div className=" bg-cover w-full h-full py-[69px]" style={{backgroundImage: `url(${BG})`}}>
            <Container>  
                <div className=" flex flex-col items-center text-center px-[22px]  md:px-[100px] ">
                    <h3 className=" text-[40px] md:text-[55px] text-white font-bold mb-2 md:mb-5">Our Story</h3>
                    <p className=" text-[20px] md:text-[36px] text-white">We see your grit and talent. We want you to work where other people see it too.</p>
                </div>
                <div className=" w-full h-full py-11">
                    <Sectionwrap 
                        text="Powered by more than 25 years of combined experience, The Onyx Truth is a small but mighty team of specialty-driven but play-cousin trustworthy experts in the Black corporate experience. Our competency thrives at the intersection of human resources and data analytics, and our mission is to help Black professionals push their careers forward, protect their mental health and bridge cultural chasms that keep us from rising to the top."
                        src={PIC1}
                        direction="right"
                    />
                    <Sectionwrap 
                        text="So why start a change making agency? We have our own battle scars from working in anti-Black organizations, and we know firsthand that navigating our needs and experiences as Black professionals is very different from the corporate journey for other people of color. We thrive by helping our folks clarify their career goals, better understand the worth of their skills and talent, and run far, far away from jobs that kill our ambition and joy."
                        src={PIC2}
                        direction="left"
                    />
                    <Sectionwrap 
                        text="We’ve coached executives, senior leaders and managers through matters of white supremacy, unconscious bias and pay equity. We've produced and shared data on workplace diversity, high turnover rates and the power of an inclusive workforce. More than anything, we believe you, dear Black professional, should work where you’re valued. We provide the data-focused insight and community-building support to get you there."
                        src={PIC3}
                        direction="right"
                    />
                </div>
            </Container>
        </div>
    </div>
  )
}

export default OurStory