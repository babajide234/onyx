import { MdLogout } from "react-icons/md";
import userStore from "../../store/usserStore";
import Button from "./Buttons";
import { useState } from "react";

const NavbarButtonContainer = () => {
  const isLoggedIn = userStore((state) => state.isLoggedIn);
  const details = userStore((state) => state.details);
  const logout = userStore((state) => state.logout);

  const [dropdown, setDropDown] = useState(false);

  const getInitials = () => {
    // Assuming the details object contains the user's first and last name
    const { firstName, lastName } = details;

    // Return the initials by taking the first letter of each name
    return `${firstName.charAt(0).toUpperCase()}${lastName
      .charAt(0)
      .toUpperCase()}`;
  };

  return (
    <div className=" gap-3 hidden md:flex">
      {isLoggedIn ? (
        <div className=" w-full flex justify-center relative">
          <div
            onClick={() => setDropDown(!dropdown)}
            className=" w-14 h-14 rounded-full bg-primary flex justify-center items-center hover:cursor-pointer hover:shadow-2xl">
            <p className=" font-bold text-white">{getInitials()}</p>
          </div>
          <div
            className={` ${
              dropdown ? " hidden h-0 overflow-hidden p-0 " : " h-[5rem]"
            } w-[10rem] rounded-2xl bg-white px-5 py-5 absolute shadow-md top-16 right-0 border`}>
            <button
              onClick={() => logout()}
              className=" flex items-center hover:bg-gray-50 w-full px-2 py-2 hover:text-primary font-semibold">
              {" "}
              <MdLogout className=" mr-3" /> Logout
            </button>
          </div>
        </div>
      ) : (
        <>
          <Button
            varient="empty"
            typpe="link"
            to="/login"
            color="default"
            size="small">
            Log in
          </Button>
          <Button
            varient="contained"
            typpe="link"
            to="/register"
            color="primary"
            size="small">
            Sign up
          </Button>
        </>
      )}
    </div>
  );
};

export default NavbarButtonContainer;
