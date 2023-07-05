import userStore from "../../store/usserStore";
import Button from "./Buttons";

const NavbarButtonContainer = () => {
  const isLoggedIn = userStore((state) => state.isLoggedIn);
  const details = userStore((state) => state.details);

  const getInitials = () => {
    // Assuming the details object contains the user's first and last name
    const { firstName, lastName } = details;

    // Return the initials by taking the first letter of each name
    return firstName.charAt(0) + lastName.charAt(0);
  };

  return (
    <div className=" gap-3 hidden md:flex">
      {isLoggedIn ? (
        <div className=" w-full flex justify-center">
          <div className=" w-14 h-14 rounded-full bg-slate-200 flex justify-center items-center text-primary">
            <p className="">{getInitials}</p>
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
