import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Counter from "../components/Counter";
import Todo from "../components/Todo";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Counter />,
      },

      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },
]);

export default router;
