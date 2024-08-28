import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route.tsx";
import ReduxProviders from "./Providers/ReduxProvider.tsx";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProviders>
      {/* <PersistGate persistor={persistor}> */}
      <RouterProvider router={router} />
      {/* </PersistGate> */}
      {/* <ToastContainer /> */}
    </ReduxProviders>
  </React.StrictMode>
);
