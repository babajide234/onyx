/* eslint-disable no-unused-vars */
import { ErrorMessage, Form, Formik } from "formik";
import Button from "../common/Buttons";
import AuthContainer from "../common/AuthContainer";
import { FaArrowLeft } from "react-icons/fa";
import PasswordInput from "../formElements/PasswordInput";
import * as Yup from "yup";
import userStore from "../../store/usserStore";
import loaderStore from "../../store/loaderStore";

const ResetPasswordForm = () => {
  const verify = userStore((state) => state.verify);
  const code = userStore((state) => state.code);
  const loading = loaderStore((state) => state.loading);

  const initialValues = {
    password: "",
    confirm_password: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter and one digit"
      ),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    verify(code, values.password);
  };
  return (
    <AuthContainer
      head={"Set new password"}
      subhead={"Must be at least 8 characters."}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={handleSubmit}>
        {({ handleChange, values, errors }) => (
          <Form>
            <div className=" mb-5">
              <PasswordInput
                name="password"
                value={values.password}
                onChange={handleChange}
                type={`password`}
                placeholder="Password"
                error={errors.password}
              />
            </div>
            <div className=" mb-5">
              <PasswordInput
                name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                type={`password`}
                placeholder="Confirm Password"
                error={errors.confirm_password}
              />
            </div>
            <div className="">
              <div className="mb-5">
                <Button
                  type="submit"
                  varient="contained"
                  color="primary"
                  size="full"
                  loading={loading}
                  disable={loading}>
                  Reset Password
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className=" flex justify-center">
        <Button
          typpe={"link"}
          to="/login"
          varient={"empty"}
          color={""}
          size="medium">
          {" "}
          <FaArrowLeft className=" mr-3" /> Back to log in
        </Button>
      </div>
    </AuthContainer>
  );
};

export default ResetPasswordForm;
