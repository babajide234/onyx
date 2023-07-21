import { useEffect } from "react"
import AboutSection from "../components/pages/home/AboutSection"
import GetStarted from "../components/pages/home/GetStarted"
import Header from "../components/pages/home/Header"
import WhatWeDo from "../components/pages/home/WhatWeDo"
import userStore from "../store/usserStore"

const Home = () => {
  const step = userStore((state) => state.resetStep);
  const resetStep = userStore((state) => state.resStep);

  useEffect(()=>{
    if (step === 6){
      resetStep()
    }
  },[resetStep, step])

  return (
    <>
        <Header/>
        <AboutSection/>
        <WhatWeDo/>
        <GetStarted/>
    </>
  )
}

export default Home