import { lazy } from "react";

// project imports
import MainLayout from "../layout/MainLayout/Header";
import Loadable from "../ui-components/Loadable";
import MinimalLayout from "../layout/MinimalLayout";
import Protectedroutes from "./protectedRoutes";

const HomePage = Loadable(lazy(() => import("../views/HomePage")));
const About = Loadable(lazy(() => import("../views/About")));
const Services = Loadable(lazy(() => import("../views/Services")));
const Orders = Loadable(lazy(() => import("../views/Orders")));
const Contact = Loadable(lazy(() => import("../views/Contact")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <Protectedroutes component={<MainLayout />} />,
  children: [
    {
      path: "homepage",
      element: <Protectedroutes component={<HomePage />} />,
    },
    {
      path: "about",
      element: <Protectedroutes component={<About />} />,
    },
    {
      path: "services",
      element: <Protectedroutes component={<Services />} />,
    },
    {
      path: "orders",
      element: <Protectedroutes component={<Orders />} />,
    },
    {
      path: "contact",
      element: <Protectedroutes component={<Contact />} />,
    },
    
  ],
};

export default MainRoutes;
