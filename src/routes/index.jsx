import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Counter from "../components/Counter";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Counter />,
      },
    ],
  },
]);

export default router;
