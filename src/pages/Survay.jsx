/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../components/common/Buttons";
import Input from "../components/formElements/Input";
import Radio from "../components/formElements/Radio";
import RadioCol from "../components/formElements/RadioCol";
import { RxArrowLeft, RxArrowTopRight } from "react-icons/rx";
import Container from "../components/common/Container";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import userStore from "../store/usserStore";

const formData = {
  form_type: "Employee Satisfaction Survey",
  sections: [
    {
      title: "Culturally Relevant Questions",
      questions: [
        {
          question: "Fix your _____.",
          options: ["Mouth", "Posture", "Face", "Hands"],
        },
        {
          question: "You smell like _____.",
          options: ["Flowers", "Outside", "Dirt", "Honey"],
        },
        {
          question: "Do I look like _______ the fool?",
          options: ["Bonny", "Bingo", "Boo Boo", "Bing Bong"],
        },
        {
          question:
            "You better remember your schoolwork like you remember those _____.",
          options: ["Recipes", "Lyrics", "Artists", "Athletes"],
        },
        {
          question: "Your mom is not one of your _____.",
          options: ["Cousins", "Little Friends", "Homegirls", "Associates"],
        },
        {
          question: "Do you have ______ money?",
          options: [
            "Allowance",
            "Walmart",
            "McDonald's",
            "Burger King",
            "Experience",
          ],
        },
        {
          question:
            "Are there any People of Color on the executive team at your company?",
          options: ["Yes", "No", "Don't Know"],
        },
        {
          question:
            "Are there any Black employees on the executive team at your company?",
          options: ["Yes", "No", "Don't Know"],
        },
        {
          question:
            "As a Black employee, what are the pros of working at your company?",
          input: true,
        },
        {
          question:
            "How likely are you to recommend your company to a Black person seeking employment?",
          options: [
            "Not at all likely",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Extremely likely",
          ],
        },
        {
          question:
            "Thinking about your company, how much do you agree or disagree with the following?",
          rows: [
            "My employer prioritizes diversity, equity, and inclusion",
            "I feel like I can be myself at work",
            "I feel like I belong at my company",
            "My company is diverse",
            "My company provides resources related to growth and career development to underrepresented employees",
            "My company provides mentorship to underrepresented employees",
            "My company provides adequate responses to social justice issues",
            "My company offers diversity, equity and inclusion training for staff",
            "My company offers diversity, equity and inclusion training for leadership",
          ],
          columns: [
            "Strongly Disagree",
            "Somewhat Disagree",
            "Neither Agree nor Disagree",
            "Somewhat Agree",
            "Strongly Agree",
            "Don't Know/No opinion",
          ],
        },
      ],
    },
    {
      title: "Your Company",
      questions: [
        {
          question: "What company do you work for?",
          input: true,
        },
        {
          question: "What industry best describes your company?",
          input: true,
        },
        {
          question: "Are you a current or former employee?",
          options: ["Current", "Former"],
        },
        {
          question: "What best describes your role?",
          options: [
            "Executive Suite",
            "Vice President",
            "Director",
            "Manager",
            "Associate",
            "Intern",
            "Other",
          ],
        },
      ],
    },
    {
      title: "Demographics",
      questions: [
        {
          question: "What is the highest level of education you have obtained?",
          options: [],
        },
        {
          question: "How many years of relevant experience do you have?",
          options: ["<1 year", "2-5 years", "5-10 years", ">10 years"],
        },
        {
          question: "How do you identify?",
          options: ["Man", "Non-binary", "Woman", "Other"],
        },
        {
          question: "What is your sexual orientation?",
          options: [
            "Asexual",
            "Bisexual",
            "Gay",
            "Heterosexual or straight",
            "Lesbian",
            "Pansexual",
            "Queer",
            "None of the above",
          ],
        },
        {
          question: "Do you consider yourself transgender?",
          options: ["Yes", "No"],
        },
      ],
    },
  ],
};

