import Container from '../../common/Container'
import Button from '../../common/Buttons'
import { FaArrowRight } from 'react-icons/fa'

const EventHeader = () => {
  return (
    <Container>
        <div className=" w-full flex justify-between items-center mb-8 mt-16">
            <h3 className=" text-[26px] md:text-[32px] font-bold">Us in the News</h3>
            <Button typpe="link" to="/posts" >See more <FaArrowRight className=' ml-3'/></Button>
        </div>
    </Container>
  )
}

export default EventHeader