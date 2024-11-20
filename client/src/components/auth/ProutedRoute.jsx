import { Navigate, Outlet } from "react-router-dom";
const ProutedRoute = ({ children, user, redirect = "/login" }) => {
  if (!user) {
    return <Navigate to={redirect} />;
  }
  return children ? children : <Outlet />;
};

export default ProutedRoute;
