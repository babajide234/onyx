import { RouterProvider } from "react-router-dom";
import router from "./routes";
import './App.css'
import { AnimatePresence } from "framer-motion";

function App() {

  return (
    <>
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
    </>
  )
}

export default App
