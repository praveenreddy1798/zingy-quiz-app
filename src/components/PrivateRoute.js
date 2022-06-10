import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../context";

const PrivateRoute = () => {
  const {
    auth: { isAuth },
  } = useAuth();
  const location = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { PrivateRoute };
