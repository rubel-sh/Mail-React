import { createBrowserRouter } from "react-router-dom";
import Custom from "../components/Dashboard/MailSection/Custom/Custom";
import Deleted from "../components/Dashboard/MailSection/Deleted/Deleted";
import Inbox from "../components/Dashboard/MailSection/Inbox/Inbox";
import Spam from "../components/Dashboard/MailSection/Spam/Spam";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "inbox",
        element: <Inbox />,
      },
      {
        path: "spam",
        element: <Spam />,
      },
      {
        path: "deleted",
        element: <Deleted />,
      },
      {
        path: "custom",
        element: <Custom />,
      },
    ],
  },
]);
