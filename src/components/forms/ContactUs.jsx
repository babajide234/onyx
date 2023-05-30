import { Form, Formik } from "formik"
import Input from "../formElements/Input"
import CustomSelect from "../formElements/CustomSelect"
import Button from "../common/Buttons";

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

const ContactUs = () => {
    const initialvalues = {
        firstname: "",
        lastname: "",
        email: "",
        service: "",
        careerService: "",
    }

    const submit =()=>{

    }

    const handleSelect = (value) => {
        console.log('Selected option:', value);
        // Perform any additional logic with the selected value
    };

  return (
    <Formik
        initialValues={initialvalues}
        handleSubmit={submit}
    >
        {
            ({ values, handleChange}) => (
                <Form>
                    <div className=" flex flex-col gap-10">
                        <div className=" w-full grid grid-cols-2 gap-10">
                            <Input name="firstname" onChange={handleChange} values={values.firstname} placeholder="First Name" />
                            <Input name="lastname" onChange={handleChange} values={values.lastname} placeholder="Last Name"/>
                        </div>
                        <div className=" w-full grid grid-cols-2 gap-10">
                            <Input name="email" onChange={handleChange} values={values.email} placeholder="Email"/>
                            <CustomSelect value={values.service} onChange={handleChange} options={options} onSelect={handleSelect} placeholder="What Therapy Service Do You Need?"/>
                        </div>
                        <div className="w-full">
                            <Input name="service" onChange={handleChange} values={values.lastname} placeholder="Is there anything else you’ll like to share?"/>
                        </div>
                        <div className=" w-[350px] mx-auto ">
                            <Button type="submit" varient="contained" color="primary" size="full">Submit</Button>
                        </div>
                    </div>
                </Form>
            )
        }
    </Formik>
  )
}

export default ContactUs