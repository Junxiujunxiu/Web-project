import { UserAttributes } from "../../../utils/AuthSlice";
import avatar from "../../../assets/avatar.png";
import lock from "../../../assets/lock.png";
import { createSearchParams, useNavigate } from "react-router-dom";

const PersonalInfo: React.FC<{ userAttributes: UserAttributes }> = ({
  userAttributes,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="absolute left-0 w-[289px] border-r border-gray-500 h-full">
        <div className="flex flex-col w-full h-full items-center">
          <ul className="w-full">
            <li>
              <button
                className="flex px-5 py-3 border-none bg-red-300 w-full outline-none"
                onClick={() => {
                  const searchParams = {
                    _id: window.localStorage.getItem("_id")!,
                  };
                  navigate({
                    pathname: "/profile/dashboard",
                    search: `?${createSearchParams(searchParams)}`,
                  });
                }}
              >
                <img src={avatar} alt="" className="h-8" />
                <p className="font-black text-2xl px-4">个人信息</p>
              </button>
            </li>
            <li>
              <button
                className="flex px-5 py-3 border-none w-full outline-none"
                onClick={() => {
                  const searchParams = {
                    _id: window.localStorage.getItem("_id")!,
                  };
                  navigate({
                    pathname: "/profile/settings",
                    search: `?${createSearchParams(searchParams)}`,
                  });
                }}
              >
                <img src={lock} alt="" className="h-8" />
                <p className="font-black text-2xl px-4">账号设置</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-[289px] w-[calc(100%-289px)] px-8">
        <div className="w-[1000px] mx-auto">
          <h1 className="text-6xl font-black text-center pt-2 pb-6 border-b-2 border-gray-800">
            主 页
          </h1>
          <div className="flex w-[1000px] h-[400px] text-4xl items-center box-border font-black py-8 relative">
            <div className="w-full">
              <p>欢迎回来，{userAttributes.username}</p>
            </div>
            <img
              src="https://s1.pearlcdn.com/NAEU/Upload/News/22b9166216f20230227231344597.jpg"
              alt=""
              className="rounded-2xl h-full object-cover"
            ></img>
          </div>
          <div className="w-[1000px] h-full p-8 box-border mx-auto border rounded-2xl my-8">
            <div className="flex items-center">
              <div className="bg-mainRed rounded-full w-[20px] h-[20px] mr-5"></div>
              <h2 className="text-3xl font-black py-2">即将开始的活动</h2>
            </div>
            <section
              id="home_on_going_event"
              className="h-full w-full box-border relative overflow-hidden cursor-pointer"
              onMouseEnter={() => {
                document
                  .getElementById("text_on_going_event")!
                  .classList.add("titleShadow");
                document
                  .getElementById("text_on_going_event")!
                  .classList.add("text-mainRed");
              }}
              onMouseLeave={() => {
                document
                  .getElementById("text_on_going_event")!
                  .classList.remove("titleShadow");
                document
                  .getElementById("text_on_going_event")!
                  .classList.remove("text-mainRed");
              }}
            >
              <div className=" bg-[url(https://s1.pearlcdn.com/NAEU/Upload/BANNER/MAIN/bannerImage_20221122075836.jpg)] bg-center bg-no-repeat bg-cover w-full h-[500px] rounded-2xl"></div>
              <h2
                id="text_on_going_event"
                className="text-4xl font-black absolute z-10 left-8 bottom-8"
              >
                正在进行：这是什么？失忆喷雾？喷一下！这是什么？
              </h2>
            </section>
          </div>
          <div className="w-[1000px] h-full pt-8 px-8 box-border mx-auto border rounded-2xl my-8">
            <div className="flex items-center">
              <h2 className="text-3xl font-black pb-4">已参与的活动</h2>
            </div>
            <div className="text-xl font-semibold">
              <ul>
                <li className="border-t">
                  <button className="border-none py-3">
                    给大家来点想看的东西啊1
                  </button>
                </li>
                <li className="border-t">
                  <button className="border-none py-3">
                    给大家来点想看的东西啊2
                  </button>
                </li>
                <li className="border-t">
                  <button className="border-none py-3">
                    给大家来点想看的东西啊3
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
