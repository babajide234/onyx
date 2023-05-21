import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Survay from "../pages/Survay";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Survay/>,
          },
        ],
      },
])

export default router;
