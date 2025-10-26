import "./App.css";
import Dark from "./components/darkMode";
import Form from "./Form";
import HeadTitle from "./components/HeadTitle";
import { CoardinationsProvider } from "./components/CoardinationsContext";
function App() {
  return (
    <>
      <CoardinationsProvider>
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
          <Dark />
          <div className=" w-[80%] m-auto border-gray-300 border p-5 rounded-4xl my-2">
            <HeadTitle />
            <Form />
          </div>
        </div>
      </CoardinationsProvider>
    </>
  );
}

export default App;
