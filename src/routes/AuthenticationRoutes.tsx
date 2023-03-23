import { lazy } from "react";
import Loadable from "../ui-components/Loadable";
import MinimalLayout from "../layout/MinimalLayout";
const AuthLogin = Loadable(lazy(() => import("../views/pages/auth/Login")));
const AuthRegister = Loadable(
  lazy(() => import("../views/pages/auth/Register"))
);
const VerifyOtp = Loadable(lazy(() => import("../views/pages/auth/VerifyOtp")));

const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/login",
      element: <AuthLogin />,
    },
    {
      path: "/register",
      element: <AuthRegister />,
    },
    {
      path: "/verifyotp",
      element: <VerifyOtp />,
    },
  ],
};

export default AuthenticationRoutes;
