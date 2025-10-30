import { useState, useCallback } from "react";
import Btn from "./components/Btn";
import SelectDiv from "./components/SelectDiv";
import InputDiv from "./components/InputDiv";
import { useCoardinations } from "./components/CoardinationsContext";
import HeadTitle from "./components/HeadTitle";

export default function Form() {
  const [code, setCode] = useState("");
  let codeArr = code.split("");
  const { coardinations, setCoardinations } = useCoardinations();

  const directions = ["north", "east", "south", "west"];
  let obstacles = [
    [1, 4],
    [3, 5],
    [7, 4],
  ];
  function runCode(e) {
    e.preventDefault();
    let { x, y, d } = coardinations;
    x = parseInt(x);
    y = parseInt(y);
    d = parseInt(d);
    let stopped = false;
    for (let i = 0; i < codeArr.length; i++) {
      let cmd = codeArr[i];
      let nextX = x;
      let nextY = y;
      if (cmd === "F") {
        switch (directions[d]) {
          case "north":
            nextY++;
            break;
          case "east":
            nextX++;
            break;
          case "south":
            nextY--;
            break;
          case "west":
            nextX--;
            break;
        }
      } else if (cmd === "B") {
        switch (directions[d]) {
          case "north":
            nextY--;
            break;
          case "east":
            nextX--;
            break;
          case "south":
            nextY++;
            break;
          case "west":
            nextX++;
            break;
        }
      } else if (cmd === "R") {
        d = (d + 1) % 4;
        continue;
      } else if (cmd === "L") {
        d = (d + 3) % 4;
        continue;
      }

      const hitObstacle = obstacles.some(
        (ob) => ob[0] === nextX && ob[1] === nextY
      );

      if (hitObstacle) {
        console.log(`Stopped due to obstacle at (${nextX}, ${nextY})`);
        stopped = true;
        break;
      }

      x = nextX;
      y = nextY;
    }

    setCoardinations({ x, y, d, stopped });
  }
  // functions input change
  const handleCoordinationChange = useCallback((e) => {
    const { id, value } = e.target;
    setCoardinations((prev) => ({ ...prev, [id]: value }));
  }, []);
  const handelCodeChange = useCallback((e) => {
    setCode(e.target.value.trim().toUpperCase());
  }, []);

  return (
    <>
      <HeadTitle />

      <form onSubmit={runCode}>
        <InputDiv
          saveValue={handelCodeChange}
          title={"Code"}
          placeholder={"please Enter Code"}
          type={"text"}
        />
        <InputDiv
          saveValue={handleCoordinationChange}
          title={"X"}
          placeholder={" X Directions"}
          type={"number"}
          id="x"
        />
        <InputDiv
          saveValue={handleCoordinationChange}
          title={"Y"}
          placeholder={" Y Directions"}
          type={"number"}
          id="y"
        />

        <SelectDiv
          title={"Directions"}
          saveValue={handleCoordinationChange}
          id={"d"}
        />
        <Btn type={"submit"} content={"Run"} />
      </form>
    </>
  );
}
