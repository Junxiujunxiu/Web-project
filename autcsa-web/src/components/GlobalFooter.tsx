import React from "react";
import discord from "../assets/discord.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import redbook from "../assets/redbook.svg";
import wechat from "../assets/wechat.svg";
import csaLogoWhite from "../assets/csaLogo_white.png";

const GlobalFooter: React.FC = () => {
  return (
    <footer className="footer_wrap bg-mainRed">
      <div className="sns_area flex justify-center items-center py-4 mb-4 bg-[#96161E]">
        <a
          className="bg-white w-8 h-8 flex justify-center items-center rounded-full mx-2"
          href=""
        >
          <img className="w-5 h-5" src={discord} alt="" />
        </a>
        <a
          className="bg-white w-8 h-8 flex justify-center items-center rounded-full mx-2"
          href=""
        >
          <img className="w-5 h-5" src={facebook} alt="" />
        </a>
        <a
          className="bg-white w-8 h-8 flex justify-center items-center rounded-full mx-2"
          href=""
        >
          <img className="w-5 h-5" src={instagram} alt="" />
        </a>
        <a
          className="bg-white w-8 h-8 flex justify-center items-center rounded-full mx-2"
          href=""
        >
          <img className="w-5 h-5" src={redbook} alt="" />
        </a>
        <a
          className="bg-white w-8 h-8 flex justify-center items-center rounded-full mx-2"
          href=""
        >
          <img className="w-5 h-5" src={wechat} alt="" />
        </a>
      </div>
      <div className="footer_bottom flex justify-between mx-auto px-[30px] max-w-[1400px] box-border ">
        <div className="flex-row justify-center items-center columns-sm mx-auto">
          <img src={csaLogoWhite} className="h-[200px] w-[200px]" alt=""></img>
        </div>
        <div className="flex-row justify-center items-center columns-sm  mx-auto">
          <h2 className="text-gray-50 font-black text-3xl pb-6">常见问题</h2>
          <ul>
            <li>
              <a className="text-gray-50 font-black text-lg" href="">
                如何加入学生会
              </a>
            </li>
            <li>
              <a className="text-gray-50 font-black text-lg" href="">
                活动和项目安排
              </a>
            </li>
            <li>
              <a className="text-gray-50 font-black text-lg" href="">
                学生会提供的资源
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-row justify-center items-center columns-sm  mx-auto">
          <h2 className="text-gray-50 font-black text-3xl pb-6">关于</h2>
          <ul>
            <li>
              <a className="text-gray-50 font-black text-lg" href="">
                关于学生会
              </a>
            </li>
            <li>
              <a className="text-gray-50 font-black text-lg" href="">
                使命和目标
              </a>
            </li>
            <li>
              <a className="text-gray-50 font-black text-lg" href="">
              组织结构和团队
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-row justify-center items-center columns-sm  mx-auto relative">
          <h2 className="text-gray-50 font-black text-3xl pb-6">二维码</h2>
          <a className="h-[128px] w-[128px] bg-white flex" href=""></a>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
