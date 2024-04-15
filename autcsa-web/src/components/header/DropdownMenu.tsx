import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu: React.FC<{
  name: string;
}> = ({ name }) => {
  const [open, setOpen] = useState(false);
  const itemList = [
    {
      item: "Q&A",
      id: "qa_drop",
      link: "/qaPage",
    },
    {
      item: "会员",
      id: "member_drop",
      link: "/membershipPage",
    },
    {
      item: "理事介绍",
      id: "staff_drop",
      link: "/staffPage",
    },
    {
      item: "资讯",
      id: "news_drop",
      link: "/newsPage",
    },
  ];

  return (
    <li
      onMouseLeave={() => {
        setOpen(false);
      }}
      className="relative"
    >
      <div
        className="flex relative items-center justify-items-center h-full px-12 hidden"
        id="more"
        onMouseEnter={() => {
          setOpen(true);
        }}
      >
        <span>{name}</span>
      </div>
      <div
        className={`box-border min-w-full bg-white  ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-300 ease-in-out overflow-hidden z-20 absolute`}
      >
        <ul
          className={`box-border min-w-full border-x ${
            open ? "max-h-96" : "max-h-0"
          } transition-all duration-200 ease-in-out z-20`}
        >
          {itemList.map((item, index) => {
            return (
              <li>
                <Link
                  to={item.link}
                  className="flex items-center justify-start px-4 py-3 border-b hidden"
                  key={index}
                  id={item.id}
                >
                  {item.item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default DropdownMenu;
