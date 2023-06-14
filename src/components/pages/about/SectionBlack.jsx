import BG from '../../../assets/aboutBg.png'
import BG2 from '../../../assets/about-bg.png'
import Container from '../../common/Container'

const SectionBlack = () => {
  return (
    <div className=" w-full bg-cover min-h-[560px] relative " style={{
        background: `linear-gradient(0deg, rgba(15, 15, 15, 0.91), rgba(15, 15, 15, 0.91))`
    }}>
        <div className=" absolute top-0 left-0 w-full h-full" style={{backgroundImage: `url(${BG})`}}>
            <Container>
                <div className=" w-full flex flex-col items-center justify-center h-full">
                    <div className=" md:opacity-10 pt-20 pb-14">
                        <img src={BG2} alt="" className=" w-full md:w-[469px] z-0 relativ md:absolute top-20 " />
                    </div>
                    <div className=" md:pl-[600px] text-center pb-[70px] md:pr-[100px]">
                        <p className=" text-sm md:text-2xl text-white">We’re what we’ve all needed at least once in our job timelines after we realized how quickly a dream position on paper can torpedo into a nightmare of daily microaggressions, promotion snubs and cultural incompetencies.</p>
                    </div>
                </div>
            </Container>
        </div>

    </div>
  )
}

export default SectionBlack