import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignPage from "../pages/SignPage";
import App from "../App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/:sign",
        element: <SignPage />,
      },
    ],
  },
]);
