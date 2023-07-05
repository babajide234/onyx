import { Link } from "react-router-dom";
import RegisterForm from "../components/forms/RegisterForm";

const Register = () => {
  return (
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
  );
};

export default Register;
