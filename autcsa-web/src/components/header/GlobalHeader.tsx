import React, { useEffect, useState } from "react";
import csaLogo from "../../assets/csaLogo.png";
import DropdownMenu from "./DropdownMenu";
import SimpleMenuItem from "./SimpleMenuItem";
import avatar from "../../assets/avatar.png";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { Auth } from "../../utils/Auth";
import { CheckOverlap } from "../../utils/HeaderUtils";
import AvatarDropdown from "./AvatarDropdown";


const GlobalHeader: React.FC<{ currentPage: string }> = ({ currentPage }) => {
  const [windowSize, setWindowSize] = useState(1920);
  const [userAttributes, setUserAttributes] = useState(Auth.getUserAttribute());
  const [avatarDropdown, setAvatarDropdown] = useState(false);

  useEffect(() => {
    CheckOverlap();
  }, [windowSize]);

  window.addEventListener("resize", (event) => {
    CheckOverlap();
  });

  return (
    <header className="flex-row h-28 items-center font-bold mx-32">
      <div>
        <a
          href="http://localhost:3000/homePage"
          className="absolute z-10 h-24 ml-2 mt-2"
        >
          <img src={csaLogo} alt="" className=" h-24" />
        </a>
        <nav className="w-full h-28 pl-40 flex items-center justify-items-center">
          <ul className="whitespace-nowrap flex h-full">
            <SimpleMenuItem
              name="主页"
              id="home_nav"
              focused={currentPage === "home"}
            />
            <SimpleMenuItem
              name="活动"
              id="events_nav"
              focused={currentPage === "events"}
            />
            <SimpleMenuItem
              name="资讯"
              id="news_nav"
              focused={currentPage === "news"}
            />
            <SimpleMenuItem
              name="关于我们"
              id="staff_nav"
              focused={currentPage === "staff"}
            />
            <SimpleMenuItem
              name="会员"
              id="membership_nav"
              focused={currentPage === "membership"}
            />
            <SimpleMenuItem
              name="Q&A"
              id="qa_nav"
              focused={currentPage === "qa"}
            />
            <DropdownMenu name="More▾" />
          </ul>
          <div
            className="flex items-center justify-items-center absolute right-0 mr-32 z-10"
            id="rightBox"
          >
            <div className="flex h-10 bg-slate-200 rounded-full p-1">
              <span className="h-8 w-8">
                <SearchIcon />
              </span>
              <input
                className=" h-8 border-none rounded-md outline-none bg-slate-200 font-normal"
                placeholder="Search.."
              ></input>
            </div>
            {Auth.isAuth() ? (
              <div
                className=" h-12 mx-12"
                onMouseEnter={() => {
                  setAvatarDropdown(true);
                }}
                onMouseLeave={() => {
                  setAvatarDropdown(false);
                }}
              >
                <a
                  href={
                    "http://localhost:3000/profile/dashboard?_id=" +
                    window.localStorage.getItem("_id")
                  }
                >
                  <img
                    src={userAttributes.picture}
                    alt=""
                    className="h-12 rounded-full"
                  />
                </a>
                <AvatarDropdown open={avatarDropdown} />
              </div>
            ) : (
              <a
                href="http://localhost:3000/authentication"
                className=" h-12 mx-12"
              >
                <img src={avatar} alt="" className="h-12" />  
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GlobalHeader;
