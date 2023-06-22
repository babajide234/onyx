import Lines from '../../../assets/lines.svg'
import Button from '../../common/Buttons'
import Container from '../../common/Container'
import Ripple from '../../common/Ripple'
import HeaderImages from './HeaderImages'

const Header = () => {
  return (
    <header className=" relative h-screen w-full bg-cover " style={{backgroundImage: `url(${Lines})`}}>
        <Container>
            <div className=" w-full h-full flex justify-center items-center pt-24 overflow-hidden">
                <div className=" w-full text-center h-full pt-[30px] md:pt-[144px]">
                    <h1 className=" bg-text-gradient text-[32px] md:text-6xl font-black animate-text bg-clip-text text-transparent py-10">Work where you’re welcomed.</h1>
                    <p className=" text-sm mdtext-base font-normal w-[310px] md:w-[654px] mx-auto mb-9 leading-[188%] text-text_2">You have a story to tell about a job, a company, an organization that undervalued you and your talented Black self. We want to hear it. Other people who look like you want to hear it too, especially those in the job market. </p>
                    <div className=" w-full flex flex-col md:flex-row items-center md:justify-center gap-4">
                        <Button to="/register" varient="contained" color="primary" size="medium" typpe="link">Sign  up</Button>
                        <Button to="/login" varient="contained" color="secondary" size="medium" typpe="link">Log in</Button>
                    </div>
                </div>
                <HeaderImages/>
                <Ripple count={7} className="h-full w-full absolute top-[320px] overflow-hidden  flex items-center justify-center -z-10" />
            </div>
        </Container>
    </header>
  )
}

export default Header