import InputDiv from "./components/InputDiv";
import SelectDiv from "./components/SelectDiv";
import Btn from "./components/Btn";
import { useState } from "react";
export default function CodeForm() {
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
  function run(e) {
    e.preventDefault();
    let ySteps = Math.abs(nextCoordinates.y - coardinations.y);
    let xSteps = Math.abs(nextCoordinates.x - coardinations.x);
    // north
    if (coardinations.d == 0) {
      if (nextCoordinates.y > coardinations.y) {
        setCode((prev) => [...prev, ..."F".repeat(ySteps)]);
      } else {
        setCode((prev) => [...prev, ..."B".repeat(ySteps)]);
      }
      if (nextCoordinates.x > coardinations.x) {
        setCode((prev) => [...prev, "R"]);
        setCode((prev) => [...prev, ..."F".repeat(xSteps)]);
      } else {
        setCode((prev) => [...prev, "R"]);
        setCode((prev) => [...prev, ..."B".repeat(xSteps)]);
      }
    }
    // south
    else if (coardinations.d == 2) {
      if (nextCoordinates.y > coardinations.y) {
        setCode((prev) => [...prev, ..."B".repeat(ySteps)]);
      } else {
        setCode((prev) => [...prev, ..."F".repeat(ySteps)]);
      }
      if (nextCoordinates.x > coardinations.x) {
        setCode((prev) => [...prev, "L"]);
        setCode((prev) => [...prev, ..."F".repeat(xSteps)]);
      } else {
        setCode((prev) => [...prev, "R"]);
        setCode((prev) => [...prev, ..."F".repeat(xSteps)]);
      }
    }
    // east
    else if (coardinations.d == 1) {
      if (nextCoordinates.x > coardinations.x) {
        setCode((prev) => [...prev, ..."F".repeat(xSteps)]);
      } else {
        setCode((prev) => [...prev, ..."B".repeat(xSteps)]);
      }
      if (nextCoordinates.y > coardinations.y) {
        setCode((prev) => [...prev, "L"]);
        setCode((prev) => [...prev, ..."F".repeat(ySteps)]);
      } else {
        setCode((prev) => [...prev, "R"]);
        setCode((prev) => [...prev, ..."F".repeat(ySteps)]);
      }
    }
    // west
    else if (coardinations.d == 3) {
      if (nextCoordinates.x > coardinations.x) {
        setCode((prev) => [...prev, ..."B".repeat(xSteps)]);
      } else {
        setCode((prev) => [...prev, ..."F".repeat(xSteps)]);
      }
      if (nextCoordinates.y > coardinations.y) {
        setCode((prev) => [...prev, "R"]);
        setCode((prev) => [...prev, ..."F".repeat(ySteps)]);
      } else {
        setCode((prev) => [...prev, "L"]);
        setCode((prev) => [...prev, ..."F".repeat(ySteps)]);
      }
    }
  }
  return (
    <>
      <h2 className="text-center font-bold">
        Current : ({coardinations.x},{coardinations.y},
        {directions[coardinations.d]})
      </h2>
      <form onSubmit={run}>
        <InputDiv
          saveValue={(e) =>
            setCoardinations((prev) => ({ ...prev, x: e.target.value }))
          }
          title={"Current X"}
          placeholder={"X Directions"}
          type={"number"}
        />
        <InputDiv
          saveValue={(e) =>
            setCoardinations((prev) => ({ ...prev, y: e.target.value }))
          }
          title={"Current Y"}
          placeholder={"Y Directions"}
          type={"number"}
        />
        <SelectDiv
          title={"Current Directions"}
          saveValue={(e) =>
            setCoardinations((prev) => ({ ...prev, d: e.target.value }))
          }
        />
        <h2 className="text-center font-bold">
          Distination : ({nextCoordinates.x},{nextCoordinates.y})
        </h2>
        <InputDiv
          saveValue={(e) =>
            setNextCoordinates((prev) => ({ ...prev, x: e.target.value }))
          }
          title={"Next X"}
          placeholder={"X Directions"}
          type={"number"}
        />
        <InputDiv
          saveValue={(e) =>
            setNextCoordinates((prev) => ({ ...prev, y: e.target.value }))
          }
          title={"Next Y"}
          placeholder={"Y Directions"}
          type={"number"}
        />
        <Btn type={"submit"} content={"Run"} />
      </form>
      <h3 className="text-center font-bold">Code: {code.join("")}</h3>
    </>
  );
}
