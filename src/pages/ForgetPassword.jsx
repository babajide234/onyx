/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaArrowLeft } from "react-icons/fa";
import AuthContainer from "../components/common/AuthContainer";
import Button from "../components/common/Buttons";
import ResetForm from "../components/forms/ResetForm";
import { useState } from "react";
import PasswordRecoveryForm from "../components/forms/PasswordRecoveryForm";
import { Link } from "react-router-dom";
import ResetPasswordForm from "../components/forms/ResetPasswordForm";
import userStore from "../store/usserStore";

const StepItem = ({ index = 0, active }) => {
  return (
    <div
      className={` mt-10 mr-2 last-of-type:mr-0 w-[42px] h-[42px] rounded-full border-2 border-solid ${
        active ? "border-primary" : " border-[#D9D9D9]"
      } flex justify-center items-center`}>
      <p
        className={` text-base font-medium ${
          active ? "text-primary" : " text-[#D9D9D9]"
        }`}>
        {index}
      </p>
    </div>
  );
};

const ForgetPassword = () => {
  const step = userStore((state) => state.resetStep);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [steps] = useState(4);

  const handleNext = () => {
    if (selectedIndex < steps - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div className=" flex flex-col justify-between min-h-[60vh]">
      {step == 0 && <ResetForm />}
      {step == 1 && <PasswordRecoveryForm />}
      {step == 2 && <ResetPasswordForm />}
      {step == 3 && (
        <AuthContainer>
          <div className=" text-center">
            <h3 className=" text-[36px] font-bold">Done!</h3>
            <p className=" text-base font-normal mb-10">
              Password reset was successful
            </p>
            <Button varient="contained" color="primary" typpe="link">
              Proceed to Log in
            </Button>
          </div>
        </AuthContainer>
      )}

      <div className="flex justify-center">
        {Array.from({ length: steps }).map((_, index) => (
          <StepItem key={index} index={index + 1} active={index === step} />
        ))}
      </div>
    </div>
  );
};

export default ForgetPassword;
