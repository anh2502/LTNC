import { useRoutes } from "react-router-dom";
import Layout from "./layouts/layout";
// import AdminLayout from "./layouts/AdminLayout";
import HomePage from "./page/home";
export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
      ],
    },

  ]);
  return routes;
}
