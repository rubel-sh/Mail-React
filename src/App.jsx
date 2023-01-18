import React from "react";
import { RouterProvider } from "react-router-dom";
import MailProvider from "./context/MailProvider";
import { router } from "./router/router";

const App = () => {
  return (
    <MailProvider>
      <RouterProvider router={router}></RouterProvider>;
    </MailProvider>
  );
};

export default App;
