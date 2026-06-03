import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Counter from "../components/Counter";
import Todo from "../components/Todo";
import Login from "../components/Login";
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


      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
