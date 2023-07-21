/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Field, Form, Formik } from "formik";
import LineInput from "../formElements/LineInput";
import PasswordInput from "../formElements/PasswordInput";
import LineCustomSelect from "../formElements/LineCustomSelect";
import {
  EmploymentOptions,
  IdentifyOptions,
  SexOptions,
} from "../../utils/util";
import Button from "../common/Buttons";
import { useState } from "react";
import AuthContainer from "../common/AuthContainer";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import * as Yup from "yup";
import userStore from "../../store/usserStore";
import loaderStore from "../../store/loaderStore";
import InputSelect from "../formElements/InputSelect";

const RegisterForm = () => {
  const register = userStore((state) => state.register);
  const loading = loaderStore((state) => state.loader);
  const step = userStore((state) => state.resetStep);
  const setStep = userStore((state) => state.setStep);
  const backStep = userStore((state) => state.backStep);

  const handleNext = () => {
    if (step < 5) {
      setStep();
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      backStep();
    }
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userName: "",
    selfIdentity: "",
    sexualOrientation: "",
    city: "",
    employmentStatus: "",
    employmentIndustry: "",
    employer: "",
    setGoal: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(
        /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/,
        "Invalid phone number format. Please enter a valid phone number."
      )
      .required("Phone number is required"),
    userName: Yup.string().required("Username is required"),
    selfIdentity: Yup.string().required("Identification is required"),
    sexualOrientation: Yup.string().required("Sexual Orientation is required"),
    city: Yup.string().required("City is required"),
    employmentStatus: Yup.string().required("Employment Status is required"),
    employmentIndustry: Yup.string().required(
      "Employment Industry is required"
    ),
    setGoal: Yup.array()
      .min(1, "At least one goal must be selected")
      .max(3, "Maximum of 3 goals can be selected")
      .required("Goal is required"),
    password: Yup.string().required("Password is required"),
    passwordConfirmation: Yup.string()
      .required("Password Confirmation is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSelect = (value) => {
    console.log("Selected option:", value);
    // Perform any additional logic with the selected value
  };

  const Step = ({ children, header }) => {
    return (
      <div className=" flex flex-col ">
        <div className="">
          <button
            onClick={handlePrevious}
            className="flex items-center px-1 py-3 hover:cursor-pointer hover:text-primary ">
            <FaArrowLeft />
            <span className=" ml-3 font-normal text-base">Go Back</span>
          </button>
        </div>
        <h1 className=" font-bold text-[30px] ">{header}</h1>
        {children}
      </div>
    );
  };

  const handleSubmit = (values) => {
    console.log(values);

    const formdata = {
      firstName: values.firstName,
      lastName: values.lastName,
      otherNames: values.otherNames,
      phone: values.phone,
      email: values.email,
      userName: values.userName,
      selfIdentity: values.selfIdentity,
      sexualOrientation: values.sexualOrientation,
      city: values.city,
      employmentStatus: values.employmentStatus,
      employmentIndustry: values.employmentIndustry,
      setGoal: values.setGoal.join(","),
      password: values.password,
      passwordConfirmation: values.passwordConfirmation,
    };

    register(formdata);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ handleChange, values, errors, isValid }) => (
        <Form>
          {step === 0 && (
            <AuthContainer
              head={"Create an account."}
              subhead={"Good to have you here."}>
              <div className=" mb-5">
                <LineInput
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  error={errors.firstName}
                />
              </div>
              <div className=" mb-5">
                <LineInput
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  error={errors.lastName}
                />
              </div>
              <div className=" mb-5">
                <LineInput
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="Email"
                  error={errors.email}
                />
              </div>
              <div className=" mb-5">
                <LineInput
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone Number"
                  error={errors.phone}
                />
              </div>
              <div className=" mb-5">
                <LineInput
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Username"
                  error={errors.userName}
                />
              </div>
              <div className=" mb-5">
                <Field name="selfIdentity">
                  {({ field }) => (
                    <LineCustomSelect
                      name={field.name}
                      options={IdentifyOptions}
                      placeholder="How do you identify yourself?"
                      error={errors.selfIdentity}
                      onSelect={handleSelect}
                      onChange={handleChange}
                      value={values.selfIdentity}
                    />
                  )}
                </Field>
              </div>
              <div className=" mb-5">
                <Field name="sexualOrientation">
                  {({ field }) => (
                    <LineCustomSelect
                      name={field.name}
                      options={SexOptions}
                      placeholder="What is your sexual orientation?"
                      error={errors.sexualOrientation}
                      onSelect={handleSelect}
                      onChange={handleChange}
                      value={values.sexualOrientation}
                    />
                  )}
                </Field>
              </div>
              <div className=" mb-5">
                <LineInput
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  type="text"
                  placeholder="City"
                  error={errors.city}
                />
              </div>
              <div className="">
                <div className="mb-5">
                  <Button
                    onClick={handleNext}
                    varient="contained"
                    color="primary"
                    size="full"
                    disable={
                      values.firstName === "" &&
                      values.lastName === "" &&
                      values.email === "" &&
                      values.userName === "" &&
                      values.selfIdentity === "" &&
                      values.sexualOrientation === "" &&
                      values.city === ""
                    }>
                    Create account
                  </Button>
                </div>
              </div>
            </AuthContainer>
          )}
          {step === 1 && (
            <Step header="Set Password">
              <div className=" mb-5">
                <PasswordInput
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Password"
                  error={errors.password}
                />
              </div>
              <div className=" mb-5">
                <PasswordInput
                  name="passwordConfirmation"
                  value={values.passwordConfirmation}
                  onChange={handleChange}
                  placeholder="Password Confirmation"
                  error={errors.passwordConfirmation}
                />
              </div>
              <div className="mb-5">
                <Button
                  onClick={handleNext}
                  varient="contained"
                  color="primary"
                  size="full"
                  disable={
                    values.password === "" && values.passwordConfirmation === ""
                  }>
                  Next
                </Button>
              </div>
            </Step>
          )}
          {step === 2 && (
            <Step header="Employment Industry">
              <div className=" mb-5">
                <Field name="employmentIndustry">
                  {({ field }) => (
                    // <LineCustomSelect
                    //   name={field.name}
                    //   value={values.employmentIndustry}
                    //   options={EmploymentOptions}
                    //   onChange={handleChange}
                    //   onSelect={handleSelect}
                    //   placeholder="Select an industry"
                    //   error={errors.employmentIndustry}
                    // />
                    <InputSelect
                      name={field.name}
                      value={values.employmentIndustry}
                      options={EmploymentOptions}
                      onChange={handleChange}
                      onSelect={handleSelect}
                      placeholder="Select an industry"
                      error={errors.employmentIndustry}
                    />
                  )}
                </Field>
              </div>
              <div className="mb-5">
                <Button
                  onClick={handleNext}
                  varient="contained"
                  color="primary"
                  size="full"
                  disable={values.employmentIndustry === ""}>
                  Next
                </Button>
              </div>
            </Step>
          )}
          {step === 3 && (
            <Step header="What Are Your Goals?">
              <p className="mb-9 mt-10">Select any 3 of your choice</p>
              <div className=" mb-5">
                <label className=" flex items-center mb-9">
                  <input
                    type="checkbox"
                    name="setGoal"
                    value="Networking"
                    onChange={handleChange}
                    id="setGoal"
                    checked={values.setGoal.includes("Networking")}
                    className=" mr-5"
                  />
                  <p className="">Networking</p>
                </label>
                <label className=" flex items-center mb-9">
                  <input
                    type="checkbox"
                    name="setGoal"
                    value="Mentorship"
                    onChange={handleChange}
                    id="setGoal"
                    checked={values.setGoal.includes("Mentorship")}
                    className=" mr-5"
                  />
                  <p className="">Mentorship</p>
                </label>
                <label className=" flex items-center mb-9">
                  <input
                    type="checkbox"
                    name="setGoal"
                    value="Career Growth and Development"
                    onChange={handleChange}
                    checked={values.setGoal.includes(
                      "Career Growth and Development"
                    )}
                    id="setGoal"
                    className=" mr-5"
                  />
                  <p className="">Career Growth and Development</p>
                </label>
                <label className=" flex items-center mb-9">
                  <input
                    type="checkbox"
                    name="setGoal"
                    value="Job seeker"
                    onChange={handleChange}
                    checked={values.setGoal.includes("Job seeker")}
                    id="setGoal"
                    className=" mr-5"
                  />
                  <p className="">Job seeker</p>
                </label>
                <label className=" flex items-center mb-9">
                  <input
                    type="checkbox"
                    name="setGoal"
                    value="Recruitment"
                    onChange={handleChange}
                    checked={values.setGoal.includes("Recruitment")}
                    id="setGoal"
                    className=" mr-5"
                  />
                  <p className="">Recruitment</p>
                </label>
                <label className=" flex items-center mb-9">
                  <input
                    type="checkbox"
                    name="setGoal"
                    value="Others"
                    onChange={handleChange}
                    checked={values.setGoal.includes("Others")}
                    id="setGoal"
                    className=" mr-5"
                  />
                  <p className="">Others</p>
                </label>
              </div>
              {errors.setGoal && (
                <div className="text-red-500 text-xs mb-5">
                  {errors.setGoal}
                </div>
              )}

              <div className="mb-5">
                <Button
                  onClick={handleNext}
                  varient="contained"
                  color="primary"
                  size="full"
                  disable={
                    values.setGoal.length === 0 || values.setGoal.length !== 3
                  }>
                  Next
                </Button>
              </div>
            </Step>
          )}
          {step === 4 && (
            <Step header="Employment Status">
              <p className="mb-9 mt-10">Select one of your choice</p>
              <div className=" mb-5">
                <label className=" flex items-center mb-9 hover:cursor-pointer hover:text-primary">
                  <input
                    type="radio"
                    value="Employed Full time"
                    name="employmentStatus"
                    onChange={handleChange}
                    id="employmentStatus"
                    className=" mr-5"
                  />
                  <p className="">Employed Full time</p>
                </label>
                <label className=" flex items-center mb-9 hover:cursor-pointer hover:text-primary">
                  <input
                    type="radio"
                    name="employmentStatus"
                    onChange={handleChange}
                    value="Employed Part time"
                    id="employmentStatus"
                    className=" mr-5"
                  />
                  <p className="">Employed Part time</p>
                </label>
                <label className=" flex items-center mb-9 hover:cursor-pointer hover:text-primary">
                  <input
                    type="radio"
                    name="employmentStatus"
                    onChange={handleChange}
                    value="Unemployed"
                    id="employmentStatus"
                    className=" mr-5"
                  />
                  <p className="">Unemployed</p>
                </label>
                <label className=" flex items-center mb-9 hover:cursor-pointer hover:text-primary">
                  <input
                    type="radio"
                    name="employmentStatus"
                    onChange={handleChange}
                    value="Self employed"
                    id="employmentStatus"
                    className=" mr-5"
                  />
                  <p className="">Self employed</p>
                </label>
              </div>
              <div className="mb-5">
                <Button
                  onClick={handleNext}
                  varient="contained"
                  color="primary"
                  size="full"
                  disable={values.employmentStatus === ""}>
                  Next
                </Button>
              </div>
            </Step>
          )}
          {step === 5 && (
            <Step header="Current Employer">
              <div className=" mb-5">
                <LineInput
                  name="employer"
                  value={values.employer}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Company Name"
                  error={errors.employer}
                />
              </div>
              <div className=" mb-5">
                {Object.keys(errors).length > 0 && (
                  <div>
                    <ul className="">
                      {Object.values(errors).map((error, index) => (
                        <li className=" text-red-500" key={index}>
                          {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="mb-5">
                <Button
                  type="submit"
                  varient="contained"
                  color="primary"
                  size="full"
                  loading={loading}
                  disable={!isValid || loading}>
                  Continue
                </Button>
              </div>
            </Step>
          )}

          {step === 6 && (
            <div className="">
              <div className=" flex justify-center mb-5">
                <div className="  w-40 h-40 rounded-full bg-primary flex justify-center items-center text-7xl text-white ">
                  {" "}
                  <FaCheck />
                </div>
              </div>
              <div className=" mb-5 text-center">
                <h2 className=" font-bold text-4xl">Successful</h2>
              </div>
              <div className="mb-5">
                <Button
                  typpe="link"
                  to="/"
                  varient="contained"
                  color="primary"
                  size="full">
                  Continue
                </Button>
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
