import { RouterProvider, createBrowserRouter } from "react-router";
import { Desktop } from "./Desktop";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Desktop,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
