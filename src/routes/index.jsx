import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Item from "../pages/Item";
import Category from "../pages/Category";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />, //JSX.Element / React.ReactNode
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
