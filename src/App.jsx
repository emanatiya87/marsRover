import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import Dark from "./components/darkMode";
import Form from "./Form";
import { CoardinationsProvider } from "./components/CoardinationsContext";
import CodeForm from "./CodeForm";
import Home from "./components/Home";
import { FaHome } from "react-icons/fa";

function App() {
  return (
    <>
      <BrowserRouter>
        <CoardinationsProvider>
          <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
            <div className="flex gap-1 items-center">
              <Dark />
              <Link to="/">
                <FaHome className="text-2xl" />
              </Link>
            </div>
            <div className="w-[80%] m-auto border-gray-300 border p-5 rounded-4xl my-2">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/FindCoordinates" element={<Form />} />
                <Route path="/FindCode" element={<CodeForm />} />
              </Routes>
            </div>
          </div>
        </CoardinationsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
