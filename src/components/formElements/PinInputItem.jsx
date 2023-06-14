/* eslint-disable react/prop-types */
import PinInput from 'react-pin-input';

const PinInputItem = ({ lenght, handleChange, handleComplete }) => {

  const inputstyle = {
    height: "74px",
    width: "57px",
    borderColor: "#222222",
    fontSize: "40px",
    lineHeight:"0px",
    display:"flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const style = {
    display:"flex",
    justifyContent: "space-between"
  }
  
  return (
    <PinInput 
      length={lenght} 
      initialValue=""
      onChange={handleChange} 
      type="numeric" 
      inputMode="number"
      style={style}  
      inputStyle={inputstyle}
      inputFocusStyle={{borderColor: 'blue'}}
      onComplete={handleComplete}
      autoSelect={true}
      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
    />
  )
}

export default PinInputItem