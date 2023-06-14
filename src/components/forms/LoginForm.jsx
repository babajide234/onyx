import { Formik, Form } from "formik"
import LineInput from "../formElements/LineInput"
import Button from "../common/Buttons"
import { Link } from "react-router-dom"

const LoginForm = () => {
  return (
    <Formik
        initialValues={{ email: "", password: "" }}
    >
        {({  handleChange, values }) => (
            <Form>
                <div className=" mb-5">
                    <LineInput name="email" value={values.email} onChange={handleChange} type={`text`} placeholder="Email"/>
                </div>
                <div className=" mb-3">
                    <LineInput name="password" value={values.password} onChange={handleChange} type={`text`} placeholder="Password"/>
                </div>
                <div className="w-full flex justify-end mb-5">
                    <Link to="/forget-password" className=" text-primary font-bold">forgot password?</Link>
                </div>
                <div className="mb-5">
                    <Button type="submit" varient="contained"  color="primary" size="full">Sign in</Button>
                </div>
            </Form>
        )}
    </Formik>
  )
}

export default LoginForm