import Home from "@/components/home/Home";
import NotFound from "@/components/shared/NotFound/NotFound";
import Layout from "@/Layouts/Layout";

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
    ],
  },
]);

export default router;
