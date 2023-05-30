import BG from '../../../assets/black-bg.svg'
import Button from '../../common/Buttons'
import Container from '../../common/Container'
import { HeaderOne } from '../../common/Typgraphy'

const AboutSection = () => {
  return (
    <div className=" w-full bg-cover min-h-[560px] relative " style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.006) 0%, rgba(71, 71, 177, 0.140885) 57.6%, rgba(102, 102, 255, 0.126) 87.93%), #000000`
    }}>
        <div className=" absolute top-0 left-0 w-full h-full" style={{backgroundImage: `url(${BG})`}}>
            <Container>
                <div className="flex flex-col h-full w-full py-28 items-center">
                        <HeaderOne>About us</HeaderOne>
                        <h2 className="text-white mb-8 text-[32px] md:text-[64px] text-center font-normal">
                        Do you know <span className=' font-black'>who</span> you&apos;re working for and <span className=' font-black'>what</span> you&apos;re working with?
                        </h2>
                        <Button varient="contained" size="medium" color="primary" typpe="link">Explore who we are</Button>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default AboutSection