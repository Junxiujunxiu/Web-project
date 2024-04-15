import React from "react";
import GlobalFooter from "../../components/GlobalFooter";
import GlobalHeader from "../../components/header/GlobalHeader";

type Merchant = {
  merchant_name: string;
  merchant_discount: string;
  merchant_location: string;
  merchant_phone: string;
  merchant_logo_url: string;
};

const annualMerchantsList = [
  {
    merchant_name: "年度商家1",
    merchant_discount: "10% off",
    merchant_location: "1 Queens street",
    merchant_phone: "02112345678",
    merchant_logo_url:
      "https://s1.pearlcdn.com/NAEU/contents/img/portal/main/main_visual_grade_pegi.png",
  },
  {
    merchant_name: "年度商家2",
    merchant_discount: "10% off",
    merchant_location: "1 Queens street",
    merchant_phone: "02112345678",
    merchant_logo_url:
      "https://s1.pearlcdn.com/NAEU/contents/img/portal/main/main_visual_grade_pegi.png",
  },
  {
    merchant_name: "年度商家3",
    merchant_discount: "10% off",
    merchant_location: "1 Queens street",
    merchant_phone: "02112345678",
    merchant_logo_url:
      "https://s1.pearlcdn.com/NAEU/contents/img/portal/main/main_visual_grade_pegi.png",
  },
];

const coopMerchantsList = [
  {
    merchant_name: "合作商家1",
    merchant_discount: "10% off",
    merchant_location: "1 Queens street",
    merchant_phone: "02112345678",
    merchant_logo_url:
      "https://s1.pearlcdn.com/NAEU/contents/img/portal/main/main_visual_grade_pegi.png",
  },
  {
    merchant_name: "合作商家2",
    merchant_discount: "10% off",
    merchant_location: "1 Queens street",
    merchant_phone: "02112345678",
    merchant_logo_url:
      "https://s1.pearlcdn.com/NAEU/contents/img/portal/main/main_visual_grade_pegi.png",
  },
  {
    merchant_name: "合作商家3",
    merchant_discount: "10% off",
    merchant_location: "1 Queens street",
    merchant_phone: "02112345678",
    merchant_logo_url:
      "https://s1.pearlcdn.com/NAEU/contents/img/portal/main/main_visual_grade_pegi.png",
  },
  {
    merchant_name: "合作商家4",
    merchant_discount: "10% off",
    merchant_location: "1 Queens street",
    merchant_phone: "02112345678",
    merchant_logo_url:
      "https://s1.pearlcdn.com/NAEU/contents/img/portal/main/main_visual_grade_pegi.png",
  },
  {
    merchant_name: "合作商家5",
    merchant_discount: "10% off",
    merchant_location: "1 Queens street",
    merchant_phone: "02112345678",
    merchant_logo_url:
      "https://s1.pearlcdn.com/NAEU/contents/img/portal/main/main_visual_grade_pegi.png",
  },
  {
    merchant_name: "合作商家6",
    merchant_discount: "10% off",
    merchant_location: "1 Queens street",
    merchant_phone: "02112345678",
    merchant_logo_url:
      "https://s1.pearlcdn.com/NAEU/contents/img/portal/main/main_visual_grade_pegi.png",
  },
];

