import { ReactElement } from "react";
import { FC } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: FC<{
  loggedIn: boolean;
  component: ReactElement;
}> = ({ loggedIn, component }) => {
  return loggedIn ? component : <Navigate to="/" />;
};
