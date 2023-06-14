import { useState, useEffect } from 'react';
import PIC1 from '../../../assets/authpic1.png'
import PIC2 from '../../../assets/authpic2.png'
import PIC3 from '../../../assets/authpic3.png'
import { motion } from 'framer-motion';


const LeftBg = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        {
            image:PIC1,
            text:"You have a story to tell about a job, a company, an organization that undervalued you and your talented Black self. "
        },
        {
            image:PIC2,
            text:"You have a story to tell about a job, a company, an organization that undervalued you and your talented Black self. "
        },
        {
            image:PIC3,
            text:"You have a story to tell about a job, a company, an organization that undervalued you and your talented Black self. "
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
    
        return () => clearInterval(interval);
      }, [images.length]);


  return (
    <div className="w-full h-full relative" style={{
        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
    }}>
        {
            images.map((item, index)=>(
                <motion.div
                    key={index}
                    className="h-full w-full bg-cover bg-no-repeat bg-center absolute inset-0 pl-[120px] pr-[57px] py-[130px] flex items-end "
                    style={{ backgroundImage: `url(${item.image})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentImage === index ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className=" text-white text-2xl font-normal">{item.text}</p>
                </motion.div>
            ))
        }
    </div>
  )
}

export default LeftBg