// Helper function to render different types of input fields
const renderField = (question) => {
  if (question.input) {
    return (
      <div className=" py-5 px-10">
        <Input name={question.question} type="text" invert={false} />;
      </div>
    );
  } else if (question.options && question.options.length > 0) {
    return (
      <div className="w-full mb-8 flex flex-col gap-5 py-10 px-20 justify-between">
        {question.options.map((option, index) => (
          <Radio
            key={index}
            label={option}
            id={question.question}
            name={question.question}
          />
        ))}
      </div>
    );
  } else if (question.rows && question.columns) {
    return (
      <div className="py-5">
        <div className=" grid mb-5 grid-cols-8 items-center">
          <h3 className="col-span-2"></h3>
          {question.columns.map((column, columnIndex) => (
            <h3 key={columnIndex} className="col-span-1 text-xs text-center">
              {column}
            </h3>
          ))}
        </div>
        {question.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="">
            <div className=" grid mb-5 grid-cols-8 items-center">
              <p className="col-span-2 text-sm">{row}</p>
              {question.columns.map((column, columnIndex) => (
                <label
                  key={columnIndex}
                  className=" col-span-1 flex  items-center justify-center">
                  <Radio
                    name={`${question.question}[${rowIndex}]`}
                    value={column}
                    className="radio-input"
                  />
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    // For cases where the question type is not recognized, you can return a default field
    return (
      <Input name={question.question} type="text" className="input-field" />
    );
  }
};

const Survay = () => {
  const user = userStore((state) => state.details);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const initialValues = {
    respondentName: "",
    respondentEmail: "",
    respondentPhone: "",
    surveyTitle: "",
    aboutSurvey: "",
    section: formData.sections.map((section) => ({
      sectionTitle: section.title,
      response: section.questions.map((question) => ({
        question: question.question,
        answer: "",
      })),
    })),
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

  const handleFormSubmit = (values) => {
    const data = {
      respondentName: user.firstName,
      respondentEmail: user.lastName,
      respondentPhone: user,
      surveyTitle: "",
      aboutSurvey: "",
      section: values.sections.map((section) => ({
        sectionTitle: section.title,
        response: section.questions.map((question) => ({
          question: question.question,
          answer: "",
        })),
      })),
    };
    console.log("Survey submitted:", data);
  };

  return (
    <Container>
      <div className=" w-full min-h-screen flex justify-center items-center mt-40">
        <div className=" w-full flex flex-col items-center">
          <Formik initialValues={{}} onSubmit={handleFormSubmit}>
            {({ handleSubmit }) => (
              <Form>
                {formData.sections.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className={`w-full ${
                      currentStep === sectionIndex ? "block" : "hidden"
                    }`}>
                    <h2 className="text-2xl font-bold mb-14">
                      {section.title}
                    </h2>
                    {section.questions.map((question, questionIndex) => (
                      <div
                        key={questionIndex}
                        className={` flex flex-col w-full mx-auto bg-gray-50  mb-3 py-5 px-5 rounded-lg ${
                          currentStep === sectionIndex ? "block" : "hidden"
                        }`}>
                        <h3 className=" text-xl font-semibold">
                          {question.question}
                        </h3>
                        {renderField(question)}
                      </div>
                    ))}
                  </div>
                ))}
                {/* {currentStep > 0 && (
                  <Button
                    type="button"
                    onClick={handlePreviousStep}
                    className="previous-button">
                    Previous
                  </Button>
                )} */}
                {currentStep < formData.sections.length - 1 ? (
                  <Button
                    onClick={handleNextStep}
                    typpe="btn"
                    to="/"
                    varient="contained"
                    color="primary"
                    size="full">
                    Next
                  </Button>
                ) : (
                  <Button
                    typpe="btn"
                    to="/"
                    varient="contained"
                    color="primary"
                    size="full">
                    Submit
                  </Button>
                )}
              </Form>
            )}
          </Formik>

          <div className="w-[700px] py-5 flex justify-between">
            {currentStep !== 0 ? (
              <button
                onClick={handlePreviousStep}
                className=" flex items-center">
                <RxArrowLeft className="mr-3" />
                Go Back{" "}
              </button>
            ) : (
              <div />
            )}
            <button onClick={handleNextStep} className=" flex items-center">
              Skip <RxArrowTopRight className="ml-3" />{" "}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Survay;
