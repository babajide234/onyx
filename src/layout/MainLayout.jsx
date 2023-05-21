import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
import Container from '../components/common/Container'

const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <Container>
            <Outlet/>
        </Container>
        <Footer/>
    </>
  )
}

export default MainLayout