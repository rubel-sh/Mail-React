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
        loader: async () => fetch("inbox.json"),
      },
      {
        path: "inbox",
        element: <Inbox />,
        loader: async () => fetch("inbox.json"),
      },
      {
        path: "spam",
        element: <Spam />,
        loader: async () => fetch("spam.json"),
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
