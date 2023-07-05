import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import GlobalAlert from "./components/common/GlobalAlert";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AnimatePresence>
        <QueryClientProvider client={queryClient}>
          <GlobalAlert />
          <RouterProvider router={router} />
          <ToastContainer />
        </QueryClientProvider>
      </AnimatePresence>
    </>
  );
}

export default App;
