import { Link } from "react-router-dom";
import RegisterForm from "../components/forms/RegisterForm";

const Register = () => {
  return (
    // <AuthContainer head={"Create an account."} subhead={'Good to have you here.'}>
    <>
      <RegisterForm />
      <div className=" w-full flex justify-center  ">
        <p className="">
          Already have an account?
          <Link to="/login" className="text-primary font-bold">
            {" "}
            Log in
          </Link>
        </p>
      </div>
    </>
    // </AuthContainer>
  );
};

export default Register;
