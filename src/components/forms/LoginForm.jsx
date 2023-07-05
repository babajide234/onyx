import { Formik, Form } from "formik";
import LineInput from "../formElements/LineInput";
import Button from "../common/Buttons";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import userStore from "../../store/usserStore";
import PasswordInput from "../formElements/PasswordInput";
import loaderStore from "../../store/loaderStore";

const LoginForm = () => {
  const login = userStore((state) => state.login);
  // const loginMutation = useMutation(userStore.login);

  const handleSubmit = async (values) => {
    login(values.email, values.password);
    // loginMutation.mutate(values.email, values.password);
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {({ handleChange, values, errors }) => (
        <Form>
          <div className=" mb-5">
            <LineInput
              name="email"
              value={values.email}
              onChange={handleChange}
              type={`text`}
              placeholder="Email"
              error={errors.email}
            />
          </div>
          <div className=" mb-3">
            <PasswordInput
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              error={errors.password}
            />
          </div>
          <div className="w-full flex justify-end mb-5">
            <Link to="/forget-password" className=" text-primary font-bold">
              forgot password?
            </Link>
          </div>
          <div className="mb-5">
            <Button
              type="submit"
              varient="contained"
              color="primary"
              size="full"
              loading={loaderStore.getState().loading}
              disable={loaderStore.getState().loading}>
              Sign in
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
