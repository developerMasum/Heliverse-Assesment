import Home from "@/components/home/Home";

import NotFound from "@/components/shared/NotFound/NotFound";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

export default router;
