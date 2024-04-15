import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "../utils/Auth";

const ProtectedRoutes: React.FC = () => {
  const isAuth = Auth.isAuth();
  return isAuth ? <Outlet /> : <Navigate to="/authentication" />;
};

export default ProtectedRoutes;
