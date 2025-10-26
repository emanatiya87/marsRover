import { Link } from "react-router";
export default function Home() {
  return (
    <>
      <h2>
        if you want to Find Next coordinates click
        <Link to="/FindCoordinates " className="text-red-600">
          {" "}
          here ..
        </Link>
      </h2>
      <br />
      <h2>
        But if you have direction and Want to find code click
        <Link to="/FindCode" className="text-red-600">
          {" "}
          here ..
        </Link>
      </h2>
    </>
  );
}
