import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute() {
  const auth = { token: true };

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
