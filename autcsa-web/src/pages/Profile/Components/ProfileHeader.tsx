import { useEffect, useState } from "react";
import { Auth } from "../../../utils/Auth";
import csaLogo from "../../../assets/csaLogo.png";
import { getUserGroup } from "../../../apis/auth.api";
import { useNavigate } from "react-router-dom";

const ProfileHeader: React.FC = () => {
  const navigate = useNavigate();
  const [userAttributes, setUserAttributes] = useState(Auth.getUserAttribute());
  const [userGroup, setUserGroup] = useState([]);
  const [open, setOpen] = useState(false);

  const renderOnGroup = () => {
    switch (userGroup[0]) {
      case "autcsa_standard_users":
        return (
          <div className="rounded-md text-blue-500 text-xl font-semibold shadow-lg p-2">
            <p>试用会员</p>
          </div>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const get = async () => {
      const res = await getUserGroup(Auth.getAuthToken());
      setUserGroup(res.data.data);
    };
    get().catch(console.error);
    return () => setUserGroup([]);
  }, []);
  return (
    <header className="flex-row h-28 items-center font-bold mx-32 my-5">
      <div>
        <a
          href="http://localhost:3000/homePage"
          className="absolute z-10 h-24 ml-2 mt-2"
        >
          <img src={csaLogo} alt="" className=" h-24" />
        </a>
        <nav className="w-full h-28 pl-40 flex items-center justify-items-center">
          <div className="pl-10 border-l border-gray-500 h-20 flex items-center">
            <h1 className="font-black text-4xl"></h1>
          </div>

          <div
            className="flex items-center justify-items-center absolute right-0 mr-32 z-10"
            id="rightBox"
          >
            {renderOnGroup()}
            <div
              className="flex items-center justify-items-center hover:cursor-pointer"
              onMouseEnter={() => {
                setOpen(true);
              }}
              onMouseLeave={() => {
                setOpen(false);
              }}
            >
              <a className="h-12 ml-6">
                <img
                  src={userAttributes.picture}
                  alt=""
                  className="h-12 rounded-full"
                />
              </a>
              <h2 className="font-black text-2xl px-6">
                {userAttributes.username}
              </h2>
              <div
                className={`box-border bg-white rounded-xl shadow-allAround p-2  ${
                  open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } transition-all duration-300 ease-in-out overflow-hidden z-20 absolute right-12 top-12`}
              >
                <ul
                  className={`min-w-full ${
                    open ? "max-h-96" : "max-h-0"
                  } transition-all duration-200 ease-in-out z-20`}
                >
                  <li
                    className=" hover:cursor-pointer"
                    onClick={() => {
                      Auth.logout();
                      navigate("/homePage");
                    }}
                  >
                    <p>登出账号</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default ProfileHeader;
