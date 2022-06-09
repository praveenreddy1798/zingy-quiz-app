import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../context";

const RestrictedRoute = () => {
  const {
    auth: { isAuth },
  } = useAuth();
  const location = useLocation();
  return isAuth ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export { RestrictedRoute };
