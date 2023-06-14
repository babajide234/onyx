import BG from '../../assets/faqBg.png'

// eslint-disable-next-line react/prop-types
const BgContainer = ({children}) => {
  return (
    <div className="w-full min-h-[560px] bg-cover" style={{ backgroundImage: `url(${BG})` }}>
        <div className=" w-full bg-cover min-h-[560px] relative " style={{
            background: `linear-gradient(181.54deg, rgba(17, 17, 49, 0) 31.9%, #12122B 63.09%, #12122B 156.77%)`
        }}>
            {children}
        </div>
    </div>
  )
}

export default BgContainer