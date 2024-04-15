import { useNavigate, useSearchParams } from "react-router-dom";
import React from "react";
import { ScrollandLoad } from "../hooks/ScrollandLoad";
import { Link } from "react-router-dom";

const ScrollSnap: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("user");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const targets = document.getElementsByClassName("text");
  ScrollandLoad(options, targets);

  return (
    <div className="snap-y snap-proximity h-screen w-screen overflow-scroll relative">
      <header className="sticky top-0  flex items-center justify-center">
        <button
          className="border-solid border-2 rounded-full border-indigo-600 ring ring-pink-500 ring-offset-2 ring-offset-pink-100 p-2 m-4"
          onClick={() => {
            navigate("/home");
          }}
        >
          {userId}
        </button>
      </header>
      <div className="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl">
        1
      </div>
      <div className="snap-start bg-cyan-200 w-screen h-screen flex items-center justify-center text-8xl">
        2
      </div>
      <div className="snap-start bg-red-200 w-screen h-screen flex items-center justify-center text-8xl">
        <p className="text">IN VIEWPORT</p>
      </div>
      <div className="snap-start bg-green-200 w-screen h-screen flex items-center justify-center text-8xl">
        <p className="text">IN VIEWPORT</p>
      </div>
    </div>
  );
};

export default ScrollSnap;
