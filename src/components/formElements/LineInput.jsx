
const LineInput = ({...rest}) => {
  return (
    <div className=" w-full border-b focus-within:border-primary border-solid border-[#737373]">
        <input className="w-full py-[10px] outline-none" {...rest}/>
    </div>
  )
}

export default LineInput