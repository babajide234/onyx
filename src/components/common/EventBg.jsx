/* eslint-disable react/prop-types */

const EventBg = ({ children }) => {
  return (
    <div className=" w-full min-h-screen bg-black bg-cover " style={{
            background: `linear-gradient(181.54deg, rgba(0, 0, 0,1) 31.9%, #12122B 63.09%, #12122B 156.77%)`
        }}
    >
        {children}
    </div>
  )
}

export default EventBg