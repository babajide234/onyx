import { useState } from "react";
import Button from "../components/common/Buttons";
import Input from "../components/formElements/Input";
import Radio from "../components/formElements/Radio";
import RadioCol from "../components/formElements/RadioCol";
import { RxArrowLeft, RxArrowTopRight } from "react-icons/rx";
import Container from "../components/common/Container";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Survay = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleNextTab = () => {
    setCurrentTab((prevTab) => prevTab + 1);
  };
  const handlePreviousTab = () => {
    setCurrentTab((prevTab) => prevTab - 1);
  };
  //   const handleSubmit = () => {
  //     // Perform submit logic here
  //     console.log("Survey submitted");
  //   };
  const initialValues = {
    goals: "",
    options: "",
    scale: "",
    opinions: ["", ""],
    finalThoughts: "",
    currentTab: 0,
  };

  const validationSchema = Yup.object().shape({
    goals: Yup.string().required("Goals are required"),
    options: Yup.string().required("Options are required"),
    scale: Yup.string().required("Scale is required"),
    opinions: Yup.array()
      .of(Yup.string().required("Opinions are required"))
      .required("Opinions are required"),
    finalThoughts: Yup.string().required("Final thoughts are required"),
  });

  const tabs = [
    {
      label: "Goals",
      header: "Take an Anonymous Workplace Survey",
      subtext: "Let’s help you and others make more informed career decisions.",
      question: "What are your goals?",
      name: "goals",
      component: "Input",
    },
  ];
  // const tabs = [
  //     {
  //       label: "Goals",
  //       header:'Take an Anonymous Workplace Survey',
  //       subtext:'Let’s help you and others make more informed career decisions.',
  //       question: "What are your goals?",
  //       content: (
  //         <div className="w-full mb-8">
  //           <Input />
  //         </div>
  //       ),
  //     },
  //     {
  //       label: "Options",
  //       question: "What are your goals?",
  //       content: (
  //         <div className="w-full mb-8 flex justify-between">
  //           <Radio label="Recruitment" id={'recruitment'} name="recruitment"/>
  //           <Radio label="Networking" id={'networking'} name="recruitment"/>
  //           <Radio label="Mentorship" id={'mentorship'} name="recruitment"/>
  //           <Radio label="Career Growth and Development" id={'career'} name="recruitment"/>
  //           <Radio label="Job seeker" id={'job'} name="recruitment"/>
  //         </div>
  //       ),
  //     },
  //     {
  //       label: "Scale",
  //       question: "What are your goals?",
  //       content: (
  //         <div className="w-full mb-8 flex justify-between">
  //           <RadioCol label="1" name="recruitment"/>
  //           <RadioCol label="2" name="recruitment"/>
  //           <RadioCol label="3" name="recruitment"/>
  //           <RadioCol label="4" name="recruitment"/>
  //           <RadioCol label="5" name="recruitment"/>
  //           <RadioCol label="6" name="recruitment"/>
  //           <RadioCol label="7" name="recruitment"/>
  //           <RadioCol label="8" name="recruitment"/>
  //           <RadioCol label="9" name="recruitment"/>
  //           <RadioCol label="10" name="recruitment"/>
  //         </div>
  //       ),
  //     },
  //     {
  //       label: "Opinions",
  //       question: "What are your goals?",
  //       content: (
  //         <div className="w-full mb-8 flex flex-col gap-y-3">
  //           {/* Question 1 */}
  //           <div className="bg-primary/10 grid grid-cols-6 justify-center p-4 rounded-lg">
  //             <h3 className="text-sm text-text">I feel like I can be myself at my company</h3>
  //             <div className="w-full flex justify-center">
  //               <Radio label="" id={''} name="" />
  //             </div>
  //             <div className="w-full flex justify-center">
  //               <Radio label="" id={''} name="" />
  //             </div>
  //             <div className="w-full flex justify-center">
  //               <Radio label="" id={''} name="" />
  //             </div>
  //             <div className="w-full flex justify-center">
  //               <Radio label="" id={''} name="" />
  //             </div>
  //             <div className="w-full flex justify-center">
  //               <Radio label="" id={''} name="" />
  //             </div>
  //           </div>

  //           <div className="bg-primary/10 grid grid-cols-6 justify-center p-4 rounded-lg">
  //             <h3 className="text-sm text-text">Another question goes here</h3>
  //             <div className="w-full flex justify-center">
  //               <Radio label="" id={''} name="" />
  //             </div>
  //             <div className="w-full flex justify-center">
  //               <Radio label="" id={''} name="" />
  //             </div>
  //             <div className="w-full flex justify-center">
  //               <Radio label="" id={''} name="" />
  //             </div>
  //             <div className="w-full flex justify-center">
  //               <Radio label="" id={''} name="" />
  //             </div>
  //             <div className="w-full flex justify-center">
  //               <Radio label="" id={''} name="" />
  //             </div>
  //           </div>
  //         </div>
  //       ),
  //     },
  //     {
  //       label: "Final Thoughts",
  //       question: "What are your goals?",
  //       content: (
  //         <div className="w-full mb-8 flex flex-col gap-5">
  //           <Radio label="A" id={'recruitment'} name="recruitment"/>
  //           <Radio label="B" id={'networking'} name="recruitment"/>
  //           <Radio label="C" id={'mentorship'} name="recruitment"/>
  //           <Radio label="D" id={'career'} name="recruitment"/>
  //         </div>
  //       ),
  //     },
  //   ];

  const handleFormSubmit = (values) => {
    console.log("Survey submitted:", values);
  };

  return (
    <Container>
      <div className=" w-full min-h-screen flex justify-center items-center mt-20">
        <div className=" w-full flex flex-col items-center">
          {tabs[currentTab].header && (
            <h1 className=" text-4xl font-bold mb-5">
              {tabs[currentTab].header}
            </h1>
          )}
          {tabs[currentTab].header && (
            <p className=" text-base font-normal mb-5">
              {tabs[currentTab].header}
            </p>
          )}
          <h2 className="text-2xl font-bold mb-14">
            {tabs[currentTab].question}
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}>
            {({ values, setFieldValue }) => (
              <Form>
                {tabs[values.currentTab].component === "Input" ? (
                  <Field
                    name={tabs[values.currentTab].name}
                    component={<Input />}
                    // render={({ field, form }) => (
                    //     <tabs[values.currentTab].component
                    //       {...field}
                    //       options={tabs[values.currentTab].options}
                    //       multiple={tabs[values.currentTab].multiple}
                    //       onChange={(value) => form.setFieldValue(field.name, value)}
                    //     />
                    //   )}
                  />
                ) : (
                  tabs[values.currentTab].options.map((option, index) => (
                    <Field
                      key={index}
                      type="radio"
                      name={tabs[values.currentTab].name}
                      value={option}
                      component={tabs[values.currentTab].component}
                    />
                  ))
                )}

                <ErrorMessage
                  name={tabs[values.currentTab].name}
                  component="div"
                  className="text-red-500 py-3"
                />

                {values.currentTab === tabs.length - 1 ? (
                  <Button
                    type="submit"
                    varient="contained"
                    color="primary"
                    size="full">
                    Submit
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleNextTab(values, { setFieldValue })}
                    type="button"
                    varient="contained"
                    color="primary"
                    size="full">
                    Next
                  </Button>
                )}

                <div className="w-[700px] py-5 flex justify-between">
                  {values.currentTab !== 0 && (
                    <button
                      onClick={() =>
                        handlePreviousTab(values, { setFieldValue })
                      }
                      className="flex items-center">
                      <RxArrowLeft className="mr-3" />
                      Go Back
                    </button>
                  )}
                  <button
                    onClick={() => handleNextTab(values, { setFieldValue })}
                    className="flex items-center">
                    Skip <RxArrowTopRight className="ml-3" />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          {/* {tabs[currentTab].content}

              <Button onClick={handleNextTab} typpe="btn"  to="/" varient="contained" color="primary" size="full">Submit</Button>
              <div className="w-[700px] py-5 flex justify-between">
                  
                  { currentTab !== 0 ? <button onClick={handlePreviousTab} className=" flex items-center"><RxArrowLeft  className="mr-3"/>Go Back </button>: <div/>}
                  <button onClick={handleNextTab} className=" flex items-center">Skip <RxArrowTopRight className="ml-3"/> </button>
              </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Survay;
