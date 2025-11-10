import { createBrowserRouter } from "react-router";
import Home from "./page/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

export default Route;
