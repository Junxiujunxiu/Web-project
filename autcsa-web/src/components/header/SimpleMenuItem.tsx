import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SimpleMenuItem: React.FC<{
  name: string;
  id: string;
  focused?: boolean;
}> = ({ name, id, focused = false }) => {
  const [textWidth, setTextWidth] = useState(0);
  var counter = 0;

  useEffect(() => {
    if (focused) {
      setTextWidth(document.getElementById(id + "_text")!.offsetWidth);
      if (counter === 0 && id === "staff_nav") {
        document.getElementById(id + "_underline")!.classList.add("w-[64px]");
      } else if (counter === 0 && id === "qa_nav") {
        document.getElementById(id + "_underline")!.classList.add("w-[38px]");
      } else {
        document.getElementById(id + "_underline")!.classList.add("w-[32px]");
      }
      counter++;
    }
  }, [textWidth, id, counter, focused]);

  return (
    <li>
      <Link
        to={"/" + id.split("_")[0] + "Page"}
        className="flex relative items-center justify-items-center h-full px-12 box-border"
        id={id}
      >
        {focused ? (
          <div
            className="bg-mainRed rounded-full h-0.5 absolute bottom-10 left-[48px] "
            id={id + "_underline"}
          ></div>
        ) : (
          <div></div>
        )}
        <span id={id + "_text"}>{name}</span>
      </Link>
    </li>
  );
};

export default SimpleMenuItem;
