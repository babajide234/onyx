
const Input = ({...rest}) => {
  return (
    <input type="text" className="w-full outline-none px-5 py-4 rounded-md border border-solid border-secondary/10 focus:border-primary/30" {...rest} />
  )
}

export default Input