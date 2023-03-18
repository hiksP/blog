import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ loggedIn, component }) => {
  return loggedIn ? component : <Navigate to="/" />;
};
