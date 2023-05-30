import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Survay from "../pages/Survay";
import Home from "../pages/Home";
import Therapy from "../pages/Therapy";
import About from "../pages/About";
import Job from "../pages/Job";
import Faq from "../pages/Faq";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/therapy",
            element: <Therapy/>,
          },
          {
            path: "/about",
            element: <About/>,
          },
          {
            path: "/job",
            element: <Job/>,
          },
          {
            path: "/faq",
            element: <Faq/>,
          },
          {
            path: "/survey",
            element: <Survay/>,
          },
        ],
      },
])

export default router;
