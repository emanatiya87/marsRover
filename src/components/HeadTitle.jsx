import { useCoardinations } from "./CoardinationsContext";
export default function HeadTitle() {
  const { coardinations, setCoardinations } = useCoardinations();
  const directions = ["north", "east", "south", "west"];

  return (
    <>
      <h1 className="my-6 text-center font-medium text-xl text-gray-900 dark:text-white">
        ( {coardinations.x}, {coardinations.y},{directions[coardinations.d]},
        {coardinations.stopped ? "STOPPED" : ""})
      </h1>
    </>
  );
}
