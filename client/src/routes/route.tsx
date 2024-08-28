import Home from "@/components/home/Home";
import NotFound from "@/components/shared/NotFound/NotFound";
import Layout from "@/Layouts/Layout";
import Team from "@/pages/Team";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
]);

export default router;
