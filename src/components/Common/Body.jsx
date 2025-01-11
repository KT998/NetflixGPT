import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserProfile from "../Authentication/UserProfile";
import Home from "../../pages/Home";
import Browse from "../../pages/Browse";
import Root from "../../pages/Root";
import Error from "../../pages/Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: '/error',
        element: <Error />
      }
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
