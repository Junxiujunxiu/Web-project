import { Link } from "react-router-dom";
import { Auth } from "../../utils/Auth";

const AvatarDropdown: React.FC<{ open: boolean }> = ({ open = false }) => {
  return (
    <div
      className={`box-border bg-white rounded-xl shadow-allAround p-2  ${
        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      } transition-all duration-300 ease-in-out overflow-hidden z-20 absolute -right-4 top-14`}
    >
      <ul
        className={`min-w-full ${
          open ? "max-h-96" : "max-h-0"
        } transition-all duration-200 ease-in-out z-20`}
      >
        <li className=" hover:cursor-pointer">
          <Link to={"/profile/dashboard"}>个人中心</Link>
        </li>
        <div className="h-[1px] w-full border border-black my-1" />
        <li
          className=" hover:cursor-pointer"
          onClick={() => {
            Auth.logout();
            window.location.reload();
          }}
        >
          <p>登出账号</p>
        </li>
      </ul>
    </div>
  );
};

export default AvatarDropdown;