const MembershipPage: React.FC = () => {
  return (
    <div className="font-home" id="membership_page">
      <div className="membership_header">
        <GlobalHeader currentPage="membership" />
      </div>

      <div className="membership_body">
        <div className="w-full px-12 pt-6 bg-[url(https://s1.pearlcdn.com/NAEU/contents/img/portal/gameinfo/wiki_guide_bg.jpg)] bg-top bg-no-repeat">
          <h1 className="font-black text-6xl text-gray-100 text-center mt-16 pb-20 box-border">
            会员 Membership
          </h1>

          <div className="w-[1000px] h-[400px] flex mx-auto box-border p-5">
            <img
              src="https://s1.pearlcdn.com/NAEU/Upload/News/22b9166216f20230227231344597.jpg"
              className="h-full object-cover rounded-2xl"
            ></img>
            <div className="w-full h-full relative">
              <div className="px-12 py-6">
                <h3 className="font-black text-3xl h-[40px] text-richGold">
                  AUTCSA 会员卡
                </h3>
                <h3 className="font-extrabold text-lg text-gray-100 pr-6 line-clamp-6">
                  会员卡介绍
                </h3>
                <div className="absolute bottom-5 right-12">
                  <button className="w-[200px] h-[50px] text-white font-black bg-richGold ease-in-out duration-300 hover:bg-darkGold">
                    申请会员卡
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="py-12">
            <h2 className="text-richGold text-5xl text-center font-black pb-4">
              合作商家
            </h2>
            <div id="mono-merchants" className="py-4">
              <h3 className="text-mainRed text-3xl text-center font-black">
                独家合作商家
              </h3>
              <div className="flex justify-center my-4">
                <div className="min-w-[651px] h-[256px] flex ">
                  <img
                    className=" w-[256px] h-[256px]"
                    src="https://s1.pearlcdn.com/NAEU/contents/img/common/logo_bdo_naeu.svg?v=1"
                  ></img>
                  <div className="w-full h-full relative">
                    <div className="px-12 py-6">
                      <h3 className="font-black text-3xl h-[40px]">
                        黑色沙漠 Black Desert
                      </h3>
                      <div className="absolute bottom-2">
                        <h3 className="font-black text-2xl h-[40px]">
                          折扣：
                          <span className="font-black text-2xl h-[40px] text-richGold">
                            持会员卡消费享：
                          </span>
                          <span className="font-black text-2xl h-[40px] text-mainRed">
                            免费
                          </span>
                        </h3>
                        <h3 className="font-black text-2xl h-[40px] ">
                          地址：
                          <span className="font-black text-2xl h-[40px] text-mainRed">
                            N/A
                          </span>
                        </h3>
                        <h3 className="font-black text-2xl h-[40px]">
                          电话：
                          <span className="font-black text-2xl h-[40px] text-mainRed">
                            N/A
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="annual-merchants" className="py-4">
              <h3 className="text-subRed text-3xl text-center font-black py-4">
                年度合作商家
              </h3>
              <div className="flex flex-wrap w-[1300px] mx-auto my-4">
                {annualMerchantsList.map((merchant, index) => {
                  return (
                    <div className="w-1/3 h-[128px] flex px-6">
                      <img
                        className="w-[128px] h-[128px] object-none"
                        src={merchant.merchant_logo_url}
                      ></img>
                      <div className="py-[4px]">
                        <h3 className="font-black text-xl h-[30px] text-white">
                          {merchant.merchant_name}
                        </h3>
                        <h3 className="font-black text-xl h-[30px]">
                          折扣：
                          <span className="font-black text-xl h-[30px] text-mainRed">
                            {merchant.merchant_discount}
                          </span>
                        </h3>
                        <h3 className="font-black text-xl h-[30px] ">
                          地址：
                          <span className="font-black text-xl h-[30px] text-mainRed">
                            {merchant.merchant_location}
                          </span>
                        </h3>
                        <h3 className="font-black text-xl h-[30px]">
                          电话：
                          <span className="font-black text-xl h-[30px] text-mainRed">
                            {merchant.merchant_phone}
                          </span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div id="coop-merchants" className="py-4">
              <h3 className="text-white text-3xl text-center font-extrabold py-4">
                合作商家
              </h3>
              <div className="flex flex-wrap w-[1300px] mx-auto my-4">
                {coopMerchantsList.map((merchant, index) => {
                  return (
                    <div className="w-1/6 h-[158px] flex flex-col items-center">
                      <img
                        className="w-[128px] h-[128px] object-none"
                        src={merchant.merchant_logo_url}
                      ></img>
                      <div className="py-[4px]">
                        <h3 className="font-black text-xl h-[30px] text-white">
                          {merchant.merchant_name}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="membership_footer">
        <GlobalFooter />
      </div>
    </div>
  );
};

export default MembershipPage;
