import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Pages/Login/Login";
import Overview from "./Pages/Overview/Overview";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "overview",
          element: <Overview/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    }
  ])