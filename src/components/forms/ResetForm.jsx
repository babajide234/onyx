import { Form, Formik } from "formik"
import LineInput from "../formElements/LineInput"
import Button from "../common/Buttons";
import AuthContainer from "../common/AuthContainer";
import { FaArrowLeft } from "react-icons/fa";


const ResetForm = () => {

    const initialValues = {
        email:"",
    }

  return (
    <AuthContainer head={"Forgot Password?"} subhead={'No worries, we’ll send you reset instructions.'}>
        <Formik
            initialValues={initialValues}
        >
            {({  handleChange, values }) => (
            <Form>
                <div className=" mb-5">
                    <LineInput name="email" value={values.email} onChange={handleChange} type={`text`} placeholder="Email or Phone"/>
                </div>
                <div className="">
                    <div className="mb-5">
                        <Button type="submit" varient="contained"  color="primary" size="full">Reset Password</Button>
                    </div>
                </div>
            </Form>
            )}
        </Formik>
        <div className=" flex justify-center">
            <Button varient={'empty'} color={''} size='medium'> <FaArrowLeft className=" mr-3"/> Back to log in</Button>
        </div>        
    </AuthContainer>
  )
}

export default ResetForm