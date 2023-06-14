import { Form, Formik } from "formik"
// import LineInput from "../formElements/LineInput"
import Button from "../common/Buttons"
import PinInputItem from "../formElements/PinInputItem"
import AuthContainer from "../common/AuthContainer"
import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

const PasswordRecoveryForm = () => {

    const initialValues = {
        password:"",
    }

    const handlePinChange = (value)=>{
        console.log("change",value)
    }

    const handleComplete = (value)=>{
        console.log("complete",value)
    }

  return (
    <AuthContainer>
        <Formik
            initialValues={initialValues}
        >
        {({ values }) => (
        <Form>
            <div className=" mb-5">
                {/* <LineInput name="email" value={values.email} onChange={handleChange} type={`text`} placeholder="Email or Phone"/> */}
                <PinInputItem lenght={5} value={values.password} handleChange={handlePinChange} handleComplete={handleComplete}/>
            </div>
            <div className="">
                <div className="mb-5">
                    <Button type="submit" varient="contained"  color="primary" size="full">Verify</Button>
                </div>
            </div>
        </Form>
        )}
        </Formik>
        <div className=" w-full flex justify-center mb-5 ">
            <p className="">Didn’t receive the email? 
                <Link to="/login" className='text-primary font-bold'> Click to resend</Link>
            </p>
        </div>
        <div className=" flex justify-center">
            <Button typpe={'link'} to="/login" varient={'empty'} color={''} size='medium'> <FaArrowLeft className=" mr-3"/> Back to log in</Button>
        </div>
    </AuthContainer>
  )
}

export default PasswordRecoveryForm