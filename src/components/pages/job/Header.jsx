import { useState, useEffect } from 'react';

import PIC1 from '../../../assets/slide1.png';
import PIC2 from '../../../assets/slide2.png';
import PIC3 from '../../../assets/slide3.png';
import PIC4 from '../../../assets/slide4.png';
// import ARR from '../../../assets/arrow.svg';

import { motion } from 'framer-motion';
import { HeaderOne } from '../../common/Typgraphy';
import Container from '../../common/Container';

const Header = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [PIC1,PIC2,PIC3,PIC4]; // Add more image paths if needed

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
    
        return () => clearInterval(interval);
      }, [images.length]);


  return (
    <div className=" w-full h-screen relative">
        <div className="absolute inset-0">
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    className="h-full w-full bg-cover bg-no-repeat bg-center absolute top-0 left-0"
                    style={{ backgroundImage: `url(${image})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentImage === index ? 1 : 0 }}
                    transition={{ duration: 1 }}
                ></motion.div>
            ))}
        </div>
        <div className="absolute inset-0 bg-black/75 w-full h-full">
                <Container>
                    <div className=" w-full h-full pt-[231px] text-center">
                        <HeaderOne>jobs board</HeaderOne>
                        <h2 className=" text-[55px] text-white">
                            There’s a <span className=" font-bold">reason losing a job</span> or changing a career ranks at the top of the most stressful life events.
                        </h2>
                        <div className=" mt-10">
                            <button className=''>
                            <motion.svg
        width="37"
        height="35"
        viewBox="0 0 37 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0 -1.58777e-06L18.375 12.9728L36.75 0L36.75 6.35669L18.375 19.3295L-2.81119e-07 6.35669L0 -1.58777e-06ZM-6.82717e-07 15.4377L18.375 28.4105L36.75 15.4377L36.75 21.7944L18.375 34.7672L-9.63836e-07 21.7944L-6.82717e-07 15.4377Z"
          fill="#fff"
          initial={{ fill: "#fff", opacity: 1 }}
          animate={{ fill: "#fff", opacity: 0.15 }}
          whileHover={{ fill: "#fff", opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            repeatType: "reverse",
          }}
        />
      </motion.svg>

                            </button>
                        </div>
                    </div>
                </Container>
        </div>
    </div>
  )
}

export default Header