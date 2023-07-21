import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Survay from "../pages/Survay";
import Home from "../pages/Home";
import Therapy from "../pages/Therapy";
import About from "../pages/About";
import Job from "../pages/Job";
import Faq from "../pages/Faq";
import Terms from "../pages/Terms";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import Event from "../pages/Event";
import SingleEvent from "../pages/SingleEvent";
import SinglePost from "../pages/SinglePost";
import Posts from "../pages/Posts";
import Verify from "../pages/Verify";
import AllEvents from "../pages/AllEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/therapy",
        element: <Therapy />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/job",
        element: <Job />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/survey",
        element: <Survay />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/events",
        element: <AllEvents />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:postId",
        element: <SinglePost />,
      },
      {
        path: "/event/:eventId",
        element: <SingleEvent />,
      },
      {
        path: "/verfy/:id",
        element: <Verify />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);

export default router;
