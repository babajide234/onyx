import { Form, Formik } from "formik"
import Input from "../formElements/Input"
import Button from "../common/Buttons"

const SubscribeForm = () => {

    const initialvalues ={
        firstname:"",
        lastname:"",
        email:""
    }
  return (
    <Formik
        initialValues={initialvalues}
    >
    {({  handleChange, values }) => (
        <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="">
                    <Input invert={true} name="firstname" value={values.firstname} onChange={handleChange} placeholder="First Name" />
                </div>
                <div className="">
                    <Input invert={true} name="lastname" value={values.lastname} onChange={handleChange} placeholder="Last Name" />
                </div>
                <div className="">
                    <Input invert={true} name="email" value={values.eamil} onChange={handleChange} placeholder="Email" />
                </div>
                <div className="">
                    <Button varient="contained" color="primary" size="full">Submit</Button>
                </div>
            </div>
        </Form>
    )}
    </Formik>
  )
}

export default SubscribeForm