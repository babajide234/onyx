/* eslint-disable no-unused-vars */
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
import Feed from "../pages/Feed";
import SingleEvent from "../pages/SingleEvent";
import Verify from "../pages/Verify";
import AllFeeds from "../pages/AllFeeds";
import Profile from "../pages/Profile";
import AllEvents from "../pages/AllEvents";
import SingleFeed from "../pages/SingleFeed";

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
        path: "/events",
        element: <AllEvents />,
      },
      {
        path: "/events/:eventsId",
        element: <SingleEvent />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/feeds",
        element: <AllFeeds />,
      },
      {
        path: "/feed/:eventId",
        element: <SingleFeed />,
      },
      {
        path: "/verfy/:id",
        element: <Verify />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
