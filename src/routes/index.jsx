import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Counter from "../components/Counter";
import Todo from "../components/Todo";
import Login from "../components/Login";
import ProtectedRoute from "../components/ProtectedRoute";
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
        element: (
          <ProtectedRoute>
            <Todo />
          </ProtectedRoute>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
