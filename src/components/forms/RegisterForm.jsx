import { Form, Formik } from "formik"
import LineInput from "../formElements/LineInput"
import LineCustomSelect from "../formElements/LineCustomSelect";
import { IdentifyOptions, SexOptions } from "../../utils/util";
import Button from "../common/Buttons";


const RegisterForm = () => {
  
  const initialValues = {
    firstname:"",
    lastname:"",
    email:"",
    username:"",
    how_do_you_identify:"",
    sexual_orientation:"",
    city:""
  }

  const handleSelect = (value) => {
    console.log('Selected option:', value);
    // Perform any additional logic with the selected value
  };

  return (
    <Formik
      initialValues={initialValues}
    >
      {({  handleChange, values }) => (
        <Form>
          <div className=" mb-5">
            <LineInput name="firstname" value={values.firstname} onChange={handleChange} type={`text`} placeholder="First Name"/>
          </div>
          <div className=" mb-5">
            <LineInput name="lastname" value={values.lastname} onChange={handleChange} type={`text`} placeholder="Last Name"/>
          </div>
          <div className=" mb-5">
            <LineInput name="email" value={values.email} onChange={handleChange} type={`text`} placeholder="Email"/>
          </div>
          <div className=" mb-5">
            <LineInput name="username" value={values.username} onChange={handleChange} type={`text`} placeholder="Username"/>
          </div>
          <div className=" mb-5">
            <LineCustomSelect value={values.service} onChange={handleChange} options={SexOptions} onSelect={handleSelect} placeholder="How do you identify yourself?"/>
          </div>
          <div className=" mb-5">
            <LineCustomSelect value={values.service} onChange={handleChange} options={IdentifyOptions} onSelect={handleSelect} placeholder="What is your sexual orientation?"/>
          </div>
          <div className=" mb-5">
            <LineInput name="city" value={values.city} onChange={handleChange} type={`text`} placeholder="City"/>
          </div>
          <div className="">
              <div className="mb-5">
                    <Button type="submit" varient="contained"  color="primary" size="full">Create account</Button>
              </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm 