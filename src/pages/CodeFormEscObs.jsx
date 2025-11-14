import InputDiv from "../components/InputDiv";
import SelectDiv from "../components/SelectDiv";
import Btn from "../components/Btn";
import FindSafePath from "../utils/BFS";
import { useState, useCallback } from "react";
export default function CodeFormEscObs() {
  const [coardinations, setCoardinations] = useState({
    x: 0,
    y: 0,
    d: 0, // 0: north, 1: east, 2: south, 3: west
  });
  const directions = ["north", "east", "south", "west"];
  const [nextCoordinates, setNextCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [code, setCode] = useState([]);
  const [error, setError] = useState("");

  const obstacles = new Set(["1,4", "3,5", "7,4"]);

  function run(e) {
    e.preventDefault();
    setError("");
    setCode([]);

    const start = {
      x: parseInt(coardinations.x),
      y: parseInt(coardinations.y),
      d: parseInt(coardinations.d),
    };

    const target = {
      x: parseInt(nextCoordinates.x),
      y: parseInt(nextCoordinates.y),
    };

    console.log("Finding path from:", start, "to:", target);
    const targetKey = `${target.x},${target.y}`;
    if (obstacles.has(targetKey)) {
      setError(
        "Error: Target destination is an obstacle! Cannot navigate to this point."
      );
      console.log("Target is obstacle:", targetKey);
      return;
    }

    const startKey = `${start.x},${start.y}`;
    if (obstacles.has(startKey)) {
      setError(
        "Error: Starting position is on an obstacle! Please choose a valid start point."
      );
      console.log("Start is obstacle:", startKey);
      return;
    }

    const path = FindSafePath(start, target, obstacles);

    if (path) {
      setCode(path);
      console.log("Found path:", path.join(""));
    } else {
      setCode([]);
      setError("No safe path found to target!");
      console.log("No path found");
    }
  }

  // functions input change
  const handleCoordinationChange = useCallback((e) => {
    const { id, value } = e.target;
    setCoardinations((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleNextCoordinationChange = useCallback((e) => {
    const { id, value } = e.target;
    setNextCoordinates((prev) => ({ ...prev, [id]: value }));
  }, []);

  return (
    <>
      <h2 className="text-center font-bold">
        Current : ({coardinations.x},{coardinations.y},
        {directions[coardinations.d]})
      </h2>
      <form onSubmit={run}>
        <InputDiv
          saveValue={handleCoordinationChange}
          title={"Current X"}
          placeholder={"X Directions"}
          type={"number"}
          id="x"
        />
        <InputDiv
          saveValue={handleCoordinationChange}
          title={"Current Y"}
          placeholder={"Y Directions"}
          type={"number"}
          id="y"
        />
        <SelectDiv
          title={"Current Directions"}
          saveValue={handleCoordinationChange}
          id="d"
        />
        <h2 className="text-center font-bold">
          Destination : ({nextCoordinates.x},{nextCoordinates.y})
        </h2>
        <InputDiv
          saveValue={handleNextCoordinationChange}
          title={"Next X"}
          placeholder={"X Directions"}
          type={"number"}
          id="x"
        />
        <InputDiv
          saveValue={handleNextCoordinationChange}
          title={"Next Y"}
          placeholder={"Y Directions"}
          type={"number"}
          id="y"
        />
        <Btn type={"submit"} content={"Run"} />
      </form>
      <h3 className="text-center font-bold">Code: {code.join("")}</h3>
      <p className="text-center text-red-500">{error}</p>
    </>
  );
}
