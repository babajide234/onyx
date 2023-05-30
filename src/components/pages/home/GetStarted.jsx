import Button from "../../common/Buttons"
import Container from "../../common/Container"

const GetStarted = () => {
  return (
    <div className=" bg-primary">
        <Container>
            <div className=" py-[65px] flex flex-col items-center">
                <h2 className=" text-[32px] md:text-[64px] font-normal text-white font-[Raleway] mb-8 ">Get Started</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5">
                  <Button varient='contained' color='default' size='medium' type='link'>Sign  up</Button>
                  <Button varient='outlined' color='default'  size='medium' type='link'>Log in</Button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default GetStarted