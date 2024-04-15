import avatar from "../../../assets/avatar.png";
import lock from "../../../assets/lock.png";
import { UserAttributes } from "../../../utils/AuthSlice";
import { ReactComponent as AlertIcon } from "../../../assets/alert.svg";
import { ReactComponent as CorrectIcon } from "../../../assets/correct.svg";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getUserAttributes,
  updateUserAttributes,
} from "../../../apis/auth.api";
import { Auth } from "../../../utils/Auth";

const SettingDetail: React.FC<{ userAttributes: UserAttributes }> = ({
  userAttributes,
}) => {
  const navigate = useNavigate();
  const [phone_number, setPhoneNumber] = useState(userAttributes.phone_number);
  const [birthdate, setBirthdate] = useState(userAttributes.birthdate);
  const [address, setAddress] = useState(userAttributes.address);

  return (
    <div>
      <div className="absolute left-0 w-[289px] border-r border-gray-500 h-full">
        <div className="flex flex-col w-full h-full items-center">
          <ul className="w-full">
            <li>
              <button
                className="flex px-5 py-3 border-none w-full outline-none"
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
                className="flex px-5 py-3 border-none bg-red-300 w-full outline-none"
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
          <h1 className="text-6xl font-black text-center pt-2 pb-6 mb-8 border-b-2 border-gray-800">
            账 号 设 置
          </h1>
          <div className="border-t border-gray-300">
            <table className="font-bold w-full">
              <tr className="border-b border-gray-300">
                <th className="bg-gray-200 ">Email</th>
                <td className="py-4 pl-10">
                  {userAttributes.email_verified ? (
                    <div>
                      <p>{userAttributes.email}</p>
                      <span className="text-gray-500 text-sm flex items-center">
                        <AlertIcon className="w-[16px] h-[16px] mr-1 mb-[2px]" />
                        Default email cannot be changed.
                      </span>
                      <span className=" text-lime-600 text-sm flex items-center">
                        <CorrectIcon className="w-[16px] h-[16px] mr-1 mb-[2px]" />
                        Email Verified
                      </span>
                    </div>
                  ) : (
                    <div>
                      <p>{userAttributes.email}</p>
                      <span className="text-gray-500 text-sm flex items-center">
                        <AlertIcon className="w-[16px] h-[16px] mr-1 mb-[2px]" />
                        Email has not been verified.
                      </span>
                    </div>
                  )}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="bg-gray-200">用户名</th>
                <td className="py-4 pl-10">
                  <p>{userAttributes.username}</p>
                  <span className="text-gray-500 text-sm flex items-center">
                    <AlertIcon className="w-[16px] h-[16px] mr-1 mb-[2px]" />
                    Username cannot be changed.
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="bg-gray-200">姓名</th>
                <td className="py-4 pl-10">
                  <p>{userAttributes.name}</p>
                  <span className="text-gray-500 text-sm flex items-center">
                    <AlertIcon className="w-[16px] h-[16px] mr-1 mb-[2px]" />
                    Name used for registration cannot be changed.
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="bg-gray-200 ">电话</th>
                <td className="py-4 pl-10">
                  <input
                    className="border p-2 outline-none border-black w-[200px]"
                    placeholder="+64..."
                    defaultValue={userAttributes.phone_number}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  ></input>
                  {userAttributes.phone_number_verified ? (
                    <div>
                      <span className=" text-lime-600 text-sm flex items-center">
                        <CorrectIcon className="w-[16px] h-[16px] mr-1 mb-[2px]" />
                        Phone number verified
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-gray-500 text-sm flex items-center">
                        <AlertIcon className="w-[16px] h-[16px] mr-1 mb-[2px]" />
                        Phone number has not been verified.
                      </span>
                    </div>
                  )}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="bg-gray-200 ">生日</th>
                <td className="py-4 pl-10">
                  <div>
                    <input
                      type="date"
                      defaultValue={userAttributes.birthdate}
                      className="border-black w-[200px]"
                      onChange={(e) => {
                        setBirthdate(e.target.value);
                      }}
                    ></input>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="bg-gray-200 ">地址</th>
                <td className="py-4 pl-10">
                  <div>
                    <input
                      defaultValue={userAttributes.address}
                      className="border p-2 outline-none border-black w-[200px]"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    ></input>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              className="outline-none border border-subRed w-[200px] h-[80px] text-2xl font-black text-subRed rounded-lg m-4"
              onClick={() => {
                window.location.reload();
              }}
            >
              放弃更改
            </button>
            <button
              className="outline-none border-none bg-subRed w-[200px] h-[80px] text-2xl font-black text-white rounded-lg m-4"
              onClick={async () => {
                await updateUserAttributes(userAttributes.username, {
                  birthdate: birthdate,
                  address: address,
                  phone_number: phone_number,
                }).catch((err) => {
                  console.log(err);
                });
                await getUserAttributes(Auth.getAuthToken())
                  .then((res) => {
                    console.log(res.data.data);

                    Auth.setUserAttributes(
                      userAttributes.username,
                      res.data.data
                    );
                  })
                  .then(() => {
                    window.location.reload();
                  });
              }}
            >
              确认更改
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingDetail;
